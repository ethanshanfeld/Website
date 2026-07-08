---
layout: base.njk
title: Home
---
<section class="hero">
  <h1>featured writing</h1>
</section>

<section class="article-grid">
{%- for article in collections.articles %}
  <a class="article-card" href="{{ article.data.url }}" target="_blank" rel="noopener">
    <img src="{{ article.data.image }}" alt="" class="article-thumb">
    <span class="article-overlay">
      <span class="article-title">{{ article.data.title }}</span>
    </span>
  </a>
{%- endfor %}
</section>
