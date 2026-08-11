koodalanne Oy official web page repository

Static site (plain HTML/CSS). No build step.

## Getting Started

Serve locally with any static file server, e.g.:

```bash
python3 -m http.server 3000
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Hosted on Vercel as a static site. Pushing to the default branch triggers an
automatic deployment. Build configuration lives in `vercel.json` (no framework,
no build command — files are served directly from the repo root).
