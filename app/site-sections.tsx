import Image from "next/image";
import Link from "next/link";

export function ContactBand() {
  return (
    <section className="contact route-contact">
      <h2>Let&apos;s connect and<br />collaborate</h2>
      <p>Contact us today, and let&apos;s start creating the space you&apos;ve imagined.<br />We&apos;re here to guide you from design to construction.</p>
      <a className="arrow-link" href="mailto:info@shishirconsultants.in"><span>→</span> info@shishirconsultants.in</a>
      <a className="phone" href="tel:+918603009912">+91 8603009912</a>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-about"><Image src="/images/logo.png" alt="Shishir Consultants" width={48} height={52} /><p>Start your dream into reality with Shishir Consultants. Our philosophy is passion for innovation, sustainablity and timeless aesthetics</p></div>
        <div><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/service">Services</Link><Link href="/contact">Contact</Link></div>
        <div><h3>Reach Us</h3><p>Flat No- 33/A, Kriti Apartment,<br />Road No. 3H, New Patliputra<br />Colony, Patliputra Colony,<br />Patna, Bihar-800013</p><a href="mailto:info@shishirconsultants.in">info@shishirconsultants.in</a><a href="tel:+918603009912">+91 8603009912</a></div>
      </div>
      <div className="footer-meta"><p className="copyright">Copyright © 2026 Shishir Consultants</p><p>Developed by <a href="https://www.instagram.com/nityomrr/" target="_blank" rel="noopener noreferrer">Nityom Tikhe</a></p></div>
    </footer>
  );
}

export function Experience() {
  return (
    <section className="experience">
      <h2>More Than 15+ Experience</h2>
      <div className="experience-grid">
        <div><strong>15<sup>+</sup></strong><p>Years of experience. Archive design draws together the many strands of place-making,</p></div>
        <div><strong>90<sup>%</sup></strong><p>Average. Archive design draws together the many strands of place-making, environmental</p></div>
        <div><strong>100<sup>m</sup></strong><p>Investment. Archive design draws together the many strands of place-making, environmental</p></div>
      </div>
    </section>
  );
}