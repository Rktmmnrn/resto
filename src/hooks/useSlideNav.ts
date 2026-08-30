"use client";

import { useCallback, useState } from "react";

/**
 * Etat partagé entre le menu mobile (nav plein écran) et le panneau
 * d'infos desktop (InfoDrawer) : un seul bouton hamburger pilote les
 * deux, chacun n'étant visuellement actif qu'à son propre breakpoint.
 * (Dans l'ancien site, cette logique était dupliquée entre animation.js
 * et main.js, avec des sélecteurs différents — ici il n'y a plus qu'une source de vérité.)
 */
export function useSlideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
}
