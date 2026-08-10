---
layout: base.njk
title: Home
---
<section class="rows">
{%- for row in collections.homeRows %}
  <div class="row{% if row.type == "covers" %} covers{% endif %}"{% if row.type != "covers" %} style="--row-h: {{ row.height }}px;"{% endif %}>
  {%- for item in row.items %}
    <a class="cell" href="{{ item.data.url }}" target="_blank" rel="noopener"{% if row.type != "covers" %} style="flex: {{ item.data.width | default: 1 }} 1 0%;"{% endif %}>
      {%- if row.type == "covers" -%}
      <img src="{{ item.data.cover | url }}" alt="">
      {%- else -%}
      <img src="{{ item.data.image | url }}" alt="" style="object-position: {{ item.data.focus | default: '50% 50%' }};">
      {%- endif %}
      <div class="overlay"><span class="ttl">{{ item.data.title }}</span></div>
    </a>
  {%- endfor %}
  </div>
{%- endfor %}
</section>
