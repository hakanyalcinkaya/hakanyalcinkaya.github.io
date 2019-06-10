---
title: macOS'ta Nano Text Editörü Nasıl Güncellenir? 
date: 2019-06-10 10:20
description: ""
category: Linux
tags: ['linux', 'macOS', 'file-manager']
youtube: "U2n5aGqou9E"
meta:
  - name: description
    content: Nano Text Editörünü macOS işletim sisteminde güncelleyip yazılım dilleri desteğini nasıl ekleyebileceğinizi bu makalede bulabilirsiniz.
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages, linux, file manager, mac os
---


```
              :::                           The                 
iLE88Dj.  :jD88888Dj:                                           
.LGitE888D.f8GjjjL8888E;        .d8888b.  888b    888 888     888
iE   :8888Et.     .G8888.      d88P  Y88b 8888b   888 888     888
;i    E888,        ,8888,      888    888 88888b  888 888     888
      D888,        :8888:      888        888Y88b 888 888     888
      D888,        :8888:      888  88888 888 Y88b888 888     888
      D888,        :8888:      888    888 888  Y88888 888     888
      D888,        :8888:      Y88b  d88P 888   Y8888 Y88b. .d88P
      888W,        :8888:       "Y8888P88 888    Y888  "Y88888P"  
      W88W,        :8888:                                         
      W88W:        :8888:      88888b.   8888b.  88888b.   .d88b.
      DGGD:        :8888:      888 "88b     "88b 888 "88b d88""88b
                   :8888:      888  888 .d888888 888  888 888  888
                   :W888:      888  888 888  888 888  888 Y88..88P
                   :8888:      888  888 "Y888888 888  888  "Y88P"
                    E888i                                         
                    tW88D                 

```

Linux dünyasında en insancıl text editörünün Nano olduğu söylenmektedir. Nano macOS işletim sisteminde kurulu olarak gelmektedir ama versiyonu çok eski olduğu için Nano'yu nasıl yükleyeceğini ve Nano'nun syntax desteğini nasıl ekleyeceğini bu yazıda bulabilirsin.

Umarım [Brew](https://brew.sh/) macOS işletim sisteminde kuruludur :) kurulu değilse terminalden hızlıca kurabilirsin.

Terminal'i açtıktan sonra Nano text editörünü güncellemek için:

```bash

brew install nano

# Nano konfigürasyon dosyasını açmak için:
nano ~/.nanorc

# nano ile açtığın .nanorc dosyasına aşağıdaki satırı eklediğinde 
# tüm yazılım dilleri için syntax desteği eklenmiş olacak.
include /usr/local/share/nano/*.nanorc

# veya sadece Python'ı eklemek istersen:
include /usr/local/share/nano/python.nanorc

# tüm listeyi görmek istersen:
ls /usr/local/share/nano/
```