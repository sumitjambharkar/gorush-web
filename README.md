# GoRush.bike (Next.js)

The GoRush.bike site, ported from static HTML to Next.js 15 (App Router, TypeScript).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Structure

```
app/
  layout.tsx          Shared shell: fonts (next/font), header, footer, skip link
  globals.css         Design stylesheet, wired to the next/font Archivo variable
  icon.png            Favicon (apple-icon.png for iOS)
  page.tsx            Home        (was index.html)
  about/page.tsx      About       (was about.html)
  safety/page.tsx     Safety      (was safety.html)
  contact/page.tsx    Contact     (was contact.html)
  privacy/page.tsx    Privacy policy
  not-found.tsx       404 page
  sitemap.ts          /sitemap.xml
  robots.ts           /robots.txt
  api/contact/route.ts  Sends contact form messages by email (Resend)
public/img/           Brand logos (GoRush, Store, Partner + white variants)
components/
  Header.tsx          Mobile menu + active link (client component)
  Footer.tsx          Shared footer with current year
  HeroMap.tsx         Animated route map; pauses for reduced-motion users
  ContactForm.tsx     Validated form; ?type=business etc. preselects a topic
```

Everything that was in `js/script.js` now lives in the Header, HeroMap and ContactForm components.

## Contact form email

The contact form posts to `/api/contact`, which emails the message via [Resend](https://resend.com).
Copy `.env.example` to `.env.local` and fill in `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and
`CONTACT_FROM_EMAIL` (on a domain verified in Resend). Set the same variables on your host.
Until they are set, the form shows an error with the support email address instead of sending.
