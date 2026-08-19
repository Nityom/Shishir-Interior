import Image from "next/image";
import Header from "../header";
import CostCalculator from "../cost-calculator";
import { Experience, SiteFooter } from "../site-sections";

const offerings = [
  ["Detailed Project Report", "To transform a standard apartment into a modern, aesthetic, and functional home tailored to the client’s lifestyle, incorporating natural lighting, ergonomic furniture, and sustainable materials.", "/images/modern-residence.png"],
  ["2D Planning & Designing", "Our 2D floor planning service helps you see a clear layout of your home renovation room by room, wall by wall. We craft detailed and accurate plans based on your inputs.", "/images/service-planning.png"],
  ["Survey", "Help us understand your vision, lifestyle, and preferences. Your input allows us to craft personalized solutions that reflect your taste and maximize your space.", "/images/service-survey.jpg"],
  ["Construnction", "Ensure the longevity and performance of your structures with our expert building construction & maintenance services, tailored to meet your specific needs.", "/images/service-construction.jpg"],
  ["Interior Design", "Elevate spaces with our expert blend of aesthetics and functionality.", "/images/service-interior.jpeg"],
  ["Exterior Design", "Transform outdoor areas into visually appealing, well-planned spaces.", "/images/service-exterior.png"],
  ["Commercial Design", "Enhance brand identity and efficiency through strategic design.", "/images/service-commercial.jpeg"],
  ["Corporate Design", "Elevate your corporate image with solutions that harmonize functionality and aesthetics to create inspiring workspaces.", "/images/service-corporate.png"],
  ["Furniture", "Discover high-quality, stylish furniture that blends seamlessly with your interior design, providing comfort and aesthetics.", "/images/service-furniture.png"],
];

const faqs = ["What services does your architecture and interior design firm offer?", "How can I get started with your firm for my project?", "What is the typical process for a project with your firm?", "How long does a typical project take from start to finish?", "Can you work within my budget constraints?"];

export default function ServicePage() {
  return <main className="route-page"><Header /><section className="service-hero"><div><p>OUR SERVICES</p><h1>Innovative Services for Your Project</h1><span>At Shishir Consultants Pvt. Ltd., our expert interior and design services are devoted to transforming your dreams into beautifully crafted spaces. Explore our offerings and let&apos;s bring your vision to life.</span><a className="pill-link" href="/contact">Get Started <b>↗</b></a></div><Image src="/images/service-final.jpg" alt="Interior design service" fill priority sizes="100vw" /></section>
    <section className="offering-list">{offerings.map(([title, text, image], index) => <article className="offering" key={title}><div className="offering-number">0{index + 1}</div><div className="offering-image"><Image src={image} alt={title} fill sizes="45vw" /></div><div><h2>{title}</h2><p>{text}</p><a href="/contact">Learn More ↗</a></div></article>)}</section>
    <Experience />
    <section className="calculator"><p>CUSTOMIZE YOUR DREAM ROOM</p><h2>Interior Design Cost Calculator</h2><span>Get an instant estimate for your project</span><CostCalculator /></section>
    <section className="faq"><div className="faq-heading"><p>HAVE QUESTIONS?</p><h2>Frequently Asked Questions</h2></div><div className="faq-list">{faqs.map((question, index) => <details key={question} open={index === 0}><summary>{question}<b>→</b></summary><p>Our firm specializes in residential and commercial design, renovations, interior space planning, furniture selection, sustainable solutions, and complete project execution tailored to your goals.</p></details>)}</div><div className="faq-footer"><span>Still have any questions?</span><a className="view-tabs-primary" href="/contact">Contact Us <b>↗</b></a></div></section>
    <SiteFooter />
  </main>;
}