(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4tpq":function(e,t,n){e.exports={illustrationBg:"style-module--illustrationBg--1PMff"}},"9pBV":function(e,t,n){"use strict";n("2Spj"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=a(n("q1tI"));a(n("i8i4"));function a(e){return e&&e.__esModule?e:{default:e}}var c=0,l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loaded:!1},n.id=c++,n.createForm=n.createForm.bind(n),n.findFormElement=n.findFormElement.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=r({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var n=r({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var n=t.serializeArray();e.props.onSubmit(n)}});return window.hbspt.forms.create(n),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return o.default.createElement("div",null,o.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(o.default.Component);t.default=l,e.exports=t.default},JqE8:function(e,t,n){"use strict";n("f3/d"),n("a1Th"),n("Btvt"),n("XfO3"),n("HEwt"),n("rGqo"),n("rE2o"),n("ioFf");var r=n("q1tI"),i=n.n(r),o=n("9pBV"),a=n.n(o);function c(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.a=function(e){var t=e.portalID,n=e.formId;return Object(r.useEffect)((function(){window.jQuery=window.jQuery||function(e){return"string"==typeof e?document.querySelector(s):e}})),i.a.createElement(a.a,{portalId:t,formId:n,onSubmit:function(){return console.log("Submit!")},onFormReady:function(e){c(e.querySelectorAll(".actions")).forEach((function(e){return e.style["text-align"]="center"})),c(e.querySelectorAll("label")).forEach((function(e){return e.style.display="none"})),c(e.querySelectorAll(".sproket")).forEach((function(e){return e.style.display="none"})),c(e.querySelectorAll("input[type='submit']")).forEach((function(e){e.style.background="#fb5895",e.style.padding="16px 24px",e.style["border-radius"]="24px"})),c(e.querySelectorAll("input:not([type='submit'])")).concat(c(e.querySelectorAll("textarea"))).forEach((function(e){e.style.background="white",e.style["border-radius"]="4px",e.style.border="1px sold #dddddd",e.style.color="#333333",e.style.padding="30px 15px"})),c(e.querySelectorAll("textarea")).forEach((function(e){e.style.padding="15px 15px",e.rows=7}))},loading:i.a.createElement("div",null,"Loading...")})}},O8v6:function(e,t,n){e.exports={contactBubbleWrapper:"style-module--contactBubbleWrapper--2Ek5v",contactInfo:"style-module--contactInfo--2eozE",contactWay:"style-module--contactWay--2F1aa"}},RMOh:function(e,t,n){e.exports={contactRow:"style-module--contactRow--3QUuT",contactForm:"style-module--contactForm--2pZs6"}},u7PA:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),o=n("x7UD"),a=n("piLz"),c=n("O8v6"),l=n.n(c),u=function(e){return i.a.createElement("div",{className:l.a.contactBubbleWrapper},i.a.createElement("img",{src:n("y93S")}),i.a.createElement("div",{className:l.a.contactInfo},i.a.createElement("h1",null,"So erreichst du uns"),i.a.createElement("p",null,"So erreichst du uns Wir können deine Fragen auch gerne telefonisch oder per E-Mail klären."),i.a.createElement("div",{className:l.a.contactWay},i.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAeCAYAAACxHzfjAAAAAXNSR0IArs4c6QAABK1JREFUWAnVWF1om1UYPu+XL1ltV7b8z1pwzpq0tNtwuVFHNXW66dCLFescMi9E2fyheDEvCjIKgohliHgxQVC88KLrGG5MZbBhWSciWobbok1l3RjFNj9NahvXLmnO8XmTBWJIvnwZttvOzffz/pznvO9z3vd8HwkMt7u9ZUktDQgSnUIpJ7+7nYOEmAOWnzWl9cXjY6PkcrX6JKlRpdTq2wms/Ny0RBatU8+SPCSUAEA6YRHa/o4Ob6y8wcq9vXR5ypNdEJ8JoZ5XMvsR2V2+JKZfa7OsejASuTixclCMZ8pTMPMnp15jgKxutcpZY7OVldpsWQ4ekiwaGeQdP+5+kA5P29MOt3/Q7m3rWI5wBwIBq8PlH3B62l4p9a+UBB3zwzCSJGU3StOLIivPOjytjxWM/o9rU1Og/sq11Akl1AEAetnIpyFIq15/kAT9CvrahZKn7e62nUbOzMqam9sdi5nUaQTgGRTtCZ2sbxrZGoKcnj4fs5DeBaBnlBL3AOhxp8e318hhNZmzefN91xczZwHwUUF0QRfWrdHopculdkQaNnZ+GIJklVgslLrXq+8koqOIqC6l+Ao8euemfU2XXHdbXPwRs7cjgiOicfXj8D9dzUlVkOwgFAqle9/as1sThC4gCDz62O72fVDNebEcAAPobuew0Pu5u61paNqenBj9u1in0r0pkGzc398vZ+LhN0ij93POlOjDzv+8p6fHUsl54b3T69smhfoBldmNjHz5VNem7qtXhxcL8mpX0yALjhLR8EGNtF48g1bqtTPDvx1paXl2VUFeesVCXpBZ+g7RbwS3BxKx8KtDQ0PZUj2j55pBsrON7esOE45SfI8N1T0zO/G9y+9v5OfiYfe07sNCBqFlQ4rTZFGniuVG96brZDknXIAvhP46AnCPIHUp6IBXqiubEMNe7yZPwcbp9r8npGQOa4jgLwxUSXES9XZHQcfstaZIclonrs0fA8Bd+YMp7bBq1icAdhoh3ZKRN855vRs3IMWfSKWYu9w2Xu99ew8v6AvY1SFCx7GJnqsGsLgE8VEtV48a6qzOyclQopLx+vXBurl/pr5B+jgSs5outs9MjyNCQni9/gcyUpyC7CGUlhvYIOAoZYjU3kRsHOlmWihyulsPg5v7WKZp9NJMdOwYy8qNpiafayEt+GyrTEWSW9hcaupkDiDRjE76kwWAPEEkEr5is9RvRVpHGSD4ip2r7SoAZB1EUiXi4f1YxKeY1yqlGnS4fbtZVm4UR9IUSLSwo4jANkweBcO6YrHfz5c6vtmdggDRp+nUmYz/8W2pDj8nY+O9oMAhANWR/q/5EFNOr6aNg/rIC3kYkZgi3RZMRsYulnPK77g7AcSH8akw+n3lkYiPH8BiuBmgxqrNlTXzElOctG8IrGlI29KTkz8tVHNYixyfCOsqtcViTupmnHL7yp3lzSjXoFMJILvIc1LmvJniZA3zLovqXQMy95V4XVLDsoThFp0q1cD8R74pidOXwPEJeyyd6QsGg6Y4eovz1mS2kJnnQwxneuQ/v1lQZlJoDcuxR2oCiBbIh5W1aA7z+DLYkvsiu9N+WGFrx0moEZ1s7/Knxb8BTtOAFAG8gQAAAABJRU5ErkJggg=="}),i.a.createElement("h2",null,"hello@videobakers.de")),i.a.createElement("div",{className:l.a.contactWay},i.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAeCAYAAAC8AUekAAAAAXNSR0IArs4c6QAACA1JREFUWAm1WAtwlNUVvufubmhCBHazuwkxxA6m+wcScSCDjNPHMDqMZXSYKTWAtrW2mcHWjGKnBac4HajjDNPOaG0dqBRL6wOrNtVa3xUKY3WYTivWYswm8kgRyG72kQQSMCR7T7/zbzb5s9lHsHJnsv+953zn3POf171/SH3K4atbNkv3Dyw2yixh0lcq5nmKeB6xCjBRKSkuY1YziNQwM53H+jzoCaX4Y830sdHqOCn9XqmHD506FQb94gdNV6SpqcnTfXLwyzDkRmXMSlaqHrLTli+4D9Fxxep1pfQrMz83528nTx48XxA/xiy6ud9fH4J318Nrt8O7FVOVUh+82sWk4oopCU8nYUiCiJOKaACengW6D/I+ZiPyPlJUgZcP5dJHRIOQ3+Mi96OxWPu/p+43QclrvG00mW0I/eoJOGZE3VD+mta016PVoUgk3D2JfxELX3XjPEqNLDGGr4fYSuitc4rDEW+6lGdTvpeYYnxd3coZyTPHt7Hhu+A1d1qZ7dEnWdNv+6Lhw84NPsu5r6phoTKpFmb+tiMqCBrtdin3PXiJQed+k4z3V1tWakQ9B8FFNggFBsFts8qqtnd3H/jEKXgp57YD+4/eCavvy7wE7PgIL7DGGYVx44PBhqtHeHSfA/yYmj3nh8kj/zgzXUMl1VKar4OOhcjrICLnQ56dQQeKMeoCeXygtXXN+1u3bjXT0emd3zSbzp59GKl7u+Ch86zSdEOyN3wwvcZvILDgC6PKHBTD8YbnkNe3AfAnARQbNTUNvqHhkfUoyu/B2CuK4ZHHvcjtHSXumTsikfdixfDC9wetb6SM2g39JfICcMJXJALU3Nzs2rf//XdQ/ctg+JB20U3xSPhAMaUNDQ0lPdHRe9HbfwzPlE7g6QTmbyOkp1irODZDv+cA1ouBW5qpI3ESutSmRKxr+4Rs/pm/0lqVSqk2yHugq2NWefUS8gWsZih/TsS0dq1O9Ha8kF9FmhMMWotGDT+NF24Yw/bDyMe0ol3xeLgrn7zfsi7jPv6WYdqIKH9ecIjEq+goa7OLMZcOb7D+Dpwxj6blqEXB+Fe9/hD7AqG/5hLIpvmC9df6/NYZkcGf8Qas7XLaZuNkLQdbLrpEDfv+YkwH9Fj7a2qudUQvl1Sa5g2EDtn2+kNviud74PkqHNXrk/HwrvxiSonHRwy/Bcxs/A1ol/p6Itq1zyljh9ew1MBVCPE8hPg03Iv2yr9PxrqedWK9lfW3qpR5AjQX0uiNuUH3qvb29gtOTPa8ImDdZ5gfAD6iwbS9BkMi2UDnWip/hPl50GZDcFC71Qqn4VVViwOIyN5Uil9EQd4IY2uBRaNRl8M5X0W+PwNHve27fFFNRi/OjKc16RasAeEbenpHHs/w8j0NUVx46F5ejR/baBxK6d6eR4rODu6CxJUix6zXJSJd/8xAJT2GU0Nt0CUnpVx49uIF75Ea0kQbZC10CH5RDQ//2ZkiiVj4cdJ6Y5qv1iEtVso872Bj1xl0DiDnQ7+zcwjpI4dDLqGKSuu6TH5W+K2fZWMqAvWbx/hG2lo2X9Ze/4J1wKTsvfzWz50YvBShdv5u6wiEPspnRyDQUA5Mv43zWy+gQejfiCIoqEoMHG2rrm4qcyrGgaJx93jIppE6cln53C1OvsyN4nXyhLfb4r2de2SePfriHc+gs0h+I4BqrZMPOXYxtYB/Hsy6ZP+xTU6+zGtrr/KmePRFTKXepEvthPfhFXQMWH+nzEE+ASJaJ/dgPhe3RTkxl9gcorXJWCd4kwdCLQeP9PItyXjX/ZO5Eyvk/AY46WHovdAX75wSZXSyh9iYH4gEWu+7+HkHVvZh/xqk5CrZI62N9kD+m1KwakPrLXcB+AimcArXAvgjTB6U57jhijrvbr0Fh8TUgao8JlTcRVZICkxFpCnQt0JmOJyO5sKUaPUr0FPCA7YJuu7Gy2zBsyVjOKK0e/4V5d8RzKSNvJULGom5WbFpBGsmOsQw1KwSILrCZhTXNplnD5+/fj0rs9OmE+0o9ZRvPH363XMZnORw38Cxn6LF3Ss0KWZE8JcZvvOJ6PwRxt48hpPWOgc2nIMzwy52tcXjHYcy+EnGZ4iZJy5aN6WUeUnWHl1S19v7QU6PCR+bPotN18gc+RjFZm/AyP/CYzWI3gqs7RYJ3vOJ3s6bJc8Fmz2gZw302OeBy0NL4z2d/8rGZNZj9/XMcvLTEC+TRMJGkUKGi5RHz/juBTOMrym+AxGrBOk2GOFUmIKincBtyme4gEtcZfuHR4dEkDjF1+D56YxHuOxCxXM8VLJBrhGN/mcI9Fak3q/xQXErCqARuT0fFdCNpDtMLv1UMvJhey5ZJ01umvB+O168EeWz2MnLnhf0PMC4j8vAPXqaoy/a8QGgm6cJzwmD28f+m8DlOQFjRLvb5AOwohLhofJn5sNcCjqaRqm9L6NNFhgFjYfVp0QWpRUsoOMzZS1fvtwNp9kf4rhadBRSXtB45KxdLAjjNbgB4pZ46cfhD3twWsvno1JuzS8X2rGg8R4XPQm/j4oCMubBfPf2QhtcDK+iMnS9Mcru/+hIr0ejnccLyRfs8yKIa+5PkPP3yxzgk/j9AxS341D6hNlVVF7kig5tapGaS9FhVgOLbKEhN3muLtaei24OheQLWg8g//+vDlL0BcYBlHST/los1vHWOCnPpKjxGbmKyoXL2Ix+H/n/JfRwfGhwzk+8DP4inwO4iB2Bzr+Ul8145MSJwwW7TEb3/wCpXkFebUKwzAAAAABJRU5ErkJggg=="}),i.a.createElement("h2",null,"+49 7541 400 4109"))))},s=n("RMOh"),d=n("AefV"),A=n("JqE8");t.default=function(){return i.a.createElement(a.a,null,i.a.createElement(o.a,null),i.a.createElement(d.a,{title:"Dein Sprecher finden",description:"Mit Voicebirds findest du innerhalb von nur 1 Minute den richtigen Sprecher. Ob für einen Film, eine Bandansage oder für einen Trailer, alles kein Problem  mit Voicebirds!"}),i.a.createElement("div",{className:s.contactRow},i.a.createElement(u,null),i.a.createElement("div",{className:s.contactForm},i.a.createElement("h2",null,"Kontaktformular"),i.a.createElement("p",null,"Du hast Fragen, benötigst Hilfe oder möchtest uns mit deinem Feedback noch besser machen?"),i.a.createElement(A.a,{portalID:"7545058",formId:"a9098ce4-e6f7-47fa-916c-3fb7fba8117d"}))))}},x7UD:function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("4tpq"),a=n.n(o);t.a=function(e){var t=e.src,n=void 0===t?"":t;return i.a.createElement("div",{style:n?{backgroundImage:"url("+n+")"}:{},className:a.a.illustrationBg})}},y93S:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MjYiIGhlaWdodD0iNDY2IiB2aWV3Qm94PSIwIDAgNTI2IDQ2NiI+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fYSIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9IjAlIiB5Mj0iMzguMTU4JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkYiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjQkNGNEZGIiBzdG9wLW9wYWNpdHk9Ii44Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InByZWZpeF9fYiIgeDE9IjUwJSIgeDI9IjUwJSIgeTE9Ii0xMC4wNDYlIiB5Mj0iNTkuMjY5JSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iLjAwNSUiIHN0b3AtY29sb3I9IiNGRDkxQzciIHN0b3Atb3BhY2l0eT0iLjkiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkI1ODk1IiBzdG9wLW9wYWNpdHk9Ii45Ii8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNwcmVmaXhfX2EpIiBkPSJNODYuOTg0IDcuMTY4YzY2LjY5Ni0zMy44NzIgMjkzLjM2MiA2MS44NSAzMDcuMzEgODguMjI1IDcuMDMyIDEzLjI5OCAxMi4wMzkgNTAuOTIxLTMuNjI3IDg5LjUzOS0xOC42OTUgNDYuMDg1LTYwLjU0OCA3MC41NTctOTcuMTA1IDczLjQxMi02Ny4xOSA1LjI0OC0yMjUuMDUtMjEuMzUyLTI3My44NzktNjYuNzg3LTQ4LjgyOS00NS40MzUuNjA1LTE1MC41MTcgNjcuMzAxLTE4NC4zODl6IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMjAwLjUgMTI5LjUpIi8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNwcmVmaXhfX2IpIiBkPSJNMTIzLjQ5NiA0MS4wOTVjODUuNDktNTcuMTUxIDM3Ni4wMyAxMDQuMzU3IDM5My45MDggMTQ4Ljg1NyA5LjAxNCAyMi40MzcgMTUuNDMyIDg1LjkxOC00LjY0OSAxNTEuMDc2LTIzLjk2MyA3Ny43NTctNzcuNjEgMTE5LjA0OC0xMjQuNDY5IDEyMy44NjUtODYuMTI0IDguODU1LTI4OC40NjctMzYuMDI3LTM1MS4wNTYtMTEyLjY4N3MuNzc1LTI1My45NiA4Ni4yNjYtMzExLjExMXoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAyNjkgMjQ3LjUpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="}}]);
//# sourceMappingURL=component---src-pages-kontakt-index-tsx-178a6d91a5de54afd86d.js.map