---
layout: post
title:  "Makefile Kullanın"
date:   2017-01-12 14:03:11 +0300
categories: linux mac
---
Bazen kullandığımız komutları unutuyoruz ve her projede farklı farklı komutlar çalıştırmamız gerekebiliyor.. veya dosyaları başkalarına göndereceğimiz zaman hangi komutları kullanmaları gerektiğini tam olarak açıklayamıyabiliyoruz. İşte tam bu noktada projeye özel komutlat oluşturmak için `Makefile` kullanabilirsiniz. 

Klasörde oluşturacağınız `Makefile`(uzantısı yok, ilk harfi büyük) dosyasına `serve` komutunu eklediğimizde artık altındaki satırı çalıştıracak.. alttaki satırda yazacağınız komutu başlatmadan önce `tab` tuşuna basmanız gerekiyor.
{% highlight linux %}
serve:
  jekyll serve
{% endhighlight %}

### Projenizi Hazırlarken Uyguladığınız Adımları Makefile ile gösterin ;)

Paylaştığınız projenizle ilgili adımları Makefile ile oluşturduğunuzda projenin mantığını daha iyi anlatabileceğinizi düşünüyorum. 

#### Örnek:
{% highlight linux %}
1-npm-init:
        npm init

2-add-dependencies:
        npm install webpack --save && npm install react --save && npm install react-dom --save && npm install babel-core --save &$

3-create-index:
        echo '<!DOCTYPE html>'  > index.html
        echo '<html lang = "en">'  >> index.html
        echo '  <head>'  >> index.html
        echo '    <meta charset = "UTF-8">'  >> index.html
        echo '    <title>React App</title>'  >> index.html
        echo '  </head>'  >> index.html
        echo '<body>'  >> index.html
        echo '  <div id = "app"></div>'  >> index.html
        echo '  <script src = "index.js"></script>'  >> index.html
        echo '</body>'  >> index.html
        echo '</html>'  >> index.html

4-create-appjsx:
        echo "import React from 'react';" > App.jsx
        echo "class App extends React.Component {" >> App.jsx
        echo "   render() {" >> App.jsx
        echo "" >> App.jsx
        echo "  var i = 1;" >> App.jsx
        echo "" >> App.jsx
        echo "      return (" >> App.jsx
        echo "         <div>" >> App.jsx
        echo "<h1>{i == 1 ? 'True!' : 'False'}</h1>" >> App.jsx
        echo "            Hello World!!!" >> App.jsx
        echo "         </div>" >> App.jsx
        echo "      );" >> App.jsx
        echo "   }" >> App.jsx
        echo "}" >> App.jsx
        echo "export default App;" >> App.jsx

5-create-mainjs:
        echo "import React from 'react';" > main.js
        echo "import ReactDOM from 'react-dom';" >> main.js
        echo "import App from './App.jsx';" >> main.js
        echo "ReactDOM.render(<App />, document.getElementById('app'));" >> main.js

6-OR-Create-All-Files: 3-create-index 4-create-appjsx 5-create-mainjs

7-OR-Create-Empty-Files:
        touch index.html && touch App.jsx && touch main.js && touch webpack.config.js

10-start:
        npm start

{% endhighlight %}


Makefile oluşturmak için tutorial : [makefile-tutorial]

[makefile-tutorial]: http://mrbook.org/blog/tutorials/make/

