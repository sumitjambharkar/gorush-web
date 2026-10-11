import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How GoRush collects, uses, shares and protects personal information across GoRush, GoRush Partner and GoRush Store.",
};

const PRIVACY_EMAIL = "steynkoli08@gmail.com";

export default function PrivacyPage() {
  return (
    <>
      <main id="main">
        <section className="page-hero">
          <div className="wrap">
            <h1>Privacy policy</h1>
            <p className="lead">
              How we collect, use, share and protect personal information when you use GoRush, GoRush Partner
              and GoRush Store.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="wrap legal-grid">
            <nav className="legal-toc" aria-label="On this page">
              <h2>On this page</h2>
              <ol>
                <li><a href="#about">About GoRush</a></li>
                <li><a href="#collect">Information we collect</a></li>
                <li><a href="#use">How we use your information</a></li>
                <li><a href="#sharing">Sharing of information</a></li>
                <li><a href="#payments">Payments</a></li>
                <li><a href="#retention">Data retention</a></li>
                <li><a href="#security">Data security</a></li>
                <li><a href="#rights">User rights and account deletion</a></li>
                <li><a href="#third-party">Third-party services</a></li>
                <li><a href="#children">Children&apos;s privacy</a></li>
                <li><a href="#law">Applicable law</a></li>
                <li><a href="#changes">Changes to this policy</a></li>
                <li><a href="#contact">Contact and grievances</a></li>
                <li><a href="#acknowledgement">Acknowledgement</a></li>
              </ol>
            </nav>

            <div className="legal">
              <h2 id="about">1. About GoRush</h2>
              <p>
                GoRush (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo; or &ldquo;Company&rdquo;)
                operates digital platforms that facilitate parcel delivery and food delivery services through
                the following applications:
              </p>
              <ul>
                <li>
                  <strong>GoRush:</strong> Customer application for requesting and managing available services.
                </li>
                <li>
                  <strong>GoRush Partner:</strong> Application for delivery partners and captains to manage and
                  fulfil service requests.
                </li>
                <li>
                  <strong>GoRush Store:</strong> Application for food ordering, restaurant/store order management
                  and food delivery services, as applicable.
                </li>
              </ul>
              <p>
                This Privacy Policy explains how we collect, use, store, process, disclose and protect personal
                information when you use our applications, website or related services.
              </p>
              

              <h2 id="collect">2. Information we collect</h2>
              <h3>2.1 Personal information</h3>
              <p>
                We may collect your name, mobile number, email address, profile photograph, saved addresses and
                other account details that you provide when registering or using our services.
              </p>

              <h3>2.2 Account information</h3>
              <p>
                We may collect account identifiers, login and authentication information, account preferences
                and other details necessary to create, secure and manage your account.
              </p>

              <h3>2.3 Parcel and food delivery information</h3>
              <p>To fulfil orders and delivery requests, we may collect:</p>
              <ul>
                <li>Pickup and delivery addresses.</li>
                <li>Customer and recipient names and contact details.</li>
                <li>Parcel or food order details and delivery instructions.</li>
                <li>Order status, timestamps and delivery history.</li>
                <li>Delivery charges, transaction references and refund records.</li>
                <li>Complaints, cancellations and customer feedback.</li>
              </ul>

              <h3>2.4 Delivery partner information</h3>
              <p>
                For GoRush Partner, we may collect information necessary to register and verify delivery
                partners, including:
              </p>
              <ul>
                <li>Name, contact details and profile photograph.</li>
                <li>Driving licence and vehicle documents, where applicable.</li>
                <li>Identity and verification documents, where lawfully required.</li>
                <li>Bank or payout details needed for settlements.</li>
                <li>Duty status, delivery history and service performance.</li>
                <li>Ratings, complaints and verification records.</li>
              </ul>
              <p>
                Background checks may be performed where appropriate, legally permitted and necessary for the
                services provided.
              </p>

              <h3>2.5 Restaurant and store information</h3>
              <p>
                For GoRush Store, we may collect restaurant or store names, business contact details, addresses,
                menu or product information, prices, photographs, operating hours, order records and payment
                settlement information.
              </p>
              <p>
                Where applicable, we may also collect business registration and licence details needed for
                verification and compliance.
              </p>

              <h3>2.6 Location information</h3>
              <p>With the relevant device permissions, we may collect precise or approximate location information to:</p>
              <ul>
                <li>Identify pickup and delivery locations.</li>
                <li>Assign nearby delivery partners.</li>
                <li>Provide navigation and delivery tracking.</li>
                <li>Share delivery progress with customers.</li>
                <li>Investigate delivery disputes and support safety.</li>
                <li>Detect suspicious or fraudulent activity.</li>
              </ul>
              <p>
                Delivery partner location may be processed while a partner is online or completing an active
                delivery, depending on app functionality and the permissions granted.
              </p>
              <p>
                Customers may disable location access through their device settings. Some location-dependent
                features may not work without it.
              </p>

              <h3>2.7 Device and usage information</h3>
              <p>
                We may collect device model, operating system, app version, IP address, diagnostic logs, crash
                reports and information about how users interact with our applications.
              </p>
              <p>This information helps us maintain security, troubleshoot problems and improve app performance.</p>

              <h3>2.8 Customer support information</h3>
              <p>
                We may collect messages, complaints, feedback, ratings, reviews and other information submitted
                through our applications, website or support channels.
              </p>

              <h2 id="use">3. How we use your information</h2>
              <p>We use information for legitimate and disclosed purposes, including:</p>
              <ul>
                <li>Creating and managing user accounts.</li>
                <li>Processing parcel and food delivery requests.</li>
                <li>Connecting customers, delivery partners and participating stores.</li>
                <li>Coordinating pickups, deliveries and order updates.</li>
                <li>Processing payments, refunds and partner settlements.</li>
                <li>Providing customer support and resolving complaints.</li>
                <li>Verifying delivery partners and participating stores.</li>
                <li>Detecting fraud, misuse and security incidents.</li>
                <li>Improving application functionality and service reliability.</li>
                <li>Maintaining business, accounting and transaction records.</li>
                <li>Complying with applicable laws and lawful government requests.</li>
              </ul>
              <p>
                We will not use personal information for purposes incompatible with those disclosed to you
                unless permitted by law or supported by any additional consent required.
              </p>

              <h2 id="sharing">4. Sharing of information</h2>
              <p>We may share relevant information with the following parties when necessary:</p>

              <h3>4.1 Delivery partners</h3>
              <p>
                Customers&apos; relevant contact details, pickup and delivery addresses, parcel or food order
                details and delivery instructions may be shared with the assigned delivery partner.
              </p>

              <h3>4.2 Customers</h3>
              <p>
                Customers may receive relevant delivery partner information, such as name, profile photograph,
                vehicle details where applicable, delivery status and location during an active delivery.
              </p>

              <h3>4.3 Restaurants and stores</h3>
              <p>
                Relevant order details and delivery instructions may be shared with the participating restaurant
                or store to prepare and fulfil orders.
              </p>

              <h3>4.4 Third-party service providers</h3>
              <p>
                We may use service providers for hosting, payments, maps, navigation, SMS, OTP verification,
                notifications, analytics, security and technical support.
              </p>
              <p>
                These providers may process relevant information to perform services on our behalf, subject to
                applicable contractual and legal requirements.
              </p>

              <h3>4.5 Legal and safety disclosures</h3>
              <p>
                We may disclose information when required by law or lawful legal process, or when reasonably
                necessary to investigate fraud, protect safety, enforce our terms or defend legal claims.
              </p>

              <h3>4.6 Business transfers</h3>
              <p>
                Information may be transferred as part of a merger, acquisition, restructuring or sale of
                relevant business assets, subject to applicable law.
              </p>
              <p className="legal-callout">
                GoRush does not sell personal information as a standalone commercial product.
              </p>

              <h2 id="payments">5. Payments</h2>
              <p>Payments may be processed through third-party payment gateways or other supported payment methods.</p>
              <p>
                We may receive transaction references, payment confirmations, refund information and settlement
                records needed to operate our services.
              </p>
              <p>Payment processing may also be governed by the privacy policies of the relevant payment providers.</p>

              <h2 id="retention">6. Data retention</h2>
              <p>
                We retain personal information for as long as reasonably necessary to provide services, maintain
                transaction records, resolve disputes, prevent fraud and comply with legal obligations.
              </p>
              <p>Retention periods depend on the type of information and applicable requirements.</p>
              <p>
                When information is no longer required, we will take appropriate steps to delete it or anonymise
                it, subject to lawful retention requirements.
              </p>
              <p>Closing an account does not automatically require the immediate deletion of every record.</p>

              <h2 id="security">7. Data security</h2>
              <p>
                We take reasonable technical and organisational measures to protect personal information against
                unauthorised access, loss, misuse, alteration or disclosure.
              </p>
              <p>
                These measures may include access restrictions, authentication, security monitoring and
                appropriate safeguards for stored information.
              </p>
              <p>
                No electronic system can guarantee absolute security. Users should protect their account
                credentials and promptly report suspected unauthorised access.
              </p>

              <h2 id="rights">8. User rights and account deletion</h2>
              <p>
                Subject to applicable law, users may request access to information about their personal data,
                correction of inaccurate details, deletion where legally applicable, withdrawal of consent where
                processing relies on consent, and redress of privacy-related grievances.
              </p>
              <p>
                Users may request account deletion through available app settings or by emailing{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>.
              </p>
              <p>
                We may retain certain information where required for legal compliance, accounting, fraud
                prevention, dispute resolution or other lawful purposes.
              </p>
              <p>Requests may require identity verification before processing.</p>

              <h2 id="third-party">9. Third-party services</h2>
              <p>Our applications or website may contain links to third-party websites or services.</p>
              <p>
                Those services may have their own privacy policies and practices. Users should review the
                applicable policies before providing information directly to third parties.
              </p>

              <h2 id="children">10. Children&apos;s privacy</h2>
              <p>
                Our services are not intended for individuals who are legally ineligible to use the relevant
                services.
              </p>
              <p>
                We do not knowingly collect personal information from children in circumstances where such
                collection is prohibited by applicable law. Where required, appropriate parental consent and
                other safeguards will be implemented.
              </p>

              <h2 id="law">11. Applicable law</h2>
              <p>
                GoRush intends to handle personal information in accordance with applicable Indian laws,
                including the Information Technology Act, 2000, relevant rules and applicable provisions of the
                Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules, 2025,
                according to their respective commencement dates and applicability.
              </p>
              <p>We may update our policies and practices to reflect changes in applicable legal requirements.</p>

              <h2 id="changes">12. Changes to this policy</h2>
              <p>
                We may revise this Privacy Policy to reflect changes in our services, technology, information
                practices or legal obligations.
              </p>
              <p>
                Updated versions will be published on our website and/or within the relevant applications. Where
                required by law, we will provide appropriate notice or obtain additional consent.
              </p>

              <h2 id="contact">13. Contact and grievances</h2>
              <p>
                For privacy questions, personal information requests, account deletion or complaints, please
                contact:
              </p>
              <dl className="legal-contact">
                <div>
                  <dt>Company</dt>
                  <dd>GoRush</dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
                  </dd>
                </div>
                <div>
                  <dt>Website</dt>
                  <dd>
                    <a href="https://gorush.bike">gorush.bike</a>
                  </dd>
                </div>
              </dl>
              <p>We will review and address privacy-related requests in accordance with applicable law.</p>

              <h2 id="acknowledgement">14. Acknowledgement</h2>
              <p>
                By using GoRush, GoRush Partner or GoRush Store, you acknowledge that this Privacy Policy has
                been made available to you.
              </p>
              <p>
                Where consent is required for processing personal information, GoRush will provide the relevant
                notice and seek consent as required by applicable law.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
