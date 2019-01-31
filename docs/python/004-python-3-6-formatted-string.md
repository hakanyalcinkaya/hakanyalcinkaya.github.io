---
title: Python Formatted Strings(f-strings), .format() ve % ile Metin Biçimlendirme Nasıl Yapılır?
date: 2019-01-30 10:20
description: ""
category: Python
tags: ['python', 'python3', ]
fString: [{
    'title': 'Başa Karakter Eklemek name="python"',
    'percent': '-',
    'format': '"{:_>8}".format(name)',
    'f': 'f"{name:_>8}"',
    'output': "'__python'"
  }
]
meta:
  - name: description
    content: Python Formatted Strings(f-strings), .format() ve % ile Metin Biçimlendirme Nasıl Yapılır?
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages, linux, file manager, mac os, ipython, bpython, ptpython
---
<Title/>

Bu blog yazısına başlarken hedefim Python 3.6 ile birlikte gelen **f-strings**'i anlatmaktı, fakat uzun zamandır kullanılan % ve .format ile metin biçimlendirme özelliklerini birlikte örneklendirirsem daha iyi olacağını düşündüm.

## PEP Döküman Linkleri :
* [f-strings(f'Hello {first_name}'): PEP 498 -- Literal String Interpolation](https://www.python.org/dev/peps/pep-0498/)
* ['Hello {}'.format(first_name) - Advanced String Formatting](https://www.python.org/dev/peps/pep-3101/)

% Biçimlendirme yöntemi çok uzun zamandır kullanılıyor. Python 2.7 ile birlikte .format özelliği de okuma rahatlığı açısından sıkça kullanılmaya başlandı. Python 3.6 ile birlikte gelen f-strings ise performans ve okuma açısından çok daha iyi.


## Hemen kullanmaya başlayalım:

:::danger UNUTMA!
**f''**(f-strings) Python 3.6 ve üzerinde çalışır. Birkaç yerde bu bilgiyi hatırlattım ama yinede buraya uyarı ekliyorum ;)
:::

```python
first_name, last_name = "Hakan", "Yalçınkaya"

# % Kullanımı:
# Python 2
"%s %s" % (first_name, last_name)
>>> 'Hakan Yal\xc3\xa7\xc4\xb1nkaya'

# .format() Kullanımı:
# Python 2
"{} {}".format(first_name, last_name)
>>> 'Hakan Yal\xc3\xa7\xc4\xb1nkaya'

# f"" Kullanımı:
# Python 3.6
f"{first_name} {last_name}"
>>> 'Hakan Yalçınkaya'

# Yer Değiştirmek için:
# Python 2
"{1} {0}".format(first_name, last_name)
>>> 'Hakan Yal\xc3\xa7\xc4\xb1nkaya'

# Python 3.6
f"{last_name} {first_name}"
>>> 'Yalçınkaya Hakan'
```

## Sola, Sağa ve Ortaya Boşluk Bırakma
```python
# Sağa boşluk bırakma:
"hey! %-10s is ready " % "python"
>>> 'hey! python     is ready '

"hey! {:10} is ready".format("python")
>>> 'hey! python     is ready'

f"hey! {'python':10} is ready"
>>> 'hey! python     is ready'

# Sola Boşluk bırakma
"hey! %10s is ready " % "python"
>>> 'hey!     python is ready '

"hey! {:>10} is ready".format("python")
>>> 'hey!     python is ready'

f"hey! {'python':>10} is ready"
>>> 'hey!     python is ready'

# Ortaya Boşluk Eklemek
"hey! {:^10} is ready".format("python")
>>> 'hey!   python   is ready'

f"hey! {'python':^10} is ready"
>>> 'hey!   python   is ready'
```


## Boşluk Yerine Karakter Ekleme
Bir kodu incelerken 4 haneli rakamlar oluşturmak için if kullandığını gördüm, eğer 10'dan küçükse başına ÜÇ SIFIR(000) ekle demiş. Örnek: 0005. Bu işlemi if kullanmak yerine metin biçimlendirme ile yapabiliriz.

```python
"{:04}".format(5)
>>> '0005'

f"{5:04}"
>>> '0005'

pk = 99

"{:04}".format(pk)
>>> '0099'

f"{pk:04}"
>>> '0099'


# ====================
# _ karakteri eklemek
# ====================
"{:_>8}".format(pk)
>>> '______99'

"{:_<8}".format(pk)
>>> '99______'

f"{pk:_>8}"
>>> '______99'

f"{pk:_<8}"
>>> '99______'

```

::: warning Az Kaldı :)
Şimdilik bu kadar yazdım, yine metin biçimlendirme ile ilgili örnekler eklemeye devam edeceğim. Sonuna bir cheatsheet dökümanı hazırlamaya başladım. Yazının devamını beklemeden f-strings kullanmaya hemen başla ;) soruların olursa buralardayım :)
:::

## Cheat Sheet

<table>
  <thead align="left">
    <tr>
      <th width="%20">İşlem</th>
      <th width="%20">%</th>
      <th width="%20">.format</th>
      <th width="%20">f-strings</th>
      <th width="%20">çıktı</th>
    </tr>
  </thead>
  <tbody align="left">
    <template v-for="item in $page.frontmatter.fString">
      <tr>
        <td width="%20">{{ item.title }}</td>
        <td width="%20">{{ item.percent }}</td>
        <td width="%20">{{ item.format }}</td>
        <td width="%20">{{ item.f }}</td>
        <td width="%20">{{ item.output }}</td>
      </tr>
    </template>
  </tbody>
</table>
