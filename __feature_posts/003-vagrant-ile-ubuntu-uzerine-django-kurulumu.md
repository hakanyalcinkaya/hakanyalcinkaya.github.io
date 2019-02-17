---
title: Windows'ta Çalış, Linux'te Yaşa.. Vagrant ve VirtualBox ile Ubuntu 18'e Django Kurulumu Nasıl Yapılır?
category: Django
tags: ['Django', 'Vagrant', 'Ubuntu']
meta:
  - name: description
    content: Vagrant ve VirtualBox ile Ubuntu 18'e Django Kurulumu Nasıl Yapılır?
  - name: keywords
    content: hakan yalçınkaya, blog, yazılım, python, JavaScript, YouTube, vue, vuepress, jamstack, staticgen, github, github pages, linux, file manager, mac os, ipython, bpython, ptpython, vagrant, ubuntu, django
---

<Title/>

Size eski can yoldaşım Vagrant'ı tanıtmak istiyorum. Sanırım Vagrant'ı 4 senedir kullanmıyorum. Belki de 5 sene olmuş olabilir :) İlk olarak [Laravel Homestead](https://laravel.com/docs/5.7/homestead#introduction) ile birlikte kullanmaya başlamıştım. Laravel halen hayran olduğum bir Framework'tür. Dökümantasyonu çok basit, Linux çalışma ortamını da Homestead ile sağlıyor. Vagrant ile hemen çalışmaya başlıyorsunuz.. Harika..

Niye çok uzun zamandır kullanmadığım bir sanallaştırma aracını blog yazısı olarak paylaşıyorum ? aslında macOS'a geçtikten sonra bu tarz ortamlara daha az ihtiyaç duyduğum için kullanmadığımı söyleyebilirim. Özellikle **Windows** işletim sistemi kullanıp doğal yazılım geliştirme ortamınızdan vazgeçmeden sanal makine kurulumunu inanılmaz derecede rahatlattığını söyleyebilirim.

Django kullanıyorsak Linux işletim sistemine giriş, yapıp dosyalarımızı atıp, en basit ihtimalle runserver komutu ile bile çalıştırdığımızda belki de hızlı bir çalışma ortamı kurgulayamadıysak her seferinde dosyalarımızı linux sunucuya atıp tekrar tekrar geliştirme ortamındaki düzenimizi sağlamamız gerekiyor olabilir.

Birçok Django dökümanında sanki işletim sisteminiz Linux veya macOS'muş gibi yazılır. Bu komutları nasıl kullanacağınızı anlamakta da zorluk çekiyor olabilirsiniz. Ayrıca kolay yoldan nasıl Linux'e geçiş yaparım diye düşünebilirsiniz. Şimdi gaza gelip bilgisayara format atıp Linux işletim sistemi kurmayı deneyebilirsiniz :) hangi Linux dağıtımında çalışacaksınız? çok fazla seçenek var ve birçoğunun doğru olduğunu söyleyebilirim.

Peki Linux bilmek zorunda mısın ? Aslında 30 - 40 komut öğrensen birçok işini çözebilirsin :) ama öğrenmesen de yazılım geliştirmeye devam edebilmeli ve Django'yu çalıştırabilmelisin. Ama yinede günün sonunda Linux sunucuya kendin kurulum yapmaya çalışacak ve daha önce hiçbir deneyimin olmadığı için tam da yolun sonuna gelmişken yeni sorunlarla karşılaşacak olabilirsin..

Vagrant; işletim sisteminde kurulu olan düzeninden vazgeçmeden, bilgisayarındaki proje dosyalarının yerini değiştirmeden, Linux ortamını bir dosyaya yazacağın iki üç satırlık bilgi ile birlikte işliyor ve istediğin Linux sunucusunu aktif edip projenin çalışmasını sağlıyor. Bu dosyayı(Vagrantfile) başka bilgisayarlara taşıyarak aynı ortamı orda da oluşturabilirsin. Vagrant; daha karmaşık olan yapılara giriş yapmadan önce yazılım geliştiricilere kendi ortamlarından ödün vermeden kolay geçiş sağlıyor.

Windows kullanan kişilerin yaşadığı sorunları göz önünde bulundurarak Django kurulumunu ücretsiz olan Vagrant ve VirtualBox ile yapacağım. Bu arada sadece Django Kurulumu diye düşünmeyin sadece. Sonuçta proje dosyalarımızın yerini belirtip Linux işletim sisteminde kolay çalışma ortamı sağlıyoruz. Yani Linux içerisinde çalıştırmak istediğiniz herhangi bir projeden veya ortamdan bahsediyorum aslında..

## 1 - Kurulum:

### Vagrant'ı indirin ve Kurun
[Vagrant](https://www.vagrantup.com/)' [https://www.vagrantup.com/](https://www.vagrantup.com/) sayfasından indirip hemen kurabilirsiniz.

### VagrantBox'ları İnceleyin
#### VagrantBox Nedir?
VagrantBox birçok kişinin Linux işletim sistemlerini alıp, içerisine bazı özellikler ekleyerek paket haline getirdiği, hemen kullanıma hazır Linux Dağıtımlarından birisinin kullanılarak düzenlendiği paketlerdir. Örneğin şöyle düşünebilirsiniz; bir VagrantBox var, içerisinde Windows işletim var, hazır Office yüklü, Photoshop ve Illustrator yüklü olarak geliyor. Hemen kurup çalıştırmaya başlıyorsunuz. İşte Laravel'in Homestead'i tam böyle bir VagrantBox. İçinde herşey hazır geliyor. Neler var? gidip [sayfasından](https://laravel.com/docs/5.7/homestead#introduction) öğrenin :) konumuz bu VagrantBox değil.. Biz yalın Linux Ubuntu 18 dağıtımını kurup sanki Linux sunucuyu baştan kurmuşuz gibi ayarlayarak tüm işimizi kendimiz yapacağız. Eğer VagrantBox'ta hazır gelen yapıyı kullanırsanız sunucu kurarken yine kafanız karışacaktır. Zaten vereceğimiz komutlar çok basit olacak şimdilik..


https://app.vagrantup.com/bento/boxes/ubuntu-18.10
https://app.vagrantup.com/bento
https://github.com/chef/bento
ln -s /home/vagrant-shared/.bash_profile /home/vagrant/.bash_profile
