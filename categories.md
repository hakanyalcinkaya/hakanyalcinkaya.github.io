---
layout: page
title: Kategoriler
permalink: /categories/
---


{% for category in site.categories %}
  <li>{{ category | first | capitalize }}
    <ul>
    {% for posts in category %}
      {% for post in posts %}
      {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endif %}
      {% endfor %}
    {% endfor %}
    </ul>
  </li>
{% endfor %}