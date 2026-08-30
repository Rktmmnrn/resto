"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu-items";

export function MenuExplorer() {
  const [active, setActive] = useState<MenuCategory>("special menu");
  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-wrap justify-center gap-3 w-full" role="tablist" aria-label="Catégories du menu">
        {menuCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={`border px-6 py-3 font-body text-xs uppercase tracking-wide transition-colors
              ${active === cat
                ? "border-gold bg-gold text-ink"
                : "border-gold text-gold hover:bg-gold hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid w-4/5 min-w-[320px] lg:w-full grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2 bg-ink px-10 py-12">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3 font-display text-lg uppercase text-white">
                <span>{item.name}</span>
                <span className="h-px flex-1 border-t border-white/40" />
                <span>{item.price}</span>
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-white/70">{item.description}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
