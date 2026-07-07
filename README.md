# Ethan Shanfeld — writing site

Two pages: a home page featuring your published writing as a clickable
photo grid, and an About page with your bio, headshot, and contact info.
You never need to touch code to update it — everything you'd want to
change day-to-day lives in plain text files.

## Adding a featured article to the home page

1. Go to `src/articles/` and duplicate any file there.
2. Rename the copy, e.g. `src/articles/my-article.md`.
3. At the top of the file, between the `---` lines, fill in:
   - `title` — the article's headline
   - `outlet` — the publication it ran in (optional)
   - `url` — the link to the published article
   - `image` — the path to a thumbnail image (see below)
   - `date` — used to order articles, newest first
4. Leave everything below the second `---` blank — these files hold only
   the info above, nothing else.
5. Save, then commit and push (or ask Claude to do it for you). The new
   tile appears automatically on the home page.

To remove an article, delete its file.

## Adding your own images

Placeholder graphics are in `src/images/` so you can see how everything
looks before you have real photos. To swap them in:

1. Add your image file to `src/images/` (for a headshot) or
   `src/images/articles/` (for an article thumbnail). JPG or PNG both work.
2. In `src/about.md`, change the headshot `src="..."` to point to your new
   file, e.g. `/images/my-headshot.jpg`.
3. In each article file in `src/articles/`, change `image:` to point to
   your new file, e.g. `/images/articles/my-article-photo.jpg`.

Square images work best for article thumbnails.

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

## Deploying

Pushing to the `main` branch automatically builds and publishes the site
via GitHub Pages, using the workflow in
`.github/workflows/deploy.yml`. The first time, enable Pages for this
repository under **Settings → Pages → Source: GitHub Actions**.
