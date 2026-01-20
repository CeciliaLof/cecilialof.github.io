---
layout: windowed
title: "Tutorials"
category: "tutorials"
---

<h1>Tutorials</h1>

<div class="tutorial-grid">
  {% for tutorial in site.tutorials %}
    <a class="tutorial-card" href="{{ tutorial.url | relative_url }}">
      <img src="{{ tutorial.image | relative_url }}" alt="{{ tutorial.title }}">
      <div class="tutorial-title">{{ tutorial.title }}</div>
    </a>
  {% endfor %}
</div>
