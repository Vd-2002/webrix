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

// Initial seed projects matching the 5 new services
const SEED_PROJECTS = [
  {
    id: "vanguard-headless-store",
    name: "Vanguard Headless Store",
    category: "Website Development",
    industry: "Retail & E-commerce",
    tag: "E-Commerce Checkout Engine",
    desc: "A fast custom online store with a secure Stripe checkout and Shopify connection.",
    metric: "99.8% Load Speed Score",
    technologies: ["Next.js", "Stripe API", "Shopify Engine", "Serverless"],
    color: "#60A5FA"
  },
  {
    id: "apex-custom-erp",
    name: "Apex Custom ERP System",
    category: "Custom Software Development",
    industry: "Manufacturing & Logistics",
    tag: "Operations & HR Portal",
    desc: "A custom business dashboard for tracking inventory, managing staff, and viewing payment reports.",
    metric: "99.99% Server Uptime",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "#A78BFA"
  },
  {
    id: "webrix-rider-app",
    name: "Webrix Delivery Rider App",
    category: "Mobile App Development",
    industry: "Logistics",
    tag: "iOS & Android Tracking App",
    desc: "A custom mobile app for delivery tracking, live maps routing, and automatic customer SMS alerts.",
    metric: "4.8/5 App Store Rating",
    technologies: ["React Native", "Expo", "Google Maps API", "WebSockets"],
    color: "#34D399"
  },
  {
    id: "marketflow-seo-campaign",
    name: "MarketFlow Auditing Campaign",
    category: "Digital Marketing",
    industry: "SaaS Startups",
    tag: "Organic Growth Audit",
    desc: "A search engine audit and optimization that improved loading speeds and boosted organic search rankings.",
    metric: "+140% Google Search Ranking",
    technologies: ["Google Analytics", "GTM", "Puppeteer", "Sitemaps SEO"],
    color: "#F472B6"
  },
  {
    id: "cognitive-vector-assistant",
    name: "Cognitive Vector Chat Assistant",
    category: "AI Automation",
    industry: "Customer Support",
    tag: "Serverless LLM Agent",
    desc: "A smart customer support chat assistant that reads help guides and replies to common emails automatically.",
    metric: "92% Automated Replies",
    technologies: ["Python", "Pinecone DB", "LangChain", "OpenAI API"],
    color: "#F59E0B"
  }
];

// Helper to seed projects if collection is empty
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
    console.error("Database seeding failed:", error);
  }
}
