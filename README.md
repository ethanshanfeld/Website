# Ethan Shanfeld — writing site

A simple personal site for essays and nonfiction. You never need to touch
code to update it — everything you'd want to change day-to-day lives in
plain text files.

## Publishing a new essay

1. Go to `src/essays/` and duplicate any file there.
2. Rename the copy, e.g. `src/essays/my-new-essay.md`.
3. At the top of the file, between the `---` lines, set the `title` and
   `date`.
4. Replace the text below the second `---` with your essay (plain text,
   or [Markdown](https://www.markdownguide.org/basic-syntax/) if you want
   bold, italics, links, etc.).
5. Save, then commit and push (or ask Claude to do it for you) — the new
   essay appears automatically on the homepage and the essays page, newest
   first.

## Editing other pages

- `src/about.md` — your About page
- `src/contact.md` — your Contact page
- `src/index.md` — the homepage tagline

## Previewing changes locally

If you have this project open in a terminal with Node.js installed:

```
npm install   # first time only
npm start
```

Then open the URL it prints (usually `http://localhost:8080`) in a
browser. Leave it running and it will refresh automatically as you edit
files.

## How the site is built

This site uses [Eleventy](https://www.11ty.dev/), a tool that turns the
plain text files in `src/` into a fast, simple website (no database, no
server to maintain).

- `src/_includes/base.njk` — the shared page layout (header, footer, nav)
- `src/_includes/essay.njk` — the layout used for each essay
- `src/css/style.css` — all of the site's visual styling

## Deploying

Pushing to the `main` branch automatically builds and publishes the site
via GitHub Pages, using the workflow in
`.github/workflows/deploy.yml`. The first time, enable Pages for this
repository under **Settings → Pages → Source: GitHub Actions**.
