---
layout: windowed
title: "Cecilia Löf"
category: "about"
---

# Hello!

My name is **Cecilia** and this is my personal website with a blog and portfolio and other fun stuff!
Check out my [about page](/about/) if you want to know more about me. I will be updating the portfolio continually so this site is always a work in progress.

### Why the small website?

I really love the old school internet and i'm not a big fan of the gigantic sites you can find nowadays with flashy animations and transitions.
I'm not sure if this site is mobile friendly, and that is kind of the point since i think we use our phones _too much_.
This website is best viewed on a computer.

---

## Latest Blog Posts

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
