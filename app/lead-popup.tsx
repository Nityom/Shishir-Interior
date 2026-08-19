"use client";

import { useEffect, useState } from "react";

export default function LeadPopup({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="lead-popup-overlay" onClick={close}>
      <div className="lead-popup" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lead-popup-close" aria-label="Close" onClick={close}>✕</button>
        <div className="lead-popup-heading"><p>CUSTOMIZE YOUR DREAM ROOM</p><h2>Interior Design Cost Calculator</h2><span>Get an instant estimate for your project</span></div>
        {children}
      </div>
    </div>
  );
}
