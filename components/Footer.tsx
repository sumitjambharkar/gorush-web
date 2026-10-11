import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo">
              <Image src="/img/gorush-white.png" alt="GoRush" width={194} height={40} />
            </Link>
            <p>
              Fast, local delivery by bike. Connecting customers, businesses and delivery partners in one
              simple platform.
            </p>
          </div>
          <div>
            <h4>Send</h4>
            <ul>
              <li>
                <Link href="/#how">Book a delivery</Link>
              </li>
              <li>
                <Link href="/#send">What you can send</Link>
              </li>
              <li>
                <Link href="/#faq">FAQs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Ride</h4>
            <ul>
              <li>
                <Link href="/#courier">Become a courier</Link>
              </li>
              <li>
                <Link href="/safety#partners">Partner safety</Link>
              </li>
              <li>
                <Link href="/contact?type=partner">Partner support</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Stores</h4>
            <ul>
              <li>
                <Link href="/#business">Business delivery</Link>
              </li>
              <li>
                <Link href="/contact?type=api">API integration</Link>
              </li>
              <li>
                <Link href="/contact?type=business">Request pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About GoRush</Link>
              </li>
              <li>
                <Link href="/safety">Safety</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © <span>{new Date().getFullYear()}</span> GoRush.bike. All rights reserved.
          </p>
          <ul>
            <li>
              <Link href="/privacy">Privacy policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
