import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Header from "../../header";
import { getProject, projects } from "../../project-data";
import { createPageMetadata } from "../../seo";
import { ContactBand, SiteFooter } from "../../site-sections";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/project/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return createPageMetadata({
    title: `${project.title} Interior Design Project`,
    description: project.intro,
    path: `/project/${project.slug}`,
    image: project.image,
  });
}

export default async function ProjectPage({ params }: PageProps<"/project/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const more = projects.filter((item) => item.slug !== slug).slice(0, 3);
  return <main className="route-page project-detail"><Header /><section className="detail-hero"><Image src={project.image} alt={project.title} fill priority sizes="100vw" /><div /><p>ARCHITECTURE</p><h1>{project.title}</h1><span>{project.intro}</span></section><section className="project-overview"><p>PROJECT OVERVIEW</p><div><h2>{project.overview}</h2><span>{project.overviewBody}</span><div className="overview-images">{project.detailImages.slice(0, 2).map((image, index) => <div key={image}><Image src={image} alt={`${project.title} overview ${index + 1}`} fill sizes="40vw" /></div>)}</div></div></section><section className="solution"><h2>The Solution</h2><p>{project.solution}</p><div className="solution-images">{project.detailImages.slice(2).map((image, index) => <div key={image}><Image src={image} alt={`${project.title} solution ${index + 1}`} fill sizes="45vw" /></div>)}</div></section><section className="more-projects"><div><p>MORE PROJECTS</p><h2>Our Successful Projects - Showcasing Excellence</h2></div><div>{more.map((item) => <a href={`/project/${item.slug}`} key={item.slug}><div><Image src={item.image} alt={item.title} fill sizes="33vw" /></div><span>{item.year}</span><h3>{item.title}</h3><p>View Project ↗</p></a>)}</div></section><ContactBand /><SiteFooter /></main>;
}