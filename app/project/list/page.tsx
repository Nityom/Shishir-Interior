import Image from "next/image";
import Link from "next/link";
import Header from "../../header";
import { projects } from "../../project-data";
import { ContactBand, SiteFooter } from "../../site-sections";

const descriptions: Record<string, string> = {
  "urban-nest": "Crafted to enhance productivity, encourage collaboration, and spark creativity, this contemporary workspace redefines the benchmark for modern corporate interiors",
  "elevate-gym-space": "Engineered for performance and designed with precision, this gym interior blends functionality with aesthetic energy—creating a space that motivates movement, supports wellness, and reflects the power of purposeful design",
  "the-white-haven": "White Haven embodies serene elegance—where a palette of soft whites and clean lines create a calm, airy sanctuary that reflects simplicity, sophistication, and timeless design.",
  "mithusa-unisex-salon": "Mithusa Unisex Salon blends contemporary elegance with functional design—offering a chic, gender-neutral space that balances comfort, style, and professional aesthetics to elevate the client experience.",
  "modern-residence": "This modern residence reflects clean lines, open layouts, and a refined material palette—crafted to deliver a seamless blend of contemporary aesthetics and comfortable living",
  "modern-minimalist-house": "A celebration of simplicity and form, this modern minimalist house embraces clean geometry, neutral tones, and clutter-free elegance—creating a serene, functional living space that speaks volumes through subtlety",
};

const listedProjects = ["urban-nest", "elevate-gym-space", "the-white-haven", "mithusa-unisex-salon", "modern-residence", "modern-minimalist-house"].map((slug) => projects.find((project) => project.slug === slug)!);

export default function ProjectListPage() {
  return <main className="route-page gallery-page"><Header /><section className="gallery-intro"><p>PROJECT LIST</p><h1>Our Successful Projects - Showcasing Excellence</h1><span>Our portfolio boasts a diverse range of successful projects that highlight our expertise, creativity, and dedication to perfection.</span><div className="view-tabs"><a className="view-tabs-primary" href="https://blog.shishirconsultants.in" target="_blank" rel="noreferrer">Gallery <b>↗</b></a><b className="view-tabs-secondary">List <i>↗</i></b></div></section><section className="editorial-list">{listedProjects.map((project) => <article key={project.slug}><h2>{project.title}</h2><div><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 40vw" /></div><div><p>{descriptions[project.slug]}</p><span>{project.slug.includes("modern") ? "ARCHITECTURE" : "INTERIOR DESIGN"}</span><Link href={`/project/${project.slug}`}>Project Details ↗</Link></div></article>)}</section><ContactBand /><SiteFooter /></main>;
}