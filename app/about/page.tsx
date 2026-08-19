import Image from "next/image";
import Link from "next/link";
import Header from "../header";
import { ContactBand, Experience, SiteFooter } from "../site-sections";
import TeamSection from "../team-section";

export default function AboutPage() {
  return <main className="route-page"><Header /><section className="route-hero about-hero"><div className="route-hero-copy"><span>ABOUT US</span><h1>Archiving Dreams, Building Reality</h1><p>At Shishir Consultants Pvt. Ltd., we are designers of dreams—bringing visions to life through our deep expertise in interior design and execution.</p><Link className="pill-link" href="/project/gallery"><b>→</b> View All Projects</Link></div><div className="about-hero-images"><div><Image src="/images/about-hero.png" alt="Shishir Consultants exterior" fill priority sizes="32vw" /></div><div><Image src="/images/salon.jpeg" alt="Shishir Consultants interior" fill priority sizes="62vw" /></div></div></section>
    <section className="route-about"><p className="eyebrow">ABOUT US</p><div><h2>Starting from the 2011s, as the intricacy of structures continued to evolve, architecture transformed into a multi-disciplinary field with various specializations.</h2><div className="route-about-grid"><div className="route-image"><Image src="/images/about-one.jpeg" alt="Interior design" fill sizes="50vw" /></div><div><p>At Shishir Consultants Pvt. Ltd., we believe every space tells a story — a narrative revealed through every design detail and spatial nuance. As dedicated interior specialists, we craft environments that echo individuality and endure as timeless expressions of the people who live within them</p><div className="route-image"><Image src="/images/about-two.jpeg" alt="Commercial interior" fill sizes="50vw" /></div><a className="arrow-link" href="/service"><span>→</span> Our Services</a></div></div></div></section>
    <Experience />
    <TeamSection description="At Shishir Consultants Pvt. Ltd., our skilled and innovative team delivers exceptional design solutions with unwavering commitment to quality, creativity, and technical excellence. Meet the professionals who shape inspired spaces." />
    <ContactBand /><SiteFooter />
  </main>;
}