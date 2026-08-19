import Image from "next/image";
import Link from "next/link";
import CostCalculator from "./cost-calculator";
import Header from "./header";
import HeroCarousel from "./hero-carousel";
import LeadPopup from "./lead-popup";
import { createPageMetadata } from "./seo";
import TeamSection from "./team-section";

export const metadata = createPageMetadata({
  title: "Interior Design & Architecture in Patna",
  description: "Shishir Consultants creates thoughtful residential and commercial interiors with architecture, construction, and complete project execution in Patna.",
  path: "/",
  absoluteTitle: true,
});

const services = ["Interior Design", "Exterior Design", "Commercial Design", "Home Decoration", "Building Maintenance"];

const projects = [
  { title: "Urban Nest", image: "/images/urban-nest.jpg", description: "Crafted to enhance productivity, encourage collaboration, and spark creativity, this contemporary workspace redefines the benchmark for modern corporate interiors" },
  { title: "Elevate Gym Space", image: "/images/elevate-gym.avif", description: "Engineered for performance and designed with precision, this gym interior blends functionality with aesthetic energy—creating a space that motivates movement, supports wellness, and reflects the power of purposeful design" },
  { title: "The White Haven", image: "/images/white-haven.png", description: "White Haven embodies serene elegance—where a palette of soft whites and clean lines create a calm, airy sanctuary that reflects simplicity, sophistication, and timeless design." },
];

export default function Home() {
  return (
    <main>
      <Header />
      <HeroCarousel />
      <LeadPopup>
        <CostCalculator />
      </LeadPopup>

      <section className="venture"><div><h2>Explore Our Other Venture</h2><p>Shishir Engicon is a trusted name in engineering and construction solutions.</p></div><a className="pill-link" href="http://shishirengicon.in/">Visit Shishir Engicon <span>↗</span></a></section>

      <section className="home-planner"><div className="home-planner-heading"><p>INTERACTIVE SPACE PLANNER</p><h2>Design Your Room In 3D</h2><span>Drag, drop, and experiment with layouts before you commit to a design.</span></div><div className="blueprint-frame"><div className="blueprint-frame-bar"><span>Live Preview</span><a href="https://furnishup.github.io/blueprint3d/example/" target="_blank" rel="noreferrer">Open full screen ↗</a></div><iframe src="https://furnishup.github.io/blueprint3d/example/" title="Interactive Blueprint3D room planner" allow="fullscreen" /></div></section>

      <section className="about" id="about">
        <p className="eyebrow">ABOUT US</p>
        <div className="about-content">
          <h2>Starting from the 2008s, as the intricacy of structures continued to evolve, architecture transformed into a multi-disciplinary field with various specializations.</h2>
          <div className="about-grid">
            <div className="about-image tall"><Image src="/images/about-one.jpeg" alt="Refined salon interior" fill sizes="(max-width: 700px) 100vw, 34vw" /></div>
            <div className="about-side"><p>At Shishir Consultants Pvt. Ltd., we believe every space tells a story a narrative revealed through every design detail and spatial nuance. As dedicated interior specialists, we craft environments that echo individuality and endure as timeless expressions of the people who live within them</p><div className="about-image wide"><Image src="/images/about-two.jpeg" alt="Contemporary commercial interior" fill sizes="(max-width: 700px) 100vw, 34vw" /></div><Link className="arrow-link" href="/about"><span>→</span> Know More</Link></div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro"><p className="eyebrow">WHAT SERVICE WE OFFER</p><h2>Innovative Design and Expert Construction Services</h2><div className="services-image"><Image src="/images/services.jpg" alt="Architectural design team at work" fill sizes="(max-width: 700px) 100vw, 40vw" /></div><p className="services-description">Explore Shishir Consultants&apos; suite of services—where architectural creativity, interior design excellence, sustainable practices, and personalized guidance come together. Our expertise brings your vision to life through refined, functional spaces where every detail counts and every corner speaks your story. Welcome to Shishir Services, where ideas become reality</p></div>
        <div className="service-list">{services.map((service, index) => <Link href="/service" key={service}><span>0{index + 1}</span><strong>{service}</strong></Link>)}<Link className="all-services" href="/service">All Services <span>↗</span></Link></div>
      </section>

      <section className="featured" id="projects">
        <div className="section-heading"><p className="eyebrow">FEATURED PROJECTS</p><h2>Architectural Marvels &amp; Interior Masterpieces</h2></div>
        <div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.title}><h3>{project.title}</h3><div className="project-image"><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 40vw" /></div><div className="project-copy"><p>{project.description}</p><span>INTERIOR DESIGN</span><Link href={`/project/${["urban-nest", "elevate-gym-space", "the-white-haven"][index]}`}>Project Details <b>↗</b></Link></div></article>)}</div>
        <Link className="see-projects" href="/project/gallery">See all projects <span>↗</span></Link>
      </section>

      <section className="living-banner"><Image src="/images/living-banner.jpg" alt="Modern living room" fill sizes="100vw" /><div /><h2>Thoughtful Design for<br />Modern Living</h2></section>

      <TeamSection />

      <section className="map-section" aria-label="Our location"><iframe title="Shishir Consultants location" src="https://www.google.com/maps?q=Kriti+Apartment+New+Patliputra+Colony+Patna&output=embed" loading="lazy" /></section>
      <section className="contact" id="contact"><h2>Let&apos;s connect and<br />collaborate</h2><p>Contact us today, and let&apos;s start creating the space you&apos;ve imagined.<br />We&apos;re here to guide you from design to construction.</p><a className="arrow-link" href="mailto:info@shishirconsultants.in"><span>→</span> info@shishirconsultants.in</a><a className="phone" href="tel:+918603009912">+91 8603009912</a></section>

      <footer><div className="footer-grid"><div className="footer-about"><Image src="/images/logo.png" alt="Shishir Consultants" width={48} height={52} /><p>Start your dream into reality with Shishir Consultants. Our philosophy is passion for innovation, sustainablity and timeless aesthetics</p></div><div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/service">Services</Link><Link href="/contact">Contact</Link></div><div><h3>Reach Us</h3><p>Flat No- 33/A, Kriti Apartment,<br />Road No. 3H, New Patliputra<br />Colony, Patliputra Colony,<br />Patna, Bihar-800013</p><a href="mailto:info@shishirconsultants.in">info@shishirconsultants.in</a><a href="tel:+918603009912">+91 8603009912</a></div></div><div className="footer-meta"><p className="copyright">Copyright © 2026 Shishir Consultants</p><p>Developed by <a href="https://www.instagram.com/nityomrr/" target="_blank" rel="noopener noreferrer">Nityom Tikhe</a></p></div></footer>
    </main>
  );
}