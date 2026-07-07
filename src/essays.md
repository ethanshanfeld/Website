---
layout: base.njk
title: Essays
permalink: /essays/
---
<h1>Essays</h1>
<ul class="essay-list">
{%- for essay in collections.essays %}
  <li>
    <a href="{{ essay.url }}">{{ essay.data.title }}</a>
    {% if essay.data.date %}<span class="essay-list-date">{{ essay.data.date | readableDate }}</span>{% endif %}
  </li>
{%- endfor %}
</ul>
