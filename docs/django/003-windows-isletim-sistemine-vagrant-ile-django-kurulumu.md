---
title: Vagrant ile Windows İşletim Sistemine Linux/Ubuntu ve Django Framework Kurulumu Nasıl Yapılır?
date: 2019-06-10 10:20
description: ""
category: Django
tags: ['Django', 'Windows', 'VirtualBox', 'Vagrant']
youtube: "U2n5aGqou9E"
meta:
  - name: description
    content: 
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages, linux, file manager, mac os, django, vagrant, virtualbox
---
<Title/>

Eğer Django Framework kullanıyorsan, ister Windows'ta çalışın istersen de macOS'ta çalışın günün sonunda projeniz Linux ortamında kurulacak ve çalıştırılacaktır. Bu yüzden Linux ile bilginin olması ve tüm ortamının Linux'te olması kodların yayına alındığında sana avantaj sağlayacaktır. 

Windows kullananlar ayrıca bazen performans sorunları yaşadıklarını da iletiyor. Bu sorun yine Windows işletim sisteminin uyumsuzluğundan kaynaklanıyor. Peki biz Windows'ta çalışırken Linux'te projemizi nasıl aynı anda ayaklandırıp çalıştırabileceğiz? Sorunun yanıtı [Vagrant](https://www.vagrantup.com/)..

## Başlamadan Önce
### Vagrant'a Neden İhtiyacımız Var?
Eğer Windows işletim sisteminde Vagrant yüklü değilse ve Linux işletim sistemine ait bir dağıtımı sanal olarak kurmak istersen VirtualBox ile kurabilirsin. Ama kurulumu yaptıktan sonra dosyaların senkron edilmesi ve ortamın kurulması çok vaktini alabilir. 

Eğer Vagrant ile çalışacak olursan Vagrant bilgisayarının sanki uzantısıymış gibi Linux'i çalıştırır, proje dosyalarını entegre eder ve daha az komut kullanarak sistemini oluşturabilir/yönetebilirsin.

Özellikle Laravel Framework'ünün Vagrant'ı kullanmasıyla birlikte Vagrant çok popüler olmuştur. [Laravel Homestead](https://laravel.com/docs/5.8/homestead) sayfasından bakacak olursan Laravel senin hızlıca sistemini kurabilmen ve Framework'ü ayağa kaldırman için gerekli altyapıyı yapmış ve dökümanının içine de eklemiş.. Neden Django böyle yapmamış diye soracak olursan inan bende bilmiyorum ama beraber bu sorunu çözeceğiz ;)


### Gerekli Ortamın Kurulumu:
Yazının devamına devam etmeden önce minimumda 4 uygulamayı kurmuş olman gerekiyor. Bunlar:
1. [Visual Studio Code](https://code.visualstudio.com/) veya sevdiğin başka bir editör
2. [Git-SCM](https://git-scm.com/). Özellikle Git BASH'i kullanmak için Git'in kurulu olması bizim için önemli.
3. [VirtualBox](https://www.virtualbox.org/wiki/Downloads). Vagrant'ın çalışması için sanallaştırma altyapısı gerekmektedir. VirtualBox dışında başka sanallaştırma uygulamalarına da destek veriyor Vagrant ama VirtualBox ücretsiz ve kullanımı kolay olduğu için tercih ediyorum.
4. [Vagrant](https://www.vagrantup.com/downloads.html). Sonunda Vagrant'ı kurabilirsin :) 

> Kurulumları tamamladıysan şimdi Vagrant üzerine Ubuntu Server yüklemeye ve ortamımızı hazırlamaya başlayabiliriz.

## Django Projemizin Vagrant ile Hazırlanması
Aslında işlem adımlarına bakacak olursak işlemler çok kolay ama ilk başta zorlanabiliriz..
1. Proje klasörünü oluştur ve Git Bash ile içine gir
2. **Vagrantfile** oluştur ve düzenle
3. **vagrant up** ile işletim sistemini aç
4. **pip**'i güncelle
5. **virtualenv** kur
6. **virtualenv**'yi aktif et
7. **django** kur
8. **django** projesi oluştur
9. **django** projesini çalıştır :)

Şimdi bu adımları yapmaya başlayalım..

### 1. Proje Klasörünü Oluşturmak
Git Bash'i açtıktan sonra açtığımız siyah ekranda(terminal) aşağıdaki komutları yazabiliriz. 

> Not: # ile yazdığım yerler kullandığımız komutların açıklamalarıdır..

```bash
# kullanıcımızın home klasörüne girmek için: 
cd ~
# tilda(~) işareti türkçe klavyelerde genellikle alt-gr ile birlikte ü tuşuna basarak çıkartılır.

pwd
# /c/Users/hy gibi bir klasör bilgisi alabilirsiniz.
# pwd olduğumuz klasörün neresi olduğunu ekrana yazdırır.. 
# nerede olduğunu bilmek önemldir ;)

mkdir Sites
# Sites adlı bir klasör oluşturduk. Birkez oluşturduğun klasörü tekrar oluşturmamaya çalış ;)

cd Sites
# Sites klasörüne girdik.

mkdir hy_blog
# hy_blog adlı bir klasörü terminalden oluşturduk. 
# Bunu normalde gidip Windows Explorer içinden de yapabilirdin 
# ama madem Linux dünyasına giriş yapmaya çalışıyoruz o zaman komutları elle yazalım..

cd hy_blog
# hy_blog klasörüne giriş yaptık.

pwd
# eğer pwd yazarsan bulunduğun path bilgisinin 
# /c/Users/kullaniciadin/Sites/hy_blog gibi olduğunu görebilirsin. 
# Eğer değilse o zaman adımlara dikkat..
```

Harika.. artık ~/Sites/hy_blog klasörümüz oluştu ve proje klasörümüzün içindeyiz..

### 2. Vagrantfile oluşturmak ve Vagrant ile İlgili İlk Hazırlıklar
Vagrant, kendi içinde bulundurduğu imajlara Box demektedir. Oluşturulan Box'lar Ubuntu gibi firmalar tarafından oluşturulduğu gibi aynı zamanda kişiler tarafından oluşturulabilir ve çalışmaya hazır ortamlar sunulmuş olabilir. Örneğin Laravel Framework'ü hazır bir box bulundurur ve projeni hemen aktive edebilirsin. Biz ise tüm işi elle yapacağız.. 
Tüm Box'ları incelemek için:
https://app.vagrantup.com/boxes/search

Biz terminaldeyken hemen işlemlere devam edelim. En son Git Bash açıktı ve kendi proje klasörümüzdeydik.. [Ubuntu 18.04 LTS](https://app.vagrantup.com/ubuntu/boxes/bionic64) sürümünü initial etmek için:

```bash
vagrant init ubuntu/bionic64

# yukarıdaki komutu çalıştırman yeterli..

ls
# Eğer herşey yolundaysa ls dosyaları listeler
# Vagrantfile dosyasını görmüş olman gerekir. 
```

Git Bash ile Vagrantfile'ı oluşturduysak bu dosyayı güncelleyerek biz de bir satır ekleyeceğiz. Vagrantfile dosyasını herhangi bir editörde açarak aşağıdaki satırı bulup altına yeni bir satır eklemeni istiyorum. Vagrantfile içinde 80 portunu 8000 portuna yönlendir gibi bir ayar var. Biz ise kendi bilgisayarımızdaki 8000 portunu Vagrant içindeki 8000 portuna bağlayacak konfigürasyonu yazacağız..

```bash
# config.vm.network "forwarded_port", guest: 80, host: 8080

# yukarıdaki satırda guest yani Vagrant ile çalışan işletim sisteminin 80 portunu bizim işletim sistemimizde 8080 portuna yönlendireceğini söylüyor..
# biz ise 8000 portunun 8000 portuna yönlendireceğiz Django için

# yukarıdaki satırdan # işaretini kaldırdıktan sonra rakamları 8000 olarak düzelt..

config.vm.network "forwarded_port", guest: 8000, host: 8000
# kaydetmeyi unutma ;)
```

Harika.. Vagrantfile dosyamız güncellendiğine göre artık sistemimizi açmaya hazırız.

### 3. vagrant up ile Sistemin Çalıştırılması/Sunucunun Açılması

```bash
# proje klasörümüzde Git Bash içerisinde:

vagrant up
# Vagrantfile ile birlikte proje klasörümüz hazırlanarak Ubuntu 18 içerisinde çalışmaya başlayacak.

vagrant ssh 
# vagrant ssh ile sunucumuza ulaşıp artık pip güncelleme ve
# diğer işlemlere geçebiliriz.

# eğer ssh ile giriş yaptıysak artık Linux/Ubuntu işletim sisteminin içinde olduğumuzu görebiliriz.
# vagrant@ubuntu-bionic:~$
# yukarıda yazanlara bakacak olursak
# kullanici@servername:klasor(~)user($)
# $ -> superuser olmayan kullanıcı, # ise superuser
# tilda (~) kullanıcının home klasöründe olduğumuzu belirtir
```

### 4. PIP - Python Paket Yükleyicisinin Yüklenmesi ve Güncellenmesi

Ubuntu 18 içerisinde python3 kurulu olarak gelmektedir. Biz ise pip paket yükleyicisini ilk önce kurup daha sonra sürümünü güncelleyeceğiz.

```bash

# vagrant@ubuntu-bionic:~$ içerisinde
sudo apt update
# sudo(superuser do) paket dosyalarını güncelle..

sudo apt install python3-pip
# python3 için pip paket yükleyicisini yükle
# yüklemek istiyormusunuz yazısı geldiğinde Y yazıp enter tuşuna basman lazım.

pip3 --version
# pip3 ün versiyonunu kontrol ettik.

pip3 install --upgrade pip
# pip sürümünü güncelledik.
# şimdi sunucumuzu kapatıp tekrar açacağız

exit
# ssh bağlantısını kapattık ve proje klasörümüze geri geldik

vagrant halt
# vagrant sunucumuzu kapatır

vagrant up
# vagrant sunucumuzu açar

# veya vagrant reload ile bu işlemi yapabilirdin ;)

# sunucu açıldıktan sonra tekrar:
vagrant ssh
# vagrant ssh ile sunucumuza tekrar bağlantık
```

### 5. virtualenv Kurulumu
**virtualenv** python projelerinde sanal ortam oluşturmak için çok önemlidir. Eğer projelerimizi python sanal ortamına taşımazsak birçok karmaşa ile karşılaşabiliriz. İstemediğimiz versiyon güncellemeleri ve paket uyumsuzlukları gibi birçok durum olabilir.

Virtualenv kurulumu için Git Bash içerisinde sunucumuza ssh ile bağlandıktan sonra:

```bash
pip3 install virtualenv --user
# virtualenv kur

virtualenv --version
# virtualenv versiyonunu kontrol et.
```

### 6. virtualenv ile Python Sanal Ortamının Oluşturulması ve Aktif Edilmesi

Sanal sunucu kurmuştuk, niye sanal ortam kuruyoruz tekrar? Biliyorum :) bu soru hemen aklına gelmiştir. VirtualBox bilgisayarımız içerisinde sanal olarak başka işletim sistemleri kurmak için kullandığımız altyapı. Çoğu yazılım dili ise kendi paketlerini kurmak için paket yöneticisine ihtiyaç duyar. Python'daki paket yöneticisi **PIP**. PIP ile işletim sistemi bazlı veya Python Sanal Ortamı bazında da tekrar tekrar aynı paketin farklı versiyonlarını kurabiliriz. Neden farklı versiyonlara ihtiyacım olsun ki? diye soracak olursan yaptığın projenin stabil çalışması için versiyon kontrolü ve izolasyon çok önemlidir. Her proje kendi ortamında durduğunda daha verimli çalışabiliriz. Virtualenv bize bu ortamı hazırlamak için gerekli altyapıyı sunuyor diye yanıt verebilirim.

#### Virtualenv ile Python Sanal Ortamının Hazırlanması
```bash
virtualenv -p python3 ~/env
# kullanıcının home klasörü altında env klasörünün içine python3 ile python ortamını hazırla..
# not: bu işlemi her proje için bir kez yapacaksın. 
# Ortam oluşturulduktan sonra tekrar tekrar oluşturmaya ihtiyacın yok..
```

#### Virtualenv'nin aktif edilmesi
Virtualenv ile ortamı hazırladın ama aktif etmen gerekiyor..

```bash
source ~/env/bin/activate
# env içindeki yapıyı aktive et..

# eğer herşey yolundaysa
# (env) vagrant@ubuntu-bionic:~$ solda env yazısını göreceğiz.
```
Eğer env yazısını terminal ekranında görüyorsan artık pip ile sanal ortama paketlerimizi yükleyebiliriz.


### 7. Django Kur
Git Bash içerisinde sunucuya halen bağlıyız ve artık pip ile env içerisine django kurabiliriz.

```bash
pip install django
# pip ile django paketi env içerisine eklenir

pip freeze
# yüklü olan paket listesini gösterir
```


### 8. Django Projesi Oluştur
Django paketi Env içerisine yüklendi, şimdi django-admin ile projemizi oluşturabiliriz.. Ama doğru klasörde olduğumuza emin olmamız gerekiyor. Vagrant ilk ayarlarında projemizi /vagrant klasörüne senkronize ediyor.

```bash
# 1. Proje klasörüne gel..
cd /vagrant
# proje klasörümüze geldik
pwd
# pwd ile /vagrant klasöründe olduğumuzu doğruladık


# 2. Django Projesi oluştur
django-admin startproject hy_blog
# hy_blog isimli django projesini oluştur.. bu ismi değiştirebilirsin ;)

# 3. Django proje klasörünün sonuna _dj ekle
# bu adımı yapmak zorunda değilsin
# amacım django projesinin olduğu klasörü 
# daha rahat ayırt edebilmek..
mv /vagrant/hy_blog /vagrant/hy_blog_dj

ls
# dosyaları listele
```

### 9. Django Projesini Çalıştır :)

Projemiz oluştuğuna göre artık **manage.py** dosyasının olduğu klasöre gidip projemizi çalıştırabiliriz..

```bash
cd hy_blog_dj 
# veya isim değiştirmediysen
cd hy_blog # dikkat ! proje klasörünün içinde bu isimli bir klasör daha var.. 
# bu yüzden iki kez klasöre girme, her adımda ls komutuyla dosyaları listele..

python manage.py runserver 0:8000
# django projemizi 8000 portuyla çalıştırdık.

```

Harika.. herşey buraya kadar :) vagrant ile birlikte Ubuntu içerisinde projemizi kurduk ve çalıştırdık. Güzel projeler oluşturup GitHub'a ekle ve arada mesaj atmayı unutma. 

Başarılar dilerim ;)