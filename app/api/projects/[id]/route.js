import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { getAuthUser } from "@/lib/auth";

// Public: Get a single project by ID
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const db = await getDb();
    const project = await db.collection("projects").findOne({ id });

    if (!project) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, project }, { status: 200 });
  } catch (error) {
    console.error("GET Single Project API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Admin only: Update a project
export async function PUT(req, { params }) {
  try {
    const admin = getAuthUser(req);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const db = await getDb();
    const body = await req.json();

    const { name, category, industry, tag, desc, metric, technologies, color, image } = body;

    const existingProject = await db.collection("projects").findOne({ id });
    if (!existingProject) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    const updateFields = {};
    if (name) updateFields.name = name;
    if (category) updateFields.category = category;
    if (industry) updateFields.industry = industry;
    if (tag) updateFields.tag = tag;
    if (desc) updateFields.desc = desc;
    if (metric) updateFields.metric = metric;
    if (technologies) updateFields.technologies = Array.isArray(technologies) ? technologies : [];
    if (color) updateFields.color = color;
    if (image) updateFields.image = image;

    await db.collection("projects").updateOne(
      { id },
      { $set: updateFields }
    );

    return NextResponse.json({
      success: true,
      message: "Project updated successfully",
      project: { ...existingProject, ...updateFields }
    });
  } catch (error) {
    console.error("PUT Project API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Admin only: Delete a project
export async function DELETE(req, { params }) {
  try {
    const admin = getAuthUser(req);
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    const db = await getDb();
    
    const result = await db.collection("projects").deleteOne({ id });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully"
    });
  } catch (error) {
    console.error("DELETE Project API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
