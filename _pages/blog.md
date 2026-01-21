---
layout: windowed
title: "Blog"
category: "blog"
---

<h1>Blog</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="font-size:0.8rem; color:var(--accent);">
        — {{ post.date | date: "%Y-%m-%d" }}
      </span>
    </li>
  {% endfor %}
</ul>
