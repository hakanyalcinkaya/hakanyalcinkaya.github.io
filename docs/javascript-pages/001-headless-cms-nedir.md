---
title: Headless CMS Nedir?
date: 2019-01-21 10:20
description: ""
category: JavaScript
tags: ['HeadlessCMS', 'JavaScript', 'VuePress']
meta:
  - name: description
    content: HeadlessCMS Nedir? Yeni Nesil Modern Web Siteleri Nasıl Yapılır? Bu sayfadan inceleyebilirsiniz
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages
---
<Title/>

![headless-cms](../img/headless-cms.png)

İlk önce Head nedir? bu soruyu sormamız lazım sanırım. Eğer bu soruyu yanıtını alabilirsek **Headless** kavramını daha rahat anlamış oluruz.

Bu konuda konuşabilmemiz için WordPress'i örnek vermek istiyorum. WordPress; PHP ile yazılmış harika bir CMS. Bu CMS'i çalıştırabilmek için PHP çalıştırabilir sunucu, Web Server ve verilerimizi tutabilmemiz için veritabanı gerekiyor.

WordPress; PHP ile verilerimizi çekip oluşturduğumuz tema ile render edip bize sonucu gösteriyor. Sonucu gösterebilmek için sunucu tarafında HTML sayfamızı render ediyor. Render edilen kısmı View olarak düşünebiliriz.

Temelde MVC yapılarında View'ın BackEnd'ten çıkartılıp FrontEnd'e geçirilmesi ile birlikte aslında BeckEnd'ten kafayı koparmış olduk :) yani View kısmı aslında Head olarak belirtiliyor.

React / Vue gibi FrontEnd View kütüphaneleri birçok işi kullanıcının Web tarayıcısında çözmemize olanak sağladı. Ama CMS'ler MVC gibi sanki bütünleşik bir yapıda çalışmaya devam etmişlerdi. WordPress REST API bu sorunu da çözüp View katmanını kullanmadan CMS'i kullanmamıza yardımcı oldu. Yani Headless CMS'e geçiş yapmamızı sağladı diyebiliriz.

Yinede Headless CMS diyince aklımıza WordPress gelmiyor. Çünkü WordPress ilk kurulum aşamasında hemen DB bağlantısı istiyor ve Headless çözümünü bize sonradan sunuyor.

Şu anda Vue veya React ile geliştirilmiş, hatta Database olarak Google Drive, GitHub repo gibi birçok yeri kullanan CMS'ler var.

CMS'in asıl görevi verileri tutmak değil, verileri yönetmek olarak değerlendirecek olursak Headless CMS'ler ile harika yapılar oluşturabiliriz.

**Harika Headless CMS çözümlerine göz atmak için:**
[https://headlesscms.org/](https://headlesscms.org/)
