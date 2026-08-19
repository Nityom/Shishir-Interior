import Header from "../header";
import ContactForm from "../contact-form";
import { createPageMetadata } from "../seo";
import { SiteFooter } from "../site-sections";

export const metadata = createPageMetadata({
  title: "Contact Interior Designers in Patna",
  description: "Contact Shishir Consultants for residential and commercial interior design, architecture, and construction projects in Patna, Bihar.",
  path: "/contact",
});

export default function ContactPage() {
  return <main className="route-page contact-page"><Header /><section className="contact-layout"><iframe title="Shishir Consultants location" src="https://www.google.com/maps?q=Kriti+Apartment+New+Patliputra+Colony+Patna&output=embed" loading="lazy" /><div className="contact-panel"><div className="contact-details"><p>GET IN TOUCH</p><h1>Shishir Consultants Pvt. Ltd.</h1><span>Flat No- 33/A, Kriti Apartment, Road No. 3H, New Patliputra Colony, Patliputra Colony, Patna, Bihar 800013</span></div><div className="contact-form"><h2>Contact Us</h2><p>We&apos;d love to hear from you! Please fill out the form below and we’ll get in touch shortly.</p><ContactForm /><span>Call Directly :</span><a href="tel:+918603009912">+91 8603009912</a></div></div></section><SiteFooter /></main>;
}