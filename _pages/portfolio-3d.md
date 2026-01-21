---
layout: windowed
title: "3D"
category: "3d"
header_image: "https://www.toptal.com/designers/subtlepatterns/uploads/papyrus.png"
---

<h1>{{ page.title }}</h1>

<div class="portfolio-grid">
  {% assign items = site.portfolio | where: "category", page.category %}
  {% for item in items %}
    <a class="portfolio-card" href="{{ item.url | relative_url }}">
      {% if item.images %}
        <img src="{{ item.images[0] | relative_url }}" alt="{{ item.title }}">
      {% endif %}
      <div class="portfolio-title">{{ item.title }}</div>
    </a>
  {% endfor %}
</div>
