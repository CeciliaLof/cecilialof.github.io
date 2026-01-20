---
layout: windowed
title: "Cecilia Löf"
category: "about"
---

<h1>Hello!</h1>
My name is Cecilia and this is my personal website with a blog and portfolio and other fun stuff!

<h2>Latest Blog Posts</h2>
<ul>
  {% for post in site.posts limit:5 %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span style="font-size:0.8rem; color:var(--accent);">
        — {{ post.date | date: "%Y-%m-%d" }}
      </span>
    </li>
  {% endfor %}
</ul>
