import Image from "next/image";
import Header from "../../header";
import { projects } from "../../project-data";
import { createPageMetadata } from "../../seo";
import { ContactBand, SiteFooter } from "../../site-sections";

export const metadata = createPageMetadata({
  title: "Interior Design Project Gallery",
  description: "Explore residential, commercial, wellness, hospitality, and healthcare interiors designed and delivered by Shishir Consultants.",
  path: "/project/gallery",
  image: "/images/urban-nest.jpg",
});

// Repeating tile aspect ratios that produce the staggered/masonry column look.
const tileAspect = [0.86, 0.86, 0.62, 0.6, 1.05, 0.86];

const columns = [0, 1, 2].map((column) => projects.map((project, index) => ({ project, index })).filter((entry) => entry.index % 3 === column));

export default function GalleryPage() {
  return <main className="route-page gallery-page"><Header /><section className="gallery-intro"><p>PROJECT GALLERY</p><h1>Our Successful Projects - Showcasing Excellence</h1><span>Our portfolio boasts a diverse range of successful projects that highlight our expertise, creativity, and dedication to perfection.</span><div className="view-tabs"><a className="view-tabs-primary" href="https://blog.shishirconsultants.in" target="_blank" rel="noreferrer">Gallery <b>↗</b></a></div></section><section className="gallery-grid" id="projects">{columns.map((column, ci) => <div className="gallery-column" key={ci}>{column.map(({ project, index }) => <a href={`/project/${project.slug}`} key={project.slug}><div style={{ aspectRatio: tileAspect[index % tileAspect.length] }}><Image src={project.image} alt={project.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><span>{project.year}</span><h2>{project.title}</h2><p>View Project ↗</p></a>)}</div>)}</section><section className="coming-soon"><h2>More Projects Coming Soon...</h2></section><ContactBand /><SiteFooter /></main>;
}