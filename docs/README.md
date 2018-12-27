---
home: true
title: Ana Sayfa
detail: Hakan Yalçınkaya - Blog
<!-- heroImage: /python.jpg -->
heroText: DevBlog
tagline: Hakan Yalçınkaya
actionText: İncele →
actionLink: /hello-world
date: 2018-12-28
features:
- title: Blog Yazıları
  details: Sitemde; Django, Python, JavaScript ve kullanmayı sevdiğim uygulamalardan bahsettim. Umarım seversin ;)
- title: Bu Sitede VuePress Kullanıldı
  details: VuePress pre-rendered statik HTML yapısı kullanıyor ve inanılmaz hızlı. JAMstack yapısını daha iyi anlamamız için VuePress bize inanılmaz konforlu bir alan sunuyor. Kullanmanı tavsiye ederim.
footer: Copyright © 2018
---
<!-- $page -->
<!-- $site -->

## Sayfalar
<ul>
  <li v-for="item in $site.pages">
    <a v-bind:href="item.path">
    	<span v-if="item.title == 'Home' ">Ana Sayfa</span> 
    	<span v-else>{{ item.title }}</span>
    </a>
  </li>
</ul>



