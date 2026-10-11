import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero">
        <div className="wrap">
          <h1>This page took a wrong turn.</h1>
          <p className="lead">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
