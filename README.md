# Noah Shaffer — Portfolio

Personal portfolio for Noah Shaffer, CISSP-certified Cybersecurity Engineer.

Built with **Next.js 14** (App Router), **Tailwind CSS**, **TypeScript**, and **Framer Motion**.

## Tech Stack

- **Framework:** Next.js 14 App Router
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel (zero-config)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build    # production build
npm start        # start production server
```

**Vercel:** Push to `main` — Vercel auto-deploys via the connected GitHub repo.

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `GITHUB_TOKEN` | GitHub personal access token (increases API rate limits for the Projects section) | Optional |
| `CONTACT_EMAIL` | Email to receive contact form submissions | Optional |

Create `.env.local` for local development:

```env
GITHUB_TOKEN=ghp_xxxx
CONTACT_EMAIL=NoahWilliamShaffer@gmail.com
```

## Contact Form

The contact form API route is at `app/api/contact/route.ts`. By default it validates and logs submissions. To wire up email delivery, install [Resend](https://resend.com):

```bash
npm install resend
```

Then update `app/api/contact/route.ts` with your Resend API key and `from`/`to` addresses.

## Resume

Place the resume PDF at `public/Noah_Shaffer_Resume.pdf` — the hero "Download Resume" button links directly to this file.

## License

Personal portfolio — all rights reserved.
