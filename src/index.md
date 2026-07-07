---
layout: base.njk
title: Home
---
<section class="hero">
  <h1>Ethan Shanfeld</h1>
  <p class="tagline">Essays and nonfiction on [your subject here — replace this line in <code>src/index.md</code>].</p>
</section>

<section class="latest">
  <h2>Latest essays</h2>
  <ul class="essay-list">
  {%- for essay in collections.essays %}
    <li>
      <a href="{{ essay.url }}">{{ essay.data.title }}</a>
      {% if essay.data.date %}<span class="essay-list-date">{{ essay.data.date | readableDate }}</span>{% endif %}
    </li>
  {%- endfor %}
  </ul>
  <p><a href="/essays/">See all essays &rarr;</a></p>
</section>
