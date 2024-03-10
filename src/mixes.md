---
title: Mixes
layout: 'layouts/home.html'
---
<ul>
{%- for mix in collections.mix | reverse -%}
    <li>{{ mix.data.title}}</li>
{%- endfor -%}
</ul>
