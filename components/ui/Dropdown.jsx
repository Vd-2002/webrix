"use client";

import { useState, useRef, useEffect } from "react";

export default function Dropdown({ label, options = [], value, onChange, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => {
    const val = typeof opt === "object" ? opt.value : opt;
    return val === value;
  });

  const displayLabel = selectedOption
    ? (typeof selectedOption === "object" ? selectedOption.label : selectedOption)
    : "Select an option";

  const handleSelect = (val) => {
    if (onChange) {
      onChange(val);
    }
    setIsOpen(false);
  };

  return (
    <div className="w-full space-y-1.5" ref={containerRef}>
      {label && (
        <label className="block text-xs font-bold text-foreground/70 uppercase tracking-wider font-sans">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-md border border-border bg-background/50 hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-accent transition-all font-sans text-sm cursor-pointer text-left ${className}`}
        >
          <span>{displayLabel}</span>
          <svg
            className={`h-4 w-4 text-foreground/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Options List */}
        {isOpen && (
          <div className="absolute left-0 z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-100">
            <div className="py-1 max-h-60 overflow-y-auto">
              {options.map((option) => {
                const optVal = typeof option === "object" ? option.value : option;
                const optLabel = typeof option === "object" ? option.label : option;
                const isSelected = optVal === value;

                return (
                  <button
                    key={optVal}
                    type="button"
                    onClick={() => handleSelect(optVal)}
                    className={`w-full text-left px-4 py-2.5 text-sm font-sans transition-colors cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    <span>{optLabel}</span>
                    {isSelected && (
                      <svg
                        className="h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
