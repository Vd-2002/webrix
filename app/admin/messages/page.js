"use client";

import { useState, useEffect } from "react";
import { 
  Mail, 
  Trash2, 
  Eye, 
  Clock, 
  User, 
  Building2, 
  Layers, 
  X,
  AlertTriangle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    try {
      setLoading(true);
      const res = await fetch("/api/messages");
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (err) {
      console.error("Error loading messages:", err);
    } finally {
      setLoading(false);
    }
  }

  const handleDelete = async (id) => {
    setActionLoading(true);
    try {
      const res = await fetch(`/api/messages/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setMessages(messages.filter(m => m._id !== id));
        if (selectedMsg && selectedMsg._id === id) {
          setSelectedMsg(null);
        }
        setDeleteConfirmId(null);
      }
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-10 relative z-10">
      
      {/* Page Header */}
      <div className="space-y-1.5 text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-white font-display">
          Scoping Requests
        </h1>
        <p className="text-xs font-mono text-white/40 uppercase tracking-widest">
          Review project scopes & contact log inputs
        </p>
      </div>

      {/* Main content table/grid */}
      <div className="border border-white/10 bg-[#070712]/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#60A5FA]"></div>
            <span className="text-xs font-mono text-white/30">Ingesting Message Stream...</span>
          </div>
        ) : messages.length === 0 ? (
          <div className="py-24 text-center text-sm font-mono text-white/30">
            Queue empty. No messages registered in the database.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.01] text-white/40 text-[10px] font-mono uppercase tracking-wider select-none">
                  <th className="p-5 font-bold">Client Name</th>
                  <th className="p-5 font-bold">Email</th>
                  <th className="p-5 font-bold">Category</th>
                  <th className="p-5 font-bold">Logged At</th>
                  <th className="p-5 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {messages.map((msg) => (
                  <tr key={msg._id} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="p-5 font-semibold text-white truncate max-w-[150px]">
                      {msg.name}
                      {msg.company && (
                        <span className="block text-[10px] text-white/40 font-normal font-sans mt-0.5">
                          {msg.company}
                        </span>
                      )}
                    </td>
                    <td className="p-5 font-mono text-white/60">
                      <a href={`mailto:${msg.email}`} className="hover:underline hover:text-[#60A5FA]">
                        {msg.email}
                      </a>
                    </td>
                    <td className="p-5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#A78BFA]/20 bg-[#A78BFA]/5 text-[#A78BFA]">
                        {msg.category.split(" ")[0]}
                      </span>
                    </td>
                    <td className="p-5 text-white/40 font-mono flex items-center gap-1.5 mt-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                    </td>
                    <td className="p-5 text-right space-x-2">
                      <button
                        onClick={() => setSelectedMsg(msg)}
                        className="w-7 h-7 border border-white/10 hover:border-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors inline-flex cursor-pointer"
                        title="View Details"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setDeleteConfirmId(msg._id)}
                        className="w-7 h-7 border border-white/10 hover:border-red-500/20 rounded-lg flex items-center justify-center text-white/60 hover:text-red-400 transition-colors inline-flex cursor-pointer"
                        title="Delete Message"
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
      </div>

      {/* Details View Modal */}
      <AnimatePresence>
        {selectedMsg && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMsg(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            >
              <motion.div
                initial={{ scale: 0.95, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 10 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[540px] border border-white/10 bg-[#070712] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between"
              >
                {/* Modal Glow Header Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#A78BFA] to-transparent" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedMsg(null)}
                  className="absolute top-6 right-6 text-white/40 hover:text-white cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-6 text-left">
                  {/* Title */}
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono font-bold tracking-widest text-[#A78BFA] uppercase block">
                      SCOPING LOG METRIC
                    </span>
                    <h3 className="text-xl font-bold font-display text-white tracking-tight">
                      Inquiry Details
                    </h3>
                  </div>

                  {/* Metadata fields */}
                  <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-5">
                    <div className="space-y-1">
                      <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                        Sender Client
                      </span>
                      <div className="text-xs text-white flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#60A5FA]" />
                        {selectedMsg.name}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                        Company Name
                      </span>
                      <div className="text-xs text-white flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                        {selectedMsg.company || "None Registered"}
                      </div>
                    </div>

                    <div className="space-y-1 mt-1">
                      <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                        Scope Category
                      </span>
                      <div className="text-xs text-white flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-[#A78BFA]" />
                        {selectedMsg.category}
                      </div>
                    </div>

                    <div className="space-y-1 mt-1">
                      <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                        Logged Date
                      </span>
                      <div className="text-xs text-white flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#A78BFA]" />
                        {new Date(selectedMsg.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  {/* Email row */}
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                      Response channel
                    </span>
                    <a 
                      href={`mailto:${selectedMsg.email}`} 
                      className="text-xs text-[#60A5FA] hover:underline font-mono"
                    >
                      {selectedMsg.email}
                    </a>
                  </div>

                  {/* Message requirements */}
                  <div className="space-y-2">
                    <span className="text-[8px] font-mono font-bold text-white/30 tracking-widest uppercase block">
                      Project Specification Requirements
                    </span>
                    <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl font-sans text-xs text-white/70 leading-relaxed whitespace-pre-wrap max-h-[220px] overflow-y-auto">
                      {selectedMsg.message}
                    </div>
                  </div>
                </div>

                {/* Footer close button */}
                <div className="pt-6 border-t border-white/5 mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedMsg(null)}
                    className="px-5 py-2 bg-white text-black hover:bg-white/90 text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl cursor-pointer"
                  >
                    Close Log
                  </button>
                </div>

              </motion.div>
            </motion.div>
          </>
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
                <h3 className="text-lg font-bold font-display text-white tracking-tight">Delete Scoping Log?</h3>
                <p className="text-xs text-white/40 leading-relaxed font-sans font-light">
                  Are you sure you want to delete this scoping form permanently? This operation database mutation cannot be reverted.
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
