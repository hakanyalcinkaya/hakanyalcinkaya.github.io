(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"content"},[s("Title"),this._v(" "),this._m(0),this._v(" "),this._m(1),this._m(2)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Senaryomuz:\nrequest.GET ile gelen first_name bilgisini alıp eğer Model'in içinde bu tanım varsa eklemek istiyoruz. Fakat gelen tanımı "),s("strong",[this._v("user.first_name")]),this._v(" olarak kullanmak yerine GET ile birlikte gelen KEY, VALUE şeklinde kullanmak istersek ne yapmamız lazım ? eğer key bilgisini alırsak key; user.'first_name' olarak geliyor, biz bu şekilde veri tabanına yazamayız. Bu yüzden setattr ile Instance'a veri eklemeyi göstereceğim.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gelen bilgi")]),t._v("\ndict_request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Dict içindeki ilk bilgiyi almaya çalışıyoruz:")]),t._v("\nitem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("iter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dict_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakanyalcinkaya@gmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hatalı Olan:")]),t._v("\nuser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'item'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakan'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Bu kodda gördüğünüz gibi string veri istediğimiz gibi işlenmedi.")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# setattr ile birlikte:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dict__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("setattr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Bonus:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# instance içindeki attribute'u almak için:")]),t._v("\n\nitem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first_name'")]),t._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakanyalcinkaya@gmail.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ngetattrb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hakan'")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);