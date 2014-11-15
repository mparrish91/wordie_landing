window.Modernizr = function(e, t, n) {
        function r(e) {
            v.cssText = e
        }

        function i(e, t) {
            return typeof e === t
        }

        function o(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function a(e, t) {
            for (var r in e) {
                var i = e[r];
                if (!o(i, "-") && v[i] !== n) return "pfx" == t ? i : !0
            }
            return !1
        }

        function s(e, t, r) {
            for (var o in e) {
                var a = t[e[o]];
                if (a !== n) return r === !1 ? e[o] : i(a, "function") ? a.bind(
                    r || t) : a
            }
            return !1
        }

        function u(e, t, n) {
            var r = e.charAt(0).toUpperCase() + e.slice(1),
                o = (e + " " + b.join(r + " ") + r).split(" ");
            return i(t, "string") || i(t, "undefined") ? a(o, t) : (o = (e +
                " " + w.join(r + " ") + r).split(" "), s(o, t, n))
        }
        var c, l, f, p = "2.6.2",
            d = {},
            h = !0,
            m = t.documentElement,
            g = "modernizr",
            y = t.createElement(g),
            v = y.style,
            x = ({}.toString, "Webkit Moz O ms"),
            b = x.split(" "),
            w = x.toLowerCase().split(" "),
            T = {},
            k = [],
            C = k.slice,
            E = {}.hasOwnProperty;
        f = i(E, "undefined") || i(E.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return E.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = C.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var o = new i,
                            a = t.apply(o, n.concat(C.call(arguments)));
                        return Object(a) === a ? a : o
                    }
                    return t.apply(e, n.concat(C.call(arguments)))
                };
            return r
        }), T.cssanimations = function() {
            return u("animationName")
        };
        for (var j in T) f(T, j) && (l = j.toLowerCase(), d[l] = T[j](), k.push(
            (d[l] ? "" : "no-") + l));
        return d.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) f(e, r) && d.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), d[e] !== n) return d;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof h &&
                        h && (m.className += " " + (t ? "" : "no-") + e), d[e] =
                        t
                }
                return d
            }, r(""), y = c = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(
                        n.lastChild, r.firstChild)
                }

                function r() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function i(e) {
                    var t = g[e[h]];
                    return t || (t = {}, m++, e[h] = m, g[m] = t), t
                }

                function o(e, n, r) {
                    if (n || (n = t), l) return n.createElement(e);
                    r || (r = i(n));
                    var o;
                    return o = r.cache[e] ? r.cache[e].cloneNode() : d.test(
                            e) ? (r.cache[e] = r.createElem(e)).cloneNode() :
                        r.createElem(e), o.canHaveChildren && !p.test(e) ?
                        r.frag.appendChild(o) : o
                }

                function a(e, n) {
                    if (e || (e = t), l) return e.createDocumentFragment();
                    n = n || i(e);
                    for (var o = n.frag.cloneNode(), a = 0, s = r(), u = s.length; u >
                        a; a++) o.createElement(s[a]);
                    return o
                }

                function s(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement,
                        t.createFrag = e.createDocumentFragment, t.frag =
                        t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? o(n, e, t) : t.createElem(
                            n)
                    }, e.createDocumentFragment = Function("h,f",
                        "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                        r().join().replace(/\w+/g, function(e) {
                            return t.createElem(e), t.frag.createElement(
                                e), 'c("' + e + '")'
                        }) + ");return n}")(y, t.frag)
                }

                function u(e) {
                    e || (e = t);
                    var r = i(e);
                    return y.shivCSS && !c && !r.hasCSS && (r.hasCSS = !!n(
                        e,
                        "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}"
                    )), l || s(e, r), e
                }
                var c, l, f = e.html5 || {},
                    p =
                    /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d =
                    /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    m = 0,
                    g = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", c = "hidden" in e, l = 1 ==
                            e.childNodes.length || function() {
                                t.createElement("a");
                                var e = t.createDocumentFragment();
                                return "undefined" == typeof e.cloneNode ||
                                    "undefined" == typeof e.createDocumentFragment ||
                                    "undefined" == typeof e.createElement
                            }()
                    } catch (n) {
                        c = !0, l = !0
                    }
                }();
                var y = {
                    elements: f.elements ||
                        "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: l,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: u,
                    createElement: o,
                    createDocumentFragment: a
                };
                e.html5 = y, u(t)
            }(this, t), d._version = p, d._domPrefixes = w, d._cssomPrefixes =
            b, d.testProp = function(e) {
                return a([e])
            }, d.testAllProps = u, m.className = m.className.replace(
                /(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + k.join(" ") : ""),
            d
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == g.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function o() {}

        function a(e) {
            return !e || "loaded" == e || "complete" == e ||
                "uninitialized" == e
        }

        function s() {
            var e = y.shift();
            v = 1, e ? e.t ? h(function() {
                ("c" == e.t ? p.injectCss : p.injectJs)(e.s, 0, e.a,
                    e.x, e.e, 1)
            }, 0) : (e(), s()) : v = 0
        }

        function u(e, n, r, i, o, u, c) {
            function l(t) {
                if (!d && a(f.readyState) && (x.r = d = 1, !v && s(), f
                    .onload = f.onreadystatechange = null, t)) {
                    "img" != e && h(function() {
                        w.removeChild(f)
                    }, 50);
                    for (var r in j[n]) j[n].hasOwnProperty(r) && j[n][
                        r
                    ].onload()
                }
            }
            var c = c || p.errorTimeout,
                f = t.createElement(e),
                d = 0,
                g = 0,
                x = {
                    t: r,
                    s: n,
                    e: o,
                    a: u,
                    x: c
                };
            1 === j[n] && (g = 1, j[n] = []), "object" == e ? f.data = n :
                (f.src = n, f.type = e), f.width = f.height = "0", f.onerror =
                f.onload = f.onreadystatechange = function() {
                    l.call(this, g)
                }, y.splice(i, 0, x), "img" != e && (g || 2 === j[n] ? (w.insertBefore(
                    f, b ? null : m), h(l, c)) : j[n].push(f))
        }

        function c(e, t, n, r, o) {
            return v = 0, t = t || "j", i(e) ? u("c" == t ? k : T, e, t,
                this.i++, n, r, o) : (y.splice(this.i++, 0, e), 1 == y.length &&
                s()), this
        }

        function l() {
            var e = p;
            return e.loader = {
                load: c,
                i: 0
            }, e
        }
        var f, p, d = t.documentElement,
            h = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            y = [],
            v = 0,
            x = "MozAppearance" in d.style,
            b = x && !!t.createRange().compareNode,
            w = b ? d : m.parentNode,
            d = e.opera && "[object Opera]" == g.call(e.opera),
            d = !!t.attachEvent && !d,
            T = x ? "object" : d ? "script" : "img",
            k = d ? "script" : T,
            C = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            E = [],
            j = {},
            S = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        p = function(e) {
                function t(e) {
                    var t, n, r, e = e.split("!"),
                        i = E.length,
                        o = e.pop(),
                        a = e.length,
                        o = {
                            url: o,
                            origUrl: o,
                            prefixes: e
                        };
                    for (n = 0; a > n; n++) r = e[n].split("="), (t = S[r.shift()]) &&
                        (o = t(o, r));
                    for (n = 0; i > n; n++) o = E[n](o);
                    return o
                }

                function a(e, i, o, a, s) {
                    var u = t(e),
                        c = u.autoCallback;
                    u.url.split(".").pop().split("?").shift(), u.bypass ||
                        (i && (i = r(i) ? i : i[e] || i[a] || i[e.split("/")
                            .pop().split("?")[0]]), u.instead ? u.instead(
                            e, i, o, a, s) : (j[u.url] ? u.noexec = !0 :
                            j[u.url] = 1, o.load(u.url, u.forceCSS || !
                                u.forceJS && "css" == u.url.split(".").pop()
                                .split("?").shift() ? "c" : n, u.noexec,
                                u.attrs, u.timeout), (r(i) || r(c)) &&
                            o.load(function() {
                                l(), i && i(u.origUrl, s, a), c &&
                                    c(u.origUrl, s, a), j[u.url] =
                                    2
                            })))
                }

                function s(e, t) {
                    function n(e, n) {
                        if (e) {
                            if (i(e)) n || (f = function() {
                                var e = [].slice.call(arguments);
                                p.apply(this, e), d()
                            }), a(e, f, t, 0, c);
                            else if (Object(e) === e)
                                for (u in s = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) &&
                                        n++;
                                    return n
                                }(), e) e.hasOwnProperty(u) && (!n && !
                                    --s && (r(f) ? f = function() {
                                        var e = [].slice.call(
                                            arguments);
                                        p.apply(this, e), d()
                                    } : f[u] = function(e) {
                                        return function() {
                                            var t = [].slice
                                                .call(
                                                    arguments
                                                );
                                            e && e.apply(
                                                this, t
                                            ), d()
                                        }
                                    }(p[u])), a(e[u], f, t, u, c))
                        } else !n && d()
                    }
                    var s, u, c = !!e.test,
                        l = e.load || e.both,
                        f = e.callback || o,
                        p = f,
                        d = e.complete || o;
                    n(c ? e.yep : e.nope, !!l), l && n(l)
                }
                var u, c, f = this.yepnope.loader;
                if (i(e)) a(e, 0, f, 0);
                else if (C(e))
                    for (u = 0; u < e.length; u++) c = e[u], i(c) ? a(c, 0, f,
                        0) : C(c) ? p(c) : Object(c) === c && s(c, f);
                else Object(e) === e && s(e, f)
            }, p.addPrefix = function(e, t) {
                S[e] = t
            }, p.addFilter = function(e) {
                E.push(e)
            }, p.errorTimeout = 1e4, null == t.readyState && t.addEventListener &&
            (t.readyState = "loading", t.addEventListener("DOMContentLoaded", f =
                function() {
                    t.removeEventListener("DOMContentLoaded", f, 0), t.readyState =
                        "complete"
                }, 0)), e.yepnope = l(), e.yepnope.executeStack = s, e.yepnope.injectJs =
            function(e, n, r, i, u, c) {
                var l, f, d = t.createElement("script"),
                    i = i || p.errorTimeout;
                d.src = e;
                for (f in r) d.setAttribute(f, r[f]);
                n = c ? s : n || o, d.onreadystatechange = d.onload = function() {
                    !l && a(d.readyState) && (l = 1, n(), d.onload = d.onreadystatechange =
                        null)
                }, h(function() {
                    l || (l = 1, n(1))
                }, i), u ? d.onload() : m.parentNode.insertBefore(d, m)
            }, e.yepnope.injectCss = function(e, n, r, i, a, u) {
                var c, i = t.createElement("link"),
                    n = u ? s : n || o;
                i.href = e, i.rel = "stylesheet", i.type = "text/css";
                for (c in r) i.setAttribute(c, r[c]);
                a || (m.parentNode.insertBefore(i, m), h(n, 0))
            }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(e, t) {
        function n(e) {
            var t = e.length,
                n = ot.type(e);
            return ot.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 :
                "array" === n || "function" !== n && (0 === t || "number" ==
                    typeof t && t > 0 && t - 1 in e)
        }

        function r(e) {
            var t = ht[e] = {};
            return ot.each(e.match(st) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function i() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = ot.expando + Math.random()
        }

        function o(e, n, r) {
            var i;
            if (r === t && 1 === e.nodeType)
                if (i = "data-" + n.replace(vt, "-$1").toLowerCase(), r = e
                    .getAttribute(i), "string" == typeof r) {
                    try {
                        r = "true" === r ? !0 : "false" === r ? !1 : "null" ===
                            r ? null : +r + "" === r ? +r : yt.test(r) ?
                            JSON.parse(r) : r
                    } catch (o) {}
                    mt.set(e, n, r)
                } else r = t;
            return r
        }

        function a() {
            return !0
        }

        function s() {
            return !1
        }

        function u() {
            try {
                return X.activeElement
            } catch (e) {}
        }

        function c(e, t) {
            for (;
                (e = e[t]) && 1 !== e.nodeType;);
            return e
        }

        function l(e, t, n) {
            if (ot.isFunction(t)) return ot.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
            if (t.nodeType) return ot.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (Nt.test(t)) return ot.filter(t, e, n);
                t = ot.filter(t, e)
            }
            return ot.grep(e, function(e) {
                return tt.call(t, e) >= 0 !== n
            })
        }

        function f(e, t) {
            return ot.nodeName(e, "table") && ot.nodeName(1 === t.nodeType ?
                t : t.firstChild, "tr") ? e.getElementsByTagName(
                "tbody")[0] || e.appendChild(e.ownerDocument.createElement(
                "tbody")) : e
        }

        function p(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
        }

        function d(e) {
            var t = Pt.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function h(e, t) {
            for (var n = e.length, r = 0; n > r; r++) gt.set(e[r],
                "globalEval", !t || gt.get(t[r], "globalEval"))
        }

        function m(e, t) {
            var n, r, i, o, a, s, u, c;
            if (1 === t.nodeType) {
                if (gt.hasData(e) && (o = gt.access(e), a = gt.set(t, o), c =
                    o.events)) {
                    delete a.handle, a.events = {};
                    for (i in c)
                        for (n = 0, r = c[i].length; r > n; n++) ot.event.add(
                            t, i, c[i][n])
                }
                mt.hasData(e) && (s = mt.access(e), u = ot.extend({}, s),
                    mt.set(t, u))
            }
        }

        function g(e, n) {
            var r = e.getElementsByTagName ? e.getElementsByTagName(n ||
                "*") : e.querySelectorAll ? e.querySelectorAll(n || "*") : [];
            return n === t || n && ot.nodeName(e, n) ? ot.merge([e], r) : r
        }

        function y(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Ft.test(e.type) ? t.checked = e.checked : (
                "input" === n || "textarea" === n) && (t.defaultValue =
                e.defaultValue)
        }

        function v(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i =
                Zt.length; i--;)
                if (t = Zt[i] + n, t in e) return t;
            return r
        }

        function x(e, t) {
            return e = t || e, "none" === ot.css(e, "display") || !ot.contains(
                e.ownerDocument, e)
        }

        function b(t) {
            return e.getComputedStyle(t, null)
        }

        function w(e, t) {
            for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r =
                e[a], r.style && (o[a] = gt.get(r, "olddisplay"), n = r.style
                    .display, t ? (o[a] || "none" !== n || (r.style.display =
                        ""), "" === r.style.display && x(r) && (o[a] =
                        gt.access(r, "olddisplay", E(r.nodeName)))) : o[a] ||
                    (i = x(r), (n && "none" !== n || !i) && gt.set(r,
                        "olddisplay", i ? n : ot.css(r, "display"))));
            for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r
                .style.display && "" !== r.style.display || (r.style.display =
                    t ? o[a] || "" : "none"));
            return e
        }

        function T(e, t, n) {
            var r = Qt.exec(t);
            return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
        }

        function k(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" ===
                t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ot
                .css(e, n + Kt[o], !0, i)), r ? ("content" === n && (a -=
                    ot.css(e, "padding" + Kt[o], !0, i)), "margin" !==
                n && (a -= ot.css(e, "border" + Kt[o] + "Width", !0, i))
            ) : (a += ot.css(e, "padding" + Kt[o], !0, i), "padding" !==
                n && (a += ot.css(e, "border" + Kt[o] + "Width", !0, i))
            );
            return a
        }

        function C(e, t, n) {
            var r = !0,
                i = "width" === t ? e.offsetWidth : e.offsetHeight,
                o = b(e),
                a = ot.support.boxSizing && "border-box" === ot.css(e,
                    "boxSizing", !1, o);
            if (0 >= i || null == i) {
                if (i = Bt(e, t, o), (0 > i || null == i) && (i = e.style[t]),
                    Ut.test(i)) return i;
                r = a && (ot.support.boxSizingReliable || i === e.style[t]),
                    i = parseFloat(i) || 0
            }
            return i + k(e, t, n || (a ? "border" : "content"), r, o) +
                "px"
        }

        function E(e) {
            var t = X,
                n = Yt[e];
            return n || (n = j(e, t), "none" !== n && n || (Wt = (Wt || ot(
                    "<iframe frameborder='0' width='0' height='0'/>"
                ).css("cssText", "display:block !important")).appendTo(
                    t.documentElement), t = (Wt[0].contentWindow ||
                    Wt[0].contentDocument).document, t.write(
                    "<!doctype html><html><body>"), t.close(), n =
                j(e, t), Wt.detach()), Yt[e] = n), n
        }

        function j(e, t) {
            var n = ot(t.createElement(e)).appendTo(t.body),
                r = ot.css(n[0], "display");
            return n.remove(), r
        }

        function S(e, t, n, r) {
            var i;
            if (ot.isArray(t)) ot.each(t, function(t, i) {
                n || tn.test(e) ? r(e, i) : S(e + "[" + ("object" ==
                    typeof i ? t : "") + "]", i, n, r)
            });
            else if (n || "object" !== ot.type(t)) r(e, t);
            else
                for (i in t) S(e + "[" + i + "]", t[i], n, r)
        }

        function N(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var r, i = 0,
                    o = t.toLowerCase().match(st) || [];
                if (ot.isFunction(n))
                    for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) ||
                        "*", (e[r] = e[r] || []).unshift(n)) : (e[r] =
                        e[r] || []).push(n)
            }
        }

        function D(e, n, r, i) {
            function o(u) {
                var c;
                return a[u] = !0, ot.each(e[u] || [], function(e, u) {
                    var l = u(n, r, i);
                    return "string" != typeof l || s || a[l] ?
                        s ? !(c = l) : t : (n.dataTypes.unshift(
                            l), o(l), !1)
                }), c
            }
            var a = {},
                s = e === xn;
            return o(n.dataTypes[0]) || !a["*"] && o("*")
        }

        function A(e, n) {
            var r, i, o = ot.ajaxSettings.flatOptions || {};
            for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
            return i && ot.extend(!0, e, i), e
        }

        function O(e, n, r) {
            for (var i, o, a, s, u = e.contents, c = e.dataTypes;
                "*" === c[0];) c.shift(), i === t && (i = e.mimeType || n.getResponseHeader(
                "Content-Type"));
            if (i)
                for (o in u)
                    if (u[o] && u[o].test(i)) {
                        c.unshift(o);
                        break
                    }
            if (c[0] in r) a = c[0];
            else {
                for (o in r) {
                    if (!c[0] || e.converters[o + " " + c[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            return a ? (a !== c[0] && c.unshift(a), r[a]) : t
        }

        function L(e, t, n, r) {
            var i, o, a, s, u, c = {},
                l = e.dataTypes.slice();
            if (l[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (o = l.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u &&
                    r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    u = o, o = l.shift())
                    if ("*" === o) o = u;
                    else if ("*" !== u && u !== o) {
                if (a = c[u + " " + o] || c["* " + o], !a)
                    for (i in c)
                        if (s = i.split(" "), s[1] === o && (a = c[u + " " +
                            s[0]] || c["* " + s[0]])) {
                            a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0],
                                l.unshift(s[1]));
                            break
                        }
                if (a !== !0)
                    if (a && e["throws"]) t = a(t);
                    else try {
                        t = a(t)
                    } catch (f) {
                        return {
                            state: "parsererror",
                            error: a ? f : "No conversion from " + u +
                                " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function M() {
            return setTimeout(function() {
                Nn = t
            }), Nn = ot.now()
        }

        function _(e, t, n) {
            for (var r, i = (_n[t] || []).concat(_n["*"]), o = 0, a = i.length; a >
                o; o++)
                if (r = i[o].call(n, t, e)) return r
        }

        function q(e, t, n) {
            var r, i, o = 0,
                a = Mn.length,
                s = ot.Deferred().always(function() {
                    delete u.elem
                }),
                u = function() {
                    if (i) return !1;
                    for (var t = Nn || M(), n = Math.max(0, c.startTime + c
                            .duration - t), r = n / c.duration || 0, o =
                        1 - r, a = 0, u = c.tweens.length; u > a; a++) c.tweens[
                        a].run(o);
                    return s.notifyWith(e, [c, o, n]), 1 > o && u ? n : (s.resolveWith(
                        e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: ot.extend({}, t),
                    opts: ot.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Nn || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var r = ot.Tween(e, c.opts, t, n, c.opts.specialEasing[
                            t] || c.opts.easing);
                        return c.tweens.push(r), r
                    },
                    stop: function(t) {
                        var n = 0,
                            r = t ? c.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; r > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(
                            e, [c, t]), this
                    }
                }),
                l = c.props;
            for (F(l, c.opts.specialEasing); a > o; o++)
                if (r = Mn[o].call(c, e, l, c.opts)) return r;
            return ot.map(l, _, c), ot.isFunction(c.opts.start) && c.opts.start
                .call(e, c), ot.fx.timer(ot.extend(u, {
                    elem: e,
                    anim: c,
                    queue: c.opts.queue
                })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail).always(c.opts.always)
        }

        function F(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (r = ot.camelCase(n), i = t[r], o = e[n], ot.isArray(o) &&
                    (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o,
                        delete e[n]), a = ot.cssHooks[r], a && "expand" in
                    a) {
                    o = a.expand(o), delete e[r];
                    for (n in o) n in e || (e[n] = o[n], t[n] = i)
                } else t[r] = i
        }

        function H(e, n, r) {
            var i, o, a, s, u, c, l = this,
                f = {},
                p = e.style,
                d = e.nodeType && x(e),
                h = gt.get(e, "fxshow");
            r.queue || (u = ot._queueHooks(e, "fx"), null == u.unqueued &&
                    (u.unqueued = 0, c = u.empty.fire, u.empty.fire =
                        function() {
                            u.unqueued || c()
                        }), u.unqueued++, l.always(function() {
                        l.always(function() {
                            u.unqueued--, ot.queue(e, "fx").length ||
                                u.empty.fire()
                        })
                    })), 1 === e.nodeType && ("height" in n || "width" in n) &&
                (r.overflow = [p.overflow, p.overflowX, p.overflowY],
                    "inline" === ot.css(e, "display") && "none" === ot.css(
                        e, "float") && (p.display = "inline-block")), r.overflow &&
                (p.overflow = "hidden", l.always(function() {
                    p.overflow = r.overflow[0], p.overflowX = r.overflow[
                        1], p.overflowY = r.overflow[2]
                }));
            for (i in n)
                if (o = n[i], An.exec(o)) {
                    if (delete n[i], a = a || "toggle" === o, o === (d ?
                        "hide" : "show")) {
                        if ("show" !== o || !h || h[i] === t) continue;
                        d = !0
                    }
                    f[i] = h && h[i] || ot.style(e, i)
                }
            if (!ot.isEmptyObject(f)) {
                h ? "hidden" in h && (d = h.hidden) : h = gt.access(e,
                        "fxshow", {}), a && (h.hidden = !d), d ? ot(e).show() :
                    l.done(function() {
                        ot(e).hide()
                    }), l.done(function() {
                        var t;
                        gt.remove(e, "fxshow");
                        for (t in f) ot.style(e, t, f[t])
                    });
                for (i in f) s = _(d ? h[i] : 0, i, l), i in h || (h[i] = s
                    .start, d && (s.end = s.start, s.start = "width" ===
                        i || "height" === i ? 1 : 0))
            }
        }

        function I(e, t, n, r, i) {
            return new I.prototype.init(e, t, n, r, i)
        }

        function P(e, t) {
            var n, r = {
                    height: e
                },
                i = 0;
            for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Kt[i], r["margin" +
                n] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e), r
        }

        function R(e) {
            return ot.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var $, B, W = typeof t,
            z = e.location,
            X = e.document,
            Q = X.documentElement,
            U = e.jQuery,
            V = e.$,
            Y = {},
            G = [],
            J = "2.0.3",
            K = G.concat,
            Z = G.push,
            et = G.slice,
            tt = G.indexOf,
            nt = Y.toString,
            rt = Y.hasOwnProperty,
            it = J.trim,
            ot = function(e, t) {
                return new ot.fn.init(e, t, $)
            },
            at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            st = /\S+/g,
            ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ct = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            lt = /^-ms-/,
            ft = /-([\da-z])/gi,
            pt = function(e, t) {
                return t.toUpperCase()
            },
            dt = function() {
                X.removeEventListener("DOMContentLoaded", dt, !1), e.removeEventListener(
                    "load", dt, !1), ot.ready()
            };
        ot.fn = ot.prototype = {
                jquery: J,
                constructor: ot,
                init: function(e, n, r) {
                    var i, o;
                    if (!e) return this;
                    if ("string" == typeof e) {
                        if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length -
                            1) && e.length >= 3 ? [null, e, null] : ut.exec(
                            e), !i || !i[1] && n) return !n || n.jquery ? (
                            n || r).find(e) : this.constructor(n).find(
                            e);
                        if (i[1]) {
                            if (n = n instanceof ot ? n[0] : n, ot.merge(
                                this, ot.parseHTML(i[1], n && n.nodeType ?
                                    n.ownerDocument || n : X, !0)), ct.test(
                                i[1]) && ot.isPlainObject(n))
                                for (i in n) ot.isFunction(this[i]) ? this[
                                    i](n[i]) : this.attr(i, n[i]);
                            return this
                        }
                        return o = X.getElementById(i[2]), o && o.parentNode &&
                            (this.length = 1, this[0] = o), this.context =
                            X, this.selector = e, this
                    }
                    return e.nodeType ? (this.context = this[0] = e, this.length =
                        1, this) : ot.isFunction(e) ? r.ready(e) : (e.selector !==
                        t && (this.selector = e.selector, this.context =
                            e.context), ot.makeArray(e, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return et.call(this)
                },
                get: function(e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length +
                        e] : this[e]
                },
                pushStack: function(e) {
                    var t = ot.merge(this.constructor(), e);
                    return t.prevObject = this, t.context = this.context, t
                },
                each: function(e, t) {
                    return ot.each(this, e, t)
                },
                ready: function(e) {
                    return ot.ready.promise().done(e), this
                },
                slice: function() {
                    return this.pushStack(et.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(e) {
                    var t = this.length,
                        n = +e + (0 > e ? t : 0);
                    return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
                },
                map: function(e) {
                    return this.pushStack(ot.map(this, function(t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: Z,
                sort: [].sort,
                splice: [].splice
            }, ot.fn.init.prototype = ot.fn, ot.extend = ot.fn.extend =
            function() {
                var e, n, r, i, o, a, s = arguments[0] || {},
                    u = 1,
                    c = arguments.length,
                    l = !1;
                for ("boolean" == typeof s && (l = s, s = arguments[1] || {}, u =
                        2), "object" == typeof s || ot.isFunction(s) || (s = {}),
                    c === u && (s = this, --u); c > u; u++)
                    if (null != (e = arguments[u]))
                        for (n in e) r = s[n], i = e[n], s !== i && (l && i &&
                            (ot.isPlainObject(i) || (o = ot.isArray(i))) ?
                            (o ? (o = !1, a = r && ot.isArray(r) ? r : []) :
                                a = r && ot.isPlainObject(r) ? r : {}, s[n] =
                                ot.extend(l, a, i)) : i !== t && (s[n] = i)
                        );
                return s
            }, ot.extend({
                expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
                noConflict: function(t) {
                    return e.$ === ot && (e.$ = V), t && e.jQuery ===
                        ot && (e.jQuery = U), ot
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) {
                    e ? ot.readyWait++ : ot.ready(!0)
                },
                ready: function(e) {
                    (e === !0 ? --ot.readyWait : ot.isReady) || (ot.isReady = !
                        0, e !== !0 && --ot.readyWait > 0 || (B.resolveWith(
                            X, [ot]), ot.fn.trigger && ot(X).trigger(
                            "ready").off("ready")))
                },
                isFunction: function(e) {
                    return "function" === ot.type(e)
                },
                isArray: Array.isArray,
                isWindow: function(e) {
                    return null != e && e === e.window
                },
                isNumeric: function(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function(e) {
                    return null == e ? e + "" : "object" == typeof e ||
                        "function" == typeof e ? Y[nt.call(e)] ||
                        "object" : typeof e
                },
                isPlainObject: function(e) {
                    if ("object" !== ot.type(e) || e.nodeType || ot.isWindow(
                        e)) return !1;
                    try {
                        if (e.constructor && !rt.call(e.constructor.prototype,
                            "isPrototypeOf")) return !1
                    } catch (t) {
                        return !1
                    }
                    return !0
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) return !1;
                    return !0
                },
                error: function(e) {
                    throw Error(e)
                },
                parseHTML: function(e, t, n) {
                    if (!e || "string" != typeof e) return null;
                    "boolean" == typeof t && (n = t, t = !1), t = t ||
                        X;
                    var r = ct.exec(e),
                        i = !n && [];
                    return r ? [t.createElement(r[1])] : (r = ot.buildFragment(
                        [e], t, i), i && ot(i).remove(), ot.merge(
                        [], r.childNodes))
                },
                parseJSON: JSON.parse,
                parseXML: function(e) {
                    var n, r;
                    if (!e || "string" != typeof e) return null;
                    try {
                        r = new DOMParser, n = r.parseFromString(e,
                            "text/xml")
                    } catch (i) {
                        n = t
                    }
                    return (!n || n.getElementsByTagName("parsererror")
                            .length) && ot.error("Invalid XML: " + e),
                        n
                },
                noop: function() {},
                globalEval: function(e) {
                    var t, n = eval;
                    e = ot.trim(e), e && (1 === e.indexOf("use strict") ?
                        (t = X.createElement("script"), t.text = e,
                            X.head.appendChild(t).parentNode.removeChild(
                                t)) : n(e))
                },
                camelCase: function(e) {
                    return e.replace(lt, "ms-").replace(ft, pt)
                },
                nodeName: function(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t
                        .toLowerCase()
                },
                each: function(e, t, r) {
                    var i, o = 0,
                        a = e.length,
                        s = n(e);
                    if (r) {
                        if (s)
                            for (; a > o && (i = t.apply(e[o], r), i !==
                                !1); o++);
                        else
                            for (o in e)
                                if (i = t.apply(e[o], r), i === !1)
                                    break
                    } else if (s)
                        for (; a > o && (i = t.call(e[o], o, e[o]), i !==
                            !1); o++);
                    else
                        for (o in e)
                            if (i = t.call(e[o], o, e[o]), i === !1)
                                break; return e
                },
                trim: function(e) {
                    return null == e ? "" : it.call(e)
                },
                makeArray: function(e, t) {
                    var r = t || [];
                    return null != e && (n(Object(e)) ? ot.merge(r,
                        "string" == typeof e ? [e] : e) : Z.call(
                        r, e)), r
                },
                inArray: function(e, t, n) {
                    return null == t ? -1 : tt.call(t, e, n)
                },
                merge: function(e, n) {
                    var r = n.length,
                        i = e.length,
                        o = 0;
                    if ("number" == typeof r)
                        for (; r > o; o++) e[i++] = n[o];
                    else
                        for (; n[o] !== t;) e[i++] = n[o++];
                    return e.length = i, e
                },
                grep: function(e, t, n) {
                    var r, i = [],
                        o = 0,
                        a = e.length;
                    for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r &&
                        i.push(e[o]);
                    return i
                },
                map: function(e, t, r) {
                    var i, o = 0,
                        a = e.length,
                        s = n(e),
                        u = [];
                    if (s)
                        for (; a > o; o++) i = t(e[o], o, r), null != i &&
                            (u[u.length] = i);
                    else
                        for (o in e) i = t(e[o], o, r), null != i && (u[
                            u.length] = i);
                    return K.apply([], u)
                },
                guid: 1,
                proxy: function(e, n) {
                    var r, i, o;
                    return "string" == typeof n && (r = e[n], n = e, e =
                            r), ot.isFunction(e) ? (i = et.call(
                            arguments, 2), o = function() {
                            return e.apply(n || this, i.concat(et.call(
                                arguments)))
                        }, o.guid = e.guid = e.guid || ot.guid++, o) :
                        t
                },
                access: function(e, n, r, i, o, a, s) {
                    var u = 0,
                        c = e.length,
                        l = null == r;
                    if ("object" === ot.type(r)) {
                        o = !0;
                        for (u in r) ot.access(e, n, u, r[u], !0, a, s)
                    } else if (i !== t && (o = !0, ot.isFunction(i) ||
                        (s = !0), l && (s ? (n.call(e, i), n = null) :
                            (l = n, n = function(e, t, n) {
                                return l.call(ot(e), n)
                            })), n))
                        for (; c > u; u++) n(e[u], r, s ? i : i.call(e[
                            u], u, n(e[u], r)));
                    return o ? e : l ? n.call(e) : c ? n(e[0], r) : a
                },
                now: Date.now,
                swap: function(e, t, n, r) {
                    var i, o, a = {};
                    for (o in t) a[o] = e.style[o], e.style[o] = t[o];
                    i = n.apply(e, r || []);
                    for (o in t) e.style[o] = a[o];
                    return i
                }
            }), ot.ready.promise = function(t) {
                return B || (B = ot.Deferred(), "complete" === X.readyState ?
                    setTimeout(ot.ready) : (X.addEventListener(
                        "DOMContentLoaded", dt, !1), e.addEventListener(
                        "load", dt, !1))), B.promise(t)
            }, ot.each(
                "Boolean Number String Function Array Date RegExp Object Error"
                .split(" "), function(e, t) {
                    Y["[object " + t + "]"] = t.toLowerCase()
                }), $ = ot(X),
            function(e, t) {
                function n(e, t, n, r) {
                    var i, o, a, s, u, c, l, f, h, m;
                    if ((t ? t.ownerDocument || t : R) !== L && O(t), t = t ||
                        L, n = n || [], !e || "string" != typeof e) return n;
                    if (1 !== (s = t.nodeType) && 9 !== s) return [];
                    if (_ && !r) {
                        if (i = xt.exec(e))
                            if (a = i[1]) {
                                if (9 === s) {
                                    if (o = t.getElementById(a), !o || !o.parentNode)
                                        return n;
                                    if (o.id === a) return n.push(o), n
                                } else if (t.ownerDocument && (o = t.ownerDocument
                                        .getElementById(a)) && I(t, o) && o
                                    .id === a) return n.push(o), n
                            } else {
                                if (i[2]) return et.apply(n, t.getElementsByTagName(
                                    e)), n;
                                if ((a = i[3]) && k.getElementsByClassName &&
                                    t.getElementsByClassName) return et.apply(
                                        n, t.getElementsByClassName(a)),
                                    n
                            }
                        if (k.qsa && (!q || !q.test(e))) {
                            if (f = l = P, h = t, m = 9 === s && e, 1 === s &&
                                "object" !== t.nodeName.toLowerCase()) {
                                for (c = p(e), (l = t.getAttribute("id")) ?
                                    f = l.replace(Tt, "\\$&") : t.setAttribute(
                                        "id", f), f = "[id='" + f + "'] ",
                                    u = c.length; u--;) c[u] = f + d(c[u]);
                                h = dt.test(e) && t.parentNode || t, m = c.join(
                                    ",")
                            }
                            if (m) try {
                                return et.apply(n, h.querySelectorAll(m)),
                                    n
                            } catch (g) {} finally {
                                l || t.removeAttribute("id")
                            }
                        }
                    }
                    return w(e.replace(lt, "$1"), t, n, r)
                }

                function r() {
                    function e(n, r) {
                        return t.push(n += " ") > E.cacheLength &&
                            delete e[t.shift()], e[n] = r
                    }
                    var t = [];
                    return e
                }

                function i(e) {
                    return e[P] = !0, e
                }

                function o(e) {
                    var t = L.createElement("div");
                    try {
                        return !!e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), t =
                            null
                    }
                }

                function a(e, t) {
                    for (var n = e.split("|"), r = e.length; r--;) E.attrHandle[
                        n[r]] = t
                }

                function s(e, t) {
                    var n = t && e,
                        r = n && 1 === e.nodeType && 1 === t.nodeType && (~
                            t.sourceIndex || Y) - (~e.sourceIndex || Y);
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === t) return -1;
                    return e ? 1 : -1
                }

                function u(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return "input" === n && t.type === e
                    }
                }

                function c(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type ===
                            e
                    }
                }

                function l(e) {
                    return i(function(t) {
                        return t = +t, i(function(n, r) {
                            for (var i, o = e([], n.length,
                                t), a = o.length; a--;) n[i =
                                o[a]] && (n[i] = !(r[i] =
                                n[i]))
                        })
                    })
                }

                function f() {}

                function p(e, t) {
                    var r, i, o, a, s, u, c, l = z[e + " "];
                    if (l) return t ? 0 : l.slice(0);
                    for (s = e, u = [], c = E.preFilter; s;) {
                        (!r || (i = ft.exec(s))) && (i && (s = s.slice(i[0]
                            .length) || s), u.push(o = [])), r = !1, (i =
                            pt.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(lt, " ")
                        }), s = s.slice(r.length));
                        for (a in E.filter)!(i = yt[a].exec(s)) || c[a] &&
                            !(i = c[a](i)) || (r = i.shift(), o.push({
                                value: r,
                                type: a,
                                matches: i
                            }), s = s.slice(r.length));
                        if (!r) break
                    }
                    return t ? s.length : s ? n.error(e) : z(e, u).slice(0)
                }

                function d(e) {
                    for (var t = 0, n = e.length, r = ""; n > t; t++) r +=
                        e[t].value;
                    return r
                }

                function h(e, t, n) {
                    var r = t.dir,
                        i = n && "parentNode" === r,
                        o = B++;
                    return t.first ? function(t, n, o) {
                        for (; t = t[r];)
                            if (1 === t.nodeType || i) return e(t, n, o)
                    } : function(t, n, a) {
                        var s, u, c, l = $ + " " + o;
                        if (a) {
                            for (; t = t[r];)
                                if ((1 === t.nodeType || i) && e(t, n,
                                    a)) return !0
                        } else
                            for (; t = t[r];)
                                if (1 === t.nodeType || i)
                                    if (c = t[P] || (t[P] = {}), (u = c[
                                        r]) && u[0] === l) {
                                        if ((s = u[1]) === !0 || s ===
                                            C) return s === !0
                                    } else if (u = c[r] = [l], u[1] = e(
                            t, n, a) || C, u[1] === !0) return !0
                    }
                }

                function m(e) {
                    return e.length > 1 ? function(t, n, r) {
                        for (var i = e.length; i--;)
                            if (!e[i](t, n, r)) return !1;
                        return !0
                    } : e[0]
                }

                function g(e, t, n, r, i) {
                    for (var o, a = [], s = 0, u = e.length, c = null != t; u >
                        s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(
                        o), c && t.push(s));
                    return a
                }

                function y(e, t, n, r, o, a) {
                    return r && !r[P] && (r = y(r)), o && !o[P] && (o = y(o,
                        a)), i(function(i, a, s, u) {
                        var c, l, f, p = [],
                            d = [],
                            h = a.length,
                            m = i || b(t || "*", s.nodeType ? [s] :
                                s, []),
                            y = !e || !i && t ? m : g(m, p, e, s, u),
                            v = n ? o || (i ? e : h || r) ? [] : a :
                            y;
                        if (n && n(y, v, s, u), r)
                            for (c = g(v, d), r(c, [], s, u), l = c
                                .length; l--;)(f = c[l]) && (v[d[l]] = !
                                (y[d[l]] = f));
                        if (i) {
                            if (o || e) {
                                if (o) {
                                    for (c = [], l = v.length; l--;)
                                        (f = v[l]) && c.push(y[l] =
                                            f);
                                    o(null, v = [], c, u)
                                }
                                for (l = v.length; l--;)(f = v[l]) &&
                                    (c = o ? nt.call(i, f) : p[l]) >
                                    -1 && (i[c] = !(a[c] = f))
                            }
                        } else v = g(v === a ? v.splice(h, v.length) :
                            v), o ? o(null, a, v, u) : et.apply(
                            a, v)
                    })
                }

                function v(e) {
                    for (var t, n, r, i = e.length, o = E.relative[e[0].type],
                        a = o || E.relative[" "], s = o ? 1 : 0, u = h(
                            function(e) {
                                return e === t
                            }, a, !0), c = h(function(e) {
                            return nt.call(t, e) > -1
                        }, a, !0), l = [
                            function(e, n, r) {
                                return !o && (r || n !== D) || ((t = n)
                                    .nodeType ? u(e, n, r) : c(e, n,
                                        r))
                            }
                        ]; i > s; s++)
                        if (n = E.relative[e[s].type]) l = [h(m(l), n)];
                        else {
                            if (n = E.filter[e[s].type].apply(null, e[s].matches),
                                n[P]) {
                                for (r = ++s; i > r && !E.relative[e[r].type]; r++)
                                ;
                                return y(s > 1 && m(l), s > 1 && d(e.slice(
                                        0, s - 1).concat({
                                        value: " " === e[s - 2]
                                            .type ? "*" : ""
                                    })).replace(lt, "$1"), n, r > s &&
                                    v(e.slice(s, r)), i > r && v(e = e.slice(
                                        r)), i > r && d(e))
                            }
                            l.push(n)
                        }
                    return m(l)
                }

                function x(e, t) {
                    var r = 0,
                        o = t.length > 0,
                        a = e.length > 0,
                        s = function(i, s, u, c, l) {
                            var f, p, d, h = [],
                                m = 0,
                                y = "0",
                                v = i && [],
                                x = null != l,
                                b = D,
                                w = i || a && E.find.TAG("*", l && s.parentNode ||
                                    s),
                                T = $ += null == b ? 1 : Math.random() || .1;
                            for (x && (D = s !== L && s, C = r); null != (f =
                                w[y]); y++) {
                                if (a && f) {
                                    for (p = 0; d = e[p++];)
                                        if (d(f, s, u)) {
                                            c.push(f);
                                            break
                                        }
                                    x && ($ = T, C = ++r)
                                }
                                o && ((f = !d && f) && m--, i && v.push(f))
                            }
                            if (m += y, o && y !== m) {
                                for (p = 0; d = t[p++];) d(v, h, s, u);
                                if (i) {
                                    if (m > 0)
                                        for (; y--;) v[y] || h[y] || (h[y] =
                                            K.call(c));
                                    h = g(h)
                                }
                                et.apply(c, h), x && !i && h.length > 0 &&
                                    m + t.length > 1 && n.uniqueSort(c)
                            }
                            return x && ($ = T, D = b), v
                        };
                    return o ? i(s) : s
                }

                function b(e, t, r) {
                    for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                    return r
                }

                function w(e, t, n, r) {
                    var i, o, a, s, u, c = p(e);
                    if (!r && 1 === c.length) {
                        if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" ===
                            (a = o[0]).type && k.getById && 9 === t.nodeType &&
                            _ && E.relative[o[1].type]) {
                            if (t = (E.find.ID(a.matches[0].replace(kt, Ct),
                                t) || [])[0], !t) return n;
                            e = e.slice(o.shift().value.length)
                        }
                        for (i = yt.needsContext.test(e) ? 0 : o.length; i--
                            && (a = o[i], !E.relative[s = a.type]);)
                            if ((u = E.find[s]) && (r = u(a.matches[0].replace(
                                    kt, Ct), dt.test(o[0].type) &&
                                t.parentNode || t))) {
                                if (o.splice(i, 1), e = r.length && d(o), !
                                    e) return et.apply(n, r), n;
                                break
                            }
                    }
                    return N(e, c)(r, t, !_, n, dt.test(e)), n
                }
                var T, k, C, E, j, S, N, D, A, O, L, M, _, q, F, H, I, P =
                    "sizzle" + -new Date,
                    R = e.document,
                    $ = 0,
                    B = 0,
                    W = r(),
                    z = r(),
                    X = r(),
                    Q = !1,
                    U = function(e, t) {
                        return e === t ? (Q = !0, 0) : 0
                    },
                    V = typeof t,
                    Y = 1 << 31,
                    G = {}.hasOwnProperty,
                    J = [],
                    K = J.pop,
                    Z = J.push,
                    et = J.push,
                    tt = J.slice,
                    nt = J.indexOf || function(e) {
                        for (var t = 0, n = this.length; n > t; t++)
                            if (this[t] === e) return t;
                        return -1
                    },
                    rt =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    it = "[\\x20\\t\\r\\n\\f]",
                    at = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    st = at.replace("w", "w#"),
                    ut = "\\[" + it + "*(" + at + ")" + it + "*(?:([*^$|!~]?=)" +
                    it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" +
                    it + "*\\]",
                    ct = ":(" + at +
                    ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
                    ut.replace(3, 8) + ")*)|.*)\\)|)",
                    lt = RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it +
                        "+$", "g"),
                    ft = RegExp("^" + it + "*," + it + "*"),
                    pt = RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                    dt = RegExp(it + "*[+~]"),
                    ht = RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
                    mt = RegExp(ct),
                    gt = RegExp("^" + st + "$"),
                    yt = {
                        ID: RegExp("^#(" + at + ")"),
                        CLASS: RegExp("^\\.(" + at + ")"),
                        TAG: RegExp("^(" + at.replace("w", "w*") + ")"),
                        ATTR: RegExp("^" + ut),
                        PSEUDO: RegExp("^" + ct),
                        CHILD: RegExp(
                            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                            it + "*(even|odd|(([+-]|)(\\d*)n|)" + it +
                            "*(?:([+-]|)" + it + "*(\\d+)|))" + it +
                            "*\\)|)", "i"),
                        bool: RegExp("^(?:" + rt + ")$", "i"),
                        needsContext: RegExp("^" + it +
                            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            it + "*((?:-\\d)?\\d*)" + it +
                            "*\\)|)(?=[^-]|$)", "i")
                    },
                    vt = /^[^{]+\{\s*\[native \w/,
                    xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /^(?:input|select|textarea|button)$/i,
                    wt = /^h\d$/i,
                    Tt = /'|\\/g,
                    kt = RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)",
                        "ig"),
                    Ct = function(e, t, n) {
                        var r = "0x" + t - 65536;
                        return r !== r || n ? t : 0 > r ? String.fromCharCode(r +
                            65536) : String.fromCharCode(55296 | r >> 10,
                            56320 | 1023 & r)
                    };
                try {
                    et.apply(J = tt.call(R.childNodes), R.childNodes), J[R.childNodes
                        .length].nodeType
                } catch (Et) {
                    et = {
                        apply: J.length ? function(e, t) {
                            Z.apply(e, tt.call(t))
                        } : function(e, t) {
                            for (var n = e.length, r = 0; e[n++] = t[r++];)
                            ;
                            e.length = n - 1
                        }
                    }
                }
                S = n.isXML = function(e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1
                }, k = n.support = {}, O = n.setDocument = function(e) {
                    var n = e ? e.ownerDocument || e : R,
                        r = n.defaultView;
                    return n !== L && 9 === n.nodeType && n.documentElement ?
                        (L = n, M = n.documentElement, _ = !S(n), r && r.attachEvent &&
                            r !== r.top && r.attachEvent("onbeforeunload",
                                function() {
                                    O()
                                }), k.attributes = o(function(e) {
                                return e.className = "i", !e.getAttribute(
                                    "className")
                            }), k.getElementsByTagName = o(function(e) {
                                return e.appendChild(n.createComment("")), !
                                    e.getElementsByTagName("*").length
                            }), k.getElementsByClassName = o(function(e) {
                                return e.innerHTML =
                                    "<div class='a'></div><div class='a i'></div>",
                                    e.firstChild.className = "i", 2 ===
                                    e.getElementsByClassName("i").length
                            }), k.getById = o(function(e) {
                                return M.appendChild(e).id = P, !n.getElementsByName ||
                                    !n.getElementsByName(P).length
                            }), k.getById ? (E.find.ID = function(e, t) {
                                if (typeof t.getElementById !== V && _) {
                                    var n = t.getElementById(e);
                                    return n && n.parentNode ? [n] : []
                                }
                            }, E.filter.ID = function(e) {
                                var t = e.replace(kt, Ct);
                                return function(e) {
                                    return e.getAttribute("id") ===
                                        t
                                }
                            }) : (delete E.find.ID, E.filter.ID = function(
                                e) {
                                var t = e.replace(kt, Ct);
                                return function(e) {
                                    var n = typeof e.getAttributeNode !==
                                        V && e.getAttributeNode(
                                            "id");
                                    return n && n.value === t
                                }
                            }), E.find.TAG = k.getElementsByTagName ?
                            function(e, n) {
                                return typeof n.getElementsByTagName !== V ?
                                    n.getElementsByTagName(e) : t
                            } : function(e, t) {
                                var n, r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; n = o[i++];) 1 === n.nodeType &&
                                        r.push(n);
                                    return r
                                }
                                return o
                            }, E.find.CLASS = k.getElementsByClassName &&
                            function(e, n) {
                                return typeof n.getElementsByClassName !==
                                    V && _ ? n.getElementsByClassName(e) :
                                    t
                            }, F = [], q = [], (k.qsa = vt.test(n.querySelectorAll)) &&
                            (o(function(e) {
                                e.innerHTML =
                                    "<select><option selected=''></option></select>",
                                    e.querySelectorAll("[selected]")
                                    .length || q.push("\\[" + it +
                                        "*(?:value|" + rt + ")"), e
                                    .querySelectorAll(":checked").length ||
                                    q.push(":checked")
                            }), o(function(e) {
                                var t = n.createElement("input");
                                t.setAttribute("type", "hidden"), e
                                    .appendChild(t).setAttribute(
                                        "t", ""), e.querySelectorAll(
                                        "[t^='']").length && q.push(
                                        "[*^$]=" + it +
                                        "*(?:''|\"\")"), e.querySelectorAll(
                                        ":enabled").length || q.push(
                                        ":enabled", ":disabled"), e
                                    .querySelectorAll("*,:x"), q.push(
                                        ",.*:")
                            })), (k.matchesSelector = vt.test(H = M.webkitMatchesSelector ||
                                M.mozMatchesSelector || M.oMatchesSelector ||
                                M.msMatchesSelector)) && o(function(e) {
                                k.disconnectedMatch = H.call(e, "div"),
                                    H.call(e, "[s!='']:x"), F.push("!=",
                                        ct)
                            }), q = q.length && RegExp(q.join("|")), F = F.length &&
                            RegExp(F.join("|")), I = vt.test(M.contains) ||
                            M.compareDocumentPosition ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement :
                                    e,
                                    r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType ||
                                    !(n.contains ? n.contains(r) : e.compareDocumentPosition &&
                                        16 & e.compareDocumentPosition(
                                            r)))
                            } : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode;)
                                        if (t === e) return !0;
                                return !1
                            }, U = M.compareDocumentPosition ? function(e,
                                t) {
                                if (e === t) return Q = !0, 0;
                                var r = t.compareDocumentPosition && e.compareDocumentPosition &&
                                    e.compareDocumentPosition(t);
                                return r ? 1 & r || !k.sortDetached && t.compareDocumentPosition(
                                        e) === r ? e === n || I(R, e) ? -1 :
                                    t === n || I(R, t) ? 1 : A ? nt.call(A,
                                        e) - nt.call(A, t) : 0 : 4 & r ? -1 :
                                    1 : e.compareDocumentPosition ? -1 : 1
                            } : function(e, t) {
                                var r, i = 0,
                                    o = e.parentNode,
                                    a = t.parentNode,
                                    u = [e],
                                    c = [t];
                                if (e === t) return Q = !0, 0;
                                if (!o || !a) return e === n ? -1 : t === n ?
                                    1 : o ? -1 : a ? 1 : A ? nt.call(A,
                                        e) - nt.call(A, t) : 0;
                                if (o === a) return s(e, t);
                                for (r = e; r = r.parentNode;) u.unshift(r);
                                for (r = t; r = r.parentNode;) c.unshift(r);
                                for (; u[i] === c[i];) i++;
                                return i ? s(u[i], c[i]) : u[i] === R ? -1 :
                                    c[i] === R ? 1 : 0
                            }, n) : L
                }, n.matches = function(e, t) {
                    return n(e, null, null, t)
                }, n.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== L && O(e), t = t.replace(
                        ht, "='$1']"), !(!k.matchesSelector || !_ || F &&
                        F.test(t) || q && q.test(t))) try {
                        var r = H.call(e, t);
                        if (r || k.disconnectedMatch || e.document &&
                            11 !== e.document.nodeType) return r
                    } catch (i) {}
                    return n(t, L, null, [e]).length > 0
                }, n.contains = function(e, t) {
                    return (e.ownerDocument || e) !== L && O(e), I(e, t)
                }, n.attr = function(e, n) {
                    (e.ownerDocument || e) !== L && O(e);
                    var r = E.attrHandle[n.toLowerCase()],
                        i = r && G.call(E.attrHandle, n.toLowerCase()) ? r(
                            e, n, !_) : t;
                    return i === t ? k.attributes || !_ ? e.getAttribute(n) :
                        (i = e.getAttributeNode(n)) && i.specified ? i.value :
                        null : i
                }, n.error = function(e) {
                    throw Error("Syntax error, unrecognized expression: " +
                        e)
                }, n.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        i = 0;
                    if (Q = !k.detectDuplicates, A = !k.sortStable && e.slice(
                        0), e.sort(U), Q) {
                        for (; t = e[i++];) t === e[i] && (r = n.push(i));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return e
                }, j = n.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n +=
                                j(e)
                        } else if (3 === i || 4 === i) return e.nodeValue
                    } else
                        for (; t = e[r]; r++) n += j(t);
                    return n
                }, E = n.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: yt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(kt, Ct), e[3] =
                                (e[4] || e[5] || "").replace(kt, Ct),
                                "~=" === e[2] && (e[3] = " " + e[3] +
                                    " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" ===
                                e[1].slice(0, 3) ? (e[3] || n.error(e[0]),
                                    e[4] = +(e[4] ? e[5] + (e[6] || 1) :
                                        2 * ("even" === e[3] || "odd" ===
                                            e[3])), e[5] = +(e[7] + e[8] ||
                                        "odd" === e[3])) : e[3] && n.error(
                                    e[0]), e
                        },
                        PSEUDO: function(e) {
                            var n, r = !e[5] && e[2];
                            return yt.CHILD.test(e[0]) ? null : (e[3] &&
                                e[4] !== t ? e[2] = e[4] : r && mt.test(
                                    r) && (n = p(r, !0)) && (n = r.indexOf(
                                    ")", r.length - n) - r.length) &&
                                (e[0] = e[0].slice(0, n), e[2] = r.slice(
                                    0, n)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(kt, Ct).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() ===
                                    t
                            }
                        },
                        CLASS: function(e) {
                            var t = W[e + " "];
                            return t || (t = RegExp("(^|" + it + ")" +
                                e + "(" + it + "|$)")) && W(e,
                                function(e) {
                                    return t.test("string" ==
                                        typeof e.className && e
                                        .className || typeof e.getAttribute !==
                                        V && e.getAttribute(
                                            "class") || "")
                                })
                        },
                        ATTR: function(e, t, r) {
                            return function(i) {
                                var o = n.attr(i, e);
                                return null == o ? "!=" === t : t ?
                                    (o += "", "=" === t ? o === r :
                                        "!=" === t ? o !== r : "^=" ===
                                        t ? r && 0 === o.indexOf(r) :
                                        "*=" === t ? r && o.indexOf(
                                            r) > -1 : "$=" === t ?
                                        r && o.slice(-r.length) ===
                                        r : "~=" === t ? (" " + o +
                                            " ").indexOf(r) > -1 :
                                        "|=" === t ? o === r || o.slice(
                                            0, r.length + 1) === r +
                                        "-" : !1) : !0
                            }
                        },
                        CHILD: function(e, t, n, r, i) {
                            var o = "nth" !== e.slice(0, 3),
                                a = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                            } : function(t, n, u) {
                                var c, l, f, p, d, h, m = o !== a ?
                                    "nextSibling" :
                                    "previousSibling",
                                    g = t.parentNode,
                                    y = s && t.nodeName.toLowerCase(),
                                    v = !u && !s;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (f = t; f = f[m];)
                                                if (s ? f.nodeName.toLowerCase() ===
                                                    y : 1 === f.nodeType
                                                ) return !1;
                                            h = m = "only" === e &&
                                                !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild],
                                        a && v) {
                                        for (l = g[P] || (g[P] = {}),
                                            c = l[e] || [], d = c[0] ===
                                            $ && c[1], p = c[0] ===
                                            $ && c[2], f = d && g.childNodes[
                                                d]; f = ++d && f &&
                                            f[m] || (p = d = 0) ||
                                            h.pop();)
                                            if (1 === f.nodeType &&
                                                ++p && f === t) {
                                                l[e] = [$, d, p];
                                                break
                                            }
                                    } else if (v && (c = (t[P] || (
                                            t[P] = {}))[e]) && c[0] ===
                                        $) p = c[1];
                                    else
                                        for (;
                                            (f = ++d && f && f[m] ||
                                                (p = d = 0) || h.pop()
                                            ) && ((s ? f.nodeName.toLowerCase() !==
                                                y : 1 !== f.nodeType
                                            ) || !++p || (v &&
                                                ((f[P] || (f[P] = {}))[
                                                    e] = [$,
                                                    p
                                                ]), f !== t)););
                                    return p -= i, p === r || 0 ===
                                        p % r && p / r >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, t) {
                            var r, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] ||
                                n.error("unsupported pseudo: " + e);
                            return o[P] ? o(t) : o.length > 1 ? (r = [e,
                                    e, "", t
                                ], E.setFilters.hasOwnProperty(e.toLowerCase()) ?
                                i(function(e, n) {
                                    for (var r, i = o(e, t), a =
                                        i.length; a--;) r = nt.call(
                                        e, i[a]), e[r] = !(
                                        n[r] = i[a])
                                }) : function(e) {
                                    return o(e, 0, r)
                                }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(e) {
                            var t = [],
                                n = [],
                                r = N(e.replace(lt, "$1"));
                            return r[P] ? i(function(e, t, n, i) {
                                for (var o, a = r(e, null,
                                    i, []), s = e.length; s--;)
                                    (o = a[s]) && (e[s] = !
                                        (t[s] = o))
                            }) : function(e, i, o) {
                                return t[0] = e, r(t, null, o,
                                    n), !n.pop()
                            }
                        }),
                        has: i(function(e) {
                            return function(t) {
                                return n(e, t).length > 0
                            }
                        }),
                        contains: i(function(e) {
                            return function(t) {
                                return (t.textContent || t.innerText ||
                                    j(t)).indexOf(e) > -1
                            }
                        }),
                        lang: i(function(e) {
                            return gt.test(e || "") || n.error(
                                    "unsupported lang: " + e), e =
                                e.replace(kt, Ct).toLowerCase(),
                                function(t) {
                                    var n;
                                    do
                                        if (n = _ ? t.lang : t.getAttribute(
                                            "xml:lang") || t.getAttribute(
                                            "lang")) return n = n.toLowerCase(),
                                            n === e || 0 === n.indexOf(
                                                e + "-");
                                    while ((t = t.parentNode) && 1 ===
                                        t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                            return e === M
                        },
                        focus: function(e) {
                            return e === L.activeElement && (!L.hasFocus ||
                                L.hasFocus()) && !!(e.type || e.href ||
                                ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return e.disabled === !1
                        },
                        disabled: function(e) {
                            return e.disabled === !0
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked ||
                                "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                                e.selected === !0
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeName > "@" || 3 === e.nodeType ||
                                    4 === e.nodeType) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !E.pseudos.empty(e)
                        },
                        header: function(e) {
                            return wt.test(e.nodeName)
                        },
                        input: function(e) {
                            return bt.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type ||
                                "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() &&
                                "text" === e.type && (null == (t = e.getAttribute(
                                        "type")) || t.toLowerCase() ===
                                    e.type)
                        },
                        first: l(function() {
                            return [0]
                        }),
                        last: l(function(e, t) {
                            return [t - 1]
                        }),
                        eq: l(function(e, t, n) {
                            return [0 > n ? n + t : n]
                        }),
                        even: l(function(e, t) {
                            for (var n = 0; t > n; n += 2) e.push(n);
                            return e
                        }),
                        odd: l(function(e, t) {
                            for (var n = 1; t > n; n += 2) e.push(n);
                            return e
                        }),
                        lt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; --r >=
                                0;) e.push(r);
                            return e
                        }),
                        gt: l(function(e, t, n) {
                            for (var r = 0 > n ? n + t : n; t > ++r;)
                                e.push(r);
                            return e
                        })
                    }
                }, E.pseudos.nth = E.pseudos.eq;
                for (T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[T] = u(T);
                for (T in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[T] = c(T);
                f.prototype = E.filters = E.pseudos, E.setFilters = new f, N =
                    n.compile = function(e, t) {
                        var n, r = [],
                            i = [],
                            o = X[e + " "];
                        if (!o) {
                            for (t || (t = p(e)), n = t.length; n--;) o = v(t[n]),
                                o[P] ? r.push(o) : i.push(o);
                            o = X(e, x(i, r))
                        }
                        return o
                    }, k.sortStable = P.split("").sort(U).join("") === P, k.detectDuplicates =
                    Q, O(), k.sortDetached = o(function(e) {
                        return 1 & e.compareDocumentPosition(L.createElement(
                            "div"))
                    }), o(function(e) {
                        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild
                            .getAttribute("href")
                    }) || a("type|href|height|width", function(e, n, r) {
                        return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ?
                            1 : 2)
                    }), k.attributes && o(function(e) {
                        return e.innerHTML = "<input/>", e.firstChild.setAttribute(
                            "value", ""), "" === e.firstChild.getAttribute(
                            "value")
                    }) || a("value", function(e, n, r) {
                        return r || "input" !== e.nodeName.toLowerCase() ?
                            t : e.defaultValue
                    }), o(function(e) {
                        return null == e.getAttribute("disabled")
                    }) || a(rt, function(e, n, r) {
                        var i;
                        return r ? t : (i = e.getAttributeNode(n)) && i.specified ?
                            i.value : e[n] === !0 ? n.toLowerCase() : null
                    }), ot.find = n, ot.expr = n.selectors, ot.expr[":"] = ot.expr
                    .pseudos, ot.unique = n.uniqueSort, ot.text = n.getText, ot
                    .isXMLDoc = n.isXML, ot.contains = n.contains
            }(e);
        var ht = {};
        ot.Callbacks = function(e) {
            e = "string" == typeof e ? ht[e] || r(e) : ot.extend({}, e);
            var n, i, o, a, s, u, c = [],
                l = !e.once && [],
                f = function(t) {
                    for (n = e.memory && t, i = !0, u = a || 0, a = 0, s =
                        c.length, o = !0; c && s > u; u++)
                        if (c[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    o = !1, c && (l ? l.length && f(l.shift()) : n ? c = [] :
                        p.disable())
                },
                p = {
                    add: function() {
                        if (c) {
                            var t = c.length;
                            ! function r(t) {
                                ot.each(t, function(t, n) {
                                    var i = ot.type(n);
                                    "function" === i ? e.unique &&
                                        p.has(n) || c.push(
                                            n) : n && n.length &&
                                        "string" !== i && r(
                                            n)
                                })
                            }(arguments), o ? s = c.length : n && (
                                a = t, f(n))
                        }
                        return this
                    },
                    remove: function() {
                        return c && ot.each(arguments, function(e, t) {
                            for (var n;
                                (n = ot.inArray(t, c, n)) > -1;
                            ) c.splice(n, 1), o && (s >= n && s--,
                                u >= n && u--)
                        }), this
                    },
                    has: function(e) {
                        return e ? ot.inArray(e, c) > -1 : !(!c || !c.length)
                    },
                    empty: function() {
                        return c = [], s = 0, this
                    },
                    disable: function() {
                        return c = l = n = t, this
                    },
                    disabled: function() {
                        return !c
                    },
                    lock: function() {
                        return l = t, n || p.disable(), this
                    },
                    locked: function() {
                        return !l
                    },
                    fireWith: function(e, t) {
                        return !c || i && !l || (t = t || [], t = [e, t
                            .slice ? t.slice() : t
                        ], o ? l.push(t) : f(t)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return p
        }, ot.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", ot.Callbacks(
                            "once memory"), "resolved"],
                        ["reject", "fail", ot.Callbacks(
                            "once memory"), "rejected"],
                        ["notify", "progress", ot.Callbacks(
                            "memory")]
                    ],
                    n = "pending",
                    r = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return i.done(arguments).fail(
                                arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return ot.Deferred(function(n) {
                                ot.each(t, function(t,
                                    o) {
                                    var a = o[0],
                                        s = ot.isFunction(
                                            e[t]
                                        ) && e[
                                            t];
                                    i[o[1]](
                                        function() {
                                            var
                                                e =
                                                s &&
                                                s
                                                .apply(
                                                    this,
                                                    arguments
                                                );
                                            e
                                                &&
                                                ot
                                                .isFunction(
                                                    e
                                                    .promise
                                                ) ?
                                                e
                                                .promise()
                                                .done(
                                                    n
                                                    .resolve
                                                )
                                                .fail(
                                                    n
                                                    .reject
                                                )
                                                .progress(
                                                    n
                                                    .notify
                                                ) :
                                                n[
                                                    a +
                                                    "With"
                                                ]
                                                (
                                                    this ===
                                                    r ?
                                                    n
                                                    .promise() :
                                                    this,
                                                    s ? [
                                                        e
                                                    ] :
                                                    arguments
                                                )
                                        })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? ot.extend(e, r) :
                                r
                        }
                    },
                    i = {};
                return r.pipe = r.then, ot.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    r[o[1]] = a.add, s && a.add(function() {
                            n = s
                        }, t[1 ^ e][2].disable, t[2][2]
                        .lock), i[o[0]] = function() {
                        return i[o[0] + "With"](this ===
                            i ? r : this, arguments
                        ), this
                    }, i[o[0] + "With"] = a.fireWith
                }), r.promise(i), e && e.call(i, i), i
            },
            when: function(e) {
                var t, n, r, i = 0,
                    o = et.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && ot.isFunction(e.promise) ?
                    a : 0,
                    u = 1 === s ? e : ot.Deferred(),
                    c = function(e, n, r) {
                        return function(i) {
                            n[e] = this, r[e] = arguments.length >
                                1 ? et.call(arguments) : i, r ===
                                t ? u.notifyWith(n, r) : --s ||
                                u.resolveWith(n, r)
                        }
                    };
                if (a > 1)
                    for (t = Array(a), n = Array(a), r = Array(a); a >
                        i; i++) o[i] && ot.isFunction(o[i].promise) ?
                        o[i].promise().done(c(i, r, o)).fail(u.reject)
                        .progress(c(i, n, t)) : --s;
                return s || u.resolveWith(r, o), u.promise()
            }
        }), ot.support = function(t) {
            var n = X.createElement("input"),
                r = X.createDocumentFragment(),
                i = X.createElement("div"),
                o = X.createElement("select"),
                a = o.appendChild(X.createElement("option"));
            return n.type ? (n.type = "checkbox", t.checkOn = "" !== n.value,
                t.optSelected = a.selected, t.reliableMarginRight = !0,
                t.boxSizingReliable = !0, t.pixelPosition = !1, n.checked = !
                0, t.noCloneChecked = n.cloneNode(!0).checked, o.disabled = !
                0, t.optDisabled = !a.disabled, n = X.createElement(
                    "input"), n.value = "t", n.type = "radio", t.radioValue =
                "t" === n.value, n.setAttribute("checked", "t"), n.setAttribute(
                    "name", "t"), r.appendChild(n), t.checkClone = r.cloneNode(!
                    0).cloneNode(!0).lastChild.checked, t.focusinBubbles =
                "onfocusin" in e, i.style.backgroundClip =
                "content-box", i.cloneNode(!0).style.backgroundClip =
                "", t.clearCloneStyle = "content-box" === i.style.backgroundClip,
                ot(function() {
                    var n, r, o =
                        "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
                        a = X.getElementsByTagName("body")[0];
                    a && (n = X.createElement("div"), n.style.cssText =
                        "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                        a.appendChild(n).appendChild(i), i.innerHTML =
                        "", i.style.cssText =
                        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",
                        ot.swap(a, null != a.style.zoom ? {
                            zoom: 1
                        } : {}, function() {
                            t.boxSizing = 4 === i.offsetWidth
                        }), e.getComputedStyle && (t.pixelPosition =
                            "1%" !== (e.getComputedStyle(i,
                                null) || {}).top, t.boxSizingReliable =
                            "4px" === (e.getComputedStyle(i,
                                null) || {
                                width: "4px"
                            }).width, r = i.appendChild(X.createElement(
                                "div")), r.style.cssText = i.style
                            .cssText = o, r.style.marginRight =
                            r.style.width = "0", i.style.width =
                            "1px", t.reliableMarginRight = !
                            parseFloat((e.getComputedStyle(r,
                                null) || {}).marginRight)), a.removeChild(
                            n))
                }), t) : t
        }({});
        var mt, gt, yt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            vt = /([A-Z])/g;
        i.uid = 1, i.accepts = function(e) {
            return e.nodeType ? 1 === e.nodeType || 9 === e.nodeType : !0
        }, i.prototype = {
            key: function(e) {
                if (!i.accepts(e)) return 0;
                var t = {},
                    n = e[this.expando];
                if (!n) {
                    n = i.uid++;
                    try {
                        t[this.expando] = {
                            value: n
                        }, Object.defineProperties(e, t)
                    } catch (r) {
                        t[this.expando] = n, ot.extend(e, t)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(e, t, n) {
                var r, i = this.key(e),
                    o = this.cache[i];
                if ("string" == typeof t) o[t] = n;
                else if (ot.isEmptyObject(o)) ot.extend(this.cache[i],
                    t);
                else
                    for (r in t) o[r] = t[r];
                return o
            },
            get: function(e, n) {
                var r = this.cache[this.key(e)];
                return n === t ? r : r[n]
            },
            access: function(e, n, r) {
                var i;
                return n === t || n && "string" == typeof n && r === t ?
                    (i = this.get(e, n), i !== t ? i : this.get(e, ot.camelCase(
                        n))) : (this.set(e, n, r), r !== t ? r : n)
            },
            remove: function(e, n) {
                var r, i, o, a = this.key(e),
                    s = this.cache[a];
                if (n === t) this.cache[a] = {};
                else {
                    ot.isArray(n) ? i = n.concat(n.map(ot.camelCase)) :
                        (o = ot.camelCase(n), n in s ? i = [n, o] : (i =
                            o, i = i in s ? [i] : i.match(st) || []
                        )), r = i.length;
                    for (; r--;) delete s[i[r]]
                }
            },
            hasData: function(e) {
                return !ot.isEmptyObject(this.cache[e[this.expando]] || {})
            },
            discard: function(e) {
                e[this.expando] && delete this.cache[e[this.expando]]
            }
        }, mt = new i, gt = new i, ot.extend({
            acceptData: i.accepts,
            hasData: function(e) {
                return mt.hasData(e) || gt.hasData(e)
            },
            data: function(e, t, n) {
                return mt.access(e, t, n)
            },
            removeData: function(e, t) {
                mt.remove(e, t)
            },
            _data: function(e, t, n) {
                return gt.access(e, t, n)
            },
            _removeData: function(e, t) {
                gt.remove(e, t)
            }
        }), ot.fn.extend({
            data: function(e, n) {
                var r, i, a = this[0],
                    s = 0,
                    u = null;
                if (e === t) {
                    if (this.length && (u = mt.get(a), 1 === a.nodeType &&
                        !gt.get(a, "hasDataAttrs"))) {
                        for (r = a.attributes; r.length > s; s++) i =
                            r[s].name, 0 === i.indexOf("data-") &&
                            (i = ot.camelCase(i.slice(5)), o(a, i,
                                u[i]));
                        gt.set(a, "hasDataAttrs", !0)
                    }
                    return u
                }
                return "object" == typeof e ? this.each(function() {
                    mt.set(this, e)
                }) : ot.access(this, function(n) {
                    var r, i = ot.camelCase(e);
                    if (a && n === t) {
                        if (r = mt.get(a, e), r !== t)
                            return r;
                        if (r = mt.get(a, i), r !== t)
                            return r;
                        if (r = o(a, i, t), r !== t) return
                            r
                    } else this.each(function() {
                        var r = mt.get(this, i);
                        mt.set(this, i, n), -1 !==
                            e.indexOf("-") && r !==
                            t && mt.set(this, e, n)
                    })
                }, null, n, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    mt.remove(this, e)
                })
            }
        }), ot.extend({
            queue: function(e, n, r) {
                var i;
                return e ? (n = (n || "fx") + "queue", i = gt.get(e,
                        n), r && (!i || ot.isArray(r) ? i = gt.access(
                        e, n, ot.makeArray(r)) : i.push(r)), i || []) :
                    t
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ot.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = ot._queueHooks(e, t),
                    a = function() {
                        ot.dequeue(e, t)
                    };
                "inprogress" === i && (i = n.shift(), r--), i && (
                        "fx" === t && n.unshift("inprogress"),
                        delete o.stop, i.call(e, a, o)), !r && o &&
                    o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return gt.get(e, n) || gt.access(e, n, {
                    empty: ot.Callbacks("once memory").add(
                        function() {
                            gt.remove(e, [t + "queue",
                                n
                            ])
                        })
                })
            }
        }), ot.fn.extend({
            queue: function(e, n) {
                var r = 2;
                return "string" != typeof e && (n = e, e = "fx", r--),
                    r > arguments.length ? ot.queue(this[0], e) : n ===
                    t ? this : this.each(function() {
                        var t = ot.queue(this, e, n);
                        ot._queueHooks(this, e), "fx" === e &&
                            "inprogress" !== t[0] && ot.dequeue(
                                this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ot.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = ot.fx ? ot.fx.speeds[e] || e : e, t = t ||
                    "fx", this.queue(t, function(t, n) {
                        var r = setTimeout(t, e);
                        n.stop = function() {
                            clearTimeout(r)
                        }
                    })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var r, i = 1,
                    o = ot.Deferred(),
                    a = this,
                    s = this.length,
                    u = function() {
                        --i || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e ||
                    "fx"; s--;) r = gt.get(a[s], e + "queueHooks"),
                    r && r.empty && (i++, r.empty.add(u));
                return u(), o.promise(n)
            }
        });
        var xt, bt, wt = /[\t\r\n\f]/g,
            Tt = /\r/g,
            kt = /^(?:input|select|textarea|button)$/i;
        ot.fn.extend({
            attr: function(e, t) {
                return ot.access(this, ot.attr, e, t, arguments.length >
                    1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ot.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return ot.access(this, ot.prop, e, t, arguments.length >
                    1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[ot.propFix[e] || e]
                })
            },
            addClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = "string" == typeof e && e;
                if (ot.isFunction(e)) return this.each(function(t) {
                    ot(this).addClass(e.call(this, t,
                        this.className))
                });
                if (u)
                    for (t = (e || "").match(st) || []; s > a; a++)
                        if (n = this[a], r = 1 === n.nodeType && (n
                            .className ? (" " + n.className +
                                " ").replace(wt, " ") : " ")) {
                            for (o = 0; i = t[o++];) 0 > r.indexOf(
                                " " + i + " ") && (r += i + " ");
                            n.className = ot.trim(r)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, a = 0,
                    s = this.length,
                    u = 0 === arguments.length || "string" ==
                    typeof e && e;
                if (ot.isFunction(e)) return this.each(function(t) {
                    ot(this).removeClass(e.call(this, t,
                        this.className))
                });
                if (u)
                    for (t = (e || "").match(st) || []; s > a; a++)
                        if (n = this[a], r = 1 === n.nodeType && (n
                            .className ? (" " + n.className +
                                " ").replace(wt, " ") : "")) {
                            for (o = 0; i = t[o++];)
                                for (; r.indexOf(" " + i + " ") >=
                                    0;) r = r.replace(" " + i + " ",
                                    " ");
                            n.className = e ? ot.trim(r) : ""
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ?
                    this.addClass(e) : this.removeClass(e) : ot.isFunction(
                        e) ? this.each(function(n) {
                        ot(this).toggleClass(e.call(this, n,
                            this.className, t), t)
                    }) : this.each(function() {
                        if ("string" === n)
                            for (var t, r = 0, i = ot(this), o =
                                e.match(st) || []; t = o[r++];)
                                i.hasClass(t) ? i.removeClass(t) :
                                i.addClass(t);
                        else(n === W || "boolean" === n) && (
                            this.className && gt.set(this,
                                "__className__", this.className
                            ), this.className = this.className ||
                            e === !1 ? "" : gt.get(this,
                                "__className__") || "")
                    })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, r = this.length; r >
                    n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className +
                        " ").replace(wt, " ").indexOf(t) >= 0)
                        return !0;
                return !1
            },
            val: function(e) {
                var n, r, i, o = this[0];
                return arguments.length ? (i = ot.isFunction(e),
                        this.each(function(r) {
                            var o;
                            1 === this.nodeType && (o = i ? e.call(
                                    this, r, ot(this).val()
                                ) : e, null == o ? o = "" :
                                "number" == typeof o ? o +=
                                "" : ot.isArray(o) && (o =
                                    ot.map(o, function(e) {
                                        return null ==
                                            e ? "" : e +
                                            ""
                                    })), n = ot.valHooks[
                                    this.type] || ot.valHooks[
                                    this.nodeName.toLowerCase()
                                ], n && "set" in n && n.set(
                                    this, o, "value") !== t ||
                                (this.value = o))
                        })) : o ? (n = ot.valHooks[o.type] || ot.valHooks[
                            o.nodeName.toLowerCase()], n && "get" in
                        n && (r = n.get(o, "value")) !== t ? r : (r =
                            o.value, "string" == typeof r ? r.replace(
                                Tt, "") : null == r ? "" : r)) :
                    void 0
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex,
                                o = "select-one" === e.type || 0 >
                                i, a = o ? null : [], s = o ? i + 1 :
                                r.length, u = 0 > i ? s : o ? i : 0; s >
                            u; u++)
                            if (n = r[u], !(!n.selected && u !== i ||
                                (ot.support.optDisabled ? n.disabled :
                                    null !== n.getAttribute(
                                        "disabled")) || n.parentNode
                                .disabled && ot.nodeName(n.parentNode,
                                    "optgroup"))) {
                                if (t = ot(n).val(), o) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = ot.makeArray(
                            t), a = i.length; a--;) r = i[a], (r.selected =
                                ot.inArray(ot(r).val(), o) >= 0) &&
                            (n = !0);
                        return n || (e.selectedIndex = -1), o
                    }
                }
            },
            attr: function(e, n, r) {
                var i, o, a = e.nodeType;
                return e && 3 !== a && 8 !== a && 2 !== a ? typeof e
                    .getAttribute === W ? ot.prop(e, n, r) : (1 ===
                        a && ot.isXMLDoc(e) || (n = n.toLowerCase(),
                            i = ot.attrHooks[n] || (ot.expr.match.bool
                                .test(n) ? bt : xt)), r === t ? i &&
                        "get" in i && null !== (o = i.get(e, n)) ?
                        o : (o = ot.find.attr(e, n), null == o ? t :
                            o) : null !== r ? i && "set" in i && (o =
                            i.set(e, r, n)) !== t ? o : (e.setAttribute(
                            n, r + ""), r) : (ot.removeAttr(e, n),
                            t)) : void 0
            },
            removeAttr: function(e, t) {
                var n, r, i = 0,
                    o = t && t.match(st);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++];) r = ot.propFix[n] || n, ot.expr
                        .match.bool.test(n) && (e[r] = !1), e.removeAttribute(
                            n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ot.support.radioValue && "radio" === t &&
                            ot.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n &&
                                (e.value = n), t
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, n, r) {
                var i, o, a, s = e.nodeType;
                return e && 3 !== s && 8 !== s && 2 !== s ? (a = 1 !==
                    s || !ot.isXMLDoc(e), a && (n = ot.propFix[
                        n] || n, o = ot.propHooks[n]), r !== t ?
                    o && "set" in o && (i = o.set(e, r, n)) !==
                    t ? i : e[n] = r : o && "get" in o && null !==
                    (i = o.get(e, n)) ? i : e[n]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        return e.hasAttribute("tabindex") || kt.test(
                                e.nodeName) || e.href ? e.tabIndex :
                            -1
                    }
                }
            }
        }), bt = {
            set: function(e, t, n) {
                return t === !1 ? ot.removeAttr(e, n) : e.setAttribute(
                    n, n), n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(e, n) {
            var r = ot.expr.attrHandle[n] || ot.find.attr;
            ot.expr.attrHandle[n] = function(e, n, i) {
                var o = ot.expr.attrHandle[n],
                    a = i ? t : (ot.expr.attrHandle[n] = t) != r(e,
                        n, i) ? n.toLowerCase() : null;
                return ot.expr.attrHandle[n] = o, a
            }
        }), ot.support.optSelected || (ot.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing",
            "cellPadding", "rowSpan", "colSpan", "useMap",
            "frameBorder", "contentEditable"
        ], function() {
            ot.propFix[this.toLowerCase()] = this
        }), ot.each(["radio", "checkbox"], function() {
            ot.valHooks[this] = {
                set: function(e, n) {
                    return ot.isArray(n) ? e.checked = ot.inArray(
                        ot(e).val(), n) >= 0 : t
                }
            }, ot.support.checkOn || (ot.valHooks[this].get =
                function(e) {
                    return null === e.getAttribute("value") ? "on" :
                        e.value
                })
        });
        var Ct = /^key/,
            Et = /^(?:mouse|contextmenu)|click/,
            jt = /^(?:focusinfocus|focusoutblur)$/,
            St = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function(e, n, r, i, o) {
                var a, s, u, c, l, f, p, d, h, m, g, y = gt.get(e);
                if (y) {
                    for (r.handler && (a = r, r = a.handler, o = a.selector),
                        r.guid || (r.guid = ot.guid++), (c = y.events) ||
                        (c = y.events = {}), (s = y.handle) || (s = y.handle =
                            function(e) {
                                return typeof ot === W || e && ot.event
                                    .triggered === e.type ? t : ot.event
                                    .dispatch.apply(s.elem, arguments)
                            }, s.elem = e), n = (n || "").match(st) || [
                            ""
                        ], l = n.length; l--;) u = St.exec(n[l]) || [],
                        h = g = u[1], m = (u[2] || "").split(".").sort(),
                        h && (p = ot.event.special[h] || {}, h = (o ? p
                                .delegateType : p.bindType) || h, p =
                            ot.event.special[h] || {}, f = ot.extend({
                                type: h,
                                origType: g,
                                data: i,
                                handler: r,
                                guid: r.guid,
                                selector: o,
                                needsContext: o && ot.expr.match.needsContext
                                    .test(o),
                                namespace: m.join(".")
                            }, a), (d = c[h]) || (d = c[h] = [], d.delegateCount =
                                0, p.setup && p.setup.call(e, i, m, s) !==
                                !1 || e.addEventListener && e.addEventListener(
                                    h, s, !1)), p.add && (p.add.call(e,
                                f), f.handler.guid || (f.handler.guid =
                                r.guid)), o ? d.splice(d.delegateCount++,
                                0, f) : d.push(f), ot.event.global[h] = !
                            0);
                    e = null
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, m, g = gt.hasData(e) &&
                    gt.get(e);
                if (g && (u = g.events)) {
                    for (t = (t || "").match(st) || [""], c = t.length; c--;)
                        if (s = St.exec(t[c]) || [], d = m = s[1], h =
                            (s[2] || "").split(".").sort(), d) {
                            for (f = ot.event.special[d] || {}, d = (r ?
                                    f.delegateType : f.bindType) || d,
                                p = u[d] || [], s = s[2] && RegExp(
                                    "(^|\\.)" + h.join("\\.(?:.*\\.|)") +
                                    "(\\.|$)"), a = o = p.length; o--;)
                                l = p[o], !i && m !== l.origType || n &&
                                n.guid !== l.guid || s && !s.test(l.namespace) ||
                                r && r !== l.selector && ("**" !== r ||
                                    !l.selector) || (p.splice(o, 1), l.selector &&
                                    p.delegateCount--, f.remove && f.remove
                                    .call(e, l));
                            a && !p.length && (f.teardown && f.teardown
                                .call(e, h, g.handle) !== !1 || ot.removeEvent(
                                    e, d, g.handle), delete u[d])
                        } else
                            for (d in u) ot.event.remove(e, d + t[c], n,
                                r, !0);
                    ot.isEmptyObject(u) && (delete g.handle, gt.remove(
                        e, "events"))
                }
            },
            trigger: function(n, r, i, o) {
                var a, s, u, c, l, f, p, d = [i || X],
                    h = rt.call(n, "type") ? n.type : n,
                    m = rt.call(n, "namespace") ? n.namespace.split(".") : [];
                if (s = u = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType &&
                    !jt.test(h + ot.event.triggered) && (h.indexOf(".") >=
                        0 && (m = h.split("."), h = m.shift(), m.sort()),
                        l = 0 > h.indexOf(":") && "on" + h, n = n[ot.expando] ?
                        n : new ot.Event(h, "object" == typeof n && n),
                        n.isTrigger = o ? 2 : 3, n.namespace = m.join(
                            "."), n.namespace_re = n.namespace ? RegExp(
                            "(^|\\.)" + m.join("\\.(?:.*\\.|)") +
                            "(\\.|$)") : null, n.result = t, n.target ||
                        (n.target = i), r = null == r ? [n] : ot.makeArray(
                            r, [n]), p = ot.event.special[h] || {}, o ||
                        !p.trigger || p.trigger.apply(i, r) !== !1)) {
                    if (!o && !p.noBubble && !ot.isWindow(i)) {
                        for (c = p.delegateType || h, jt.test(c + h) ||
                            (s = s.parentNode); s; s = s.parentNode) d.push(
                            s), u = s;
                        u === (i.ownerDocument || X) && d.push(u.defaultView ||
                            u.parentWindow || e)
                    }
                    for (a = 0;
                        (s = d[a++]) && !n.isPropagationStopped();) n.type =
                        a > 1 ? c : p.bindType || h, f = (gt.get(s,
                            "events") || {})[n.type] && gt.get(s,
                            "handle"), f && f.apply(s, r), f = l && s[l],
                        f && ot.acceptData(s) && f.apply && f.apply(s,
                            r) === !1 && n.preventDefault();
                    return n.type = h, o || n.isDefaultPrevented() || p
                        ._default && p._default.apply(d.pop(), r) !== !
                        1 || !ot.acceptData(i) || l && ot.isFunction(i[
                            h]) && !ot.isWindow(i) && (u = i[l], u && (
                            i[l] = null), ot.event.triggered = h, i[
                            h](), ot.event.triggered = t, u && (i[l] =
                            u)), n.result
                }
            },
            dispatch: function(e) {
                e = ot.event.fix(e);
                var n, r, i, o, a, s = [],
                    u = et.call(arguments),
                    c = (gt.get(this, "events") || {})[e.type] || [],
                    l = ot.event.special[e.type] || {};
                if (u[0] = e, e.delegateTarget = this, !l.preDispatch ||
                    l.preDispatch.call(this, e) !== !1) {
                    for (s = ot.event.handlers.call(this, e, c), n = 0;
                        (o = s[n++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, r = 0;
                            (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();
                        )(!e.namespace_re || e.namespace_re.test(a.namespace)) &&
                            (e.handleObj = a, e.data = a.data, i = ((ot
                                    .event.special[a.origType] || {}
                                ).handle || a.handler).apply(o.elem, u),
                                i !== t && (e.result = i) === !1 && (e.preventDefault(),
                                    e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this,
                        e), e.result
                }
            },
            handlers: function(e, n) {
                var r, i, o, a, s = [],
                    u = n.delegateCount,
                    c = e.target;
                if (u && c.nodeType && (!e.button || "click" !== e.type))
                    for (; c !== this; c = c.parentNode || this)
                        if (c.disabled !== !0 || "click" !== e.type) {
                            for (i = [], r = 0; u > r; r++) a = n[r], o =
                                a.selector + " ", i[o] === t && (i[o] =
                                    a.needsContext ? ot(o, this).index(
                                        c) >= 0 : ot.find(o, this, null, [
                                        c
                                    ]).length), i[o] && i.push(a);
                            i.length && s.push({
                                elem: c,
                                handlers: i
                            })
                        }
                return n.length > u && s.push({
                    elem: this,
                    handlers: n.slice(u)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
                .split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ?
                        t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement"
                    .split(" "),
                filter: function(e, n) {
                    var r, i, o, a = n.button;
                    return null == e.pageX && null != n.clientX && (r =
                        e.target.ownerDocument || X, i = r.documentElement,
                        o = r.body, e.pageX = n.clientX + (i && i.scrollLeft ||
                            o && o.scrollLeft || 0) - (i && i.clientLeft ||
                            o && o.clientLeft || 0), e.pageY = n.clientY +
                        (i && i.scrollTop || o && o.scrollTop || 0) -
                        (i && i.clientTop || o && o.clientTop || 0)
                    ), e.which || a === t || (e.which = 1 & a ? 1 :
                        2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[ot.expando]) return e;
                var t, n, r, i = e.type,
                    o = e,
                    a = this.fixHooks[i];
                for (a || (this.fixHooks[i] = a = Et.test(i) ? this.mouseHooks :
                        Ct.test(i) ? this.keyHooks : {}), r = a.props ?
                    this.props.concat(a.props) : this.props, e = new ot
                    .Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
                return e.target || (e.target = X), 3 === e.target.nodeType &&
                    (e.target = e.target.parentNode), a.filter ? a.filter(
                        e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== u() && this.focus ? (this.focus(), !
                            1) : t
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === u() && this.blur ? (this.blur(), !
                            1) : t
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click &&
                            ot.nodeName(this, "input") ? (this.click(), !
                                1) : t
                    },
                    _default: function(e) {
                        return ot.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== t && (e.originalEvent.returnValue =
                            e.result)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = ot.extend(new ot.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? ot.event.trigger(i, null, t) : ot.event.dispatch.call(
                    t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ot.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }, ot.Event = function(e, n) {
            return this instanceof ot.Event ? (e && e.type ? (this.originalEvent =
                        e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ||
                        e.getPreventDefault && e.getPreventDefault() ? a :
                        s) : this.type = e, n && ot.extend(this, n), this.timeStamp =
                    e && e.timeStamp || ot.now(), this[ot.expando] = !0, t) :
                new ot.Event(e, n)
        }, ot.Event.prototype = {
            isDefaultPrevented: s,
            isPropagationStopped: s,
            isImmediatePropagationStopped: s,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = a, e && e.preventDefault && e
                    .preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = a, e && e.stopPropagation &&
                    e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = a, this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            ot.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (!i || i !== r && !ot.contains(r, i)) &&
                        (e.type = o.origType, n = o.handler.apply(
                            this, arguments), e.type = t), n
                }
            }
        }), ot.support.focusinBubbles || ot.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    ot.event.simulate(t, e.target, ot.event.fix(e), !0)
                };
            ot.event.special[t] = {
                setup: function() {
                    0 === n++ && X.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && X.removeEventListener(e, r, !0)
                }
            }
        }), ot.fn.extend({
            on: function(e, n, r, i, o) {
                var a, u;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], o);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) :
                    null == i && ("string" == typeof n ? (i = r, r =
                        t) : (i = r, r = n, n = t)), i === !1) i =
                    s;
                else if (!i) return this;
                return 1 === o && (a = i, i = function(e) {
                        return ot().off(e), a.apply(this,
                            arguments)
                    }, i.guid = a.guid || (a.guid = ot.guid++)),
                    this.each(function() {
                        ot.event.add(this, e, i, r, n)
                    })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i =
                    e.handleObj, ot(e.delegateTarget).off(i.namespace ?
                        i.origType + "." + i.namespace : i.origType,
                        i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, n, e[o]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r =
                    n, n = t), r === !1 && (r = s), this.each(
                    function() {
                        ot.event.remove(this, e, r, n)
                    })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ot.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, n) {
                var r = this[0];
                return r ? ot.event.trigger(e, n, r, !0) : t
            }
        });
        var Nt = /^.[^:#\[\.,]*$/,
            Dt = /^(?:parents|prev(?:Until|All))/,
            At = ot.expr.match.needsContext,
            Ot = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ot.fn.extend({
            find: function(e) {
                var t, n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e) return this.pushStack(ot(
                    e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (ot.contains(r[t], this))
                            return !0
                }));
                for (t = 0; i > t; t++) ot.find(e, r[t], n);
                return n = this.pushStack(i > 1 ? ot.unique(n) : n),
                    n.selector = this.selector ? this.selector +
                    " " + e : e, n
            },
            has: function(e) {
                var t = ot(e, this),
                    n = t.length;
                return this.filter(function() {
                    for (var e = 0; n > e; e++)
                        if (ot.contains(this, t[e])) return
                            !0
                })
            },
            not: function(e) {
                return this.pushStack(l(this, e || [], !0))
            },
            filter: function(e) {
                return this.pushStack(l(this, e || [], !1))
            },
            is: function(e) {
                return !!l(this, "string" == typeof e && At.test(e) ?
                    ot(e) : e || [], !1).length
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], a = At.test(
                    e) || "string" != typeof e ? ot(e, t ||
                    this.context) : 0; i > r; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (11 > n.nodeType && (a ? a.index(n) > -1 :
                            1 === n.nodeType && ot.find.matchesSelector(
                                n, e))) {
                            n = o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ot.unique(o) :
                    o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? tt.call(ot(e),
                        this[0]) : tt.call(this, e.jquery ? e[0] :
                        e) : this[0] && this[0].parentNode ? this.first()
                    .prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? ot(e, t) : ot.makeArray(
                        e && e.nodeType ? [e] : e),
                    r = ot.merge(this.get(), n);
                return this.pushStack(ot.unique(r))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject
                    .filter(e))
            }
        }), ot.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ot.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ot.dir(e, "parentNode", n)
            },
            next: function(e) {
                return c(e, "nextSibling")
            },
            prev: function(e) {
                return c(e, "previousSibling")
            },
            nextAll: function(e) {
                return ot.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ot.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ot.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ot.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ot.sibling((e.parentNode || {}).firstChild,
                    e)
            },
            children: function(e) {
                return ot.sibling(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || ot.merge([], e.childNodes)
            }
        }, function(e, t) {
            ot.fn[e] = function(n, r) {
                var i = ot.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r &&
                    "string" == typeof r && (i = ot.filter(r, i)),
                    this.length > 1 && (Ot[e] || ot.unique(i), Dt.test(
                        e) && i.reverse()), this.pushStack(i)
            }
        }), ot.extend({
            filter: function(e, t, n) {
                var r = t[0];
                return n && (e = ":not(" + e + ")"), 1 === t.length &&
                    1 === r.nodeType ? ot.find.matchesSelector(r, e) ? [
                        r
                    ] : [] : ot.find.matches(e, ot.grep(t, function(
                        e) {
                        return 1 === e.nodeType
                    }))
            },
            dir: function(e, n, r) {
                for (var i = [], o = r !== t;
                    (e = e[n]) && 9 !== e.nodeType;)
                    if (1 === e.nodeType) {
                        if (o && ot(e).is(r)) break;
                        i.push(e)
                    }
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType &&
                    e !== t && n.push(e);
                return n
            }
        });
        var Lt =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Mt = /<([\w:]+)/,
            _t = /<|&#?\w+;/,
            qt = /<(?:script|style|link)/i,
            Ft = /^(?:checkbox|radio)$/i,
            Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^$|\/(?:java|ecma)script/i,
            Pt = /^true\/(.*)/,
            Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            $t = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        $t.optgroup = $t.option, $t.tbody = $t.tfoot = $t.colgroup = $t.caption =
            $t.thead, $t.th = $t.td, ot.fn.extend({
                text: function(e) {
                    return ot.access(this, function(e) {
                        return e === t ? ot.text(this) : this.empty()
                            .append((this[0] && this[0].ownerDocument ||
                                X).createTextNode(e))
                    }, null, e, arguments.length)
                },
                append: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType ||
                            9 === this.nodeType) {
                            var t = f(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return this.domManip(arguments, function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType ||
                            9 === this.nodeType) {
                            var t = f(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(
                            e, this)
                    })
                },
                after: function() {
                    return this.domManip(arguments, function(e) {
                        this.parentNode && this.parentNode.insertBefore(
                            e, this.nextSibling)
                    })
                },
                remove: function(e, t) {
                    for (var n, r = e ? ot.filter(e, this) : this, i =
                        0; null != (n = r[i]); i++) t || 1 !== n.nodeType ||
                        ot.cleanData(g(n)), n.parentNode && (t && ot.contains(
                                n.ownerDocument, n) && h(g(n, "script")),
                            n.parentNode.removeChild(n));
                    return this
                },
                empty: function() {
                    for (var e, t = 0; null != (e = this[t]); t++) 1 ===
                        e.nodeType && (ot.cleanData(g(e, !1)), e.textContent =
                            "");
                    return this
                },
                clone: function(e, t) {
                    return e = null == e ? !1 : e, t = null == t ? e :
                        t, this.map(function() {
                            return ot.clone(this, e, t)
                        })
                },
                html: function(e) {
                    return ot.access(this, function(e) {
                        var n = this[0] || {},
                            r = 0,
                            i = this.length;
                        if (e === t && 1 === n.nodeType) return
                            n.innerHTML;
                        if ("string" == typeof e && !qt.test(e) &&
                            !$t[(Mt.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = e.replace(Lt, "<$1></$2>");
                            try {
                                for (; i > r; r++) n = this[r] || {},
                                    1 === n.nodeType && (ot.cleanData(
                                            g(n, !1)), n.innerHTML =
                                        e);
                                n = 0
                            } catch (o) {}
                        }
                        n && this.empty().append(e)
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var e = ot.map(this, function(e) {
                            return [e.nextSibling, e.parentNode]
                        }),
                        t = 0;
                    return this.domManip(arguments, function(n) {
                        var r = e[t++],
                            i = e[t++];
                        i && (r && r.parentNode !== i && (r =
                                this.nextSibling), ot(this)
                            .remove(), i.insertBefore(n, r)
                        )
                    }, !0), t ? this : this.remove()
                },
                detach: function(e) {
                    return this.remove(e, !0)
                },
                domManip: function(e, t, n) {
                    e = K.apply([], e);
                    var r, i, o, a, s, u, c = 0,
                        l = this.length,
                        f = this,
                        h = l - 1,
                        m = e[0],
                        y = ot.isFunction(m);
                    if (y || !(1 >= l || "string" != typeof m || ot.support
                        .checkClone) && Ht.test(m)) return this.each(
                        function(r) {
                            var i = f.eq(r);
                            y && (e[0] = m.call(this, r, i.html())),
                                i.domManip(e, t, n)
                        });
                    if (l && (r = ot.buildFragment(e, this[0].ownerDocument, !
                            1, !n && this), i = r.firstChild, 1 ===
                        r.childNodes.length && (r = i), i)) {
                        for (o = ot.map(g(r, "script"), p), a = o.length; l >
                            c; c++) s = r, c !== h && (s = ot.clone(s, !
                            0, !0), a && ot.merge(o, g(s,
                            "script"))), t.call(this[c], s, c);
                        if (a)
                            for (u = o[o.length - 1].ownerDocument, ot.map(
                                o, d), c = 0; a > c; c++) s = o[c], It.test(
                                    s.type || "") && !gt.access(s,
                                    "globalEval") && ot.contains(u, s) &&
                                (s.src ? ot._evalUrl(s.src) : ot.globalEval(
                                    s.textContent.replace(Rt, "")))
                    }
                    return this
                }
            }), ot.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, t) {
                ot.fn[e] = function(e) {
                    for (var n, r = [], i = ot(e), o = i.length - 1, a =
                        0; o >= a; a++) n = a === o ? this : this.clone(!
                        0), ot(i[a])[t](n), Z.apply(r, n.get());
                    return this.pushStack(r)
                }
            }), ot.extend({
                clone: function(e, t, n) {
                    var r, i, o, a, s = e.cloneNode(!0),
                        u = ot.contains(e.ownerDocument, e);
                    if (!(ot.support.noCloneChecked || 1 !== e.nodeType &&
                        11 !== e.nodeType || ot.isXMLDoc(e)))
                        for (a = g(s), o = g(e), r = 0, i = o.length; i >
                            r; r++) y(o[r], a[r]);
                    if (t)
                        if (n)
                            for (o = o || g(e), a = a || g(s), r = 0, i =
                                o.length; i > r; r++) m(o[r], a[r]);
                        else m(e, s);
                    return a = g(s, "script"), a.length > 0 && h(a, !u &&
                        g(e, "script")), s
                },
                buildFragment: function(e, t, n, r) {
                    for (var i, o, a, s, u, c, l = 0, f = e.length, p =
                        t.createDocumentFragment(), d = []; f > l; l++)
                        if (i = e[l], i || 0 === i)
                            if ("object" === ot.type(i)) ot.merge(d, i.nodeType ? [
                                i
                            ] : i);
                            else if (_t.test(i)) {
                        for (o = o || p.appendChild(t.createElement(
                                "div")), a = (Mt.exec(i) || ["", ""])[1]
                            .toLowerCase(), s = $t[a] || $t._default, o
                            .innerHTML = s[1] + i.replace(Lt,
                                "<$1></$2>") + s[2], c = s[0]; c--;) o =
                            o.lastChild;
                        ot.merge(d, o.childNodes), o = p.firstChild, o.textContent =
                            ""
                    } else d.push(t.createTextNode(i));
                    for (p.textContent = "", l = 0; i = d[l++];)
                        if ((!r || -1 === ot.inArray(i, r)) && (u = ot.contains(
                            i.ownerDocument, i), o = g(p.appendChild(
                            i), "script"), u && h(o), n))
                            for (c = 0; i = o[c++];) It.test(i.type ||
                                "") && n.push(i);
                    return p
                },
                cleanData: function(e) {
                    for (var n, r, o, a, s, u, c = ot.event.special, l =
                            0;
                        (r = e[l]) !== t; l++) {
                        if (i.accepts(r) && (s = r[gt.expando], s && (n =
                            gt.cache[s]))) {
                            if (o = Object.keys(n.events || {}), o.length)
                                for (u = 0;
                                    (a = o[u]) !== t; u++) c[a] ? ot.event
                                    .remove(r, a) : ot.removeEvent(r, a,
                                        n.handle);
                            gt.cache[s] && delete gt.cache[s]
                        }
                        delete mt.cache[r[mt.expando]]
                    }
                },
                _evalUrl: function(e) {
                    return ot.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    })
                }
            }), ot.fn.extend({
                wrapAll: function(e) {
                    var t;
                    return ot.isFunction(e) ? this.each(function(t) {
                        ot(this).wrapAll(e.call(this, t))
                    }) : (this[0] && (t = ot(e, this[0].ownerDocument)
                        .eq(0).clone(!0), this[0].parentNode &&
                        t.insertBefore(this[0]), t.map(function() {
                            for (var e = this; e.firstElementChild;)
                                e = e.firstElementChild;
                            return e
                        }).append(this)), this)
                },
                wrapInner: function(e) {
                    return ot.isFunction(e) ? this.each(function(t) {
                        ot(this).wrapInner(e.call(this, t))
                    }) : this.each(function() {
                        var t = ot(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                    })
                },
                wrap: function(e) {
                    var t = ot.isFunction(e);
                    return this.each(function(n) {
                        ot(this).wrapAll(t ? e.call(this, n) :
                            e)
                    })
                },
                unwrap: function() {
                    return this.parent().each(function() {
                        ot.nodeName(this, "body") || ot(this).replaceWith(
                            this.childNodes)
                    }).end()
                }
            });
        var Bt, Wt, zt = /^(none|table(?!-c[ea]).+)/,
            Xt = /^margin/,
            Qt = RegExp("^(" + at + ")(.*)$", "i"),
            Ut = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
            Vt = RegExp("^([+-])=(" + at + ")", "i"),
            Yt = {
                BODY: "block"
            },
            Gt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Jt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Kt = ["Top", "Right", "Bottom", "Left"],
            Zt = ["Webkit", "O", "Moz", "ms"];
        ot.fn.extend({
            css: function(e, n) {
                return ot.access(this, function(e, n, r) {
                    var i, o, a = {},
                        s = 0;
                    if (ot.isArray(n)) {
                        for (i = b(e), o = n.length; o > s; s++)
                            a[n[s]] = ot.css(e, n[s], !1, i);
                        return a
                    }
                    return r !== t ? ot.style(e, n, r) : ot
                        .css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return w(this, !0)
            },
            hide: function() {
                return w(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() :
                    this.hide() : this.each(function() {
                        x(this) ? ot(this).show() : ot(this).hide()
                    })
            }
        }), ot.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = Bt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(e, n, r, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, u = ot.camelCase(n),
                        c = e.style;
                    return n = ot.cssProps[u] || (ot.cssProps[u] =
                        v(c, u)), s = ot.cssHooks[n] || ot.cssHooks[
                        u], r === t ? s && "get" in s && (o = s
                        .get(e, !1, i)) !== t ? o : c[n] : (a =
                        typeof r, "string" === a && (o = Vt.exec(
                            r)) && (r = (o[1] + 1) * o[2] +
                            parseFloat(ot.css(e, n)), a =
                            "number"), null == r || "number" ===
                        a && isNaN(r) || ("number" !== a || ot.cssNumber[
                                u] || (r += "px"), ot.support.clearCloneStyle ||
                            "" !== r || 0 !== n.indexOf(
                                "background") || (c[n] =
                                "inherit"), s && "set" in s &&
                            (r = s.set(e, r, i)) === t || (c[n] =
                                r)), t)
                }
            },
            css: function(e, n, r, i) {
                var o, a, s, u = ot.camelCase(n);
                return n = ot.cssProps[u] || (ot.cssProps[u] = v(e.style,
                        u)), s = ot.cssHooks[n] || ot.cssHooks[u],
                    s && "get" in s && (o = s.get(e, !0, r)), o ===
                    t && (o = Bt(e, n, i)), "normal" === o && n in
                    Jt && (o = Jt[n]), "" === r || r ? (a =
                        parseFloat(o), r === !0 || ot.isNumeric(a) ?
                        a || 0 : o) : o
            }
        }), Bt = function(e, n, r) {
            var i, o, a, s = r || b(e),
                u = s ? s.getPropertyValue(n) || s[n] : t,
                c = e.style;
            return s && ("" !== u || ot.contains(e.ownerDocument, e) || (u =
                ot.style(e, n)), Ut.test(u) && Xt.test(n) && (i = c
                .width, o = c.minWidth, a = c.maxWidth, c.minWidth =
                c.maxWidth = c.width = u, u = s.width, c.width = i,
                c.minWidth = o, c.maxWidth = a)), u
        }, ot.each(["height", "width"], function(e, n) {
            ot.cssHooks[n] = {
                get: function(e, r, i) {
                    return r ? 0 === e.offsetWidth && zt.test(
                        ot.css(e, "display")) ? ot.swap(e,
                        Gt, function() {
                            return C(e, n, i)
                        }) : C(e, n, i) : t
                },
                set: function(e, t, r) {
                    var i = r && b(e);
                    return T(e, t, r ? k(e, n, r, ot.support.boxSizing &&
                        "border-box" === ot.css(e,
                            "boxSizing", !1, i), i) : 0)
                }
            }
        }), ot(function() {
            ot.support.reliableMarginRight || (ot.cssHooks.marginRight = {
                get: function(e, n) {
                    return n ? ot.swap(e, {
                        display: "inline-block"
                    }, Bt, [e, "marginRight"]) : t
                }
            }), !ot.support.pixelPosition && ot.fn.position && ot.each(
                ["top", "left"], function(e, n) {
                    ot.cssHooks[n] = {
                        get: function(e, r) {
                            return r ? (r = Bt(e, n), Ut.test(
                                r) ? ot(e).position()[
                                n] + "px" : r) : t
                        }
                    }
                })
        }), ot.expr && ot.expr.filters && (ot.expr.filters.hidden =
            function(e) {
                return 0 >= e.offsetWidth && 0 >= e.offsetHeight
            }, ot.expr.filters.visible = function(e) {
                return !ot.expr.filters.hidden(e)
            }), ot.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ot.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" ==
                            typeof n ? n.split(" ") : [n]; 4 >
                        r; r++) i[e + Kt[r] + t] = o[r] || o[r -
                        2] || o[0];
                    return i
                }
            }, Xt.test(e) || (ot.cssHooks[e + t].set = T)
        });
        var en = /%20/g,
            tn = /\[\]$/,
            nn = /\r?\n/g,
            rn = /^(?:submit|button|image|reset|file)$/i,
            on = /^(?:input|select|textarea|keygen)/i;
        ot.fn.extend({
            serialize: function() {
                return ot.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ot.prop(this, "elements");
                    return e ? ot.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !ot(this).is(
                            ":disabled") && on.test(this.nodeName) &&
                        !rn.test(e) && (this.checked || !Ft
                            .test(e))
                }).map(function(e, t) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ?
                        ot.map(n, function(e) {
                            return {
                                name: t.name,
                                value: e.replace(nn,
                                    "\r\n")
                            }
                        }) : {
                            name: t.name,
                            value: n.replace(nn, "\r\n")
                        }
                }).get()
            }
        }), ot.param = function(e, n) {
            var r, i = [],
                o = function(e, t) {
                    t = ot.isFunction(t) ? t() : null == t ? "" : t, i[i.length] =
                        encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = ot.ajaxSettings && ot.ajaxSettings.traditional),
                ot.isArray(e) || e.jquery && !ot.isPlainObject(e)) ot.each(
                e, function() {
                    o(this.name, this.value)
                });
            else
                for (r in e) S(r, e[r], n, o);
            return i.join("&").replace(en, "+")
        }, ot.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
            .split(" "), function(e, t) {
                ot.fn[t] = function(e, n) {
                    return arguments.length > 0 ? this.on(t, null, e, n) :
                        this.trigger(t)
                }
            }), ot.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") :
                    this.off(t, e || "**", n)
            }
        });
        var an, sn, un = ot.now(),
            cn = /\?/,
            ln = /#.*$/,
            fn = /([?&])_=[^&]*/,
            pn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            dn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            hn = /^(?:GET|HEAD)$/,
            mn = /^\/\//,
            gn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            yn = ot.fn.load,
            vn = {},
            xn = {},
            bn = "*/".concat("*");
        try {
            sn = z.href
        } catch (wn) {
            sn = X.createElement("a"), sn.href = "", sn = sn.href
        }
        an = gn.exec(sn.toLowerCase()) || [], ot.fn.load = function(e, n, r) {
            if ("string" != typeof e && yn) return yn.apply(this, arguments);
            var i, o, a, s = this,
                u = e.indexOf(" ");
            return u >= 0 && (i = e.slice(u), e = e.slice(0, u)), ot.isFunction(
                n) ? (r = n, n = t) : n && "object" == typeof n && (o =
                "POST"), s.length > 0 && ot.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n
            }).done(function(e) {
                a = arguments, s.html(i ? ot("<div>").append(ot.parseHTML(
                    e)).find(i) : e)
            }).complete(r && function(e, t) {
                s.each(r, a || [e.responseText, t, e])
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError",
            "ajaxSuccess", "ajaxSend"
        ], function(e, t) {
            ot.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: sn,
                type: "GET",
                isLocal: dn.test(an[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ot.parseJSON,
                    "text xml": ot.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? A(A(e, ot.ajaxSettings), t) : A(ot.ajaxSettings,
                    e)
            },
            ajaxPrefilter: N(vn),
            ajaxTransport: N(xn),
            ajax: function(e, n) {
                function r(e, n, r, s) {
                    var c, f, v, x, w, k = n;
                    2 !== b && (b = 2, u && clearTimeout(u), i =
                        t, a = s || "", T.readyState = e >
                        0 ? 4 : 0, c = e >= 200 && 300 > e ||
                        304 === e, r && (x = O(p, T, r)), x =
                        L(p, x, T, c), c ? (p.ifModified &&
                            (w = T.getResponseHeader(
                                    "Last-Modified"), w &&
                                (ot.lastModified[o] = w), w =
                                T.getResponseHeader("etag"),
                                w && (ot.etag[o] = w)), 204 ===
                            e || "HEAD" === p.type ? k =
                            "nocontent" : 304 === e ? k =
                            "notmodified" : (k = x.state, f =
                                x.data, v = x.error, c = !v
                            )) : (v = k, (e || !k) && (k =
                            "error", 0 > e && (e = 0))), T.status =
                        e, T.statusText = (n || k) + "", c ?
                        m.resolveWith(d, [f, k, T]) : m.rejectWith(
                            d, [T, k, v]), T.statusCode(y),
                        y = t, l && h.trigger(c ?
                            "ajaxSuccess" : "ajaxError", [T,
                                p, c ? f : v
                            ]), g.fireWith(d, [T, k]), l &&
                        (h.trigger("ajaxComplete", [T, p]), --
                            ot.active || ot.event.trigger(
                                "ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var i, o, a, s, u, c, l, f, p = ot.ajaxSetup({}, n),
                    d = p.context || p,
                    h = p.context && (d.nodeType || d.jquery) ? ot(
                        d) : ot.event,
                    m = ot.Deferred(),
                    g = ot.Callbacks("once memory"),
                    y = p.statusCode || {},
                    v = {},
                    x = {},
                    b = 0,
                    w = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!s)
                                    for (s = {}; t = pn.exec(a);)
                                        s[t[1].toLowerCase()] =
                                        t[2];
                                t = s[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = x[n] = x[n] || e,
                                v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (p.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) y[t] = [y[t],
                                        e[t]
                                    ];
                                else T.always(e[T.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return i && i.abort(t), r(0, t),
                                this
                        }
                    };
                if (m.promise(T).complete = g.add, T.success = T.done,
                    T.error = T.fail, p.url = ((e || p.url || sn) +
                        "").replace(ln, "").replace(mn, an[1] +
                        "//"), p.type = n.method || n.type || p.method ||
                    p.type, p.dataTypes = ot.trim(p.dataType || "*")
                    .toLowerCase().match(st) || [""], null == p.crossDomain &&
                    (c = gn.exec(p.url.toLowerCase()), p.crossDomain = !
                        (!c || c[1] === an[1] && c[2] === an[2] &&
                            (c[3] || ("http:" === c[1] ? "80" :
                                "443")) === (an[3] || ("http:" ===
                                an[1] ? "80" : "443")))), p.data &&
                    p.processData && "string" != typeof p.data && (
                        p.data = ot.param(p.data, p.traditional)),
                    D(vn, p, n, T), 2 === b) return T;
                l = p.global, l && 0 === ot.active++ && ot.event.trigger(
                        "ajaxStart"), p.type = p.type.toUpperCase(),
                    p.hasContent = !hn.test(p.type), o = p.url, p.hasContent ||
                    (p.data && (o = p.url += (cn.test(o) ? "&" :
                            "?") + p.data, delete p.data), p.cache ===
                        !1 && (p.url = fn.test(o) ? o.replace(fn,
                            "$1_=" + un++) : o + (cn.test(o) ?
                            "&" : "?") + "_=" + un++)), p.ifModified &&
                    (ot.lastModified[o] && T.setRequestHeader(
                        "If-Modified-Since", ot.lastModified[o]
                    ), ot.etag[o] && T.setRequestHeader(
                        "If-None-Match", ot.etag[o])), (p.data && p
                        .hasContent && p.contentType !== !1 || n.contentType
                    ) && T.setRequestHeader("Content-Type", p.contentType),
                    T.setRequestHeader("Accept", p.dataTypes[0] &&
                        p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[
                            0]] + ("*" !== p.dataTypes[0] ? ", " +
                            bn + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers) T.setRequestHeader(f, p.headers[
                    f]);
                if (p.beforeSend && (p.beforeSend.call(d, T, p) ===
                    !1 || 2 === b)) return T.abort();
                w = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[f](p[f]);
                if (i = D(xn, p, n, T)) {
                    T.readyState = 1, l && h.trigger("ajaxSend", [T,
                        p
                    ]), p.async && p.timeout > 0 && (u =
                        setTimeout(function() {
                            T.abort("timeout")
                        }, p.timeout));
                    try {
                        b = 1, i.send(v, r)
                    } catch (k) {
                        if (!(2 > b)) throw k;
                        r(-1, k)
                    }
                } else r(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return ot.get(e, t, n, "json")
            },
            getScript: function(e, n) {
                return ot.get(e, t, n, "script")
            }
        }), ot.each(["get", "post"], function(e, n) {
            ot[n] = function(e, r, i, o) {
                return ot.isFunction(r) && (o = o || i, i = r, r =
                    t), ot.ajax({
                    url: e,
                    type: n,
                    dataType: o,
                    data: r,
                    success: i
                })
            }
        }), ot.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ot.globalEval(e), e
                }
            }
        }), ot.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type =
                "GET")
        }), ot.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = ot("<script>").prop({
                            async: !0,
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(), n = null, e && i(
                                "error" === e.type ?
                                404 : 200, e.type)
                        }), X.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var Tn = [],
            kn = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Tn.pop() || ot.expando + "_" + un++;
                return this[e] = !0, e
            }
        }), ot.ajaxPrefilter("json jsonp", function(n, r, i) {
            var o, a, s, u = n.jsonp !== !1 && (kn.test(n.url) ? "url" :
                "string" == typeof n.data && !(n.contentType || "")
                .indexOf("application/x-www-form-urlencoded") && kn
                .test(n.data) && "data");
            return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback =
                ot.isFunction(n.jsonpCallback) ? n.jsonpCallback() :
                n.jsonpCallback, u ? n[u] = n[u].replace(kn, "$1" +
                    o) : n.jsonp !== !1 && (n.url += (cn.test(n.url) ?
                    "&" : "?") + n.jsonp + "=" + o), n.converters[
                    "script json"] = function() {
                    return s || ot.error(o + " was not called"), s[
                        0]
                }, n.dataTypes[0] = "json", a = e[o], e[o] =
                function() {
                    s = arguments
                }, i.always(function() {
                    e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback,
                            Tn.push(o)), s && ot.isFunction(a) &&
                        a(s[0]), s = a = t
                }), "script") : t
        }), ot.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (e) {}
        };
        var Cn = ot.ajaxSettings.xhr(),
            En = {
                0: 200,
                1223: 204
            },
            jn = 0,
            Sn = {};
        e.ActiveXObject && ot(e).on("unload", function() {
                for (var e in Sn) Sn[e]();
                Sn = t
            }), ot.support.cors = !!Cn && "withCredentials" in Cn, ot.support.ajax =
            Cn = !!Cn, ot.ajaxTransport(function(e) {
                var n;
                return ot.support.cors || Cn && !e.crossDomain ? {
                    send: function(r, i) {
                        var o, a, s = e.xhr();
                        if (s.open(e.type, e.url, e.async, e.username,
                            e.password), e.xhrFields)
                            for (o in e.xhrFields) s[o] = e.xhrFields[
                                o];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(
                            e.mimeType), e.crossDomain || r[
                            "X-Requested-With"] || (r[
                                "X-Requested-With"] =
                            "XMLHttpRequest");
                        for (o in r) s.setRequestHeader(o, r[o]);
                        n = function(e) {
                            return function() {
                                n && (delete Sn[a], n = s.onload =
                                    s.onerror = null,
                                    "abort" === e ? s.abort() :
                                    "error" === e ? i(s
                                        .status || 404,
                                        s.statusText) :
                                    i(En[s.status] || s
                                        .status, s.statusText,
                                        "string" ==
                                        typeof s.responseText ? {
                                            text: s.responseText
                                        } : t, s.getAllResponseHeaders()
                                    ))
                            }
                        }, s.onload = n(), s.onerror = n(
                            "error"), n = Sn[a = jn++] = n(
                            "abort"), s.send(e.hasContent && e.data ||
                            null)
                    },
                    abort: function() {
                        n && n()
                    }
                } : t
            });
        var Nn, Dn, An = /^(?:toggle|show|hide)$/,
            On = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
            Ln = /queueHooks$/,
            Mn = [H],
            _n = {
                "*": [
                    function(e, t) {
                        var n = this.createTween(e, t),
                            r = n.cur(),
                            i = On.exec(t),
                            o = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                            a = (ot.cssNumber[e] || "px" !== o && +r) && On
                            .exec(ot.css(n.elem, e)),
                            s = 1,
                            u = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do s = s || ".5", a /= s, ot.style(n.elem, e, a +
                                o); while (s !== (s = n.cur() / r) && 1 !==
                                s && --u)
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit =
                            o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +
                            i[2]), n
                    }
                ]
            };
        ot.Animation = ot.extend(q, {
                tweener: function(e, t) {
                    ot.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(
                        " ");
                    for (var n, r = 0, i = e.length; i > r; r++) n = e[
                        r], _n[n] = _n[n] || [], _n[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? Mn.unshift(e) : Mn.push(e)
                }
            }), ot.Tween = I, I.prototype = {
                constructor: I,
                init: function(e, t, n, r, i, o) {
                    this.elem = e, this.prop = n, this.easing = i ||
                        "swing", this.options = t, this.start = this.now =
                        this.cur(), this.end = r, this.unit = o || (ot.cssNumber[
                            n] ? "" : "px")
                },
                cur: function() {
                    var e = I.propHooks[this.prop];
                    return e && e.get ? e.get(this) : I.propHooks._default.get(
                        this)
                },
                run: function(e) {
                    var t, n = I.propHooks[this.prop];
                    return this.pos = t = this.options.duration ? ot.easing[
                            this.easing](e, this.options.duration * e, 0, 1,
                            this.options.duration) : e, this.now = (this.end -
                            this.start) * t + this.start, this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : I.propHooks._default.set(
                            this), this
                }
            }, I.prototype.init.prototype = I.prototype, I.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        return null == e.elem[e.prop] || e.elem.style &&
                            null != e.elem.style[e.prop] ? (t = ot.css(e.elem,
                                e.prop, ""), t && "auto" !== t ? t : 0) : e
                            .elem[e.prop]
                    },
                    set: function(e) {
                        ot.fx.step[e.prop] ? ot.fx.step[e.prop](e) : e.elem
                            .style && (null != e.elem.style[ot.cssProps[e.prop]] ||
                                ot.cssHooks[e.prop]) ? ot.style(e.elem, e.prop,
                                e.now + e.unit) : e.elem[e.prop] = e.now
                    }
                }
            }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
                set: function(e) {
                    e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] =
                        e.now)
                }
            }, ot.each(["toggle", "show", "hide"], function(e, t) {
                var n = ot.fn[t];
                ot.fn[t] = function(e, r, i) {
                    return null == e || "boolean" == typeof e ? n.apply(
                        this, arguments) : this.animate(P(t, !0), e,
                        r, i)
                }
            }), ot.fn.extend({
                fadeTo: function(e, t, n, r) {
                    return this.filter(x).css("opacity", 0).show().end()
                        .animate({
                            opacity: t
                        }, e, n, r)
                },
                animate: function(e, t, n, r) {
                    var i = ot.isEmptyObject(e),
                        o = ot.speed(t, n, r),
                        a = function() {
                            var t = q(this, ot.extend({}, e), o);
                            (i || gt.get(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, i || o.queue === !1 ? this.each(
                        a) : this.queue(o.queue, a)
                },
                stop: function(e, n, r) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(r)
                    };
                    return "string" != typeof e && (r = n, n = e, e = t),
                        n && e !== !1 && this.queue(e || "fx", []),
                        this.each(function() {
                            var t = !0,
                                n = null != e && e + "queueHooks",
                                o = ot.timers,
                                a = gt.get(this);
                            if (n) a[n] && a[n].stop && i(a[n]);
                            else
                                for (n in a) a[n] && a[n].stop &&
                                    Ln.test(n) && i(a[n]);
                            for (n = o.length; n--;) o[n].elem !==
                                this || null != e && o[n].queue !==
                                e || (o[n].anim.stop(r), t = !1, o.splice(
                                    n, 1));
                            (t || !r) && ot.dequeue(this, e)
                        })
                },
                finish: function(e) {
                    return e !== !1 && (e = e || "fx"), this.each(
                        function() {
                            var t, n = gt.get(this),
                                r = n[e + "queue"],
                                i = n[e + "queueHooks"],
                                o = ot.timers,
                                a = r ? r.length : 0;
                            for (n.finish = !0, ot.queue(this, e, []),
                                i && i.stop && i.stop.call(this, !0),
                                t = o.length; t--;) o[t].elem ===
                                this && o[t].queue === e && (o[t].anim
                                    .stop(!0), o.splice(t, 1));
                            for (t = 0; a > t; t++) r[t] && r[t].finish &&
                                r[t].finish.call(this);
                            delete n.finish
                        })
                }
            }), ot.each({
                slideDown: P("show"),
                slideUp: P("hide"),
                slideToggle: P("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, t) {
                ot.fn[e] = function(e, n, r) {
                    return this.animate(t, e, n, r)
                }
            }), ot.speed = function(e, t, n) {
                var r = e && "object" == typeof e ? ot.extend({}, e) : {
                    complete: n || !n && t || ot.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !ot.isFunction(t) && t
                };
                return r.duration = ot.fx.off ? 0 : "number" == typeof r.duration ?
                    r.duration : r.duration in ot.fx.speeds ? ot.fx.speeds[r.duration] :
                    ot.fx.speeds._default, (null == r.queue || r.queue === !0) &&
                    (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                        ot.isFunction(r.old) && r.old.call(this), r.queue && ot
                            .dequeue(this, r.queue)
                    }, r
            }, ot.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                }
            }, ot.timers = [], ot.fx = I.prototype.init, ot.fx.tick = function() {
                var e, n = ot.timers,
                    r = 0;
                for (Nn = ot.now(); n.length > r; r++) e = n[r], e() || n[r] !==
                    e || n.splice(r--, 1);
                n.length || ot.fx.stop(), Nn = t
            }, ot.fx.timer = function(e) {
                e() && ot.timers.push(e) && ot.fx.start()
            }, ot.fx.interval = 13, ot.fx.start = function() {
                Dn || (Dn = setInterval(ot.fx.tick, ot.fx.interval))
            }, ot.fx.stop = function() {
                clearInterval(Dn), Dn = null
            }, ot.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ot.fx.step = {}, ot.expr && ot.expr.filters && (ot.expr.filters.animated =
                function(e) {
                    return ot.grep(ot.timers, function(t) {
                        return e === t.elem
                    }).length
                }), ot.fn.offset = function(e) {
                if (arguments.length) return e === t ? this : this.each(
                    function(t) {
                        ot.offset.setOffset(this, e, t)
                    });
                var n, r, i = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    a = i && i.ownerDocument;
                return a ? (n = a.documentElement, ot.contains(n, i) ? (typeof i
                    .getBoundingClientRect !== W && (o = i.getBoundingClientRect()),
                    r = R(a), {
                        top: o.top + r.pageYOffset - n.clientTop,
                        left: o.left + r.pageXOffset - n.clientLeft
                    }) : o) : void 0
            }, ot.offset = {
                setOffset: function(e, t, n) {
                    var r, i, o, a, s, u, c, l = ot.css(e, "position"),
                        f = ot(e),
                        p = {};
                    "static" === l && (e.style.position = "relative"), s =
                        f.offset(), o = ot.css(e, "top"), u = ot.css(e,
                            "left"), c = ("absolute" === l || "fixed" === l) &&
                        (o + u).indexOf("auto") > -1, c ? (r = f.position(),
                            a = r.top, i = r.left) : (a = parseFloat(o) ||
                            0, i = parseFloat(u) || 0), ot.isFunction(t) &&
                        (t = t.call(e, n, s)), null != t.top && (p.top = t.top -
                            s.top + a), null != t.left && (p.left = t.left -
                            s.left + i), "using" in t ? t.using.call(e, p) :
                        f.css(p)
                }
            }, ot.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e, t, n = this[0],
                            r = {
                                top: 0,
                                left: 0
                            };
                        return "fixed" === ot.css(n, "position") ? t =
                            n.getBoundingClientRect() : (e = this.offsetParent(),
                                t = this.offset(), ot.nodeName(e[0],
                                    "html") || (r = e.offset()), r.top +=
                                ot.css(e[0], "borderTopWidth", !0), r.left +=
                                ot.css(e[0], "borderLeftWidth", !0)), {
                                top: t.top - r.top - ot.css(n,
                                    "marginTop", !0),
                                left: t.left - r.left - ot.css(n,
                                    "marginLeft", !0)
                            }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var e = this.offsetParent || Q; e &&
                            !ot.nodeName(e, "html") && "static" ===
                            ot.css(e, "position");) e = e.offsetParent;
                        return e || Q
                    })
                }
            }), ot.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(n, r) {
                var i = "pageYOffset" === r;
                ot.fn[n] = function(o) {
                    return ot.access(this, function(n, o, a) {
                        var s = R(n);
                        return a === t ? s ? s[r] : n[o] : (s ?
                            s.scrollTo(i ? e.pageXOffset :
                                a, i ? a : e.pageYOffset) :
                            n[o] = a, t)
                    }, n, o, arguments.length, null)
                }
            }), ot.each({
                Height: "height",
                Width: "width"
            }, function(e, n) {
                ot.each({
                    padding: "inner" + e,
                    content: n,
                    "": "outer" + e
                }, function(r, i) {
                    ot.fn[i] = function(i, o) {
                        var a = arguments.length && (r ||
                                "boolean" != typeof i),
                            s = r || (i === !0 || o === !0 ?
                                "margin" : "border");
                        return ot.access(this, function(n, r, i) {
                            var o;
                            return ot.isWindow(n) ? n.document
                                .documentElement[
                                    "client" + e] : 9 ===
                                n.nodeType ? (o = n.documentElement,
                                    Math.max(n.body[
                                        "scroll" +
                                        e], o[
                                        "scroll" +
                                        e], n.body[
                                        "offset" +
                                        e], o[
                                        "offset" +
                                        e], o[
                                        "client" +
                                        e])) : i === t ?
                                ot.css(n, r, s) : ot.style(
                                    n, r, i, s)
                        }, n, a ? i : t, a, null)
                    }
                })
            }), ot.fn.size = function() {
                return this.length
            }, ot.fn.andSelf = ot.fn.addBack, "object" == typeof module &&
            module && "object" == typeof module.exports ? module.exports = ot :
            "function" == typeof define && define.amd && define("jquery", [],
                function() {
                    return ot
                }), "object" == typeof e && "object" == typeof e.document && (e
                .jQuery = e.$ = ot)
    }(window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery
        .easing, {
            def: "easeOutQuad",
            swing: function(e, t, n, r, i) {
                return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
            },
            easeInQuad: function(e, t, n, r, i) {
                return r * (t /= i) * t + n
            },
            easeOutQuad: function(e, t, n, r, i) {
                return -r * (t /= i) * (t - 2) + n
            },
            easeInOutQuad: function(e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t *
                    (t - 2) - 1) + n
            },
            easeInCubic: function(e, t, n, r, i) {
                return r * (t /= i) * t * t + n
            },
            easeOutCubic: function(e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t + 1) + n
            },
            easeInOutCubic: function(e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * (
                    (t -= 2) * t * t + 2) + n
            },
            easeInQuart: function(e, t, n, r, i) {
                return r * (t /= i) * t * t * t + n
            },
            easeOutQuart: function(e, t, n, r, i) {
                return -r * ((t = t / i - 1) * t * t * t - 1) + n
            },
            easeInOutQuart: function(e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r /
                    2 * ((t -= 2) * t * t * t - 2) + n
            },
            easeInQuint: function(e, t, n, r, i) {
                return r * (t /= i) * t * t * t * t + n
            },
            easeOutQuint: function(e, t, n, r, i) {
                return r * ((t = t / i - 1) * t * t * t * t + 1) + n
            },
            easeInOutQuint: function(e, t, n, r, i) {
                return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r /
                    2 * ((t -= 2) * t * t * t * t + 2) + n
            },
            easeInSine: function(e, t, n, r, i) {
                return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
            },
            easeOutSine: function(e, t, n, r, i) {
                return r * Math.sin(t / i * (Math.PI / 2)) + n
            },
            easeInOutSine: function(e, t, n, r, i) {
                return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
            },
            easeInExpo: function(e, t, n, r, i) {
                return 0 == t ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
            },
            easeOutExpo: function(e, t, n, r, i) {
                return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) +
                    n
            },
            easeInOutExpo: function(e, t, n, r, i) {
                return 0 == t ? n : t == i ? n + r : (t /= i / 2) < 1 ? r /
                    2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(
                        2, -10 * --t) + 2) + n
            },
            easeInCirc: function(e, t, n, r, i) {
                return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
            },
            easeOutCirc: function(e, t, n, r, i) {
                return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
            },
            easeInOutCirc: function(e, t, n, r, i) {
                return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) -
                        1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) +
                    n
            },
            easeInElastic: function(e, t, n, r, i) {
                var o = 1.70158,
                    a = 0,
                    s = r;
                if (0 == t) return n;
                if (1 == (t /= i)) return n + r;
                if (a || (a = .3 * i), s < Math.abs(r)) {
                    s = r;
                    var o = a / 4
                } else var o = a / (2 * Math.PI) * Math.asin(r / s);
                return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t *
                    i - o) * Math.PI / a)) + n
            },
            easeOutElastic: function(e, t, n, r, i) {
                var o = 1.70158,
                    a = 0,
                    s = r;
                if (0 == t) return n;
                if (1 == (t /= i)) return n + r;
                if (a || (a = .3 * i), s < Math.abs(r)) {
                    s = r;
                    var o = a / 4
                } else var o = a / (2 * Math.PI) * Math.asin(r / s);
                return s * Math.pow(2, -10 * t) * Math.sin(2 * (t * i - o) *
                    Math.PI / a) + r + n
            },
            easeInOutElastic: function(e, t, n, r, i) {
                var o = 1.70158,
                    a = 0,
                    s = r;
                if (0 == t) return n;
                if (2 == (t /= i / 2)) return n + r;
                if (a || (a = .3 * i * 1.5), s < Math.abs(r)) {
                    s = r;
                    var o = a / 4
                } else var o = a / (2 * Math.PI) * Math.asin(r / s);
                return 1 > t ? -.5 * s * Math.pow(2, 10 * (t -= 1)) * Math.sin(
                    2 * (t * i - o) * Math.PI / a) + n : s * Math.pow(2, -
                    10 * (t -= 1)) * Math.sin(2 * (t * i - o) * Math.PI /
                    a) * .5 + r + n
            },
            easeInBack: function(e, t, n, r, i, o) {
                return void 0 == o && (o = 1.70158), r * (t /= i) * t * ((o +
                    1) * t - o) + n
            },
            easeOutBack: function(e, t, n, r, i, o) {
                return void 0 == o && (o = 1.70158), r * ((t = t / i - 1) *
                    t * ((o + 1) * t + o) + 1) + n
            },
            easeInOutBack: function(e, t, n, r, i, o) {
                return void 0 == o && (o = 1.70158), (t /= i / 2) < 1 ? r /
                    2 * t * t * (((o *= 1.525) + 1) * t - o) + n : r / 2 *
                    ((t -= 2) * t * (((o *= 1.525) + 1) * t + o) + 2) + n
            },
            easeInBounce: function(e, t, n, r, i) {
                return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) +
                    n
            },
            easeOutBounce: function(e, t, n, r, i) {
                return (t /= i) < 1 / 2.75 ? 7.5625 * r * t * t + n : 2 / 2
                    .75 > t ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) +
                    n : 2.5 / 2.75 > t ? r * (7.5625 * (t -= 2.25 / 2.75) *
                        t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) *
                        t + .984375) + n
            },
            easeInOutBounce: function(e, t, n, r, i) {
                return i / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t,
                    0, r, i) + n : .5 * jQuery.easing.easeOutBounce(e,
                    2 * t - i, 0, r, i) + .5 * r + n
            }
        }),
    function(e) {
        function t(e) {
            return "object" == typeof e ? e : {
                top: e,
                left: e
            }
        }
        var n = e.scrollTo = function(t, n, r) {
            e(window).scrollTo(t, n, r)
        };
        n.defaults = {
            axis: "xy",
            duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        }, n.window = function() {
            return e(window)._scrollable()
        }, e.fn._scrollable = function() {
            return this.map(function() {
                var t = this,
                    n = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), [
                        "iframe", "#document", "html", "body"
                    ]);
                if (!n) return t;
                var r = (t.contentWindow || t).document || t.ownerDocument ||
                    t;
                return /webkit/i.test(navigator.userAgent) ||
                    "BackCompat" == r.compatMode ? r.body : r.documentElement
            })
        }, e.fn.scrollTo = function(r, i, o) {
            return "object" == typeof i && (o = i, i = 0), "function" ==
                typeof o && (o = {
                    onAfter: o
                }), "max" == r && (r = 9e9), o = e.extend({}, n.defaults, o),
                i = i || o.duration, o.queue = o.queue && o.axis.length > 1,
                o.queue && (i /= 2), o.offset = t(o.offset), o.over = t(o.over),
                this._scrollable().each(function() {
                    function a(e) {
                        c.animate(f, i, o.easing, e && function() {
                            e.call(this, r, o)
                        })
                    }
                    if (r) {
                        var s, u = this,
                            c = e(u),
                            l = r,
                            f = {},
                            p = c.is("html,body");
                        switch (typeof l) {
                            case "number":
                            case "string":
                                if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(
                                    l)) {
                                    l = t(l);
                                    break
                                }
                                if (l = e(l, this), !l.length) return;
                            case "object":
                                (l.is || l.style) && (s = (l = e(l)).offset())
                        }
                        e.each(o.axis.split(""), function(e, t) {
                            var r = "x" == t ? "Left" : "Top",
                                i = r.toLowerCase(),
                                d = "scroll" + r,
                                h = u[d],
                                m = n.max(u, t);
                            if (s) f[d] = s[i] + (p ? 0 : h - c
                                    .offset()[i]), o.margin &&
                                (f[d] -= parseInt(l.css(
                                    "margin" + r)) || 0, f[
                                    d] -= parseInt(l.css(
                                    "border" + r +
                                    "Width")) || 0), f[d] += o.offset[
                                    i] || 0, o.over[i] && (f[d] +=
                                    l["x" == t ? "width" :
                                        "height"]() * o.over[i]
                                );
                            else {
                                var g = l[i];
                                f[d] = g.slice && "%" == g.slice(-
                                        1) ? parseFloat(g) /
                                    100 * m : g
                            }
                            o.limit && /^\d+$/.test(f[d]) && (f[
                                        d] = f[d] <= 0 ? 0 :
                                    Math.min(f[d], m)), !e && o
                                .queue && (h != f[d] && a(o.onAfterFirst),
                                    delete f[d])
                        }), a(o.onAfter)
                    }
                }).end()
        }, n.max = function(t, n) {
            var r = "x" == n ? "Width" : "Height",
                i = "scroll" + r;
            if (!e(t).is("html,body")) return t[i] - e(t)[r.toLowerCase()]();
            var o = "client" + r,
                a = t.ownerDocument.documentElement,
                s = t.ownerDocument.body;
            return Math.max(a[i], s[i]) - Math.min(a[o], s[o])
        }
    }(jQuery),
    function(e) {
        function t() {
            if (e.fn.ajaxSubmit.debug) {
                var t = "[jquery.form] " + Array.prototype.join.call(
                    arguments, "");
                window.console && window.console.log ? window.console.log(t) :
                    window.opera && window.opera.postError && window.opera.postError(
                        t)
            }
        }
        e.fn.ajaxSubmit = function(n) {
            function r(t) {
                for (var r = new FormData, i = 0; i < t.length; i++)
                    "file" != t[i].type && r.append(t[i].name, t[i].value);
                if (u.find("input:file:enabled").each(function() {
                    var t = e(this).attr("name"),
                        n = this.files;
                    if (t)
                        for (var i = 0; i < n.length; i++) r.append(
                            t, n[i])
                }), n.extraData)
                    for (var o in n.extraData) r.append(o, n.extraData[
                        o]);
                n.data = null;
                var a = e.extend(!0, {}, e.ajaxSettings, n, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: "POST"
                });
                a.context = a.context || a, a.data = null;
                var s = a.beforeSend;
                a.beforeSend = function(e, t) {
                    t.data = r, e.upload && (e.upload.onprogress =
                        function(e) {
                            t.progress(e.position, e.total)
                        }), s && s.call(t, e, n)
                }, e.ajax(a)
            }

            function i(r) {
                function i(e) {
                    var t = e.contentWindow ? e.contentWindow.document :
                        e.contentDocument ? e.contentDocument : e.document;
                    return t
                }

                function a() {
                    function n() {
                        try {
                            var e = i(m).readyState;
                            t("state = " + e), "uninitialized" ==
                                e.toLowerCase() && setTimeout(n,
                                    50)
                        } catch (r) {
                            t("Server abort: ", r, " (", r.name,
                                    ")"), s(C), b &&
                                clearTimeout(b), b = void 0
                        }
                    }
                    var r = u.attr("target"),
                        a = u.attr("action");
                    w.setAttribute("target", d), o || w.setAttribute(
                            "method", "POST"), a != f.url && w.setAttribute(
                            "action", f.url), f.skipEncodingOverride ||
                        o && !/post/i.test(o) || u.attr({
                            encoding: "multipart/form-data",
                            enctype: "multipart/form-data"
                        }), f.timeout && (b = setTimeout(function() {
                            x = !0, s(k)
                        }, f.timeout));
                    var c = [];
                    try {
                        if (f.extraData)
                            for (var l in f.extraData) c.push(e(
                                '<input type="hidden" name="' +
                                l + '">').attr("value", f.extraData[
                                l]).appendTo(w)[0]);
                        f.iframeTarget || (h.appendTo("body"), m.attachEvent ?
                            m.attachEvent("onload", s) : m.addEventListener(
                                "load", s, !1)), setTimeout(n,
                            15), w.submit()
                    } finally {
                        w.setAttribute("action", a), r ? w.setAttribute(
                            "target", r) : u.removeAttr(
                            "target"), e(c).remove()
                    }
                }

                function s(n) {
                    if (!g.aborted && !D) {
                        try {
                            N = i(m)
                        } catch (r) {
                            t("cannot access response document: ",
                                r), n = C
                        }
                        if (n === k && g) return g.abort("timeout"),
                            void 0;
                        if (n == C && g) return g.abort(
                            "server abort"), void 0;
                        if (N && N.location.href != f.iframeSrc ||
                            x) {
                            m.detachEvent ? m.detachEvent("onload",
                                s) : m.removeEventListener(
                                "load", s, !1);
                            var o, a = "success";
                            try {
                                if (x) throw "timeout";
                                var u = "xml" == f.dataType || N.XMLDocument ||
                                    e.isXMLDoc(N);
                                if (t("isXml=" + u), !u && window.opera &&
                                    (null == N.body || "" == N.body
                                        .innerHTML) && --A) return t(
                                    "requeing onLoad callback, DOM not available"
                                ), setTimeout(s, 250), void 0;
                                var c = N.body ? N.body : N.documentElement;
                                g.responseText = c ? c.innerHTML :
                                    null, g.responseXML = N.XMLDocument ?
                                    N.XMLDocument : N, u && (f.dataType =
                                        "xml"), g.getResponseHeader =
                                    function(e) {
                                        var t = {
                                            "content-type": f.dataType
                                        };
                                        return t[e]
                                    }, c && (g.status = Number(c.getAttribute(
                                            "status")) || g.status,
                                        g.statusText = c.getAttribute(
                                            "statusText") || g.statusText
                                    );
                                var l = (f.dataType || "").toLowerCase(),
                                    d = /(json|script|text)/.test(l);
                                if (d || f.textarea) {
                                    var y = N.getElementsByTagName(
                                        "textarea")[0];
                                    if (y) g.responseText = y.value,
                                        g.status = Number(y.getAttribute(
                                            "status")) || g.status,
                                        g.statusText = y.getAttribute(
                                            "statusText") || g.statusText;
                                    else if (d) {
                                        var v = N.getElementsByTagName(
                                                "pre")[0],
                                            w = N.getElementsByTagName(
                                                "body")[0];
                                        v ? g.responseText = v.textContent ?
                                            v.textContent : v.innerText :
                                            w && (g.responseText =
                                                w.textContent ? w.textContent :
                                                w.innerText)
                                    }
                                } else "xml" != l || g.responseXML ||
                                    null == g.responseText || (g.responseXML =
                                        O(g.responseText));
                                try {
                                    S = M(g, l, f)
                                } catch (n) {
                                    a = "parsererror", g.error = o =
                                        n || a
                                }
                            } catch (n) {
                                t("error caught: ", n), a = "error",
                                    g.error = o = n || a
                            }
                            g.aborted && (t("upload aborted"), a =
                                    null), g.status && (a = g.status >=
                                    200 && g.status < 300 || 304 ===
                                    g.status ? "success" : "error"),
                                "success" === a ? (f.success && f.success
                                    .call(f.context, S, "success",
                                        g), p && e.event.trigger(
                                        "ajaxSuccess", [g, f])) : a &&
                                (void 0 == o && (o = g.statusText),
                                    f.error && f.error.call(f.context,
                                        g, a, o), p && e.event.trigger(
                                        "ajaxError", [g, f, o])), p &&
                                e.event.trigger("ajaxComplete", [g,
                                    f
                                ]), p && !--e.active && e.event.trigger(
                                    "ajaxStop"), f.complete && f.complete
                                .call(f.context, g, a), D = !0, f.timeout &&
                                clearTimeout(b), setTimeout(
                                    function() {
                                        f.iframeTarget || h.remove(),
                                            g.responseXML = null
                                    }, 100)
                        }
                    }
                }
                var c, l, f, p, d, h, m, g, y, v, x, b, w = u[0],
                    T = !!e.fn.prop;
                if (r)
                    if (T)
                        for (l = 0; l < r.length; l++) c = e(w[r[l].name]),
                            c.prop("disabled", !1);
                    else
                        for (l = 0; l < r.length; l++) c = e(w[r[l].name]),
                            c.removeAttr("disabled");
                if (e(":input[name=submit],:input[id=submit]", w).length)
                    return alert(
                        'Error: Form elements must not have name or id of "submit".'
                    ), void 0;
                if (f = e.extend(!0, {}, e.ajaxSettings, n), f.context =
                    f.context || f, d = "jqFormIO" + (new Date).getTime(),
                    f.iframeTarget ? (h = e(f.iframeTarget), v = h.attr(
                            "name"), null == v ? h.attr("name", d) : d =
                        v) : (h = e('<iframe name="' + d + '" src="' +
                        f.iframeSrc + '" />'), h.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), m = h[0], g = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(n) {
                            var r = "timeout" === n ? "timeout" :
                                "aborted";
                            t("aborting upload... " + r), this.aborted =
                                1, h.attr("src", f.iframeSrc), g.error =
                                r, f.error && f.error.call(f.context,
                                    g, r, n), p && e.event.trigger(
                                    "ajaxError", [g, f, r]), f.complete &&
                                f.complete.call(f.context, g, r)
                        }
                    }, p = f.global, p && !e.active++ && e.event.trigger(
                        "ajaxStart"), p && e.event.trigger("ajaxSend", [
                        g, f
                    ]), f.beforeSend && f.beforeSend.call(f.context, g,
                        f) === !1) return f.global && e.active--, void 0;
                if (!g.aborted) {
                    y = w.clk, y && (v = y.name, v && !y.disabled && (f
                        .extraData = f.extraData || {}, f.extraData[
                            v] = y.value, "image" == y.type &&
                        (f.extraData[v + ".x"] = w.clk_x, f.extraData[
                            v + ".y"] = w.clk_y)));
                    var k = 1,
                        C = 2,
                        E = e("meta[name=csrf-token]").attr("content"),
                        j = e("meta[name=csrf-param]").attr("content");
                    j && E && (f.extraData = f.extraData || {}, f.extraData[
                        j] = E), f.forceSync ? a() : setTimeout(a,
                        10);
                    var S, N, D, A = 50,
                        O = e.parseXML || function(e, t) {
                            return window.ActiveXObject ? (t = new ActiveXObject(
                                        "Microsoft.XMLDOM"), t.async =
                                    "false", t.loadXML(e)) : t = (new DOMParser)
                                .parseFromString(e, "text/xml"), t && t
                                .documentElement && "parsererror" != t.documentElement
                                .nodeName ? t : null
                        },
                        L = e.parseJSON || function(e) {
                            return window.eval("(" + e + ")")
                        },
                        M = function(t, n, r) {
                            var i = t.getResponseHeader("content-type") ||
                                "",
                                o = "xml" === n || !n && i.indexOf(
                                    "xml") >= 0,
                                a = o ? t.responseXML : t.responseText;
                            return o && "parsererror" === a.documentElement
                                .nodeName && e.error && e.error(
                                    "parsererror"), r && r.dataFilter &&
                                (a = r.dataFilter(a, n)), "string" ==
                                typeof a && ("json" === n || !n && i.indexOf(
                                    "json") >= 0 ? a = L(a) : (
                                    "script" === n || !n && i.indexOf(
                                        "javascript") >= 0) && e.globalEval(
                                    a)), a
                        }
                }
            }
            if (!this.length) return t(
                "ajaxSubmit: skipping submit process - no element selected"
            ), this;
            var o, a, s, u = this;
            "function" == typeof n && (n = {
                    success: n
                }), o = this.attr("method"), a = this.attr("action"), s =
                "string" == typeof a ? e.trim(a) : "", s = s || window.location
                .href || "", s && (s = (s.match(/^([^#]+)/) || [])[1]), n =
                e.extend(!0, {
                    url: s,
                    success: e.ajaxSettings.success,
                    type: o || "GET",
                    iframeSrc: /^https/i.test(window.location.href ||
                        "") ? "javascript:false" : "about:blank"
                }, n);
            var c = {};
            if (this.trigger("form-pre-serialize", [this, n, c]), c.veto)
                return t(
                    "ajaxSubmit: submit vetoed via form-pre-serialize trigger"
                ), this;
            if (n.beforeSerialize && n.beforeSerialize(this, n) === !1)
                return t(
                    "ajaxSubmit: submit aborted via beforeSerialize callback"
                ), this;
            var l = n.traditional;
            void 0 === l && (l = e.ajaxSettings.traditional);
            var f, p = this.formToArray(n.semantic);
            if (n.data && (n.extraData = n.data, f = e.param(n.data, l)), n
                .beforeSubmit && n.beforeSubmit(p, this, n) === !1) return t(
                "ajaxSubmit: submit aborted via beforeSubmit callback"
            ), this;
            if (this.trigger("form-submit-validate", [p, this, n, c]), c.veto)
                return t(
                    "ajaxSubmit: submit vetoed via form-submit-validate trigger"
                ), this;
            var d = e.param(p, l);
            f && (d = d ? d + "&" + f : f), "GET" == n.type.toUpperCase() ?
                (n.url += (n.url.indexOf("?") >= 0 ? "&" : "?") + d, n.data =
                    null) : n.data = d;
            var h = [];
            if (n.resetForm && h.push(function() {
                u.resetForm()
            }), n.clearForm && h.push(function() {
                u.clearForm(n.includeHidden)
            }), !n.dataType && n.target) {
                var m = n.success || function() {};
                h.push(function(t) {
                    var r = n.replaceTarget ? "replaceWith" :
                        "html";
                    e(n.target)[r](t).each(m, arguments)
                })
            } else n.success && h.push(n.success);
            n.success = function(e, t, r) {
                for (var i = n.context || n, o = 0, a = h.length; a > o; o++)
                    h[o].apply(i, [e, t, r || u, u])
            };
            var g = !1,
                y = g.length > 0,
                v = "multipart/form-data",
                x = u.attr("enctype") == v || u.attr("encoding") == v,
                b = !!(y && g.get(0).files && window.FormData);
            t("fileAPI :" + b);
            var w = (y || x) && !b;
            return n.iframe !== !1 && (n.iframe || w) ? n.closeKeepAlive ?
                e.get(n.closeKeepAlive, function() {
                    i(p)
                }) : i(p) : (y || x) && b ? (n.progress = n.progress || e.noop,
                    r(p)) : e.ajax(n), this.trigger("form-submit-notify", [
                    this, n
                ]), this
        }, e.fn.ajaxForm = function(n) {
            if (0 === this.length) {
                var r = {
                    s: this.selector,
                    c: this.context
                };
                return !e.isReady && r.s ? (t(
                    "DOM not ready, queuing ajaxForm"), e(function() {
                    e(r.s, r.c).ajaxForm(n)
                }), this) : (t(
                    "terminating; zero elements found by selector" +
                    (e.isReady ? "" : " (DOM not ready)")), this)
            }
            return this.ajaxFormUnbind().bind("submit.form-plugin",
                function(t) {
                    t.isDefaultPrevented() || (t.preventDefault(), e(
                        this).ajaxSubmit(n))
                }).bind("click.form-plugin", function(t) {
                var n = t.target,
                    r = e(n);
                if (!r.is(":submit,input:image")) {
                    var i = r.closest(":submit");
                    if (0 == i.length) return;
                    n = i[0]
                }
                var o = this;
                if (o.clk = n, "image" == n.type)
                    if (void 0 != t.offsetX) o.clk_x = t.offsetX, o
                        .clk_y = t.offsetY;
                    else if ("function" == typeof e.fn.offset) {
                    var a = r.offset();
                    o.clk_x = t.pageX - a.left, o.clk_y = t.pageY -
                        a.top
                } else o.clk_x = t.pageX - n.offsetLeft, o.clk_y =
                    t.pageY - n.offsetTop;
                setTimeout(function() {
                    o.clk = o.clk_x = o.clk_y = null
                }, 100)
            })
        }, e.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, e.fn.formToArray = function(t) {
            var n = [];
            if (0 === this.length) return n;
            var r = this[0],
                i = t ? r.getElementsByTagName("*") : r.elements;
            if (!i) return n;
            var o, a, s, u, c, l, f;
            for (o = 0, l = i.length; l > o; o++)
                if (c = i[o], s = c.name)
                    if (t && r.clk && "image" == c.type) c.disabled || r.clk !=
                        c || (n.push({
                            name: s,
                            value: e(c).val(),
                            type: c.type
                        }), n.push({
                            name: s + ".x",
                            value: r.clk_x
                        }, {
                            name: s + ".y",
                            value: r.clk_y
                        }));
                    else if (u = e.fieldValue(c, !0), u && u.constructor ==
                Array)
                for (a = 0, f = u.length; f > a; a++) n.push({
                    name: s,
                    value: u[a]
                });
            else null !== u && "undefined" != typeof u && n.push({
                name: s,
                value: u,
                type: c.type
            }); if (!t && r.clk) {
                var p = e(r.clk),
                    d = p[0];
                s = d.name, s && !d.disabled && "image" == d.type && (n.push({
                    name: s,
                    value: p.val()
                }), n.push({
                    name: s + ".x",
                    value: r.clk_x
                }, {
                    name: s + ".y",
                    value: r.clk_y
                }))
            }
            return n
        }, e.fn.formSerialize = function(t) {
            return e.param(this.formToArray(t))
        }, e.fn.fieldSerialize = function(t) {
            var n = [];
            return this.each(function() {
                var r = this.name;
                if (r) {
                    var i = e.fieldValue(this, t);
                    if (i && i.constructor == Array)
                        for (var o = 0, a = i.length; a > o; o++) n
                            .push({
                                name: r,
                                value: i[o]
                            });
                    else null !== i && "undefined" != typeof i && n
                        .push({
                            name: this.name,
                            value: i
                        })
                }
            }), e.param(n)
        }, e.fn.fieldValue = function(t) {
            for (var n = [], r = 0, i = this.length; i > r; r++) {
                var o = this[r],
                    a = e.fieldValue(o, t);
                null === a || "undefined" == typeof a || a.constructor ==
                    Array && !a.length || (a.constructor == Array ? e.merge(
                        n, a) : n.push(a))
            }
            return n
        }, e.fieldValue = function(t, n) {
            var r = t.name,
                i = t.type,
                o = t.tagName.toLowerCase();
            if (void 0 === n && (n = !0), n && (!r || t.disabled || "reset" ==
                i || "button" == i || ("checkbox" == i || "radio" == i) &&
                !t.checked || ("submit" == i || "image" == i) && t.form &&
                t.form.clk != t || "select" == o && -1 == t.selectedIndex
            )) return null;
            if ("select" == o) {
                var a = t.selectedIndex;
                if (0 > a) return null;
                for (var s = [], u = t.options, c = "select-one" == i, l =
                    c ? a + 1 : u.length, f = c ? a : 0; l > f; f++) {
                    var p = u[f];
                    if (p.selected) {
                        var d = p.value;
                        if (d || (d = p.attributes && p.attributes.value &&
                            !p.attributes.value.specified ? p.text : p.value
                        ), c) return d;
                        s.push(d)
                    }
                }
                return s
            }
            return e(t).val()
        }, e.fn.clearForm = function(t) {
            return this.each(function() {
                e("input,select,textarea", this).clearFields(t)
            })
        }, e.fn.clearFields = e.fn.clearInputs = function(e) {
            var t =
                /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var n = this.type,
                    r = this.tagName.toLowerCase();
                t.test(n) || "textarea" == r || e && /hidden/.test(
                        n) ? this.value = "" : "checkbox" == n ||
                    "radio" == n ? this.checked = !1 : "select" ==
                    r && (this.selectedIndex = -1)
            })
        }, e.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" ==
                    typeof this.reset && !this.reset.nodeType) &&
                this.reset()
            })
        }, e.fn.enable = function(e) {
            return void 0 === e && (e = !0), this.each(function() {
                this.disabled = !e
            })
        }, e.fn.selected = function(t) {
            return void 0 === t && (t = !0), this.each(function() {
                var n = this.type;
                if ("checkbox" == n || "radio" == n) this.checked =
                    t;
                else if ("option" == this.tagName.toLowerCase()) {
                    var r = e(this).parent("select");
                    t && r[0] && "select-one" == r[0].type && r.find(
                            "option").selected(!1), this.selected =
                        t
                }
            })
        }, e.fn.ajaxSubmit.debug = !1
    }(jQuery),
    function(e) {
        var t = 300,
            n = {
                init: function() {
                    n.ScrollToContact(), n.Preloader()
                },
                ScrollToContact: function() {
                    e("#button_more").click(function() {
                        e.scrollTo("#features_3", t + 100, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#about_arrow_back").click(function() {
                        e.scrollTo("0px", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#about_arrow_next").click(function() {
                        e.scrollTo("#features_1", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#features_1_arrow_back").click(function() {
                        e.scrollTo("#about", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#features_1_arrow_next").click(function() {
                        e.scrollTo("#features_2", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#features_2_arrow_back").click(function() {
                        e.scrollTo("#features_1", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#features_2_arrow_next").click(function() {
                        e.scrollTo("#features_3", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#features_3_arrow_back").click(function() {
                        e.scrollTo("#features_2", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#features_3_arrow_next").click(function() {
                        e.scrollTo("#gallery", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#gallery_arrow_back").click(function() {
                        e.scrollTo("#features_3", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#gallery_arrow_next").click(function() {
                        e.scrollTo("#dev_blog", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    }), e("#dev_blog_arrow_back").click(function() {
                        e.scrollTo("0px", t, {
                            easing: "easeInOutExpo",
                            offset: 0,
                            axis: "y"
                        })
                    })
                },
                Preloader: function() {
                    e(window).load(function() {
                        e("#status").delay(100).fadeOut("slow"), e(
                            "#preloader").delay(500).fadeOut(
                            "slow"), e("body").delay(500).css({
                            overflow: "visible"
                        }), setTimeout(function() {
                            e("#logo").addClass(
                                "animated fadeInDown")
                        }, t - 300), setTimeout(function() {
                            e("#logo_header").addClass(
                                "animated fadeInDown")
                        }, t - 200), setTimeout(function() {
                            e("#slogan").addClass(
                                "animated fadeInDown")
                        }, t - 100), setTimeout(function() {
                            e("#home_image").addClass(
                                "animated fadeInUp")
                        }, t)
                    })
                }
            };
        e(function() {
            n.init()
        })
    }(jQuery),
    function() {
        function e(e) {
            this.path = e;
            var t = this.path.split("."),
                n = t.slice(0, t.length - 1).join("."),
                r = t[t.length - 1];
            this.at_2x_path = n + "@2x." + r
        }

        function t(t) {
            this.el = t, this.path = new e(this.el.getAttribute("src"));
            var n = this;
            this.path.check_2x_variant(function(e) {
                e && n.swap()
            })
        }
        var n = "undefined" == typeof exports ? window : exports;
        n.RetinaImagePath = e, e.confirmed_paths = [], e.prototype.is_external =
            function() {
                return !!this.path.match(/^https?\:/i) && !this.path.match("//" +
                    document.domain)
            }, e.prototype.check_2x_variant = function(t) {
                var n, r = this;
                return this.is_external() ? t(!1) : this.at_2x_path in e.confirmed_paths ?
                    t(!0) : (n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path),
                        n.onreadystatechange = function() {
                            return 4 != n.readyState ? t(!1) : n.status >= 200 &&
                                n.status <= 399 ? (e.confirmed_paths.push(r.at_2x_path),
                                    t(!0)) : t(!1)
                        }, n.send(), void 0)
            }, n.RetinaImage = t, t.prototype.swap = function(e) {
                function t() {
                    n.el.complete ? (n.el.setAttribute("width", n.el.offsetWidth),
                        n.el.setAttribute("height", n.el.offsetHeight),
                        n.el.setAttribute("src", e)) : setTimeout(t, 5)
                }
                "undefined" == typeof e && (e = this.path.at_2x_path);
                var n = this;
                t()
            }, n.devicePixelRatio > 1 && (window.onload = function() {
                var e, n, r = document.getElementsByTagName("img"),
                    i = [];
                for (e = 0; e < r.length; e++) n = r[e], i.push(new t(n))
            })
    }(),
    function() {
        $(document).ready(function() {
            var e;
            return $("#android_button_signup").on("click", function(e) {
                return e.preventDefault(), $(
                    ".app-store-buttons").fadeOut("fast",
                    function() {
                        // return setTimeout(function() {
                        //     return $(
                        //         "#android-form"
                        //     ).fadeIn("fast")
                        // }, 100)
                    })
            }), $("#back_button").on("click", function(e) {
                return e.preventDefault(), $("#android-form").fadeOut(
                    "fast", function() {
                        return setTimeout(function() {
                            return $(
                                ".app-store-buttons"
                            ).fadeIn("fast")
                        }, 100)
                    })
            }), e = $("#android-form"), e.submit(function(t) {
                return t.preventDefault(), $("#android-form").fadeOut(
                    "fast", function() {
                        return $.ajax({
                            type: e.attr("method"),
                            url: e.attr("action"),
                            data: {
                                feedback: {
                                    email: $(
                                        "#android-email"
                                    ).val()
                                }
                            },
                            success: function() {
                                return $(
                                    "#android-success"
                                ).fadeIn()
                            },
                            error: function() {
                                return $(
                                    "#android-fail"
                                ).fadeIn()
                            }
                        })
                    })
            })
        })
    }.call(this);