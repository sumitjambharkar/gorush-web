import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get help with a delivery, ask about business delivery or apply to become a GoRush courier.",
};

export default function ContactPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <h1>How can we help?</h1>
            <p className="lead">
              Questions about a delivery, a business enquiry or applying to ride. Send us a message and the
              right team will reply.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap contact-grid">
            <div>
              <h2>Other ways to reach us</h2>
              <ul className="routes">
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
                    <path d="M11 18.5h2" />
                  </svg>
                  <div>
                    <strong>Help with an active order</strong>
                    <span>The fastest way is in-app support in the GoRush app.</span>
                  </div>
                </li>
                <li>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3.5 6l8.5 7 8.5-7" />
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:support@gorush.bike">support@gorush.bike</a>
                  </div>
                </li>
                <li>
                  <svg
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
                  <div>
                    <strong>Business enquiries</strong>
                    <span>
                      Choose &quot;Business enquiry&quot; in the form and our business team will reply.
                    </span>
                  </div>
                </li>
                <li>
                  <svg
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
                  <div>
                    <strong>Riding with GoRush</strong>
                    <span>Choose &quot;Become a courier&quot; to start your application.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="form-card">
              <h2>Send us a message</h2>
              <p>Fields marked optional can be left blank.</p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
