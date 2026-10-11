import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroMap from "@/components/HeroMap";

export const metadata: Metadata = {
  title: { absolute: "GoRush.bike | Fast local delivery by bike" },
  description:
    "Send parcels, documents, food and essentials across town with GoRush. Verified riders, live tracking and PIN-protected handover.",
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Across town, in one ride.</h1>
              <p className="lead">
                GoRush picks up your parcel, document or food order and takes it straight to the door, with a
                verified rider and live tracking the whole way.
              </p>
              <div className="hero-actions">
                <a href="#how" className="btn btn-primary">
                  Book a delivery
                </a>
                <a href="#business" className="btn btn-ghost">
                  Deliveries for your business
                </a>
              </div>
              <ul className="hero-note">
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
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Verified riders
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
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  Live tracking
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
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                  PIN-protected handover
                </li>
              </ul>
            </div>

            <div className="track" aria-label="Example of a live GoRush delivery">
              <div className="track-map">
                <HeroMap />
              </div>
              <div className="track-body">
                <div className="track-top">
                  <span className="track-id">Order GR-2048</span>
                  <span className="pill">On the way</span>
                </div>
                <ol className="timeline">
                  <li className="done">
                    <span className="tick">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <span>Rider assigned</span>
                    <time>10:31</time>
                  </li>
                  <li className="done">
                    <span className="tick">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12.5l4.5 4.5L19 7.5" />
                      </svg>
                    </span>
                    <span>Picked up from sender</span>
                    <time>10:42</time>
                  </li>
                  <li className="now">
                    <span className="tick"></span>
                    <span>
                      <strong>Heading to drop-off</strong>
                    </span>
                    <span className="meta">Live</span>
                  </li>
                  <li>
                    <span className="tick"></span>
                    <span className="later">Delivered with PIN</span>
                    <span className="meta">Next</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lanes-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="lanes-title">One platform for customers, stores and riders.</h2>
            </div>
            <div className="lanes">
              <div className="lane">
                <Image className="lane-logo" src="/img/gorush.png" alt="GoRush" width={232} height={48} />
                <h3>Send something</h3>
                <p>Book a pickup, follow the rider on the map and know the moment it arrives.</p>
                <a className="text-link" href="#how">
                  How sending works
                </a>
              </div>
              <div className="lane">
                <Image
                  className="lane-logo"
                  src="/img/gorush-store.png"
                  alt="GoRush Store"
                  width={232}
                  height={48}
                />
                <h3>Deliver for your business</h3>
                <p>
                  GoRush Store hands your local deliveries to our rider network and gives customers live
                  tracking.
                </p>
                <a className="text-link" href="#business">
                  About GoRush Store
                </a>
              </div>
              <div className="lane">
                <Image
                  className="lane-logo"
                  src="/img/gorush-partner.png"
                  alt="GoRush Partner"
                  width={232}
                  height={48}
                />
                <h3>Ride with GoRush</h3>
                <p>
                  With GoRush Partner, you pick up delivery requests near you and earn on the hours that suit
                  you.
                </p>
                <a className="text-link" href="#courier">
                  Become a courier
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-concrete" id="how" aria-labelledby="how-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="how-title">From pickup to doorstep in four steps.</h2>
              <p>
                No paperwork and no waiting around. You&apos;ll know where your delivery is at every stage.
              </p>
            </div>
            <ol className="route">
              <li>
                <span className="stop" aria-hidden="true"></span>
                <h3>Add the addresses</h3>
                <p>Enter where we&apos;re collecting from and where it&apos;s going.</p>
              </li>
              <li>
                <span className="stop" aria-hidden="true"></span>
                <h3>Confirm your order</h3>
                <p>Tell us what you&apos;re sending, check the details and confirm.</p>
              </li>
              <li>
                <span className="stop" aria-hidden="true"></span>
                <h3>A rider is assigned</h3>
                <p>The nearest available verified rider accepts and heads to the pickup.</p>
              </li>
              <li>
                <span className="stop" aria-hidden="true"></span>
                <h3>Track it to the door</h3>
                <p>Follow the ride live. The receiver shares a PIN to complete the handover.</p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section" id="send" aria-labelledby="send-title">
          <div className="wrap split">
            <div>
              <h2 id="send-title">If it fits on a bike, we&apos;ll take it.</h2>
              <p className="lead" style={{ marginTop: "18px" }}>
                GoRush is built for the everyday things that need to get across town today, not next week.
              </p>
              <ul className="features">
                <li>
                  <span className="icon">
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
                  </span>
                  <div>
                    <strong>Live tracking</strong>
                    <span>See the rider on the map from pickup to drop-off.</span>
                  </div>
                </li>
                <li>
                  <span className="icon">
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
                  </span>
                  <div>
                    <strong>Verified riders</strong>
                    <span>Every delivery partner completes verification before taking orders.</span>
                  </div>
                </li>
                <li>
                  <span className="icon">
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
                  </span>
                  <div>
                    <strong>Help when you need it</strong>
                    <span>Reach our support team in the app if anything goes wrong along the way.</span>
                  </div>
                </li>
              </ul>
              <a href="#how" className="btn btn-primary">
                Book a delivery
              </a>
            </div>
            <div>
              <div className="send-grid">
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
                    <path d="M6 3h8l4 4v14H6z" />
                    <path d="M14 3v4h4M9 12h6M9 16h6" />
                  </svg>
                  <strong>Documents</strong>
                  <span>Contracts, keys, forms</span>
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
                    <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" />
                    <path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" />
                  </svg>
                  <strong>Parcels</strong>
                  <span>Small and medium packages</span>
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
                    <path d="M4 11h16a8 8 0 01-16 0z" />
                    <path d="M8 7c0-1.5 1-2 1-3.5M12 7c0-1.5 1-2 1-3.5M16 7c0-1.5 1-2 1-3.5" />
                  </svg>
                  <strong>Food orders</strong>
                  <span>Hot, packed and on time</span>
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
                    <path d="M5 8h14l-1 13H6z" />
                    <path d="M9 8V6a3 3 0 016 0v2" />
                  </svg>
                  <strong>Essentials</strong>
                  <span>Groceries, pharmacy, forgotten things</span>
                </div>
              </div>
              <p className="fineprint">
                Some items can&apos;t be carried. Not sure about yours?{" "}
                <Link href="/contact?type=customer">Ask us</Link> before you book.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-concrete" id="business" aria-labelledby="biz-title">
          <div className="wrap split">
            <div>
              <h2 id="biz-title">GoRush Store: local delivery your customers can count on.</h2>
              <p className="lead" style={{ marginTop: "18px" }}>
                Shops, restaurants and online sellers use GoRush to handle last-mile delivery without running
                their own fleet.
              </p>
              <ul className="features">
                <li>
                  <span className="icon">
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
                  </span>
                  <div>
                    <strong>A ready rider network</strong>
                    <span>Book riders when you need them, with no fleet to manage.</span>
                  </div>
                </li>
                <li>
                  <span className="icon">
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
                  </span>
                  <div>
                    <strong>Tracking you can share</strong>
                    <span>
                      Your customers follow their order live, so fewer &quot;where is it?&quot; calls.
                    </span>
                  </div>
                </li>
                <li>
                  <span className="icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5" />
                    </svg>
                  </span>
                  <div>
                    <strong>API integration</strong>
                    <span>Create deliveries straight from your store or ordering system.</span>
                  </div>
                </li>
                <li>
                  <span className="icon">
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
                  </span>
                  <div>
                    <strong>Dedicated business support</strong>
                    <span>A team that knows your account when you need help.</span>
                  </div>
                </li>
              </ul>
              <Link href="/contact?type=business" className="btn btn-primary">
                Talk to our business team
              </Link>
            </div>
            <div className="panel">
              <Image
                className="panel-logo"
                src="/img/gorush-store-white.png"
                alt="GoRush Store"
                width={271}
                height={56}
              />
              <h3>Good fit for</h3>
              <p>Businesses sending regular same-day orders within the city.</p>
              <dl>
                <div>
                  <dt>Restaurants &amp; cafés</dt>
                  <dd>Food delivery</dd>
                </div>
                <div>
                  <dt>Retail &amp; pharmacies</dt>
                  <dd>Same-day orders</dd>
                </div>
                <div>
                  <dt>Online sellers</dt>
                  <dd>Local last mile</dd>
                </div>
                <div>
                  <dt>Offices &amp; agencies</dt>
                  <dd>Documents</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section courier" id="courier" aria-labelledby="courier-title">
          <div className="wrap courier-grid">
            <div>
              <h2 id="courier-title">Your bike. Your hours. Your earnings.</h2>
              <p>
                Join GoRush Partner and get delivery requests from people and businesses near you. Ride when
                it suits you and switch off when it doesn&apos;t.
              </p>
              <Link href="/contact?type=courier" className="btn btn-light">
                Apply to ride
              </Link>
            </div>
            <div className="partner-card">
              <Image src="/img/gorush-partner.png" alt="GoRush Partner" width={271} height={56} />
              <ul aria-label="What you need to get started">
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
                  <span>A bike and a smartphone</span>
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
                    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
                    <path d="M8.5 12l2.5 2.5 4.5-5" />
                  </svg>
                  <span>Complete our partner verification</span>
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
                    <circle cx="12" cy="12" r="8.5" />
                    <path d="M12 7.5V12l3 2" />
                  </svg>
                  <span>Choose when you&apos;re available</span>
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
                    <path d="M4 5h16v11H9l-5 4z" />
                    <path d="M8 10h8" />
                  </svg>
                  <span>Partner support whenever you&apos;re on the road</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="safety-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="safety-title">Safety is built into every ride.</h2>
              <p>For senders, receivers and riders. Here&apos;s how we look after each delivery.</p>
            </div>
            <div className="safety-row">
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
                <strong>Verified partners</strong>
                <span>Riders are verified before they can accept orders.</span>
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
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <strong>Live tracking</strong>
                <span>Every trip is visible from pickup to drop-off.</span>
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
                <strong>PIN handover</strong>
                <span>Deliveries are confirmed with a PIN where applicable.</span>
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
                <strong>Support on hand</strong>
                <span>Help is a tap away for customers and riders.</span>
              </div>
            </div>
            <p style={{ marginTop: "36px" }}>
              <Link className="text-link" href="/safety">
                Read how we keep deliveries safe
              </Link>
            </p>
          </div>
        </section>

        <section className="section section-concrete" id="faq" aria-labelledby="faq-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="faq-title">Common questions</h2>
            </div>
            <div className="faq">
              <details>
                <summary>What can I send with GoRush?</summary>
                <p>
                  Documents, small and medium parcels, food orders and everyday essentials that can be safely
                  carried on a bike. Some items aren&apos;t allowed. If you&apos;re not sure,{" "}
                  <Link href="/contact?type=customer">ask us</Link> before booking.
                </p>
              </details>
              <details>
                <summary>How do I track my delivery?</summary>
                <p>
                  Once a rider accepts your order, you can follow them live on the map in the GoRush app, from
                  pickup to drop-off.
                </p>
              </details>
              <details>
                <summary>How is my delivery kept secure?</summary>
                <p>
                  Riders are verified before they can take orders, and where applicable the receiver shares a
                  delivery PIN with the rider to confirm the handover.
                </p>
              </details>
              <details>
                <summary>Can my business use GoRush?</summary>
                <p>
                  Yes. We work with restaurants, shops, online sellers and offices. You can create deliveries
                  manually or connect your system through our API.{" "}
                  <Link href="/contact?type=business">Contact our business team</Link> to get set up.
                </p>
              </details>
              <details>
                <summary>How do I become a delivery partner?</summary>
                <p>
                  Apply through our <Link href="/contact?type=courier">contact form</Link>, complete the
                  verification process, and you can start accepting delivery requests near you.
                </p>
              </details>
              <details>
                <summary>Something went wrong with my order. What now?</summary>
                <p>
                  Contact support through the GoRush app or{" "}
                  <Link href="/contact?type=customer">send us a message</Link> with your order number and
                  we&apos;ll help sort it out.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
      <section className="cta">
        <div className="wrap cta-inner">
          <div>
            <h2>Got something to send?</h2>
            <p>Book a delivery and track it all the way to the door.</p>
          </div>
          <div className="cta-actions">
            <a href="#how" className="btn btn-primary">
              Book a delivery
            </a>
            <a href="#courier" className="btn btn-on-dark">
              Become a courier
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
