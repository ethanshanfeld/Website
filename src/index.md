---
layout: base.njk
title: Home
---
<section class="hero">
  <h1 class="balloon-title">
    <span class="layer l-black">ethan shanfeld</span>
    <span class="layer l-white">ethan shanfeld</span>
    <span class="layer l-color">ethan shanfeld</span>
    <span class="layer l-shine" aria-hidden="true">ethan shanfeld</span>
  </h1>
</section>

<div class="marquee">&#10038; &#10038; &#10038; FEATURED WRITING &#10038; &#10038; &#10038;</div>

<section class="article-grid">
{%- for article in collections.articles %}
  <a class="article-card" href="{{ article.data.url }}" target="_blank" rel="noopener">
    <img src="{{ article.data.image }}" alt="" class="article-thumb">
    <span class="article-overlay">
      <span class="article-title">{{ article.data.title }}</span>
    </span>
    {% if article.data.cover %}<span class="cover-sticker"><img src="{{ article.data.cover }}" alt="Magazine cover"><span>Cover Story</span></span>{% endif %}
  </a>
{%- endfor %}
</section>
