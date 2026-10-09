import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" aria-label="GoRush.bike home">
              <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
                <rect width="32" height="32" rx="9" fill="#FF5A1F" />
                <circle cx="18.5" cy="16" r="6.5" fill="none" stroke="#fff" strokeWidth="3" />
                <path
                  d="M4.5 11.5h6M3 16h5.5M4.5 20.5h6"
                  stroke="#fff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
              Go<b>Rush</b>
              <small>.bike</small>
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
                <Link href="/#how">Track an order</Link>
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
            <h4>Business</h4>
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
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cookie policy</a>
            </li>
            <li>
              <a href="#">Terms &amp; conditions</a>
            </li>
            <li>
              <a href="#">Refunds &amp; cancellations</a>
            </li>
            <li>
              <a href="#">Community guidelines</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
