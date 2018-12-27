(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{173:function(e,a,t){"use strict";t.r(a);var n=t(0),i=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),t("p",[e._v("Paylaştığınız projenizle ilgili adımları Makefile ile oluşturduğunuzda projenin mantığını daha iyi anlatabileceğinizi düşünüyorum.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),t("p",[e._v("Makefile oluşturmak için tutorial : "),t("a",{attrs:{href:"http://mrbook.org/blog/tutorials/make/",target:"_blank",rel:"noopener noreferrer"}},[e._v("makefile-tutorial"),t("OutboundLink")],1)])])},[function(){var e=this.$createElement,a=this._self._c||e;return a("h1",{attrs:{id:"makefile-kullanin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makefile-kullanin","aria-hidden":"true"}},[this._v("#")]),this._v(" Makefile Kullanın")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Bazen kullandığımız komutları unutuyoruz ve her projede farklı farklı komutlar çalıştırmamız gerekebiliyor.. veya dosyaları başkalarına göndereceğimiz zaman hangi komutları kullanmaları gerektiğini tam olarak açıklayamıyabiliyoruz. İşte tam bu noktada projeye özel komutlat oluşturmak için "),a("code",[this._v("Makefile")]),this._v(" kullanabilirsiniz.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("p",[this._v("Klasörde oluşturacağınız "),a("code",[this._v("Makefile")]),this._v("(uzantısı yok, ilk harfi büyük) dosyasına "),a("code",[this._v("serve")]),this._v(" komutunu eklediğimizde artık altındaki satırı çalıştıracak.. alttaki satırda yazacağınız komutu başlatmadan önce "),a("code",[this._v("tab")]),this._v(" tuşuna basmanız gerekiyor.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("serve:\n  jekyll serve\n")])])])},function(){var e=this.$createElement,a=this._self._c||e;return a("h4",{attrs:{id:"makefile-dosyasini-nasil-calistiracagim"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#makefile-dosyasini-nasil-calistiracagim","aria-hidden":"true"}},[this._v("#")]),this._v(" Makefile Dosyasını Nasıl Çalıştıracağım ?")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[t("code",[e._v("make")]),e._v(" yazıp "),t("code",[e._v("tab")]),e._v(" tuşuna basarsanız "),t("code",[e._v("Makefile")]),e._v(" içerisinde hazırlanmış olan komutu görebilirsiniz. Bu örnekte olduğu gibi "),t("code",[e._v("make serve")]),e._v(" yazdığınızda serve içesidindeki işlemler gerçekleşecektir. Sadece "),t("code",[e._v("make")]),e._v(" yazıp "),t("code",[e._v("enter")]),e._v(" tuşuna bastığınızda ilk komut çalışacaktır. Yine yukardakı örnekte tek komut (serve) olduğu için "),t("code",[e._v("make serve")]),e._v(" komutunu çalıştırmış olacaksınız.")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h3",{attrs:{id:"projenizi-hazirlarken-uyguladiginiz-adimlari-makefile-ile-gosterin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projenizi-hazirlarken-uyguladiginiz-adimlari-makefile-ile-gosterin","aria-hidden":"true"}},[this._v("#")]),this._v(" Projenizi Hazırlarken Uyguladığınız Adımları Makefile ile gösterin 😉")])},function(){var e=this.$createElement,a=this._self._c||e;return a("h4",{attrs:{id:"ornek"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ornek","aria-hidden":"true"}},[this._v("#")]),this._v(" Örnek:")])},function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v('1-npm-init:\n        npm init\n\n2-add-dependencies:\n        npm install webpack --save && npm install react --save && npm install react-dom --save && npm install babel-core --save &$\n\n3-create-index:\n        echo \'<!DOCTYPE html>\'  > index.html\n        echo \'<html lang = "en">\'  >> index.html\n        echo \'  <head>\'  >> index.html\n        echo \'    <meta charset = "UTF-8">\'  >> index.html\n        echo \'    <title>React App</title>\'  >> index.html\n        echo \'  </head>\'  >> index.html\n        echo \'<body>\'  >> index.html\n        echo \'  <div id = "app"></div>\'  >> index.html\n        echo \'  <script src = "index.js"><\/script>\'  >> index.html\n        echo \'</body>\'  >> index.html\n        echo \'</html>\'  >> index.html\n\n4-create-appjsx:\n        echo "import React from \'react\';" > App.jsx\n        echo "class App extends React.Component {" >> App.jsx\n        echo "   render() {" >> App.jsx\n        echo "" >> App.jsx\n        echo "  var i = 1;" >> App.jsx\n        echo "" >> App.jsx\n        echo "      return (" >> App.jsx\n        echo "         <div>" >> App.jsx\n        echo "            <h1>{i == 1 ? \'True!\' : \'False\'}</h1>" >> App.jsx\n        echo "            Hello World!!!" >> App.jsx\n        echo "         </div>" >> App.jsx\n        echo "      );" >> App.jsx\n        echo "   }" >> App.jsx\n        echo "}" >> App.jsx\n        echo "export default App;" >> App.jsx\n\n5-create-mainjs:\n        echo "import React from \'react\';" > main.js\n        echo "import ReactDOM from \'react-dom\';" >> main.js\n        echo "import App from \'./App.jsx\';" >> main.js\n        echo "ReactDOM.render(<App />, document.getElementById(\'app\'));" >> main.js\n\n6-OR-Create-All-Files: 3-create-index 4-create-appjsx 5-create-mainjs\n\n7-OR-Create-Empty-Files:\n        touch index.html && touch App.jsx && touch main.js && touch webpack.config.js\n\n10-start:\n        npm start\n\n')])])])}],!1,null,null,null);i.options.__file="makefile-kullanin.md";a.default=i.exports}}]);