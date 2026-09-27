import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Arrow, SiteFooter, SiteHeader } from "./components";

export const siteOrigin = "https://uhub.mx";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title: `${title} · uHub`, description, url: path, siteName: "uHub", locale: "es_MX", type: "website", images: [{ url: `${siteOrigin}/og.png`, width: 1200, height: 630, alt: "uHub · Emprender es en quién te conviertes" }] }, twitter: { card: "summary_large_image", title: `${title} · uHub`, description, images: [`${siteOrigin}/og.png`] } };
}
export const contactFor = (message: string) => `https://wa.me/526142346499?text=${encodeURIComponent(message)}`;
export function InstitutionalShell({ children }: { children: ReactNode }) {
  return <><SiteHeader /><main id="contenido" className="institutional-page">{children}</main><SiteFooter /></>;
}
export function InstitutionalHero({ label, title, intro, contact, cta, facts, status }: { label: string; title: string; intro: string; contact: string; cta: string; facts: [string,string][]; status: string }) {
  return <section className="institutional-hero"><div><a className="institutional-back" href="/organizaciones">uHub para organizaciones /</a><p className="eyebrow">{label}</p><h1>{title}</h1><p className="institutional-intro">{intro}</p><a className="button button-primary" href={contact} target="_blank" rel="noreferrer">{cta} <Arrow /></a></div><aside className="institutional-facts"><span>El formato de referencia</span><dl>{facts.map(([n,t]) => <div key={n}><dt>{n}</dt><dd>{t}</dd></div>)}</dl><p>{status}</p></aside></section>;
}
export function InstitutionalClosing({ title, text, contact, cta, pdf }: { title: string; text: string; contact: string; cta: string; pdf: string }) {
  return <section className="institutional-closing"><div><p className="eyebrow">La siguiente conversación</p><h2>{title}</h2><p>{text}</p></div><div><a className="button button-primary" href={contact} target="_blank" rel="noreferrer">{cta} <Arrow /></a><a className="text-link" href={pdf} target="_blank" rel="noreferrer">Descargar ficha para compartir · PDF <Arrow /></a><a className="institutional-email" href="mailto:rodrigo@uhub.mx">También puedes escribir a rodrigo@uhub.mx</a></div></section>;
}
