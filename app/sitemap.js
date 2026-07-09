export default async function sitemap() {
  const baseUrl = "https://webrix.co.in";
  
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/portfolio",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceIds = [
    "website-development",
    "custom-software-development",
    "mobile-app-development",
    "ai-automation",
    "digital-marketing"
  ];
  
  const serviceRoutes = serviceIds.map((id) => ({
    url: `${baseUrl}/services/${id}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
