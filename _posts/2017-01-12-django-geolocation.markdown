---
layout: post
title: "Django Geolocation"
description: ""
category: Django
tags: ['geolocation','django']
---

[Django Geolocation](https://docs.djangoproject.com/en/1.10/ref/contrib/gis/geoip2/)  ile bir Domain'in ip sinin hangi şehirde barındırıldığını veya bir IP'nin hangi şehre bağlı olduğunu öğrenebilirsiniz.

## Kurulum :
Öncelikle `Django`'nun kurulu olduğundan ve `Virtualenv` ile çalışıyorsanız `ENV`nin aktif olduğundan emin olun.

1. Django projenizde `pip install geoip2 pytz` komutunu çalıştırın
2. Django projenizin bulunduğu klasörün içine `geoip` adlı bir klasör oluşturun. 
3. [http://dev.maxmind.com/geoip/geoip2/geolite2/](http://dev.maxmind.com/geoip/geoip2/geolite2/) adresinden [City] ve [Country] verilerini çekip unzip yaptıktan sonra `geoip` klasörüne bu dosyaları atın.
4. `settings.py` dosyanıza `GEOIP_PATH = os.path.join(BASE_DIR, "geoip")` ayarını ekleyin.
5. Artık test edebilirsiniz ;)

### Django Shell Test:

{% highlight python %}
>>> from django.contrib.gis.geoip2 import GeoIP2
>>> g = GeoIP2()
>>> g.city('78.188.177.1')
>>> {'city': u'Istanbul', 'postal_code': None, 'longitude': 28.9684, 'country_code': u'TR', 'latitude': 41.0214, 'country_name': u'Turkey', 'region': u'34', 'dma_code': None}
{% endhighlight %}

[django-geolocation]: https://docs.djangoproject.com/en/1.10/ref/contrib/gis/geoip2/

[City]: http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz
[Country]: http://geolite.maxmind.com/download/geoip/database/GeoLite2-Country.mmdb.gz