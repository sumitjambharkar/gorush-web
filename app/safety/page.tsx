import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety",
  description: "How GoRush keeps customers, businesses and delivery partners safe on every delivery.",
};

export default function SafetyPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <h1>Safety is part of every delivery.</h1>
            <p className="lead">
              We build safety into how riders join, how orders move and how every handover is completed, so
              customers, businesses and partners can rely on each delivery.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap safety-groups">
            <div className="safety-group" id="customers">
              <div>
                <Image className="group-logo" src="/img/gorush.png" alt="" width={194} height={40} />
                <h2>For customers</h2>
                <p>Know who&apos;s carrying your delivery and where it is.</p>
              </div>
              <div className="safety-items">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  <h3>Real-time tracking</h3>
                  <p>Follow your delivery live on the map and get updates at each stage.</p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="15" r="4" />
                    <path d="M11 12l9-9M16 7l3 3M14 9l2 2" />
                  </svg>
                  <h3>Delivery verification</h3>
                  <p>
                    Where applicable, pickup and delivery PINs confirm the right person sends and receives.
                  </p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="10.5" width="14" height="10" rx="2" />
                    <path d="M8 10.5V7.5a4 4 0 018 0v3M12 14.5v2.5" />
                  </svg>
                  <h3>Secure handover</h3>
                  <p>Our pickup and drop-off process is designed so your order changes hands safely.</p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 5h16v11H9l-5 4z" />
                    <path d="M8 10h8" />
                  </svg>
                  <h3>Customer support</h3>
                  <p>Reach our support team through the app if anything doesn&apos;t look right.</p>
                </div>
              </div>
            </div>

            <div className="safety-group" id="partners">
              <div>
                <Image className="group-logo" src="/img/gorush-partner.png" alt="" width={194} height={40} />
                <h2>For delivery partners</h2>
                <p>Safe riding, clear expectations and help when you need it.</p>
              </div>
              <div className="safety-items">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
                    <path d="M8.5 12l2.5 2.5 4.5-5" />
                  </svg>
                  <h3>Partner verification</h3>
                  <p>
                    Every partner completes the applicable verification process before accepting deliveries.
                  </p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 3L4 21M16 3l4 18M12 4v3M12 10.5v3M12 17v3" />
                  </svg>
                  <h3>Responsible riding</h3>
                  <p>
                    We expect all partners to follow traffic laws, wear proper safety gear and ride with care.
                  </p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 5h16v11H9l-5 4z" />
                    <path d="M8 10h8" />
                  </svg>
                  <h3>Partner support</h3>
                  <p>Contact support from the app during any trip, at any stage.</p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 6h11M9 12h11M9 18h11M4.5 6h.5M4.5 12h.5M4.5 18h.5" />
                  </svg>
                  <h3>Community guidelines</h3>
                  <p>Clear rules for how riders, customers and businesses treat each other.</p>
                </div>
              </div>
            </div>

            <div className="safety-group" id="businesses">
              <div>
                <Image className="group-logo" src="/img/gorush-store.png" alt="" width={194} height={40} />
                <h2>For stores &amp; businesses</h2>
                <p>Visibility and accountability on every order you send.</p>
              </div>
              <div className="safety-items">
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                  <h3>Order visibility</h3>
                  <p>Track each delivery and share live progress with your customers.</p>
                </div>
                <div>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="9" cy="8.5" r="3.5" />
                    <path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5" />
                    <circle cx="17" cy="9" r="2.6" />
                    <path d="M17 14.5c2.6 0 4.2 1.7 4.6 4.5" />
                  </svg>
                  <h3>Verified rider network</h3>
                  <p>Your orders are carried only by verified GoRush partners.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap">
            <div className="alert" role="note">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3.5L2.5 20h19z" />
                <path d="M12 10v4.5M12 17.2v.3" />
              </svg>
              <div>
                <strong>In an emergency, contact local emergency services first.</strong>Then let us know
                through the app or our contact form so we can follow up.
              </div>
            </div>
          </div>
        </section>
      </main>
      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Have a safety concern?</h2>
            <p>Tell us what happened. Our team reviews every safety report.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact?type=safety" className="btn btn-primary">
              Report a concern
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
