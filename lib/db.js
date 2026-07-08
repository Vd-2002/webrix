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
    desc: "A blazing fast headless retail checkout store integrated with Shopify Storefront APIs and Stripe Payment networks.",
    metric: "99.8% Core Web Vitals Score",
    technologies: ["Next.js", "Stripe API", "Shopify Engine", "Serverless"],
    color: "#60A5FA"
  },
  {
    id: "apex-custom-erp",
    name: "Apex Custom ERP System",
    category: "Custom Software Development",
    industry: "Manufacturing & Logistics",
    tag: "Operations & HR Portal",
    desc: "A bespoke enterprise dashboard connecting supply chain management, real-time inventory tracking, and employee payroll logs.",
    metric: "99.99% SLA Uptime Guarantee",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "#A78BFA"
  },
  {
    id: "webrix-rider-app",
    name: "Webrix Delivery Rider App",
    category: "Mobile App Development",
    industry: "Logistics",
    tag: "iOS & Android Tracking App",
    desc: "A custom real-time mobile application for delivery fleet dispatching, dynamic geolocation routing, and automatic customer sms triggers.",
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
    desc: "A targeted search marketing and crawlability audit that restructured meta schemas and optimized index headers to boost search rankings.",
    metric: "+140% YoY Search Visibility",
    technologies: ["Google Analytics", "GTM", "Puppeteer", "Sitemaps SEO"],
    color: "#F472B6"
  },
  {
    id: "cognitive-vector-assistant",
    name: "Cognitive Vector Chat Assistant",
    category: "AI Automation",
    industry: "Customer Support",
    tag: "Serverless LLM Agent",
    desc: "An intelligent support system parsing company wikis and customer emails via vector embeddings to handle automated response chains.",
    metric: "92% Help Desk Automation",
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
