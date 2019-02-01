---
title: Django Model Instance'a setattr ile Key, Value Nasıl Gönderilir?
date: 2018-12-29 16:20
category: Django
tags: ['Django', 'DjangoModel']
meta:
  - name: description
    content: Django Model Instance'a setattr ile Key, Value Nasıl Gönderilir?
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages, linux, file manager, mac os, ipython, bpython, ptpython
---

<Title/>

Senaryomuz:
request.GET ile gelen first_name bilgisini alıp eğer Model'in içinde bu tanım varsa eklemek istiyoruz. Fakat gelen tanımı **user.first_name** olarak kullanmak yerine GET ile birlikte gelen KEY, VALUE şeklinde kullanmak istersek ne yapmamız lazım ? eğer key bilgisini alırsak key; user.'first_name' olarak geliyor, biz bu şekilde veri tabanına yazamayız. Bu yüzden setattr ile Instance'a veri eklemeyi göstereceğim.


```python

# Gelen bilgi

dict_request = dict(request.GET)
# Dict içindeki ilk bilgiyi almaya çalışıyoruz:
item, value = next(iter(dict_request.items()))

user = User.objects.get(email='hakanyalcinkaya@gmail.com')

# Hatalı Olan:
user.item = value
>>> user.'item': 'hakan'
# Bu kodda gördüğünüz gibi string veri istediğimiz gibi işlenmedi.

# setattr ile birlikte:
if item in user.__dict__ and value:
    setattr(user, item, value)
    user.save()
```
