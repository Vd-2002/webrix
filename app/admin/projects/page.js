"use client";

import { useState, useEffect, Suspense } from "react";
import { 
  FolderKanban, 
  Plus, 
  Trash2, 
  Edit2, 
  Eye, 
  Tag, 
  AlertTriangle,
  X,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";

function ProjectsCrudContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialAction = searchParams.get("action"); // 'new' or null

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // false (list) | true (form)
  const [editProject, setEditProject] = useState(null); // null (create mode) | project (edit mode)
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    name: "",
    category: "Website Development",
    industry: "",
    tag: "",
    desc: "",
    metric: "",
    technologies: "",
    color: "#60A5FA",
    image: "/project_healthcare.png"
  });

  const categories = [
    "Website Development",
    "Custom Software Development",
    "Mobile App Development",
    "Digital Marketing",
    "AI Automation"
  ];

  const imageOptions = [
    { label: "Red (Healthcare)", value: "/project_healthcare.png" },
    { label: "Yellow (Manufacturing)", value: "/project_manufacturing.png" },
    { label: "Blue (Real Estate)", value: "/project_realestate.png" },
    { label: "Pink/Magento (Retail)", value: "/project_retail.png" }
  ];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (initialAction === "new") {
      openCreateForm();
    }
  }, [initialAction]);

  async function fetchProjects() {
    try {
      setLoading(true);
      const res = await fetch("/api/projects");
      const data = await res.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    } finally {
      setLoading(false);
    }
  }

  const openCreateForm = () => {
    setEditProject(null);
    setFormData({
      name: "",
      category: "Website Development",
      industry: "",
      tag: "",
      desc: "",
      metric: "",
      technologies: "",
      color: "#60A5FA",
      image: "/project_healthcare.png"
    });
    setIsEditing(true);
  };

  const openEditForm = (proj) => {
    setEditProject(proj);
    setFormData({
      name: proj.name,
      category: proj.category,
      industry: proj.industry || "",
      tag: proj.tag || "",
      desc: proj.desc || "",
      metric: proj.metric || "",
      technologies: Array.isArray(proj.technologies) ? proj.technologies.join(", ") : "",
      color: proj.color || "#60A5FA",
      image: proj.image || "/project_healthcare.png"
    });
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.desc.trim()) {
      alert("Name and description are required.");
      return;
    }

    setActionLoading(true);

    // Format technologies from comma-separated string to array
    const techArray = formData.technologies
      .split(",")
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const payload = {
      ...formData,
      technologies: techArray
    };

    try {
      let res;
      if (editProject) {
        // Edit Operation
        res = await fetch(`/api/projects/${editProject.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      } else {
        // Create Operation
        res = await fetch("/api/projects", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      }

      const data = await res.json();
      if (data.success) {
        setIsEditing(false);
        setEditProject(null);
        fetchProjects();
        // Clear search parameters if navigated via quick add
        router.push("/admin/projects");
      } else {
        alert(data.message || "Failed to commit project changes.");
      }
    } catch (err) {
      console.error("Form submit failed:", err);
      alert("An error occurred during network transmit.");
    } finally {
      setActionLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setActionLoading(true);
    try {
      const res = await fetch(`/api/projects/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setProjects(projects.filter(p => p.id !== id));
        setDeleteConfirmId(null);
      } else {
        alert(data.message || "Failed to delete project.");
      }
    } catch (err) {
      console.error("Delete project failed:", err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-10 relative z-10">
      
      {/* Page Header */}
      <div className="flex items-center justify-between gap-6 flex-wrap text-left">
        <div className="space-y-1.5">
          <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">
            Portfolio CMS
          </h1>
          <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
            Manage public portfolio showcase details
          </p>
        </div>

        {!isEditing && (
          <button
            onClick={openCreateForm}
            className="h-10 px-5 bg-[#60A5FA] text-black hover:bg-[#60A5FA]/90 font-bold font-display text-xs tracking-wider uppercase rounded-xl flex items-center gap-1.5 cursor-pointer shadow-lg shadow-[#60A5FA]/10 transition-all hover:shadow-[#60A5FA]/20"
          >
            <Plus className="w-4.5 h-4.5 text-black" />
            Add New Project
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isEditing ? (
          /* Create/Edit Project Form */
          <motion.div
            key="project-form"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden text-left"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />

            <div className="flex items-center justify-between pb-6 border-b border-white/5 mb-8">
              <h2 className="text-lg font-bold font-display text-white tracking-tight flex items-center gap-2">
                <FolderKanban className="w-5 h-5 text-[#60A5FA]" />
                {editProject ? `Modify Project: ${editProject.name}` : "Log New Project"}
              </h2>
              <button
                onClick={() => {
                  setIsEditing(false);
                  router.push("/admin/projects");
                }}
                className="w-7 h-7 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Project Name */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Project Title
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. Webrix Delivery Rider App"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                  />
                </div>

                {/* Scope Category */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block">
                    Scope Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-[#070712] text-xs text-white focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all cursor-pointer"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Industry */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Industry Sector
                  </label>
                  <input
                    type="text"
                    name="industry"
                    placeholder="E.g. Logistics & Supply Chain"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                  />
                </div>

                {/* Project Tag */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Project Tagline / Badge
                  </label>
                  <input
                    type="text"
                    name="tag"
                    placeholder="E.g. iOS & Android Geolocation App"
                    value={formData.tag}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Key Metric */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Core Outcome Metric
                  </label>
                  <input
                    type="text"
                    name="metric"
                    placeholder="E.g. +45% Conversion Lift or 99.9% Uptime"
                    value={formData.metric}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                  />
                </div>

                {/* Technologies List */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                    Technologies (Comma Separated)
                  </label>
                  <input
                    type="text"
                    name="technologies"
                    placeholder="React Native, Expo SDK, Google Maps, WebSockets"
                    value={formData.technologies}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Accent Color picker */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block">
                    Accent/Glow HEX Color
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="color"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      className="w-11 h-11 p-1 rounded-xl border border-white/10 bg-white/[0.02] focus:outline-none cursor-pointer shrink-0"
                    />
                    <input
                      type="text"
                      name="color"
                      placeholder="#60A5FA"
                      value={formData.color}
                      onChange={handleInputChange}
                      className="w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white focus:outline-none focus:border-white/20 transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Mockup Image Template selection */}
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest block">
                    Mockup Frame Layout
                  </label>
                  <select
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full h-11 px-4 rounded-xl border border-white/10 bg-[#070712] text-xs text-white focus:outline-none focus:border-white/20 transition-all cursor-pointer"
                  >
                    {imageOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Brief Description */}
              <div className="space-y-1.5">
                <label className="text-[9px] font-mono font-bold text-white/40 uppercase tracking-widest">
                  Brief Project Description
                </label>
                <textarea
                  name="desc"
                  rows={4}
                  required
                  placeholder="Outline the client's problem, your technical solution details, and how it optimized their operations..."
                  value={formData.desc}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-white placeholder-white/20 focus:outline-none focus:border-white/20 focus:bg-white/[0.04] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/5 flex justify-end gap-3.5">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-6 py-2.5 border border-white/10 hover:border-white/20 rounded-xl text-xs font-mono font-semibold uppercase tracking-wider text-white cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-6 py-2.5 bg-[#60A5FA] text-black hover:bg-[#60A5FA]/90 text-xs font-bold font-display uppercase tracking-wider rounded-xl disabled:opacity-50 cursor-pointer"
                >
                  {actionLoading ? "Transmitting..." : "Save Project Spec"}
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          /* Projects List Dashboard */
          <motion.div
            key="projects-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl"
          >
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#60A5FA]"></div>
                <span className="text-xs font-mono text-white/30">Loading Projects Database...</span>
              </div>
            ) : projects.length === 0 ? (
              <div className="py-24 text-center text-sm font-mono text-white/30">
                No projects logged in the database. Use the button above to add one.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left font-sans text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.01] text-white/40 text-[10px] font-mono uppercase tracking-wider select-none">
                      <th className="p-5 font-bold">Project Name</th>
                      <th className="p-5 font-bold">Category</th>
                      <th className="p-5 font-bold">Industry</th>
                      <th className="p-5 font-bold">Key Metric</th>
                      <th className="p-5 font-bold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {projects.map((proj) => (
                      <tr key={proj.id} className="hover:bg-white/[0.01] transition-colors group">
                        <td className="p-5 font-semibold text-white truncate max-w-[200px] flex items-center gap-3">
                          <span 
                            className="w-1.5 h-6 rounded shrink-0"
                            style={{ backgroundColor: proj.color || "#60A5FA" }}
                          />
                          <span>{proj.name}</span>
                        </td>
                        <td className="p-5">
                          <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA]">
                            {proj.category.split(" ")[0]}
                          </span>
                        </td>
                        <td className="p-5 text-white/60 font-sans">{proj.industry}</td>
                        <td className="p-5 text-[#34D399] font-mono font-bold">{proj.metric}</td>
                        <td className="p-5 text-right space-x-2">
                          <a
                            href={`/portfolio/${proj.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-7 h-7 border border-white/10 hover:border-white/20 rounded-lg inline-flex items-center justify-center text-white/60 hover:text-white transition-colors"
                            title="Preview Public Page"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </a>
                          <button
                            onClick={() => openEditForm(proj)}
                            className="w-7 h-7 border border-white/10 hover:border-[#60A5FA]/20 rounded-lg inline-flex items-center justify-center text-white/60 hover:text-[#60A5FA] transition-colors cursor-pointer"
                            title="Edit Project"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(proj.id)}
                            className="w-7 h-7 border border-white/10 hover:border-red-500/20 rounded-lg inline-flex items-center justify-center text-white/60 hover:text-red-400 transition-colors cursor-pointer"
                            title="Delete Project"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Alert Modal */}
      <AnimatePresence>
        {deleteConfirmId && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="border border-red-500/20 bg-[#0c0303] rounded-3xl p-6 sm:p-8 max-w-[380px] w-full text-center space-y-6"
            >
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold font-display text-white tracking-tight">Delete Project Spec?</h3>
                <p className="text-xs text-white/40 leading-relaxed font-sans font-light">
                  Are you sure you want to delete this project from the showcase database? This cannot be undone.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  disabled={actionLoading}
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 h-9 border border-white/10 hover:border-white/20 rounded-xl text-[10px] font-mono font-semibold uppercase tracking-wider text-white disabled:opacity-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  disabled={actionLoading}
                  onClick={() => handleDelete(deleteConfirmId)}
                  className="flex-1 h-9 bg-red-500 text-white hover:bg-red-600 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  {actionLoading ? "Deleting..." : "Confirm Delete"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function AdminProjectsPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#60A5FA]"></div>
        <span className="text-xs font-mono text-white/30">Initializing CMS Console...</span>
      </div>
    }>
      <ProjectsCrudContent />
    </Suspense>
  );
}
