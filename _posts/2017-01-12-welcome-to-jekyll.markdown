---
layout: post
title:  "Makefile Kullanın"
date:   2017-01-12 14:03:11 +0300
categories: linux mac
---
Bazen kullandığımız komutları unutuyoruz ve her projede farklı farklı komutlar çalıştırmamız gerekebiliyor.. veya dosyaları başkalarına göndereceğimiz zaman hangi komutları kullanmaları gerektiğini tam olarak açıklayamıyabiliyoruz. İşte tam bu noktada projeye özel komutlat oluşturmak için `Makefile` kullanabilirsiniz. 

Klasörde oluşturacağınız `Makefile`(uzantısı yok, ilk harfi büyük) dosyasına `serve` komutunu eklediğimizde artık altındaki satırı çalıştıracak.. alttaki satırda yazacağınız komutu başlatmadan önce `tab` tuşuna basmanız gerekiyor.
{% highlight linux %}
serve:
  jekyll serve
{% endhighlight %}

Makefile oluşturmak için tutorial : [makefile-tutorial]

[makefile-tutorial]: http://mrbook.org/blog/tutorials/make/

