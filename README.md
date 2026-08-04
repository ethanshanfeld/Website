# Ethan Shanfeld — writing site

Two pages: a home page featuring your published writing as a clickable
photo grid, and an About page with your bio, headshot, and contact info.
You never need to touch code to update it — everything you'd want to
change day-to-day lives in plain text files.

## Adding a featured article to the home page

The home page is a full-bleed photo grid. Every article file becomes one
tile, and falls into one of two kinds automatically:

- **Story tile** — a regular editorial photo, cropped to fill its tile.
- **Cover tile** — the full, uncropped Variety cover image. Articles get
  this treatment simply by including a `cover` field (see below); these
  are automatically grouped into their own full-width rows near the top
  of the page.

To add one:

1. Go to `src/articles/` and duplicate any file there.
2. Rename the copy, e.g. `src/articles/my-article.md`.
3. At the top of the file, between the `---` lines, fill in:
   - `title` — the article's headline (shown when a visitor hovers the tile)
   - `url` — the link to the published article
   - `image` — the path to a thumbnail image (see below) — required for
     story tiles, unused for cover tiles
   - `focus` (optional) — where to center the crop, e.g. `"50% 20%"` to
     keep the top of a photo in frame. Defaults to centered.
   - `cover` (optional) — the path to the full magazine cover image. Set
     this to make the article a cover tile instead of a story tile.
4. Leave everything below the second `---` blank — these files hold only
   the info above, nothing else.
5. Save, then commit and push (or ask Claude to do it for you). The new
   tile appears automatically on the home page.

Tiles are ordered alphabetically by file name, separately within cover
tiles and story tiles. To control the order, name files with a number
prefix, e.g. `01-my-first-piece.md`, `02-next-piece.md`.

To remove an article, delete its file.

## Adding your own images

1. Add your image file to `src/images/` (for a headshot) or
   `src/images/articles/` (for an article thumbnail or cover). JPG, PNG,
   and WebP all work.
2. In `src/about.md`, change the headshot `src="..."` to point to your new
   file, e.g. `/images/my-headshot.jpg`.
3. In each article file in `src/articles/`, set `image:` (and `cover:`,
   if it's a cover story) to point to your new file, e.g.
   `/images/articles/my-article-photo.jpg`.

Cover images should be the actual magazine cover at its full 3:4-ish
proportions (they're shown uncropped) — the current covers are all
560×740px. Story thumbnails can be any reasonably wide photo; use `focus`
to control what part of it stays visible when it's cropped.

## Editing your bio and contact info

Open `src/about.md` and edit the text directly — your bio paragraph,
email, and any social links.

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
- `src/css/style.css` — all of the site's visual styling
- `src/index.md` — the home page, which lists everything in `src/articles/`
- `src/about.md` — the About page
- `.eleventy.js` — includes the logic that sorts articles into cover vs.
  story tiles and groups them into rows; you shouldn't need to touch this
  for day-to-day updates

## Deploying

Pushing to the `main` branch automatically builds and publishes the site
via GitHub Pages, using the workflow in
`.github/workflows/deploy.yml`. The first time, enable Pages for this
repository under **Settings → Pages → Source: GitHub Actions**.
