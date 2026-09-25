import { NextResponse } from "next/server";
import { getDb, seedDbIfEmpty, getAllProjects } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";

// Public: Get all projects
export async function GET() {
  try {
    const projects = await getAllProjects();
    return NextResponse.json({ success: true, projects }, { status: 200 });
  } catch (error) {
    console.error("GET Projects API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// Admin only: Create a new project
export async function POST(req) {
  try {
    const admin = getAuthUser(req);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const db = await getDb();
    const body = await req.json();

    const { name, category, industry, tag, desc, metric, technologies, color, image } = body;

    if (!name || !category || !desc) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (name, category, desc)" },
        { status: 400 }
      );
    }

    // Generate clean ID from name
    const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

    const newProject = {
      id,
      name,
      category,
      industry: industry || "General",
      tag: tag || "",
      desc,
      metric: metric || "Delivered",
      technologies: Array.isArray(technologies) ? technologies : [],
      color: color || "#60A5FA",
      image: image || "/project_healthcare.png", // fallback image
      createdAt: new Date()
    };

    const result = await db.collection("projects").insertOne(newProject);
    return NextResponse.json({ success: true, project: newProject, result }, { status: 201 });
  } catch (error) {
    console.error("POST Project API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
