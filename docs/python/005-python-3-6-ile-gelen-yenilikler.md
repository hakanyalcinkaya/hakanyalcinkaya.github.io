---
title: Python 3.6 ile Birlikte Gelen Yenilikler (f-strings, Underscores, Secrets, ve Types)
date: 2019-02-08 10:20
description: ""
category: Python
tags: ['python', 'python3', ]
meta:
  - name: description
    content: Python 3.6 ile Birlikte Gelen Yenilikler (f-strings, Underscores, Secrets, ve Types)
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages, linux, file manager, mac os, ipython, bpython, ptpython
---
<Title/>

Python 3.6 ile birlikte gelen [f-strings](004-python-3-6-formatted-string.html) ile ilgili ayrı bir makale yazıp en çok kullanılan biçimlendirme şekillerini ayrıca yazmıştım. Şimdi hızlı bir tur daha atalım :)

Python 3.6 ile Birlikte Gelen Yenilikler:
- [f-strings](https://www.python.org/dev/peps/pep-0498/)
- [Underscores in Numeric Literals](https://www.python.org/dev/peps/pep-0515/)
- [Secrets](https://docs.python.org/3.6/library/secrets.html#module-secrets)
- [Type Hints](https://www.python.org/dev/peps/pep-0484/)

## 👍 f-strings:
.format kullanımından daha hızlı ve daha az yer kaplıyor, ayrıca performans açısından daha iyi olduğuyla ilgili makaleler var. Bu yüzden f-strings'i kullanmaya başlayalım. [f-strings makalemi incelemek için tıkla..](004-python-3-6-formatted-string.html)

## Underscores (Rakamsal İfadeler İçin Altçizgili Yazım):
Çok önemli olmasada yine Python'ın kod okurken kolaylık sağlamak adına yaptığı geliştirmelerden biri olduğunu söyleyebiliriz. Örneğin **price = 1000000.00** yazdığımda okumak zorken, tanımlamalarda artık **price = 1_000_000.00** olarak kullanabileceğiz.
```python
price = 1_000_000.00
```

## Secrets
Secrets modülü sayesinde token veya güvenli veriler oluşturabiliyoruz.

```python
import secrets

secrets.token_urlsafe(32)
>>> '51PxQ5t9tAKXKrnLwgxNu84viuUc88dTDwD-w_35HlI'

```

## 👍 Type Hints:
Statik dillerden alışık olduğumuz price:int = 100 ifadesini artık Python'da kullanabileceğiz. Fakat Python dinamik bir dil olduğundan dolayı tanımlamış olduğunuz price değişkenini price = 'this_is_price' int'ten farklı bir şekilde tanımlayabilirsiniz. Ve yine pep 0484'teki makalede diyor ki;

**Python will remain a dynamically typed language, and the authors have no desire to ever make type hints mandatory, even by convention.**

Yani Type Hints gelmiş olsa bile bu zorunlu bir özellik olmayacak ve dinamik dili bağlamayacak.

Yinede Fonksiyonlarımızda bu özelliği kullanacak olursak fonksiyonları daha güvenli hale getirebiliriz. Çünkü fonksiyonlarda bu denetim güzel çalışıyor.

Kullandığınız ide veya type checker bu denetimi yapabilir ve hatalarınızı gösterir fakat yinede Type Hints'e aykırı düzenlemeleriniz çalışmaya devam edebilir.

```python
# pip install mypy

def greeting(name: str) -> str:
    return 'Hello ' + name

price:int = 1_000

print(price)

price = "this is price"

print(price)

print(greeting("Hakan"))

>>> 1000
>>> this is price
>>> Hello Hakan


print(greeting(1_000))

In [6]: print(greeting(1_000))
---------------------------------------------------------------------------
TypeError                                 Traceback (most recent call last)
<ipython-input-6-5ef8c867790a> in <module>
----> 1 print(greeting(1_000))

<ipython-input-5-4849dcb90972> in greeting(name)
      1 def greeting(name: str) -> str:
----> 2     return 'Hello ' + name
      3
      4 price:int = 1_000
      5

TypeError: must be str, not int

```

```python
############ TERMINAL ############
# python_type_hints.py file:
"""
def greeting(name: str) -> str:
    return 'Hello ' + name

price:int = 1_000

print(price)

price = "this is price"

print(price)

print(greeting("Hakan"))

print(greeting(1_000))
"""

$: mypy python_type_hints.py
python_type_hints.py:8: error: Incompatible types in assignment (expression has type "str", variable has type "int")
python_type_hints.py:14: error: Argument 1 to "greeting" has incompatible type "int"; expected "str"
```
