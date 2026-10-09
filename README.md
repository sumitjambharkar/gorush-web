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
public/img/           Brand logos (GoRush, Store, Partner + white variants)
components/
  Header.tsx          Mobile menu + active link (client component)
  Footer.tsx          Shared footer with current year
  HeroMap.tsx         Animated route map; pauses for reduced-motion users
  ContactForm.tsx     Validated form; ?type=business etc. preselects a topic
```

Everything that was in `js/script.js` now lives in the Header, HeroMap and ContactForm components.

## Next steps

The contact form only shows a success message. To actually send messages, add an API route
(e.g. `app/api/contact/route.ts`) and `fetch` it from the `TODO` in `components/ContactForm.tsx`.
