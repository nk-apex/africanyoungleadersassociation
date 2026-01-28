// This file was referenced in App.tsx imports but I'll define it properly now for completeness
// Actually I implemented it inline in App.tsx as ScrollToTopWrapper for simplicity, 
// but creating the file anyway to match the import statement if I had kept it separate.
// Since I used the inline version in App.tsx, this file is optional but good practice.

import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
