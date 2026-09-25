import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
  connectTimeoutMS: 5000,
  serverSelectionTimeoutMS: 5000
};

let client;
let clientPromise;

export function getClientPromise() {
  if (clientPromise) return clientPromise;

  if (!uri) {
    throw new Error("Please add your MONGODB_URI to .env.local");
  }

  client = new MongoClient(uri, options);

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = client.connect();
  }

  return clientPromise;
}

export async function getDb() {
  const promise = getClientPromise();
  const activeClient = await promise;
  return activeClient.db("webrix");
}

import { ALL_PROJECTS } from "./projectsData";

// Seed projects from complete portfolio catalog
export const SEED_PROJECTS = ALL_PROJECTS;

// Helper to seed projects if collection is empty or out of sync
export async function seedDbIfEmpty() {
  try {
    const db = await getDb();
    const projectsCol = db.collection("projects");
    const count = await projectsCol.countDocuments();
    if (count === 0) {
      console.log("Seeding initial projects to MongoDB...");
      await projectsCol.insertMany(SEED_PROJECTS);
      console.log("Seeding completed successfully.");
    }
  } catch (error) {
    console.warn("Database seeding skipped or failed (falling back to static projects):", error.message || error);
  }
}

// Resilient query helper for all projects (with automatic fallback)
export async function getAllProjects() {
  try {
    if (process.env.MONGODB_URI) {
      await seedDbIfEmpty();
      const db = await getDb();
      const projects = await db.collection("projects").find({}).toArray();
      if (projects && projects.length > 0) {
        return projects;
      }
    }
  } catch (err) {
    console.warn("MongoDB query failed, falling back to static project data:", err.message);
  }
  return ALL_PROJECTS;
}

// Resilient query helper for single project by ID (with automatic fallback)
export async function getProjectById(id) {
  try {
    if (process.env.MONGODB_URI) {
      const db = await getDb();
      const project = await db.collection("projects").findOne({ id });
      if (project) return project;
    }
  } catch (err) {
    console.warn("MongoDB query failed for single project, falling back to static data:", err.message);
  }
  return ALL_PROJECTS.find((p) => p.id === id) || null;
}

