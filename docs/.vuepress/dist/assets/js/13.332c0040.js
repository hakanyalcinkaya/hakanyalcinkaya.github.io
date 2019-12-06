(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{210:function(t,a,s){t.exports=s.p+"assets/img/python-3-6.7f7aff47.png"},237:function(t,a,s){"use strict";s.r(a);var r=s(0),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("Title"),t._v(" "),r("p",[r("img",{attrs:{src:s(210),alt:"Python"}})]),t._v(" "),r("p",[t._v("Python 3.6 ile birlikte gelen "),r("router-link",{attrs:{to:"/python/004-python-3-6-formatted-string.html"}},[t._v("f-strings")]),t._v(" ile ilgili ayrı bir makale yazıp en çok kullanılan biçimlendirme şekillerini ayrıca yazmıştım. Şimdi hızlı bir tur daha atalım 😃")],1),t._v(" "),r("p",[t._v("Python 3.6 ile Birlikte Gelen Yenilikler:")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0498/",target:"_blank",rel:"noopener noreferrer"}},[t._v("f-strings"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Underscores in Numeric Literals"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.python.org/3.6/library/secrets.html#module-secrets",target:"_blank",rel:"noopener noreferrer"}},[t._v("Secrets"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.python.org/dev/peps/pep-0484/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Type Hints"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"👍-f-strings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#👍-f-strings"}},[t._v("#")]),t._v(" 👍 f-strings:")]),t._v(" "),r("p",[t._v(".format kullanımından daha hızlı ve daha az yer kaplıyor, ayrıca performans açısından daha iyi olduğuyla ilgili makaleler var. Bu yüzden f-strings'i kullanmaya başlayalım. "),r("router-link",{attrs:{to:"/python/004-python-3-6-formatted-string.html"}},[t._v("f-strings makalemi incelemek için tıkla..")])],1),t._v(" "),r("h2",{attrs:{id:"underscores-rakamsal-ifadeler-icin-altcizgili-yazim"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#underscores-rakamsal-ifadeler-icin-altcizgili-yazim"}},[t._v("#")]),t._v(" Underscores (Rakamsal İfadeler İçin Altçizgili Yazım):")]),t._v(" "),r("p",[t._v("Çok önemli olmasada yine Python'ın kod okurken kolaylık sağlamak adına yaptığı geliştirmelerden biri olduğunu söyleyebiliriz. Örneğin "),r("strong",[t._v("price = 1000000.00")]),t._v(" yazdığımda okumak zorken, tanımlamalarda artık "),r("strong",[t._v("price = 1_000_000.00")]),t._v(" olarak kullanabileceğiz.")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[t._v("price "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1_000_000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),t._v("\n")])])]),r("h2",{attrs:{id:"secrets"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#secrets"}},[t._v("#")]),t._v(" Secrets")]),t._v(" "),r("p",[t._v("Secrets modülü sayesinde token veya güvenli veriler oluşturabiliyoruz.")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" secrets\n\nsecrets"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("token_urlsafe"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'51PxQ5t9tAKXKrnLwgxNu84viuUc88dTDwD-w_35HlI'")]),t._v("\n\n")])])]),r("h2",{attrs:{id:"👍-type-hints"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#👍-type-hints"}},[t._v("#")]),t._v(" 👍 Type Hints:")]),t._v(" "),r("p",[t._v("Statik dillerden alışık olduğumuz price:int = 100 ifadesini artık Python'da kullanabileceğiz. Fakat Python dinamik bir dil olduğundan dolayı tanımlamış olduğunuz price değişkenini price = 'this_is_price' int'ten farklı bir şekilde tanımlayabilirsiniz. Ve yine pep 0484'teki makalede diyor ki;")]),t._v(" "),r("p",[r("strong",[t._v("Python will remain a dynamically typed language, and the authors have no desire to ever make type hints mandatory, even by convention.")])]),t._v(" "),r("p",[t._v("Yani Type Hints gelmiş olsa bile bu zorunlu bir özellik olmayacak ve dinamik dili bağlamayacak.")]),t._v(" "),r("p",[t._v("Yinede Fonksiyonlarımızda bu özelliği kullanacak olursak fonksiyonları daha güvenli hale getirebiliriz. Çünkü fonksiyonlarda bu denetim güzel çalışıyor.")]),t._v(" "),r("p",[t._v("Kullandığınız ide veya type checker bu denetimi yapabilir ve hatalarınızı gösterir fakat yinede Type Hints'e aykırı düzenlemeleriniz çalışmaya devam edebilir.")]),t._v(" "),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pip install mypy")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello '")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name\n\nprice"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1_000\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nprice "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is price"')]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("price"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hakan"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" this "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" price\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Hello Hakan\n\n\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1_000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nIn "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1_000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\nTypeError                                 Traceback "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most recent call last"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ipython"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5ef8c867790a")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("module"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("greeting"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("1_000"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ipython"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("input")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4849dcb90972")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" greeting"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("greeting")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("     "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello '")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name\n      "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" price"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" 1_000\n      "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n\nTypeError"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" must be "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v("\n\n")])])]),r("div",{staticClass:"language-python extra-class"},[r("pre",{pre:!0,attrs:{class:"language-python"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("############ TERMINAL ############")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# python_type_hints.py file:")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\ndef greeting(name: str) -> str:\n    return \'Hello \' + name\n\nprice:int = 1_000\n\nprint(price)\n\nprice = "this is price"\n\nprint(price)\n\nprint(greeting("Hakan"))\n\nprint(greeting(1_000))\n"""')]),t._v("\n\n$"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mypy python_type_hints"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\npython_type_hints"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Incompatible types "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" assignment "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expression has "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" variable has "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npython_type_hints"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Argument "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" to "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"greeting"')]),t._v(" has incompatible "),r("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"int"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" expected "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"str"')]),t._v("\n")])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);