import type { Metadata } from "next";
import Image from "next/image";
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
                <Image className="lane-logo" src="/img/gorush.png" alt="GoRush" width={232} height={48} />
                <h3>Customers</h3>
                <p>Send and receive with live tracking and secure handover.</p>
                <Link className="text-link" href="/#how">
                  Book a delivery
                </Link>
              </div>
              <div className="lane">
                <Image
                  className="lane-logo"
                  src="/img/gorush-store.png"
                  alt="GoRush Store"
                  width={232}
                  height={48}
                />
                <h3>Stores &amp; businesses</h3>
                <p>Outsource last-mile delivery without managing a fleet.</p>
                <Link className="text-link" href="/contact?type=business">
                  Talk to us
                </Link>
              </div>
              <div className="lane">
                <Image
                  className="lane-logo"
                  src="/img/gorush-partner.png"
                  alt="GoRush Partner"
                  width={232}
                  height={48}
                />
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
