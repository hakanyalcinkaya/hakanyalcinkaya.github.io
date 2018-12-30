---
title: Python ve Kod Yazma Sanatı
Date: 2018-12-25 16:20
Description: ""
Category: Python
tags: ['Python']
---

# Python ve Kod Yazma Sanatı

![Python](../img/python.jpg)

Python yazılım dili ilgili birçok övgü dolu yazıyı siz de okumuşsunuzdur. "Harika bir dil, yazması çok kolay, okunması çok kolay ve hızlı.." gibi görüşleri sıklıkla duyarız. Python dilinin geliştirdiği güzel özelliklerden biri ise bu görüşleri doğrulayan güzel kod yazma sanatıdır diyebiliriz.

*"Kodu çalıştırdığımda hata vermiyorsa sorun yoktur.."* Yazılım geliştirmeye başladığımızda kullandığımız ilk yapı genelde budur ve uzunca bir süre bu yarzımızı değiştirmeden yazılımlarımızı geliştirmeye devam ederiz. Yazdığımız kodu 3 ay sonra okumaya çalıştığımızda eğer x, y, z, i gibi değişkenler(variables) görüyorsak ve bu değişkenlerin ne olduğunu anlamakla vakit kaybetmeye başladıysak bir şeylerin değişmesinin zamanı gelmiştir. İşte bu noktada düzgün değişken adları tanımlamak bizi bir nebze kurtarır. Peki ya diğer kurallar ne olacak diye sorduğumuzda, hangi kurallar diyeceğinizi duyar gibiyim. Bizim kültürümüzde olmayan ve sonradan öğrendiğimiz yazılım dillerinin yazım kurallarına aşina olmak, o kültüre ayak uydurmak bizim için epey zor olabiliyor. İşte tam bu noktada karşımıza okunması ve yazılması en kolay dillerden biri olan  Python çıkıyor. Python dil kurallarını, yazılım dilinin felsefesini ön planda tutuyor. PEP 8 ve PEP 20 Python dilini anlamamız için harika PEP(Python Enhancement Proposals / Python Geliştirme Önerileri)'ler sunuyor. 

Ref: [https://www.python.org/dev/peps/](https://www.python.org/dev/peps/)

## PEPler Hakkında Genel Bilgiler

PEP(Python Enhancement Proposals / Python Geliştirme Önerileri); Python'ın gelişimini sağlamak kurulmuş genel yapıdır. Python Geliştirme Önerileri(PEPs) öneri sırasına göre artan sıralı numara alırlar, PEPler sisteme girildikten sonra oylamaya yapılır(PEP 10) ve beğenilen öneriler oylama sonucuna göre işleme alınır. PEP önerilerinin nasıl yapılacağı ve oylamaların nasıl çalıştığı yine PEP ile anlatılmaktadır(PEP 1).

## PEP 8 - Python Kod Yazım Stili

Ref: [https://www.python.org/dev/peps/pep-0008/](https://www.python.org/dev/peps/pep-0008/)

Oluşturma Tarihi : 05-Temmuz-2001



Birçok yazılım dilinde kodlar gözümüze hoş gözükmese de, baktığımızda anlamasak bile çalıştırdığımızda kod hata vermeyebilir. Ama Python dili PEP 8 standartlarıyla okunabilir kod yazmanın önemini çok sıkı bir şekilde vurgular, hatta kodunuzun basit gibi gözüken hatalardan dolayı çalışmamasına sebep olur. İlk bakışta bunun çok saçma olduğunu düşünsenizde PEP 20'de geçen yaklaşımlar PEP 8 standartlarının önemini vurgular. Okunabilirlik kazanır (Readability counts - PEP 20).

### A Foolish Consistency is the Hobgoblin of Little Minds (Aptalca Bir Tutarlılık Küçük Beyinlerin Cinliğidir)

PEP 8 Stil Referanslarını okumaya başladığımda yukardaki başlığı görünce çok şaşırmıştım ve çok ilgimi çekmişti. Python boşlukların nasıl olması gerektiğinden tutunda satırdaki karakter sayısına kadar herşeyi PEP 8 ile standartlaştırıyor. Eğer oluşturduğunuz kodlarda içiçe girinti(indentation) kullanmanız gerekiyorsa bir indent için 4 boşluk, diğeri için 2 boşluk veremezsiniz. Hepsinin standart olması gerekir. Bu standartlar sizin ve başkalarının kodu okumasını kolaylaştırır. Aynı zamanda daha hızlı kod yazmanıza olanak sağlar. 

Hatalı kod örneği:

```python
language = "Python"
version = "3.6.3"
if language == "Python":  # üst satırda boşluk bırakılmamış
  print(language)  # 2 karakter boşluk ile indent kullanılmış.
  if version == "3.6.3":  # Bir satır boşluk bırakılmamış
        print(version)  # yine 6 karakter boşluk ile indent kullanılmış, en son satırdan sonra boşluk bırakılmamış
```

PEP 8 ile yazılmış örnek kod:

```python
language = "Python"
version = "3.6.3"

if language == "Python":
    print(language)

    if version == "3.6.3":
        print(version)  # 4 karakter boşluk ile indent kullanılmış

```

> [https://pep8.org/](https://pep8.org/) sitesinden PEP 8 standartlarını daha rahat okuyarak inceleyebilirsiniz.



#### PEP 8'in En Önemli Kuralları Hangileridir?

- Indentation(girinti) önemli

  - Girintilerin düzgün olmadığı yapılar çalışmaz

- Bir satırda en çok 79 karakter olmalıdır

  - Satırın okunaklığı için önemlidir \ işareti ile alt satırdan yazmaya devam edebilirsiniz.

- Boş satırlar okunabilirlik için önemli

  - Ekstra boş satırlar göze hoş gözükmez, boş satırların anlamlı olması da önemlidir. Class'tan önce iki satır, fonksiyonlar arası birer satır boşluk olması gerekir.

- Tab mı Boşluk(space) mu ?

  - Tab her bilgisayarda ve IDE'de farklı uzunlukta ayarlanabilir, bazen görünümü zorlaştırabilir. Bu yüzden indentation için boşluk(space) kullanımı önerilir

  ​

#### PEP 8 Kurallarını Nasıl Kullanabilirim ?

PEP 8, Python kodu yazmaya başladığınızda uymanız gereken yazım kurallarıdır, bu kurallar genel olarak IDE'lerde tanımlıdır. IDE kullanmaya başladığınızda Python kodunun PEP 8'e uyup uymadığını gösterir. İsterseniz PEP 8 kontrolü yapan PIP paketi sayesinde kodlarınızı kontrol edebilirsiniz, veya http://pep8online.com/ sitesine kodlarınızı yapıştırıp PEP 8 kurallarını test edebilirsiniz.



```python
Command Promt:
$ pip install pep8
$ pip install --upgrade pep8
$ pip uninstall pep8

$ pep8 --first optparse.py
optparse.py:69:11: E401 multiple imports on one line
optparse.py:77:1: E302 expected 2 blank lines, found 1
optparse.py:88:5: E301 expected 1 blank line, found 0
optparse.py:222:34: W602 deprecated form of raising exception
optparse.py:347:31: E211 whitespace before '('
optparse.py:357:17: E201 whitespace after '{'
optparse.py:472:29: E221 multiple spaces before operator
optparse.py:544:21: W601 .has_key() is deprecated, use 'in'
```

#### 

## PEP 20 - The Zen of Python

Ref: [https://www.python.org/dev/peps/pep-0020/](https://www.python.org/dev/peps/pep-0020/)

Oluşturma Tarihi : 19-Ağustos-2004



Zen birçok anlama gelsede bizim için The Zen of Python; Python Felsefesi, Python Yazım Tarzı gibi anlamlara gelebilir.

Python Zen'ini, Python Shell'i içerisinden açıp okuyabilirsiniz. Yani Python felsefesi gerçektende dilin içerisine yerleştirilmiştir ve Python kod yazma sanatı istesenizde istemesenizde kod yazmaya başladıkça sizi içine çekmeye başlayacaktır.

Python Shell içerisinde:

```python
import this
# Yukarıdaki kodu çalıştırdığınızda aşağıdaki The Zen of Python'e ulaşabilirsiniz.
"""
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
"""
```

"PEP 20 by examples" dökümanında ZEN kodlarla açıklanmaya çalışılmıştır. Bu dökümandan birkaç örneği kullanacağım. Dökümanın tamamını incelemek için : http://artifex.org/~hblanks/talks/2011/pep20_by_example.pdf

### Güzel çirkinden daha iyidir(Beautiful is better than ugly).

```python
# Ugly:
halve_evens_only = lambda nums: map(lambda i: i/2, filter(lambda i: not i%2, nums))

# Beautiful
def halve_evens_only(nums):
    return [i/2 for i in nums if not i % 2]

print("Beautiful is better than ugly")
```

Kodumuzu yazarken şiir gibi kod yazmaya çalışmalıyız. Sonuçta yazdığımız kodun güzel gözükmesi de ilerde kod yapısına geri döndüğümüzde bize avantaj sağlayacaktır. Açıklayıcı kod, göze güzel gözüken kod düzenlemesi daha kolay bir yapı sunar, yazma motivasyonunu arttırır.

### Açık, örtük olandan daha iyidir(Explicit is better than implicit).

```python
# Implicit:
def load():
    from menagerie.cat.models import *
	from menagerie.dog.models import *
	from menagerie.mouse.models import *

# Explicit
def load():
	from menagerie.models import cat as cat_models
	from menagerie.models import dog as dog_models
	from menagerie.models import mouse as mouse_models

print("Explicit is better than implicit")
```

Python performans açısından ihtiyacımız olmayacak kütüphaneleri kullanmamamızı önerir. Import * komutunu verdiğimizde models içerisindeki tüm modüller gelir. Bunun yerine sadece ihtiyacımız olan yapıyı çağırmamız ve çağırdığımız yapılara güzel isim atamamız kullanım açısından kolaylık sağlayacaktır.

Diğer örnekleri incelemek için : [http://artifex.org/~hblanks/talks/2011/pep20_by_example.pdf](http://artifex.org/~hblanks/talks/2011/pep20_by_example.pdf)

### The Zen of Python - Tüm Maddeler

* Güzel çirkinden daha iyidir(Beautiful is better than ugly).
* Açık, örtük olandan daha iyidir(Explicit is better than implicit).
* Basit, karmaşıktan daha iyidir(Simple is better than complex).
* Komplike, karmakarışıktan daha iyidir(Complex is better than complicated).
* Düz, içiçe olandan daha iyidir(Flat is better than nested).
* Aralıklı, sıkışık olandan daha iyidir(Sparse is better than dense).
* Okunabilirlik kazanır(Readability counts).
* Özel durumlar kuralları yıkacak kadar özel değildir(Special cases aren't special enough to break the rules).
* Partiklik, temizliği yener(Although practicality beats purity).
* Hatalar asla sessizce geçmemeli. Bilinçli olarak susturulmadıkça(Errors should never pass silently. Unless explicitly silenced.).
* Belirsizlik karşısında, tahmin etmenin cazibesine kapılmayın(In the face of ambiguity, refuse the temptation to guess).
* Bir işi doğru yapmanın bir yolu olmalıdır hatta tercihen sadece bir yol(There should be one-- and preferably only one --obvious way to do it).
* Hatta bu yol Hollandalı değilsen açık olmayabilir ilk görüşte(Although that way may not be obvious at first unless you're Dutch).
* Şimdi, asla!dan daha iyidir(Now is better than never).
* Asla, hemen'den iyidir(Although never is often better than *right* now).
* Eğer birşeyin(uygulama, modül, vs.) açıklamak zorsa, o şey kötü bir fikirdir(If the implementation is hard to explain, it's a bad idea).
* Eğer birşeyi(uygulama, modül, vs.) açıklamak kolaysa, o şey iyi bir fikirdir(If the implementation is easy to explain, it may be a good idea).
* İsim Alanları/Uzayları harika fikirlerdir, onlardan daha fazla yapalım(Namespaces are one honking great idea -- let's do more of those!)

Kod yazma sanatı için Python'ın oluşturduğu standartlar bizim yazdığımız kodları daha akılcıl, okunabilir ve geliştirilebilir kılar. Python'ın Zen'i defalarca okunması ve bu konuda yazılmış kodlarla pekiştirilmesi gereken harika bir kaynaktır. 

Şiir gibi kod yazmanız dileğiyle ;)
