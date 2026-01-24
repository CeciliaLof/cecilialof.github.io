---
layout: windowed
title: Frutiger Aero Game
category: "game-projects"
game_tag: frutiger-aero-devlog
thumbnail: "https://m.media-amazon.com/images/I/71DQB0Xq8ML._AC_UF894,1000_QL80_.jpg"
---

{% assign devposts = site.posts | where_exp: "post", "post.tags contains page.game_tag" %}
{% assign latest = devposts | first %}

## This is the devlog for my frutiger aero game project.

All the blog post related to it will appear here, you can see the previous posts at the bottom. [This](/2026/01/21/a-frutiger-aero-game/) it the current project description but i will eventually create a proper game design document when everything has started up properly.

---

<article class="devlog-latest">

{{ latest.content }}

</article>

<h1>Previous Devlogs</h1>

<ul class="devlog-older">
  {% for post in devposts offset:1 %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <span class="date">{{ post.date | date: "%Y-%m-%d" }}</span>
    </li>
  {% endfor %}
</ul>
