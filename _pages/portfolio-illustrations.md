---
layout: windowed
title: "Illustrations"
category: "illustrations"
header_image: "https://www.toptal.com/designers/subtlepatterns/uploads/papyrus.png"
---

<h1>{{ page.title }}</h1>

<div class="portfolio-grid">
  {% assign items = site.portfolio | where: "category", page.category %}
  {% for item in items %}
    <a class="portfolio-card" href="{{ item.url | relative_url }}">
      {% if item.thumbnail %}
        <img src="{{ item.thumbnail | relative_url }}" alt="{{ item.title }}">
      {% endif %}
      <div class="portfolio-title">{{ item.title }}</div>
    </a>
  {% endfor %}
</div>
