import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "GoRush is a technology-driven local delivery platform connecting customers, businesses and delivery partners.",
};

export default function AboutPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <h1>We move what matters, across town.</h1>
            <p className="lead">
              GoRush is a local delivery platform that makes everyday deliveries faster, simpler and easier to
              trust.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap split">
            <div className="prose">
              <h2>Who we are</h2>
              <p>
                GoRush connects three groups in one simple platform: people who need something delivered,
                businesses that deliver to their customers, and the riders who make it happen.
              </p>
              <p>
                Whether it&apos;s a signed document, a parcel, a hot meal or a last-minute essential, we get
                it from pickup to destination quickly, and we let you watch it happen.
              </p>
            </div>
            <div className="prose">
              <h2>Our mission</h2>
              <p>To make local delivery fast, reliable, transparent and accessible to everyone.</p>
              <p className="statement" style={{ marginTop: "28px" }}>
                Delivery should be simple, and you should always know where your things are.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-concrete">
          <div className="wrap">
            <div className="section-head">
              <h2>What we stand for</h2>
            </div>
            <div className="values">
              <div>
                <h3>Fast</h3>
                <p>Local deliveries go direct, in one ride, without sorting centres or overnight stops.</p>
              </div>
              <div>
                <h3>Reliable</h3>
                <p>Verified riders, live tracking and confirmed handovers mean fewer surprises.</p>
              </div>
              <div>
                <h3>Local</h3>
                <p>
                  We&apos;re built around neighbourhoods: the shops, kitchens and people in them, and the
                  riders who know the streets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <h2>Who GoRush is for</h2>
            </div>
            <div className="lanes">
              <div className="lane">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
                  <path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" />
                </svg>
                <h3>Customers</h3>
                <p>Send and receive with live tracking and secure handover.</p>
                <Link className="text-link" href="/#how">
                  Book a delivery
                </Link>
              </div>
              <div className="lane">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 9.5V20h16V9.5M3 9.5l2-5.5h14l2 5.5c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3s-3-1.3-3-3c0 1.7-1.3 3-3 3s-3-1.3-3-3z" />
                  <path d="M10 20v-5h4v5" />
                </svg>
                <h3>Businesses</h3>
                <p>Outsource last-mile delivery without managing a fleet.</p>
                <Link className="text-link" href="/contact?type=business">
                  Talk to us
                </Link>
              </div>
              <div className="lane">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="5.5" cy="16.5" r="3.5" />
                  <circle cx="18.5" cy="16.5" r="3.5" />
                  <path d="M5.5 16.5l4-7h5l4 7M9.5 9.5L8 6H5.5M14.5 9.5l1.5-3.5h2.5" />
                </svg>
                <h3>Delivery partners</h3>
                <p>Flexible work, delivering for people near you.</p>
                <Link className="text-link" href="/contact?type=courier">
                  Apply to ride
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Want to work with us?</h2>
            <p>Whether you&apos;re sending, selling or riding, there&apos;s a place for you on GoRush.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn btn-primary">
              Contact us
            </Link>
            <Link href="/#courier" className="btn btn-on-dark">
              Become a courier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
