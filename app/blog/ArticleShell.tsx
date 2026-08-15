import Link from "next/link";
import type { ReactNode } from "react";
import { businessName, safeJsonLd, siteUrl } from "../seo";

type ArticleShellProps = {
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  path: string;
  children: ReactNode;
};

export function ArticleShell({ title, description, category, image, imageAlt, path, children }: ArticleShellProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: `${siteUrl}${image}`,
    mainEntityOfPage: `${siteUrl}${path}`,
    author: { "@type": "Organization", name: businessName, url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: businessName,
      logo: { "@type": "ImageObject", url: `${siteUrl}/Logo - Colorrise - Trans (1080 x 1080 px).png` },
    },
  };

  return (
    <main className="article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(articleJsonLd) }} />
      <header className="article-nav">
        <Link href="/" className="article-logo"><img src="/Logo - Colorrise - Trans (1080 x 1080 px).png?v=transparent-20260808" alt="Color Rise Coatings" /></Link>
        <nav aria-label="Article navigation"><Link href="/#services">Color journal</Link><Link href="/#about">About</Link><Link href="/#estimate" className="article-nav-cta">Free estimate</Link></nav>
      </header>
      <article>
        <div className="article-hero-copy"><p className="eyebrow">{category}</p><h1>{title}</h1><p>{description}</p></div>
        <img className="article-hero-image" src={image} alt={imageAlt} />
        <div className="article-body">{children}</div>
      </article>
      <section className="article-cta"><div><p className="eyebrow light">Bring your vision to life</p><h2>Ready for a color<br /><em>conversation?</em></h2></div><div><p>Color Rise combines detailed preparation, professional coatings, and a sharp eye for color.</p><Link className="button spectrum" href="/#estimate">Get a free estimate <span>↗</span></Link></div></section>
      <footer className="article-footer"><span>© Color Rise Coatings</span><Link href="/">Back to home</Link></footer>
    </main>
  );
}
