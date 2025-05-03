"use client";

import { useEffect, useState } from "react";

export function SafeHydrate({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return children;
}
