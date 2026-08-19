"use client";

import { useMemo, useState } from "react";

const roomTypes = ["Living Room", "Bedroom", "Kitchen", "Bathroom", "Dining Room", "Office/Study", "Entire Home"] as const;
const timelines = ["1–2 months", "2–3 months", "3–6 months", "6+ months"] as const;
const designStyles = ["Modern Contemporary", "Traditional", "Minimalist", "Luxury/Premium", "Scandinavian", "Industrial", "Bohemian"] as const;
const materialGrades = ["Budget-Friendly", "Mid-Range", "Premium", "Luxury"] as const;
const additionalServices = ["Space Planning", "3D Visualization", "Furniture Selection", "Color Consultation", "Lighting Design", "Project Management", "Site Supervision"] as const;
const budgetRanges = ["₹1–3 lakhs", "₹3–5 lakhs", "₹5–10 lakhs", "₹10–20 lakhs", "₹20+ lakhs"] as const;

const ratePerSqft: Record<(typeof materialGrades)[number], number> = {
  "Budget-Friendly": 150,
  "Mid-Range": 250,
  Premium: 400,
  Luxury: 650,
};

const styleMultiplier: Record<(typeof designStyles)[number], number> = {
  "Modern Contemporary": 1,
  Traditional: 1.05,
  Minimalist: 0.9,
  "Luxury/Premium": 1.3,
  Scandinavian: 1,
  Industrial: 1.1,
  Bohemian: 1.05,
};

const serviceFee: Record<(typeof additionalServices)[number], number> = {
  "Space Planning": 15000,
  "3D Visualization": 20000,
  "Furniture Selection": 40000,
  "Color Consultation": 8000,
  "Lighting Design": 25000,
  "Project Management": 30000,
  "Site Supervision": 20000,
};

type FormState = {
  roomType: string;
  area: string;
  timeline: string;
  designStyle: string;
  materialGrade: string;
  services: string[];
  budget: string;
  fullName: string;
  email: string;
  phone: string;
  location: string;
};

const initialForm: FormState = {
  roomType: "",
  area: "",
  timeline: timelines[0],
  designStyle: "",
  materialGrade: "",
  services: [],
  budget: budgetRanges[0],
  fullName: "",
  email: "",
  phone: "",
  location: "",
};

function formatInr(value: number) {
  return `₹${Math.round(value).toLocaleString("en-IN")}`;
}

export default function CostCalculator() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const estimate = useMemo(() => {
    const area = Number(form.area) || 0;
    const rate = ratePerSqft[form.materialGrade as keyof typeof ratePerSqft] ?? 0;
    const multiplier = styleMultiplier[form.designStyle as keyof typeof styleMultiplier] ?? 1;
    const roomMultiplier = form.roomType === "Entire Home" ? 1.15 : 1;
    const base = area * rate * multiplier * roomMultiplier;
    const servicesCost = form.services.reduce((sum, service) => sum + (serviceFee[service as keyof typeof serviceFee] ?? 0), 0);
    return base + servicesCost;
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  }

  function toggleService(service: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service) ? prev.services.filter((item) => item !== service) : [...prev.services, service],
    }));
  }

  function validateStep1() {
    const next: Record<string, string> = {};
    if (!form.roomType) next.roomType = "Room type is required";
    if (!form.area || Number(form.area) <= 0) next.area = "Enter a valid area";
    if (!form.designStyle) next.designStyle = "Design style is required";
    if (!form.materialGrade) next.materialGrade = "Material grade is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function validateStep2() {
    const next: Record<string, string> = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required";
    if (!form.email.trim() || !form.email.includes("@")) next.email = "Valid email is required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 10) next.phone = "Valid phone number is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((value) => Math.min(3, value + 1));
  }

  function goBack() {
    setStep((value) => Math.max(1, value - 1));
  }

  const whatsappMessage = [
    "Interior Design Estimate Request",
    `Room Type: ${form.roomType}`,
    `Area: ${form.area} sq ft`,
    `Design Style: ${form.designStyle}`,
    `Material Grade: ${form.materialGrade}`,
    `Additional Services: ${form.services.length ? form.services.join(", ") : "None"}`,
    `Budget Range: ${form.budget}`,
    `Timeline: ${form.timeline}`,
    `Estimated Cost: ${formatInr(estimate)}`,
    "",
    `Name: ${form.fullName}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone}`,
    `Location: ${form.location || "Not provided"}`,
  ].join("\n");

  const whatsappHref = `https://wa.me/918603009912?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="calculator-box">
      <div className="steps">
        {["Project Requirements", "Contact Details", "Estimate & Summary"].map((label, index) => (
          <div className={`step-indicator ${step === index + 1 ? "is-active" : ""} ${step > index + 1 ? "is-done" : ""}`} key={label}>
            <b>{step > index + 1 ? "✓" : index + 1}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="calculator-step">
          <label>Room Type *</label>
          <select value={form.roomType} onChange={(event) => update("roomType", event.target.value)}>
            <option value="" disabled>Select room type</option>
            {roomTypes.map((room) => <option key={room}>{room}</option>)}
          </select>
          {errors.roomType && <p className="field-error">{errors.roomType}</p>}

          <label>Area (sq ft) *</label>
          <input type="number" min="0" placeholder="e.g. 350" value={form.area} onChange={(event) => update("area", event.target.value)} />
          {errors.area && <p className="field-error">{errors.area}</p>}

          <label>Timeline</label>
          <select value={form.timeline} onChange={(event) => update("timeline", event.target.value)}>
            {timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}
          </select>

          <label>Design Style *</label>
          <select value={form.designStyle} onChange={(event) => update("designStyle", event.target.value)}>
            <option value="" disabled>Select design style</option>
            {designStyles.map((style) => <option key={style}>{style}</option>)}
          </select>
          {errors.designStyle && <p className="field-error">{errors.designStyle}</p>}

          <label>Material Grade *</label>
          <select value={form.materialGrade} onChange={(event) => update("materialGrade", event.target.value)}>
            <option value="" disabled>Select material grade</option>
            {materialGrades.map((grade) => <option key={grade}>{grade}</option>)}
          </select>
          {errors.materialGrade && <p className="field-error">{errors.materialGrade}</p>}

          <label>Additional Services</label>
          <div className="service-checklist">
            {additionalServices.map((service) => (
              <label className="service-option" key={service}>
                <input type="checkbox" checked={form.services.includes(service)} onChange={() => toggleService(service)} />
                {service}
              </label>
            ))}
          </div>

          <label>Budget Range</label>
          <select value={form.budget} onChange={(event) => update("budget", event.target.value)}>
            {budgetRanges.map((budget) => <option key={budget}>{budget}</option>)}
          </select>

          <div className="calculator-nav"><span /><button type="button" onClick={goNext}>Continue</button></div>
        </div>
      )}

      {step === 2 && (
        <div className="calculator-step">
          <label>Full Name *</label>
          <input type="text" placeholder="Your name" value={form.fullName} onChange={(event) => update("fullName", event.target.value)} />
          {errors.fullName && <p className="field-error">{errors.fullName}</p>}

          <label>Email *</label>
          <input type="email" placeholder="you@example.com" value={form.email} onChange={(event) => update("email", event.target.value)} />
          {errors.email && <p className="field-error">{errors.email}</p>}

          <label>Phone *</label>
          <input type="tel" placeholder="+91 00000 00000" value={form.phone} onChange={(event) => update("phone", event.target.value)} />
          {errors.phone && <p className="field-error">{errors.phone}</p>}

          <label>Location / City</label>
          <input type="text" placeholder="Patna, Bihar" value={form.location} onChange={(event) => update("location", event.target.value)} />

          <div className="calculator-nav"><button type="button" className="ghost" onClick={goBack}>Back</button><button type="button" onClick={goNext}>Continue</button></div>
        </div>
      )}

      {step === 3 && (
        <div className="calculator-step">
          <div className="estimate-display">
            <span>Estimated Cost</span>
            <strong>{formatInr(estimate)}</strong>
            <p>Final cost may vary based on detailed requirements, site conditions, and material availability.</p>
          </div>
          <ul className="estimate-summary">
            <li><span>Room Type</span><b>{form.roomType}</b></li>
            <li><span>Area</span><b>{form.area} sq ft</b></li>
            <li><span>Design Style</span><b>{form.designStyle}</b></li>
            <li><span>Material Grade</span><b>{form.materialGrade}</b></li>
            <li><span>Selected Services</span><b>{form.services.length ? form.services.join(", ") : "None"}</b></li>
            <li><span>Budget</span><b>{form.budget}</b></li>
            <li><span>Timeline</span><b>{form.timeline}</b></li>
            <li><span>Full Name</span><b>{form.fullName}</b></li>
            <li><span>Email</span><b>{form.email}</b></li>
            <li><span>Phone</span><b>{form.phone}</b></li>
            <li><span>Location</span><b>{form.location || "Not provided"}</b></li>
          </ul>
          <div className="calculator-nav"><button type="button" className="ghost" onClick={goBack}>Back</button><a className="whatsapp-button" href={whatsappHref} target="_blank" rel="noreferrer">Send via WhatsApp</a></div>
        </div>
      )}
    </div>
  );
}
