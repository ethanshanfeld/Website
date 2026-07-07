---
layout: essay.njk
title: How to add a new essay (delete me later)
date: 2026-07-06
description: A guide to publishing new writing on this site.
---
Every essay on this site is just a plain text file in the `src/essays`
folder, written in [Markdown](https://www.markdownguide.org/basic-syntax/) —
a simple way to format text without any code.

**To publish something new:**

1. Duplicate any file in `src/essays`, such as this one.
2. Give it a new file name, like `src/essays/my-essay-title.md`.
3. At the top of the file, between the `---` lines, update:
   - `title:` — the title of your piece
   - `date:` — the publish date, formatted like `2026-07-07`
4. Below the second `---`, delete this text and write your essay.
5. Save, then commit and push the change (or ask Claude to do it for you).

That's it — the new essay will automatically appear on the homepage and the
essays page, newest first. You can delete this file and `welcome.md` once
you've published your first real piece.
