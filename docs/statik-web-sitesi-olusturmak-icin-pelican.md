---
title: Statik Web Sitesi Oluşturmak İçin Pelican
Date: 2018-12-13 10:20
Description: ""
Category: Python
tags: ['Python', 'Pelican']
---

## Pelican Nedir?

Pelican; Python ile yazılmış **statik web sitesi** oluşturma aracıdır.

* Blog Postlarınızı veya Sayfalarınızı Not/Kod Editörünüzle hemen yazmaya başlayabilirsiniz
* Markdown kullanabilirsiniz
* Her türlü komut için inanılmaz basit bir CLI(Command Line Interface) hazır gelmektedir.
* Statik sayfaları heryere entegre edebilirsiniz
* Jinja2 Template Engine kullanıyor

## Neden ismi Pelican?

"Pelican" aslında bir anagramdır. **Calepin**  *Not Defteri* anlamına gelmektedir.


## Neden Pelican Kullanmalıyım?
Statik web siteleri oluştururken PHP kullanmayı çok severim çünkü sayfaları parçalayıp **include** gibi basit işlemlerle birleştirebilirsiniz.

Projelerimi Django ile hazırlarken tüm yapıyı en baştan hazırlamak yerine statik sayfa iskeletini önceden çıkarmayı seviyorum. Bu yüzden Pelican Django'da kullanmaya alışık olduğum Jinja2'yı basit bir şekilde kullanmama olanak sağlıyor. Statik Web Siteleri günümüzde çok popüler olmaya başladı. Jekyllrb bu konunun öncülüğünü yapmış olsa da Statik Web Siteleri diyince akla Front End teknolojileri ile geliştirilmiş sistemler geliyor. Peki Pelican Front End teknolojisiyle mi geliştirildi? Hayır :) Python ile geliştirildiği için yani JavaScript kullanılmadığı için Front End teknolojisi diyemeyiz. Ama yinede aynı amaca hizmet ettiğini unutmamanız gerekiyor.

::: tip Bu site ilk önce Jekyllrb, daha sonra Pelican, en son VuePress ile geliştirildi.
Naaptın Hakan? :)
Ne derler bilirsiniz; Deneme! Yanılma!.. yani denemezsen yanılmazsın. Yazılım geliştirici olarak ilk yapmamız gerken şey bunu düzeltmektir. 
Biz birçok kez deneriz, yanılırız ve daha iyisini yapmaya çalışırız. 
Hızlı olmak için birçok ürünü denemiş ve hangisinde daha hızlı olacağımıza karar vermiş olmamız gerekiyor. 
Python/Django geliştiricisi olsam da Front End Frameworklerin cazibesine kapılmamak içten değil. Bu iki dünya birbirinden ayrılmış gibi gözükse de Serverless yapılar ve Backend as a Service teknolojileri bizi Front End yapısına daha çok yaklaştırcak, bulduğumuz çözümler bu kısma doğru kaymaya başlayacak.
:::