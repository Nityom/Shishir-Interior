"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { slug: "urban-nest", title: "Urban Nest", image: "/images/urban-nest.jpg", year: "2019", category: "ARCHITECTURE" },
  { slug: "elevate-gym-space", title: "Elevate Gym Space", image: "/images/elevate-gym.avif", year: "2020", category: "INTERIOR DESIGN" },
  { slug: "the-white-haven", title: "The White Haven", image: "/images/white-haven.png", year: "2021", category: "EXTERIOR DESIGN" },
] as const;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setIndex((value) => (value + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const active = slides[index];

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-images" aria-hidden="true">
          {slides.map((slide, i) => <Image key={slide.slug} className={`hero-image ${i === index ? "is-active" : ""}`} src={slide.image} alt="" fill priority={i === 0} sizes="100vw" />)}
        </div>
        <div className="hero-shade" />
        <div className="hero-socials"><span>{active.year}</span><a href="https://www.instagram.com/shishir_consultants_pvt.ltd/">Ig.</a></div>
        <div className="hero-copy">
          <div className="hero-count"><strong>0{index + 1}</strong><span>/ 0{slides.length}</span></div><p>{active.category}</p><h1>{active.title}</h1>
          <Link className="arrow-link light" href={`/project/${active.slug}`}><span>→</span> View Project</Link>
        </div>
        <div className="slide-dots" aria-hidden="true">{slides.map((slide, i) => <i key={slide.slug} className={i === index ? "is-active" : ""} />)}</div>
      </section>

      <div className="project-selector">{slides.map((slide, i) => <Link className={i === index ? "is-active" : ""} href={`/project/${slide.slug}`} key={slide.slug} onMouseEnter={() => setIndex(i)}><span>0{i + 1}.</span><strong>{slide.title}</strong></Link>)}</div>
    </>
  );
}
