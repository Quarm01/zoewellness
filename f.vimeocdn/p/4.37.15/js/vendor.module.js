/* VimeoPlayer - v4.37.15 - 2024-10-22 - https://player.vimeo.com/NOTICE.txt */
var e = Object.prototype;

function t(t) {
    var n = t && t.constructor;
    return t === ("function" == typeof n && n.prototype || e)
}

function n(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var r = n(Object.keys, Object),
    i = Object.prototype.hasOwnProperty;

function o(e) {
    if (!t(e)) return r(e);
    var n = [];
    for (var o in Object(e)) i.call(e, o) && "constructor" != o && n.push(o);
    return n
}
var s = "object" == typeof global && global && global.Object === Object && global,
    a = "object" == typeof self && self && self.Object === Object && self,
    c = s || a || Function("return this")(),
    u = c.Symbol,
    l = Object.prototype,
    d = l.hasOwnProperty,
    h = l.toString,
    f = u ? u.toStringTag : void 0,
    _ = Object.prototype.toString,
    p = u ? u.toStringTag : void 0;

function m(e) {
    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : p && p in Object(e) ? function(e) {
        var t = d.call(e, f),
            n = e[f];
        try {
            e[f] = void 0;
            var r = !0
        } catch (xl) {}
        var i = h.call(e);
        return r && (t ? e[f] = n : delete e[f]), i
    }(e) : function(e) {
        return _.call(e)
    }(e)
}

function v(e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t)
}

function g(e) {
    if (!v(e)) return !1;
    var t = m(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
}
var y = c["__core-js_shared__"],
    E = function() {
        var e = /[^.]+$/.exec(y && y.keys && y.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }(),
    T = Function.prototype.toString;

function S(e) {
    if (null != e) {
        try {
            return T.call(e)
        } catch (xl) {}
        try {
            return e + ""
        } catch (xl) {}
    }
    return ""
}
var b = /^\[object .+?Constructor\]$/,
    A = Function.prototype,
    w = Object.prototype,
    I = A.toString,
    R = w.hasOwnProperty,
    k = RegExp("^" + I.call(R).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function P(e, t) {
    var n = function(e, t) {
        return null == e ? void 0 : e[t]
    }(e, t);
    return function(e) {
        return !(!v(e) || function(e) {
            return !!E && E in e
        }(e)) && (g(e) ? k : b).test(S(e))
    }(n) ? n : void 0
}
var D = P(c, "DataView"),
    O = P(c, "Map"),
    C = P(c, "Promise"),
    L = P(c, "Set"),
    N = P(c, "WeakMap"),
    M = S(D),
    x = S(O),
    U = S(C),
    F = S(L),
    j = S(N),
    V = m;
(D && "[object DataView]" != V(new D(new ArrayBuffer(1))) || O && "[object Map]" != V(new O) || C && "[object Promise]" != V(C.resolve()) || L && "[object Set]" != V(new L) || N && "[object WeakMap]" != V(new N)) && (V = function(e) {
    var t = m(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? S(n) : "";
    if (r) switch (r) {
        case M:
            return "[object DataView]";
        case x:
            return "[object Map]";
        case U:
            return "[object Promise]";
        case F:
            return "[object Set]";
        case j:
            return "[object WeakMap]"
    }
    return t
});
var B = V;

function H(e) {
    return null != e && "object" == typeof e
}

function X(e) {
    return H(e) && "[object Arguments]" == m(e)
}
var q = Object.prototype,
    G = q.hasOwnProperty,
    W = q.propertyIsEnumerable,
    K = X(function() {
        return arguments
    }()) ? X : function(e) {
        return H(e) && G.call(e, "callee") && !W.call(e, "callee")
    },
    Y = Array.isArray;

function $(e) {
    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
}

function z(e) {
    return null != e && $(e.length) && !g(e)
}
var Q = "object" == typeof exports && exports && !exports.nodeType && exports,
    J = Q && "object" == typeof module && module && !module.nodeType && module,
    Z = J && J.exports === Q ? c.Buffer : void 0,
    ee = (Z ? Z.isBuffer : void 0) || function() {
        return !1
    },
    te = {};

function ne(e) {
    return function(t) {
        return e(t)
    }
}
te["[object Float32Array]"] = te["[object Float64Array]"] = te["[object Int8Array]"] = te["[object Int16Array]"] = te["[object Int32Array]"] = te["[object Uint8Array]"] = te["[object Uint8ClampedArray]"] = te["[object Uint16Array]"] = te["[object Uint32Array]"] = !0, te["[object Arguments]"] = te["[object Array]"] = te["[object ArrayBuffer]"] = te["[object Boolean]"] = te["[object DataView]"] = te["[object Date]"] = te["[object Error]"] = te["[object Function]"] = te["[object Map]"] = te["[object Number]"] = te["[object Object]"] = te["[object RegExp]"] = te["[object Set]"] = te["[object String]"] = te["[object WeakMap]"] = !1;
var re = "object" == typeof exports && exports && !exports.nodeType && exports,
    ie = re && "object" == typeof module && module && !module.nodeType && module,
    oe = ie && ie.exports === re && s.process,
    se = function() {
        try {
            return ie && ie.require && ie.require("util").types || oe && oe.binding && oe.binding("util")
        } catch (xl) {}
    }(),
    ae = se && se.isTypedArray,
    ce = ae ? ne(ae) : function(e) {
        return H(e) && $(e.length) && !!te[m(e)]
    },
    ue = Object.prototype.hasOwnProperty;

function le(e) {
    if (null == e) return !0;
    if (z(e) && (Y(e) || "string" == typeof e || "function" == typeof e.splice || ee(e) || ce(e) || K(e))) return !e.length;
    var n = B(e);
    if ("[object Map]" == n || "[object Set]" == n) return !e.size;
    if (t(e)) return !o(e).length;
    for (var r in e)
        if (ue.call(e, r)) return !1;
    return !0
}
const de = {
        MANIFEST: "manifest",
        SEGMENT: "segment"
    },
    he = {
        method: "GET",
        async: !0,
        retry: 0,
        throwHttpErrors: !0,
        headers: {},
        hooks: {
            beforeRequest: [],
            beforeRetry: [],
            afterResponse: []
        },
        validateStatus: function(e) {
            return e >= 200 && e < 300
        },
        retryStatus: function(e) {
            return [408, 413, 429].includes(e) || e >= 500 && e < 600
        }
    };

function fe(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function _e(e, t, n) {
    return t && fe(e.prototype, t), n && fe(e, n), e
}

function pe(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
    }
    return n
}

function ve(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? me(Object(n), !0).forEach((function(t) {
            pe(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
    }
    return e
}

function ge(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function ye(e) {
    return (ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e)
    })(e)
}

function Ee(e, t) {
    return (Ee = Object.setPrototypeOf || function(e, t) {
        return e.__proto__ = t, e
    })(e, t)
}

function Te() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
    } catch (xl) {
        return !1
    }
}

function Se(e, t, n) {
    return (Se = Te() ? Reflect.construct : function(e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var i = new(Function.bind.apply(e, r));
        return n && Ee(i, n.prototype), i
    }).apply(null, arguments)
}

function be(e) {
    var t = "function" == typeof Map ? new Map : void 0;
    return (be = function(e) {
        if (null === e || ! function(e) {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
            }(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
        }

        function n() {
            return Se(e, arguments, ye(this).constructor)
        }
        return n.prototype = Object.create(e.prototype, {
            constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), Ee(n, e)
    })(e)
}

function Ae(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
            o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
}

function we(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function Ie(e) {
    return function(e) {
        if (Array.isArray(e)) return ke(e)
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
    }(e) || Re(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}

function Re(e, t) {
    if (e) {
        if ("string" == typeof e) return ke(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ke(e, t) : void 0
    }
}

function ke(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function Pe(e, t) {
    var n;
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (n = Re(e)) || t && e && "number" == typeof e.length) {
            n && (e = n);
            var r = 0;
            return function() {
                return r >= e.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: e[r++]
                }
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    return (n = e[Symbol.iterator]()).next.bind(n)
}

function De(e) {
    return e.filter((e, t, n) => n.indexOf(e) === t)
}

function Oe(e, t) {
    return e.reduce((e, n, r, i) => e.concat(t(n, r, i)), [])
}

function Ce(e) {
    return (t, ...n) => (n.forEach(n => {
        for (const r in n) {
            const i = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(t, r, Object.assign(i, e))
        }
    }), t)
}
const Le = Ce({
        enumerable: !1,
        configurable: !0,
        writeable: !1
    }),
    Ne = Ce({
        enumerable: !1,
        configurable: !1,
        writeable: !1
    }),
    Me = Ce({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    xe = e => new Promise((t, n) => setTimeout(t, e));

function Ue(e) {
    e.substring(0, e.lastIndexOf("/") + 1)
}
const Fe = e => new Promise((t, n) => {
        const r = document.createElement("script");
        r.src = e, r.addEventListener("load", t), r.addEventListener("error", e => n(e.error)), document.head.appendChild(r)
    }),
    je = e => Math.pow(e, 2),
    Ve = e => Math.sqrt(e),
    Be = (e, t) => (...n) => {
        [`%c${e}`, t].concat(n)
    },
    He = void 0 !== window.ManagedMediaSource ? window.ManagedMediaSource : window.MediaSource,
    Xe = e => e ? He : window.MediaSource,
    qe = e => "undefined" != typeof ManagedMediaSource && e instanceof ManagedMediaSource,
    Ge = e => "undefined" != typeof ManagedSourceBuffer && e instanceof ManagedSourceBuffer;

function We(e, ...t) {
    return t.reduce((e, t) => (Object.keys(t || {}).forEach(n => {
        const r = e[n],
            i = t[n];
        r && void 0 === i || (Array.isArray(i) ? e[n] = (r || []).concat(i) : (e => e && "object" == typeof e)(i) ? e[n] = We({}, r, i) : e[n] = i)
    }), e), e)
}

function Ke() {
    let e, t, n = new Promise((function(n, r) {
        e = n, t = r
    }));
    return n.resolve = e, n.reject = t, n
}

function Ye(e, t) {
    if (!t || !t.length) return 0;
    if (1 === t.length && t.end(0) - t.start(0) < 1e-6) return 0;
    let n = 0;
    for (let r = t.length - 1; r >= 0 && t.end(r) > e; --r) n += t.end(r) - Math.max(t.start(r), e);
    return n
}

function $e(e, t) {
    let n = e;
    for (let r = 0; r < t.length; r++)
        if (t.start(r) <= e && t.end(r) >= e) {
            n = t.end(r);
            break
        }
    return n - e
}

function ze() {
    return void 0 !== window.performance && "function" == typeof window.performance.now ? window.performance.now() : Date.now()
}

function Qe() {
    return Math.trunc(ze() / 1e3)
}

function Je(e) {
    return Qe() - e
}

function Ze(e) {
    return ze() - e
}
const et = e => Math.trunc(Date.now() / 1e3) - e;

function tt(e) {
    if ("object" != typeof e) return "";
    let t = [];
    for (let n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.length ? t.join("&") : ""
}

function nt(e) {
    return "string" != typeof e ? {} : e.replace("?", "").split("&").reduce((e, t) => {
        if (t.length > 0) {
            const n = t.substring(0, t.indexOf("=")),
                r = t.substring(t.indexOf("=") + 1);
            e[n] = decodeURIComponent(r)
        }
        return e
    }, {})
}

function rt(e) {
    const t = document.createElement("a");
    return t.href = e, t
}

function it(e, t) {
    const n = tt(t);
    let r = -1 === e.indexOf("?") ? "?" : "&";
    return `${e}${n?`${r}${n}`:""}`
}

function ot(e) {
    const t = e.split("://");
    if (2 !== t.length) return null;
    const n = t[1].split("/");
    if (n.length > 1) return n[0];
    const r = t[1].split("?");
    if (r.length > 1) return r[0];
    const i = t[1].split("#");
    return i.length > 1 ? i[0] : t[1]
}

function st() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e => (e ^ 16 * Math.random() >> e / 4).toString(16))
}

function at(e, t) {
    this.headers = {}, this.perfTimings = {}, We(this, t), this.ok = 2 == (this.status / 100 | 0), this.body = e, this.text = () => Promise.resolve(e), this.json = () => Promise.resolve(JSON.parse(e)), this.blob = () => Promise.resolve(new Blob([e])), this.arrayBuffer = () => Promise.resolve(e), this.clone = () => new at(e, this), this.isVimeoResponse = !0
}
let ct = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "The operation was aborted.") || this).name = "AbortError", t
        }
        return ge(t, e), t
    }(be(Error)),
    ut = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, t.statusText) || this).name = "HTTPError", n.response = t, n
        }
        return ge(t, e), t
    }(be(Error)),
    lt = function(e) {
        function t() {
            var t;
            return (t = e.call(this, "A network error occurred.") || this).name = "NetworkError", t
        }
        return ge(t, e), t
    }(be(Error)),
    dt = function(e) {
        function t(t) {
            var n;
            return (n = e.call(this, "Request timed out.") || this).name = "TimeoutError", n.timeoutMs = t, n
        }
        return ge(t, e), t
    }(be(Error));

function ht(e, t) {
    let {
        url: n,
        method: r,
        body: i,
        onDownloadProgress: o
    } = e, s = 100;
    return new Promise((function(a, c) {
        const u = t ? new t : new XMLHttpRequest,
            l = window.performance;
        u.open(r.toUpperCase(), n, e.async), e.timeout && (u.timeout = e.timeout), u.onload = function() {
            if (0 === u.status && (!u.responseURL || 0 !== u.responseURL.indexOf("file:"))) return;
            const e = {};
            u.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (t, n, r) => {
                e[n] = e[n] ? `${e[n]},${r}` : r
            });
            let t = {};
            if (window.performance && void 0 !== window.performance.getEntriesByType) {
                const e = window.performance.getEntriesByType("resource");
                if (e.length && e.length >= s && ("function" == typeof l.clearResourceTimings && l.clearResourceTimings(), "function" == typeof l.setResourceTimingBufferSize && (l.setResourceTimingBufferSize(500), s = 500)), e.length) {
                    const n = e.filter(e => e.name === u.responseURL).sort((e, t) => e.connectStart - t.connectStart);
                    n.length && (t = n[n.length - 1].toJSON())
                }
            }
            a(new at(u.response, {
                headers: e,
                statusText: u.statusText,
                status: u.status,
                url: u.responseURL,
                perfTimings: t
            }))
        }, u.onabort = function() {
            c(new ct)
        }, u.onerror = function() {
            c(new lt)
        }, u.ontimeout = function() {
            c(new dt(e.timeout))
        }, "function" == typeof o && u.addEventListener("progress", o);
        for (let t in e.headers) u.setRequestHeader(t, e.headers[t]);
        e.withCredentials && (u.withCredentials = !0), e.responseType && (u.responseType = e.responseType), e.abort = u.abort.bind(u), u.send(i || null)
    }))
}

function ft() {}

function _t(e, t, n) {
    if (!e.s) {
        if (n instanceof pt) {
            if (!n.s) return void(n.o = _t.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(_t.bind(null, e, t), _t.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const pt = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    _t(r, 1, e(this.v))
                } catch (xl) {
                    _t(r, 2, xl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? _t(r, 1, t ? t(i) : i) : n ? _t(r, 1, n(i)) : _t(r, 2, i)
            } catch (xl) {
                _t(r, 2, xl)
            }
        }, r
    }, e
}();

function mt(e) {
    return e instanceof pt && 1 & e.s
}

function vt(e) {
    const t = function(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (xl) {
                return Promise.reject(xl)
            }
        }
    }((function(r) {
        return function(e, t) {
            try {
                var n = e()
            } catch (xl) {
                return t(xl)
            }
            return n && n.then ? n.then(void 0, t) : n
        }(r, (function(i) {
            let o = !1;
            n++;
            const s = function(t) {
                if (!e.retryAbortErrors && t instanceof ct) return 0;
                if (t instanceof dt) return 0;
                if (n >= e.retry) return 0;
                if (t instanceof ut) {
                    if (!e.retryStatus(t.response.status)) return 0;
                    const n = t.response.headers["retry-after"];
                    if (n && e.retryStatus(t.response.status)) {
                        let e = Number(n);
                        return isNaN(e) ? e = Date.parse(n) - Date.now() : e *= 1e3, e
                    }
                    if (413 === t.response.status) return 0
                }
                return .3 * 2 ** (n - 1) * 1e3
            }(i);
            return function(a, c) {
                var u = function() {
                    if (0 !== s && n > 0) return function(e, t, n) {
                        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                    }(xe(s), (function() {
                        const s = e.hooks.beforeRetry || [];
                        return function(e, t) {
                            return e && e.then ? e.then(t) : t()
                        }(function(e, t, n) {
                            var r, i, o = -1;
                            return function n(s) {
                                try {
                                    for (; ++o < e.length;)
                                        if ((s = t(o)) && s.then) {
                                            if (!mt(s)) return void s.then(n, i || (i = _t.bind(null, r = new pt, 2)));
                                            s = s.v
                                        }
                                    r ? _t(r, 1, s) : r = s
                                } catch (xl) {
                                    _t(r || (r = new pt), 2, xl)
                                }
                            }(), r
                        }(s, (function(t) {
                            return function(e, t) {
                                return e && e.then ? e.then(ft) : Promise.resolve()
                            }((0, s[t])(e, i, n))
                        })), (function() {
                            return o = !0, t(r)
                        }))
                    }))
                }();
                return u && u.then ? u.then(c) : c(u)
            }(0, (function(t) {
                if (o) return t;
                if (e.throwHttpErrors) throw i
            }))
        }))
    }));
    let n = 0;
    return t
}

function gt(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function yt(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }
}

function Et(e, t, n) {
    if (!e.s) {
        if (n instanceof Tt) {
            if (!n.s) return void(n.o = Et.bind(null, e, t));
            1 & t && (t = n.s), n = n.v
        }
        if (n && n.then) return void n.then(Et.bind(null, e, t), Et.bind(null, e, 2));
        e.s = t, e.v = n;
        const r = e.o;
        r && r(e)
    }
}
const Tt = function() {
    function e() {}
    return e.prototype.then = function(t, n) {
        const r = new e,
            i = this.s;
        if (i) {
            const e = 1 & i ? t : n;
            if (e) {
                try {
                    Et(r, 1, e(this.v))
                } catch (xl) {
                    Et(r, 2, xl)
                }
                return r
            }
            return this
        }
        return this.o = function(e) {
            try {
                const i = e.v;
                1 & e.s ? Et(r, 1, t ? t(i) : i) : n ? Et(r, 1, n(i)) : Et(r, 2, i)
            } catch (xl) {
                Et(r, 2, xl)
            }
        }, r
    }, e
}();

function St(e) {
    return e instanceof Tt && 1 & e.s
}

function bt(e, t, n) {
    var r, i, o = -1;
    return function s(a) {
        try {
            for (; ++o < e.length && (!n || !n());)
                if ((a = t(o)) && a.then) {
                    if (!St(a)) return void a.then(s, i || (i = Et.bind(null, r = new Tt, 2)));
                    a = a.v
                }
            r ? Et(r, 1, a) : r = a
        } catch (xl) {
            Et(r || (r = new Tt), 2, xl)
        }
    }(), r
}

function At(e, t) {
    return e && e.then ? e.then(t) : t(e)
}
const wt = ["get", "post", "put", "patch", "head", "delete"],
    It = {
        json: "application/json",
        text: "text/plain",
        arrayBuffer: "*/*",
        blob: "*/*"
    },
    Rt = ["get"];

function kt(e, t) {
    const n = yt((function() {
        let e = !1,
            n = !1;
        const r = t.hooks.beforeRequest || [];
        return At(bt(r, (function(i) {
            return gt((0, r[i])(t), (function(r) {
                return r instanceof Pt ? (t = r, void(n = !0)) : (null == r ? void 0 : r.isVimeoResponse) ? (e = !0, Promise.resolve(r).then(Dt(t))) : void 0
            }))
        }), (function() {
            return n || e
        })), (function(n) {
            return e ? n : ht(t).then(Dt(t))
        }))
    }));
    t = new Pt(e, t);
    const {
        method: r,
        json: i,
        jwt: o,
        searchParams: s
    } = t;
    if (i && (t.headers["Content-Type"] = It.json, t.body = JSON.stringify(i)), o && (t.headers.Authorization = `jwt ${o}`), s) {
        const [e, n] = t.url.split("?");
        t.url = it(e, ve(ve({}, nt(n)), s))
    }
    const a = -1 !== Rt.indexOf(r.toLowerCase()) ? vt(t)(n) : n();
    for (const c in It) a[c] = yt((function() {
        return t.headers["Content-Type"] = It[c], gt(a, (function(e) {
            return e.clone()[c]()
        }))
    }));
    return function e(t, n) {
        const r = t.then.bind(t);
        return Object.assign(t, {
            abort: n,
            then: (...t) => e(r.apply(void 0, t), n)
        })
    }(a, () => t.abort())
}

function Pt(e, t) {
    We(this, he, e = "string" == typeof e ? {
        url: e
    } : e, t)
}

function Dt(e) {
    const {
        validateStatus: t,
        throwHttpErrors: n,
        hooks: r
    } = e;
    return yt((function(i) {
        const o = r.afterResponse || [];
        return At(bt(o, (function(t) {
            return gt((0, o[t])(e, i.clone()), (function(e) {
                e instanceof at && (i = e)
            }))
        })), (function() {
            if (!t || t(i.status)) return i;
            if (n) throw new ut(i);
            return i
        }))
    }))
}
wt.forEach((function(e) {
    return kt[e] = (t, n) => kt(t, ve({
        method: e
    }, n)), kt[e]
}));
const {
    get: Ot,
    post: Ct,
    put: Lt,
    patch: Nt,
    head: Mt
} = kt, xt = {
    ARRAY_BUFFER: "arraybuffer"
};
var Ut = Object.freeze({
    __proto__: null,
    ContentTypes: de,
    defaults: he,
    requestMethods: wt,
    responseTypes: It,
    retryMethods: Rt,
    request: kt,
    Request: Pt,
    get: Ot,
    post: Ct,
    put: Lt,
    patch: Nt,
    head: Mt,
    Response: at,
    ResponseTypes: xt,
    AbortError: ct,
    HTTPError: ut,
    NetworkError: lt,
    TimeoutError: dt,
    xhr: ht
});
const Ft = navigator.userAgent.toLowerCase(),
    jt = ["googlebot", "google-inspectiontool"];

function Vt(e) {
    e = e.toLowerCase();
    const t = new RegExp(e).test(Ft);
    return "safari" === e ? t && new RegExp("version").test(Ft) : t
}

function Bt(e) {
    const t = document.createElement("div"),
        n = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + ["Webkit", "Moz", "O", "ms"].join(n + " ") + n).split(" ");
    for (let i in r) {
        const e = r[i];
        if (void 0 !== t.style[e]) return e
    }
    return e
}
const Ht = !!Vt("android") && (parseFloat(Ft.replace(/^.* android (\d+)\.(\d+).*$/, "$1.$2")) || !0),
    Xt = window.devicePixelRatio || 1,
    qt = !(!Vt("windows phone") && !Vt("iemobile")) && (parseFloat(Ft.replace(/^.* windows phone (os )?(\d+)\.(\d+).*$/, "$2.$3")) || !0),
    Gt = !!Vt("msie") && parseFloat(Ft.replace(/^.*msie (\d+).*$/, "$1")),
    Wt = !!Vt("trident") && parseFloat(Ft.replace(/^.*trident\/(\d+)\.(\d+).*$/, "$1.$2")) + 4,
    Kt = Vt("ipad;") || Vt("iphone;") || Vt("ipod touch;") ? parseFloat(Ft.replace(/^.* os (\d+)_(\d+).*$/, "$1.$2")) : navigator.userAgent.includes("Mac") && "ontouchend" in document,
    Yt = "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
    $t = Vt("opera") || Vt("opr"),
    zt = /^Mozilla\/5\.0 \(.* Mac OS X.*\(KHTML, like Gecko\)(?: Mobile\/[\S]*|)$/i.test(Ft),
    Qt = Vt("safari") && Vt("apple") && !Vt("chrome") && !Vt("android");

function Jt(e) {
    if (!Qt) return !1;
    const t = e.split("."),
        n = function() {
            if (!Vt("safari")) return [];
            const e = Ft.split(" ").find((function(e) {
                return /version\//.test(e)
            }));
            return e ? e.replace("version/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }();
    for (let r = 0; r < 3; r++) {
        const e = parseInt(t[r], 10) || 0,
            i = n[r] || 0;
        if (e < i) return !0;
        if (e > i) return !1
    }
    return !0
}
const Zt = {
        autoplayPolicy: Jt("11"),
        hevc: Jt("11"),
        dolbyVision: Jt("14.1"),
        spatial: Jt("11.0.2"),
        fullscreenRequiresDataLoaded: Jt("17.2")
    },
    en = {
        airPlay: "WebKitPlaybackTargetAvailabilityEvent" in window,
        android: Ht,
        appleMail: zt,
        hasAutoplayPolicy: Ht || Kt || Zt.autoplayPolicy || function() {
            if (!Vt("chrome")) return [];
            const e = Ft.split(" ").find((function(e) {
                return Kt ? /CriOS\//.test(e) : /chrome\//.test(e)
            }));
            return e ? e.replace("chrome/", "").split(".").map((function(e) {
                return parseInt(e, 10)
            })) : []
        }()[0] >= 66,
        iOS: Kt,
        iPadOS: Yt,
        mobileAndroid: Ht && Vt("mobile"),
        browser: {
            bb10: Vt("bb10"),
            chrome: Vt("chrome"),
            firefox: Vt("firefox"),
            ie: Gt || Wt,
            edge: Vt("edge"),
            opera: $t,
            safari: Qt,
            chromium: "chrome" in window
        },
        devicePixelRatio: Xt,
        iPhone: Vt("iphone;") || Vt("ipod touch;") || Vt("ipod;"),
        iPad: Vt("ipad;"),
        iPadNonRetina: Vt("ipad;") && Xt < 2,
        mac: Vt("mac os"),
        pictureInPictureSupportType: function() {
            if ("pictureInPictureEnabled" in document) return "pip-api";
            const e = document.createElement("video");
            return !("function" != typeof e.webkitSetPresentationMode || !e.webkitSupportsPresentationMode("picture-in-picture")) && "webkit-presentation-mode"
        }(),
        pointerEvents: window.navigator.pointerEnabled || window.navigator.msPointerEnabled || !1,
        passiveEvents: function() {
            let e = !1;
            try {
                const t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("testPassive", null, t), window.removeEventListener("testPassive", null, t)
            } catch (xl) {}
            return e
        }(),
        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch || Vt("windows phone") || window.navigator.maxTouchPoints > 1 || window.navigator.msMaxTouchPoints || !1,
        transformProperty: Bt("transform"),
        transitionProperty: Bt("transition"),
        webp: function() {
            const e = document.createElement("canvas");
            return !(!e.getContext || !e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
        }(),
        windowsPhone: qt,
        mediaCapabilities: "mediaCapabilities" in navigator,
        isGoogleBot: (() => {
            const e = Ft.toLowerCase();
            return jt.some(t => e.includes(t))
        })(),
        storageAccessAPI: "requestStorageAccess" in document && "hasStorageAccess" in document,
        clipboardAPI: "clipboard" in navigator && "write" in navigator.clipboard,
        videoContentPreload: !Vt("iphone"),
        intersectionObserver: "IntersectionObserver" in window
    },
    tn = /mac os x 10_13/.test(Ft),
    nn = en.iOS && en.iOS >= 11,
    rn = "undefined" != typeof matchMedia && (matchMedia("(color-gamut: p3)").matches && screen.pixelDepth > 24 || matchMedia("(dynamic-range: high), (video-dynamic-range: high)").matches);

function on(e = "hvc1") {
    return void 0 !== He ? He.isTypeSupported(`video/mp4; codecs="${e}"`) : Zt.hevc && (tn || nn)
}

function sn() {
    return !(en.iOS || en.iPad || en.browser.ie || Vt("safari") && !Zt.spatial)
}

function an(e) {
    return "symbol" == typeof e || H(e) && "[object Symbol]" == m(e)
}
en.hevc = on(), en.hevcMain10 = on("hvc1.2.4.H150.90"), en.hdr = rn, en.dolbyVision = function() {
    let e = void 0 !== He && He.isTypeSupported('video/mp4; codecs="dvh1"');
    if (!e) {
        const t = document.createElement("video");
        "canPlayType" in t && (e = "probably" === t.canPlayType('video/mp4; codecs="dvh1"'))
    }
    return !((Yt || en.iOS) && !Zt.dolbyVision) && e
}(), en.vp9hdr = (window.matchMedia("(color-gamut: p3)").matches || window.matchMedia("(color-gamut: rec2020)").matches) && screen.colorDepth >= 48 && (He.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.00"') || He.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.16.09.01"') || He.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.00"') || He.isTypeSupported('video/webm; codecs="vp09.02.10.10.01.09.18.09.01"')), en.av1 = void 0 !== He && He.isTypeSupported('video/mp4; codecs="av01.0.31M.08.0.110.01.01.01.0"'), en.webvr = !!(window.navigator && "getVRDisplays" in window.navigator), en.webxr = !!(window.navigator && "xr" in window.navigator && "supportsSession" in window.navigator.xr), en.spatialPlayback = sn(), en.spatialHEVC = !en.browser.safari && sn() && on(), en.stereoscopic = en.spatialPlayback && en.mobileAndroid, en.fullscreenRequiresDataLoaded = en.iOS >= 17 || en.iPadOS && Zt.fullscreenRequiresDataLoaded;
var cn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    un = /^\w*$/,
    ln = P(Object, "create"),
    dn = Object.prototype.hasOwnProperty,
    hn = Object.prototype.hasOwnProperty;

function fn(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function _n(e, t) {
    return e === t || e != e && t != t
}

function pn(e, t) {
    for (var n = e.length; n--;)
        if (_n(e[n][0], t)) return n;
    return -1
}
fn.prototype.clear = function() {
    this.__data__ = ln ? ln(null) : {}, this.size = 0
}, fn.prototype.delete = function(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0, t
}, fn.prototype.get = function(e) {
    var t = this.__data__;
    if (ln) {
        var n = t[e];
        return "__lodash_hash_undefined__" === n ? void 0 : n
    }
    return dn.call(t, e) ? t[e] : void 0
}, fn.prototype.has = function(e) {
    var t = this.__data__;
    return ln ? void 0 !== t[e] : hn.call(t, e)
}, fn.prototype.set = function(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1, n[e] = ln && void 0 === t ? "__lodash_hash_undefined__" : t, this
};
var mn = Array.prototype.splice;

function vn(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function gn(e, t) {
    var n = e.__data__;
    return function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
}

function yn(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}

function En(e, t) {
    if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
    var n = function n() {
        var r = arguments,
            i = t ? t.apply(this, r) : r[0],
            o = n.cache;
        if (o.has(i)) return o.get(i);
        var s = e.apply(this, r);
        return n.cache = o.set(i, s) || o, s
    };
    return n.cache = new(En.Cache || yn), n
}
vn.prototype.clear = function() {
    this.__data__ = [], this.size = 0
}, vn.prototype.delete = function(e) {
    var t = this.__data__,
        n = pn(t, e);
    return !(n < 0 || (n == t.length - 1 ? t.pop() : mn.call(t, n, 1), --this.size, 0))
}, vn.prototype.get = function(e) {
    var t = this.__data__,
        n = pn(t, e);
    return n < 0 ? void 0 : t[n][1]
}, vn.prototype.has = function(e) {
    return pn(this.__data__, e) > -1
}, vn.prototype.set = function(e, t) {
    var n = this.__data__,
        r = pn(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this
}, yn.prototype.clear = function() {
    this.size = 0, this.__data__ = {
        hash: new fn,
        map: new(O || vn),
        string: new fn
    }
}, yn.prototype.delete = function(e) {
    var t = gn(this, e).delete(e);
    return this.size -= t ? 1 : 0, t
}, yn.prototype.get = function(e) {
    return gn(this, e).get(e)
}, yn.prototype.has = function(e) {
    return gn(this, e).has(e)
}, yn.prototype.set = function(e, t) {
    var n = gn(this, e),
        r = n.size;
    return n.set(e, t), this.size += n.size == r ? 0 : 1, this
}, En.Cache = yn;
var Tn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Sn = /\\(\\)?/g,
    bn = function(e) {
        var t = En((function(e) {
                var t = [];
                return 46 === e.charCodeAt(0) && t.push(""), e.replace(Tn, (function(e, n, r, i) {
                    t.push(r ? i.replace(Sn, "$1") : n || e)
                })), t
            }), (function(e) {
                return 500 === n.size && n.clear(), e
            })),
            n = t.cache;
        return t
    }(),
    An = u ? u.prototype : void 0,
    wn = An ? An.toString : void 0;

function In(e) {
    if ("string" == typeof e) return e;
    if (Y(e)) return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }(e, In) + "";
    if (an(e)) return wn ? wn.call(e) : "";
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Rn(e) {
    return null == e ? "" : In(e)
}

function kn(e, t) {
    return Y(e) ? e : function(e, t) {
        if (Y(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !an(e)) || un.test(e) || !cn.test(e) || null != t && e in Object(t)
    }(e, t) ? [e] : bn(Rn(e))
}

function Pn(e) {
    if ("string" == typeof e || an(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
}

function Dn(e, t) {
    for (var n = 0, r = (t = kn(t, e)).length; null != e && n < r;) e = e[Pn(t[n++])];
    return n && n == r ? e : void 0
}

function On(e, t, n) {
    var r = null == e ? void 0 : Dn(e, t);
    return void 0 === r ? n : r
}
var Cn = "object" == typeof global && global && global.Object === Object && global,
    Ln = "object" == typeof self && self && self.Object === Object && self,
    Nn = (Cn || Ln || Function("return this")()).Symbol,
    Mn = Object.prototype,
    xn = Mn.hasOwnProperty,
    Un = Mn.toString,
    Fn = Nn ? Nn.toStringTag : void 0,
    jn = Object.prototype.toString,
    Vn = Nn ? Nn.toStringTag : void 0;
var Bn = function(e, t) {
        return function(n) {
            return e(t(n))
        }
    }(Object.getPrototypeOf, Object),
    Hn = Function.prototype,
    Xn = Object.prototype,
    qn = Hn.toString,
    Gn = Xn.hasOwnProperty,
    Wn = qn.call(Object),
    Kn = function(e) {
        var t, n = ("undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")()).Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }();

function Yn(e, t, n) {
    var r;
    if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
        if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
        return n(Yn)(e, t)
    }
    if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
    var i = e,
        o = t,
        s = [],
        a = s,
        c = !1;

    function u() {
        a === s && (a = s.slice())
    }

    function l() {
        return o
    }

    function d(e) {
        if ("function" != typeof e) throw new Error("Expected listener to be a function.");
        var t = !0;
        return u(), a.push(e),
            function() {
                if (t) {
                    t = !1, u();
                    var n = a.indexOf(e);
                    a.splice(n, 1)
                }
            }
    }

    function h(e) {
        if (! function(e) {
                if (! function(e) {
                        return null != e && "object" == typeof e
                    }(e) || "[object Object]" != function(e) {
                        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Vn && Vn in Object(e) ? function(e) {
                            var t = xn.call(e, Fn),
                                n = e[Fn];
                            try {
                                e[Fn] = void 0;
                                var r = !0
                            } catch (xl) {}
                            var i = Un.call(e);
                            return r && (t ? e[Fn] = n : delete e[Fn]), i
                        }(e) : function(e) {
                            return jn.call(e)
                        }(e)
                    }(e)) return !1;
                var t = Bn(e);
                if (null === t) return !0;
                var n = Gn.call(t, "constructor") && t.constructor;
                return "function" == typeof n && n instanceof n && qn.call(n) == Wn
            }(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (c) throw new Error("Reducers may not dispatch actions.");
        try {
            c = !0, o = i(o, e)
        } finally {
            c = !1
        }
        for (var t = s = a, n = 0; n < t.length; n++)(0, t[n])();
        return e
    }
    return h({
        type: "@@redux/INIT"
    }), (r = {
        dispatch: h,
        subscribe: d,
        getState: l,
        replaceReducer: function(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            i = e, h({
                type: "@@redux/INIT"
            })
        }
    })[Kn] = function() {
        var e, t = d;
        return (e = {
            subscribe: function(e) {
                if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                function n() {
                    e.next && e.next(l())
                }
                return n(), {
                    unsubscribe: t(n)
                }
            }
        })[Kn] = function() {
            return this
        }, e
    }, r
}

function $n() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return 0 === t.length ? function(e) {
        return e
    } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }))
}
var zn = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
};

function Qn() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(e) {
        return function(n, r, i) {
            var o, s = e(n, r, i),
                a = s.dispatch,
                c = {
                    getState: s.getState,
                    dispatch: function(e) {
                        return a(e)
                    }
                };
            return o = t.map((function(e) {
                return e(c)
            })), a = $n.apply(void 0, o)(s.dispatch), zn({}, s, {
                dispatch: a
            })
        }
    }
}
var Jn = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function Zn(e, t, n) {
    return e(n = {
        path: t,
        exports: {},
        require: function(e, t) {
            return function() {
                throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
            }(null == t && n.path)
        }
    }, n.exports), n.exports
}
var er = Zn((function(e, t) {
    e.exports = function(e) {
        var t = {};
        return (e = e || {}).prependOn = function(t, n) {
            return e.on(t, n, !0)
        }, e.eventNames = function() {
            return Object.keys(t)
        }, e.on = function(n, r, i) {
            for (var o = 0, s = (n = [].concat(n)).length; o < s; o++) {
                var a = n[o];
                if (!a) throw new Error("Tried to listen for an undefined event.");
                t[a] || (t[a] = []), i ? t[a].unshift(r) : t[a].push(r)
            }
            return e
        }, e.once = function(t, n, r) {
            function i() {
                n.apply(e.off(t, i), arguments)
            }
            return i.handler = n, e.on(t, i, r)
        }, e.off = function(n, r) {
            if (!n) return t = {}, e;
            for (var i = 0, o = (n = [].concat(n)).length; i < o; i++) {
                var s = n[i];
                if (!s) throw new Error("Tried to remove an undefined event.");
                if (s in t)
                    if (r) {
                        var a = t[s].indexOf(r);
                        if (-1 === a)
                            for (var c = 0, u = t[s].length; c < u; c++)
                                if (t[s][c].handler === r) {
                                    a = i;
                                    break
                                }
                        if (-1 === a) return e;
                        t[s].splice(a, 1)
                    } else delete t[s]
            }
            return e
        }, e.fire = function(n) {
            if (!n) throw new Error("Tried to fire an undefined event.");
            if (n in t)
                for (var r = t[n].slice(0), i = 0, o = r.length; i < o; i++)
                    if (r[i].apply(e, r.slice.call(arguments, 1)), e.__isHalted) {
                        delete e.__isHalted;
                        break
                    }
            return e
        }, e.halt = function() {
            return e.__isHalted = !0, e
        }, e
    }
}));

function tr(e) {
    var t = this.__data__ = new vn(e);
    this.size = t.size
}
tr.prototype.clear = function() {
    this.__data__ = new vn, this.size = 0
}, tr.prototype.delete = function(e) {
    var t = this.__data__,
        n = t.delete(e);
    return this.size = t.size, n
}, tr.prototype.get = function(e) {
    return this.__data__.get(e)
}, tr.prototype.has = function(e) {
    return this.__data__.has(e)
}, tr.prototype.set = function(e, t) {
    var n = this.__data__;
    if (n instanceof vn) {
        var r = n.__data__;
        if (!O || r.length < 199) return r.push([e, t]), this.size = ++n.size, this;
        n = this.__data__ = new yn(r)
    }
    return n.set(e, t), this.size = n.size, this
};
var nr = function() {
    try {
        var e = P(Object, "defineProperty");
        return e({}, "", {}), e
    } catch (xl) {}
}();

function rr(e, t, n) {
    "__proto__" == t && nr ? nr(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
var ir = Object.prototype.hasOwnProperty;

function or(e, t, n) {
    var r = e[t];
    ir.call(e, t) && _n(r, n) && (void 0 !== n || t in e) || rr(e, t, n)
}

function sr(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var o = -1, s = t.length; ++o < s;) {
        var a = t[o],
            c = r ? r(n[a], e[a], a, n, e) : void 0;
        void 0 === c && (c = e[a]), i ? rr(n, a, c) : or(n, a, c)
    }
    return n
}
var ar = /^(?:0|[1-9]\d*)$/;

function cr(e, t) {
    var n = typeof e;
    return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && ar.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var ur = Object.prototype.hasOwnProperty;

function lr(e, t) {
    var n = Y(e),
        r = !n && K(e),
        i = !n && !r && ee(e),
        o = !n && !r && !i && ce(e),
        s = n || r || i || o,
        a = s ? function(e, t) {
            for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
            return r
        }(e.length, String) : [],
        c = a.length;
    for (var u in e) !t && !ur.call(e, u) || s && ("length" == u || i && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || cr(u, c)) || a.push(u);
    return a
}

function dr(e) {
    return z(e) ? lr(e) : o(e)
}
var hr = Object.prototype.hasOwnProperty;

function fr(e) {
    return z(e) ? lr(e, !0) : function(e) {
        if (!v(e)) return function(e) {
            var t = [];
            if (null != e)
                for (var n in Object(e)) t.push(n);
            return t
        }(e);
        var n = t(e),
            r = [];
        for (var i in e)("constructor" != i || !n && hr.call(e, i)) && r.push(i);
        return r
    }(e)
}
var _r = "object" == typeof exports && exports && !exports.nodeType && exports,
    pr = _r && "object" == typeof module && module && !module.nodeType && module,
    mr = pr && pr.exports === _r ? c.Buffer : void 0,
    vr = mr ? mr.allocUnsafe : void 0;

function gr(e, t) {
    if (t) return e.slice();
    var n = e.length,
        r = vr ? vr(n) : new e.constructor(n);
    return e.copy(r), r
}

function yr(e, t) {
    var n = -1,
        r = e.length;
    for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
    return t
}

function Er() {
    return []
}
var Tr = Object.prototype.propertyIsEnumerable,
    Sr = Object.getOwnPropertySymbols,
    br = Sr ? function(e) {
        return null == e ? [] : (e = Object(e), function(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
                var s = e[n];
                t(s) && (o[i++] = s)
            }
            return o
        }(Sr(e), (function(t) {
            return Tr.call(e, t)
        })))
    } : Er;

function Ar(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
    return e
}
var wr = n(Object.getPrototypeOf, Object),
    Ir = Object.getOwnPropertySymbols ? function(e) {
        for (var t = []; e;) Ar(t, br(e)), e = wr(e);
        return t
    } : Er;

function Rr(e, t, n) {
    var r = t(e);
    return Y(e) ? r : Ar(r, n(e))
}

function kr(e) {
    return Rr(e, dr, br)
}

function Pr(e) {
    return Rr(e, fr, Ir)
}
var Dr = Object.prototype.hasOwnProperty,
    Or = c.Uint8Array;

function Cr(e) {
    var t = new e.constructor(e.byteLength);
    return new Or(t).set(new Or(e)), t
}
var Lr = /\w*$/,
    Nr = u ? u.prototype : void 0,
    Mr = Nr ? Nr.valueOf : void 0;

function xr(e, t) {
    var n = t ? Cr(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length)
}
var Ur = Object.create,
    Fr = function() {
        function e() {}
        return function(t) {
            if (!v(t)) return {};
            if (Ur) return Ur(t);
            e.prototype = t;
            var n = new e;
            return e.prototype = void 0, n
        }
    }();

function jr(e) {
    return "function" != typeof e.constructor || t(e) ? {} : Fr(wr(e))
}
var Vr = se && se.isMap,
    Br = Vr ? ne(Vr) : function(e) {
        return H(e) && "[object Map]" == B(e)
    },
    Hr = se && se.isSet,
    Xr = Hr ? ne(Hr) : function(e) {
        return H(e) && "[object Set]" == B(e)
    },
    qr = {};

function Gr(e, t, n, r, i, o) {
    var s, a = 1 & t,
        c = 2 & t,
        u = 4 & t;
    if (n && (s = i ? n(e, r, i, o) : n(e)), void 0 !== s) return s;
    if (!v(e)) return e;
    var l = Y(e);
    if (l) {
        if (s = function(e) {
                var t = e.length,
                    n = new e.constructor(t);
                return t && "string" == typeof e[0] && Dr.call(e, "index") && (n.index = e.index, n.input = e.input), n
            }(e), !a) return yr(e, s)
    } else {
        var d = B(e),
            h = "[object Function]" == d || "[object GeneratorFunction]" == d;
        if (ee(e)) return gr(e, a);
        if ("[object Object]" == d || "[object Arguments]" == d || h && !i) {
            if (s = c || h ? {} : jr(e), !a) return c ? function(e, t) {
                return sr(e, Ir(e), t)
            }(e, function(e, t) {
                return e && sr(t, fr(t), e)
            }(s, e)) : function(e, t) {
                return sr(e, br(e), t)
            }(e, function(e, t) {
                return e && sr(t, dr(t), e)
            }(s, e))
        } else {
            if (!qr[d]) return i ? e : {};
            s = function(e, t, n) {
                var r = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return Cr(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new r(+e);
                    case "[object DataView]":
                        return function(e, t) {
                            var n = t ? Cr(e.buffer) : e.buffer;
                            return new e.constructor(n, e.byteOffset, e.byteLength)
                        }(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return xr(e, n);
                    case "[object Map]":
                        return new r;
                    case "[object Number]":
                    case "[object String]":
                        return new r(e);
                    case "[object RegExp]":
                        return function(e) {
                            var t = new e.constructor(e.source, Lr.exec(e));
                            return t.lastIndex = e.lastIndex, t
                        }(e);
                    case "[object Set]":
                        return new r;
                    case "[object Symbol]":
                        return function(e) {
                            return Mr ? Object(Mr.call(e)) : {}
                        }(e)
                }
            }(e, d, a)
        }
    }
    o || (o = new tr);
    var f = o.get(e);
    if (f) return f;
    o.set(e, s), Xr(e) ? e.forEach((function(r) {
        s.add(Gr(r, t, n, r, e, o))
    })) : Br(e) && e.forEach((function(r, i) {
        s.set(i, Gr(r, t, n, i, e, o))
    }));
    var _ = l ? void 0 : (u ? c ? Pr : kr : c ? fr : dr)(e);
    return function(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n););
    }(_ || e, (function(r, i) {
        _ && (r = e[i = r]), or(s, i, Gr(r, t, n, i, e, o))
    })), s
}

function Wr(e) {
    return Gr(e, 5)
}

function Kr(e, t, n) {
    switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
    }
    return e.apply(t, n)
}

function Yr(e) {
    return e
}
qr["[object Arguments]"] = qr["[object Array]"] = qr["[object ArrayBuffer]"] = qr["[object DataView]"] = qr["[object Boolean]"] = qr["[object Date]"] = qr["[object Float32Array]"] = qr["[object Float64Array]"] = qr["[object Int8Array]"] = qr["[object Int16Array]"] = qr["[object Int32Array]"] = qr["[object Map]"] = qr["[object Number]"] = qr["[object Object]"] = qr["[object RegExp]"] = qr["[object Set]"] = qr["[object String]"] = qr["[object Symbol]"] = qr["[object Uint8Array]"] = qr["[object Uint8ClampedArray]"] = qr["[object Uint16Array]"] = qr["[object Uint32Array]"] = !0, qr["[object Error]"] = qr["[object Function]"] = qr["[object WeakMap]"] = !1;
var $r = Math.max;

function zr(e, t, n) {
    return t = $r(void 0 === t ? e.length - 1 : t, 0),
        function() {
            for (var r = arguments, i = -1, o = $r(r.length - t, 0), s = Array(o); ++i < o;) s[i] = r[t + i];
            i = -1;
            for (var a = Array(t + 1); ++i < t;) a[i] = r[i];
            return a[t] = n(s), Kr(e, this, a)
        }
}

function Qr(e) {
    return function() {
        return e
    }
}
var Jr = nr ? function(e, t) {
        return nr(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Qr(t),
            writable: !0
        })
    } : Yr,
    Zr = Date.now,
    ei = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var r = Zr(),
                i = 16 - (r - n);
            if (n = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }(Jr);

function ti(e, t) {
    return ei(zr(e, t, Yr), e + "")
}

function ni(e, t, n) {
    (void 0 === n || _n(e[t], n)) && (void 0 !== n || t in e) || rr(e, t, n)
}
var ri = function(e, t, n) {
        for (var r = -1, i = Object(e), o = n(e), s = o.length; s--;) {
            var a = o[++r];
            if (!1 === t(i[a], a, i)) break
        }
        return e
    },
    ii = Function.prototype,
    oi = Object.prototype,
    si = ii.toString,
    ai = oi.hasOwnProperty,
    ci = si.call(Object);

function ui(e) {
    if (!H(e) || "[object Object]" != m(e)) return !1;
    var t = wr(e);
    if (null === t) return !0;
    var n = ai.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n instanceof n && si.call(n) == ci
}

function li(e, t) {
    if (("constructor" !== t || "function" != typeof e[t]) && "__proto__" != t) return e[t]
}

function di(e, t, n, r, i) {
    e !== t && ri(t, (function(o, s) {
        if (i || (i = new tr), v(o)) ! function(e, t, n, r, i, o, s) {
            var a = li(e, n),
                c = li(t, n),
                u = s.get(c);
            if (u) ni(e, n, u);
            else {
                var l = o ? o(a, c, n + "", e, t, s) : void 0,
                    d = void 0 === l;
                if (d) {
                    var h = Y(c),
                        f = !h && ee(c),
                        _ = !h && !f && ce(c);
                    l = c, h || f || _ ? Y(a) ? l = a : function(e) {
                        return H(e) && z(e)
                    }(a) ? l = yr(a) : f ? (d = !1, l = gr(c, !0)) : _ ? (d = !1, l = xr(c, !0)) : l = [] : ui(c) || K(c) ? (l = a, K(a) ? l = function(e) {
                        return sr(e, fr(e))
                    }(a) : v(a) && !g(a) || (l = jr(c))) : d = !1
                }
                d && (s.set(c, l), i(l, c, r, o, s), s.delete(c)), ni(e, n, l)
            }
        }(e, t, s, n, di, r, i);
        else {
            var a = r ? r(li(e, s), o, s + "", e, t, i) : void 0;
            void 0 === a && (a = o), ni(e, s, a)
        }
    }), fr)
}

function hi(e, t, n, r, i, o) {
    return v(e) && v(t) && (o.set(t, e), di(e, t, void 0, hi, o), o.delete(t)), e
}

function fi(e) {
    return ti((function(t, n) {
        var r = -1,
            i = n.length,
            o = i > 1 ? n[i - 1] : void 0,
            s = i > 2 ? n[2] : void 0;
        for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, s && function(e, t, n) {
                if (!v(n)) return !1;
                var r = typeof t;
                return !!("number" == r ? z(n) && cr(t, n.length) : "string" == r && t in n) && _n(n[t], e)
            }(n[0], n[1], s) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
            var a = n[r];
            a && e(t, a, r, o)
        }
        return t
    }))
}
var _i = fi((function(e, t, n, r) {
        di(e, t, n, r)
    })),
    pi = ti((function(e) {
        return e.push(void 0, hi), Kr(_i, void 0, e)
    }));
let mi = function() {
    function e(e) {
        this._available = !1, this._active = !1, this._video = e, er(this)
    }
    _e(e, null, [{
        key: "displayName",
        get: function() {
            return "ExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return !1
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return []
        }
    }]);
    var t = e.prototype;
    return t.showPicker = function() {}, t.getFile = function() {
        const e = this.constructor.displayName.replace("ExternalDisplay", "");
        if (this._video.externalDisplayFiles[e]) return this._video.externalDisplayFiles[e];
        const t = this.constructor.supportedVideoTypes,
            n = this._video.files.filter(e => -1 !== t.indexOf(e.mime)).sort((e, n) => e.mime === n.mime ? e.priority - n.priority : t.indexOf(e.mime) - t.indexOf(n.mime));
        if (!n.length) throw new Error(`No files available for ${this.constructor.displayName} external display.`);
        return n[0]
    }, _e(e, [{
        key: "active",
        get: function() {
            return this._active
        }
    }, {
        key: "available",
        get: function() {
            return this._available
        }
    }, {
        key: "element",
        get: function() {
            return document.createElement("div")
        }
    }]), e
}();
const vi = {
        ABORT: "abort",
        CAN_PLAY: "canplay",
        CAN_PLAY_THROUGH: "canplaythrough",
        DURATION_CHANGE: "durationchange",
        EMPTIED: "emptied",
        ENDED: "ended",
        ENTER_PICTURE_IN_PICTURE: "enterpictureinpicture",
        LEAVE_PICTURE_IN_PICTURE: "leavepictureinpicture",
        ERROR: "error",
        LOADED_DATA: "loadeddata",
        LOADED_METADATA: "loadedmetadata",
        LOAD_START: "loadstart",
        PAUSE: "pause",
        PLAY: "play",
        PLAYING: "playing",
        PROGRESS: "progress",
        RATE_CHANGE: "ratechange",
        RESIZE: "resize",
        SEEKED: "seeked",
        SEEKING: "seeking",
        STALLED: "stalled",
        SUSPEND: "suspend",
        TIME_UPDATE: "timeupdate",
        VOLUME_CHANGE: "volumechange",
        WAITING: "waiting",
        WEBKIT_BEGIN_FULLSCREEN: "webkitbeginfullscreen",
        WEBKIT_END_FULLSCREEN: "webkitendfullscreen",
        WEBKIT_PRESENTATION_MODE_CHANGED: "webkitpresentationmodechanged"
    },
    gi = {
        ADD_TRACK: "addtrack",
        REMOVE_TRACK: "removetrack",
        CHANGE: "change"
    },
    yi = {
        AVAILABLE: "externaldisplayavailable",
        UNAVAILABLE: "externaldisplayunavailable",
        ACTIVATED: "externaldisplayactivated",
        DEACTIVATED: "externaldisplaydeactivated"
    },
    Ei = {
        AIRPLAY_AVAILABLE: "available",
        AIRPLAY_UNAVAILABLE: "unavailable",
        AIRPLAY_ACTIVATED: "activated",
        AIRPLAY_DEACTIVATED: "deactivated"
    },
    Ti = {
        SCANNER_CHANGE: "scannerchange",
        SCANNER_ERROR: "scannererror",
        FILE_ERROR: "fileerror",
        FILE_SRC_UPDATE: "filesrcupdate",
        DOWNLOAD_START: "downloadstart",
        DOWNLOAD_END: "downloadend",
        DOWNLOAD_ERROR: "downloaderror",
        DOWNLOAD_TIMEOUT: "downloadtimeout",
        DRM_AUTH_FAILURE: "drmauthfailure",
        DRM_AUTH_SUCCESS: "drmauthsuccess",
        DRM_FAILURE: "drmfailure",
        DRM_KEY_SWITCH: "drmkeyswitch",
        DRM_OUTPUT_RESTRICTED: "drmoutputrestricted",
        EME_UNSUPPORTED: "emeunsupported",
        CURRENT_FILE_CHANGE: "currentfilechange",
        MEDIA_URL_EXPIRED: "mediaurlexpired",
        MEDIA_URL_BAD_REQUEST: "mediaurlbadrequest",
        STREAM_CHANGE: "streamchange",
        STREAM_CHANGE_START: "streamchangestart",
        STREAM_UPDATED: "streamupdated",
        STREAM_BUFFER_START: "streambufferstart",
        STREAM_BUFFER_END: "streambufferend",
        AVAILABLE_STREAMS_CHANGED: "availablestreamschanged",
        MEDIA_CAPABILITY_STREAMS_UNSUPPORTED: "mediacapabilitystreamsunsupported",
        DROPPED_FRAMES: "droppedframes",
        BANDWIDTH: "bandwidth",
        STREAM_TARGET_CHANGE: "streamtargetchange",
        CUE_POINT: "cuepoint",
        BUFFER_OCCUPANCY: "bufferoccupancy",
        MANIFEST_TIMEOUT: "manifesttimeout",
        MANIFEST_LOADED: "manifestloaded",
        STREAMS_LOADED: "streamsloaded",
        TEXT_SRC_UPDATE: "texttracksrcupdate",
        TEXT_TRACKS_AVAILABLE: "texttracksavailable",
        AV_DURATION_MISMATCH: "avdurationmismatch",
        BUFFER_STARTED: "bufferstarted",
        BUFFER_ENDED: "bufferended",
        QUOTA_EXCEEDED_ERROR: "quotaexceedederror",
        CHAPTER_CUES_UPDATED: "chaptercuesupdated",
        APPEND_BUFFER_END: "appendbufferend",
        DROPPED_FRAME_PERCENT_EXCEEDED: "droppedframepercentexceeded",
        LOAD_SEGMENT_FAILED: "loadsegmentfailed",
        AUDIO_TRACK_CHANGED: "audiotrackchanged",
        SEGMENT_CUES_LOADED: "segmentcuesloaded"
    },
    Si = {
        STREAM_ONLINE: "livestreamonline",
        STREAM_OFFLINE: "livestreamoffline",
        BUFFER_GAP_JUMP: "livebuffergapjump",
        BUFFER_GAP_JUMP_PREVENT: "livebuffergapjumpprevent",
        STALL_JUMP: "livestalljump",
        LATENCY_UPDATED: "latencyupdated"
    },
    bi = {
        CAMERA_UPDATE: "cameraupdate",
        CAMERA_CHANGE: "camerachange",
        MOTION_START: "motionstart",
        MOTION_END: "motionend",
        SPATIAL_UNSUPPORTED: "spatialunsupported",
        WEBVR_ENTER: "entervr",
        WEBVR_EXIT: "exitvr",
        WEBVR_HARDWARE_AVAILABLE: "webvrhardwareavailable",
        AMBISONIC_UNSUPPORTED: "ambisonicunsupported"
    },
    Ai = {
        MEDIASESSION_PLAY: "mediasessionplay",
        MEDIASESSION_PAUSE: "mediasessionpause",
        MEDIASESSION_SEEK_FORWARD: "mediasessionseekforward",
        MEDIASESSION_SEEK_TO: "mediasessionseekto",
        MEDIASESSION_SEEK_BACKWARD: "mediasessionseekbackward"
    },
    wi = Object.assign({}, vi, gi, yi, Ei, Ti, bi, Si, Ai);
let Ii = function(e) {
    function t(t) {
        var n;
        return (n = e.call(this, t) || this)._videoElement = document.createElement("video"), n._videoElement.setAttribute("data-airplay", ""), n._videoElement.setAttribute("x-webkit-airplay", "allow"), n.addVideoEventListeners(), n
    }
    ge(t, e), _e(t, null, [{
        key: "displayName",
        get: function() {
            return "AirPlayExternalDisplay"
        }
    }, {
        key: "supported",
        get: function() {
            return "WebKitPlaybackTargetAvailabilityEvent" in window
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/vnd.apple.mpegurl", "video/mp4"]
        }
    }]);
    var n = t.prototype;
    return n.addVideoEventListeners = function(e = this._videoElement) {
        e.addEventListener(vi.LOADED_METADATA, e => {
            this.fire(vi.LOADED_METADATA, e)
        }), e.addEventListener("webkitplaybacktargetavailabilitychanged", e => {
            switch (e.availability) {
                case "available":
                    this._available || (this._available = !0, this.fire(Ei.AIRPLAY_AVAILABLE));
                    break;
                case "not-available":
                    this._available && (this._available = !1, this.fire(Ei.AIRPLAY_UNAVAILABLE))
            }
        }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", e => {
            if (e.target.webkitCurrentPlaybackTargetIsWireless) return this._active = !0, void this.fire(Ei.AIRPLAY_ACTIVATED);
            this._active = !1, this.fire(Ei.AIRPLAY_DEACTIVATED)
        })
    }, n.showPicker = function() {
        this._videoElement.webkitShowPlaybackTargetPicker(), this.loadMetadata().then(() => this._videoElement.webkitShowPlaybackTargetPicker()).catch(() => {})
    }, n.loadMetadata = function() {
        return this._videoElement.readyState >= 1 ? Promise.resolve() : new Promise((e, t) => {
            this._videoElement.addEventListener(vi.LOADED_METADATA, () => {
                e()
            }), this._videoElement.src = this.getFile().src
        })
    }, _e(t, [{
        key: "element",
        get: function() {
            return this._videoElement
        },
        set: function(e) {
            if (!(e instanceof HTMLVideoElement)) throw new TypeError("The element for AirPlay must be a <video>.");
            e !== this._videoElement && (this.addVideoEventListeners(e), this._videoElement = e, this._videoElement.setAttribute("x-webkit-airplay", "allow"))
        }
    }]), t
}(mi);
(() => {
    const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
    e && (parseInt(e[1], 10), parseInt(e[2], 10))
})();
const Ri = function(e) {
    for (let t = 0, n = this.length; t < n; t++)
        if (this[t].id === `${e}`) return this[t];
    return null
};

function ki(e = []) {
    return e.item = function(e) {
        return this[e]
    }, e.getTrackById = Ri, e
}

function Pi(e) {
    const t = window.atob(e),
        n = t.length,
        r = new Uint8Array(n);
    for (let i = 0; i < n; i++) r[i] = t.charCodeAt(i);
    return r
}

function Di(e, t, n, r) {
    let i = 0,
        o = 0,
        s = 0,
        a = 0;
    const c = e,
        u = t,
        l = n / r;
    return c / u >= l ? (o = u, i = (l * u).toFixed(2)) : (i = c, o = (c / l).toFixed(2)), s = Math.max((c - i) / 2, 0), a = Math.max((u - o) / 2, 0), {
        width: i,
        height: o,
        left: s,
        top: a
    }
}

function Oi(e) {
    if (function(e) {
            return "webkitDisplayingFullscreen" in e && e.webkitDisplayingFullscreen
        }(e)) return !0;
    const t = [document.fullscreenElement, document.webkitFullscreenElement, document.webkitCurrentFullScreenElement, document.mozFullScreenElement, document.msFullscreenElement].find(e => void 0 !== e);
    return Boolean(t)
}

function Ci(e, t) {
    let n = e;
    return t && (n += `;codecs="${t}"`), n
}

function Li(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    const n = Math.pow(10, t);
    return Math.round(e * n) / n
}
let Ni = function(e, t) {
    this.name = e, this.message = t, Object.freeze(this)
};
const Mi = new WeakMap;
let xi = function() {
    function e(e, t = {}) {
        const n = parseFloat(e);
        if (isNaN(n)) throw new TypeError("Time must be a number.");
        if (n < 0) throw new TypeError("Time must be a positive number.");
        this.time = e, this.data = t, this.id = st();
        try {
            const n = "undefined" == typeof VTTCue ? TextTrackCue : VTTCue;
            this.vttCue = new n(e, e + .25, JSON.stringify(t)), this.vttCue.id = this.id
        } catch (xl) {
            throw new Ni("CuePointsNotSupported", "Cue points are not supported in this browser.")
        }
        Mi.set(this.vttCue, this), Object.freeze(this)
    }
    return e.fromVTTCue = function(t) {
        if (Mi.has(t)) return Mi.get(t);
        let n = {};
        try {
            n = JSON.parse(t.text)
        } catch (xl) {}
        return new e(t.startTime, n)
    }, e
}();

function Ui(e, t, n) {
    let r;
    try {
        document.removeChild({})
    } catch (xl) {
        r = Object.create(Object.getPrototypeOf(xl), {
            name: {
                value: t,
                configurable: !0,
                writable: !0
            },
            code: {
                value: e,
                configurable: !0,
                writable: !0
            },
            message: {
                value: n,
                configurable: !0,
                writable: !0
            },
            toString: {
                value: () => `${t}: DOM Exception ${e}`,
                configurable: !0,
                writable: !0
            }
        })
    }
    return Object.freeze(r)
}
const Fi = (e, t) => {
    if (!e || void 0 === e[t]) throw Ui(1, "INDEX_SIZE_ERR");
    return e[t]
};

function ji(e = [], t = []) {
    return Object.freeze({
        get length() {
            return e.length
        },
        start: t => Fi(e, t),
        end: e => Fi(t, e),
        [Symbol.iterator]: () => function(e, t) {
            let n = 0;
            return {
                [Symbol.iterator]() {
                    return this
                },
                next: () => n < e.length ? {
                    done: !1,
                    value: t ? [e[n], t[n++]] : e[n++]
                } : {
                    done: !0
                }
            }
        }(e, t)
    })
}
ji.from = function(e) {
    if (!(e instanceof TimeRanges)) throw new TypeError("Can only create a TelecineTimeRange from a TimeRanges object.");
    const t = [],
        n = [];
    for (let r = 0, i = e.length; r < i; r++) t.push(e.start(r)), n.push(e.end(r));
    return ji(t, n)
};
const Vi = "DRMFailure",
    Bi = "MediaUrlBadRequest",
    Hi = "PlayInterrupted",
    Xi = "TextTracksNotSupported";

function qi() {}
const Gi = document.createElement("video"),
    Wi = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "video/mp4": 'video/mp4; codecs="avc1.64001E"',
        "video/webm": 'video/webm; codecs="vp8, vorbis"',
        "video/x-flv": 'video/x-flv; codecs="vp6"'
    },
    Ki = function() {
        const e = "undefined" == typeof TextTrack ? {} : TextTrack;
        return {
            disabled: "DISABLED" in e ? e.DISABLED : "disabled",
            hidden: "HIDDEN" in e ? e.HIDDEN : "hidden",
            showing: "SHOWING" in e ? e.SHOWING : "showing"
        }
    }(),
    Yi = function() {
        const e = document.createElement("track");
        return "track" in e && "oncuechange" in e.track
    }(),
    $i = new WeakMap;
let zi = function() {
    function e(e, t = {}) {
        this._element = e, this._options = t, this._telecineVideo = null, this._currentFile = null, this._externalDisplays = [], er(this);
        let n = e.querySelector("video");
        n || (n = document.createElement("video"), n.preload = "none", this._element.appendChild(n)), n.setAttribute("tabindex", "-1"), this._video = n, t.playRequest && (this._playRequest = t.playRequest, this._playRequest.video = n), t.htmlScanner && t.htmlScanner.controls && (this._video.controls = !0), this._boundHandleVideoEvent = this.handleVideoEvent.bind(this), this._boundHandleAudioEvent = this.handleAudioEvent.bind(this), this.addVideoEventListeners(), this.addAudioEventListeners(), this._preload = "none", this._externalDisplayActivated = !1, this._inFullscreen = !1, this._lastCurrentTime = -1, this._switchingVideo = !1
    }
    e.supported = function() {
        return e.supportedVideoTypes.length > 0
    }, _e(e, null, [{
        key: "displayName",
        get: function() {
            return "HTMLScanner"
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            const e = [];
            if ("function" != typeof Gi.canPlayType) return e;
            for (const t in Wi) {
                const n = Wi[t];
                en.android && "application/vnd.apple.mpegurl" === t || (en.android && !en.mobileAndroid && "video/mp4" === t && en.android instanceof String ? parseInt(en.android.split(".")[0], 10) > 3 && e.push(t) : Gi.canPlayType(n).replace(/^no$/, "") && e.push(t))
            }
            return e
        }
    }, {
        key: "supportedAudioTypes",
        get: function() {
            return []
        }
    }, {
        key: "supportedExternalDisplays",
        get: function() {
            return [Ii]
        }
    }, {
        key: "supportsVideoElementAudioTracks",
        get: function() {
            return void 0 !== Gi.audioTracks && this.supportedVideoTypes.includes("application/vnd.apple.mpegurl")
        }
    }]);
    var t = e.prototype;
    return t.deactivate = function() {
        this._telecineVideo && (this._telecineVideo.off(Ti.FILE_SRC_UPDATE), this._telecineVideo.off("texttracksrcupdate")), this.removeVideoEventListeners(), this.removeAudioEventListeners(), this._switchingVideo || this.removeSnapshot(), this._video.style.display = "none"
    }, t.reactivate = function() {
        this.addVideoEventListeners(), this.addAudioEventListeners(), this._video.style.display = ""
    }, t.addVideoEventListeners = function(e = this._video) {
        Object.keys(vi).forEach(t => {
            const n = vi[t];
            e.addEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.addAudioEventListeners = function(e = this._video) {
        var t;
        (null == e ? void 0 : e.audioTracks) && "function" == typeof(null == (t = e.audioTracks) ? void 0 : t.addEventListener) && (e.audioTracks.addEventListener(gi.ADD_TRACK, this._boundHandleAudioEvent), e.audioTracks.addEventListener(gi.REMOVE_TRACK, this._boundHandleAudioEvent), e.audioTracks.addEventListener(gi.CHANGE, this._boundHandleAudioEvent))
    }, t.removeVideoEventListeners = function(e = this._video) {
        Object.keys(vi).forEach(t => {
            const n = vi[t];
            e.removeEventListener(n, this._boundHandleVideoEvent)
        })
    }, t.removeAudioEventListeners = function(e = this._video) {
        var t;
        (null == e ? void 0 : e.audioTracks) && "function" == typeof(null == (t = e.audioTracks) ? void 0 : t.removeEventListener) && (e.audioTracks.removeEventListener(gi.ADD_TRACK, this._boundHandleAudioEvent), e.audioTracks.removeEventListener(gi.REMOVE_TRACK, this._boundHandleAudioEvent), e.audioTracks.removeEventListener(gi.CHANGE, this._boundHandleAudioEvent))
    }, t.play = function(e) {
        return this._playRequest.start(e).catch(e => {
            throw this._onPlayError(e), e
        })
    }, t._onPlayError = function(e) {
        this.fire(vi.ERROR, new Ni(null == e ? void 0 : e.name, null == e ? void 0 : e.message))
    }, t.pause = function() {
        this._playRequest.cancel(), this._video.pause()
    }, t.onpause = function() {}, t.ontimeupdate = function() {
        this._lastCurrentTime = this.currentTime
    }, t.addTextTrack = function(e) {
        let t, n;
        return e.src ? (t = document.createElement("track"), t.kind = e.kind, t.src = e.src, t.id = `telecine-track-${e.id}`, t.srclang = e.language, t.label = e.label, this._video.appendChild(t), n = t.track) : (n = this._video.addTextTrack(e.kind, e.label, e.language), this._textTracks = this._textTracks || {}, this._textTracks[`telecine-track-${e.id}`] = n), this._addTextTrackListeners(e, n, t), n
    }, t._addTextTrackListeners = function(e, t, n) {
        t.addEventListener("cuechange", () => e.dispatchEvent("cuechange")), this._video.addEventListener("timeupdate", () => {
            Oi(this._video) && (e.mode = t.mode)
        });
        const r = () => {
                const n = en.iOS && Oi(this._video);
                !e._modeHasBeenSet || n ? e.mode = t.mode : t.mode = Ki[e.mode]
            },
            i = [];
        if (n ? n.addEventListener("load", r) : r(), ["loadeddata", "seeking"].forEach(e => {
                this._video.addEventListener(e, r), i.push([e, r])
            }), e._modeHasBeenSet && (t.mode = Ki[e.mode]), !Yi) {
            let n = [];
            const r = () => {
                if (t && "disabled" !== Ki[t.mode]) {
                    if (n.length !== t.activeCues.length) return e.dispatchEvent("cuechange"), void(n = Array.from(t.activeCues));
                    for (let r = 0, i = t.activeCues.length; r < i; r++)
                        if (t.activeCues[r].startTime !== n[r].startTime) return e.dispatchEvent("cuechange"), void(n = Array.from(e.activeCues))
                }
            };
            this._video.addEventListener("timeupdate", r), i.push(["timeupdate", r])
        }
        return $i.set(e, i), t
    }, t.removeTextTrack = function(e) {
        const t = this._video.querySelector(`#telecine-track-${e.id}`);
        t && this._video.removeChild(t);
        const n = $i.get(e);
        Array.isArray(n) && n.forEach(([e, t]) => {
            this._video.removeEventListener(e, t)
        })
    }, t.getCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t ? Array.from(t.cues) : []
    }, t.getActiveCuesForTrack = function(e) {
        const t = this.getTrackById(`telecine-track-${e.id}`);
        return t && t.activeCues ? Array.from(t.activeCues) : []
    }, t.setModeForTrack = function(e, t) {
        const n = this.getTrackById(`telecine-track-${e.id}`);
        return n && n.mode !== Ki[t] && (n.mode = Ki[t], Yi || "disabled" === t || e.dispatchEvent("cuechange")), this
    }, t.setSrcForTrack = function(e, t) {
        const n = this._video.querySelector(`#telecine-track-${e.id}`);
        return n && null === n.track.cues && (n.src = t), this
    }, t.enableAudioTrack = function(e) {
        if (!this.constructor.supportsVideoElementAudioTracks || !this.audioTracks) return null;
        if (!e) return null;
        if (!this.audioTracks.getTrackById(e)) return null;
        let t = null;
        for (let n = 0; n < this.audioTracks.length; n++) {
            const r = this.audioTracks[n].id === e;
            this.audioTracks[n].enabled = r, r && (t = this.audioTracks[n])
        }
        return t
    }, t._createChapterCue = function(e, t, n = null) {
        let r;
        this._chaptersTrack || (this._chaptersTrack = this._video.addTextTrack("chapters"), this._chaptersTrack.mode = "hidden");
        const i = e.timecode,
            o = n ? n.timecode : t,
            s = window.VTTCue || window.TextTrackCue;
        try {
            r = new s(i, o, e.title)
        } catch (xl) {
            throw new Ni("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        r.size = (o - i) / t, r.id = i, this._chaptersTrack.addCue(r)
    }, t.addChapter = function(e, t) {
        const n = this.video.chapters,
            r = {
                timecode: e,
                title: t
            };
        n.push(r), n.sort((e, t) => e.timecode - t.timecode);
        const i = n[n.indexOf(r) + 1];
        this._createChapterCue(r, this.video.duration, i), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t.removeChapter = function(e) {
        try {
            this._chaptersTrack.removeCue(e)
        } catch (xl) {
            throw new Ni("ChaptersNotSupported", "Chapters are not supported in this browser.")
        }
        const t = this.video.chapters.find(t => t.timecode === e.timecode);
        this.video.chapters.splice(t, 1), this._updateChapterCues(this._chaptersTrack, this.video.duration)
    }, t._updateChapterCues = function(e, t) {
        for (let n = 0; n < e.cues.length; n++) {
            let r = e.cues[n],
                i = e.cues[n + 1];
            const o = i ? i.startTime : t;
            r.endTime = o, r.size = (o - r.startTime) / t
        }
        this.fire(Ti.CHAPTER_CUES_UPDATED)
    }, t.addChapters = function(e, t) {
        0 !== e.length && t && (e = e.filter(e => this._isValidChapter(e, t))).sort((e, t) => e.timecode - t.timecode).forEach((n, r) => this._createChapterCue(n, t, e[r + 1]))
    }, t.addCuePoint = function(e, t = {}) {
        if (this._cuePointTrack || (this._cuePointTrack = this._video.addTextTrack("metadata"), this._cuePointTrack.mode = "hidden", this._cuePointTrack.addEventListener("cuechange", e => {
                Array.from(e.target.activeCues).forEach(e => {
                    this.fire(Ti.CUE_POINT, xi.fromVTTCue(e))
                })
            }), this._video.addEventListener("canplay", e => {
                this._cuePointTrack.mode = "hidden"
            })), e = parseFloat(e), isNaN(e)) throw new TypeError("Time must be a number.");
        if (e < 0 || e >= this.duration) throw new TypeError("Time must be a positive number less than the duration of the video.");
        const n = new xi(e, t);
        return this._cuePointTrack.addCue(n.vttCue), n
    }, t.removeCuePoint = function(e) {
        if (!e) throw new Ni("InvalidCuePoint", "The specified cue point is not valid.");
        return this._cuePointTrack.removeCue(e.vttCue), !0
    }, t.removeAllCuePoints = function() {
        return this._cuePointTrack && this._cuePointTrack.length && Array.from(this._cuePointTrack.cues).forEach(e => {
            this._cuePointTrack.removeCue(e)
        }), !0
    }, t.requestPictureInPicture = function() {
        try {
            const e = this;
            return function(t, n) {
                var r = function() {
                    if (e._video.readyState < 1) return function(e, t) {
                        return e && e.then ? e.then(qi) : Promise.resolve()
                    }(e._initPreload())
                }();
                return r && r.then ? r.then(n) : n()
            }(0, (function() {
                switch (en.pictureInPictureSupportType) {
                    case "pip-api":
                        return e._video.requestPictureInPicture();
                    case "webkit-presentation-mode":
                        return e._video.webkitSetPresentationMode("picture-in-picture");
                    default:
                        throw new Error("Picture-in-picture is not supported by this browser")
                }
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t._initPreload = function() {
        return this.preload = "auto", new Promise(e => {
            this.once(vi.LOADED_METADATA, e)
        })
    }, t.exitPictureInPicture = function() {
        try {
            const e = this;
            switch (en.pictureInPictureSupportType) {
                case "pip-api":
                    return document.exitPictureInPicture();
                case "webkit-presentation-mode":
                    return e._video.webkitSetPresentationMode("inline");
                default:
                    throw new Error("Picture-in-picture is not supported by this browser")
            }
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t.onerror = function() {
        if (!this._video.error) return !1;
        switch (this._video.error.code) {
            case this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                return this._fireVideoError("MediaSrcNotSupportedError", "The media was not suitable."), this._switchToNextFile(), !1;
            case this._video.error.MEDIA_ERR_DECODE:
                return -1 !== this._lastCurrentTime && en.iOS ? (this._video.load(), this.currentTime = this._lastCurrentTime, this._lastCurrentTime = -1, !1) : (this._fireVideoError("MediaDecodeError", "The media could not be decoded."), this._switchToNextFile(), !1);
            case this._video.error.MEDIA_ERR_NETWORK:
                return this._fireVideoError("MediaNetworkError", "A network error ocurred while fetching the media."), !1;
            case this._video.error.MEDIA_ERR_ABORTED:
                return this._fireVideoError("MediaAbortedError", "The user agent aborted the fetching of the media."), !1;
            default:
                return this._fireVideoError("MediaUnknownError", "An unknown error occurred."), !1
        }
    }, t._fireVideoError = function(e, t) {
        this.fire(vi.ERROR, new Ni(e, t))
    }, t.onended = function() {
        if (this._video.paused || this._video.pause(), this.currentTime < this._video.duration) return !1
    }, t.onwaiting = function() {
        return !1
    }, t.onwebkitbeginfullscreen = function() {
        this._inFullscreen = !0
    }, t.onwebkitendfullscreen = function() {
        "inline" === this._video.webkitPresentationMode && !0 === this._video.controls && (this._video.controls = !1), this._inFullscreen = !1
    }, t.onwebkitpresentationmodechanged = function() {
        this.fire(this.pictureInPictureActive ? vi.ENTER_PICTURE_IN_PICTURE : vi.LEAVE_PICTURE_IN_PICTURE)
    }, t.shouldHandleVideoEvent = function(e) {
        return !0
    }, t.handleVideoEvent = function(e) {
        e.target === this._video && !1 !== this.shouldHandleVideoEvent(e) && ("function" == typeof this[`on${e.type}`] && !1 === this[`on${e.type}`](e) || this.fire(e.type))
    }, t.handleAudioEvent = function() {
        this.fire(Ti.AUDIO_TRACK_CHANGED)
    }, t.swapVideo = function(e, t) {
        const n = e.paused;
        this.removeVideoEventListeners(e), this.removeAudioEventListeners(e), e.parentElement.replaceChild(t, e), e.pause(), t.currentTime = e.currentTime, n || t.play(), this.addVideoEventListeners(t), this.addAudioEventListeners(t), this._video = t
    }, t.onexternaldisplayactivated = function(e) {
        this._externalDisplayActivated || (this._video !== e.element && (this._originalVideo = this._video, this.swapVideo(this._video, e.element)), this._externalDisplayActivated = !0)
    }, t.onexternaldisplaydeactivated = function(e) {
        this._externalDisplayActivated && (this._originalVideo && (this.swapVideo(e.element, this._originalVideo), this._originalVideo = null), this._externalDisplayActivated = !1)
    }, t.setVideoSrc = function(e) {
        this._video.src = e
    }, t.canSeekTo = function(e) {
        const t = this.duration;
        if (t && e > t && (e = t), this._video.seekable.length > 0)
            for (let n = 0, r = this._video.seekable.length; n < r; n++)
                if (this._video.seekable.start(n) <= e && this._video.seekable.end(n) >= e) return !0;
        return !1
    }, t.seekToTime = function(e) {
        return this.canSeekTo(e) ? (this._video.currentTime = e, Promise.resolve(this._video.currentTime)) : new Promise((t, n) => {
            const r = () => {
                this.canSeekTo(e) && (Object.keys(vi).forEach(e => {
                    const t = vi[e];
                    this._video.removeEventListener(t, r)
                }), this._video.currentTime = e, t(this._video.currentTime))
            };
            Object.keys(vi).forEach(e => {
                const t = vi[e];
                this._video.addEventListener(t, r)
            })
        })
    }, t.takeSnapshot = function() {
        let e = this._element.querySelector("[telecine-snapshot]");
        e || (e = document.createElement("canvas"), e.setAttribute("telecine-snapshot", ""), this._element.appendChild(e)), e.setAttribute("width", `${this._element.clientWidth}px`), e.setAttribute("height", `${this._element.clientHeight}px`), e.style.display = "";
        const {
            width: t,
            height: n,
            left: r,
            top: i
        } = Di(this._video.clientWidth, this._video.clientHeight, this._video.videoWidth, this._video.videoHeight);
        e.style.cssText = `position:absolute;width:${t}px;height:${n}px;left:${r}px;top:${i}px`;
        const o = e.getContext("2d");
        e.width > 0 && e.height > 0 && o.drawImage(this._video, 0, 0, e.width, e.height)
    }, t.removeSnapshot = function() {
        const e = this._element.querySelector("[telecine-snapshot]");
        e && (e.style.display = "none")
    }, t.getTrackById = function(e) {
        if (this._textTracks && this._textTracks[e]) return this._textTracks[e];
        if ("function" == typeof this._video.textTracks.getTrackById) return this._video.textTracks.getTrackById(e);
        const t = document.getElementById(e);
        return t ? t.track : null
    }, t.initDrm = function() {
        const e = this._telecineVideo.drmHandler;
        e && e.init(this)
    }, t.showExternalDisplayPicker = function(e) {
        if (!this._externalDisplays.length) throw new Ni("ExternalDisplayUnvailable", "No external displays are available.");
        if (!e) return void this._externalDisplays[0].showPicker();
        const t = this._externalDisplays.filter(t => t.constructor.displayName.replace("ExternalDisplay", "") === e)[0];
        if (!t) throw new Ni("InvalidExternalDisplay", "The specified external display is not available.");
        t.showPicker()
    }, t.setCaptionsShouldDisplay = function(e) {}, t.setCaptionsShouldLoad = function(e) {}, t._pickFile = function() {
        return this._files.length < 1 ? null : this._files.slice(0).sort((e, t) => e.priority - t.priority)[0]
    }, t._updateCurrentFile = function() {
        const e = this._pickFile();
        e ? this.currentFile = e : this.fire(Ti.SCANNER_ERROR, {
            reason: "all files failed"
        })
    }, t._isValidChapter = function(e, t) {
        return void 0 !== e.timecode && e.timecode >= 0 && e.timecode <= t && void 0 !== e.title
    }, t._switchToNextFile = function() {
        const e = this._files.indexOf(this._currentFile);
        this._files.splice(e, 1), this._updateCurrentFile()
    }, _e(e, [{
        key: "audioTracks",
        get: function() {
            return this._video.audioTracks
        }
    }, {
        key: "chaptersTrack",
        get: function() {
            return this._chaptersTrack
        }
    }, {
        key: "manifest",
        get: function() {
            return this._manifest
        }
    }, {
        key: "manifestLoaded",
        get: function() {
            return !!this._manifest
        }
    }, {
        key: "buffered",
        get: function() {
            return ji.from(this._video.buffered)
        }
    }, {
        key: "cuePoints",
        get: function() {
            var e, t;
            return (null == (e = this._cuePointTrack) ? void 0 : e.cues) && "function" == typeof(null == (t = this._cuePointTrack) ? void 0 : t.cues[Symbol.iterator]) ? Array.from(this._cuePointTrack.cues).map(e => xi.fromVTTCue(e)) : []
        }
    }, {
        key: "currentFile",
        get: function() {
            return this._currentFile
        },
        set: function(t) {
            const n = !this._video.paused,
                r = this.currentTime,
                i = !this._currentFile || t.video.id !== this._currentFile.video.id;
            if (i || this.takeSnapshot(), this._currentFile = t, i && (this._video.preload = this._preload), this.constructor === e && this._video.readyState > 0 && (this._video.currentTime = 0), (en.iOS || en.android) && this._currentFile.video.title) {
                let e = this._currentFile.video.title;
                this._currentFile.video.subtitle && (e = `${e} ${this._currentFile.video.subtitle}`), this._video.setAttribute("title", e)
            } else this._video.removeAttribute("title");
            this.setVideoSrc(this._currentFile.src, i), this.fire(Ti.CURRENT_FILE_CHANGE, t), en.iOS && !i && this.play().catch(this._onPlayError.bind(this)), this.constructor !== e || i ? n && this.play().catch(this._onPlayError.bind(this)) : (this.seekToTime(r).then(e => (n && this.play().catch(this._onPlayError.bind(this)), e)).catch(() => {}), this.once("canplay", () => this.removeSnapshot()), this.once("playing", () => this.removeSnapshot()))
        }
    }, {
        key: "currentTime",
        get: function() {
            return this._video.currentTime
        },
        set: function(e) {
            this.seekToTime(e)
        }
    }, {
        key: "duration",
        get: function() {
            return this._video.duration
        }
    }, {
        key: "ended",
        get: function() {
            return this._video.ended
        }
    }, {
        key: "externalDisplayAvailable",
        get: function() {
            return this._externalDisplays.some(e => e.available)
        }
    }, {
        key: "externalDisplayActive",
        get: function() {
            return this._externalDisplays.some(e => e.active)
        }
    }, {
        key: "loop",
        get: function() {
            return this._video.loop
        },
        set: function(e) {
            this._video.loop = e
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return null
        }
    }, {
        key: "muted",
        get: function() {
            return this._video.muted
        },
        set: function(e) {
            this._video.muted = e
        }
    }, {
        key: "playsinline",
        get: function() {
            return this._video.playsinline
        },
        set: function(e) {
            this._video.playsinline = e, e ? this._video.setAttribute("playsinline", "") : this._video.removeAttribute("playsinline")
        }
    }, {
        key: "paused",
        get: function() {
            return this._video.paused
        }
    }, {
        key: "defaultPlaybackRate",
        get: function() {
            return this._video.defaultPlaybackRate
        },
        set: function(e) {
            this._video.defaultPlaybackRate = e
        }
    }, {
        key: "playbackRate",
        get: function() {
            return this._video.playbackRate
        },
        set: function(e) {
            this._video.playbackRate = e
        }
    }, {
        key: "played",
        get: function() {
            return this._video.played
        }
    }, {
        key: "seekable",
        get: function() {
            return this._video.seekable
        }
    }, {
        key: "seeking",
        get: function() {
            return this._video.seeking
        }
    }, {
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._video.preload = e, this._preload = e
        }
    }, {
        key: "autoPictureInPicture",
        get: function() {
            return this._video.autoPictureInPicture
        },
        set: function(e) {
            this._video.autoPictureInPicture = e
        }
    }, {
        key: "disablePictureInPicture",
        get: function() {
            return this._video.disablePictureInPicture
        },
        set: function(e) {
            this._video.disablePictureInPicture = e
        }
    }, {
        key: "pictureInPictureActive",
        get: function() {
            return "picture-in-picture" === this._video.webkitPresentationMode || !!document.pictureInPictureElement
        }
    }, {
        key: "pictureInPictureEnabled",
        get: function() {
            if (this.disablePictureInPicture) return !1;
            switch (en.pictureInPictureSupportType) {
                case "pip-api":
                    return document.pictureInPictureEnabled;
                case "webkit-presentation-mode":
                    return !0;
                default:
                    return !1
            }
        }
    }, {
        key: "video",
        get: function() {
            return this._telecineVideo
        },
        set: function(e) {
            if (this.reactivate(), this._telecineVideo !== e) {
                if (this._telecineVideo && (this._telecineVideo.off(Ti.FILE_SRC_UPDATE), this._telecineVideo.off("texttracksrcupdate")), this.removeAllCuePoints(), this._telecineVideo = e, this._files = e.files.filter(e => -1 !== this.constructor.supportedVideoTypes.indexOf(e.mime)), this._telecineVideo.on(Ti.FILE_SRC_UPDATE, e => {
                        e === this._currentFile && this._updateCurrentFile()
                    }), this._telecineVideo.on("texttracksrcupdate", e => {
                        this.video.currentScanner && this.video.currentScanner.setSrcForTrack(e, e.src)
                    }), this._options.externalDisplays && this._options.externalDisplays.length) {
                    this._externalDisplays = [];
                    let t = this.constructor.supportedExternalDisplays;
                    Array.isArray(t) || (t = []);
                    const n = t.map(e => e.displayName);
                    this._options.externalDisplays.filter(e => e.supported && -1 !== n.indexOf(e.displayName)).forEach(t => {
                        const n = new t(e),
                            r = t.displayName.replace("ExternalDisplay", "");
                        n.on(vi.LOADED_METADATA, e => this.fire(vi.LOADED_METADATA, e)), n.on("available", () => this.fire(yi.AVAILABLE, {
                            type: r
                        })), n.on("unavailable", () => this.fire(yi.UNAVAILABLE, {
                            type: r
                        })), n.on("activated", () => {
                            "function" == typeof this.onexternaldisplayactivated && this.onexternaldisplayactivated(n), this.fire(yi.ACTIVATED, {
                                type: r
                            })
                        }), n.on("deactivated", () => {
                            "function" == typeof this.onexternaldisplaydeactivated && this.onexternaldisplaydeactivated(n), this.fire(yi.DEACTIVATED, {
                                type: r
                            })
                        }), this._externalDisplays.push(n)
                    })
                }
                this._updateCurrentFile(), en.iOS && this._externalDisplays.forEach(e => {
                    "AirPlay" === e.constructor.displayName && (e.element = this._video)
                }), this.initDrm()
            }
        }
    }, {
        key: "videoElement",
        get: function() {
            return this._video
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._video.videoHeight
        }
    }, {
        key: "volume",
        get: function() {
            return Ve(this._video.volume)
        },
        set: function(e) {
            this._video.volume = je(e)
        }
    }, {
        key: "readyState",
        get: function() {
            return this._video.readyState
        }
    }]), e
}();

function Qi(e, t = []) {
    if (0 === e.length) return 0;
    let n = 0,
        r = 0;
    for (let i = 0; i < e.length; i++) {
        const o = t[i] || 1;
        r += o, n += e[i] * o
    }
    return n / r
}

function Ji(e) {
    const t = Ie(e).sort((e, t) => e - t),
        n = Math.floor(t.length / 2);
    return t.length % 2 ? t[n] : (t[n - 1] + t[n]) / 2
}
let Zi = function(e) {
    function t() {
        return e.apply(this, arguments) || this
    }
    return ge(t, e), t
}(be(Error));

function eo() {}
const to = [],
    no = [],
    ro = [];

function io(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const oo = [];
let so = function() {
        function e(e = {}) {
            const {
                retryCount: t = 3,
                parallel: n = 1,
                includeWithSpeeds: r = !0,
                timeout: i = 0,
                retryAbortErrors: o = !0
            } = e;
            this._queue = [], this._activeRequests = new Set, this._retries = new WeakMap, this._retryCount = t, this._running = !1, this._processingQueue = !1, this._parallel = n, this._includeWithSpeeds = r, this._timeout = i, this._retryAbortErrors = o, this._initialize()
        }
        e.getPercentileSpeed = function(e = 5, t = .8) {
            return function(e, t) {
                if (0 === e.length) return 0;
                const n = Ie(e).sort((e, t) => e - t);
                if (t <= 0) return n[0];
                if (t >= 1) return n[n.length - 1];
                const r = n.length * t,
                    i = Math.floor(r),
                    o = i + 1,
                    s = r % 1;
                return o >= n.length ? n[i] : n[i] * (1 - s) + n[o] * s
            }(to.slice(-e), t)
        }, e.getAverageSpeed = function(e = 5, t = []) {
            return Qi(to.slice(-e), t)
        }, e.getHarmonicAverageSpeed = function(e = 5) {
            return function(e) {
                if (0 === e.length) return 0;
                let t = 0;
                for (let n = 0; n < e.length; n++) t += 1 / e[n];
                return e.length / t
            }(to.slice(-e))
        }, e.getVolatilityScaler = function(e = 5) {
            const t = to.slice(-e);
            if (t.length < 3) return null;
            const n = Qi(t, []);
            return Math.min.apply(Math, Ie(t)) / n
        }, e.getMedianSpeed = function(e = 5) {
            return Ji(to.slice(-e))
        }, e.getResponseSpeeds = function() {
            return to
        }, e.getProgressSpeeds = function() {
            return oo
        }, e.getFailedSegments = function() {
            return no
        }, e.getSuccessfulSegments = function() {
            return ro
        }, e.resetResponseSpeeds = function() {
            to.length = 0
        };
        var t = e.prototype;
        return t.add = function(e, t) {
            return new Promise((n, r) => {
                const i = this._createSegmentInfo(e, n, r);
                this._addSegmentToQueue(i, t), this._running && !this._processingQueue && this._processQueue()
            })
        }, t.start = function() {
            this._running || (this._running = !0, this._processQueue())
        }, t.stop = function() {
            this._running = !1
        }, t.abort = function(e = null) {
            this._queue.filter(t => !e || e === t.stream).forEach(e => {
                e.reject(new Zi("Stream manually aborted")), this.fire("downloadabort", e.identifier)
            }), this._queue = this._queue.filter(t => e && e !== t.stream), this._activeRequests.forEach(t => {
                e && e !== t.stream || t.request.abort()
            })
        }, t._insertAtPosition = function(e) {
            let t = 0;
            for (; t < this._queue.length && !(this._queue[t].priority > e.priority); t++);
            this._queue.splice(t, 0, e)
        }, t._initialize = function() {
            this._pendingFetchMap = new WeakMap, er(this), window.addEventListener("online", () => {
                this.start(), this._waitUntilOnline && (this._waitUntilOnline.resolve(), this._waitUntilOnline = null)
            }), window.addEventListener("offline", () => {
                this.stop(), this.abort(), this._waitUntilOnline = new Ke
            })
        }, t._addSegmentToQueue = function(e, t) {
            e.hasOwnProperty("priority") ? this._insertAtPosition(e) : this._queue[t ? "unshift" : "push"](e)
        }, t._processQueue = function() {
            if (!this._running) return;
            this._processingQueue = !0;
            const e = this._parallel - this._activeRequests.size;
            for (let t = 0; t < e; t++) this._fetchOne()
        }, t._createSegmentInfo = function(e, t, n) {
            let r = e;
            return e.id && (r = e.id), ve(ve({}, e), {}, {
                identifier: r,
                resolve: t,
                reject: n
            })
        }, t._continueProcessingQueue = function() {
            0 !== this._activeRequests.size || 0 !== this._queue.length ? this._activeRequests.size < this._parallel && this._processQueue() : this._processingQueue = !1
        }, t._fetchOne = function() {
            if (0 === this._queue.length) return void(this._processingQueue = !1);
            const e = this._queue.shift(),
                {
                    url: t,
                    byteRange: n,
                    isInitSegmentRequest: r,
                    identifier: i,
                    timeout: o
                } = e,
                s = {
                    stream: e.stream,
                    data: {
                        url: t,
                        isInitSegmentRequest: r,
                        requestSendTime: ze(),
                        uuid: st()
                    }
                };
            let a = this._timeout;
            const c = parseInt(o, 10);
            c >= 0 && (a = c);
            const u = {
                url: t,
                type: de.SEGMENT,
                responseType: xt.ARRAY_BUFFER,
                retry: this._retryCount,
                hooks: {
                    beforeRetry: [this._beforeRetry.bind(this)]
                },
                onDownloadProgress: this._makeOnDownloadProgress(i, s),
                headers: n && {
                    Range: `bytes=${n}`
                },
                retryAbortErrors: this._retryAbortErrors,
                timeout: a
            };
            this.fire("downloadstart", i), s.request = kt(u).then(this._makeOnRequestLoad(s, e)).catch(this._makeOnRequestError(s, e)), this._activeRequests.add(s)
        }, t._beforeRetry = function() {
            try {
                const e = this;
                return function(t) {
                    var n = function() {
                        if (e._waitUntilOnline) return function(e, t) {
                            return e && e.then ? e.then(eo) : Promise.resolve()
                        }(e._waitUntilOnline)
                    }();
                    if (n && n.then) return n.then(eo)
                }()
            } catch (xl) {
                return Promise.reject(xl)
            }
        }, t._makeOnDownloadProgress = function(e, t) {
            let n = 0,
                r = 0,
                i = ze();
            return o => {
                if (o.lengthComputable) {
                    const s = 8 * (o.loaded - r),
                        a = ze(),
                        c = a - i,
                        u = {
                            startTime: i,
                            length: c,
                            bitrate: s / (c / 1e3),
                            index: n
                        };
                    n > 0 && (oo.length >= 100 && oo.shift(), oo.push(u)), i = a, r = o.loaded, n += 1, this._pendingFetchMap.set(t, {
                        bytesTotal: o.total,
                        bytesLoaded: o.loaded,
                        percent: o.loaded / o.total,
                        identifier: e
                    }), this.fire("progress", e)
                }
            }
        }, t._makeOnRequestLoad = function(e, t) {
            const n = this,
                r = ze(),
                {
                    identifier: i,
                    resolve: o
                } = t;
            return function(e) {
                return function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    try {
                        return Promise.resolve(e.apply(this, t))
                    } catch (xl) {
                        return Promise.reject(xl)
                    }
                }
            }((function(s) {
                let a = ze() - r;
                return io(s.arrayBuffer(), (function(r) {
                    return Object.prototype.hasOwnProperty.call(s, "perfTimings") && Object.prototype.hasOwnProperty.call(s.perfTimings, "responseStart") && (t.perfTimings = s.perfTimings), e.data.duration = ze() - e.data.requestSendTime, n._activeRequests.delete(e), n._pendingFetchMap.delete(e), n._saveResponseSpeeds(t, a, r.byteLength), n.fire("downloadend", i, {
                        request: e,
                        response: s
                    }), ro.push({
                        url: e.data.url,
                        status: 200,
                        duration: e.data.duration
                    }), io(n._processBuffer(e, r), (function(e) {
                        o(r = e), n._continueProcessingQueue()
                    }))
                }))
            }))
        }, t._saveResponseSpeeds = function(e, t, n) {
            const r = t / 1e3,
                i = e.perfTimings;
            if (this._includeWithSpeeds && e.includeWithBandwidthChecks) {
                const t = 8 * n,
                    o = i && n <= 16e3;
                let s = t / r;
                if (e.excludeConnectTime && n > 16e3 && n <= 2e5) {
                    const e = (50 * Math.max(0, 1 - t / 16e5) + 150) / 1e3;
                    s = t / Math.max(.1, r - e)
                } else if (o) {
                    const e = i.fetchStart || i.workerStart || i.requestStart || 0;
                    s = t / (r - Math.max(0, i.responseStart - e) / 1e3)
                }
                to.push(s)
            }
            to.length > 100 && to.shift()
        }, t._processBuffer = function(e, t) {
            return e.data.url && e.data.url.match(".ts$") ? this._feedMuxer(e, t) : Promise.resolve(new Uint8Array(t))
        }, t._feedMuxer = function(e, t) {
            try {
                const n = this;
                return function(e, t) {
                    var r = function() {
                        if (!n._transmuxer) return io(n._loadMux(), (function(e) {
                            n._transmuxer = new e({
                                keepOriginalTimestamps: !0
                            })
                        }))
                    }();
                    return r && r.then ? r.then(t) : t()
                }(0, (function() {
                    return new Promise(r => {
                        n._transmuxer.on("data", t => {
                            n._transmuxer.off("data");
                            let i = new Uint8Array(t.initSegment.byteLength + t.data.byteLength);
                            i.set(t.initSegment, 0), i.set(t.data, t.initSegment.byteLength), r(e.data.isInitSegmentRequest ? t.initSegment : i)
                        }), n._transmuxer.push(new Uint8Array(t)), n._transmuxer.flush()
                    })
                }))
            } catch (xl) {
                return Promise.reject(xl)
            }
        }, t._makeOnRequestError = function(e, t) {
            const {
                identifier: n,
                reject: r,
                size: i
            } = t;
            return t => {
                const o = ze() - e.data.requestSendTime;
                if (e.data.duration = o, t instanceof ct) no.push({
                    url: e.data.url,
                    status: "abort",
                    duration: o
                }), this.fire("downloadabort", n);
                else if (t instanceof ut) no.push({
                    url: e.data.url,
                    status: t.response.status,
                    duration: o
                }), this.fire("downloaderror", n, t.response.status);
                else if (t instanceof dt) {
                    if (no.push({
                            url: e.data.url,
                            status: "timeout",
                            duration: o
                        }), i > 0 && t.timeoutMs > 0) {
                        let e = 8 * i / (t.timeoutMs / 1e3);
                        e *= .5, to.push(e)
                    }
                    this.fire("downloadtimeout", n, {
                        timeoutMs: t.timeoutMs
                    })
                }
                this._pendingFetchMap.delete(e), this._activeRequests.delete(e), r(t), this._continueProcessingQueue()
            }
        }, t._loadMux = function() {
            return import ("./mux-mp4.module.js").then(({
                default: e
            }) => e)
        }, _e(e, [{
            key: "parallel",
            get: function() {
                return this._parallel
            },
            set: function(e) {
                this._parallel = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                const e = [];
                return this._activeRequests.forEach(t => {
                    if (this._pendingFetchMap.get(t)) {
                        const n = this._pendingFetchMap.get(t);
                        n.elapsedTime = ze() - t.data.requestSendTime, e.push(n)
                    }
                }), e
            }
        }]), e
    }(),
    ao = function() {
        function e(e, t) {
            er(this), this._sorcerer = e, this._codecType = t, this._sourceBuffer = null, this._activeStreamIndex = null, this._needsStreamSwitch = !1, this._needInitSegment = !0, this._lastAppended = null, this._toRemove = [], this._streams = [], this._quotaExceeded = !1, this._quotaExceededTimer = null, this._appendingFinalSegment = !1, this._finalSegmentTime = void 0, this._addingInitSegment = !1, this._isFirstSegment = !0, this._bufferState = {}, this._boundHandleUpdateEnd = this._handleUpdateEnd.bind(this), this._boundHandleBufferedChange = this._handleBufferedChange.bind(this), this._sorcerer.on("durationset", this._onDurationSet.bind(this))
        }
        var t = e.prototype;
        return t.addStream = function(e) {
            e.on("segmentadd", () => this._process());
            const t = this._streams.push(e) - 1;
            e.index = t, null === this._activeStreamIndex && (this._setActiveIndex(t), this._needsStreamSwitch = !0)
        }, t.streamIndexAtTime = function(e) {
            if (this._bufferState[void 0]) return this.activeStreamIndex;
            const t = this._calculateSegmentCount(e) - 1,
                n = this._bufferState[t];
            return null == n ? void 0 : n.stream
        }, t.switchTo = function(e, t = !0, n = {}) {
            let r = e;
            "object" == typeof e && (r = e.index);
            let i = this._activeStreamIndex !== r;
            const o = i;
            if (!i && this._needsStreamSwitch && (i = !0), i) {
                this._needsStreamSwitch = !1;
                const e = this._activeStreamIndex,
                    n = this._streams[e];
                this.fire("streamchangestart", e, r), n && o && t && n.abort(), this._switchToIndex = r, this._setActiveIndex(r)
            }
            return this._process(), new Promise(e => {
                i ? this._resolveSwitchComplete = () => {
                    this._switchToIndex === r && (this._resolveSwitchComplete = null, e(), this.fire("streamchange", r, n))
                } : e()
            })
        }, t.isTimeInBuffer = function(e) {
            for (let t = 0; t < this._sourceBuffer.buffered.length; t++) {
                const n = this._sourceBuffer.buffered.start(t),
                    r = this._sourceBuffer.buffered.end(t);
                if (n <= e && r >= e) return !0
            }
            return !1
        }, t.hasAppendedFinalSegment = function() {
            return void 0 !== this._finalSegmentTime && this.isTimeInBuffer(this._finalSegmentTime)
        }, t.clear = function() {
            this._streams.forEach(e => e.clear())
        }, t.remove = function(e, t = this._sorcerer._mediaSource.duration) {
            return new Promise((n, r) => {
                this._toRemove.push([e, t, n]), this._process()
            })
        }, t.removeEventListeners = function() {
            this._sourceBuffer && (this._sourceBuffer.removeEventListener("updateend", this._boundHandleUpdateEnd), Ge(this._sourceBuffer) && this._sourceBuffer.removeEventListener("bufferedchange", this._boundHandleBufferedChange))
        }, t._calculateSegmentCount = function(e) {
            let t = Math.floor(e / 6);
            return e > 6 && e % 6 >= 2 ? t += 1 : e < 8 && (t = 1), t
        }, t._onDurationSet = function() {
            const e = this._sorcerer._mediaSource.duration,
                t = this._calculateSegmentCount(e);
            for (let n = 0; n < t; n++) this._bufferState[n] = {
                segment: n,
                stream: null,
                type: this._codecType
            }
        }, t._attachEvents = function() {
            this._sourceBuffer.addEventListener("updateend", this._boundHandleUpdateEnd), Ge(this._sourceBuffer) && this._sourceBuffer.addEventListener("bufferedchange", this._boundHandleBufferedChange)
        }, t._setActiveIndex = function(e) {
            this._needInitSegment = !0, this._activeStreamIndex = e, this._sorcerer._frameDropper.streamIndex = e
        }, t._handleUpdateEnd = function() {
            this._checkEndOfStream(), this._updateBufferEnd(), this._process()
        }, t._handleBufferedChange = function(e) {
            var t;
            null == (t = e.removedRanges) || t.length
        }, t._handleVideoAndSourceBufferMismatch = function() {
            try {
                const e = this._sourceBuffer.buffered,
                    t = this._sorcerer._video.buffered;
                if (e.length && t.length) {
                    const n = e.start(0),
                        r = t.start(0);
                    n < r && this._sorcerer.removeBuffer(0, r)
                }
            } catch (e) {}
        }, t._checkEndOfStream = function() {
            if (this._appendingFinalSegment && this.endTime) return this._appendingFinalSegment = !1, this._finalSegmentTime = this.endTime, this._sorcerer.checkEndOfStream(), void this._handleVideoAndSourceBufferMismatch();
            !this.activeStream.hasNextSegment() && this._finalSegmentTime > 0 && "open" === this._sorcerer._mediaSource.readyState && this._sorcerer.checkEndOfStream()
        }, t._updateBufferEnd = function() {
            this._lastAppended && (this.fire("appendbufferend", this._lastAppended), this._lastAppended = null, this._resolveSwitchComplete && this._resolveSwitchComplete())
        }, t._process = function() {
            if (this._sourceBuffer) {
                if (this.activeStream && "closed" !== this._sorcerer._mediaSource.readyState && !this._sourceBuffer.updating)
                    if (this._toRemove.length) this._removeBuffer();
                    else if (!this._quotaExceeded && !this._addingInitSegment) return this._needInitSegment ? (this._needInitSegment = !1, void this._appendInitSegment()) : void this._appendSegment()
            } else this.on("sourcebufferattach", this._process)
        }, t._removeBuffer = function() {
            const [e, t, n] = this._toRemove.shift(), r = e => {
                this._sourceBuffer.removeEventListener("updateend", r), n(), clearTimeout(this._quotaExceededTimer), this._quotaExceededTimer = setTimeout(() => {
                    this._quotaExceeded = !1, this._process()
                }, 5e3)
            };
            this._sourceBuffer.addEventListener("updateend", r), this._sourceBuffer.remove(e, t)
        }, t._appendInitSegment = function() {
            this._addingInitSegment = !0, this.activeStream.getInitSegment().then(e => (this._lastAppended = null, this._sourceBuffer.appendBuffer(e), this._addingInitSegment = !1, e)).catch(e => {
                this._needInitSegment = !0, this._addingInitSegment = !1
            })
        }, t._appendSegment = function() {
            const e = this.activeStream.getNextSegment();
            if (null === e) return;
            const t = this.activeStream.getIdForSegment(e);
            this.activeStream.isFinal(e) && (this._appendingFinalSegment = !0), this._lastAppended = t, this.fire("appendbufferstart", t);
            try {
                this._sourceBuffer.appendBuffer(e), this._bufferState[t.segment] = t, this._isFirstSegment && (this._isFirstSegment = !1, this.fire("initialbufferstart"))
            } catch (xl) {
                if ("QuotaExceededError" === xl.name) {
                    this._quotaExceeded = !0, this.fire("quotaexceedederror", this._sourceBuffer.buffered);
                    const t = 6;
                    if (this._sorcerer._video.currentTime > t) {
                        const e = 0,
                            n = this._sorcerer._video.currentTime - t;
                        this._sorcerer.removeBuffer(e, n)
                    }
                    this.activeStream._readyToAppend.unshift(e)
                }
            }
        }, _e(e, [{
            key: "streams",
            get: function() {
                return this._streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return this._activeStreamIndex
            }
        }, {
            key: "activeStream",
            get: function() {
                return this._streams[this._activeStreamIndex]
            }
        }, {
            key: "sourceBuffer",
            get: function() {
                return this._sourceBuffer
            },
            set: function(e) {
                this._sourceBuffer = e, this._attachEvents(), this.fire("sourcebufferattach")
            }
        }, {
            key: "endTime",
            get: function() {
                const e = this._sourceBuffer.buffered;
                if (e.length > 0) return e.end(e.length - 1)
            }
        }]), e
    }();

function co() {}
let uo = function() {
        function e(e, t = "", n = new so) {
            er(this), this._readyToAppend = [], this._initSegment = e, this._needInitSegment = !0, this._index = NaN, this._codec = t, this._fetcher = n, this._fetcher.start(), this._bufferData = new WeakMap, this._segmentToId = {}
        }
        e.isValidSegmentUrl = function(e) {
            return "string" == typeof e || "string" == typeof e.url && "string" == typeof e.byteRange
        };
        var t = e.prototype;
        return t.getIdForSegment = function(t) {
            return e.isValidSegmentUrl(t) ? this._segmentToId[t] : this._bufferData.get(t).id
        }, t.isFinal = function(e) {
            return this._bufferData.get(e).final
        }, t.addSegment = function(t, {
            identifier: n = null,
            isFinalSegment: r = !1,
            loadOnly: i = !1,
            priority: o = 0,
            includeWithBandwidthChecks: s = !0,
            excludeConnectTime: a = !1,
            timeout: c = null,
            size: u = null
        } = {}) {
            return this._needInitSegment && this.getInitSegment(), e.isValidSegmentUrl(t) ? (this._segmentToId[t] = n || t, this.fire("queued", this.getIdForSegment(t)), this._fetcher.add({
                url: t.url || t,
                byteRange: t.byteRange,
                id: this.getIdForSegment(t),
                stream: this,
                includeWithBandwidthChecks: s,
                excludeConnectTime: a,
                isInitSegmentRequest: !1,
                priority: o,
                timeout: c,
                size: u
            }).then(e => {
                this._bufferData.set(e, {
                    id: n || t,
                    final: r
                }), this._readyToAppend.push(e), this.fire("bufferqueueadd", this.getIdForSegment(t)), i || this.fire("segmentadd")
            })) : (this._bufferData.set(t, {
                id: n,
                final: r
            }), this._readyToAppend.push(t), this.fire("bufferqueueadd", n), Promise.resolve())
        }, t.clear = function() {
            this._readyToAppend = []
        }, t.abort = function() {
            try {
                const e = this;
                return function(t, n) {
                    var r = function() {
                        if (e._needInitSegment) return function(e) {
                            if (e && e.then) return e.then(co)
                        }(function(t, n) {
                            try {
                                var r = function(e, t) {
                                    return e && e.then ? e.then(co) : Promise.resolve()
                                }(e.getInitSegment())
                            } catch (xl) {
                                return
                            }
                            return r && r.then ? r.then(void 0, n) : r
                        }(0, (function(e) {})))
                    }();
                    return r && r.then ? r.then(n) : n()
                }(0, (function() {
                    e._fetcher.abort(e)
                }))
            } catch (xl) {
                return Promise.reject(xl)
            }
        }, t.hasNextSegment = function() {
            return this._readyToAppend.length > 0
        }, t.getNextSegment = function() {
            return 0 === this._readyToAppend.length ? null : this._readyToAppend.shift()
        }, t.getInitSegment = function() {
            const t = "object" == typeof this._initSegment && "url" in this._initSegment ? this._initSegment.url : this._initSegment;
            return t ? (this._needInitSegment = !1, e.isValidSegmentUrl(t) ? this._fetcher.add({
                url: t,
                byteRange: this._initSegment.byteRange,
                id: null,
                stream: this,
                isInitSegmentRequest: !0,
                priority: 0
            }).then(e => (this._initSegment = e, this._initSegment)) : Promise.resolve(this._initSegment)) : Promise.resolve(null)
        }, _e(e, [{
            key: "codec",
            get: function() {
                return this._codec
            },
            set: function(e) {
                this._codec = e
            }
        }, {
            key: "index",
            get: function() {
                return this._index
            },
            set: function(e) {
                this._index = e
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }]), e
    }(),
    lo = function() {
        function e(e) {
            this._video = e, this._running = !1, this._droppedFramesTimeout = null, this._droppedFrameData = {}, this._decodedFrameData = {}, this._droppedFrames = 0, this._decodedFrames = 0, this._streamIndex = "default", this._attached = !1, this.bound = {
                startCheckingDroppedFrames: this._startCheckingDroppedFrames.bind(this),
                stopCheckingDroppedFrames: this._stopCheckingDroppedFrames.bind(this),
                handleVisibilityChanged: this._handleVisibilityChanged.bind(this)
            }
        }
        var t = e.prototype;
        return t.init = function() {
            this._attachEvents()
        }, t.start = function() {
            return this._startCheckingDroppedFrames(), this
        }, t.stop = function() {
            return this._stopCheckingDroppedFrames(), this
        }, t.destroy = function() {
            this._stopCheckingDroppedFrames(), this._removeEvents()
        }, t.getDroppedFrameRate = function(e, t, n = "average") {
            const r = this._droppedFrameData[t];
            if (!r) return 0;
            if (r.length < e) return 0;
            const i = r.slice(-e);
            return "median" === n ? Ji(i) : Qi(i)
        }, t.getDroppedFrameTotal = function() {
            return {
                dropped: this._getTotalDroppedFrames(),
                total: this._getTotalFrames()
            }
        }, t._attachEvents = function() {
            this._attached || (this._video.addEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.addEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.addEventListener("ended", this.bound.stopCheckingDroppedFrames), document.addEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !0)
        }, t._removeEvents = function() {
            this._video.removeEventListener("playing", this.bound.startCheckingDroppedFrames), this._video.removeEventListener("pause", this.bound.stopCheckingDroppedFrames), this._video.removeEventListener("ended", this.bound.stopCheckingDroppedFrames), document.removeEventListener("visibilitychange", this.bound.handleVisibilityChanged), this._attached = !1
        }, t._startCheckingDroppedFrames = function() {
            this._running = !0, this._checkDroppedFrames()
        }, t._stopCheckingDroppedFrames = function() {
            this._running = !1
        }, t._checkDroppedFrames = function() {
            if (!this._running || null === this._streamIndex) return;
            if (en.browser.safari && (document.hidden || "hidden" === document.visibilityState)) return;
            clearTimeout(this._droppedFramesTimeout);
            const e = this._getTotalDroppedFrames(),
                t = e - this._droppedFrames;
            this._droppedFrames = e;
            const n = this._getTotalDecodedFrames(),
                r = n - this._decodedFrames;
            this._decodedFrames = n, this._droppedFrameData[this._streamIndex] || (this._droppedFrameData[this._streamIndex] = []), this._decodedFrameData[this._streamIndex] || (this._decodedFrameData[this._streamIndex] = []), this._droppedFrameData[this._streamIndex].length > 100 && this._droppedFrameData[this._streamIndex].shift(), this._decodedFrameData[this._streamIndex].length > 100 && this._decodedFrameData[this._streamIndex].shift(), this._droppedFrameData[this._streamIndex].push(t), this._decodedFrameData[this._streamIndex].push(r), this._droppedFramesTimeout = setTimeout(() => {
                this._checkDroppedFrames()
            }, 1e3)
        }, t._handleVisibilityChanged = function() {
            !en.browser.safari || document.hidden && "hidden" === document.visibilityState || this._checkDroppedFrames()
        }, t._getTotalDroppedFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().droppedVideoFrames : this._video.webkitDroppedFrameCount || 0
        }, t._getTotalFrames = function() {
            return "function" == typeof this._video.getVideoPlaybackQuality ? this._video.getVideoPlaybackQuality().totalVideoFrames : this._video.webkitDecodedFrameCount || 0
        }, t._getTotalDecodedFrames = function() {
            if ("function" == typeof this._video.getVideoPlaybackQuality) {
                const e = this._video.getVideoPlaybackQuality();
                return e.totalVideoFrames - e.droppedVideoFrames - e.corruptedVideoFrames
            }
            return this._video.webkitDecodedFrameCount || 0
        }, _e(e, [{
            key: "streamIndex",
            get: function() {
                return this._streamIndex
            },
            set: function(e) {
                this._streamIndex = e
            }
        }]), e
    }(),
    ho = function() {
        function e(e, t = {}) {
            this._video = e, this._options = t, this.allowSegmentRequests = !0, this._createMediaSource(this._options.enableMMS), er(this);
            const {
                fetcherTimeout: n = 0,
                fetcherRetryAbortErrors: r = !0
            } = this._options;
            this._frameDropper = new lo(e), this._fetcher = new so({
                parallel: 1,
                timeout: n,
                retryAbortErrors: r
            }), this._buffersForCodec = {}, this._buffers = [], this._readyPromiseResolve = null, this._boundHandleSourceOpen = this._handleSourceOpen.bind(this), this._boundHandleSourceClose = this._handleSourceClose.bind(this), this._attachEvents()
        }
        var t = e.prototype;
        return t._createMediaSource = function(e = !1) {
            this._mediaSource = new(Xe(e))
        }, t.switchTo = function(e) {
            return 1 === this._buffers.length && this.video.switchTo(e)
        }, t.getCurrentSpeed = function({
            type: e = "average",
            howMany: t = 10,
            weights: n = [],
            percentile: r = null
        } = {}) {
            return "harmonicAverage" === e ? so.getHarmonicAverageSpeed(t) : "average" === e ? so.getAverageSpeed(t, n) : "median" === e ? so.getMedianSpeed(t) : so.getPercentileSpeed(t, r)
        }, t.getVolatilityScaler = function(e) {
            return so.getVolatilityScaler(e)
        }, t.getResponseSpeeds = function() {
            return so.getResponseSpeeds()
        }, t.getFailedSegments = function() {
            return so.getFailedSegments()
        }, t.getSuccessfulSegments = function() {
            return so.getSuccessfulSegments()
        }, t.getDroppedFrameRate = function(e, t = this.activeStreamIndex, n = "average") {
            return this._frameDropper.getDroppedFrameRate(e, t, n)
        }, t.getDroppedFrameTotal = function() {
            return this._frameDropper.getDroppedFrameTotal()
        }, t.clear = function() {
            this._buffers.forEach(e => e.clear())
        }, t.initFrameDropper = function() {
            this._frameDropper.init()
        }, t.streamIndexAtTime = function(e, t) {
            return this._buffersForCodec[t].streamIndexAtTime(e) ? this._buffersForCodec[t].streamIndexAtTime(e) : null
        }, t.removeBuffer = function(e = 0, t = this._video.duration) {
            if (e >= (t = t || 0)) return Promise.resolve();
            const n = this._buffers.map(n => n.remove(e, t));
            return Promise.all(n)
        }, t.setLiveSeekableRange = function(e, t) {
            var n;
            "open" === this._mediaSource.readyState && (null == (n = this._mediaSource) || n.setLiveSeekableRange(e, t))
        }, t.addStream = function(e, t) {
            const n = this._getCodecType(e);
            if (!this._buffersForCodec[n]) {
                const t = new ao(this, n);
                this._buffersForCodec[n] = t, this._buffers.push(t), this.readyPromise.then(() => {
                    let r;
                    try {
                        r = this._mediaSource.addSourceBuffer(e)
                    } catch (xl) {
                        if (22 !== xl.code) return void this.fire("srcnotsupported", xl);
                        r = this._buffersForCodec[n]
                    }
                    if (this._options.duration) {
                        const e = .1;
                        r.appendWindowEnd = this._options.duration + e
                    }
                    t.sourceBuffer = r
                }).catch(e => {}), ["appendbufferstart", "appendbufferend", "streamchange", "streamchangestart", "initialbufferstart", "quotaexceedederror"].forEach(e => {
                    t.on(e, t => {
                        this.fire(e, t)
                    })
                })
            }
            const r = new uo(t, e, this._fetcher);
            return ["queued", "bufferqueueadd"].forEach(e => {
                r.on(e, t => {
                    this.fire(e, t)
                })
            }), this._buffersForCodec[n].addStream(r), r
        }, t.checkEndOfStream = function() {
            if (!this._buffers.every(e => e.hasAppendedFinalSegment())) return;
            const e = () => {
                this._video.removeEventListener("timeupdate", e), this._buffers.every(e => e.isTimeInBuffer(this._video.currentTime)) && this.endOfStream()
            };
            this._video.addEventListener("timeupdate", e)
        }, t.abortFetches = function() {
            this._fetcher.abort()
        }, t.endOfStream = function() {
            "open" === this._mediaSource.readyState && (this._sourceBuffersAreUpdating() || (this._mediaSource.endOfStream(), this.fire("endofstream")))
        }, t.destroy = function() {
            this.clear(), this._removeEventListeners(), this.off(), this._frameDropper.destroy(), this._fetcher.abort(), this._video.src && (this._video.removeAttribute("src"), this._video.load())
        }, t._attachEvents = function() {
            this.readyPromise = new Promise((e, t) => {
                this._readyPromiseResolve = e, this._mediaSource.addEventListener("sourceopen", this._boundHandleSourceOpen), this._mediaSource.addEventListener("sourceclose", this._boundHandleSourceClose)
            }), ["downloadstart", "downloadend", "downloadabort", "downloaderror", "downloadtimeout", "progress"].forEach(e => {
                this._fetcher.on(e, (...t) => {
                    this.fire.apply(this, [e].concat(t))
                })
            }), qe(this._mediaSource) && (this._mediaSource.addEventListener("startstreaming", e => {
                this.allowSegmentRequests = !0
            }), this._mediaSource.addEventListener("endstreaming", e => {
                this.allowSegmentRequests = !1
            }))
        }, t._sourceBuffersAreUpdating = function() {
            for (let e = 0; e < this._mediaSource.sourceBuffers.length; e++)
                if (this._mediaSource.sourceBuffers[e].updating) return !0;
            return !1
        }, t._handleSourceOpen = function() {
            URL.revokeObjectURL(this._video.src), this._mediaSource.removeEventListener("sourceopen", this._boundHandleSourceOpen), this._options.duration && (this._mediaSource.duration = this._options.duration, this.fire("durationset")), this._readyPromiseResolve()
        }, t._handleSourceClose = function() {
            this._mediaSource.removeEventListener("sourceclose", this._boundHandleSourceClose), this.fire("sourceclose", event)
        }, t._removeEventListeners = function() {
            this._buffers.forEach(e => e.removeEventListeners())
        }, t._getCodecType = function(e) {
            return 0 === e.indexOf("audio") ? "audio" : "video"
        }, _e(e, [{
            key: "mediaSource",
            get: function() {
                return this._mediaSource
            }
        }, {
            key: "pendingFetches",
            get: function() {
                return this._fetcher.pendingFetches
            }
        }, {
            key: "streams",
            get: function() {
                return 1 === this._buffers.length && this.video.streams
            }
        }, {
            key: "activeStreamIndex",
            get: function() {
                return 1 === this._buffers.length && this.video.activeStreamIndex
            }
        }, {
            key: "video",
            get: function() {
                return !!this._buffersForCodec.video && this._buffersForCodec.video
            }
        }, {
            key: "audio",
            get: function() {
                return !!this._buffersForCodec.audio && this._buffersForCodec.audio
            }
        }]), e
    }();
let fo = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).BANDWIDTH_UPSWITCH_THRESHOLD = .85, r.BANDWIDTH_DOWNSWITCH_THRESHOLD = .9, r.DEFAULT_TIMEOUT = 8e3, r.SEGMENT_RELATIVE_TIMEOUT_RATIO = 4 / 3, r.MINIMUM_TIMEOUT = 1e3, r.FRAME_DROP_WINDOW_SECONDS = 10, r
        }
        ge(t, e), _e(t, [{
            key: "displayName",
            get: function() {
                return "Skyfire"
            }
        }]);
        var n = t.prototype;
        return n.shouldPowerUp = function(e, t, n) {
            n && this._options.startingBandwidthThreshold && (this.BANDWIDTH_UPSWITCH_THRESHOLD = this._options.startingBandwidthThreshold);
            let r = e.indexOf(t);
            if (-1 === r && (r = 0), !this.canPowerUp(e, r)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const i = this.getCurrentSpeed();
            if (!i) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const o = this._getStreamFromSpeed(i, this.BANDWIDTH_UPSWITCH_THRESHOLD, e);
            return o === r || !n && o > r && $e(this.scanner.currentTime, this.scanner._video.buffered) < 1.5 * this.SEGMENT_DURATION ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: o,
                reasonForSwitch: 3
            })
        }, n.shouldPowerDown = function(e, t) {
            const n = e.indexOf(t);
            if (-1 === n) {
                const t = this.isTimeInBuffer(this.scanner._video.duration, this.scanner._video.buffered, this.scanner._video.duration);
                return this.whitelisted.length || this.blacklisted.length || !t ? Promise.resolve({
                    index: e.length - 1,
                    reasonForSwitch: 6
                }) : Promise.resolve({
                    index: !1,
                    reasonForSwitch: null
                })
            }
            if (!this.canPowerDown(e, n)) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = this.getCurrentSpeed();
            if (!r) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this.hasTooManyDroppedFrames(n, t, this._options.droppedFrameSwitchPercent)) return this.blacklist(n), Promise.resolve({
                index: n - 1,
                reasonForSwitch: 2
            });
            const i = this._getStreamFromSpeed(r, this.BANDWIDTH_DOWNSWITCH_THRESHOLD, e);
            return i === n ? Promise.resolve({
                index: !1,
                reasonForSwitch: null
            }) : Promise.resolve({
                index: i,
                reasonForSwitch: 1
            })
        }, n.hasTooManyDroppedFrames = function(e, t, n) {
            return this.scanner.sorcerer.getDroppedFrameRate(this.FRAME_DROP_WINDOW_SECONDS, e, "median") / t.framerate * 100 >= n
        }, n.getTimeEstimateToLoad = function(e, t) {
            if (null === t) return 3;
            const n = t.segments[e],
                r = n.end - n.start,
                i = this.getCurrentSpeed();
            return r * (t.bitrate + t.audioBitrate) / i * 1.3
        }, n.canPlayFromTimeInStream = function(e, t) {
            if (!this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)) return !1;
            if (!t) return !1;
            const n = this.getSegmentsToLoad(!1, this.STREAM_TYPE_VIDEO, t);
            if (0 === n.length) return !0;
            const r = $e(e, this.scanner._video.buffered);
            return this.getTimeEstimateToLoad(n[0], t) < r
        }, n.getSegmentsToLoad = function(e, t = this.STREAM_TYPE_VIDEO, n) {
            const r = this.scanner._video;
            if (r.webkitCurrentPlaybackTargetIsWireless) return [];
            const i = this.scanner.currentTime,
                o = [],
                s = i + this._getSecondsToLoadAhead(i, r.duration, n),
                a = this.scanner.sorcerer[t].activeStreamIndex,
                c = this.scanner._streams[t][a];
            if (!c) return o;
            const u = this.scanner.sorcerer[t].sourceBuffer;
            let l = null;
            u && (l = u.buffered);
            for (let d = 0; d < c.segments.length; d++) {
                const t = c.segments[d];
                if (t.end < i || t.start > s) continue;
                const n = i >= t.start && i < t.end,
                    r = this._isSegmentInBuffer(t, l, this.scanner._video.duration, this.scanner._streams);
                !e && r || e && r && n || (n || s >= t.start) && o.push(d)
            }
            return o
        }, n.getSegmentRelativeTimeout = function(e, t, n) {
            var r;
            const i = null == t ? void 0 : t.bitrate,
                o = null == (r = e[0]) ? void 0 : r.bitrate;
            if (!i || !o || !n) return this.DEFAULT_TIMEOUT;
            if (i === o) return this.DEFAULT_TIMEOUT;
            const s = n * this.SEGMENT_RELATIVE_TIMEOUT_RATIO;
            return Math.max(this.MINIMUM_TIMEOUT, Math.min(this.DEFAULT_TIMEOUT, s))
        }, n._getStreamFromSpeed = function(e, t, n) {
            let r = 0;
            for (let i = r; i < n.length; i++) e * t > n[i].bitrate + n[i].audioBitrate && (r = i);
            return r
        }, t
    }(function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t) || this)._options = n, r.blacklisted = [], r.whitelisted = [], r.MAX_LOADABLE_SEGMENTS_AUTO = 3, r.MAX_LOADABLE_SEGMENTS_LOCKED = 15, r.SEGMENT_DURATION = 6, r
        }
        ge(t, e), _e(t, [{
            key: "displayName",
            get: function() {
                return "MediaSource"
            }
        }]);
        var n = t.prototype;
        return n.isTimeInBuffer = function(e, t, n) {
            return this._timesAreInRange(e, e, t, n, 1)
        }, n.getDistanceFromBuffer = function(e, t) {
            let n = e;
            for (let r = 0; r < t.length; r++)
                if (t.start(r) <= e && t.end(r) >= e) {
                    n = t.end(r);
                    break
                }
            return n - e
        }, n.blacklist = function(e) {
            this.blacklisted[e] = 1
        }, n.lock = function(e = []) {
            this.whitelisted = e
        }, n.filterStreams = function(e, t, n, r = null) {
            const i = [];
            let o, s = !1;
            for (let a = 0; a < e.length; a++)
                if (o && o[0] === e[a].width && o[1] === e[a].height) i.push(e[a]);
                else {
                    if (s) break;
                    this.blacklisted[a] && -1 === this.whitelisted.indexOf(a) || this.whitelisted.length && -1 === this.whitelisted.indexOf(a) || (this.whitelisted.length ? i.push(e[a]) : (this._getScaleFromDimensions(t, n, e[a].width, e[a].height, r) >= (n < 1e3 / (window.devicePixelRatio || 1) ? 1.75 : 1) && (s = !0), i.push(e[a]), o = [e[a].width, e[a].height]))
                }
            return i
        }, n.getCurrentSpeed = function() {
            let e = "average",
                t = 3,
                n = [1, 2, 5];
            return this._options.tests && this._options.tests.harmonic_average && this._options.tests.harmonic_average.group && (e = "harmonicAverage", t = this._getMaxLoadableSegmentsAuto(), n = []), this.scanner.sorcerer.getCurrentSpeed({
                type: e,
                howMany: t,
                weights: n
            })
        }, n.shouldUseSurroundSound = function(e, t) {
            return "240p" !== e[t].quality
        }, n.getAudioIndexFromVideo = function(e, t, n) {
            if (0 === t.length) return !1;
            if (!e[n]) return 0;
            const r = t.filter(({
                channels: e
            }) => e > 2);
            if (r.length > 0 && this.shouldUseSurroundSound(e, n)) {
                const e = r[r.length - 1];
                return t.indexOf(e)
            }
            return t.length > 1 && 0 === n && e[n].height <= 360 && e.length > 1 ? "mp4a.40.2" === t[0].codecs && t[0].bitrate < 8e4 && "240p" !== e[n].quality ? 1 : 0 : t.length - 1
        }, n._getVisibleDimensions = function(e, t, n, r) {
            const i = n / r,
                o = e - t * i,
                s = t - e / i;
            let a = e - o,
                c = t - s;
            return o > 0 && (c = t), s > 0 && (a = e), [a, c]
        }, n._getScaleFromDimensions = function(e, t, n, r, i = null) {
            const o = this._getVisibleDimensions(e, t, n, r);
            let s = n * r;
            i && (s *= i);
            const a = window.devicePixelRatio || 1;
            return s / (o[0] * o[1] * a * a)
        }, n._getMaxLoadableSegmentsAuto = function() {
            const e = function(e, t) {
                return e && e.tests && e.tests.lookahead_count ? e.tests.lookahead_count : null
            }(this._options);
            return e && e.group && e.data.count ? e.data.count : e && e.data.segment_lookahead_count ? e.data.segment_lookahead_count : this.MAX_LOADABLE_SEGMENTS_AUTO
        }, n._getSecondsToLoadAhead = function(e, t, n) {
            const r = n && n.bitrate > 11e6;
            return 1 === this.whitelisted.length ? r ? 30 : this.MAX_LOADABLE_SEGMENTS_LOCKED * this.SEGMENT_DURATION : this._getMaxLoadableSegmentsAuto() * this.SEGMENT_DURATION
        }, n._timesAreInRange = function(e, t, n, r, i = 0) {
            if (!n) return !1;
            t = Math.min(t, r);
            for (let o = 0; o < n.length; o++) {
                const r = n.start(o),
                    s = n.end(o),
                    a = Li(r) - i,
                    c = Li(s) + i;
                if (a <= e && c >= t) {
                    if (t < r || e > s) continue;
                    return !0
                }
            }
            return !1
        }, n._hasSeparateStreams = function(e) {
            return e.video.length > 0 && e.audio.length > 0
        }, n._isSegmentInBuffer = function(e, t, n, r) {
            let i = 1;
            return this._hasSeparateStreams(r) && (i = .1), this._timesAreInRange(e.start, e.end, t, n, i)
        }, t
    }(function() {
        function e(e) {
            this.scanner = e, this.STREAM_TYPE_VIDEO = "video", this.STREAM_TYPE_AUDIO = "audio"
        }
        _e(e, [{
            key: "displayName",
            get: function() {
                return "Brain"
            }
        }]);
        var t = e.prototype;
        return t.destroy = function() {}, t.shouldPowerUp = function(e, t) {
            return !1
        }, t.shouldPowerDown = function(e, t) {
            return !1
        }, t.canPowerUp = function(e, t) {
            return 1 !== e.length && t < e.length - 1
        }, t.canPowerDown = function(e, t) {
            return 1 !== e.length && t > 0
        }, t.filterStreams = function(e) {
            return e
        }, e
    }())),
    _o = function() {
        function e(e, t) {
            this._video = e, this._getCurrentStream = t
        }
        var t = e.prototype;
        return t.start = function() {
            return clearInterval(this._checkGapInterval), this._checkGapInterval = setInterval(this._checkGap.bind(this), 200), this._checkGap()
        }, t.stop = function() {
            clearInterval(this._checkGapInterval)
        }, t.onSegmentAppended = function() {
            this._checkGap()
        }, t._checkGap = function() {
            const e = this._video.buffered,
                t = this._video.currentTime,
                n = this._getGapIndex(e, t);
            if (0 === this._video.readyState) return !1;
            if (this._video.paused) return !1;
            const r = this._video.duration;
            if (t >= r) return this._video.currentTime = r - .1, !0;
            if (e.length <= n) return !1;
            const i = e.start(n);
            return !(i >= r || i - t > .5 || 0 !== n || (this.stop(), this._correctFirstSegmentStart("audio", i), this._correctFirstSegmentStart("video", i), this._video.currentTime = i, 0))
        }, t._getGapIndex = function(e, t) {
            if (!e || !e.length) return null;
            let n = 0;
            for (; n < e.length; n++) {
                const r = e.start(n),
                    i = e.end(n);
                if (r > t && (0 === n || i - t <= .1)) break
            }
            return n >= 0 ? n : null
        }, t._correctFirstSegmentStart = function(e, t) {
            const n = this._getCurrentStream(0, e);
            n && n.segments && n.segments[0] && (n.segments[0].start = t)
        }, e
    }();
let po = function() {
    function e(e, t = {}) {
        this._scanner = e, this.sessionId = t.sessionId, this.clipId = t.clipId
    }
    var t = e.prototype;
    return t.getLogAsQueryParam = function(e, t) {
        return this._buildCMCDQueryParam(this._getLog(e, t))
    }, t._getLog = function(e, t) {
        let n = {};
        return Object.assign(n, this._getStaticSessionData()), Object.assign(n, this._getDynamicSessionData(e, t)), n
    }, t._buildCMCDQueryParam = function(e) {
        return tt({
            CMCD: this._getObjectAsAlphabetizedString(e)
        })
    }, t._getStaticSessionData = function() {
        return {
            sid: `"${this.sessionId}"`,
            cid: `"${this.clipId}"`,
            st: this._getStreamType(),
            sf: this._getStreamingFormat()
        }
    }, t._getDynamicSessionData = function(e, t) {
        return {
            pr: this._scanner.playbackRate,
            br: this._scanner.getBitrateAtTime(this._scanner.currentTime, t) / 1e3,
            ot: this._getObjectType(t),
            bl: this._getBufferLength(e)
        }
    }, t._getObjectType = function(e) {
        switch (e) {
            case "audio":
                return "a";
            case "video":
                return "v";
            default:
                return "av"
        }
    }, t._getBufferLength = function(e) {
        return Math.round(1e3 * (parseFloat(e.end) - parseFloat(e.start)))
    }, t._getStreamType = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return "l";
            case "MediaSourceScanner":
            default:
                return "v"
        }
    }, t._getStreamingFormat = function() {
        switch (this._scanner.displayName) {
            case "HLSLiveScanner":
            case "NativeHLSLiveScanner":
                return '"hls"';
            case "MediaSourceScanner":
            default:
                return '"dash"'
        }
    }, t._getObjectAsAlphabetizedString = function(e) {
        let t = [],
            n = "";
        for (var r = 0, i = Object.entries(e); r < i.length; r++) {
            const [e, n] = i[r];
            t.push({
                key: e,
                value: n
            })
        }
        return t.sort((function(e, t) {
            return e.key.localeCompare(t.key)
        })).forEach(({
            key: e,
            value: t
        }) => {
            n += `${e}=${t},`
        }), n.replace(/,\s*$/, "")
    }, e
}();

function mo(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}
const vo = ["supported"];

function go(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}
const yo = new Map;

function Eo(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }
}
const To = Be("MediaCapabilities", "color: white; background-color: green"),
    So = Eo((function(e) {
        let t;
        const n = wo(e);
        return yo.get(n) || go((function() {
            if (en.mediaCapabilities) {
                const r = e.codecs.replace(/,.+/, ""),
                    i = {
                        type: "media-source",
                        video: {
                            contentType: `${e.mime_type}; codecs=${r}`,
                            width: e.width,
                            height: e.height,
                            bitrate: e.bitrate,
                            framerate: e.framerate
                        }
                    };
                return mo(navigator.mediaCapabilities.decodingInfo(i), (function(e) {
                    t = e, yo.set(n, t)
                }))
            }
        }), (function() {
            return t
        }))
    })),
    bo = Eo((function(e = []) {
        let t = !1,
            n = e,
            r = [],
            i = [];
        return go((function() {
            if (en.mediaCapabilities) return function() {
                if (0 !== e.length) return function(o, s) {
                    try {
                        var a = mo(Promise.all(e.map((function(e) {
                            return mo(So(e))
                        }))), (function(o) {
                            if (o) {
                                if (n = function(e, t) {
                                        return e.filter((e, n) => vo.every(e => t[n][e]) || (To(`Stream ${e.quality} is not supported`, t[n]), !1))
                                    }(e, o), 0 === n.length) return To("No compatible streams found. Returning all available streams as safeguard."), t = !0, {
                                    compatibleStreams: e,
                                    incompatibleStreams: r,
                                    incompatibleStreamsAttributes: i
                                };
                                n.length < e.length ? (r = e.filter(e => -1 === n.indexOf(e)), i = r.map(Ao), To("Some streams are not supported. Returning compatible streams.")) : To("All streams are supported.")
                            }
                        }))
                    } catch (xl) {
                        return s(xl)
                    }
                    return a && a.then ? a.then(void 0, s) : a
                }(0, (function(e) {
                    To("Error checking stream capabilities", e)
                }));
                To("No streams to check for MediaCapabilities support")
            }();
            To("MediaCapabilities API not supported")
        }), (function(e) {
            return t ? e : {
                compatibleStreams: n,
                incompatibleStreams: r,
                incompatibleStreamsAttributes: i
            }
        }))
    }));

function Ao(e) {
    const t = wo(e),
        n = yo.get(t);
    return n ? vo.filter(e => !n[e]) : []
}

function wo(e) {
    return `${e.mime_type};${e.codecs};${e.width};${e.height};${e.bitrate};${e.framerate}`
}

function Io(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Ro(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }
}
let ko = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).reset(), r.manifestLoadDurations = [], r._preserveCurrentTime = !1, n.mediaSourceScanner && (r._maxPreloadStreamIndex = n.mediaSourceScanner.maxPreloadStreamIndex), r
        }
        ge(t, e), t.supported = function(e) {
            const t = Xe(e);
            return void 0 !== t && t.isTypeSupported
        }, _e(t, null, [{
            key: "displayName",
            get: function() {
                return "MediaSourceScanner"
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                return ["application/vnd.vimeo.dash+json", "video/vnd.mpeg.dash.mpd"]
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.sorcerer && this.sorcerer.destroy(), this.reset()
        }, n.reset = function() {
            this._waitingOnSet = new Set, this._streamsForSegment = {}, en.browser.safari && (this._gapJumper = new _o(this._video, this._getCurrentStream.bind(this))), this.resetBrain(), this._setupCMCDLogger(), this._ready = !1, this._startedPlaying = !1, this._manifest = null, this._streams = {}, this._streams.audio = [], this._streams.video = [], this._audioStreams = [], this._onReady = null, this._baseUrl = null, this._lastTargetStreamId = null, this._timeToSeekTo = null, this._resolveSeek = null, this._resolveStartPreload = null, this._reloadingExistingVideo = !1, this._lastStreamIndex = null, this._checkSwitchUp = !1, this._clearBufferAtTime = !1, this._preloadStream = null, this._removeBufferPromise = null, this._ranIntoBuffer = !1, this._restrictedStreamIndexes = [], this._switching = {}, this._lastDownloadBitrate = 0, this._preloadSegmentStreamIndex = null, this._preserveCurrentTime = !1, clearInterval(this._loadSegmentsInterval), clearTimeout(this._slowLoadSegmentTimeout)
        }, n.resetBrain = function() {
            const e = this._options.mediaSourceScanner || {};
            e.tests = this._options.tests, this._brain && this._brain.destroy(), this._brain = new fo(this, e)
        }, n.preloadStream = function() {
            if (this._preloadStream) return this._preloadStream;
            let e = 0,
                t = 1;
            this._streams.audio.length && (t = 2);
            let n = this.sorcerer.video.activeStreamIndex;
            this._restrictedStreamIndexes.length && (n = this._restrictedStreamIndexes[0]);
            let r = 0;
            const i = this._brain.getSegmentsToLoad(!1, "video", n);
            i.length > 0 && (r = i[0]);
            let o = () => {};
            const s = (e = !1) => {
                    e && (n = this.sorcerer.video.activeStreamIndex), this._preloadSegmentStreamIndex = n, this._restartLoadSegmentsIntervalWithBackoff(!0)
                },
                a = n => {
                    e += 1, e < t || (n.segment === r && 0 === this._restrictedStreamIndexes.length ? this._getStreamIndexToLoadAndSwitchReason(!0).then(t => {
                        let {
                            index: r,
                            reasonForSwitch: i
                        } = t, a = {
                            reasonForSwitch: i
                        };
                        if (!1 !== r && r > n.stream) {
                            if (this.sorcerer.video.switchTo(r, !1, a), this._streams.audio.length) {
                                const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, r);
                                this.sorcerer.audio.switchTo(e, !1)
                            }
                            return e = 0, void s(!0)
                        }
                        o()
                    }).catch(console.error) : o())
                };
            return this._preloadStream = new Promise((e, t) => {
                o = () => {
                    const t = this._getCurrentStream(n).segments[0].end,
                        r = this._getDuration(!0);
                    if (this.currentTime >= r && (this.currentTime = r), this.currentTime > t && (this.sorcerer.clear(), this._waitingOnSet = new Set), this.sorcerer.video.switchTo(n, !1), this._streams.audio.length) {
                        const e = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n);
                        this.sorcerer.audio.switchTo(e, !1)
                    }
                    this.sorcerer.off("bufferqueueadd", a), this._preloadSegmentStreamIndex = null, this._ready = !0, e()
                }, this.sorcerer.on("bufferqueueadd", a), s()
            }), this._preloadStream
        }, n.loadManifest = function(e) {
            try {
                const t = this;
                return Io(t.video.metadata.p2pReady, (function() {
                    const n = Date.now();
                    return en.browser.ie && e && -1 !== e.indexOf("archive_playlist") ? (setTimeout(() => {
                        t._fireVideoError("MediaUnknownError", "An unknown error occurred.")
                    }, 250), new Promise(() => {})) : kt({
                        url: e,
                        timeout: 1e4,
                        type: de.MANIFEST
                    }).then(r => (r.url && r.url !== e && -1 !== r.url.indexOf("live-archive") && (t._baseUrl = r.url.split("/").slice(0, -2).join("/")), t.manifestLoadDurations.push({
                        url: e,
                        status: r.status,
                        duration: Date.now() - n
                    }), t.fire(Ti.MANIFEST_LOADED), r.text())).then(Ro((function(n) {
                        let r;
                        return function(i, o) {
                            var s = function() {
                                if (-1 !== e.indexOf(".mpd")) return Io(t._loadMediaManifest(), (function({
                                    parseMPD: t
                                }) {
                                    r = t(n, e)
                                }));
                                r = JSON.parse(n)
                            }();
                            return s && s.then ? s.then(o) : o()
                        }(0, (function() {
                            return r
                        }))
                    }))).catch(r => {
                        if (t.manifestLoadDurations.push({
                                url: e,
                                status: r.response && r.response.status,
                                duration: Date.now() - n
                            }), t.reset(), r instanceof ut && 410 === r.response.status) return t.fire(Ti.MEDIA_URL_EXPIRED), new Promise(() => {});
                        throw r instanceof ut && 400 === r.response.status ? t.fire(Ti.MEDIA_URL_BAD_REQUEST, r.response.url) : r instanceof dt && t.fire(Ti.MANIFEST_TIMEOUT), r
                    })
                }))
            } catch (xl) {
                return Promise.reject(xl)
            }
        }, n.setVideoSrc = function(e, t, n = !0) {
            if (n && !t && this._onReady) {
                var r;
                if (("metadata" === this._preload || "none" === this._preload && !this.paused) && !this._ready) return void this._onReady.then(() => {
                    const t = this.paused;
                    this.setVideoSrc(e, t, !1)
                }).catch(console.error);
                if ("sd-fallback" === (null == (r = this._telecineVideo.drmHandler) ? void 0 : r.state)) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !0, !1)
                }).catch(console.error);
                if ("auto" === this._preload) return void this._onReady.then(() => {
                    this.setVideoSrc(e, !1, !1)
                }).catch(console.error)
            }
            t && this.reset(), t || !this.paused || this.sorcerer || (t = !0);
            let i = this._initializeManifest;
            t && (i = this._initialize);
            const o = e.split("/");
            o.pop();
            const s = `${o.join("/")}/`;
            this._reloadingExistingVideo = !t, this._onReady = this._startPreload(e, this._preload).then(this.loadManifest.bind(this)).then(e => ("string" == typeof this._baseUrl && -1 !== this._baseUrl.indexOf("live-archive") || (this._baseUrl = s), e)).then(i.bind(this)), t && "auto" === this._preload && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this), !1)), this._onReady = this._addCatchToPromise(this._onReady)
        }, n.getBitrateAtTime = function(e, t) {
            if (!this.sorcerer) return 0;
            const n = this.sorcerer.streamIndexAtTime(e, t);
            return this._streams[t][n] ? this._streams[t][n].bitrate : 0
        }, n.lockStreamIndexes = function() {
            const e = this._restrictedStreamIndexes.map(e => this._streams.video.indexOf(this._streams.video[e])),
                t = !this.paused;
            if (t && (this._ignorePauseEvent = !0, this._video.pause()), this._switching.video = !1, this._brain.lock(e), !this._startedPlaying && "auto" !== this._preload) return;
            const n = Math.max(this.currentTime - 7, 0),
                r = Math.min(this.currentTime + 7, this._video.duration);
            this.sorcerer.removeBuffer(n, r).then(() => {
                !this._startedPlaying && "auto" === this._preload || this.ended ? this._loadSegments() : (this.seekToTime(this.currentTime), t && this.paused && (this._ignorePlayEvent = !0, this._video.play()))
            }).catch(console.error)
        }, n.seekToTime = function(e) {
            if (e === this.currentTime) return Promise.resolve();
            if (null === this._timeToSeekTo || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, this._handleScrubbing(), this._ready)
                for (const t in this._streams)
                    if (this._streams[t].length > 0) {
                        const e = this.sorcerer[t].activeStreamIndex;
                        this.sorcerer[t].streams[e].abort()
                    }
            return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._onReady, this._removeBufferPromise]).then(() => {
                this._loadSegments()
            }).catch(console.error), this._paused && 0 === e && this.fire(vi.SEEKING), this._onReady.then(() => this._seekInProgressPromise).catch(e => {})
        }, n.takeSnapshot = function() {
            this._switchingVideo && e.prototype.takeSnapshot.call(this)
        }, n.initDrm = function() {}, n.onstalled = function() {
            return !1
        }, n.onseeked = function(e) {
            this._startedPlaying && this._restartLoadSegmentsIntervalWithBackoff()
        }, n.onended = function(t) {
            return e.prototype.onended.call(this, t), !0
        }, n.onseeking = function(e) {
            this._startedPlaying
        }, n._handleScrubbing = function() {
            this._scrubStart(), clearTimeout(this._scrubTimeout), this._scrubTimeout = setTimeout(() => {
                this._scrubEnd()
            }, 200)
        }, n._scrubStart = function() {
            this._scrubbing || (this._scrubbing = !0)
        }, n._scrubEnd = function() {
            this._scrubbing = !1
        }, n.ontimeupdate = function(t) {
            if (!this.sorcerer) return !1;
            if (e.prototype.ontimeupdate.call(this), this._gapJumper && this._gapJumper.stop(), 0 === this.currentTime) return this._startedPlaying;
            if (this._timeToSeekTo) return !1;
            if (this._startedPlaying || (this._startedPlaying = !0), this._clearBufferAtTime && this.currentTime >= this._clearBufferAtTime) {
                const e = 2;
                this.sorcerer.removeBuffer(0, this._clearBufferAtTime - e), this._clearBufferAtTime = !1
            }
            const n = this.sorcerer.getDroppedFrameTotal();
            this.fire(Ti.DROPPED_FRAMES, n);
            const r = this.sorcerer.getResponseSpeeds(),
                i = this._streams.video[this.sorcerer.video.activeStreamIndex],
                o = this._options.tests && this._options.tests.download_bitrate;
            if ((!o || !o.group) && i && this._brain.getCurrentSpeed) {
                const e = {
                    speed: this._brain.getCurrentSpeed(),
                    bitrate: i.bitrate,
                    speeds: r
                };
                this.fire(Ti.BANDWIDTH, e)
            }
            const s = this._video.buffered.length;
            if (!s) return !0;
            const a = this._video.buffered.end(s - 1);
            return Math.ceil(a) === Math.ceil(this._video.duration) || (Math.abs(this.currentTime - a) < .2 ? (this._ranIntoBuffer || (this.fire(Ti.STREAM_BUFFER_START, {
                hasLowerStreamIndex: this.sorcerer.video.activeStreamIndex > 0
            }), this._ranIntoBuffer = !0), !1) : void 0)
        }, n._isEnded = function() {
            return !!this.ended || Math.ceil(this.currentTime) === Math.ceil(this._video.duration)
        }, n._loadSegmentsIntervalTick = function() {
            if (!this.sorcerer) return !1;
            if ("closed" === this.sorcerer._mediaSource.readyState) return !1;
            if (this._video.webkitCurrentPlaybackTargetIsWireless) return !1;
            if (this._isEnded()) return !1;
            if (null !== this._preloadSegmentStreamIndex) {
                try {
                    this._loadPreloadSegments()
                } catch (xl) {
                    return this._handleLoadSegmentFailures(xl), !1
                }
                return !0
            }
            if (0 === this.currentTime && !this._ready) return this._startedPlaying;
            const e = this._loadSegments();
            return e && "function" == typeof e.catch && e.catch(this._handleLoadSegmentFailures.bind(this)), !0
        }, n._handleLoadSegmentFailures = function(e) {
            e.code === DOMException.INVALID_STATE_ERR ? this.fire(Ti.SCANNER_ERROR, {
                reason: e
            }) : this.fire(Ti.LOAD_SEGMENT_FAILED, new Ni(`${Ti.LOAD_SEGMENT_FAILED} - ${e.name}`, e.message)), clearInterval(this._loadSegmentsInterval)
        }, n.onprogress = function() {
            this._brain.canPlayFromTimeInStream(this.currentTime, this._getCurrentStream()) && this._ranIntoBuffer && (this.fire(Ti.STREAM_BUFFER_END), this._ranIntoBuffer = !1)
        }, n.onwaiting = function() {
            return !this._gapJumper || !this._gapJumper.start()
        }, n.onerror = function() {
            return !!this._video.error && (this._video.error.code === this._video.error.MEDIA_ERR_DECODE ? (this.fire(Ti.SCANNER_ERROR, {
                reason: `encountered media decode error. Message: "${this._video.error.message}"`
            }), !1) : this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (this._preserveCurrentTime = !0, this.fire(Ti.SCANNER_ERROR, {
                reason: `encountered media source not supported error. Message: "${this._video.error.message}"`
            }), !1) : e.prototype.onerror.call(this))
        }, n.pause = function() {
            e.prototype.pause.call(this)
        }, n.play = function() {
            return this._restartLoadSegmentsIntervalWithBackoff(), e.prototype.play.call(this, () => (this._resolveStartPreload && this._resolveStartPreload(), this._reloadingExistingVideo || this._ready || "auto" === this._preload || (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), this._onReady.then(() => Promise.resolve(this._seekInProgressPromise))))
        }, n.onpause = function() {
            return this._ignorePauseEvent ? (this._ignorePauseEvent = !1, !1) : (e.prototype.onpause.call(this), !0)
        }, n.onplay = function() {
            return !this._ignorePlayEvent || (this._ignorePlayEvent = !1, !1)
        }, n._addCallbackToPromise = function(e, t, n = !0) {
            let r = e.then(t);
            return n && (r = this._addCatchToPromise(r)), r
        }, n._addCatchToPromise = function(e) {
            return e.catch(e => (this.fire(Ti.FILE_ERROR, {
                reason: e
            }), new Promise((e, t) => {})))
        }, n._handleBufferForSeek = function() {
            this._ready && this._streams.video[this.sorcerer.video.activeStreamIndex].bitrate / 1e3 > 12e3 && (this._removeBufferPromise = this.sorcerer.removeBuffer())
        }, n._startPreload = function(e, t) {
            return new Promise((n, r) => {
                "none" !== t || this._reloadingExistingVideo && !this.paused ? n(e) : this._resolveStartPreload = () => {
                    n(e), this._resolveStartPreload = null
                }
            })
        }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
            return new Promise((t, n) => {
                const r = this._startedPlaying && 0 === e,
                    i = this._brain.canPlayFromTimeInStream(e, this._getCurrentStream());
                r || i ? t(e) : (this._handleBufferForSeek(), this._resolveSeek = t)
            }).then(e => {
                this._timeToSeekTo = null, this._seekInProgressPromise = null;
                const t = new Promise((e, t) => {
                    this._lastSeekReject = t;
                    const n = () => {
                        e(this._video.currentTime), this._video.removeEventListener("seeked", n)
                    };
                    this._video.addEventListener("seeked", n)
                });
                return this._video.currentTime = e, t
            })
        }, n._handlePreloadChanged = function(e, t) {
            "auto" !== e && "auto" === t && (this._onReady = this._addCallbackToPromise(this._onReady, this.preloadStream.bind(this))), e !== t && "none" !== t && this._resolveStartPreload && this._resolveStartPreload()
        }, n._avDurationDifference = function(e) {
            const t = e.audio.reduce((e, t) => e + t.duration, 0),
                n = e.video.reduce((e, t) => e + t.duration, 0),
                r = t / e.audio.length,
                i = n / e.video.length;
            return r + 4 < i ? i - r : 0
        }, n._manifestContainsSegmentSizes = function(e) {
            return e.video.every(e => e.segments.every(e => "size" in e))
        }, n._initializeManifest = function(e) {
            const t = this;
            return new Promise(Ro((function(n, r) {
                if (t._manifest = e, t._streams.video = t._sortVideoStreams(e.video), e.audio) {
                    const n = t._avDurationDifference(e);
                    if (n > 0) return t.fire(Ti.AV_DURATION_MISMATCH, n), t.fire(Ti.SCANNER_ERROR, {
                        reason: "Encountered A/V duration mismatch"
                    }), void r();
                    const i = e.audio.filter(e => "opus" === e.codecs),
                        o = e.audio.filter(e => "opus" !== e.codecs),
                        s = en.browser.safari || en.iOS || en.iPadOS || !MediaSource.isTypeSupported('audio/mp4; codecs="opus"') || !i.length ? o : i;
                    t._streams.audio = t._sortAudioStreams(s)
                }
                for (let i = 0; i < t._streams.video.length; i++) {
                    let n = 0;
                    if (e.audio) {
                        const e = t._brain.getAudioIndexFromVideo(t._streams.video, t._streams.audio, i),
                            r = t._streams.audio[e];
                        r && (n = r.bitrate)
                    }
                    t._streams.video[i].audioBitrate = n
                }
                return t._initDrm(t._streams.video, t._streams.audio, t._manifest.key_info), t._manifestContainsSegmentSizes(e) || t.resetBrain(), t.fire(Ti.STREAMS_LOADED, t._streams), Io(bo(t._streams.video), (function({
                    compatibleStreams: e,
                    incompatibleStreams: r,
                    incompatibleStreamsAttributes: i
                }) {
                    t._streams.video = e, r.length && (t.fire(Ti.AVAILABLE_STREAMS_CHANGED), t.fire(Ti.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, {
                        incompatibleStreams: r,
                        incompatibleStreamsAttributes: i
                    })), n()
                }))
            })))
        }, n._setUpSorcerer = function(e, t) {
            if (this.sorcerer && this.sorcerer.destroy(), this.sorcerer = new ho(e, t), qe(this.sorcerer.mediaSource)) {
                const t = document.createElement("source");
                t.type = "video/mp4", t.src = URL.createObjectURL(this.sorcerer.mediaSource), e.appendChild(t);
                const {
                    src: n,
                    mime: r
                } = this._telecineVideo.externalDisplayFiles.AirPlay, i = document.createElement("source");
                i.type = r, i.src = n, e.appendChild(i)
            } else this._video.src = URL.createObjectURL(this.sorcerer.mediaSource);
            this.successfulSegments = this.sorcerer.getSuccessfulSegments(), this.failedSegments = this.sorcerer.getFailedSegments(), this._restartLoadSegmentsIntervalWithBackoff()
        }, n._restartLoadSegmentsIntervalWithBackoff = function(e = !1) {
            this._restartLoadSegmentsInterval(500), clearTimeout(this._slowLoadSegmentTimeout), this._slowLoadSegmentTimeout = setTimeout(() => {
                this._restartLoadSegmentsInterval(5e3)
            }, 6e4), e && this._loadSegmentsIntervalTick()
        }, n._restartLoadSegmentsInterval = function(e) {
            clearInterval(this._loadSegmentsInterval), this._loadSegmentsInterval = setInterval(() => {
                this._loadSegmentsIntervalTick()
            }, e)
        }, n._getDuration = function(e = !1) {
            let t = e ? 1 / 0 : 0;
            for (const n in this._streams) this._streams[n].length && (t = Math[e ? "min" : "max"](t, this._streams[n][0].duration));
            return t
        }, n._initialize = function(e) {
            return this._initializeManifest(e).then(() => {
                const t = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null,
                    n = this._brain.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, t).length - 1;
                let r = this._streams.video[0];
                this._restrictedStreamIndexes.length && (r = this._streams.video[this._restrictedStreamIndexes[0]]), void 0 !== this._maxPreloadStreamIndex && n <= this._streams.video.indexOf(e.video[this._maxPreloadStreamIndex]) && (r = this._streams.video[n]), this._setUpSorcerer(this._video, {
                    duration: this._getDuration(),
                    fetcherTimeout: 8e3,
                    fetcherRetryAbortErrors: !1,
                    enableMMS: this._options.enableMMS
                }), this.sorcerer.on("srcnotsupported", () => {
                    this.fire(Ti.SCANNER_ERROR, {
                        reason: "this codec is not supported for mediasource playback"
                    })
                }), this._video.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", e => {
                    const t = !this._video.webkitCurrentPlaybackTargetIsWireless,
                        n = "closed" === this.sorcerer._mediaSource.readyState;
                    t && n && this.fire(Ti.SCANNER_ERROR, {
                        reason: "MediaSource was closed during AirPlay, falling back to Native HLS playback."
                    })
                });
                const i = this._streams.video.indexOf(r);
                for (const e in this._streams) this._streams[e].forEach((t, n) => {
                    let r = this._getSegmentUrl(n, "init", e);
                    this._useRangeRequests(n, e) && this._streams[e][n].init_segment_range && (r = {
                        url: r,
                        byteRange: this._getRangeForSegment(n, "init", e)
                    }), this.sorcerer.addStream(`${t.mime_type}; codecs="${this._streams[e][n].codecs}"`, r)
                });
                this.sorcerer.video.switchTo(i, !0, {
                    reasonForSwitch: 7
                }), this.sorcerer.on("queued", this._handleQueued.bind(this)), this.sorcerer.on("downloadabort", this._handleAborted.bind(this)), this.sorcerer.on("appendbufferend", this._handleAppendBufferEnd.bind(this)), this.sorcerer.on("downloadstart", this._handleDownloadStart.bind(this)), this.sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this.sorcerer.on("downloaderror", this._handleDownloadError.bind(this)), this.sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this.sorcerer.on("quotaexceedederror", this._handleQuotaExceededError.bind(this)), this.sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this.sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this.sorcerer.mediaSource.addEventListener("sourceended", () => {
                    this.fire(vi.PROGRESS)
                })
            })
        }, n._sortVideoStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                const n = e.width * e.height * e.bitrate,
                    r = t.width * t.height * t.bitrate;
                return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
            })), t
        }, n._sortAudioStreams = function(e) {
            const t = e.slice(0);
            return t.sort((function(e, t) {
                return e.bitrate * e.channels - t.bitrate * t.channels
            })), t
        }, n._useRangeRequests = function(e, t) {
            return !!this._streams[t][e].segments[0].range
        }, n._getRangeForSegment = function(e, t, n) {
            return "init" === t ? this._streams[n][e].init_segment_range : this._streams[n][e].segments[t].range
        }, n._getSegmentPriority = function(e, t, n = "video") {
            return "init" === t ? 0 : this._streams[n][e].segments[t].start
        }, n._getSegmentUrl = function(e, t, n = "video", r = !1) {
            if ("init" === t && !this._streams[n][e].init_segment_range && -1 === this._streams[n][e].init_segment.indexOf(".")) return function(e) {
                return Pi(e).buffer
            }(this._streams[n][e].init_segment);
            let i = this._baseUrl;
            const o = this._manifest.base_url && -1 !== this._manifest.base_url.indexOf("//");
            if (o && (i = this._manifest.base_url), this._manifest.base_url && !o && (i += this._manifest.base_url), this._streams[n][e].base_url && (i += this._streams[n][e].base_url), this._useRangeRequests(e, n)) return i;
            if ("init" === t) return i += this._streams[n][e].init_segment, i;
            const s = this._streams[n][e].segments[t];
            s.url && (i += s.url);
            const a = -1 !== i.indexOf("akamaized"),
                c = -1 === i.indexOf("?") ? "?" : "&";
            return r && this.CMCDLogger && a && (i += `${c}${this.CMCDLogger.getLogAsQueryParam(s,n)}`), i
        }, n._key = function(e, t, n) {
            return `${e}:${t}:${n}`
        }, n._isFinalSegment = function(e, t, n) {
            return t === this._streams[n][e].segments.length - 1
        }, n._getCurrentlyLoadingStreamsForSegment = function(e, t) {
            const n = [],
                r = this._streamsForSegment[e];
            if (!r) return n;
            for (let i = 0; i < r.length; i++) this._waitingOnSet.has(this._key(r[i], e, t)) && n.push(r[i]);
            return n
        }, n.getCurrentStream = function(e = "video") {
            return this._getCurrentStream(0, e)
        }, n._getCurrentStream = function(e = 0, t = "video") {
            return void 0 !== this.sorcerer && (e = this.sorcerer[t].activeStreamIndex), this._streams[t][e]
        }, n._getStreamIndexToLoadAndSwitchReason = function(e) {
            let t = this._streams.video;
            const n = this.video && this.video.metadata.percentShown ? this.video.metadata.percentShown : null;
            if (t = this._brain.filterStreams(t, this._video.clientWidth, this._video.clientHeight, n), 0 === t.length) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            if (this._switching.video) return Promise.resolve({
                index: !1,
                reasonForSwitch: null
            });
            const r = t[t.length - 1];
            if (r.id !== this._lastTargetStreamId) {
                this._lastTargetStreamId = r.id;
                const e = {
                    index: this._streams.video.indexOf(r),
                    streams: this._streams.video
                };
                this.fire(Ti.STREAM_TARGET_CHANGE, e)
            }
            const i = this._getCurrentStream();
            return this._brain.shouldPowerUp(t, i, e).then(e => !1 === e.index ? this._brain.shouldPowerDown(t, i).then(e => !1 === e.index ? {
                index: e.index,
                reasonForSwitch: e.reasonForSwitch
            } : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            }) : {
                index: this._streams.video.indexOf(t[e.index]),
                reasonForSwitch: e.reasonForSwitch
            })
        }, n._loadSegmentsForType = function(e = "video") {
            return this.sorcerer.allowSegmentRequests ? this._getStreamIndexToLoadAndSwitchReason(!1).then(t => {
                let {
                    index: n,
                    reasonForSwitch: r
                } = t, i = {
                    reasonForSwitch: r
                };
                "audio" === e && (!1 === n && (n = this.sorcerer.video.activeStreamIndex), n = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, n), this.sorcerer.audio.activeStreamIndex === n && (n = !1));
                let o = !1;
                !1 !== n && (o = n > this.sorcerer[e].activeStreamIndex, this._switching[e] = !0, this.sorcerer[e].switchTo(n, !0, i).then(() => {
                    this._switching[e] = !1
                }).catch(console.error));
                let s = o;
                const a = this._brain.getSegmentsToLoad(s, e, this._getCurrentStream()),
                    c = this.sorcerer[e].activeStreamIndex;
                for (let u = 0; u < a.length; u++) {
                    const t = this._getSegmentUrl(c, a[u], e, !0),
                        n = this._getCurrentlyLoadingStreamsForSegment(a[u], e);
                    if (n.length > 1) continue;
                    if (1 === n.length && c <= n[0]) continue;
                    const r = this._isFinalSegment(c, a[u], e),
                        i = {
                            stream: c,
                            segment: a[u],
                            type: e
                        },
                        o = this.sorcerer[e].streams[c];
                    let s = t;
                    this._useRangeRequests(c, e) && (s = {
                        url: s,
                        byteRange: this._getRangeForSegment(c, a[u], e)
                    });
                    const l = this._getSegmentPriority(c, a[u], e),
                        d = "video" === e;
                    let h = null;
                    0 === c && "video" === e && (h = 16e3);
                    let f = null;
                    try {
                        f = this._streams[e][c].segments[a[u]].size
                    } catch (xl) {}
                    o.addSegment(s, {
                        identifier: i,
                        isFinalSegment: r,
                        priority: l,
                        includeWithBandwidthChecks: d,
                        timeout: h,
                        size: f
                    }).catch(e => {})
                }
            }).catch(e => {
                throw e
            }) : Promise.resolve()
        }, n._loadPreloadSegments = function() {
            for (const e in this._streams) {
                if (0 === this._streams[e].length) continue;
                let t = 0;
                const n = this._brain.getSegmentsToLoad(!1, e, this._getCurrentStream());
                n.length > 0 && (t = n[0]);
                let r = this._preloadSegmentStreamIndex;
                "audio" === e && (r = this._brain.getAudioIndexFromVideo(this._streams.video, this._streams.audio, this._preloadSegmentStreamIndex));
                const i = this._key(r, t, e);
                if (this._waitingOnSet.has(i)) continue;
                const o = this._getSegmentUrl(r, t, e),
                    s = this._isFinalSegment(r, t, e),
                    a = this.sorcerer[e].streams[r],
                    c = {
                        stream: r,
                        segment: t,
                        type: e
                    },
                    u = !0;
                let l = o;
                this._useRangeRequests(r, e) && (l = {
                    url: l,
                    byteRange: this._getRangeForSegment(r, t, e)
                }), a.addSegment(l, {
                    identifier: c,
                    isFinalSegment: s,
                    loadOnly: u,
                    priority: 0
                }).catch(e => {})
            }
        }, n._loadSegments = function() {
            const e = this._video.webkitCurrentPlaybackTargetIsWireless,
                t = "closed" === this.sorcerer._mediaSource.readyState;
            return e || t ? Promise.resolve() : this._onReady && this._onReady.then(e => {
                const t = [];
                for (const n in this._streams) this._streams[n].length > 0 && t.push(this._loadSegmentsForType(n));
                return Promise.all(t)
            })
        }, n._handleQueued = function(e) {
            this._waitingOnSet.add(this._key(e.stream, e.segment, e.type)), this._streamsForSegment[e.segment] || (this._streamsForSegment[e.segment] = []), -1 === this._streamsForSegment[e.segment].indexOf(e.stream) && this._streamsForSegment[e.segment].push(e.stream)
        }, n._clearWaitingOn = function(e) {
            (this._streamsForSegment[e.segment] || []).forEach(t => {
                this._waitingOnSet.delete(this._key(t, e.segment, e.type))
            })
        }, n._handleAborted = function(e) {
            this._streamsForSegment[e.segment] && this._clearWaitingOn(e)
        }, n._handleAppendBufferEnd = function(e) {
            this.fire(Ti.APPEND_BUFFER_END, {
                identifier: e
            }), this._restartLoadSegmentsIntervalWithBackoff(), this._checkSwitchUp && e.stream === this._lastStreamIndex && (this._checkSwitchUp = !1, this._clearBufferAtTime = this._streams.video[e.stream].segments[e.segment].start), this._streamsForSegment[e.segment] && this._clearWaitingOn(e);
            const t = this._brain.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream());
            null !== this._timeToSeekTo && this._resolveSeek && t && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null), this._gapJumper && this._gapJumper.onSegmentAppended()
        }, n._handleDownloadStart = function(e) {
            this.fire(Ti.DOWNLOAD_START, {
                identifier: e
            })
        }, n._handleDownloadEnd = function(e, t) {
            this.fire(Ti.DOWNLOAD_END, {
                identifier: e,
                data: t
            })
        }, n._handleDownloadError = function(e, t) {
            this._clearWaitingOn(e);
            let n = Ti.DOWNLOAD_ERROR;
            410 === t && (n = Ti.MEDIA_URL_EXPIRED), 502 === t && this.video.metadata.drm && (n = Ti.DRM_FAILURE), this.fire(n, {
                identifier: e,
                status: t
            })
        }, n._handleDownloadTimeout = function(e, t) {
            this.fire(Ti.DOWNLOAD_TIMEOUT, {
                identifier: e,
                data: t
            }), this._streamsForSegment[e.segment] && this._clearWaitingOn(e), "video" === e.type ? this._switching.video = !1 : "audio" === e.type && (this._switching.audio = !1)
        }, n._handleQuotaExceededError = function(e) {
            this.fire(Ti.QUOTA_EXCEEDED_ERROR, {
                buffered: e
            })
        }, n._handleStreamChangeStart = function(e, t) {
            const n = {
                previousStreamIndex: this._manifest.video.indexOf(this._streams.video[e]),
                index: this._manifest.video.indexOf(this._streams.video[t]),
                streams: this._manifest.video
            };
            this.fire(Ti.STREAM_CHANGE_START, n)
        }, n._handleStreamChange = function(e, t) {
            e > this._lastStreamIndex && this.currentTime > 0 && (this._checkSwitchUp = !0), this._lastStreamIndex = e;
            const n = {
                index: this._manifest.video.indexOf(this._streams.video[e]),
                streams: this._manifest.video,
                metadata: t
            };
            this.fire(Ti.STREAM_CHANGE, n)
        }, n._initDrm = function(e = [], t = [], n = {}) {
            const r = this._telecineVideo.drmHandler;
            if (!r) return;
            const i = {
                audio: t.map(e => `${e.mime_type};codecs="${e.codecs}"`),
                video: e.map(e => `${e.mime_type};codecs="${e.codecs}"`)
            };
            r.init(this, i, n), r.setFallbackCallback(() => this.pause())
        }, n._setupCMCDLogger = function() {
            var e, t;
            (null == (e = this._options.tests) || null == (t = e.cmcd) ? void 0 : t.group) && (this.CMCDLogger = new po(this, this._options.sessionMetadata))
        }, n._loadMediaManifest = function() {
            return import ("./media-manifest.module.js")
        }, _e(t, [{
            key: "preload",
            get: function() {
                return this._preload
            },
            set: function(e) {
                this._handlePreloadChanged(this._preload, e), this._preload = e
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._video
            }
        }, {
            key: "videoWidth",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.width : this._video.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                const e = this._getCurrentStream();
                return e ? e.height : this._video.videoHeight
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                return this._restrictedStreamIndexes
            },
            set: function(e) {
                this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._onReady.then(() => this.lockStreamIndexes()).catch(console.error))
            }
        }, {
            key: "currentTime",
            get: function() {
                return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
            },
            set: function(e) {
                (this._startedPlaying || 0 !== e) && this.seekToTime(e)
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._lastDownloadBitrate
            }
        }, {
            key: "brainDebug",
            get: function() {
                const e = this.sorcerer && this._brain && this._brain.getCurrentSpeed ? this._brain.getCurrentSpeed() : null;
                let t = this.sorcerer && this.sorcerer.getResponseSpeeds ? this.sorcerer.getResponseSpeeds() : null;
                return t = t ? t.slice(-20) : [], {
                    currentSpeed: e,
                    responseSpeeds: t
                }
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this.sorcerer ? this.sorcerer.video.activeStreamIndex > 0 : null
            }
        }, {
            key: "videoStreams",
            get: function() {
                return this._streams.video
            }
        }]), t
    }(zi),
    Po = function() {
        function e(e) {
            this._scanner = e, this._currentTime = 0, this._latencyInterval = setInterval(this._onLatencyInterval.bind(this), 500)
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._latencyInterval)
        }, t._onLatencyInterval = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return;
            this._currentTime = e.currentTime;
            const n = this._computeLatency();
            null !== n && (this._latency = n, this._scanner.fire(Si.LATENCY_UPDATED, n), this._scanner.lowLatencyMode && (en.browser.ie || en.browser.safari || null !== this._scanner.presentationDelay && (e.playbackRate = 1)))
        }, t._estimateLiveEdge = function() {
            const e = this._scanner.getCurrentStream();
            return e ? e.edge + e.age : null
        }, t._computeLatency = function() {
            const e = this._estimateLiveEdge();
            return null === e || 0 === this._currentTime ? null : e - this._currentTime
        }, t._getForwardBufferLength = function() {
            const e = this._scanner.videoElement,
                t = this._scanner.getCurrentStream();
            if (!e || !t) return 0;
            const n = e.buffered.length;
            return n ? e.buffered.end(n - 1) : t.edge - this._currentTime
        }, _e(e, [{
            key: "latency",
            get: function() {
                return this._latency
            }
        }, {
            key: "liveSyncPosition",
            get: function() {
                const e = this._estimateLiveEdge(),
                    t = this._scanner.presentationDelay,
                    n = this._scanner.getCurrentStream();
                return null === e || null === t || null === n ? 0 : e - t - this.edgeStalled
            }
        }, {
            key: "edgeStalled",
            get: function() {
                const e = this._scanner.getCurrentStream();
                if (!e) return 0;
                const t = 3 * (this._scanner.lowLatencyMode && e.partTargetDuration || e.targetDuration);
                return Math.max(e.age - t, 0)
            }
        }]), e
    }();
const Do = [1, 2, 5];
let Oo = function(e) {
    function t(t, n = {}) {
        var r;
        return (r = e.call(this, t, n) || this)._UPSHIFT_BANDWIDTH_THRESHOLD = .4, r._DOWNSHIFT_BANDWIDTH_THRESHOLD = .6, r.consecutiveStreamIndex = {}, r.isNewPlayback = !0, r
    }
    ge(t, e), _e(t, [{
        key: "displayName",
        get: function() {
            return "Live"
        }
    }]);
    var n = t.prototype;
    return n.optimalStream = function(e, t) {
        var n, r;
        this.isNewPlayback && ((null == (r = this.scanner.sorcerer) ? void 0 : r.getResponseSpeeds().length) >= 2 && (this.isNewPlayback = !1));
        if (1 === e.length) return {
            index: 0,
            reasonForSwitch: 6
        };
        if (this.isNewPlayback) {
            let t = 0,
                n = 0,
                r = this.scanner.videoElement.clientHeight,
                i = [];
            for (let o = 0; o < e.length; o++) {
                let s = e[o].height;
                i.push(s), s < r && s > n && (t = o, n = e[o].height)
            }
            return t = Math.max(0, t - 1), {
                index: t,
                reasonForSwitch: 4
            }
        }
        const i = this.getCurrentSpeed();
        let o = t,
            s = t;
        for (let f = 0; f < e.length; f++) i * this._UPSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (o = f), i * this._DOWNSHIFT_BANDWIDTH_THRESHOLD > e[f].bandwidth && (s = f);
        const a = t < o ? o : s;
        this._clearConsecutiveStreamIndexes(a), this.consecutiveStreamIndex[a]++;
        const c = this.scanner.lowLatencyMode ? .5 : 1.5,
            u = this.scanner.segmentLength * c,
            l = this.scanner.videoElement,
            d = l.buffered,
            h = null == (n = this._options.mediaSourceScanner) ? void 0 : n.droppedFrameSwitchPercent;
        return d && 0 !== d.length ? d.end(d.length - 1) - l.currentTime < u ? {
            index: 0 !== t ? t - 1 : 0,
            reasonForSwitch: 1
        } : t > 0 && !isNaN(h) && this.hasTooManyDroppedFrames(t, this.scanner.getCurrentStream(), h) ? (this.blacklist(t), this.scanner.fire(Ti.DROPPED_FRAME_PERCENT_EXCEEDED), {
            index: t - 1,
            reasonForSwitch: 2
        }) : this.consecutiveStreamIndex[a] > 2 && a !== t ? {
            index: a,
            reasonForSwitch: 3
        } : {
            index: t,
            reasonForSwitch: null
        } : {
            index: 0,
            reasonForSwitch: 5
        }
    }, n.getCurrentSpeed = function() {
        var e;
        return null == (e = this.scanner.sorcerer) ? void 0 : e.getCurrentSpeed({
            type: "average",
            howMany: 5,
            weights: Do
        })
    }, n._clearConsecutiveStreamIndexes = function(e) {
        this.consecutiveStreamIndex[e] || (this.consecutiveStreamIndex[e] = 0);
        for (const t in this.consecutiveStreamIndex) this.consecutiveStreamIndex.hasOwnProperty(t) && parseInt(t, 10) !== e && (this.consecutiveStreamIndex[t] = 0)
    }, n.getAvailabilityStart = function(e, t) {
        return this._getSegmentAvailabilityStart(e, t.edge)
    }, n.getAvailabilityEnd = function(e, t) {
        return this._getSegmentAvailabilityEnd(e, t.edge)
    }, n.canPlayFromTimeInStream = function(e, t) {
        return !!t && this.isTimeInBuffer(e, this.scanner._video.buffered, this.scanner._video.duration)
    }, n.getSegmentsToLoad = function(e, t, n) {
        var r, i, o, s;
        const {
            currentTime: a,
            liveTailTime: c,
            sorcerer: u,
            bufferTarget: l,
            atLiveEdge: d
        } = this.scanner, h = null == (r = u[t]) || null == (i = r.sourceBuffer) ? void 0 : i.buffered, f = (null == h ? void 0 : h.length) ? h.start(h.length - 1) : 0, _ = Ye(Math.max(a, f), h);
        if (!e && _ >= l) return [];
        const p = Math.max(a, c),
            m = d ? n.edge : p,
            v = this._getSegmentAvailabilityStart(m, n.edge),
            g = this._getSegmentAvailabilityEnd(m, n.edge),
            y = this.scanner.lowLatencyMode && (null == (o = n.parts) ? void 0 : o.length),
            E = [].concat(Ie(n.segments), Ie(null !== (s = n.parts) && void 0 !== s ? s : [])),
            T = (y ? n.parts : E).filter(t => !!t.uri && (e || !this.scanner.isSegmentAdded(t)) && !(t.end < v || t.start > g));
        return y && T.forEach((e, t) => {
            for (; e = e.dependentOn;) T.includes(e) || this.scanner.isStreamSegmentAdded(e) || T.splice(t, 0, e)
        }), u[t].activeStreamIndex, T
    }, n._getSegmentAvailabilityStart = function(e, t) {
        const n = t - this._getPresentationDelay();
        return Math.max(0, Math.min(e, n))
    }, n._getSegmentAvailabilityEnd = function(e, t) {
        const n = e + this.scanner.bufferTarget;
        return Math.min(n, t)
    }, n._getPresentationDelay = function() {
        return this.scanner.presentationDelay || this.scanner.manifest.presentationDelay
    }, t
}(fo);
const Co = ["disabled", "hidden", "showing"],
    Lo = ["subtitles", "captions", "descriptions", "chapters", "metadata"],
    No = ["ar", "fa", "he", "iw", "ku", "ps", "sd", "ur", "yi"],
    Mo = new WeakMap,
    xo = new WeakMap;
let Uo = function() {
    function e({
        kind: e,
        src: t = null,
        label: n = "",
        language: r = "",
        id: i = st()
    }, o) {
        if (-1 === Lo.indexOf(e)) throw Ui(12, "SYNTAX_ERR", "Syntax Error");
        er(this), Object.defineProperties(this, {
            kind: {
                value: e,
                enumerable: !0
            },
            label: {
                value: n,
                enumerable: !0
            },
            language: {
                value: r,
                enumerable: !0
            },
            id: {
                value: `${i}`,
                enumerable: !0
            },
            rtl: {
                value: -1 !== No.indexOf(r.substr(0, 2)),
                enumerable: !0
            }
        }), this.video = o, this.src = t, this._modeHasBeenSet = !1, Mo.set(this, "disabled")
    }
    return e.prototype.dispatchEvent = function(e) {
        this.fire(e, {
            target: this
        })
    }, _e(e, [{
        key: "mode",
        get: function() {
            return Mo.get(this)
        },
        set: function(e) {
            if (Co.indexOf(e) > -1) {
                if (this._modeHasBeenSet = !0, Mo.get(this) === e) return;
                Mo.set(this, e), this.video.currentScanner && this.video.currentScanner.setModeForTrack(this, e), this.dispatchEvent("modechange")
            }
        }
    }, {
        key: "src",
        get: function() {
            return xo.get(this)
        },
        set: function(e) {
            xo.set(this, e), this.video.fire(Ti.TEXT_SRC_UPDATE, this)
        }
    }, {
        key: "cues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getCuesForTrack(this) : []
        }
    }, {
        key: "activeCues",
        get: function() {
            return this.video.currentScanner ? this.video.currentScanner.getActiveCuesForTrack(this) : []
        }
    }, {
        key: "trackElement",
        get: function() {
            return document.getElementById(`telecine-track-${this.id}`)
        }
    }]), e
}();

function Fo(e) {
    var t = /^(?:(\d{2,}):)?(\d{2}):(\d{2})[,.](\d{3})$/.exec(e);
    if (!t) return -1;
    var n = parseInt(t[4], 10) / 1e3;
    return n += parseInt(t[3], 10), t[2] && (n += 60 * parseInt(t[2], 10)), t[1] && (n += 60 * parseInt(t[1], 10) * 60), n
}

function jo(e) {
    var t = 0,
        n = e.split(/(?:(?:\r\n|\n){2,})/),
        r = [],
        i = null;
    do {
        0 === t && /^\uFEFF?WEBVTT(?: .*)?/.test(n[t]) && t++, (i = /^(?:(.*)(?:\r\n|\n))?([\d:,.]+) --> ([\d:,.]+)(.*)?(?:\r\n|\n)([\s\S]*)/.exec(n[t])) && r.push({
            startTime: Fo(i[2]),
            endTime: Fo(i[3]),
            text: i[5]
        }), t++
    } while (t < n.length);
    return r
}

function Vo(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function Bo(e, t) {
    try {
        var n = e()
    } catch (xl) {
        return t(xl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function Ho(e, t) {
    return e && e.then ? e.then(t) : t(e)
}

function Xo() {}

function qo(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function Go(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }
}

function Wo(e, t) {
    if (!t) return e && e.then ? e.then(Xo) : Promise.resolve()
}
const Ko = en.browser.ie || en.browser.edge ? .5 : .2;
let Yo = function(e) {
    function t(t, n = {}) {
        var r, i, o, s, a, c, u, l;
        return (l = e.call(this, t, n) || this)._playInitiated = !1, l._captionsVisible = !1, l._captionsLoading = !1, l._atLiveEdge = !0, l._atLiveTail = !1, l._STREAM_SWITCH_CHECK_INTERVAL = 2e3, l._DOWN_SHIFT_CHECK_INTERVAL = 1e4, l.reset(), l.defaultPresentationDelay = null !== (r = n.presentationDelay) && void 0 !== r ? r : n.lowLatencyMode ? 3 : 12, l.defaultBufferTarget = n.lowLatencyMode ? 3 : 12, l.bufferTarget = l.defaultBufferTarget, l.presentationDelay = l.defaultPresentationDelay, l.lowLatencyMode = null !== (i = n.lowLatencyMode) && void 0 !== i && i, l.disableDeltaUpdates = null !== (o = n.disableDeltaUpdates) && void 0 !== o && o, Object.defineProperty(we(l), "eventIsLowLatency", {
            value: null !== (s = n.lowLatencyMode) && void 0 !== s && s,
            writable: !1
        }), Object.defineProperty(we(l), "eventHasDVREnabled", {
            value: null !== (a = n.dvrEnabled) && void 0 !== a && a,
            writable: !1
        }), l._timeoutTest = null == (c = l._options.tests) || null == (u = c.llhls_timeout) ? void 0 : u.group, window.addEventListener("online", () => {
            l.play()
        }), l
    }
    ge(t, e), t.supported = function(e) {
        const t = Xe(e);
        return void 0 !== t && t.isTypeSupported
    }, _e(t, null, [{
        key: "displayName",
        get: function() {
            return "HLSLiveScanner"
        }
    }, {
        key: "supportedVideoTypes",
        get: function() {
            return ["application/x-mpegURL"]
        }
    }]);
    var n = t.prototype;
    return n.deactivate = function() {
        e.prototype.deactivate.call(this), this.reset()
    }, n.reset = function() {
        var e, t, n;
        null == (e = this._sorcerer) || e.destroy(), null == (t = this._manifestLoader) || t.stop(), null == (n = this._latencyController) || n.destroy(), this._videoReady = new Ke, this._sorcerer = null, this._streams = {}, this._streams.video = [], this._streams.audio = [], this._lastStreamIndex = 0, this._isOnline = !1, this._hasLiveEventEnded = !1, this._timeSinceLastStreamSwitchCheck = 0, this._timeSinceLastDownShift = Number.NEGATIVE_INFINITY, this._lastStallCurrentTime = -1, this._timeToSeekTo = null, this._resolveSeek = null, this._abr = new Oo(this, this._options), this._latencyController = new Po(this), this._restrictedStreamIndexes = [], this._switching = {}, this._segmentsAdded = {}, this._captionsAddedToTextTrack = {}, this._captionsAddedToTranscript = {}, this._fetchedCues = {}
    }, n.endLive = function() {
        var t;
        this._isOnline = !1, this._hasLiveEventEnded = !0, this.eventHasDVREnabled && !this.atLiveEdge || (null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._sorcerer.endOfStream()), this.eventHasDVREnabled || e.prototype.deactivate.call(this), this.fire(vi.ENDED))
    }, n._signalOnline = function() {
        this._isOnline || (this._isOnline = !0, this.fire(Si.STREAM_ONLINE))
    }, n._signalOffline = function() {
        this._isOnline && (this._isOnline = !1, this.fire(Si.STREAM_OFFLINE))
    }, n._toggleConnection = function(e) {
        e ? this._signalOnline() : this._signalOffline()
    }, n._loadManifest = function(e) {
        try {
            const t = this;
            if (t._hasLiveEventEnded) return;
            t._manifestLoader && (t._manifestLoader.stop(), t._manifestLoader.off());
            let n = [t._loadMediaManifest()];
            return t.video.metadata.p2pReady && n.push(t.video.metadata.p2pReady), Vo(Promise.allSettled(n), (function([n]) {
                const {
                    M3U8Loader: r,
                    PLAYLIST_UPDATE: i,
                    PLAYLIST_ERROR: o,
                    convertTsCodecs: s
                } = n.value;
                return t._manifestLoader = new r({
                    disableDeltaUpdates: t.disableDeltaUpdates
                }), t._manifestLoader.lowLatencyMode = t.lowLatencyMode, t._manifestLoader.dvrEnabled = t.eventHasDVREnabled, t._manifestLoader.on(i, t._onPlaylistUpdate.bind(t)), t._manifestLoader.on(o, e => {
                    t._signalOffline()
                }), Ho(Bo((function() {
                    const n = t.video.metadata.playlistRefreshUrl;
                    return Vo(t._manifestLoader.start(e, n), (function(e) {
                        t._manifest = e, t._signalOnline()
                    }))
                }), (function(e) {
                    throw t._signalOffline(), t.endLive(), e
                })), (function(e) {
                    t._streams.video = $o(function(e) {
                        return e.filter(t => t.codecs.split(".")[0] === e[0].codecs.split(".")[0])
                    }(function(e) {
                        const t = e.slice(0);
                        return t.sort((function(e, t) {
                            const n = e.width * e.height * e.bitrate,
                                r = t.width * t.height * t.bitrate;
                            return e.width === t.width && e.height === t.height ? e.framerate - t.framerate : n - r
                        })), t
                    }(t._manifest.video))), t._streams.audio = $o(De(Oe(t._streams.video, ({
                        audio: e
                    }) => e)));
                    const {
                        index: n,
                        reasonForSwitch: r
                    } = t._getStream("video", !0);
                    let i = {
                        reasonForSwitch: r
                    };
                    return Vo(t._manifestLoader.switchTo("video", n), (function() {
                        let e, r = [];
                        if (t._streams.audio.length) {
                            let {
                                index: n
                            } = t._getStream("audio", !0);
                            e = n, r.push(t._manifestLoader.switchTo("audio", e))
                        }
                        if (t.manifest.captions && t.manifest.captions.length > 0) {
                            const {
                                index: e
                            } = t._getStream("subtitles", !0);
                            r.push(t._manifestLoader.switchTo("subtitles", e))
                        }
                        return Vo(Promise.all(r), (function() {
                            var r, o;
                            null == (r = t._sorcerer) || r.destroy(), t._sorcerer = new ho(t._video, {
                                fetcherRetryAbortErrors: !1,
                                fetcherTimeout: 8e3,
                                enableMMS: t._options.enableMMS
                            }), t._sorcerer.initFrameDropper(), t._streams.video.forEach(e => {
                                t._sorcerer.addStream(s(Ci(t._manifestLoader.activeStream("video").mimeType, e.codecs)), e.initSegment)
                            }), t._streams.audio.forEach(e => {
                                t._sorcerer.addStream(s(Ci(t._manifestLoader.activeStream("audio").mimeType, e.codecs)), e.initSegment)
                            }), t.fire(Ti.STREAMS_LOADED, t._streams), t.manifest.captions && t.manifest.captions.length > 0 && (t.manifest.captions.forEach(t._loadTextTrack.bind(t)), t.fire(Ti.TEXT_TRACKS_AVAILABLE)), t._setUpMediaSorcererEvents(), t._sorcerer.video.switchTo(n, !1, i), t._streams.audio.length && (null == (o = t._sorcerer.audio) || o.switchTo(e, !1))
                        }))
                    }))
                }))
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._refreshManifest = function() {
        try {
            const e = this;
            return function(e) {
                if (e && e.then) return e.then(Xo)
            }(Bo((function() {
                return Vo(e._manifestLoader.update(), (function() {
                    e._signalOnline()
                }))
            }), (function() {
                e._signalOffline()
            })))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._setUpMediaSorcererEvents = function() {
        this._sorcerer.video.on("streamchange", this._handleStreamChange.bind(this)), this._sorcerer.video.on("streamchangestart", this._handleStreamChangeStart.bind(this)), this._sorcerer.on("downloadend", this._handleDownloadEnd.bind(this)), this._sorcerer.on("downloadtimeout", this._handleDownloadTimeout.bind(this)), this._sorcerer.on("downloadabort", this._handleDownloadAbort.bind(this)), this._sorcerer.on("appendbufferend", this._handleBufferAppend.bind(this))
    }, n._handleDownloadEnd = function(e, t) {
        if (e && e.isInitSegmentRequest) return;
        const n = this._getCurrentStream();
        t.extraContext = {
            liveAvail: {
                start: this._abr.getAvailabilityStart(this.currentTime, n),
                end: this._abr.getAvailabilityEnd(this.currentTime, n)
            }
        }, this.fire(Ti.DOWNLOAD_END, {
            identifier: e,
            data: t
        })
    }, n._handleDownloadTimeout = function(e, t) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e), this._switching[e.type] = !1, this.fire(Ti.DOWNLOAD_TIMEOUT, {
            identifier: e,
            data: t
        }))
    }, n._handleDownloadAbort = function(e) {
        e && e.isInitSegmentRequest || (this._key(e), this._clearSegment(e))
    }, n._handleStreamChangeStart = function(e, t) {
        const n = {
            previousStreamIndex: this._streams.video.indexOf(this._streams.video[e]),
            index: this._streams.video.indexOf(this._streams.video[t]),
            streams: this._streams.video
        };
        this.fire(Ti.STREAM_CHANGE_START, n)
    }, n._handleStreamChange = function(e, t = {}) {
        this.fire(Ti.STREAM_CHANGE, {
            index: e,
            streams: this._streams.video,
            metadata: t
        })
    }, n._firstBufferAheadIndex = function(e, t) {
        for (let n = 0; n < (null == t ? void 0 : t.length); n++)
            if (t.start(n) > e) return n
    }, n._handleBufferAppend = function(e) {
        var t;
        const {
            type: n,
            stream: r
        } = e, i = this.sorcerer[n].sourceBuffer.buffered, o = this._getSegmentById(e);
        if (o && i.length && (this._streams[n][r].playlist.timeOffset = i.end(i.length - 1) - (o.end - o.timeOffset)), null === this._timeToSeekTo || !this._resolveSeek) return;
        const s = this._firstBufferAheadIndex(this.currentTime, i),
            a = null !== (t = null == i ? void 0 : i.start(s)) && void 0 !== t ? t : 0,
            c = Ye(a, i);
        void 0 !== s && c > this.bufferTarget ? (Number((a - this.currentTime).toFixed(3)), this.currentTime = a) : (this._timeToSeekTo < this.liveTailTime && (this._timeToSeekTo = this.liveTailTime), this._abr.canPlayFromTimeInStream(this._timeToSeekTo, this._getCurrentStream()) && (this._resolveSeek(this._timeToSeekTo), this._resolveSeek = null))
    }, n._key = function({
        type: e,
        segment: t,
        part: n
    }) {
        return `${e}_${t}_${n}`
    }, n._getSegmentById = function({
        type: e,
        stream: t,
        segment: n,
        part: r
    }) {
        const i = this._streams[e][t].getSegmentBySN(n);
        return (null == i ? void 0 : i.getPart(r)) || i
    }, n._clearSegment = function(e) {
        if (e.part > 0) {
            const t = ve(ve({}, e), {}, {
                part: e.part - 1
            });
            this._clearSegment(t)
        }
        const t = this._key(e);
        delete this._segmentsAdded[t]
    }, n.isSegmentAdded = function(e) {
        return !!this._segmentsAdded[this._key(e)]
    }, n.isStreamSegmentAdded = function(e) {
        const t = this._key(e),
            n = this._sorcerer[e.type].activeStreamIndex;
        return !!this._segmentsAdded[t] && this._segmentsAdded[t].stream === n
    }, n._onPlaylistUpdate = function(e, t) {
        try {
            var n;
            const i = this,
                {
                    type: o
                } = e;
            var r;
            return null == (n = i._sorcerer) || n.setLiveSeekableRange(i.liveTailTime, i.liveEdgeTime), i.fire(Ti.STREAM_UPDATED, e), "subtitles" === o ? void((i._captionsVisible || i._captionsLoading) && (null == (r = i.manifest.captions) ? void 0 : r.length) > 0 && i._addTextTrackCue()) : (t || i._loadSegmentsForType(o), i._toggleConnection(i._hasNewSegments(o) || !i._atDurationEnd()), i._checkForPlaybackGap(), (i.lowLatencyMode || i.video.metadata.p2pReady) && i._checkForPlaybackStall(), Vo())
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._loadTextTrack = function({
        label: e,
        language: t
    }, n) {
        if (!this._captionsTrack) {
            const r = new Uo({
                label: e,
                id: n,
                kind: "captions",
                language: t
            }, this._telecineVideo);
            this._telecineVideo.textTracks = ki([r]), this._captionsTrack = this.addTextTrack(r)
        }
    }, n._getSegmentIdentifier = function(e) {
        return `${e.type}_${e.mediaSequenceNumber}`
    }, n._shouldAddSegmentCuesToTextTrack = function(e) {
        const t = this._getSegmentIdentifier(e),
            n = this._captionsAddedToTextTrack[t],
            r = e.end >= this.currentTime && e.start <= this.currentTime + this.bufferTarget;
        return this._captionsVisible && !n && r
    }, n._shouldAddSegmentCuesToTranscript = function(e) {
        const t = this._getSegmentIdentifier(e),
            n = this._captionsAddedToTranscript[t],
            r = e.end >= this.liveEdgeTime - e.duration && e.start <= this.liveEdgeTime + this.bufferTarget;
        return this._captionsLoading && !n && r
    }, n._getSegmentCues = function(e) {
        try {
            const t = this,
                n = t._getSegmentIdentifier(e);
            return qo((function() {
                if (!t._fetchedCues[n]) return Vo(kt(e.url).text(), (function(e) {
                    const r = jo(e),
                        i = function(e) {
                            const t = e.match(/=MPEGTS:(\d+),/);
                            return (t && t[1] || 0) / 9e4
                        }(e),
                        o = r.map(e => (e.startTime = i + e.startTime, e.endTime = i + e.endTime, new(window.VTTCue || window.TextTrackCue)(e.startTime, e.endTime, e.text)));
                    t._fetchedCues[n] = o
                }))
            }), (function() {
                return t._fetchedCues[n]
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._addTextTrackCue = function() {
        try {
            const e = this;
            return Vo(e._videoReady, (function() {
                e.manifest.captions && e.manifest.captions[0].segments.forEach(Go((function(t) {
                    const n = e._getSegmentIdentifier(t),
                        r = e._shouldAddSegmentCuesToTextTrack(t),
                        i = e._shouldAddSegmentCuesToTranscript(t);
                    return function(o) {
                        var s = function() {
                            if (r || i) return Vo(e._getSegmentCues(t), (function(t) {
                                r && (e._captionsAddedToTextTrack[n] = !0, t.forEach(t => {
                                    e._captionsTrack.addCue(t)
                                })), i && (e._captionsAddedToTranscript[n] = !0, e.fire(Ti.SEGMENT_CUES_LOADED, t))
                            }))
                        }();
                        if (s && s.then) return s.then(Xo)
                    }()
                })))
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._hasNewSegments = function(e) {
        var t;
        const n = this._getCurrentStream(e),
            r = 3 * (this.lowLatencyMode ? 3 : 1);
        return (null == (t = n.playlist) ? void 0 : t.misses) < r
    }, n._loadSegments = function() {
        try {
            const e = this;
            return Vo(e._videoReady, (function() {
                for (const t in e._streams) e._streams[t].length > 0 && e._loadSegmentsForType(t)
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._loadSegmentsForType = function(e) {
        try {
            const t = this;
            return Vo(t._videoReady, (function() {
                if (!t._sorcerer.allowSegmentRequests) return;
                const {
                    index: n,
                    reasonForSwitch: r
                } = t._getStream(e);
                let i;
                return qo((function() {
                    if (n >= 0 && n !== t.sorcerer[e].activeStreamIndex) return i = n > t.sorcerer[e].activeStreamIndex, t._switching[e] = !0, Vo(t._manifestLoader.switchTo(e, n), (function() {
                        let i = {
                            reasonForSwitch: r
                        };
                        t.sorcerer[e].switchTo(n, !0, i).then(() => {
                            t._switching[e] = !1
                        }).catch(console.error)
                    }))
                }), (function() {
                    return Vo(xe(0), (function() {
                        const n = t.lowLatencyMode && void 0 !== i,
                            r = t._sorcerer[e].activeStreamIndex,
                            o = t._getCurrentStream(e, r),
                            s = t._abr.getSegmentsToLoad(n, e, o),
                            a = t._getSegmentTimeoutMs();
                        s.forEach(n => {
                            const i = t._key(n),
                                s = {
                                    type: e,
                                    stream: r,
                                    segment: n.segment,
                                    part: n.part
                                },
                                c = "video" === e && !n.hint;
                            let u = a;
                            if (n.hint && t._playInitiated && n.start > t.currentTime) {
                                const e = 1e3 * (n.start - t.currentTime);
                                u = Math.min(8e3, e + a)
                            }
                            const l = o.bitrate / 8 * n.duration,
                                d = t.sorcerer[e].streams[r],
                                h = t._preventExpiredSegmentUsage(n);
                            d.addSegment(h, {
                                identifier: s,
                                includeWithBandwidthChecks: c,
                                priority: n.programDateTime,
                                excludeConnectTime: t.lowLatencyMode,
                                timeout: t._timeoutTest || t.lowLatencyMode ? u : 8e3,
                                size: t._timeoutTest || t.lowLatencyMode ? l : void 0
                            }).catch(e => {
                                e instanceof Zi || e instanceof ct || t._clearSegment(s)
                            }), t._segmentsAdded[i] = s
                        })
                    }))
                }))
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._preventExpiredSegmentUsage = function(e) {
        var t;
        let n = null == e ? void 0 : e.url;
        const r = null == (t = this._manifestLoader) ? void 0 : t.baseUrl;
        return r && n && !n.startsWith(r) && (n = `${r}${e.uri}`), n
    }, n._getStream = function(e, t = !1) {
        var n, r;
        if (this._switching[e]) return {
            index: -1,
            reasonForSwitch: null
        };
        if ("subtitles" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.subtitles[e.currentRenditions.subtitles].index,
                reasonForSwitch: null
            }
        }
        if ("audio" === e) {
            const e = this._manifestLoader.activeStream("video");
            return {
                index: e.audio[e.currentRenditions.audio].index,
                reasonForSwitch: null
            }
        }
        if (!t && Ze(this._timeSinceLastStreamSwitchCheck) < this._STREAM_SWITCH_CHECK_INTERVAL) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        this._timeSinceLastStreamSwitchCheck = ze();
        const i = null == (n = this.video) || null == (r = n.metadata) ? void 0 : r.percentShown,
            o = this._abr.filterStreams(this._streams.video, this._video.clientWidth, this._video.clientHeight, i);
        if (0 === o.length) return {
            index: this._lastStreamIndex,
            reasonForSwitch: null
        };
        const {
            index: s,
            reasonForSwitch: a
        } = this._abr.optimalStream(o, this._lastStreamIndex), c = o[s], u = this._streams.video.indexOf(c);
        if (u >= 0 && (t || u !== this._lastStreamIndex)) {
            if (u > this._lastStreamIndex && Ze(this._timeSinceLastDownShift) < this._DOWN_SHIFT_CHECK_INTERVAL) return {
                index: this._lastStreamIndex,
                reasonForSwitch: a
            };
            u < this._lastStreamIndex && (this._timeSinceLastDownShift = ze());
            const e = {
                index: u,
                streams: this._streams.video
            };
            return this.fire(Ti.STREAM_TARGET_CHANGE, e), this._lastStreamIndex = u, {
                index: u,
                reasonForSwitch: a
            }
        }
        return {
            index: this._lastStreamIndex,
            reasonForSwitch: a
        }
    }, n.getCurrentStream = function(e = "video") {
        return this._getCurrentStream(e)
    }, n._getCurrentStream = function(e = "video", t = 0) {
        return void 0 !== this._sorcerer && null !== this._sorcerer && (t = this._sorcerer[e].activeStreamIndex), this._streams[e][t]
    }, n._checkForPlaybackStall = function() {
        if (this._video.currentTime === this._lastStallCurrentTime && ze() - this._lastStallCheckTime >= 1e3 && this._shouldBeMakingProgress()) {
            const e = "Jumping forward 0.1s" + ` because of stall at time of ${this._video.currentTime}`;
            this.fire(Si.STALL_JUMP, {
                msg: e
            }), this._video.currentTime += .1
        }
        this._lastStallCurrentTime = this._video.currentTime, this._lastStallCheckTime = ze()
    }, n._shouldBeMakingProgress = function() {
        return 0 !== this._video.readyState && !!this._video.buffered.length && !this._video.paused && this._hasContentFor(this._video.buffered, this._video.currentTime)
    }, n._hasContentFor = function(e, t) {
        for (let n = 0; n < e.length; n++)
            if (!(t < e.start(n) - .1 || t > e.end(n) - .5)) return !0;
        return !1
    }, n._checkForPlaybackGap = function() {
        const e = this.buffered;
        if (!e.length) return;
        const t = e.length,
            n = this._video.currentTime;
        let r, i, o;
        try {
            r = function(e, t) {
                if (!e || !e.length) return null;
                if (1 === e.length && e.end(0) - e.start(0) < 1e-6) return null;
                let n;
                for (let r = 0; r < e.length; r++)
                    if (e.start(r) > t && (0 === r || e.end(r - 1) - t <= .5)) {
                        n = r;
                        break
                    }
                return n >= 0 ? n : null
            }(e, n)
        } catch (xl) {
            throw DOMException, xl
        }
        if (null === r) return;
        if (0 === this._video.readyState) return;
        if (this._video.paused) return;
        if (t <= r) return;
        try {
            i = e.start(r), o = e.end(t - 1)
        } catch (xl) {
            throw DOMException, xl
        }
        const s = i - n,
            a = o - i,
            c = this.lowLatencyMode ? 1 : 2;
        if (a > 0 && a <= this.segmentLength * c) {
            const e = "Preventing jump too close to buffered end time." + ` Would have jumped to: ${i}.` + ` Last buffered end time ${o}.`;
            this.fire(Si.BUFFER_GAP_JUMP_PREVENT, {
                msg: e
            })
        } else {
            if (0 === r) {
                const e = `Jumping forward ${s}` + ` seconds because of gap before start time of ${i}`;
                this.fire(Si.BUFFER_GAP_JUMP, {
                    msg: e
                })
            } else {
                const t = `Jumping forward ${s} seconds because of gap starting at` + ` ${e.end(r-1)} and ending at ${i}`;
                this.fire(Si.BUFFER_GAP_JUMP, {
                    msg: t
                })
            }
            this._video.currentTime = i + .1
        }
    }, n._atDurationEnd = function() {
        const e = this.buffered;
        return !!(e && e.length && this._video.currentTime + Ko > e.end(e.length - 1))
    }, n.setVideoSrc = function(e) {
        try {
            const t = this;
            return Vo(t._startPreload(t._preload), (function() {
                return Vo(t._loadManifest(e), (function() {
                    t._video.src = URL.createObjectURL(t._sorcerer.mediaSource), t._videoReady.resolve()
                }))
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n._startPreload = function(e) {
        try {
            const t = this;
            return t._preloadReady = new Ke, "none" === e && t.paused || t._preloadReady.resolve(), t._preloadReady
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, n.getBitrateAtTime = function(e, t) {
        if (!this._sorcerer) return 0;
        const n = this._sorcerer.streamIndexAtTime(e, t);
        return this._streams[t][n] ? this._streams[t][n].bandwidth : 0
    }, n.onprogress = function() {
        this._checkForPlaybackGap()
    }, n.ondurationchange = function() {
        this._checkForPlaybackGap()
    }, n.ontimeupdate = function() {
        if (!this._sorcerer) return;
        if (e.prototype.ontimeupdate.call(this), null !== this._timeToSeekTo) return;
        this.atLiveTail = this._isNearLiveTail(this._video.currentTime), this._shouldSnapToLiveEdge(this._video.currentTime) ? this.atLiveEdge = !0 : (this._video.playbackRate < 1 || this._hasDriftedBehindLiveEdge()) && (this.atLiveEdge = !1), this.fire(Ti.DROPPED_FRAMES, this._sorcerer.getDroppedFrameTotal());
        const t = this._getCurrentStream();
        if (t) {
            const e = {
                speed: this._abr.getCurrentSpeed(),
                bitrate: t.bitrate,
                speeds: this._sorcerer.getResponseSpeeds()
            };
            this.fire(Ti.BANDWIDTH, e)
        }!this._isOnline && this._atDurationEnd() && this.fire(Si.STREAM_OFFLINE), !this.lowLatencyMode && Ze(this._timeSinceLastStreamSwitchCheck) > this._STREAM_SWITCH_CHECK_INTERVAL && this._loadSegments()
    }, n._shouldSnapToLiveEdge = function(e) {
        return e >= this.liveEdgeTime - 1 * this.segmentLength
    }, n._hasDriftedBehindLiveEdge = function(e) {
        return e >= this.liveEdgeTime - 2 * this.segmentLength
    }, n._isNearLiveTail = function(e) {
        return e <= this.liveTailTime + 2 * this.segmentLength
    }, n._getSeekReadyPromiseForTime = function(e = this._timeToSeekTo) {
        return new Promise((t, n) => {
            this._abr.canPlayFromTimeInStream(e, this._getCurrentStream()) ? t(e) : this._resolveSeek = t
        }).then(e => (this._timeToSeekTo = null, this._seekInProgressPromise = null, this._video.currentTime = e, new Promise((e, t) => {
            this._lastSeekReject = t;
            const n = () => {
                e(this._video.currentTime), this._video.removeEventListener("seeked", n)
            };
            this._video.addEventListener("seeked", n)
        })))
    }, n.seekToTime = function(e) {
        if (!this.eventHasDVREnabled || e === this.currentTime) return Promise.resolve();
        let t;
        if (null === this._timeToSeekTo || (this._lastSeekReject && (this._lastSeekReject(), this._lastSeekReject = null), this._seekInProgressPromise = null, this._timeToSeekTo = null, this._resolveSeek = null), this._timeToSeekTo = e, !this._abr.canPlayFromTimeInStream(e, this._getCurrentStream())) try {
            this._segmentsAdded = {};
            for (const e in this._streams)
                if (this._streams[e].length > 0) {
                    const t = this.sorcerer[e].activeStreamIndex;
                    this.sorcerer[e].streams[t].abort()
                }
            t = this._sorcerer.removeBuffer()
        } catch (n) {}
        return this._seekInProgressPromise = this._getSeekReadyPromiseForTime(e), Promise.all([this._videoReady, t]).then(() => (this._loadSegments(), this._seekInProgressPromise)).catch(e => {})
    }, n.onpause = function() {
        var t;
        e.prototype.onpause.call(this), this.eventHasDVREnabled ? this.atLiveEdge = !1 : (null == (t = this._manifestLoader) || t.stop(), this._sorcerer && (this._sorcerer.abortFetches(), this._segmentsAdded = {}, this._sorcerer.removeBuffer().catch(() => {})))
    }, n.onplay = function() {
        this.eventHasDVREnabled || this._playInitiated && this._refreshManifest()
    }, n.pause = function() {
        this.eventHasDVREnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this)
    }, n.play = function() {
        const t = this;
        return e.prototype.play.call(this, Go((function() {
            return t._preloadReady.resolve(), null !== t._timeToSeekTo ? Promise.resolve(t._seekInProgressPromise) : qo((function() {
                if (t._playInitiated && !t.eventHasDVREnabled) return t._segmentsAdded = {}, Ho(Bo((function() {
                    return Wo(t._sorcerer.removeBuffer())
                }), (function(e) {})), (function() {
                    return Wo(t._refreshManifest())
                }))
            }), (function() {
                return Vo(t._videoReady, (function() {
                    return t._loadSegments(), Vo(t._bufferAvailable(), (function() {
                        const e = Math.max(t._latencyController.liveSyncPosition, t._video.buffered.start(0));
                        return t._atLiveEdge ? t.currentTime = e : t.currentTime = t._video.currentTime, t._playInitiated = !0, Promise.resolve()
                    }))
                }))
            }))
        })))
    }, n._bufferAvailable = function() {
        return new Promise(e => {
            const t = () => {
                this.buffered.length && (this._sorcerer.off("appendbufferend", t), e())
            };
            this._sorcerer.on("appendbufferend", t), t()
        })
    }, n._getSegmentTimeoutMs = function() {
        return this._abr.getSegmentRelativeTimeout(this._streams.video, this._getCurrentStream("video"), 1e3 * this.segmentLength)
    }, n._loadMediaManifest = function() {
        return import ("./media-manifest.module.js")
    }, n.setCaptionsShouldDisplay = function(e) {
        this._captionsVisible = e
    }, n.setCaptionsShouldLoad = function(e) {
        this._captionsLoading = e
    }, _e(t, [{
        key: "preload",
        get: function() {
            return this._preload
        },
        set: function(e) {
            this._preload !== e && "none" !== e && this._preloadReady.resolve(), this._preload = e
        }
    }, {
        key: "latency",
        get: function() {
            var e;
            return null == (e = this._latencyController) ? void 0 : e.latency
        }
    }, {
        key: "lowLatencyMode",
        get: function() {
            return this._lowLatencyMode
        },
        set: function(e) {
            this._lowLatencyMode = e, this._manifestLoader && (this._manifestLoader.lowLatencyMode = e)
        }
    }, {
        key: "downloadSpeed",
        get: function() {
            return this._abr.getCurrentSpeed()
        }
    }, {
        key: "restrictedStreamIndexes",
        get: function() {
            return this._restrictedStreamIndexes
        },
        set: function(e) {
            this._restrictedStreamIndexes.join(",") !== e.join(",") && (this._restrictedStreamIndexes = e, this._abr.lock(this._restrictedStreamIndexes))
        }
    }, {
        key: "videoWidth",
        get: function() {
            return this._stream ? this._stream.width : this._video.videoWidth
        }
    }, {
        key: "videoHeight",
        get: function() {
            return this._stream ? this._stream.height : this._video.videoHeight
        }
    }, {
        key: "currentTime",
        get: function() {
            return null !== this._timeToSeekTo ? this._timeToSeekTo : this._video.currentTime
        },
        set: function(e) {
            this._video.readyState <= 0 || (this.eventHasDVREnabled && this._playInitiated ? this._shouldSnapToLiveEdge(e) ? (this.atLiveEdge = !0, this.seekToTime(this.liveEdgeTime)) : (this.atLiveEdge = !1, this.seekToTime(Math.max(e, this.liveTailTime))) : this._video.currentTime = e)
        }
    }, {
        key: "liveEdgeTime",
        get: function() {
            return this._latencyController.liveSyncPosition
        }
    }, {
        key: "atLiveEdge",
        get: function() {
            return this._atLiveEdge
        },
        set: function(e) {
            this.atLiveEdge !== e && this.eventHasDVREnabled && (this._atLiveEdge = e, this._video.playbackRate > 1 && e && (this._video.playbackRate = 1), this.lowLatencyMode = !!this.eventIsLowLatency && e, this.bufferTarget = e ? this.defaultBufferTarget : 18, e && (this.presentationDelay = this.defaultPresentationDelay))
        }
    }, {
        key: "atLiveTail",
        get: function() {
            return this._atLiveTail
        },
        set: function(e) {
            this.atLiveTail !== e && this.eventHasDVREnabled && (this._atLiveTail = e, this._video.playbackRate < 1 && e && (this._video.playbackRate = 1))
        }
    }, {
        key: "liveTailTime",
        get: function() {
            var e, t, n, r;
            const i = null !== (e = null == (t = this._getCurrentStream()) || null == (n = t.segments) || null == (r = n[0]) ? void 0 : r.start) && void 0 !== e ? e : 0;
            return Math.max(i, 0)
        }
    }, {
        key: "ended",
        get: function() {
            return this._hasLiveEventEnded
        }
    }, {
        key: "isLowerProfileAvailable",
        get: function() {
            return this._sorcerer ? this._sorcerer.video.activeStreamIndex > 0 : null
        }
    }, {
        key: "sorcerer",
        get: function() {
            return this._sorcerer
        }
    }, {
        key: "segmentLength",
        get: function() {
            var e, t, n, r;
            return this.lowLatencyMode && (null == (e = this._manifestLoader) || null == (t = e.activeStream("video")) ? void 0 : t.partTargetDuration) || (null == (n = this._manifestLoader) || null == (r = n.activeStream("video")) ? void 0 : r.targetDuration)
        }
    }]), t
}(zi);

function $o(e) {
    return e.forEach((e, t) => {
        e.index = t
    }), e
}
const zo = document.createElement("video"),
    Qo = {
        "application/x-mpegURL": "application/x-mpegURL"
    };
let Jo = function(e) {
        function t(t, n = {}) {
            var r, i;
            return (i = e.call(this, t, n) || this)._apiManifestUrl = null, i._playInitiated = !1, i._atLiveEdge = !0, i._atLiveTail = !1, i._secondsBehindPlaylistStart = 0, i._playlistOffsetSet = !1, i.reset(), i.dvrEnabled = null !== (r = n.dvrEnabled) && void 0 !== r && r, i.getLiveEventStartTimeEpoch = n.getLiveEventStartTimeEpoch, window.addEventListener("online", () => {
                i.play()
            }), i
        }
        ge(t, e), t.supported = function() {
            return t.supportedVideoTypes.length > 0
        }, _e(t, null, [{
            key: "displayName",
            get: function() {
                return "NativeHLSLiveScanner"
            }
        }, {
            key: "supportedVideoTypes",
            get: function() {
                const e = [];
                if ("function" != typeof zo.canPlayType) return e;
                for (const t in Qo) {
                    const n = Qo[t];
                    zo.canPlayType(n).replace(/^no$/, "") && e.push(t)
                }
                return e
            }
        }]);
        var n = t.prototype;
        return n.deactivate = function() {
            e.prototype.deactivate.call(this), this.reset()
        }, n.reset = function() {
            this._manifestRefreshTimeout && clearTimeout(this._manifestRefreshTimeout), this._onReady = null, this._manifestRefreshTimeout = null, this._isOnline = !1, this._hasLiveEventEnded = !1, this._hlsAvailabilityCheckTimeout = null, this._bufferedIndex = 0, this._manifestRefreshTimeout = null, this._secondsBehindPlaylistStart = 0, this._playlistOffsetSet = !1, this._abr = new Oo(this, this._options), this._restrictedStreamIndexes = []
        }, n.endLive = function() {
            this._isOnline = !1, this._hasLiveEventEnded = !0, clearTimeout(this._manifestRefreshTimeout), this._video.pause(),
                function(e) {
                    setTimeout(e, 0)
                }(() => {
                    e.prototype.deactivate.call(this), this.fire(vi.ENDED)
                })
        }, n._setUpRefreshTimer = function() {
            const e = nt(this.video.metadata.playlistRefreshUrl.split("?")[1]);
            e.expires && (this._manifestRefreshTimeout = setTimeout(() => {
                this._refreshLiveApiPlaylistUrl()
            }, 1e3 * (e.expires - 10)))
        }, n._refreshLiveApiPlaylistUrl = function(e = 0) {
            const t = this.video.metadata.playlistRefreshUrl;
            return kt(t).json().then(n => {
                if (!("url" in n)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${n}`);
                return this._loadNativeHlsManifest(n.url.hls).then(() => (this.play(), this._checkHlsAvailability(5e3), null)).catch(() => this._refreshLiveApiPlaylistUrl(++e))
            }).catch(() => {
                if (e >= 3) throw new Error(`Manifest failed to load after ${e} attempts.`);
                return ++e, this._refreshLiveApiPlaylistUrl(e)
            })
        }, n._setUpLiveEventListeners = function() {
            this.on(Si.STREAM_OFFLINE, () => {
                this._isOnline = !1
            })
        }, n._setUpNativeHls = function(e) {
            return this._setUpLiveEventListeners(), this._isOnline = !0, this.fire(Si.STREAM_ONLINE), this._checkHlsAvailability(5e3), Promise.resolve(e)
        }, n._loadNativeHlsManifest = function(e) {
            return this._apiManifestUrl = e, /json=1/.test(e) ? kt(e).json().then(e => {
                if (!("url" in e)) throw new Error(`Error parsing 'url' key from Live API manifest endpoint: ${this._apiManifestUrl} ${e}`);
                this._video.src = this._getUrlWithMinSecondsParam(e.url), this._setUpRefreshTimer()
            }).catch(e => {
                const t = this.video.metadata.playlistRefreshUrl;
                return kt(t).json().then(e => {
                    if (!("url" in e)) throw new Error(`Error parsing 'url' key from player live API refresh endpoint: ${t} ${e}`);
                    this._apiManifestUrl = e.url.ios, this._video.src = this._getUrlWithMinSecondsParam(e.url.ios), this._setUpRefreshTimer()
                })
            }) : (this._video.src = this._getUrlWithMinSecondsParam(e), this._setUpRefreshTimer(), Promise.resolve())
        }, n._getUrlWithMinSecondsParam = function(e) {
            if (this.dvrEnabled) return e;
            const t = new URL(e);
            return t.searchParams.set("min_seconds", "30"), t.toString()
        }, n._loadTextTracks = function() {
            const e = this._video.textTracks;
            if (null == e ? void 0 : e.length)
                for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    this._loadTextTrack(n)
                }
        }, n._loadTextTrack = function(e) {
            if (e && !this._captionsTrack) {
                const {
                    label: t,
                    kind: n,
                    language: r,
                    id: i
                } = e, o = new Uo({
                    label: t,
                    kind: n,
                    language: r,
                    id: i
                }, this._telecineVideo);
                this._telecineVideo.textTracks = ki([o]), this._addTextTrackListeners(o, e), this.fire(Ti.TEXT_TRACKS_AVAILABLE), this._captionsTrack = e
            }
        }, n.setModeForTrack = function(e, t) {
            return this._captionsTrack && this._captionsTrack.mode !== t && (this._captionsTrack.mode = t), this
        }, n.getActiveCuesForTrack = function(e) {
            return this._captionsTrack && "disabled" !== this._captionsTrack.mode ? this._captionsTrack.activeCues : []
        }, n.addTextTrack = function(e) {
            return this._captionsTrack || this._loadTextTracks(), this._captionsTrack
        }, n._checkHlsAvailability = function(e) {
            "number" == typeof en.iOS && en.iOS < 9 || this._hlsAvailabilityCheckTimeout || (this._hlsAvailabilityCheckTimeout = setTimeout(() => {
                if (!this._isOnline) return;
                const e = new XMLHttpRequest;
                e.onload = () => {
                    410 !== e.status ? (200 !== e.status && this.fire(Si.STREAM_OFFLINE), e.response.match(/^#EXTM3U\n#EXT-X-VERSION:3\n$/) && this.fire(Si.STREAM_OFFLINE)) : this._refreshLiveApiPlaylistUrl()
                }, e.onerror = () => {
                    this.fire(Si.STREAM_OFFLINE)
                }, /json=1/.test(this._apiManifestUrl) ? kt(this._apiManifestUrl).json().then(t => {
                    "url" in t || this.fire(Si.STREAM_OFFLINE), e.open("GET", t.url), e.send()
                }).catch(() => {
                    e.open("GET", this._apiManifestUrl), e.send()
                }) : (e.open("GET", this._apiManifestUrl), e.send())
            }, e))
        }, n._shouldSnapToLiveEdge = function(e) {
            return e >= this.liveEdgeTime - 3
        }, n._hasDriftedBehindLiveEdge = function(e) {
            return e >= this.liveEdgeTime - 6
        }, n._isNearLiveTail = function(e) {
            return e <= this.liveTailTime + 6
        }, n.setVideoSrc = function(e) {
            this._onReady = this._setUpNativeHls(e).then(() => (this._apiManifestUrl = e, this._loadNativeHlsManifest(e)))
        }, n.ontimeupdate = function() {
            e.prototype.ontimeupdate.call(this), this.atLiveTail = this._isNearLiveTail(this._video.currentTime), this._shouldSnapToLiveEdge(this._video.currentTime) ? this.atLiveEdge = !0 : (this._video.playbackRate < 1 || this._hasDriftedBehindLiveEdge()) && (this.atLiveEdge = !1)
        }, n.onplaying = function() {
            this._playInitiated = !0
        }, n.oncanplay = function() {
            if (!this._playInitiated) {
                const e = this._video.seekable.length;
                e > 0 && (this._video.currentTime = this._video.seekable.end(e - 1))
            }
            if (!this._playlistOffsetSet) {
                this._playlistOffsetSet = !0;
                const e = this._video.getStartDate().getTime() / 1e3;
                this._secondsBehindPlaylistStart = e - this.getLiveEventStartTimeEpoch()
            }
            this._loadTextTracks()
        }, n.onprogress = function() {
            this._hlsAvailabilityCheckTimeout && (clearTimeout(this._hlsAvailabilityCheckTimeout), this._hlsAvailabilityCheckTimeout = null)
        }, n.onstalled = function() {
            this._checkHlsAvailability(1e4)
        }, n.onerror = function() {
            return this._video.error.code === this._video.error.MEDIA_ERR_SRC_NOT_SUPPORTED ? (kt(this._apiManifestUrl).then(() => {
                e.prototype.onerror.call(this)
            }).catch(t => {
                t instanceof lt ? this.fire(vi.ERROR, new Ni("MediaNetworkError", "A network error ocurred while fetching the media.")) : e.prototype.onerror.call(this)
            }), !1) : e.prototype.onerror.call(this)
        }, n.onwaiting = function() {
            this._checkHlsAvailability(1e4)
        }, n.pause = function() {
            this.dvrEnabled && (this.atLiveEdge = !1), e.prototype.pause.call(this)
        }, n.play = function() {
            return e.prototype.play.call(this, () => this._onReady)
        }, _e(t, [{
            key: "currentTime",
            get: function() {
                return this._secondsBehindPlaylistStart + this._video.currentTime
            },
            set: function(e) {
                if (this.liveEdgeTime) {
                    const t = e >= this.liveEdgeTime - 3;
                    this.atLiveEdge = t
                }
                this._video.currentTime = e - this._secondsBehindPlaylistStart
            }
        }, {
            key: "liveEdgeTime",
            get: function() {
                const e = this._video.seekable.length;
                return e > 0 ? this._secondsBehindPlaylistStart + this._video.seekable.end(e - 1) : 0
            }
        }, {
            key: "atLiveEdge",
            get: function() {
                return this._atLiveEdge
            },
            set: function(e) {
                this.dvrEnabled && (this._atLiveEdge = e, this._video.playbackRate > 1 && e && (this._video.playbackRate = 1))
            }
        }, {
            key: "atLiveTail",
            get: function() {
                return this._atLiveTail
            },
            set: function(e) {
                this.dvrEnabled && (this._atLiveTail = e, this._video.playbackRate < 1 && e && (this._video.playbackRate = 1))
            }
        }, {
            key: "liveTailTime",
            get: function() {
                return this._video.seekable.length > 0 ? this._secondsBehindPlaylistStart + this._video.seekable.start(0) : 0
            }
        }, {
            key: "ended",
            get: function() {
                return this._hasLiveEventEnded
            }
        }, {
            key: "supportsPlaybackRate",
            get: function() {
                return e.prototype.supportsPlaybackRate && this.dvrEnabled
            }
        }]), t
    }(zi),
    Zo = function() {
        function e(e, t = {}) {
            this._telecine = e, this._element = e._element, this._options = t
        }
        _e(e, null, [{
            key: "displayName",
            get: function() {
                return "Effect"
            }
        }, {
            key: "supported",
            get: function() {
                return !1
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return []
            }
        }]);
        var t = e.prototype;
        return t.activate = function() {
            throw new Ni("NotImplemented", "The effect must implement the activate method.")
        }, t.deactivate = function() {
            throw new Ni("NotImplemented", "The effect must implement the deactivate method.")
        }, e
    }();
const es = new WeakMap,
    ts = new WeakMap;
let ns = function() {
        function e({
            src: e,
            mime: t,
            id: n = st(),
            priority: r = 0,
            metadata: i = {}
        }, o) {
            if (!e) throw new TypeError("Must provide a src for the file.");
            if (!t) throw new TypeError("Must provide a mime type for the file.");
            Object.defineProperties(this, {
                mime: {
                    value: t,
                    enumerable: !0
                },
                id: {
                    value: `${n}`,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                }
            }), this.video = o, this.priority = r, this.src = e
        }
        return _e(e, [{
            key: "priority",
            get: function() {
                return es.get(this)
            },
            set: function(e) {
                if (!("number" == typeof(e = parseInt(e, 10)) && isFinite(e) && Math.floor(e) === e && e >= 0)) throw new TypeError("The file priority must be an integer greater than or equal to 0.");
                es.set(this, e)
            }
        }, {
            key: "src",
            get: function() {
                return ts.get(this)
            },
            set: function(e) {
                ts.set(this, e), this.video.fire(Ti.FILE_SRC_UPDATE, this)
            }
        }, {
            key: "restrictedStreamIndexes",
            get: function() {
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                return this.video.currentScanner.restrictedStreamIndexes
            },
            set: function(e) {
                if (!Array.isArray(e)) throw new TypeError("Indexes must be an array.");
                if (!Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.video.currentScanner), "restrictedStreamIndexes")) throw new ReferenceError("The current scanner does not support streams.");
                this.video.currentScanner.restrictedStreamIndexes = e
            }
        }]), e
    }(),
    rs = function() {
        function e({
            enabled: e = !1,
            id: t = st(),
            kind: n = "",
            label: r = "",
            language: i = ""
        }, o) {
            this._enabled = e, er(this), Object.defineProperties(this, {
                kind: {
                    value: n,
                    enumerable: !0
                },
                label: {
                    value: r,
                    enumerable: !0
                },
                language: {
                    value: i,
                    enumerable: !0
                },
                id: {
                    value: `${t}`,
                    enumerable: !0
                }
            }), this.video = o
        }
        return e.prototype.dispatchEvent = function(e) {
            this.fire(e, {
                target: this
            })
        }, _e(e, [{
            key: "enabled",
            get: function() {
                return this._enabled
            },
            set: function(e) {
                this._enabled = e
            }
        }, {
            key: "active",
            get: function() {
                return this._enabled
            }
        }]), e
    }();

function is() {
    return !!(window.MediaKeys && window.navigator && window.navigator.requestMediaKeySystemAccess && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration || window.WebKitMediaKeys)
}

function os(e, t, n) {
    "string" == typeof t && (t = function(e) {
        const t = new ArrayBuffer(2 * e.length),
            n = new Uint16Array(t);
        for (let r = 0, i = e.length; r < i; r++) n[r] = e.charCodeAt(r);
        return n
    }(t));
    let r = 0;
    const i = new ArrayBuffer(e.byteLength + 4 + t.byteLength + 4 + n.byteLength),
        o = new DataView(i);
    new Uint8Array(i, r, e.byteLength).set(e), r += e.byteLength, o.setUint32(r, t.byteLength, !0), r += 4;
    const s = new Uint8Array(i, r, t.byteLength);
    return s.set(t), r += s.byteLength, o.setUint32(r, n.byteLength, !0), r += 4, new Uint8Array(i, r, n.byteLength).set(n), new Uint8Array(i, 0, i.byteLength)
}

function ss(e, t = !0) {
    const n = t ? e.buffer : e,
        r = String.fromCharCode.apply(null, new Uint16Array(n)),
        i = (new DOMParser).parseFromString(r, "application/xml"),
        o = {},
        s = i.getElementsByTagName("HttpHeader");
    for (let a = 0; a < s.length; ++a) {
        const e = s[a].querySelector("name"),
            t = s[a].querySelector("value");
        o[e.textContent] = t.textContent
    }
    return [o, e = Pi(i.querySelector("Challenge").textContent)]
}

function as(e, t, n, r) {
    const i = r.audio || [],
        o = r.video || [],
        s = [{
            video: "HW_SECURE_ALL",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "HW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_DECODE",
            audio: "SW_SECURE_CRYPTO"
        }, {
            video: "SW_SECURE_CRYPTO",
            audio: "SW_SECURE_CRYPTO"
        }].map(e => {
            const t = {
                persistentState: "optional",
                sessionTypes: ["temporary"]
            };
            return o.length && (t.videoCapabilities = o.map(t => ({
                contentType: t,
                robustness: e.video
            }))), i.length && (t.audioCapabilities = i.map(t => ({
                contentType: t,
                robustness: e.audio
            }))), t
        }),
        a = Object.keys(e).map(r => {
            const i = e[r].id;
            if (t || n) {
                let e = null;
                const n = t ? window.WebKitMediaKeys : window.MSMediaKeys;
                try {
                    e = new n(i)
                } catch (xl) {}
                return Promise.resolve({
                    name: i,
                    keySystem: e
                })
            }
            return navigator.requestMediaKeySystemAccess(i, s).then(e => e.createMediaKeys()).catch(e => {}).then(e => ({
                name: i,
                keySystem: e
            }))
        });
    return Promise.all(a)
}

function cs(e, t) {
    let n = null;
    return Object.keys(e).forEach(r => {
        t.name === e[r].id && (n = e[r])
    }), n
}
let us = function() {
        function e(e, t) {
            this._cdms = e.cdms, this._lrToken = e.lr_token, this._userId = e.user, this._assetId = e.asset, this._useHls = t, this._licenseUrl = null, this._keySession = null, this._preferredKeySystem = null, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}) {
            return this._video = e._video, this._scanner = e, is() ? (this._licenseRequestMetadata = function(e, t) {
                const n = {},
                    r = `${window.screen.availWidth}x${window.screen.availHeight}`,
                    i = window.devicePixelRatio;
                return n.merchant = "vimeo", n.sessionId = JSON.stringify({
                    ua: navigator.userAgent,
                    token: e,
                    resolution: r,
                    pixelRatio: i
                }), n.userId = t, n
            }(this._lrToken, this._userId), as(this._cdms, this._useHls, !1, t).then(e => {
                if (e.forEach(e => {
                        e.keySystem && (this._preferredKeySystem = e)
                    }), !this._preferredKeySystem) return this._scanner.fire(Ti.EME_UNSUPPORTED), !1;
                const t = cs(this._cdms, this._preferredKeySystem);
                return this._encryptedEventName = "encrypted", this._licenseUrl = t.license_url, this._useHls && (this._certificateUrl = t.certificate_url, this._encryptedEventName = "webkitneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest), this._useHls ? (this._video.webkitSetMediaKeys(this._preferredKeySystem.keySystem), !0) : this._video.mediaKeys ? (this._keySession = this._video.mediaKeys.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), !0) : (this._keySession = this._preferredKeySystem.keySystem.createSession(), this._keySession.addEventListener("message", e => this._getLicense(e)), this._video.setMediaKeys(this._preferredKeySystem.keySystem), !0)
            })) : (this._scanner.fire(Ti.EME_UNSUPPORTED), !1)
        }, t.destroy = function() {
            this._keySession && this._keySession.sessionId && this._keySession.close(), this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._generateRequest = function(e) {
            return "com.apple.fps.1_0" === this._preferredKeySystem.name ? (this._loadFairPlayCertificate().then(t => {
                this._contentId = `assetId=${this._assetId}`;
                const n = os(e.initData, this._contentId, t);
                return this._keySession = this._preferredKeySystem.keySystem.createSession("video/mp4", n), this._keySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), t
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : !this._keySession.sessionId && !this._activeKeySession && (this._activeKeySession = this._keySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(Ti.DRM_FAILURE)
            }), !0)
        }, t._getLicense = function(e) {
            return new Promise((t, n) => {
                this._activeKeySession = null;
                const r = new XMLHttpRequest;
                r.keySession = e.target, r.responseType = "arraybuffer", r.open("POST", this._licenseUrl), r.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata)));
                let i = e.message;
                if ("com.microsoft.playready" === this._preferredKeySystem.name) {
                    const t = ss(e.message, !1),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        r.setRequestHeader([e], n[e])
                    }), i = t[1]
                }
                if ("com.apple.fps.1_0" === this._preferredKeySystem.name) {
                    let e = btoa(String.fromCharCode.apply(null, i));
                    e = encodeURIComponent(e), i = `spc=${e}&${this._contentId}`, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
                }
                r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: Ti.DRM_FAILURE
                        });
                        else try {
                            this._scanner.fire(Ti.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(r.response);
                            let n = e.buffer;
                            "com.apple.fps.1_0" === this._preferredKeySystem.name && (n = function(e) {
                                let t = window.atob(e.trim());
                                return "<ckc>" === t.substr(0, 5) && "</ckc>" === t.substr(-6) && (t = t.slice(5, -6)), new Uint8Array(atob(t).split("").map(e => e.charCodeAt(0)))
                            }(btoa(String.fromCharCode.apply(null, e)))), r.keySession.update(n), t()
                        } catch (xl) {
                            n(`Error updating key session: ${xl}`)
                        } else {
                            const e = JSON.parse(r.getResponseHeader("x-dt-error-message"));
                            n({
                                error: Ti.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, r.onerror = n, r.send(i)
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            })
        }, t._loadFairPlayCertificate = function() {
            return new Promise((e, t) => {
                const n = new XMLHttpRequest;
                n.responseType = "arraybuffer", n.open("GET", this._certificateUrl), n.setRequestHeader("dt-custom-data", window.btoa(JSON.stringify(this._licenseRequestMetadata))), n.onload = () => {
                    if (403 !== n.status)
                        if (n.status >= 400) t({
                            error: Ti.DRM_FAILURE
                        });
                        else try {
                            e(new Uint8Array(n.response))
                        } catch (xl) {
                            t(xl)
                        } else {
                            const e = JSON.parse(n.getResponseHeader("x-dt-error-message"));
                            t({
                                error: Ti.DRM_AUTH_FAILURE,
                                payload: {
                                    text: e.error,
                                    code: e.error_code
                                }
                            })
                        }
                }, n.onerror = t, n.send()
            })
        }, e
    }(),
    ls = function() {
        function e() {
            this._cdmList = {}, this._preferredKeySystems = {}, this._licenseTokenUrls = {}, this._licenseUrls = {}, this._certificateUrls = {}, this._keySessions = {}, this._keyChainState = "default", this._keyTypes = {
                KEYCHAIN_DEFAULT: "default",
                KEYCHAIN_SD_FALLBACK: "sd-fallback"
            }
        }
        var t = e.prototype;
        return t.getAllKeySessions = function() {
            return Object.values(this._keySessions) || []
        }, t.getCdms = function(e) {
            return this._cdmList[e]
        }, t.getAllPreferredKeySystems = function() {
            return this._preferredKeySystems
        }, t.addCdms = function(e, t) {
            this._cdmList[t] = e
        }, t.addKeySession = function(e, t) {
            this._keySessions[t] = e
        }, t.addLicenseTokenUrl = function(e, t) {
            this._licenseTokenUrls[t] = e
        }, t.addLicenseUrl = function(e, t) {
            this._licenseUrls[t] = e
        }, t.addPreferedKeySystem = function(e, t) {
            this._preferredKeySystems[t] = e
        }, t.closeAllKeySessions = function() {
            for (let e in this._keySessions) this._keySessions[e] && this._keySessions[e].sessionId && this._keySessions[e].close()
        }, _e(e, [{
            key: "state",
            get: function() {
                return this._keyChainState
            },
            set: function(e) {
                Object.values(this._keyTypes).indexOf(e) < 0 || (this._keyChainState = e)
            }
        }, {
            key: "activeKeySession",
            get: function() {
                return this._keySessions[this._keyChainState]
            }
        }, {
            key: "activeKeySystem",
            get: function() {
                return this._preferredKeySystems[this._keyChainState]
            }
        }, {
            key: "keyTypes",
            get: function() {
                return this._keyTypes
            }
        }, {
            key: "activeLicenseTokenUrl",
            get: function() {
                return this._licenseTokenUrls[this._keyChainState]
            }
        }, {
            key: "activeLicenseUrl",
            get: function() {
                return this._licenseUrls[this._keyChainState]
            }
        }]), e
    }(),
    ds = function() {
        function e(e, t) {
            this._hasFallbackAssets = !!e.fallback_asset, this._useHls = t, this._fallbackCallback = () => null, this._currentTime = 0, this._encryptedEventName = null, this._boundGenerateRequest = this._generateRequest.bind(this), this._boundOnKeyStatus = this._onKeyStatus.bind(this), this._keyChain = new ls, this._keyTypes = this._keyChain.keyTypes, this._keyChain.state = this._keyTypes.KEYCHAIN_DEFAULT, this._keyChain.addCdms(e.cdms, this._keyTypes.KEYCHAIN_DEFAULT), this._hasFallbackAssets && this._keyChain.addCdms(e.fallback_cdms, this._keyTypes.KEYCHAIN_SD_FALLBACK)
        }
        var t = e.prototype;
        return t.init = function(e, t = {}, n = {}) {
            return this._video = e._video, this._scanner = e, this._useMs = !!window.MSMediaKeys, is() || this._useMs ? this._keyChain.state === this._keyTypes.KEYCHAIN_SD_FALLBACK ? this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                this._scanner.currentTime = this._currentTime, this._scanner.play()
            }) : this.setUpKeySystem(t, n).then(() => this.setUpKeySystem(t, n, this._keyTypes.KEYCHAIN_SD_FALLBACK)) : (this._scanner.fire(Ti.EME_UNSUPPORTED), Promise.reject())
        }, t.setUpKeySystem = function(e, t, n = this._keyTypes.KEYCHAIN_DEFAULT) {
            return new Promise((r, i) => {
                const o = this._keyChain.getCdms(n);
                return o || i(), as(o, this._useHls, this._useMs, e).then(e => {
                    this._keyChain.addPreferedKeySystem(e.find(e => e.keySystem), n);
                    const r = this._keyChain.activeKeySystem && cs(o, this._keyChain.activeKeySystem);
                    if (!r) throw this._scanner.fire(Ti.EME_UNSUPPORTED), new Error("No valid key system was found.");
                    this._keyChain.addLicenseTokenUrl(r.license_url, n);
                    const i = t && t.inits && t.inits[r.id];
                    return i || this._addEncryptedHandler(r, n), this._setMediaKeys(n).then(() => {
                        const e = this._keyChain.state === n;
                        return i && e && this._generateRequest(i.cenc, n)
                    })
                }).then(r)
            })
        }, t.destroy = function() {
            this._keyChain && this._keyChain.closeAllKeySessions(), this._video && this._video.removeEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._switchKeyChainState = function(e) {
            return new Promise(t => {
                this._keyChain.state = e, this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), t()
            })
        }, t._addEncryptedHandler = function(e, t) {
            this._encryptedEventName = "encrypted", this._keyChain.addLicenseUrl(e.license_url, t), this._useHls ? (this._certificateUrl = e.certificate_url, this._encryptedEventName = "webkitneedkey") : this._useMs && (this._encryptedEventName = "msneedkey"), this._video.addEventListener(this._encryptedEventName, this._boundGenerateRequest)
        }, t._setMediaKeys = function(e) {
            return new Promise(t => {
                if (this._useMs) {
                    const e = () => {
                        this._video.msSetMediaKeys(this._keyChain.activeKeySystem.keySystem), this._video.removeEventListener("loadedmetadata", e), t()
                    };
                    this._video.readyState >= 1 ? e() : this._video.addEventListener("loadedmetadata", e)
                } else {
                    if (this._useHls) this._video.webkitSetMediaKeys(this._keyChain.activeKeySystem.keySystem);
                    else {
                        const t = this._video.mediaKeys || this._keyChain.activeKeySystem.keySystem;
                        this._keyChain.addKeySession(this._createSession(t), e), e === this._keyChain.state && this._keyChain.activeKeySession.addEventListener("message", e => this._getLicense(e)), this._video.mediaKeys || this._video.setMediaKeys(this._keyChain.activeKeySystem.keySystem)
                    }
                    t()
                }
            })
        }, t._createSession = function(e, t, n) {
            const r = e.createSession(t, n);
            if (!r) throw new Error("Could not create key session");
            return r
        }, t._generateRequest = function(e, t) {
            t = t || this._keyChain.state;
            const n = new Error("A decryption key error was encountered");
            return "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name ? (this._loadFairPlayCertificate(this._certificateUrl).then(r => {
                this._contentId = function(e) {
                    var t = function(e) {
                            const t = new Uint16Array(e.buffer);
                            return String.fromCharCode.apply(null, t)
                        }(e),
                        n = document.createElement("a");
                    return n.href = t, n.hostname
                }(e.initData);
                const i = os(e.initData, this._contentId, r);
                return this._keyChain.addKeySession(this._createSession(this._keyChain.activeKeySystem.keySystem, "video/mp4", i), t), this._keyChain.activeKeySession.contentId = this._contentId, this._keyChain.activeKeySession.addEventListener("webkitkeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("webkitkeyerror", e => {
                    throw n
                }), r
            }).catch(e => {
                this._scanner.fire(e.error, e.payload)
            }), !0) : "com.microsoft.playready" === this._keyChain.activeKeySystem.name ? (this._keyChain.addKeySession(this._createSession(this._video.msKeys, "video/mp4", e.initData), t), this._keyChain.activeKeySession.addEventListener("mskeymessage", e => this._getLicense(e)), this._keyChain.activeKeySession.addEventListener("mskeyerror", e => {
                throw n
            }), !0) : !this._keyChain.activeKeySession.sessionId && !this._activeKeySession && (this._keyChain.activeKeySession.addEventListener("keystatuseschange", this._boundOnKeyStatus), this._activeKeySession = this._keyChain.activeKeySession.generateRequest(e.initDataType, e.initData).catch(() => {
                this._scanner.fire(Ti.DRM_FAILURE)
            }), !0)
        }, t._onKeyStatus = function() {
            let e = !1;
            const t = Array.from(this._keyChain.activeKeySession.keyStatuses.values());
            if (t.forEach((t, n) => {
                    switch (t) {
                        case "expired":
                            e = !0
                    }
                }), t.every(e => "output-restricted" === e)) {
                if (this._hasFallbackAssets) return this._currentTime = this._scanner.currentTime, void this._switchKeyChainState(this._keyTypes.KEYCHAIN_SD_FALLBACK).then(() => {
                    this._fallbackCallback(), this._scanner.fire(Ti.DRM_KEY_SWITCH, this._keyTypes.KEYCHAIN_SD_FALLBACK)
                }).catch(e => {
                    this._scanner.fire(Ti.DRM_OUTPUT_RESTRICTED)
                });
                this._scanner.fire(Ti.DRM_OUTPUT_RESTRICTED)
            }
            e && this._keyChain.activeKeySession.close()
        }, t._getLicense = function(e) {
            return this._getLicenseUrl(this._keyChain.activeLicenseTokenUrl).then(t => new Promise((n, r) => {
                this._keyChain.addLicenseUrl(t, this._keyChain.state), this._activeKeySession = null;
                const i = new XMLHttpRequest;
                i.keySession = e.target, i.open("POST", this._keyChain.activeLicenseUrl), i.responseType = "arraybuffer";
                let o = e.message;
                if ("com.microsoft.playready" === this._keyChain.activeKeySystem.name) {
                    const t = ss(e.message),
                        n = t[0];
                    Object.keys(n).forEach(e => {
                        i.setRequestHeader(e, n[e])
                    }), o = t[1]
                }
                "com.apple.fps.1_0" === this._keyChain.activeKeySystem.name && (o = new Uint8Array(o), i.setRequestHeader("Content-type", "application/octet-stream")), i.onload = () => {
                    if (403 !== i.status)
                        if (i.status >= 400) r(new Ni(Ti.DRM_FAILURE));
                        else try {
                            this._scanner.fire(Ti.DRM_AUTH_SUCCESS);
                            const e = new Uint8Array(i.response);
                            i.keySession.update(e), n()
                        } catch (xl) {
                            r(new Ni(Ti.DRM_FAILURE, `Error updating key session: ${xl}`))
                        } else r(new Ni(Ti.DRM_AUTH_FAILURE))
                }, i.onerror = r, i.send(o)
            }).catch(e => {
                this._scanner.fire(e.name, {
                    text: e.message || "License request failed."
                })
            }))
        }, t._getLicenseUrl = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.onload = () => {
                    if (r.status >= 400) n(new Ni(Ti.DRM_FAILURE));
                    else try {
                        try {
                            const e = JSON.parse(r.response),
                                {
                                    licenseAcquisitionUrl: n,
                                    token: i
                                } = e;
                            if (!n && !i) throw new Error;
                            t(`${n}?ExpressPlayToken=${i}`)
                        } catch (e) {
                            t(r.response)
                        }
                    } catch (xl) {
                        n(new Ni(Ti.DRM_FAILURE, `Error retrieving License Acquisition URL (LA_URL): ${xl}`))
                    }
                }, r.onerror = n, r.send()
            })
        }, t._loadFairPlayCertificate = function(e) {
            return new Promise((t, n) => {
                const r = new XMLHttpRequest;
                r.open("GET", e), r.responseType = "arraybuffer", r.setRequestHeader("Pragma", "Cache-Control: no-cache"), r.setRequestHeader("Cache-Control", "max-age=0"), r.onload = () => {
                    if (403 !== r.status)
                        if (r.status >= 400) n({
                            error: Ti.DRM_FAILURE
                        });
                        else try {
                            t(new Uint8Array(r.response))
                        } catch (xl) {
                            n(xl)
                        } else n({
                            error: Ti.DRM_AUTH_FAILURE
                        })
                }, r.onerror = n, r.send()
            })
        }, t.setFallbackCallback = function(e) {
            this._fallbackCallback = () => e()
        }, _e(e, [{
            key: "state",
            get: function() {
                return this._keyChain.state
            }
        }, {
            key: "hasFallbackAssets",
            get: function() {
                return this._hasFallbackAssets
            }
        }]), e
    }();
const hs = (() => {
        const e = navigator.userAgent.match(/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\./);
        return !!e && {
            major: parseInt(e[1], 10),
            minor: parseInt(e[2], 10)
        }
    })(),
    fs = document.createElement("video"),
    _s = {
        settingPlaybackRate: (() => {
            if (en.android && hs && "object" == typeof hs && hs.major < 52) return !1;
            const e = fs.playbackRate;
            fs.playbackRate = .5 * e;
            const t = e !== fs.playbackRate;
            return fs.playbackRate = e, t
        })(),
        settingVolume: (() => {
            if (en.android || en.iOS || en.iPadOS) return !1;
            const e = fs.volume;
            return fs.volume = .5 * e, fs.volume !== e
        })(),
        textTracks: void 0 !== fs.textTracks && "undefined" != typeof TextTrackList && fs.textTracks instanceof TextTrackList
    },
    ps = new WeakMap;
let ms = function() {
        function e({
            files: e,
            id: t = st(),
            title: n = null,
            subtitle: r = null,
            metadata: i = {},
            textTracks: o = ki(),
            audioTracks: s = ki(),
            externalDisplayFiles: a = {},
            chapters: c = [],
            duration: u
        }) {
            if (!e || !Array.isArray(e)) throw new TypeError("Must provide files for the video.");
            er(this);
            const l = function(e = []) {
                    return e.getFileById = Ri, e
                }(e.map(e => e instanceof ns ? (e.video = this, e) : new ns(e, this))),
                d = ki(o.map(e => e instanceof Uo ? (e.video = this, e) : new Uo(e, this)));
            this._audioTracksFromConfig = s, Object.keys(a).forEach(e => {
                !a[e] || a[e] instanceof ns || (a[e] = new ns(a[e], this))
            }), Object.defineProperties(this, {
                id: {
                    value: `${t}`,
                    enumerable: !0
                },
                title: {
                    value: n,
                    enumerable: !0
                },
                subtitle: {
                    value: r,
                    enumerable: !0
                },
                metadata: {
                    value: i,
                    enumerable: !0
                },
                files: {
                    value: l,
                    enumerable: !0
                },
                textTracks: {
                    value: d,
                    enumerable: !0,
                    writable: !0
                },
                chapters: {
                    value: c,
                    enumerable: !0
                },
                duration: {
                    value: u,
                    enumerable: !0
                },
                externalDisplayFiles: {
                    value: a,
                    enumerable: !0
                }
            }), i.drm && (i.drm.fastly || "vimeo" === i.drm.system ? this._drmHandler = new ds(i.drm, i.useHls) : this._drmHandler = new us(i.drm, i.useHls))
        }
        return e.prototype.deactivate = function() {
            this._drmHandler && this._drmHandler.destroy(), this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e))
        }, _e(e, [{
            key: "drmHandler",
            get: function() {
                return this._drmHandler || null
            }
        }, {
            key: "currentFile",
            get: function() {
                return this.currentScanner.currentFile
            },
            set: function(e) {
                this.currentScanner.currentFile = e
            }
        }, {
            key: "currentScanner",
            get: function() {
                return ps.get(this)
            },
            set: function(e) {
                this.currentScanner && _s.textTracks && this.textTracks.forEach(e => this.currentScanner.removeTextTrack(e)), _s.textTracks && this.textTracks.forEach(t => e.addTextTrack(t)), ps.set(this, e)
            }
        }, {
            key: "chapters",
            get: function() {
                return this.chapters
            }
        }, {
            key: "audioTracks",
            get: function() {
                return ki((this.currentScanner.constructor.supportsVideoElementAudioTracks ? Array.from(this.currentScanner.audioTracks) : this._audioTracksFromConfig).map(e => e instanceof rs ? (e.video = this, e) : new rs(e, this)))
            }
        }]), e
    }(),
    vs = function() {
        function e(e, t = {}) {
            this._telecine = e, this._options = t, this._bufferInterval = null, this._lastBufferCheckVideoTime = this._options.embedTime ? this._options.embedTime : 0, this._isBuffering = !1, this._isSeeking = !1, this._userPlayState = !1, this.playInitiated = !1, this._isLiveStreamOnline = !1, this._checkInterval = 250, er(this), this._boundEndBuffering = this._endBuffering.bind(this), this._boundOnPause = this._onPause.bind(this), this._boundOnSeeking = this._onSeeking.bind(this), this._boundOnSeeked = this._onSeeked.bind(this), this._boundOnLiveOnline = this._onLiveOnline.bind(this), this._boundOnLiveOffline = this._onLiveOffline.bind(this), this._toggleEvents(this._telecine.on), this._options.noInterval || this._setUpRebufferMonitor()
        }
        var t = e.prototype;
        return t.destroy = function() {
            clearInterval(this._bufferInterval), this._toggleEvents(this._telecine.off), this._endBuffering()
        }, t._toggleEvents = function(e) {
            e(vi.PAUSE, this._boundOnPause), e(vi.PLAYING, this._boundEndBuffering), e(vi.SEEKING, this._boundOnSeeking), e(vi.SEEKED, this._boundOnSeeked), e(Si.STREAM_ONLINE, this._boundOnLiveOnline), e(Si.STREAM_OFFLINE, this._boundOnLiveOffline)
        }, t._onPause = function() {
            this.userPlayState = !1
        }, t._endBuffering = function() {
            this._isBuffering && (this._isBuffering = !1, this.fire(Ti.BUFFER_ENDED))
        }, t._onSeeking = function() {
            this._isSeeking = !0
        }, t._onSeeked = function() {
            this._isSeeking = !1
        }, t._onLiveOnline = function() {
            this._isLiveStreamOnline = !0
        }, t._onLiveOffline = function() {
            this._isLiveStreamOnline = !1
        }, t._setUpRebufferMonitor = function() {
            clearInterval(this._bufferInterval), this._bufferInterval = setInterval(this.runIntervalCheck.bind(this), this._checkInterval)
        }, t.runIntervalCheck = function() {
            if (!this._telecine.video) return;
            const e = this._telecine.video.currentScanner;
            if (!e) return;
            const t = this._telecine.isLive(),
                n = e.currentTime,
                r = this._checkInterval / 2 / 1e3;
            if (this.playInitiated && (!this._isSeeking || t) && (!this._telecine.paused || this.userPlayState) && !this._isBuffering && n < this._lastBufferCheckVideoTime + r) {
                if (t && !this._isLiveStreamOnline) return;
                const e = this._telecine.buffered;
                for (let t = 0; t < e.length; t++)
                    if (n >= e.start(t) && n + .2 <= e.end(t)) return void(this._lastBufferCheckVideoTime = n);
                if (n + r >= this._telecine.duration) return;
                this._isBuffering = !0, this.fire(Ti.BUFFER_STARTED)
            }(this.playInitiated && this._isBuffering && n > this._lastBufferCheckVideoTime + r || t && !this._isLiveStreamOnline && this._isBuffering) && (this._isBuffering = !1, this.fire(Ti.BUFFER_ENDED)), this._lastBufferCheckVideoTime = n
        }, _e(e, [{
            key: "userPlayState",
            get: function() {
                return this._userPlayState
            },
            set: function(e) {
                this._userPlayState = e, e || this._endBuffering()
            }
        }]), e
    }();

function gs() {
    let e, t;

    function n() {
        if (!t) return Promise.reject();
        e.preload = "";
        let n = e.play();
        return void 0 === n && (n = new Promise(t => {
            e.addEventListener("playing", t)
        })), n
    }

    function r() {
        t && (t.resolve(), t = null)
    }

    function i(e) {
        t && (t.reject(e), t = null)
    }
    return {
        set video(t) {
            e = t
        },
        get video() {
            return e
        },
        get active() {
            return !!t
        },
        start: function(o = Promise.resolve.bind(Promise)) {
            return t || (t = new Ke),
                function() {
                    const t = e.querySelectorAll("source").length > 0;
                    e.src || t ? document.createElement("video").load() : e.load()
                }(), o().then(n).then(r).catch(i), t
        },
        cancel: function() {
            t && (t.reject(new Ni("PlayInterrupted", "The play() request was interrupted by a call to pause()")), t = null)
        }
    }
}
let ys = function() {
        function e(e, t, n = {}) {
            this._element = e, this._scanners = t, this._options = n, this._video = null, this._textTracks = ki(), this._properties = {}, this._currentScanner = new zi(e), this._options.playRequest = new gs, this._blacklistedScanners = [], this._activeEffects = [], this._previousScanner = null, this._switchingVideo = !1, this._snapshotDisplayed = !1, er(this)
        }
        var t = e.prototype;
        return t.supportsEffect = function(e) {
            return !!e.supported && e.supportedScanners.some(e => this._getScannerName(this._currentScanner) === e.displayName)
        }, t.getEffectByName = function(e) {
            let t = null;
            return this._activeEffects.forEach(n => {
                e === this._getEffectName(n) && (t = n)
            }), t
        }, t.activateEffect = function(e, t) {
            const n = new e(this, t);
            return n.activate(), this._activeEffects.push(n), n
        }, t.deactivateEffect = function(e) {
            return this._activeEffects.some((t, n) => t.constructor === e && (t.deactivate(), this._activeEffects.splice(n, 1), !0))
        }, t.deactivateEffects = function() {
            this._activeEffects.forEach(e => this.deactivateEffect(e.constructor))
        }, t.play = function() {
            if (!this._video || this._video.files.length < 1) throw new Ni("NoFiles", "There are no files to play.");
            this._rebufferMonitor.playInitiated || (this._rebufferMonitor.playInitiated = !0), this._rebufferMonitor.userPlayState = !0;
            const e = this._currentScanner.play();
            return this._properties.paused = !1, e
        }, t.pause = function() {
            if (!this._video || this._video.files.length < 1) throw new Ni("NoFiles", "There are no files to play.");
            return this._rebufferMonitor.userPlayState = !1, this._currentScanner.pause(), this._properties.paused = !0, this
        }, t.isLive = function() {
            return this.currentScannerName.includes("Live")
        }, t.endLive = function() {
            this._currentScanner.endLive()
        }, t.getBitrateAtTime = function(e, t = "video") {
            var n, r;
            return "MediaSourceScanner" !== this._getScannerName(this._currentScanner) && "HLSLiveScanner" !== this._getScannerName(this._currentScanner) || "audio" === t && this._currentScanner._streams[t].length <= 1 ? 0 : (null == (n = (r = this._currentScanner).getBitrateAtTime) ? void 0 : n.call(r, e, t)) || 0
        }, t.getCurrentStream = function(e = "video") {
            var t, n;
            return null == (t = (n = this._currentScanner).getCurrentStream) ? void 0 : t.call(n, e)
        }, t.showExternalDisplayPicker = function(e) {
            this._currentScanner.showExternalDisplayPicker(e)
        }, t.requestPictureInPicture = function() {
            return this._currentScanner.requestPictureInPicture()
        }, t.exitPictureInPicture = function() {
            return this._currentScanner.exitPictureInPicture()
        }, t.addChapter = function(e, t) {
            this._currentScanner.addChapter(e, t)
        }, t.removeChapter = function(e) {
            this._currentScanner.removeChapter(e)
        }, t.addCuePoint = function(e, t) {
            return this._currentScanner.addCuePoint(e, t)
        }, t.removeCuePoint = function(e) {
            return this._currentScanner.removeCuePoint(e)
        }, t.removeAllCuePoints = function() {
            return this._currentScanner.removeAllCuePoints()
        }, t.enableAudioTrack = function(e) {
            return this._currentScanner.enableAudioTrack(e)
        }, t.addVideoEventListeners = function() {
            return this._currentScanner.addVideoEventListeners()
        }, t.removeVideoEventListeners = function() {
            return this._currentScanner.removeVideoEventListeners()
        }, t._findScanner = function({
            textTrackSupport: e = !1
        } = {}) {
            if (e && !_s.textTracks) return null;
            const t = this._video.files.sort((e, t) => e.priority - t.priority),
                n = this._scanners;
            for (const r in t) {
                let e = t[r];
                for (const t in n) {
                    let r = n[t];
                    if (r.supported(this._options.enableMMS) && -1 === this._blacklistedScanners.indexOf(this._getScannerName(r)) && r.supportedVideoTypes.some(t => e.mime === t)) return r
                }
            }
            return null
        }, t.reactivate = function() {
            var e;
            (null == (e = this._currentScanner) ? void 0 : e.reactivate) && this._currentScanner.reactivate(), this.play()
        }, t.checkRebuffer = function(e, t) {
            this._rebufferMonitor && (this._rebufferMonitor.playInitiated = e, this._rebufferMonitor.userPlayState = t, this._rebufferMonitor.runIntervalCheck())
        }, t._initScanner = function(e, t) {
            if (this._currentScanner.constructor === e && this._currentScanner.video === t) return;
            const n = !this.isLive() && this._currentScanner._preserveCurrentTime;
            this._switchingVideo ? (this._previousScanner = this._currentScanner, this._previousScanner._switchingVideo = !0, this._snapshotDisplayed || (this._previousScanner.takeSnapshot(), this._snapshotDisplayed = !0), this._previousScanner.deactivate()) : this._currentScanner.deactivate();
            const r = new e(this._element, this._options);
            Object.keys(wi).forEach(e => {
                const t = wi[e];
                r.on(t, e => this._handleEvent(t, e, r))
            }), this._currentScanner = r, t.currentScanner = r, this._currentScanner.video = t;
            const i = Object.keys(this._properties);
            for (let o = 0; o < i.length; o++) {
                const e = i[o];
                "paused" !== e ? ("currentTime" !== e || n) && (this._currentScanner[e] = this._properties[e]) : !1 === this._properties.paused && this._currentScanner.play()
            }
            this._currentScanner.addChapters(t.chapters, t.duration), this.fire(Ti.SCANNER_CHANGE, this._getScannerName(this._currentScanner)), this._currentScanner.on(["canplay", "playing"], () => {
                this._previousScanner && (this._previousScanner._switchingVideo = !1, this._previousScanner.removeSnapshot(), this._previousScanner = null, this._snapshotDisplayed = !1)
            })
        }, t._updateScanner = function() {
            if (null === this._video) return;
            const e = this._findScanner({
                textTrackSupport: this._video.textTracks.length > 0
            });
            e ? this._initScanner(e, this._video) : this._fireVideoError("FilesNotPlayable", "None of the files could be played in this browser.")
        }, t._resetScanner = function() {
            this._currentScanner.deactivate(), this._currentScanner = new zi(this._element)
        }, t._handleEvent = function(e, t, n) {
            if (n === this._currentScanner) {
                switch (e) {
                    case vi.ERROR:
                        return void(t instanceof Ni && this.fire(vi.ERROR, t));
                    case Ti.SCANNER_ERROR:
                        this._fireVideoError("ScannerError", `The current scanner can no longer be used because ${t.reason}`), this._blacklistedScanners.push(this._getScannerName(this._currentScanner)), this._updateScanner([]);
                        break;
                    case Ti.FILE_ERROR:
                        this._fireVideoError("FileError", `The current file can no longer be used because ${t.reason}`), this._currentScanner._switchToNextFile();
                        break;
                    case Ti.DOWNLOAD_ERROR:
                        this._fireVideoError("DownloadError", t), this._currentScanner._switchToNextFile();
                        break;
                    case Ti.EME_UNSUPPORTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "emeunsupported"
                        });
                        break;
                    case Ti.DRM_FAILURE:
                    case Ti.DRM_AUTH_FAILURE:
                        this._fireVideoError("DRMFailure", {
                            text: t.text,
                            code: t.code
                        });
                        break;
                    case Ti.DRM_OUTPUT_RESTRICTED:
                        this._fireVideoError("DRMFailure", {
                            text: null,
                            code: "outputrestricted"
                        });
                        break;
                    case Ti.DRM_AUTH_SUCCESS:
                        this.fire(Ti.DRM_AUTH_SUCCESS);
                        break;
                    case vi.TIME_UPDATE:
                        this._properties.currentTime = this._currentScanner.currentTime;
                        break;
                    case Ti.MEDIA_URL_EXPIRED:
                        this._fireVideoError("MediaUrlExpired", t);
                        break;
                    case Ti.MEDIA_URL_BAD_REQUEST:
                        this._fireVideoError("MediaUrlBadRequest", t);
                        break;
                    case bi.SPATIAL_UNSUPPORTED:
                        this.getEffectByName("ThreeSixtyEffect").deactivate();
                        break;
                    case vi.ENDED:
                        const e = !this._options.dvrEnabled || this.atLiveEdge;
                        this._properties.paused = e;
                        break;
                    case vi.WAITING:
                        this.fire(vi.WAITING)
                }
                this._activeEffects.forEach(t => {
                    "function" == typeof t[`on${e}`] && t[`on${e}`]()
                }), this.fire(e, t)
            }
        }, t._fireVideoError = function(e, t) {
            this.fire(vi.ERROR, new Ni(e, t))
        }, t._getScannerName = function(e) {
            return e instanceof zi ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t._setUpRebufferMonitor = function() {
            this._rebufferMonitor && this._rebufferMonitor.destroy(), this._rebufferMonitor = new vs(this, this._options), this._rebufferMonitor.on(Ti.BUFFER_STARTED, () => {
                this.fire(Ti.BUFFER_STARTED)
            }), this._rebufferMonitor.on(Ti.BUFFER_ENDED, () => {
                this.fire(Ti.BUFFER_ENDED)
            })
        }, t._getEffectName = function(e) {
            return e instanceof Zo ? e.constructor.displayName : e.prototype.constructor.displayName
        }, t.setCaptionsShouldDisplay = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsShouldDisplay(e)
        }, t.setCaptionsShouldLoad = function(e) {
            "HLSLiveScanner" === this._getScannerName(this._currentScanner) && this._currentScanner.setCaptionsShouldLoad(e)
        }, _e(e, [{
            key: "element",
            get: function() {
                return this._element
            }
        }, {
            key: "videoElement",
            get: function() {
                return this._currentScanner.videoElement
            }
        }, {
            key: "manifest",
            get: function() {
                return this._currentScanner.manifest || {
                    video: []
                }
            }
        }, {
            key: "supportsVideoElementAudioTracks",
            get: function() {
                return this._currentScanner.constructor.supportsVideoElementAudioTracks
            }
        }, {
            key: "activeEffects",
            get: function() {
                return this._activeEffects
            }
        }, {
            key: "latency",
            get: function() {
                return this._currentScanner.latency
            }
        }, {
            key: "downloadSpeed",
            get: function() {
                return this._currentScanner.downloadSpeed || 0
            }
        }, {
            key: "pictureInPictureActive",
            get: function() {
                return this._currentScanner.pictureInPictureActive
            }
        }, {
            key: "pictureInPictureEnabled",
            get: function() {
                return this._currentScanner.pictureInPictureEnabled
            }
        }, {
            key: "isLowerProfileAvailable",
            get: function() {
                return this._currentScanner.isLowerProfileAvailable
            }
        }, {
            key: "buffered",
            get: function() {
                return this._currentScanner.buffered
            }
        }, {
            key: "bufferTarget",
            get: function() {
                return this._currentScanner.bufferTarget
            },
            set: function(e) {
                this._properties.bufferTarget = e, this._currentScanner.bufferTarget = e
            }
        }, {
            key: "presentationDelay",
            get: function() {
                return this._currentScanner.presentationDelay
            },
            set: function(e) {
                this._properties.presentationDelay = e, this._currentScanner.presentationDelay = e
            }
        }, {
            key: "lowLatencyMode",
            get: function() {
                return this._currentScanner.lowLatencyMode
            },
            set: function(e) {
                this._properties.lowLatencyMode = e, this._currentScanner.lowLatencyMode = e
            }
        }, {
            key: "manifestLoadDurations",
            get: function() {
                return this._currentScanner.manifestLoadDurations ? this._currentScanner.manifestLoadDurations : []
            }
        }, {
            key: "successfulSegments",
            get: function() {
                return this._currentScanner.successfulSegments ? this._currentScanner.successfulSegments : []
            }
        }, {
            key: "failedSegments",
            get: function() {
                return this._currentScanner.failedSegments ? this._currentScanner.failedSegments : []
            }
        }, {
            key: "cuePoints",
            get: function() {
                return this._currentScanner.cuePoints
            }
        }, {
            key: "currentChapterID",
            get: function() {
                if (this._currentScanner && this._currentScanner.chaptersTrack && this._currentScanner.chaptersTrack.activeCues.length) {
                    const {
                        activeCues: e
                    } = this._currentScanner.chaptersTrack;
                    return e[e.length - 1].id
                }
                return null
            }
        }, {
            key: "chapters",
            get: function() {
                return this._currentScanner.chaptersTrack ? this._currentScanner.chaptersTrack.cues : []
            }
        }, {
            key: "chaptersTrack",
            get: function() {
                return this._currentScanner.chaptersTrack
            }
        }, {
            key: "currentFile",
            get: function() {
                return this._currentScanner.currentFile
            },
            set: function(e) {
                if ("string" == typeof e && (e = this._files.filter(t => t.id === e)[0]), !e) throw new Ni("FileNotValid", "The file is not valid.");
                this._currentScanner.currentFile = e
            }
        }, {
            key: "currentScannerName",
            get: function() {
                return this._getScannerName(this._currentScanner)
            }
        }, {
            key: "currentScanner",
            get: function() {
                return this._currentScanner
            }
        }, {
            key: "currentTime",
            get: function() {
                return this._currentScanner.currentTime
            },
            set: function(e) {
                this._properties.currentTime = e, this._currentScanner.currentTime = e
            }
        }, {
            key: "liveEdgeTime",
            get: function() {
                const e = this._currentScanner.liveEdgeTime;
                return null == e ? this._previousLiveEdgeTime : (this._previousLiveEdgeTime = e, e)
            }
        }, {
            key: "atLiveEdge",
            get: function() {
                var e;
                return null !== (e = this._currentScanner.atLiveEdge) && void 0 !== e ? e : this.isLive()
            }
        }, {
            key: "liveTailTime",
            get: function() {
                const e = this._currentScanner.liveTailTime;
                return null == e ? this._previousLiveTailTime : (this._previousLiveTailTime = e, e)
            }
        }, {
            key: "atLiveTail",
            get: function() {
                var e;
                return null !== (e = this._currentScanner.atLiveTail) && void 0 !== e && e
            }
        }, {
            key: "duration",
            get: function() {
                return this._currentScanner.duration
            }
        }, {
            key: "ended",
            get: function() {
                return this._currentScanner.ended
            }
        }, {
            key: "externalDisplayAvailable",
            get: function() {
                return this._currentScanner.externalDisplayAvailable
            }
        }, {
            key: "externalDisplayActive",
            get: function() {
                return this._currentScanner.externalDisplayActive
            }
        }, {
            key: "loop",
            get: function() {
                return this._currentScanner.loop
            },
            set: function(e) {
                this._properties.loop = e, this._currentScanner.loop = e
            }
        }, {
            key: "muted",
            get: function() {
                return this._currentScanner.muted
            },
            set: function(e) {
                this._properties.muted = !!e, this._currentScanner.muted = !!e
            }
        }, {
            key: "playsinline",
            get: function() {
                return this._currentScanner.playsinline
            },
            set: function(e) {
                this._properties.playsinline = !!e, this._currentScanner.playsinline = !!e
            }
        }, {
            key: "paused",
            get: function() {
                return this._currentScanner.paused
            }
        }, {
            key: "played",
            get: function() {
                return this._currentScanner.played
            }
        }, {
            key: "seekable",
            get: function() {
                return this._currentScanner.seekable
            }
        }, {
            key: "seeking",
            get: function() {
                return this._currentScanner.seeking
            }
        }, {
            key: "defaultPlaybackRate",
            get: function() {
                return this._currentScanner.defaultPlaybackRate
            },
            set: function(e) {
                this._properties.defaultPlaybackRate = e, this._currentScanner.defaultPlaybackRate = e
            }
        }, {
            key: "playbackRate",
            get: function() {
                return this._currentScanner.playbackRate
            },
            set: function(e) {
                this._properties.playbackRate = e, this._currentScanner.playbackRate = e
            }
        }, {
            key: "preload",
            get: function() {
                return this._currentScanner.preload
            },
            set: function(e) {
                this._properties.preload = e, this._currentScanner.preload = e
            }
        }, {
            key: "autoPictureInPicture",
            get: function() {
                return this._currentScanner.autoPictureInPicture
            },
            set: function(e) {
                this._properties.autoPictureInPicture = !!e, this._currentScanner.autoPictureInPicture = !!e
            }
        }, {
            key: "disablePictureInPicture",
            get: function() {
                return this._currentScanner.disablePictureInPicture
            },
            set: function(e) {
                this._properties.disablePictureInPicture = !!e, this._currentScanner.disablePictureInPicture = !!e
            }
        }, {
            key: "video",
            get: function() {
                return this._video
            },
            set: function(e) {
                this._video && this._video.deactivate(), this._blacklistedScanners = [], this._setUpRebufferMonitor(), null === e ? (this._video = null, this._resetScanner()) : (this._video = new ms(e), this._updateScanner())
            }
        }, {
            key: "videoWidth",
            get: function() {
                return this._currentScanner.videoWidth
            }
        }, {
            key: "videoHeight",
            get: function() {
                return this._currentScanner.videoHeight
            }
        }, {
            key: "volume",
            get: function() {
                return this._currentScanner.volume
            },
            set: function(e) {
                if (e < 0 || e > 1) throw new Ni("IndexSizeError", `Failed to set the 'volume' property: The volume provided (${e}) is outside of the range [0, 1].`);
                this._properties.volume = e, this._currentScanner.volume = e
            }
        }, {
            key: "videoElementAudioTracks",
            get: function() {
                return this._currentScanner.audioTracks
            }
        }, {
            key: "brainDebug",
            get: function() {
                return this._currentScanner.brainDebug
            }
        }]), e
    }(),
    Es = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._video = r._telecine._currentScanner._video, r
        }
        ge(t, e), _e(t, null, [{
            key: "displayName",
            get: function() {
                return "CanvasEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return !0
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [zi, ko]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            this._activated = !0, this._canvas = document.createElement("canvas"), this._canvas.className = "vp-canvas-effect", this._canvas.style.cssText = "\n            position: absolute;\n            top:0;\n            left:0;\n            bottom:0;\n            right:0;\n        ", this._ctx = this._canvas.getContext("2d", {
                alpha: !1
            }), this._element.appendChild(this._canvas), this._startRendering()
        }, n.deactivate = function() {
            this._canvas && this._element.removeChild(this._canvas), this._stopRendering(), this._activated = !1
        }, n._startRendering = function() {
            this._requestFrame()
        }, n._requestFrame = function() {
            this._animationFrame = window.requestAnimationFrame(this._renderFrame.bind(this))
        }, n._renderFrame = function() {
            const e = this._video,
                t = this._canvas;
            t.width = e.clientWidth, t.height = e.clientHeight;
            const n = Math.floor(this._videoContentWidth()),
                r = Math.floor(this._videoContentHeight()),
                i = Math.floor((e.clientWidth - n) / 2),
                o = Math.floor((e.clientHeight - r) / 2);
            this._ctx.fillStyle = "#000", this._ctx.fillRect(0, 0, t.width, t.height), this._ctx.drawImage(e, i, o, n, r), this._requestFrame()
        }, n._videoRatio = function() {
            return this._video.videoHeight / this._video.videoWidth
        }, n._videoContentWidth = function() {
            return Math.min(this._video.clientHeight / this._videoRatio(), this._video.clientWidth)
        }, n._videoContentHeight = function() {
            return Math.min(this._video.clientWidth * this._videoRatio(), this._video.clientHeight)
        }, n._stopRendering = function() {
            this._animationFrame && (window.cancelAnimationFrame(this._animationFrame), this._animationFrame = null)
        }, t
    }(Zo),
    Ts = function() {
        function e() {}
        return _e(e, null, [{
            key: "Equirect",
            get: function() {
                return "equirectangular"
            }
        }]), e
    }(),
    Ss = function() {
        function e() {}
        return _e(e, null, [{
            key: "Mono",
            get: function() {
                return "mono"
            }
        }, {
            key: "TopBottom",
            get: function() {
                return "top-bottom"
            }
        }, {
            key: "LeftRight",
            get: function() {
                return "left-right"
            }
        }]), e
    }(),
    bs = function() {
        function e(e, t, n) {
            switch (this.isStereo = t !== Ss.Mono, this._leftEye = null, this._rightEye = null, e) {
                case Ts.Equirect:
                    this.createEquirectProjection(n, t);
                    break;
                default:
                    this.createEquirectProjection(n, Ss.Mono)
            }
        }
        var t = e.prototype;
        return t.createEquirectProjection = function(e, t) {
            t !== Ss.Mono ? (this._leftEye = this._createEquirectangularSphereMesh(e), this._rightEye = this._createEquirectangularSphereMesh(e), this._leftEye.layers.set(1), this._rightEye.layers.set(2), t === Ss.TopBottom && (this._chopGeometryUvs(this._leftEye.geometry, .5, .5), this._chopGeometryUvs(this._rightEye.geometry, .5, 0)), t === Ss.LeftRight && (this._chopGeometryUvs(this._leftEye.geometry, .5, 0, 0), this._chopGeometryUvs(this._rightEye.geometry, .5, .5, 0))) : this._leftEye = this._createEquirectangularSphereMesh(e)
        }, t._createEquirectangularSphereMesh = function(t, n, r, i) {
            const o = new THREE.SphereBufferGeometry(n || e.SPHERE_RADIUS, r || e.TESSELATION_WIDTH, i || e.TESSELATION_HEIGHT);
            o.scale(-1, 1, 1);
            const s = new THREE.MeshBasicMaterial({
                map: t
            });
            return new THREE.Mesh(o, s)
        }, t._chopGeometryUvs = function(e, t, n, r = 1) {
            for (let i = 0; i < e.attributes.uv.array.length; i += 2) e.attributes.uv.array[i + r] *= t, e.attributes.uv.array[i + r] += n
        }, _e(e, [{
            key: "left",
            get: function() {
                return this._leftEye
            }
        }, {
            key: "right",
            get: function() {
                return this._rightEye
            }
        }], [{
            key: "TESSELATION_WIDTH",
            get: function() {
                return 120
            }
        }, {
            key: "TESSELATION_HEIGHT",
            get: function() {
                return 80
            }
        }, {
            key: "SPHERE_RADIUS",
            get: function() {
                return 500
            }
        }]), e
    }(),
    As = function() {
        function e(e) {
            this._renderer = e
        }
        var t = e.prototype;
        return t.hasVRHeadset = function() {
            return en.webvr ? navigator.getVRDisplays().then(e => e.length > 0 ? (this._renderer.vr.setDevice(e[0]), e[0]) : null) : null
        }, t.enter = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().requestPresent([{
                source: this._renderer.domElement
            }])
        }, t.exit = function() {
            return this._renderer.vr.getDevice() && this._renderer.vr.getDevice().exitPresent()
        }, _e(e, [{
            key: "supported",
            get: function() {
                return en.webvr
            }
        }, {
            key: "device",
            get: function() {
                return this._renderer && this._renderer.vr.getDevice() ? this._renderer.vr.getDevice() : null
            }
        }, {
            key: "isPresenting",
            get: function() {
                return !(!this._renderer || !this._renderer.vr.getDevice()) && this._renderer.vr.getDevice().isPresenting
            }
        }]), e
    }(),
    ws = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this)._activated = !1, r._camera = null, r._scene = null, r._renderer = null, r.isUserInteracting = !1, r._onMouseDownMouseX = 0, r._onMouseDownMouseY = 0, r._coordinates = {
                lat: 0,
                long: 0
            }, r._previousCoordinates = {
                lat: 0,
                long: 0
            }, r._onMouseDownCoordinates = {
                lat: 0,
                long: 0
            }, r._previousCameraProps = r.cameraProps, r._phi = 0, r._theta = 0, r._rotation = 0, r._video = r._telecine._currentScanner._video, r._videoRefreshLoop = null, r._gyroVector = {
                x: 0,
                y: 0
            }, r._offset = {
                lat: 0,
                long: 0
            }, r._writeSpeeds = {
                videoFps: r._options.fps,
                motionRenderSpeed: 60
            }, r._maxTimeBetweenWrites = 1e3 / r._writeSpeeds.videoFps, r._motionTimeouts = [], r._movingAutomatically = !1, r._deviceMotionHasOccurred = !1, r._updateFromGyroscopePending = !1, r._keysPressed = {
                up: !1,
                down: !1,
                left: !1,
                right: !1
            }, r
        }
        ge(t, e), _e(t, [{
            key: "isUserInteracting",
            set: function(e) {
                e !== this._isUserInteracting && (this._isUserInteracting = e, e ? this._options.isMobile || this._telecine.fire(bi.MOTION_START) : this._options.isMobile || this._telecine.fire(bi.MOTION_END))
            },
            get: function() {
                return this._isUserInteracting
            }
        }], [{
            key: "displayName",
            get: function() {
                return "ThreeSixtyEffect"
            }
        }, {
            key: "supported",
            get: function() {
                try {
                    const e = document.createElement("canvas");
                    return !!window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))
                } catch (xl) {
                    return this._telecine._currentScanner.fire(bi.SPATIAL_UNSUPPORTED), !1
                }
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [zi, ko]
            }
        }]), t.frustumSurfaceArea = function(e, t, n) {
            const r = 2 * bs.SPHERE_RADIUS * 2 * Math.sin(Math.PI / 180 * (e / 2));
            return r * (r * t / n) / (4 * Math.PI * Math.pow(bs.SPHERE_RADIUS, 2))
        };
        var n = t.prototype;
        return n.activate = function() {
            return new Promise((e, t) => {
                if (window.THREE) return void e();
                const n = document.createElement("script");
                n.src = this._options.threeUrl, document.body.appendChild(n), n.onload = () => {
                    e()
                }
            }).then(() => this._initialize())
        }, n._initialize = function() {
            this._activated = !0, this._camera = new THREE.PerspectiveCamera(this._options.fieldOfView, this._video.clientWidth / this._video.clientHeight, 1, 2 * bs.SPHERE_RADIUS), this._camera.target = new THREE.Vector3(0, 0, 0), this._camera.layers.enable(1), this._initializeAutoMovement(this._options.directorTimeline), this._scene = new THREE.Scene, this._texture = new THREE.VideoTexture(this._video), this._texture.generateMipmaps = !1, this._texture.minFilter = THREE.NearestFilter, this._texture.maxFilter = THREE.NearestFilter, this._texture.format = THREE.RGBFormat, this._projector = new bs(this._options.projection, this._options.stereoMode, this._texture), this._projector.isStereo && this._scene.add(this._projector.right), this._scene.add(this._projector.left), this._renderer = new THREE.WebGLRenderer, this._renderer.vr.enabled = !0, this._renderer.setPixelRatio(window.devicePixelRatio), this._output = document.createElement("div"), this._output.appendChild(this._renderer.domElement), this._element.appendChild(this._output), this._hideOutput(), this._telecine._currentScanner._video.setAttribute("crossorigin", "anonymous"), this._startRendering(), this._telecine._currentScanner.paused || this._showOutput(), this._webvr = new As(this._renderer), this._webvr.supported && this._webvr.hasVRHeadset().then(e => {
                setTimeout(() => {
                    this._telecine.fire(bi.WEBVR_HARDWARE_AVAILABLE, this._webvr.device)
                }, 100)
            }).catch(e => {})
        }, n.toggleVR = function() {
            if (this._webvr.isPresenting) this._webvr.exit().then(() => {
                this.adjustRenderSize()
            }).catch(e => {});
            else {
                if (this._telecine._currentScanner.paused) return;
                this._webvr.enter().then(() => {
                    this.adjustRenderSize()
                }).catch(e => {})
            }
        }, n.onplay = function() {
            this._activated && (this._showOutput(), this.adjustRenderSize())
        }, n.deactivate = function() {
            this._output && this._element.removeChild(this._output), this._stopRendering(), this._activated = !1
        }, n.snapToCenter = function() {
            this._motionTimeouts.forEach(e => clearTimeout(e));
            const e = ((this._coordinates.long >= 180 ? 360 : 0) - this._coordinates.long) / 11,
                t = (0 - this._coordinates.lat) / 11;
            this._rotation = 0;
            for (let n = 0; n < 50; n++) this._motionTimeouts.push(setTimeout(() => {
                0 === n && (this._movingAutomatically = !0, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)), 49 === n && (this._movingAutomatically = !1, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps)), this._updateViewpoint(this._coordinates.lat + t / Math.pow(1.1, n), this._coordinates.long + e / Math.pow(1.1, n)), this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t / Math.pow(1.1, n), this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t / Math.pow(1.1, n)
            }, n * this._maxTimeBetweenWrites))
        }, n.isStereo = function() {
            return !!this._projector && this._projector.isStereo
        }, n._initializeAutoMovement = function(e) {
            e && e[0] && void 0 !== e[0].p && "undefined" !== e[0].y && this._updateViewpoint(e[0].p, e[0].y)
        }, n._updateViewpoint = function(e, t) {
            this._previousCoordinates.long = this._coordinates.long, this._previousCoordinates.lat = this._coordinates.lat, e %= 360, this._coordinates.lat = Math.max(-85, Math.min(85, e)), t = (t %= 360) >= 0 ? t : 360 + t, this._coordinates.long = t
        }, n.makeContact = function(e) {
            this.isUserInteracting = !0, this._motionTimeouts.forEach(e => clearTimeout(e)), this._movingAutomatically = !1, this._contactPoint = {
                x: e.x,
                y: e.y
            }, this._onMouseDownCoordinates.long = this._coordinates.long, this._onMouseDownCoordinates.lat = this._coordinates.lat, this._motionStart = {
                long: this._coordinates.long,
                lat: this._coordinates.lat
            }, this._options.isMobile || (this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.motionRenderSpeed)
        }, n.move = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._motionStart.lat - .2 * (this._contactPoint.y - e.y),
                n = .2 * (this._contactPoint.x - e.x) + this._motionStart.long;
            this._updateViewpoint(t, n)
        }, n.moveWheel = function(e) {
            this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._previousCoordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._previousCoordinates.long;
            const t = this._coordinates.lat - .1 * e.y,
                n = this._coordinates.long + .1 * e.x;
            this._updateViewpoint(t, n)
        }, n.moveDevice = function(e, t, n, r) {
            this._updateFromGyroscopePending = !0;
            const i = new THREE.Quaternion;
            let o = window.orientation;
            null === o && (o = this._video.clientWidth > this._video.clientHeight ? 90 : 0), e = e ? THREE.Math.degToRad(e) : 0, t = t ? THREE.Math.degToRad(t) : 0, n = n ? THREE.Math.degToRad(n) : 0;
            const s = o ? THREE.Math.degToRad(o) : 0,
                a = new THREE.Vector3(0, 0, 1),
                c = new THREE.Euler,
                u = new THREE.Quaternion,
                l = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5));
            c.set(t, e, -n, "YXZ"), i.setFromEuler(c), i.multiply(l), i.multiply(u.setFromAxisAngle(a, -s)), this._gyroVector = (new THREE.Euler).setFromQuaternion(i, "YXZ"), this._rotation = this._gyroVector.z, this.isUserInteracting || this._movingAutomatically || this._updateViewpoint(THREE.Math.radToDeg(this._gyroVector.x) - this._offset.lat, -THREE.Math.radToDeg(this._gyroVector.y) + this._offset.long), this._deviceMotionHasOccurred || (this.snapToCenter(), this._telecine.fire(bi.MOTION_START), this._deviceMotionHasOccurred = !0)
        }, n.releaseContact = function(e) {
            if (this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) - this._coordinates.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long, this.isUserInteracting = !1, this._motionStart && !e) {
                const e = Math.hypot(this._coordinates.long - this._motionStart.long, this._coordinates.lat - this._motionStart.lat);
                this._moveDueToMomentum(e)
            }
        }, n.abandonMotion = function() {
            this.isUserInteracting = !1, this._motionStart = null
        }, n.keyPress = function(e) {
            this._options.keyboardDisabled || (this._keyIsDown() || (this.isUserInteracting = !0, this._motionTimeouts && this._motionTimeouts.forEach(e => clearTimeout(e))), this._keysPressed[e] || (this._keysPressed[e] = !0))
        }, n.keyUp = function(e) {
            this._keysPressed[e] = !1, this._keyIsDown() || (this.isUserInteracting = !1, this._moveDueToMomentum(1 / 0))
        }, n._moveFromKeyPress = function() {
            Object.keys(this._keysPressed).forEach(e => {
                if (this._keysPressed[e]) switch (e) {
                    case "up":
                        this._updateViewpoint(this._coordinates.lat + 2, this._coordinates.long);
                        break;
                    case "down":
                        this._updateViewpoint(this._coordinates.lat - 2, this._coordinates.long);
                        break;
                    case "left":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long - 2);
                        break;
                    case "right":
                        this._updateViewpoint(this._coordinates.lat, this._coordinates.long + 2)
                }
            })
        }, n._keyIsDown = function() {
            return Object.keys(this._keysPressed).map(e => this._keysPressed[e]).some(e => e)
        }, n._moveDueToMomentum = function(e) {
            if (e >= 20) {
                const t = {
                    long: this._coordinates.long - this._previousCoordinates.long,
                    lat: this._coordinates.lat - this._previousCoordinates.lat
                };
                e === 1 / 0 && (t.long /= 2, t.lat /= 2);
                for (let e = 1; e < 50; e++) this._motionTimeouts.push(setTimeout(() => {
                    1 === e && (this._movingAutomatically = !0), 49 === e && (this._movingAutomatically = !1, this._maxTimeBetweenWrites = 1e3 / this._writeSpeeds.videoFps);
                    const n = 2 / Math.pow(e, 1.5);
                    this._offset.lat = THREE.Math.radToDeg(this._gyroVector.x) + this._coordinates.lat + t.lat, this._offset.long = THREE.Math.radToDeg(this._gyroVector.y) + this._coordinates.long + t.long, this._updateViewpoint(this._coordinates.lat + t.lat * n, this._coordinates.long + t.long * n)
                }, e * this._maxTimeBetweenWrites))
            }
        }, n.onseeked = function() {
            this._activated && this._update()
        }, n.onresize = function() {
            this.adjustRenderSize(), this.isUserInteracting = !1
        }, n._update = function() {
            if (!this.isVRPresenting) {
                this._phi = THREE.Math.degToRad(90 + this._coordinates.lat), this._theta = THREE.Math.degToRad(this._coordinates.long), this._camera.position.set(Math.sin(this._phi) * Math.cos(this._theta), Math.cos(this._phi), Math.sin(this._phi) * Math.sin(this._theta)), this._camera.lookAt(this._camera.target), this._camera.rotation.z += this._rotation;
                const e = this.cameraProps;
                this._telecine.fire(bi.CAMERA_UPDATE, e), this._previousCameraProps.yaw === e.yaw && this._previousCameraProps.pitch === e.pitch && this._previousCameraProps.roll === e.roll && this._previousCameraProps.fov === e.fov || (this._previousCameraProps = e, this._telecine.fire(bi.CAMERA_CHANGE, e))
            }
            this._renderer.render(this._scene, this._camera)
        }, n.adjustRenderSize = function() {
            if (this.isVRPresenting) this._camera.aspect = this._video.clientWidth / this._video.clientHeight, this._camera.updateProjectionMatrix(), this._renderer.setSize(this._video.clientWidth, this._video.clientHeight);
            else {
                this._video.clientWidth > this._video.clientHeight ? this._camera.aspect = Math.max(1, Math.min(2, this._video.clientWidth / this._video.clientHeight)) : this._camera.aspect = Math.max(1 / 3, Math.min(3, this._video.clientWidth / this._video.clientHeight)), this._camera.updateProjectionMatrix();
                const e = Di(this._video.clientWidth, this._video.clientHeight, this._camera.aspect, 1);
                this._renderer.setSize(e.width, e.height), this._output.style.paddingTop = `${e.top}px`
            }
        }, n._startRendering = function() {
            this._renderer.setAnimationLoop(() => {
                this._keyIsDown() && this._moveFromKeyPress(), this._update()
            })
        }, n._stopRendering = function() {
            this._renderer.setAnimationLoop(null)
        }, n._showOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "block"
            })
        }, n._hideOutput = function() {
            this._styleOutput({
                backgroundColor: "#000",
                display: "none"
            })
        }, n._styleOutput = function({
            backgroundColor: e,
            display: t
        } = {}) {
            this._output.style.cssText = `position:absolute;left:0;top:0;margin-left:auto;margin-right:auto;padding:0;background:${e};width:100%;height:100%;text-align:center;display:${t}`
        }, _e(t, [{
            key: "currentCoordinates",
            get: function() {
                return this._coordinates
            },
            set: function([e, t]) {
                if (e > 90 || e < -90) throw new RangeError("Latitude should be a float between -90 and 90.");
                if (t < 0 || t > 360) throw new RangeError("Longitude should be a float between 0 and 360.");
                this._updateViewpoint(e, t), this._update()
            }
        }, {
            key: "cameraProps",
            get: function() {
                return {
                    yaw: this._coordinates.long,
                    pitch: this._coordinates.lat,
                    roll: this.roll,
                    fov: this.fieldOfView
                }
            },
            set: function(e) {
                e = ve(ve({}, this.cameraProps), e), this.fieldOfView = e.fov, this.roll = e.roll, this.currentCoordinates = [e.pitch, e.yaw]
            }
        }, {
            key: "roll",
            get: function() {
                return 180 * this._rotation / Math.PI
            },
            set: function(e) {
                if (e < -180 || e > 180) throw new RangeError("Roll should be a float between -180 and 180.");
                this._rotation = THREE.Math.degToRad(e)
            }
        }, {
            key: "isVRPresenting",
            get: function() {
                return this._webvr && this._webvr.isPresenting
            }
        }, {
            key: "fieldOfView",
            get: function() {
                return this._camera ? this._camera.fov : this._options.fieldOfView
            },
            set: function(e) {
                this._camera.fov = e, this._camera.updateProjectionMatrix(), this._renderer.render(this._scene, this._camera)
            }
        }, {
            key: "hasVRHeadset",
            get: function() {
                return this._webvr && !!this._webvr.device
            }
        }]), t
    }(Zo),
    Is = function(e) {
        function t(t, n = {}) {
            var r;
            return (r = e.call(this, t, n) || this).connected = !1, r._context = null, r._source = null, r._mirror = null, r._rotator = null, r._decoder = null, r
        }
        ge(t, e), _e(t, null, [{
            key: "displayName",
            get: function() {
                return "AmbisonicEffect"
            }
        }, {
            key: "supported",
            get: function() {
                return void 0 !== window.AudioContext
            }
        }, {
            key: "supportedScanners",
            get: function() {
                return [zi, ko]
            }
        }]);
        var n = t.prototype;
        return n.activate = function() {
            return this._context = new AudioContext, new Promise((e, t) => {
                if ("undefined" != typeof ambisonics) return void e();
                const n = document.createElement("script");
                n.src = this._options.ambisonicsUrl, document.body.appendChild(n), n.onload = () => e(), n.onerror = () => t()
            }).then(() => this.toggleAmbisonics()).catch(() => {
                this._telecine._currentScanner.fire(bi.AMBISONIC_UNSUPPORTED)
            })
        }, n.deactivate = function() {
            this._disconnect(!0)
        }, n.toggleAmbisonics = function() {
            var e, t;
            (null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0) < 1 ? this._disconnect() : this._connect()
        }, n._connect = function() {
            var e, t;
            if (!this._context) return;
            const n = null !== (e = null == (t = this._telecine.getCurrentStream("audio")) ? void 0 : t.ambisonic_order) && void 0 !== e ? e : 0;
            if (this.connected || n < 1) return;
            const r = this._telecine._currentScanner._video;
            this._source = this._context.createMediaElementSource(r), this._mirror = new ambisonics.sceneMirror(this._context, n), this._rotator = new ambisonics.sceneRotator(this._context, n), this._decoder = new ambisonics.binDecoder(this._context, n), this._source.connect(this._mirror.in), this._mirror.out.connect(this._rotator.in), this._rotator.out.connect(this._decoder.in), this._decoder.out.connect(this._context.destination), this._mirror.mirror(1), this.connected = !0
        }, n._disconnect = function(e = !1) {
            this._source && this._source.disconnect(), e && this._context && (this._context.close(), this._context = null), this._source = null, this._mirror = null, this._rotator = null, this._decoder = null, this.connected = !1
        }, n.updateRotation = function(e, t, n) {
            this._rotator && (this._rotator.yaw !== e || this._rotator.pitch !== t || this._rotator.roll !== n) && (this._rotator.yaw = e, this._rotator.pitch = t, this._rotator.roll = n, this._rotator.updateRotMtx())
        }, t
    }(Zo);
const Rs = {
        h264: "video/mp4",
        hls: "application/vnd.apple.mpegurl",
        hlsLive: "application/x-mpegURL",
        dash: "application/vnd.vimeo.dash+json",
        dashMpd: "video/vnd.mpeg.dash.mpd",
        vp6: "video/x-flv",
        vp8: "video/webm",
        webm: "video/webm",
        hds: "application/f4m"
    },
    ks = {
        "application/vnd.apple.mpegurl": "hls",
        "application/vnd.vimeo.dash+json": "dash",
        "video/vnd.mpeg.dash.mpd": "dash",
        "video/mp4": "progressive",
        "video/webm": "progressive",
        "video/x-flv": "progressive",
        "application/x-mpegURL": "hlslive"
    };
var Ps = /\s/,
    Ds = /^\s+/;
var Os = /^[-+]0x[0-9a-f]+$/i,
    Cs = /^0b[01]+$/i,
    Ls = /^0o[0-7]+$/i,
    Ns = parseInt;

function Ms(e) {
    if ("number" == typeof e) return e;
    if (an(e)) return NaN;
    if (v(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = v(t) ? t + "" : t
    }
    if ("string" != typeof e) return 0 === e ? e : +e;
    e = function(e) {
        return e ? e.slice(0, function(e) {
            for (var t = e.length; t-- && Ps.test(e.charAt(t)););
            return t
        }(e) + 1).replace(Ds, "") : e
    }(e);
    var n = Cs.test(e);
    return n || Ls.test(e) ? Ns(e.slice(2), n ? 2 : 8) : Os.test(e) ? NaN : +e
}
var xs = c.isFinite,
    Us = Math.min,
    Fs = function(e) {
        var t = Math.round;
        return function(e, n) {
            if (e = Ms(e), (n = null == n ? 0 : Us(function(e) {
                    var t = function(e) {
                            return e ? (e = Ms(e)) === 1 / 0 || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
                        }(e),
                        n = t % 1;
                    return t == t ? n ? t - n : t : 0
                }(n), 292)) && xs(e)) {
                var r = (Rn(e) + "e").split("e");
                return +((r = (Rn(t(r[0] + "e" + (+r[1] + n))) + "e").split("e"))[0] + "e" + (+r[1] - n))
            }
            return t(e)
        }
    }();

function js(e) {
    return !isNaN(e)
}

function Vs(e) {
    return Fs(e, 3)
}

function Bs(e) {
    return "webkitDisplayingFullscreen" in e && e.webkitDisplayingFullscreen
}
let Hs = 0;

function Xs(e = "b") {
    return `${e}${++Hs}`
}
Xs(), Xs();
const qs = Xs(),
    Gs = Xs(),
    Ws = Xs(),
    Ks = Xs(),
    Ys = Xs(),
    $s = Xs(),
    zs = Xs(),
    Qs = Xs(),
    Js = Xs(),
    Zs = Xs(),
    ea = Xs(),
    ta = Xs(),
    na = Xs(),
    ra = Xs(),
    ia = Xs(),
    oa = Xs(),
    sa = Xs(),
    aa = Xs(),
    ca = Xs(),
    ua = Xs();
var la = Object.freeze({
        __proto__: null,
        CONFIG_CHANGED: zs,
        TELECINE_READY: Qs,
        TELECINE_VIDEO_INIT: Js,
        PLAY_INITIATED: Zs,
        QUALITY_CHANGED: ea,
        FORCED_QUALITY: ta,
        CUE_CHANGED: na,
        CAPTIONS_CHANGED: ra,
        SPATIAL_PLAYBACK_TOGGLED: ia,
        PICTURE_IN_PICTURE_AVAILABLE_SAFARI: oa,
        HLS_QUALITY_CHANGED: sa,
        REQUEST_COMPLETE_LIVE_SUBTITLES: aa,
        COMPLETE_LIVE_SUBTITLES_LOADED: ca,
        COMPLETE_LIVE_SUBTITLES_ERROR: ua
    }),
    da = Object.freeze({
        __proto__: null,
        EVENT_PENDING: "liveeventpending",
        EVENT_ACTIVE: "liveeventactive",
        EVENT_STARTING: "liveeventstarting",
        EVENT_STARTED: "liveeventstarted",
        EVENT_ENDED: "liveeventended",
        ARCHIVE_STARTED: "livearchivestarted",
        ARCHIVE_DONE: "livearchivedone",
        ARCHIVE_ERROR: "livearchiveerror",
        SETTINGS_UPDATED: "livesettingsupdated",
        LOW_LATENCY_FALLBACK: "lowlatencyfallback",
        LIVE_STATS_SUCCESS: "livestatssuccess",
        LIVE_STATS_FAILURE: "livestatsfailure"
    });
ve(ve(ve(ve(ve(ve(ve(ve({}, vi), Ti), Si), da), bi), yi), Ai), la);
const ha = ve(ve({}, Si), da);

function fa(e) {
    var t;
    return "done" === (null == e || null == (t = e.archive) ? void 0 : t.status)
}

function _a(e) {
    return "pending" === (null == e ? void 0 : e.status)
}

function pa(e) {
    return "started" === (null == e ? void 0 : e.status)
}

function ma(e) {
    return "ended" === (null == e ? void 0 : e.status)
}

function va(e) {
    return ga(e, "/playlist/refresh")
}

function ga(e, t) {
    var n;
    const r = null == (n = e.request.files.hls) ? void 0 : n.default_cdn,
        {
            signature: i,
            timestamp: o,
            expires: s
        } = e.request;
    return `${`https://${e.player_url}/live/${e.video.id}`}${t}${`?signature=${i}&time=${o}&expires=${s}&cdn=${r}`}`
}

function ya(e) {
    const t = this;
    let n = {};
    const r = {
        get attributes() {
            return Object.assign({}, t)
        },
        get previousAttributes() {
            return n
        },
        clear() {
            i();
            var e = t.attributes;
            for (var n in e) delete t[n]
        },
        set(e) {
            for (var n in i(), e = Wr(e)) t[n] = e[n]
        },
        clone: () => new ya(t.attributes),
        toJSON: () => Wr(t.attributes)
    };

    function i() {
        le(t.attributes) || (n = Wr(t.attributes))
    }
    return r.set(e), Le(t, r)
}

function Ea(e, t) {
    const n = new ya(pi(e, t));
    let r = !1;
    return Ne(n, {
        reset: function(e) {
            return n.clear(),
                function(e) {
                    r = !0, n.set(e), pi(n, t)
                }(e), n
        },
        isNewVideo: function() {
            const e = n.previousAttributes;
            return !r || e.video.id !== n.video.id || e.video.version.current !== n.video.version.current || e.video.live_event && !fa(e.video.live_event) && (!n.video.live_event || fa(n.video.live_event))
        }
    })
}

function Ta(e) {
    return e.quality || e.metadata.quality
}

function Sa(e, t) {
    e.embed.settings.audio_tracks || (t = null);
    const n = e.request.files,
        r = Ra(n),
        i = La(e),
        o = e.request.cookie.quality || i || function(e) {
            const t = Ra(e.request.files);
            let n = t.some(Oa);
            en.mobileAndroid && (n = !1);
            let r = "720p";
            if (n) {
                const e = t.map(Ta); - 1 !== e.indexOf("1080p") && -1 === e.indexOf("720p") && (r = "1080p")
            }
            return e.request.cookie.hd || e.video.default_to_hd ? r : "360p"
        }(e);
    let s = function({
        files: e = [],
        preference: t = "360p",
        priorityOffset: n = 0
    }) {
        (e = Array.from(e)).sort(Ma());
        const r = e.map(Ta);
        if (t) {
            -1 === r.indexOf(t) && (r.push(t), r.sort((e, t) => Ca(t) - Ca(e)));
            const e = r.indexOf(t),
                n = r.splice(0, e);
            n.reverse(), r.push.apply(r, Ie(n))
        }
        return e.map(e => ({
            id: e.id,
            src: e.url,
            mime: e.mime,
            priority: r.indexOf(e.quality) + 1 + n,
            metadata: {
                profile: e.profile,
                cdn: e.cdn,
                origin: e.origin,
                quality: e.quality,
                fps: e.fps
            }
        }))
    }({
        files: r,
        preference: o,
        priorityOffset: 3
    });
    return n.hls && (s = s.concat(wa(e, !1, t)), e.request.drm && en.browser.safari) || n.dash && (s = s.concat(Ia(e, !1, t))), s
}

function ba(e, t = !1, n = !1) {
    let r = e.url;
    if ("avc_url" in e && (r = e.avc_url), n) return r;
    const i = en.hevc && (!t || en.spatialHEVC),
        o = en.hdr && en.hevcMain10 && (!t || en.spatialHEVC);
    return en.dolbyVision && "hevc_dvh1_url" in e ? r = e.hevc_dvh1_url : o && "hevc_hdr_url" in e ? r = e.hevc_hdr_url : i && "hevc_sdr_url" in e ? r = e.hevc_sdr_url : en.av1 && "av1_url" in e && (r = e.av1_url), r
}

function Aa(e) {
    return e.fallback_url
}

function wa(e, t = !1, n = null) {
    var r;
    const i = e.request.files,
        o = i.hls.default_cdn,
        s = e.request.drm,
        a = i.hls.cdns[o],
        c = (null == a || null == (r = a.alternatives) ? void 0 : r[n]) || a,
        u = t ? Aa(c) : ba(c, e.video.spatial, s);
    return {
        id: `hls-${o}-${e.video.id}`,
        src: u,
        mime: Rs.hls,
        priority: 3,
        metadata: {
            cdn: o,
            origin: i.hls.cdns[o].origin,
            quality: "sd"
        }
    }
}

function Ia(e, t = !1, n = null) {
    const r = e.request.files;
    return le(r.dash) ? [] : Object.keys(r.dash.cdns).map(i => {
        var o;
        const s = r.dash.cdns[i],
            a = (null == s || null == (o = s.alternatives) ? void 0 : o[n]) || s,
            c = t ? Aa(a) : ba(a, e.video.spatial);
        return {
            id: `dash-${i}-${e.video.id}`,
            src: c,
            mime: e.request.drm ? Rs.dashMpd : Rs.dash,
            priority: i === r.dash.default_cdn ? 1 : 2,
            metadata: {
                cdn: i,
                origin: r.dash.cdns[i].origin,
                quality: "sd"
            }
        }
    })
}

function Ra(e) {
    if (le(e.progressive)) return [];
    let t = e.progressive;
    return "progressive_avc" in e && (t = e.progressive_avc), t.filter(Pa(t))
}

function ka(e) {
    if ("number" == typeof e) return e;
    const t = e.split("-");
    return 5 === t.length ? t[0] : parseInt(t[0], 10)
}

function Pa(e) {
    const t = e.filter(Da).map(Ta);
    return e => -1 === t.indexOf(Ta(e)) || Da(e)
}

function Da(e) {
    let t = e.fps;
    return "metadata" in e && (t = e.metadata.fps), t > 30
}

function Oa(e) {
    return Ca(e) >= 720
}

function Ca(e) {
    return "string" != typeof e && (e = Ta(e)), parseInt(e, 10)
}

function La(e) {
    const t = Ra(e.request.files).map(e => e.quality);
    return Na(e, e.embed.quality, t)
}

function Na(e, t, n = []) {
    return e.embed.on_site || en.android || en.iOS || en.windowsPhone || !t || n.length && -1 === n.indexOf(t) ? null : t
}

function Ma(e = "desc") {
    return (t, n) => {
        const r = Ca(t),
            i = xa(t),
            o = Ca(n),
            s = xa(n);
        return "asc" === e ? r - o || i - s : o - r || s - i
    }
}

function xa(e) {
    return "object" != typeof e ? 0 : "fps" in e ? e.fps : "metadata" in e && "fps" in e.metadata ? e.metadata.fps : 0
}

function Ua(e) {
    const t = e.video.live_event,
        n = e.request.files;
    if (!le(n.hls)) {
        const r = n.hls.default_cdn,
            i = n.hls.cdns[r].json_url || function(e) {
                var t;
                const n = e.dvr,
                    r = e.low_latency;
                var i, o;
                return n ? null == (i = e.playback_urls) ? void 0 : i["akamai-fmp4"].hls_noredirect : r ? null == (o = e.playback_urls) ? void 0 : o["akamai-low-latency"].hls_noredirect : null == (t = e.playback) ? void 0 : t.hls_noredirect
            }(t),
            o = e.request.flags.live_dash ? 2 : 1;
        return {
            id: `hls-${r}-${e.video.id}`,
            src: i,
            mime: Rs.hlsLive,
            priority: o,
            metadata: {
                cdn: r,
                origin: n.hls.cdns[r].origin,
                quality: "sd"
            }
        }
    }
    return null
}

function Fa(e, t) {
    let n = [];
    if (t.video) {
        const i = t.video.currentFile.mime;
        if (i === Rs.hlsLive) return t.manifest.video.map(e => ve(ve({}, e), {}, {
            quality: `${e.height}p`
        }));
        if ([Rs.dash, Rs.dashMpd].includes(i)) {
            var r;
            const i = !!t.video.drmHandler,
                o = i && "sd-fallback" === t.video.drmHandler.state;
            n = function(e, t = !1, n = !1) {
                if (!e) return [];
                let r = e.streams;
                "streams_avc" in e && (r = e.streams_avc);
                const i = t ? en.spatialHEVC && en.hevc : en.hevc,
                    o = t ? en.spatialHEVC && en.hdr : en.hdr;
                return en.dolbyVision && "streams_hevc_dvh1" in e ? r = e.streams_hevc_dvh1 : o && "streams_hevc_hdr" in e ? r = e.streams_hevc_hdr : i && "streams_hevc_sdr" in e ? r = e.streams_hevc_sdr : en.av1 && "streams_av1" in e && (r = e.streams_av1), n && "streams_fallback" in e && (r = e.streams_fallback), r
            }(e.request.files.dash, e.video.spatial, o), !i && (null == t || null == (r = t.currentScanner) ? void 0 : r.manifestLoaded) && (n = function(e, t) {
                const n = t.map(e => e.id);
                return e.filter(e => {
                    const t = ka(e.id);
                    return n.includes(e.id) || n.includes(t)
                })
            }(n, t.currentScanner.videoStreams))
        } else n = t.video.files.filter(e => "progressive" === ks[e.mime])
    }
    return n.filter(Pa(n)).sort(Ma())
}

function ja(e) {
    let t = Ta(e);
    const n = {
        "1440p": "2K",
        "2160p": "4K",
        "2700p": "5K",
        "3240p": "6K",
        "3780p": "7K",
        "4320p": "8K"
    };
    for (const r in n) t = t.replace(r, n[r]);
    return t
}

function Va(e) {
    return en.spatialPlayback && e.video.spatial ? 35 : 75
}

function Ba(e) {
    return e.request.text_tracks.map(e => ({
        id: e.id,
        src: e.url,
        kind: e.kind,
        label: e.label,
        language: e.lang
    }))
}
let Ha = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    Xa = Ha;
var qa = {
    set: function(e) {
        Xa = Object.assign({}, Ha, e)
    },
    captureException: function(e, t) {
        return Xa.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return Xa.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return Xa.captureBreadcrumb(e, t, n, r)
    }
};

function Ga(e, t, n) {
    const r = !0 === en.iOS,
        i = e.embed.playsinline && (en.mobileAndroid || en.iOS >= 10 || r);
    let o = !1,
        s = !1,
        a = !1,
        c = !0,
        u = "auto";

    function l(e) {
        if (!c && n.buffered && n.buffered.length > 0) {
            e = e || n.currentTime;
            const r = function(e, t) {
                    var n = e.length - 1;
                    if (e.length > 1)
                        for (var r = 0, i = e.length; r < i; r++)
                            if (e.start(r) <= t && e.end(r) >= t) {
                                n = r;
                                break
                            }
                    return n
                }(n.buffered, e),
                i = n.buffered.end(r),
                s = i / n.duration,
                c = n.duration;
            if (t.fire(vi.PROGRESS, {
                    loaded: i,
                    duration: c,
                    loadProgress: s
                }), a && o && i === n.duration) return void(o && n.paused && n.play().catch(qa.captureException))
        }
    }

    function d(t) {
        if ("auto" === t) return void(n.video.currentFile.restrictedStreamIndexes = []);
        const r = Fa(e, n).reverse().map(e => e.quality).indexOf(t); - 1 !== r && (qa.captureBreadcrumb(`Switched to ${t}`, {}, "video"), n.video.currentFile.restrictedStreamIndexes = [r])
    }

    function h(r) {
        const i = Fa(e, n).map(e => e.quality),
            o = Na(e, e.embed.quality, i);
        o && t.fire(ta, o), d(o || "auto")
    }
    return t.on(Js, (function() {
        var t;
        n.playsinline = i, n.muted = e.embed.muted, n.lowLatencyMode = null == (t = e.video.live_event) ? void 0 : t.low_latency
    })), t.on(Gs, (function() {
        c = !0, n.paused || n.pause(), s = !1, o = !1, n.currentTime = 0
    })), t.on(Ws, (function() {
        n.paused || n.pause(), n.video = null
    })), n.on(vi.PLAY, (function() {
        c = !1, t.fire(vi.PLAY, n.currentTime)
    })), n.on(vi.PAUSE, (function() {
        o = !1, t.fire(vi.PAUSE, n.currentTime, n.ended)
    })), n.on(vi.PLAYING, (function(e) {
        l()
    })), n.on(vi.TIME_UPDATE, (function() {
        if (c) return;
        const {
            currentTime: e,
            liveEdgeTime: r,
            atLiveEdge: i,
            liveTailTime: o,
            atLiveTail: s,
            duration: a,
            playbackRate: u
        } = n, l = e / a;
        t.fire(vi.TIME_UPDATE, {
            currentTime: e,
            liveEdgeTime: r,
            atLiveEdge: i,
            liveTailTime: o,
            atLiveTail: s,
            duration: a,
            playbackRate: u,
            timeProgress: l
        })
    })), n.on(vi.ENDED, (function(e) {
        n.loop ? n.play().catch(qa.captureException) : (o = !1, t.fire(vi.ENDED, e))
    })), n.on(vi.LOADED_METADATA, (function(t) {
        const r = n.duration;
        if (isFinite(r) && r > 0) {
            if (r < e.video.duration - 1 || r > e.video.duration + 1) return;
            e.video.duration = r
        }
        e.video.video_width = n.videoWidth, e.video.video_height = n.videoHeight
    })), n.on(vi.DURATION_CHANGE, (function(t) {
        const r = n.duration;
        isFinite(r) && (e.video.duration > 0 && (r < e.video.duration - 1 || r > e.video.duration + 1) || (e.video.duration = r))
    })), n.on(vi.PROGRESS, l), n.on(Ti.BUFFER_STARTED, () => {
        a = !0
    }), n.on(Ti.BUFFER_ENDED, () => {
        a = !1
    }), t.on(qs, (function(t) {
        n.isLive() && 0 === n.liveEdgeTime || (t = function(e, t, n) {
            return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = Ms(n)) == n ? n : 0), void 0 !== t && (t = (t = Ms(t)) == t ? t : 0),
                function(e, t, n) {
                    return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
                }(Ms(e), t, n)
        }(t, Vs(n.isLive() ? n.liveTailTime : 0), Vs(n.isLive() ? n.liveEdgeTime : n.duration || e.video.duration)), n.currentTime = t)
    })), n.on(vi.SEEKING, (function() {
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(vi.SEEKING, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(vi.SEEKED, (function() {
        l();
        const e = n.currentTime,
            r = n.duration,
            i = e / r;
        t.fire(vi.SEEKED, {
            currentTime: e,
            duration: r,
            timeProgress: i
        })
    })), n.on(Ti.CURRENT_FILE_CHANGE, (function(r) {
        qa.captureBreadcrumb("Current file changed", {
            id: r.id,
            mime: r.mime,
            src: r.src,
            metadata: r.metadata
        }, "video"), r.metadata.quality, [Rs.dash, Rs.dashMpd].includes(r.mime) && h(), [Rs.hlsLive].includes(r.mime) ? n.once(Ti.STREAMS_LOADED, () => {
            h()
        }) : function(n) {
            const r = La(e);
            r && t.fire(ta, r)
        }()
    })), n.on(vi.RESIZE, (function() {
        n.video.currentFile.mime === Rs.hls && n.videoHeight && t.fire(sa, {
            height: n.videoHeight
        })
    })), {
        play: function() {
            return o = !0, s || (t.fire(Zs), s = !0), n.play()
        },
        pause: function() {
            o = !1, n.pause()
        },
        get quality() {
            return u
        },
        set quality(r) {
            ! function(r) {
                const i = n.video.currentFile.mime;
                if ([Rs.dash, Rs.dashMpd, Rs.hlsLive].includes(i)) d(r);
                else {
                    const t = Fa(e, n).filter(e => e.metadata.quality === r);
                    t.length > 0 && (c = !0, n.video.currentFile = t[0])
                }
                u = r, t.fire(ea, r)
            }(r)
        }
    }
}

function Wa(e, t, n) {
    let r = null;
    en.spatialPlayback && (t.on(Js, (function() {
        r && (n.deactivateEffect(ws), r = null, t.fire(ia, r));
        const i = e.video.spatial;
        i && (e.request.drm || n.supportsEffect(ws) && (r = n.activateEffect(ws, {
            threeUrl: e.request.urls.three_js,
            fps: e.video.fps,
            fieldOfView: i.fov,
            directorTimeline: i.director_timeline,
            projection: i.projection,
            stereoMode: i.stereo_mode,
            initialView: i.initial_view,
            isMobile: en.android,
            dimensions: e.embed.on_site ? {
                width: 1080,
                height: 540
            } : {
                width: 640,
                height: 360
            },
            keyboardDisabled: !e.embed.keyboard
        }), t.fire(ia, r)))
    })), n.on(bi.SPATIAL_UNSUPPORTED, (function() {
        r && (n.deactivateEffect(ws), r = null, t.fire(ia, r))
    })))
}

function Ka(e, t, n) {
    let r = null;
    t.on(Js, (function() {
        r && (n.deactivateEffect(Es), r = null), e.video.canvas && (e.request.drm || n.supportsEffect(Es) && (r = n.activateEffect(Es)))
    }))
}
var Ya = fi((function(e, t, n) {
    di(e, t, n)
}));

function $a(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
}

function za(e, t) {
    try {
        var n = e()
    } catch (xl) {
        return t(xl)
    }
    return n && n.then ? n.then(void 0, t) : n
}
let Qa = function() {
    function e(e, t, n, r) {
        er(this), this._liveEventHasID = new Ke, this._liveEvent = Wr(e), this._sessionUrl = e.session_url || e.sessionUrl, this._subtitleUrl = e.subtitleUrl, this._sessionRefreshUrl = t, this._subtitleRefreshUrl = r, this._appPollUrl = n, this._forcedPoll = !1, this._disabled = !1, this._dvrEnabled = e.dvr, this._setupPolling()
    }
    var t = e.prototype;
    return t.requestCompleteLiveSubtitles = function() {
        try {
            const e = this;
            return za((function() {
                return $a(kt({
                    url: e._subtitleUrl,
                    retry: 3,
                    retryStatus: e => [410].includes(e) || he.retryStatus(e),
                    hooks: {
                        beforeRetry: [e._beforeSubtitleRetry.bind(e)]
                    }
                }).json(), (function(e) {
                    if (!(null == e ? void 0 : e.url)) throw new Error("No webvtt url was available to fetch");
                    return $a(kt(e.url).text(), jo)
                }))
            }), (function(e) {
                throw e
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t._beforeSubtitleRetry = function(e, t) {
        try {
            return $a(this._refreshSubtitleUrl(), (function(t) {
                e.url = t
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t._refreshSubtitleUrl = function() {
        try {
            const e = this;
            return $a(kt(e._subtitleRefreshUrl).json(), (function(t) {
                return e._subtitleUrl = t.url, t.url
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t.disable = function() {
        this._disabled = !0
    }, t.forcePolling = function() {
        this.isForcePolling || (this._forcedPoll = !0, this._setupPolling())
    }, t.unforcePolling = function() {
        this._forcedPoll = !1
    }, t._setupPolling = function() {
        !1 !== this._liveEvent.polling && (this._liveEvent.id && this._liveEventHasID.resolve(), this._shouldPollApp() ? this._pollApp() : this._shouldPoll() && this._pollLiveApi())
    }, t._shouldPoll = function() {
        var e;
        return !(ma(this._liveEvent) && "started" !== (null == (e = this._liveEvent.archive) ? void 0 : e.status) || !this.isForcePolling && pa(this._liveEvent))
    }, t._shouldPollApp = function() {
        return !this._sessionUrl || !(!_a(this._liveEvent) || null !== this._liveEvent.id)
    }, t._refreshSessionUrl = function() {
        try {
            const e = this;
            return $a(kt(e._sessionRefreshUrl).json(), (function(t) {
                return e._sessionUrl = t.url, t.url
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t._pollLiveApi = function() {
        try {
            const e = this;
            if (e._disabled) return;
            let t, n = {};
            return en.browser.ie && (n = {
                    Pragma: "no-cache",
                    "Cache-Control": "no-cache"
                }),
                function(e, t) {
                    return e && e.then ? e.then(t) : t()
                }(za((function() {
                    return $a(kt({
                        url: e._sessionUrl,
                        retry: 3,
                        retryStatus: e => [410].includes(e) || he.retryStatus(e),
                        hooks: {
                            beforeRetry: [e._beforeRetry.bind(e)]
                        },
                        headers: n
                    }).json(), (function(e) {
                        t = e
                    }))
                }), (function() {
                    throw new Error(`Hit max retries polling ${e._sessionUrl}`)
                })), (function(n) {
                    if (e._dvrEnabled && (t.dvr = e._dvrEnabled), t.status !== e._liveEvent.status) {
                        if (ma(t) && "provision_expire" === t.terminate_reason) return e._sessionUrl = null, e._liveEvent.id = null, void setTimeout(e._setupPolling.bind(e), 5e3);
                        const n = {
                            active: ha.EVENT_ACTIVE,
                            pending: ha.EVENT_PENDING,
                            started: ha.EVENT_STARTED,
                            ended: ha.EVENT_ENDED
                        }[t.status];
                        try {
                            e.fire(n, t)
                        } catch (r) {
                            throw new Error(`Error firing live event status change ${r}`)
                        }
                    }
                    if (t.archive && (!e._liveEvent.archive || t.archive.status !== e._liveEvent.archive.status)) {
                        const n = {
                            started: ha.ARCHIVE_STARTED,
                            done: ha.ARCHIVE_DONE,
                            error: ha.ARCHIVE_ERROR
                        }[t.archive.status];
                        e.fire(n, t)
                    }
                    e._liveEvent = Ya(e._liveEvent, t), e._shouldPoll() && setTimeout(e._pollLiveApi.bind(e), 5e3)
                }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t._beforeRetry = function(e, t) {
        try {
            return $a(this._refreshSessionUrl(), (function(t) {
                e.url = t
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, t._pollApp = function() {
        try {
            const e = this;
            if (e._disabled) return;
            return $a(kt(e._appPollUrl).json(), (function(t) {
                let n = !1;
                return function(r, i) {
                    var o = function() {
                        if (null !== t.ingest.session_id) return e._liveEventHasID.resolve(), e._liveEvent.id = t.ingest.session_id, $a(e._refreshSessionUrl(), (function() {
                            e._pollLiveApi(), n = !0
                        }))
                    }();
                    return o && o.then ? o.then(i) : i(o)
                }(0, (function(t) {
                    if (n) return t;
                    setTimeout(e._pollApp.bind(e), 5e3)
                }))
            }))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }, _e(e, [{
        key: "isForcePolling",
        get: function() {
            return this._forcedPoll
        }
    }, {
        key: "liveEventIDReady",
        get: function() {
            return this._liveEventHasID
        }
    }]), e
}();

function Ja() {}

function Za(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }
}

function ec(e, t, n) {
    const r = Za((function() {
        return function(e, t) {
            return e && e.then ? e.then(Ja) : Promise.resolve()
        }({
            hive: () => {},
            kollective: () => {}
        }[e.video.ecdn.ecdn_provider]())
    }));
    let i, o, s, a = !1,
        c = 0,
        u = 0;

    function l() {
        o && (o.disable(), o = null)
    }

    function d() {
        n.endLive()
    }
    return t.on(zs, (function() {
        i && !e.isNewVideo() || (i = !0, l(), e.video.live_event && !fa(e.video.live_event) && (function(n) {
            o = new Qa(n, function(e) {
                return ga(e, "/session/refresh")
            }(e), function(e) {
                return `https://${e.vimeo_url}/live_event/status?clip_id=${e.video.id}`
            }(e), function(e) {
                return ga(e, "/subtitle/refresh")
            }(e)), o.on(ha.EVENT_ENDED, d), Object.keys(ha).forEach(e => {
                const n = ha[e];
                o.on(n, e => {
                    t.fire(n, e)
                })
            }), t.on(aa, Za((function() {
                return function(e) {
                    if (e && e.then) return e.then(Ja)
                }(function(e, n) {
                    try {
                        var r = function() {
                            var e;
                            return function(e, t, n) {
                                return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
                            }(null == (e = o) ? void 0 : e.requestCompleteLiveSubtitles(), (function(e) {
                                t.fire(ca, e)
                            }))
                        }()
                    } catch (xl) {
                        return n()
                    }
                    return r && r.then ? r.then(void 0, n) : r
                }(0, (function(e) {
                    t.fire(ua)
                })))
            })))
        }(e.video.live_event), function() {
            c = 0, u = 0;
            let e = !1;
            n.once(vi.PLAYING, () => e = !0);
            let r = ze();
            clearInterval(s), s = setInterval(() => {
                n.paused || (c += Ze(r) / 1e3), e && a && (u += Ze(r) / 1e3),
                    function(e) {
                        if (n.lowLatencyMode && e > 12 && n.latency > 10 && a) {
                            const e = "Rebuffer ratio > 12% and latency > 10s, fallback to normal HLS w/ target latency of 12s.";
                            t.fire(ha.LOW_LATENCY_FALLBACK, {
                                msg: e
                            }), n.lowLatencyMode = !1, n.presentationDelay = 12, n.bufferTarget = 12
                        }
                    }(u / c * 100), r = ze()
            }, 500)
        }()), e.video.ecdn && r())
    })), t.on(Ws, (function() {
        l()
    })), n.on(ha.STREAM_ONLINE, (function() {
        o.isForcePolling && o.unforcePolling()
    })), n.on(ha.STREAM_OFFLINE, (function() {
        o.isForcePolling || o.forcePolling()
    })), n.on(Ti.BUFFER_STARTED, (function() {
        a = !0
    })), n.on(Ti.BUFFER_ENDED, (function() {
        a = !1
    })), {
        get p2pReady() {}
    }
}

function tc(e, t, n) {
    if (n) return t ? t(e()) : e();
    try {
        var r = Promise.resolve(e());
        return t ? r.then(t) : r
    } catch (xl) {
        return Promise.reject(xl)
    }
}

function nc(e, t) {
    var n = e();
    return n && n.then ? n.then(t) : t(n)
}

function rc(e, t) {
    try {
        var n = e()
    } catch (xl) {
        return t(xl)
    }
    return n && n.then ? n.then(void 0, t) : n
}

function ic(e) {
    return function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return Promise.resolve(e.apply(this, t))
        } catch (xl) {
            return Promise.reject(xl)
        }
    }
}

function oc(e, t, n) {
    var r;
    const i = ic((function() {
            return rc((function() {
                return tc(m, (function(t) {
                    return t(n, e)
                }))
            }), (function(e) {
                throw qa.captureException(e), new Error("Failed to create Hive Module", e)
            }))
        })),
        o = ic((function() {
            return rc((function() {
                return tc(p, (function(e) {
                    return e(n)
                }))
            }), (function(e) {
                return qa.captureException(e), null
            }))
        })),
        s = function() {
            return function(e, t, n) {
                return e && e.then || (e = Promise.resolve(e)), e
            }(nc((function() {
                if (!c) return tc(o, (function(e) {
                    c = e
                }))
            }), (function() {
                var t;
                return null == (t = c) ? void 0 : t.setUp(e)
            })))
        },
        a = ic((function() {
            return rc((function() {
                return nc((function() {
                    if (!u) return tc(i, (function(e) {
                        u = e
                    }))
                }), (function() {
                    var e;
                    return null == (e = u) ? void 0 : e.setUp(d)
                }))
            }), (function(e) {
                var t;
                return null == (t = u) || t.stop(), null
            }))
        }));
    let c, u, l = !1,
        d = !1,
        h = !1;
    const f = null == (r = e.video.ecdn) ? void 0 : r.ecdn_provider;
    let _;

    function p() {
        return import ("./kollective.module.js").then(({
            default: e
        }) => e)
    }

    function m() {
        return import ("./hive.module.js").then(({
            default: e
        }) => e)
    }

    function v() {
        try {
            c && (c.destroy(), c = null), u && (u.destroy(), u = null)
        } catch (e) {}
    }
    return t.on(zs, (function() {
        var t;
        e.isNewVideo() && (l = !1), !0 !== e.preload || !1 !== h || "kollective" !== f ? l || ("pending" !== (null == (t = e.video.live_event) ? void 0 : t.status) ? (l = !0, v(), f && (_ = {
            hive: a,
            kollective: s
        }[f]())) : d = !0) : h = !0
    })), t.on(Ws, v), {
        get p2pReady() {
            return _
        }
    }
}

function sc(e, t, n) {
    let r = null;

    function i() {
        n.deactivateEffect(Is), r = null
    }
    t.on(Zs, (function() {
        var t;
        r && i(), (null == (t = e.video.channel_layout) ? void 0 : t.startsWith("ambisonic")) && n.supportsEffect(Is) && (r = n.activateEffect(Is, {
            ambisonicsUrl: e.request.urls.ambisonics_js
        }))
    })), n.on(bi.CAMERA_UPDATE, (function({
        yaw: e,
        pitch: t,
        roll: n
    }) {
        r && r.updateRotation(e, t, n)
    })), n.on(bi.AMBISONIC_UNSUPPORTED, (function() {
        r && i()
    })), n.on(Ti.STREAM_CHANGE, (function() {
        r && r.toggleAmbisonics()
    }))
}

function ac(e, t = []) {
    if (!e || "null" === e || 0 === t.length) return {
        track: null
    };
    const [n, r] = e.split("."), [i] = n.split(/[-_]/), o = n !== i, s = t.filter(e => o && e.language === n || e.language === i).sort((e, t) => {
        const o = 2 * (e.language === i && e.kind === r) + 2 * (e.language === n) + 1 * (e.kind === r);
        return 2 * (t.language === i && t.kind === r) + 2 * (t.language === n) + 1 * (t.kind === r) - o
    });
    return s.length > 0 ? {
        track: s[0],
        exactMatch: s[0].language === n && s[0].kind === r
    } : {
        track: null
    }
}

function cc(e) {
    const t = e.split(/\n/g);
    let n = [],
        r = [];
    return t.forEach(e => {
        let t = e.match(/<[a-zA-Z]+ ?.*?>/g) || [],
            i = e.match(/<\/[a-zA-Z]+ ?.*?>/g) || [];
        const o = r.map(({
            startTag: e
        }) => e);
        r = [], t = o.concat(t), t.forEach(e => {
            let [t] = e.replace(/<|>/g, "").split(" ");
            const n = i.indexOf(`</${t}>`); - 1 !== n ? i.splice(n, 1) : r.push({
                startTag: e,
                closeTag: `</${t}>`
            })
        });
        const s = r.map(({
                closeTag: e
            }) => e).reverse().join(""),
            a = `${o.join("")}${e}${s}`;
        n.push(a)
    }), n.join("<br>")
}

function uc(e) {
    return e ? e.split(/\n/g).join("↵") : e
}

function lc(e, t, n, r) {
    let i;

    function o() {
        return t.pictureInPictureActive || Bs(t.videoElement) ? "showing" : "hidden"
    }

    function s() {
        if (0 !== t.video.textTracks.length) {
            if (t.video.textTracks.forEach(e => {
                    e.on("cuechange", a), e.on("modechange", c)
                }), t.video.textTracks.language) {
                const [n] = t.video.textTracks.language.split(/[-_]/), [r] = t.video.textTracks.language.split(/[-_]/);
                if (n !== r) {
                    const n = `${t.video.textTracks.language}.subtitles`,
                        {
                            track: r
                        } = ac(n, t.video.textTracks);
                    if (r) return void e.fire(Ks, n)
                }
            }
            e.fire(Ys)
        } else e.fire(Ys)
    }

    function a(t) {
        const n = t.target,
            r = n.activeCues,
            i = [];
        let o;
        for (var s = 0, a = r.length; s < a; s++) "" !== r[s].text.replace(/^\s+|\s+$/gm, "") && (o = document.createElement("span"), o.appendChild(r[s].getCueAsHTML()), i.push({
            html: cc(o.innerHTML),
            text: uc(r[s].text)
        }));
        e.fire(na, n, i)
    }

    function c(n) {
        const r = n.target;
        Bs(t.videoElement) && "showing" === r.mode && e.fire(ra, r)
    }
    e.on(Js, s), e.on(Ks, (function(n) {
        if (i && i.id === n) return;
        let r = t.video.textTracks.getTrackById(n),
            s = !0;
        r || ({
            track: r,
            exactMatch: s
        } = ac(n, t.video.textTracks)), r !== i && setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = e === r ? o() : "disabled"
            }), e.fire(ra, r, !s), i = r
        }, 0)
    })), e.on(Ys, (function() {
        setTimeout(() => {
            t.video && t.video.textTracks.forEach(e => {
                e.mode = "disabled"
            }), e.fire(na), i && (i = null, e.fire(ra, null))
        }, 0)
    })), e.on(Ti.TEXT_TRACKS_AVAILABLE, s), e.on([vi.ENTER_PICTURE_IN_PICTURE, vi.LEAVE_PICTURE_IN_PICTURE], (function() {
        ! function(e) {
            i && i.mode !== e && (i.mode = e)
        }(o())
    }))
}
const dc = ["main", "translation"];

function hc(e, t) {
    return Array.from(e).map(e => ve(ve({}, e), {}, {
        enabled: e.id === t
    }))
}

function fc(e) {
    return Array.from(e).find(e => e.enabled)
}

function _c(e, t = {}) {
    if (!(null == e ? void 0 : e.length)) return [];
    const n = t.language,
        r = t.kind;
    let i = null == t ? void 0 : t.id;
    if (i) return hc(e, i);
    if (r && n) {
        const t = e.find(e => e.language === n && e.kind === r);
        if (i = null == t ? void 0 : t.id, i) return hc(e, i)
    }
    if (n) {
        const t = e.find(e => e.language === n && dc.includes(e.kind));
        if (i = null == t ? void 0 : t.id, i) return hc(e, i)
    }
    const o = e.find(e => "main" === e.kind);
    return i = null == o ? void 0 : o.id, hc(e, i)
}

function pc(e, t, n) {
    let r, i, o, s, a, c;

    function u() {
        var t;
        const n = e.video.live_event,
            i = null == n ? void 0 : n.dvr;
        if (_a(n) || function(e) {
                return "active" === (null == e ? void 0 : e.status)
            }(n) || ma(n) && !fa(n)) return void(r.video = null);
        if (pa(n) && r.video && !e.isNewVideo()) return;
        const o = function(e) {
                return _c(e.request.audio_tracks, {
                    language: e.request.cookie.audio_language,
                    kind: e.request.cookie.audio_kind
                })
            }(e),
            s = null == (t = fc(o)) ? void 0 : t.id,
            c = pa(n) ? function(e) {
                const t = [],
                    n = Ua(e);
                n && t.push(n);
                const r = function(e) {
                    var t;
                    const n = e.video.live_event,
                        r = e.request.files;
                    if (le(r.dash)) return null;
                    const i = r.dash.default_cdn,
                        o = r.dash.cdns[i].url || (null == (t = n.playback) ? void 0 : t.dash_noredirect),
                        s = e.request.flags.live_dash ? 2 : 1;
                    return {
                        id: `dash-${i}-${e.video.id}`,
                        src: o,
                        mime: Rs.dashMpd,
                        priority: s,
                        metadata: {
                            cdn: i,
                            origin: r.dash.cdns[i].origin,
                            quality: "sd"
                        }
                    }
                }(e);
                return r && t.push(r), t
            }(e) : Sa(e, s),
            u = Ba(e);
        !r.video || e.isNewVideo() || a || i && !fa(n) ? d({
            files: c,
            textTracks: u,
            audioTracks: o,
            switchingVideo: i,
            startTime: i && r.currentTime
        }) : l(c, u)
    }

    function l(e, t) {
        e.forEach(e => {
            const t = r.video.files.getFileById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        }), t.forEach(e => {
            const t = r.video.textTracks.getTrackById(e.id);
            t && t.src !== e.src && (t.src = e.src)
        })
    }

    function d({
        files: i,
        textTracks: a,
        audioTracks: u = [],
        switchingVideo: l = !1,
        startTime: d
    }) {
        var h, f;
        const _ = e.video.live_event,
            p = n.getBoundingClientRect(),
            m = pa(_) ? Ua(e) : function(e) {
                const t = e.request.files;
                if (!le(t.hls)) {
                    const e = t.hls.default_cdn,
                        n = t.hls.cdns[e],
                        r = n.captions || n.url;
                    return r ? {
                        src: r,
                        mime: Rs.hls,
                        metadata: {
                            cdn: e,
                            origin: n.origin,
                            quality: "sd"
                        }
                    } : null
                }
                return null
            }(e);
        var v;
        c || (c = (null == (v = r.played) ? void 0 : v.length) > 0);
        const g = !r.paused || (null == (h = r._rebufferMonitor) ? void 0 : h._isBuffering);
        r._switchingVideo = l, r.video = {
            id: e.video.id,
            title: e.video.title,
            subtitle: `from ${e.video.owner.name}`,
            files: i,
            textTracks: a,
            audioTracks: u,
            chapters: On(e, "embed.chapters", []),
            duration: e.video.duration,
            externalDisplayFiles: {
                AirPlay: m
            },
            metadata: {
                playlistRefreshUrl: va(e),
                useHls: e.request.drm && en.browser.safari,
                drm: e.request.drm,
                p2pReady: e.video.ecdn && (null !== (f = o.p2pReady) && void 0 !== f ? f : s.p2pReady),
                percentShown: ws.frustumSurfaceArea(e.video.spatial.fov, p.width, p.height)
            }
        }, l ? r.checkRebuffer(c, g) : t.fire(Js), "number" == typeof d && (r.currentTime = d)
    }
    return function() {
            var t, i;
            const o = [ko, Yo, Jo, zi],
                s = e.video.ecdn && !e.request.flags.ecdn_delta_updates;
            r = new ys(n, o, {
                externalDisplays: [Ii],
                mediaSourceScanner: {
                    droppedFrameSwitchPercent: Va(e)
                },
                tests: e.request.ab_tests,
                fileCodecs: e.request.file_codecs,
                presentationDelay: e.video.presentation_delay,
                lowLatencyMode: null == (t = e.video.live_event) ? void 0 : t.low_latency,
                dvrEnabled: null == (i = e.video.live_event) ? void 0 : i.dvr,
                disableDeltaUpdates: s,
                getLiveEventStartTimeEpoch: () => function(e) {
                    var t;
                    return (null == e ? void 0 : e.started_on) ? new Date(e.started_on).getTime() / 1e3 : null == e || null == (t = e.ingest) ? void 0 : t.start_time
                }(e.video.live_event),
                sessionMetadata: {
                    clipId: e.video.id,
                    sessionId: e.request.session
                },
                enableMMS: e.request.flags.enable_mms
            })
        }(), Object.values(vi).filter(e => ![vi.TIME_UPDATE, vi.PROGRESS, vi.SUSPEND, vi.ERROR].includes(e)).forEach(e => {
            r.on(e, (t = "") => {
                qa.captureBreadcrumb(e, t, "video event")
            })
        }), r.on(Ti.STREAMS_LOADED, (function(t) {
            t.video.forEach(t => {
                const n = function(e, t) {
                    return t.find(t => ka(t.id) === String(e) || ka(t.id) === ka(e))
                }(t.id, Fa(e, r));
                n ? (t.profile = n.profile, t.quality = n.quality, t.fps = n.fps) : (t.profile = null, t.quality = `${t.height}p`, t.fps = t.framerate)
            })
        })), r.on(Ti.STREAM_CHANGE, (function({
            index: e,
            streams: n,
            metadata: r
        }) {
            const i = n[e];
            qa.captureBreadcrumb("Stream changed", i, "video"), t.fire(Ti.STREAM_CHANGE, i, e, n, r)
        })), r.on(Ti.STREAM_TARGET_CHANGE, (function({
            index: e,
            streams: n
        }) {
            const r = n[e];
            t.fire(Ti.STREAM_TARGET_CHANGE, r, e, n)
        })), r.on(Ti.DRM_KEY_SWITCH, (function() {
            if (!e.request.drm.fallback_asset) return;
            const t = Ba(e);
            l(function(e) {
                const t = e.request.files;
                let n = [];
                const r = e.request.drm && en.browser.safari;
                return (t.hls && (en.iPhone || en.iPad) || r) && (n = n.concat(wa(e, !0))), t.dash && !r && (n = n.concat(Ia(e, !0))), n
            }(e), t)
        })),
        function(e, t, n) {
            [yi.ACTIVATED, yi.AVAILABLE, yi.DEACTIVATED, yi.UNAVAILABLE, Si.STREAM_OFFLINE, Si.STREAM_ONLINE, Si.BUFFER_GAP_JUMP, Si.BUFFER_GAP_JUMP_PREVENT, Si.STALL_JUMP, Si.LATENCY_UPDATED, Ai.MEDIASESSION_PAUSE, Ai.MEDIASESSION_PLAY, Ai.MEDIASESSION_SEEK_BACKWARD, Ai.MEDIASESSION_SEEK_FORWARD, Ai.MEDIASESSION_SEEK_TO, Ti.AUDIO_TRACK_CHANGED, Ti.AV_DURATION_MISMATCH, Ti.BANDWIDTH, Ti.BUFFER_ENDED, Ti.BUFFER_OCCUPANCY, Ti.BUFFER_STARTED, Ti.CHAPTER_CUES_UPDATED, Ti.CUE_POINT, Ti.CURRENT_FILE_CHANGE, Ti.DOWNLOAD_END, Ti.DOWNLOAD_TIMEOUT, Ti.DRM_AUTH_SUCCESS, Ti.DRM_KEY_SWITCH, Ti.DROPPED_FRAMES, Ti.MANIFEST_LOADED, Ti.MANIFEST_TIMEOUT, Ti.QUOTA_EXCEEDED_ERROR, Ti.SCANNER_CHANGE, Ti.STREAM_CHANGE_START, Ti.STREAM_BUFFER_END, Ti.STREAM_BUFFER_START, Ti.AVAILABLE_STREAMS_CHANGED, Ti.MEDIA_CAPABILITY_STREAMS_UNSUPPORTED, Ti.TEXT_TRACKS_AVAILABLE, Ti.DROPPED_FRAME_PERCENT_EXCEEDED, Ti.LOAD_SEGMENT_FAILED, Ti.SEGMENT_CUES_LOADED, bi.CAMERA_UPDATE, bi.CAMERA_CHANGE, bi.MOTION_END, bi.MOTION_START, bi.SPATIAL_UNSUPPORTED, bi.WEBVR_ENTER, bi.WEBVR_EXIT, bi.WEBVR_HARDWARE_AVAILABLE, vi.DURATION_CHANGE, vi.ERROR, vi.LOAD_START, vi.LOADED_DATA, vi.LOADED_METADATA, vi.PLAYING, vi.RATE_CHANGE, vi.RESIZE, vi.STALLED, vi.VOLUME_CHANGE, vi.WAITING, vi.ENTER_PICTURE_IN_PICTURE, vi.LEAVE_PICTURE_IN_PICTURE, vi.WEBKIT_BEGIN_FULLSCREEN, vi.WEBKIT_END_FULLSCREEN].forEach(n => {
                e(n, (...e) => {
                    t.apply(void 0, [n].concat(e))
                })
            })
        }(r.on, t.fire), t.fire(Qs), new lc(t, r, n, e), new Wa(e, t, r), new Ka(e, t, r), new sc(e, t, r), o = new ec(e, t, r), i = new Ga(e, t, r), s = new oc(e, t, r), t.on(zs, u), t.on($s, (function(n) {
            var i, o;
            if (!(null == (i = e.embed) || null == (o = i.settings) ? void 0 : o.audio_tracks)) return;
            if (r.supportsVideoElementAudioTracks) return void r.enableAudioTrack(null == n ? void 0 : n.id);
            const s = _c(e.request.audio_tracks, n),
                a = fc(s);
            d({
                files: Sa(e, null == a ? void 0 : a.id),
                textTracks: r.video.textTracks,
                audioTracks: s,
                switchingVideo: !0,
                startTime: r.currentTime
            }), t.fire(Ti.AUDIO_TRACK_CHANGED)
        })), en.browser.safari && window.addEventListener("pageshow", e => {
            e.persisted && (a = !0, u())
        }), Me({
            telecine: r
        }, i)
}

function mc(e, t, n) {
    this.constructorName = "BackboneError", this.message = e, this.name = t, this.source = n
}
mc.prototype = new Error;
var vc = {
    embed: {},
    request: {
        cookie: {},
        files: {},
        flags: {},
        urls: {},
        text_tracks: [],
        file_codecs: {}
    },
    video: {
        owner: {},
        thumbs: {},
        version: {}
    },
    user: {}
};

function gc(e, t) {
    let n;
    const r = er();
    let i, o, s = null,
        a = new Ea(t, vc);

    function c(e, t) {
        return r.fire(zs, e, t), e
    }
    const u = {
        play: () => i.play(),
        pause: () => i.pause(),
        get currentTime() {
            return o.currentTime > .1 ? Vs(o.currentTime) : 0
        },
        set currentTime(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0) throw new mc("Seconds must be a positive number less than the duration of the video.", "RangeError", "setCurrentTime");
            r.fire(qs, e)
        },
        get liveEdgeTime() {
            return o.liveEdgeTime
        },
        get atLiveEdge() {
            return o.atLiveEdge
        },
        get liveTailTime() {
            return o.liveTailTime
        },
        get atLiveTail() {
            return o.atLiveTail
        },
        get duration() {
            return Vs(a.video.duration)
        },
        get enabledTextTrack() {
            return s
        },
        loadVideo(e) {
            const t = Wr(a);
            return a.reset(e), a = c(a, t), this
        },
        reactivate() {
            var e;
            return (null == (e = o) ? void 0 : e.reactivate) && o.reactivate(), this
        },
        unload() {
            return r.fire(Gs), this
        },
        destroy() {
            return r.fire(Ws), this
        },
        on(e, t) {
            return r.on(e, t), this
        },
        once(e, t) {
            return r.once(e, t), this
        },
        off(e, t) {
            return r.off(e, t), this
        },
        get events() {
            return r
        },
        hasTextTrack(e) {
            let t, n, r = this.textTracks;
            if (js(e)) n = r.getTrackById(e);
            else {
                let n = e.split(".")[0];
                t = r.some(e => e.language.toLowerCase() === n.toLowerCase())
            }
            return !(!n && !t)
        },
        enableTextTrack(e, t = null) {
            let n, i, a = this.textTracks;
            if (js(e)) s = a.getTrackById(e);
            else {
                if ([n, i = t] = e.split("."), !this.hasTextTrack(e)) throw new mc(`There are no tracks for “${n.toUpperCase()}”.`, "InvalidTrackLanguageError", "enableTextTrack");
                s = ac(i ? `${n}.${i}` : n, a).track
            }
            if (!s || i && s.kind !== i) throw new mc(`There are no ${i} tracks for “${n.toUpperCase()}”.`, "InvalidTrackError", "enableTextTrack");
            o.setCaptionsShouldDisplay(!0), r.fire(Ks, s.id)
        },
        disableTextTrack() {
            s = null, o.setCaptionsShouldDisplay(!1), r.fire(Ys)
        },
        enableAudioTrack(e) {
            r.fire($s, e)
        },
        get qualities() {
            return function(e) {
                var t;
                const n = e.representations.map(t => {
                        const n = Ta(t);
                        return {
                            id: n,
                            label: ja(t),
                            active: e.quality === n
                        }
                    }),
                    r = null == (t = e.video) ? void 0 : t.currentFile.mime;
                return [Rs.dash, Rs.dashMpd, Rs.hlsLive, Rs.hls].includes(r) && n.unshift({
                    id: "auto",
                    label: "Auto",
                    active: !e.quality || "auto" === e.quality
                }), n
            }(this)
        },
        get quality() {
            return i.quality
        },
        set quality(e) {
            i.quality = e
        },
        get playbackRate() {
            return o ? o.playbackRate : 1
        },
        set playbackRate(e) {
            o.playbackRate = e, o.defaultPlaybackRate = e
        },
        get textTracks() {
            return o.video ? o.video.textTracks : []
        },
        get representations() {
            return Fa(a, o)
        },
        get volume() {
            return o ? o.volume : Vs(a.request.cookie.volume)
        },
        set volume(e) {
            if (e = parseFloat(e), isNaN(e) || e < 0 || e > 1) throw new mc("Volume should be a number between 0 and 1.", "RangeError", "setVolume");
            o.volume = e
        },
        get videoId() {
            return a.video.id
        },
        get videoWidth() {
            return o.videoWidth || a.video.width
        },
        get videoHeight() {
            return o.videoHeight || a.video.height
        },
        get readyState() {
            return o.videoElement.readyState
        },
        get telecine() {
            return o
        },
        get audioTracks() {
            var e, t;
            return (null == (e = o) || null == (t = e.video) ? void 0 : t.audioTracks) || []
        },
        requestCompleteLiveSubtitles() {
            r.fire(aa)
        },
        get hasAudio() {
            var e, t, n, r, i;
            return !!(null == (e = o) || null == (t = e.video) || null == (n = t.audioTracks) ? void 0 : n.length) || !!(null == (r = o.manifest) || null == (i = r.audio) ? void 0 : i.length)
        }
    };
    return a = c(a), i = new pc(a, r, e), o = i.telecine, n = Object.create(o), Me(n, u)
}

function yc(e) {
    return "string" == typeof e || !Y(e) && H(e) && "[object String]" == m(e)
}

function Ec(e) {
    return Math.round(parseInt(e, 16) / 255 * 100) / 100
}

function Tc(...e) {
    if (1 === e.length && e[0] instanceof Tc) {
        var t = e[0];
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    }
    if (1 === e.length) {
        if ("string" == typeof e[0] && e[0].indexOf("rgb") >= 0) return this.rgba = function(e) {
            var t = /rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(,\s*([\d.]+))?\)/.exec(e);
            if (!t) throw new Error("Invalid rgb value");
            return {
                red: parseInt(t[1], 10),
                green: parseInt(t[2], 10),
                blue: parseInt(t[3], 10),
                alpha: parseFloat(t[5]) || 1
            }
        }(e[0]), this;
        if (! function(e) {
                return "string" == typeof(e = e.replace("#", "")) && [3, 4, 6, 8].includes(e.length) && !isNaN(parseInt(e, 16))
            }(`${e[0]}`)) throw new Error("Invalid hex value");
        const {
            hex: t,
            alpha: n
        } = function(e) {
            let t = 1;
            return 4 === (e = e.replace("#", "")).length && (t = Ec(e.slice(3) + e.slice(3)), e = e.slice(0, 3)), 8 === e.length && (t = Ec(e.slice(6, 8)), e = e.slice(0, 6)), {
                hex: e,
                alpha: t
            }
        }(`${e[0]}`);
        return this.hex = t, this.alpha = n, this
    }
    if (3 === e.length || 4 === e.length) {
        for (var n = 0; n < 3; n++)
            if (isNaN(parseInt(e[n], 10)) || parseInt(e[n], 10) < 0 || parseInt(e[n], 10) > 255) throw new Error("Invalid rgb value");
        if (e[3] && parseFloat(e[3]) < 0 || parseFloat(e[3]) > 1) throw new Error("Invalid alpha value");
        return this.rgba = {
            red: e[0],
            green: e[1],
            blue: e[2],
            alpha: parseFloat(e[3]) || 1
        }, this
    }
    throw new Error("Invalid color")
}

function Sc() {
    let e = 0,
        t = null,
        n = 0,
        r = !1;

    function i() {
        return e / 1e3
    }
    return {
        trackBufferStart: function(e, i) {
            t = ze(), n++, r = !0, e(i)
        },
        trackBufferEnd: function(n, i = {}) {
            if (!r) return;
            const o = Ze(t);
            e += o, i.buffer_duration = o / 1e3, r = !1, n(i)
        },
        trackVideoExit: function(n) {
            r && !n && (e += Ze(t))
        },
        resetLastBufferTime: function() {
            t = null
        },
        getBufferRatio: function(e) {
            const t = i() / e * 100;
            return isNaN(t) ? 0 : Math.round(100 * t) / 100
        },
        getBufferCount: function() {
            return n
        },
        getTotalBufferDuration: i,
        isVideoBuffering: function() {
            return r
        }
    }
}
Tc.prototype = {
    get complement() {
        var e = this.clone();
        return e.rgb = {
            red: 255 - this.red,
            green: 255 - this.green,
            blue: 255 - this.blue
        }, e
    },
    get hex() {
        return Tc.rgbToHex(this.red, this.green, this.blue)
    },
    get hexWithAlpha() {
        const e = ("0" + Math.round(255 * this.alpha).toString(16)).slice(-2);
        return Tc.rgbToHex(this.red, this.green, this.blue) + e
    },
    set hex(e) {
        return this.rgba = Tc.hexToRgb(e), this
    },
    get hsl() {
        return "hsl(" + this.hue + "," + this.saturation + "%," + Math.round(this.lightness) + "%)"
    },
    set hsl(e) {
        this.hue = e.hue, this.saturation = e.saturation, this.lightness = e.lightness;
        var t = Tc.hslToRgb(e.hue, e.saturation, e.lightness);
        return this.red = t.red, this.green = t.green, this.blue = t.blue, this.alpha = t.alpha, this
    },
    get luminance() {
        function e(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        return .2126 * e(this.red / 255) + .7152 * e(this.green / 255) + .0722 * e(this.blue / 255)
    },
    get rgb() {
        return "rgb(" + this.red + "," + this.green + "," + this.blue + ")"
    },
    set rgb(e) {
        return this.rgba = e, this
    },
    get rgba() {
        return "rgba(" + this.red + "," + this.green + "," + this.blue + "," + this.alpha + ")"
    },
    set rgba(e) {
        this.red = e.red, this.green = e.green, this.blue = e.blue, this.alpha = e.alpha || 1;
        var t = Tc.rgbToHsl(e.red, e.green, e.blue);
        return this.hue = t.hue, this.saturation = t.saturation, this.lightness = t.lightness, this
    },
    get yiq() {
        return (299 * this.red + 587 * this.green + 114 * this.blue) / 1e3
    },
    clone: function() {
        return new Tc(this)
    },
    lighten: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness + e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.lighten(5), r = n.contrast(this).ratio, !(this.lightness >= 100)););
        return this
    },
    darken: function(e, t, n) {
        if (this.hsl = {
                hue: this.hue,
                saturation: this.saturation,
                lightness: this.lightness - e
            }, t && n)
            for (var r = n.contrast(this).ratio; r < t && (this.darken(5), r = n.contrast(this).ratio, !(this.lightness <= 0)););
        return this
    },
    overlayOn: function(e) {
        if (this.alpha >= 1) return this;
        var t = this.clone();
        return t.rgba = {
            red: t.red * this.alpha + e.red * e.alpha * (1 - this.alpha),
            green: t.green * this.alpha + e.green * e.alpha * (1 - this.alpha),
            blue: t.blue * this.alpha + e.blue * e.alpha * (1 - this.alpha),
            alpha: t.alpha + e.alpha * (1 - this.alpha)
        }, t
    },
    contrast: function(e) {
        var t = this.alpha;
        if (t >= 1) {
            e.alpha < 1 && (e = e.overlayOn(this));
            var n = this.luminance + .05,
                r = e.luminance + .05,
                i = n / r;
            return r > n && (i = 1 / i), {
                ratio: i = Math.round(10 * i) / 10,
                error: 0,
                min: i,
                max: i
            }
        }
        var o = this.overlayOn(Tc.white).contrast(e).ratio,
            s = this.overlayOn(Tc.black).contrast(e).ratio,
            a = Math.max(o, s),
            c = {
                red: Math.min(Math.max(0, (e.red - this.red * t) / (1 - t)), 255),
                green: Math.min(Math.max(0, (e.green - this.green * t) / (1 - t)), 255),
                blue: Math.min(Math.max(0, (e.blue - this.blue * t) / (1 - t)), 255)
            },
            u = this.clone();
        u.rgb = c;
        var l = this.overlayOn(u).contrast(e).ratio;
        return {
            ratio: Math.round((l + a) / 2 * 10) / 10,
            error: Math.round((a - l) / 2 * 10) / 10,
            min: l,
            max: a,
            closest: u,
            farthest: s === a ? Tc.white : Tc.black
        }
    },
    wcagAACompliant: function(e) {
        return this.contrast(e).ratio >= 4.5
    },
    wcagAAACompliant: function(e) {
        return this.contrast(e).ratio >= 7
    },
    yiqContrastColor: function() {
        return this.yiq >= 120 ? new Tc(0, 0, 0) : new Tc(255, 255, 255)
    }
}, Tc.hexToRgb = function(e) {
    var t;
    return 3 === (e = String(e)).length || 4 === e.length ? (t = /^#?([A-Fa-f0-9])([A-Fa-f0-9])([A-Fa-f0-9])$/i.exec(e)) && (t[1] += t[1], t[2] += t[2], t[3] += t[3]) : t = /^#?([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})$/i.exec(e), t ? {
        red: parseInt(t[1], 16),
        green: parseInt(t[2], 16),
        blue: parseInt(t[3], 16),
        alpha: 1
    } : null
}, Tc.rgbToHex = function(e, t, n) {
    return "#" + ((1 << 24) + (Math.round(e) << 16) + (Math.round(t) << 8) + Math.round(n)).toString(16).slice(1)
}, Tc.rgbToHsl = function(e, t, n) {
    e /= 255, t /= 255, n /= 255;
    var r, i = Math.max(e, t, n),
        o = Math.min(e, t, n),
        s = (i + o) / 2,
        a = s;
    if (i === o) return {
        hue: 0,
        saturation: 0,
        lightness: 100 * a
    };
    var c = i - o;
    return r = a > .5 ? c / (2 - i - o) : c / (i + o), i === e ? s = (t - n) / c + (t < n ? 6 : 0) : i === t ? s = (n - e) / c + 2 : i === n && (s = (e - t) / c + 4), s /= 6, {
        hue: Math.round(360 * s),
        saturation: Math.round(100 * r),
        lightness: Math.round(100 * a)
    }
}, Tc.hslToRgb = function(e, t, n) {
    function r(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), 6 * n < 1 ? e + 6 * (t - e) * n : 2 * n < 1 ? t : 3 * n < 2 ? e + 6 * (2 / 3 - n) * (t - e) : e
    }
    if (e /= 360, n /= 100, 0 == (t /= 100)) return {
        red: Math.floor(255 * n),
        green: Math.floor(255 * n),
        blue: Math.floor(255 * n)
    };
    var i = n < .5 ? n * (1 + t) : n + t - t * n,
        o = 2 * n - i;
    return {
        red: Math.floor(255 * r(o, i, e + 1 / 3)),
        green: Math.floor(255 * r(o, i, e)),
        blue: Math.floor(255 * r(o, i, e - 1 / 3))
    }
}, Tc.hslToHex = function(e, t, n) {
    var r = Tc.hslToRgb(e, t, n);
    return Tc.rgbToHex(r.red, r.green, r.blue)
}, Tc.white = new Tc("fff"), Tc.black = new Tc("000");
const bc = {
    VIDEO_BUFFER_END: "video-buffer-end",
    VIDEO_BUFFER_START: "video-buffer-start",
    VIDEO_ENDED: "video-ended",
    VIDEO_EXIT: "video-exit",
    VIDEO_LOAD_FAILURE: "video-load-failure",
    VIDEO_MINUTE_WATCHED: "video-minute-watched",
    VIDEO_PAUSED: "video-paused",
    VIDEO_PLAYED: "video-played",
    VIDEO_PLAYBACK_ERROR: "video-playback-error",
    VIDEO_READY: "video-ready",
    VIDEO_START_ATTEMPT: "video-start-attempt",
    VIDEO_START_FAILURE: "video-start-failure",
    VIDEO_START_TIME: "video-start-time",
    VIDEO_SEEK: "video-seek",
    VIDEO_SEEKED: "video-seeked",
    CHUNK_DOWNLOADED: "chunk_downloaded"
};

function Ac(e) {
    function t(e, t, n = !0, r = "POST") {
        return new Promise((i, o) => {
            "POST" === r && navigator.sendBeacon ? i({
                status: navigator.sendBeacon(e, t)
            }) : kt({
                url: e,
                body: t,
                method: r,
                async: n,
                headers: {
                    "Content-Type": "text/plain; charset=UTF-8"
                }
            }).then(e => {
                i({
                    response: e,
                    status: e.status
                })
            }).catch(o)
        })
    }
    return {
        log: function(n, r = !0, i = !0) {
            i && (n.event_time = n.event_time || ze());
            const o = [n];
            return t(e, JSON.stringify(o), r)
        },
        logRequestPromiseWithUrl: t
    }
}

function wc(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        o = !1,
        s = -1,
        a = null,
        c = null,
        u = null,
        l = {
            satisfied: 0,
            tolerable: 0,
            frustrated: 0
        },
        d = null;

    function h() {
        const t = e.getBoundingClientRect(),
            n = e.videoWidth,
            r = e.videoHeight;
        if (0 === n && 0 === r) return;
        let i = "satisfied";
        if (t.width > n && t.height > r && (n / t.width < .4 ? i = "satisfied" : n / t.width < 1 ? i = "tolerable" : n / t.width > 1 && (i = "frustrated")), c) {
            const e = Ze(c);
            l[u] += e
        }
        u = i, c = ze()
    }

    function f() {
        return o ? 0 : 1
    }

    function _() {
        return -1 === s ? null : s > 8e3 || -1 === s ? 0 : s > 2e3 ? .5 : 1
    }

    function p() {
        return d ? (i = r / Ze(d), t >= 4 || i >= .12 ? 0 : t < 4 && 0 !== t ? i < .12 ? .5 : 0 : 1) : null
    }

    function m() {
        if (-1 === s) return null;
        switch (h(), Object.keys(l).reduce((e, t) => l[e] > l[t] ? e : t)) {
            case "satisfied":
                return 1;
            case "tolerable":
                return .5;
            case "frustrated":
                return 0
        }
        return null
    }
    return e.addEventListener("playing", () => {
        -1 === s && (a = ze())
    }), e.addEventListener("progress", () => {
        -1 === s && (d = ze(), s = Ze(a)), h()
    }), {
        startupTimeScore: _,
        rebufferScore: p,
        failureScore: f,
        videoQualityScore: m,
        overallScore: function() {
            return Math.min(f(), _(), p(), m())
        },
        trackBufferStart: function() {
            -1 !== s && (t++, n = ze())
        },
        trackBufferEnd: function() {
            -1 !== s && (r += Ze(n))
        },
        onError: function(e) {
            e.final && (o = !0)
        }
    }
}

function Ic(e, t = 3) {
    if (e = parseFloat(e), isNaN(e)) return 0;
    var n = Math.pow(10, t);
    return Math.round(e * n) / n
}

function Rc(e, t) {
    let n, r, i, o, s, a, c, u, l, d, h, f, _, p, m = 0;

    function v() {
        n = 0, r = 0, i = 0, o = 0, s = 0, a = null, c = 0, u = !1, l = !1, d = null, h = !1, f = new wc(e), _ = new Sc, p = {
            bufferTracker: _,
            videoBufferCheck: () => {
                setInterval(() => {
                    let t = e.currentTime;
                    l && !h && !e.paused && !p.bufferTracker.isVideoBuffering() && t < s + .125 && p.bufferTracker.trackBufferStart(y), l && !e.paused && p.bufferTracker.isVideoBuffering() && t > s + .125 && (p.bufferTracker.trackBufferEnd(E), p.bufferTracker.resetLastBufferTime()), s = t
                }, 250)
            },
            addEventData: e => null,
            playbackSessionTimer: () => {
                let t = ze();
                setInterval(() => {
                    (!e.paused && u || h || p.bufferTracker.isVideoBuffering()) && (c += Ze(t) / 1e3), t = ze()
                }, 500)
            },
            customMinuteTracker: {
                shouldCount: () => !1,
                onCount: () => {}
            }
        }
    }

    function g(e, n = {}) {
        0 === m && (n = Object.assign(n, p.addEventData(e)), t(e, n))
    }

    function y(e = {}) {
        f.trackBufferStart(), g(bc.VIDEO_BUFFER_START, e)
    }

    function E(e = {}) {
        f.trackBufferEnd(), g(bc.VIDEO_BUFFER_END, e)
    }
    return v(), g(bc.VIDEO_READY),
        function() {
            let t = Math.ceil(59 * Math.random());
            setInterval(() => {
                var s, a, c;

                function l(e, n) {
                    return 0 === e ? n === t : n >= 60
                }!e.paused && u && (n++, (null == (s = p.customMinuteTracker) || null == s.shouldCount ? void 0 : s.shouldCount()) && r++, l(i, n) && (n = 0, i++, g(bc.VIDEO_MINUTE_WATCHED)), l(o, r) && (null == (a = p.customMinuteTracker) || null == a.shouldCount ? void 0 : a.shouldCount()) && (r = 0, o++, null == (c = p.customMinuteTracker) || null == c.onCount || c.onCount(o)))
            }, 1e3)
        }(), window.addEventListener("pagehide", t => {
            p.bufferTracker.trackVideoExit(e.paused);
            const n = {
                startup: f.startupTimeScore(),
                rebuffer: f.rebufferScore(),
                failure: f.failureScore(),
                quality: f.videoQualityScore(),
                overall: f.overallScore()
            };
            d && g(bc.VIDEO_EXIT, {
                vxs: n
            })
        }, !1), e.addEventListener("playing", () => {
            u = !0, h || l && g(bc.VIDEO_PLAYED)
        }), e.addEventListener("timeupdate", () => {
            if (l) return;
            let e = {
                startup_duration: d ? Ic(Ze(d) / 1e3, 2) : null
            };
            g(bc.VIDEO_START_TIME, e), l = !0
        }), e.addEventListener("pause", () => {
            u = !1, g(bc.VIDEO_PAUSED)
        }), e.addEventListener("seeking", () => {
            h || (a = ze(), h = !0, u = !1, g(bc.VIDEO_SEEK))
        }), e.addEventListener("seeked", () => {
            h = !1, e.paused || (u = !0), g(bc.VIDEO_SEEKED, {
                seek_duration: Ze(a) / 1e3
            }), a = null
        }), e.addEventListener("ended", () => {
            g(bc.VIDEO_ENDED)
        }), e.addEventListener("waiting", () => {
            u = !1
        }), e.addEventListener("canplay", () => {
            h || p.bufferTracker.isVideoBuffering() && !u && (p.bufferTracker.trackBufferEnd(E), p.bufferTracker.resetLastBufferTime())
        }), {
            globalProperties: function() {
                return {
                    autoplay: e.autoplay,
                    buffer_count: p.bufferTracker.getBufferCount(),
                    total_buffer_duration: p.bufferTracker.getTotalBufferDuration(),
                    buffer_ratio: p.bufferTracker.getBufferRatio(c),
                    client_time: ze(),
                    is_buffering: p.bufferTracker.isVideoBuffering(),
                    looping: e.loop,
                    minutes_watched: i,
                    network_state: e.networkState,
                    playback_rate: e.playbackRate,
                    player_width: e.getBoundingClientRect().width,
                    player_height: e.getBoundingClientRect().height,
                    session_playback_duration: Ic(c, 2),
                    video_time: e.currentTime,
                    video_height: e.videoHeight,
                    video_width: e.videoWidth,
                    volume: Ic(e.volume, 2)
                }
            },
            logStartRequest: function() {
                d = ze(), g(bc.VIDEO_START_ATTEMPT)
            },
            customizeHooks: function(e) {
                p = Object.assign(p, e)
            },
            initHooks: function() {
                p.videoBufferCheck(), p.playbackSessionTimer()
            },
            logBufferStart: y,
            logBufferEnd: E,
            setDisplayContext: function(e) {
                m = e
            },
            handleExternalError: function(e, t) {
                u = !1, f.onError(t), g(l ? bc.VIDEO_PLAYBACK_ERROR : l ? bc.VIDEO_START_FAILURE : bc.VIDEO_LOAD_FAILURE, e)
            },
            reset: v
        }
}
var kc = function() {
        return c.Date.now()
    },
    Pc = Math.max,
    Dc = Math.min;

function Oc(e, t, n) {
    var r, i, o, s, a, c, u = 0,
        l = !1,
        d = !1,
        h = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");

    function f(t) {
        var n = r,
            o = i;
        return r = i = void 0, u = t, s = e.apply(o, n)
    }

    function _(e) {
        return u = e, a = setTimeout(m, t), l ? f(e) : s
    }

    function p(e) {
        var n = e - c;
        return void 0 === c || n >= t || n < 0 || d && e - u >= o
    }

    function m() {
        var e = kc();
        if (p(e)) return g(e);
        a = setTimeout(m, function(e) {
            var n = t - (e - c);
            return d ? Dc(n, o - (e - u)) : n
        }(e))
    }

    function g(e) {
        return a = void 0, h && r ? f(e) : (r = i = void 0, s)
    }

    function y() {
        var e = kc(),
            n = p(e);
        if (r = arguments, i = this, c = e, n) {
            if (void 0 === a) return _(c);
            if (d) return clearTimeout(a), a = setTimeout(m, t), f(c)
        }
        return void 0 === a && (a = setTimeout(m, t)), s
    }
    return t = Ms(t) || 0, v(n) && (l = !!n.leading, o = (d = "maxWait" in n) ? Pc(Ms(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h), y.cancel = function() {
        void 0 !== a && clearTimeout(a), u = 0, r = c = i = a = void 0
    }, y.flush = function() {
        return void 0 === a ? s : g(kc())
    }, y
}

function Cc(e, t, n) {
    var r = !0,
        i = !0;
    if ("function" != typeof e) throw new TypeError("Expected a function");
    return v(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Oc(e, t, {
        leading: r,
        maxWait: t,
        trailing: i
    })
}
var Lc = Zn((function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Tracker = void 0;
    var n = function() {
        function e() {}
        return e.getAttributeTypeMap = function() {
            return e.attributeTypeMap
        }, e.attributeTypeMap = [{
            name: "name",
            baseName: "name",
            type: "string"
        }, {
            name: "version",
            baseName: "version",
            type: "string"
        }], e
    }();
    t.Tracker = n
}));
let Nc;
const Mc = new Uint8Array(16);

function xc() {
    if (!Nc && (Nc = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Nc)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    return Nc(Mc)
}
var Uc = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function Fc(e) {
    return "string" == typeof e && Uc.test(e)
}
const jc = [];
for (let Gf = 0; Gf < 256; ++Gf) jc.push((Gf + 256).toString(16).slice(1));

function Vc(e, t = 0) {
    return jc[e[t + 0]] + jc[e[t + 1]] + jc[e[t + 2]] + jc[e[t + 3]] + "-" + jc[e[t + 4]] + jc[e[t + 5]] + "-" + jc[e[t + 6]] + jc[e[t + 7]] + "-" + jc[e[t + 8]] + jc[e[t + 9]] + "-" + jc[e[t + 10]] + jc[e[t + 11]] + jc[e[t + 12]] + jc[e[t + 13]] + jc[e[t + 14]] + jc[e[t + 15]]
}
let Bc, Hc, Xc = 0,
    qc = 0;

function Gc(e) {
    if (!Fc(e)) throw TypeError("Invalid UUID");
    let t;
    const n = new Uint8Array(16);
    return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
}

function Wc(e, t, n) {
    function r(e, r, i, o) {
        var s;
        if ("string" == typeof e && (e = function(e) {
                e = unescape(encodeURIComponent(e));
                const t = [];
                for (let n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                return t
            }(e)), "string" == typeof r && (r = Gc(r)), 16 !== (null === (s = r) || void 0 === s ? void 0 : s.length)) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        let a = new Uint8Array(16 + e.length);
        if (a.set(r), a.set(e, r.length), a = n(a), a[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, i) {
            o = o || 0;
            for (let e = 0; e < 16; ++e) i[o + e] = a[e];
            return i
        }
        return Vc(a)
    }
    try {
        r.name = e
    } catch (i) {}
    return r.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r
}

function Kc(e) {
    return 14 + (e + 64 >>> 9 << 4) + 1
}

function Yc(e, t) {
    const n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}

function $c(e, t, n, r, i, o) {
    return Yc(function(e, t) {
        return e << t | e >>> 32 - t
    }(Yc(Yc(t, e), Yc(r, o)), i), n)
}

function zc(e, t, n, r, i, o, s) {
    return $c(t & n | ~t & r, e, t, i, o, s)
}

function Qc(e, t, n, r, i, o, s) {
    return $c(t & r | n & ~r, e, t, i, o, s)
}

function Jc(e, t, n, r, i, o, s) {
    return $c(t ^ n ^ r, e, t, i, o, s)
}

function Zc(e, t, n, r, i, o, s) {
    return $c(n ^ (t | ~r), e, t, i, o, s)
}
const eu = Wc("v3", 48, (function(e) {
    if ("string" == typeof e) {
        const t = unescape(encodeURIComponent(e));
        e = new Uint8Array(t.length);
        for (let n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
    }
    return function(e) {
        const t = [],
            n = 32 * e.length;
        for (let r = 0; r < n; r += 8) {
            const n = e[r >> 5] >>> r % 32 & 255,
                i = parseInt("0123456789abcdef".charAt(n >>> 4 & 15) + "0123456789abcdef".charAt(15 & n), 16);
            t.push(i)
        }
        return t
    }(function(e, t) {
        e[t >> 5] |= 128 << t % 32, e[Kc(t) - 1] = t;
        let n = 1732584193,
            r = -271733879,
            i = -1732584194,
            o = 271733878;
        for (let s = 0; s < e.length; s += 16) {
            const t = n,
                a = r,
                c = i,
                u = o;
            n = zc(n, r, i, o, e[s], 7, -680876936), o = zc(o, n, r, i, e[s + 1], 12, -389564586), i = zc(i, o, n, r, e[s + 2], 17, 606105819), r = zc(r, i, o, n, e[s + 3], 22, -1044525330), n = zc(n, r, i, o, e[s + 4], 7, -176418897), o = zc(o, n, r, i, e[s + 5], 12, 1200080426), i = zc(i, o, n, r, e[s + 6], 17, -1473231341), r = zc(r, i, o, n, e[s + 7], 22, -45705983), n = zc(n, r, i, o, e[s + 8], 7, 1770035416), o = zc(o, n, r, i, e[s + 9], 12, -1958414417), i = zc(i, o, n, r, e[s + 10], 17, -42063), r = zc(r, i, o, n, e[s + 11], 22, -1990404162), n = zc(n, r, i, o, e[s + 12], 7, 1804603682), o = zc(o, n, r, i, e[s + 13], 12, -40341101), i = zc(i, o, n, r, e[s + 14], 17, -1502002290), r = zc(r, i, o, n, e[s + 15], 22, 1236535329), n = Qc(n, r, i, o, e[s + 1], 5, -165796510), o = Qc(o, n, r, i, e[s + 6], 9, -1069501632), i = Qc(i, o, n, r, e[s + 11], 14, 643717713), r = Qc(r, i, o, n, e[s], 20, -373897302), n = Qc(n, r, i, o, e[s + 5], 5, -701558691), o = Qc(o, n, r, i, e[s + 10], 9, 38016083), i = Qc(i, o, n, r, e[s + 15], 14, -660478335), r = Qc(r, i, o, n, e[s + 4], 20, -405537848), n = Qc(n, r, i, o, e[s + 9], 5, 568446438), o = Qc(o, n, r, i, e[s + 14], 9, -1019803690), i = Qc(i, o, n, r, e[s + 3], 14, -187363961), r = Qc(r, i, o, n, e[s + 8], 20, 1163531501), n = Qc(n, r, i, o, e[s + 13], 5, -1444681467), o = Qc(o, n, r, i, e[s + 2], 9, -51403784), i = Qc(i, o, n, r, e[s + 7], 14, 1735328473), r = Qc(r, i, o, n, e[s + 12], 20, -1926607734), n = Jc(n, r, i, o, e[s + 5], 4, -378558), o = Jc(o, n, r, i, e[s + 8], 11, -2022574463), i = Jc(i, o, n, r, e[s + 11], 16, 1839030562), r = Jc(r, i, o, n, e[s + 14], 23, -35309556), n = Jc(n, r, i, o, e[s + 1], 4, -1530992060), o = Jc(o, n, r, i, e[s + 4], 11, 1272893353), i = Jc(i, o, n, r, e[s + 7], 16, -155497632), r = Jc(r, i, o, n, e[s + 10], 23, -1094730640), n = Jc(n, r, i, o, e[s + 13], 4, 681279174), o = Jc(o, n, r, i, e[s], 11, -358537222), i = Jc(i, o, n, r, e[s + 3], 16, -722521979), r = Jc(r, i, o, n, e[s + 6], 23, 76029189), n = Jc(n, r, i, o, e[s + 9], 4, -640364487), o = Jc(o, n, r, i, e[s + 12], 11, -421815835), i = Jc(i, o, n, r, e[s + 15], 16, 530742520), r = Jc(r, i, o, n, e[s + 2], 23, -995338651), n = Zc(n, r, i, o, e[s], 6, -198630844), o = Zc(o, n, r, i, e[s + 7], 10, 1126891415), i = Zc(i, o, n, r, e[s + 14], 15, -1416354905), r = Zc(r, i, o, n, e[s + 5], 21, -57434055), n = Zc(n, r, i, o, e[s + 12], 6, 1700485571), o = Zc(o, n, r, i, e[s + 3], 10, -1894986606), i = Zc(i, o, n, r, e[s + 10], 15, -1051523), r = Zc(r, i, o, n, e[s + 1], 21, -2054922799), n = Zc(n, r, i, o, e[s + 8], 6, 1873313359), o = Zc(o, n, r, i, e[s + 15], 10, -30611744), i = Zc(i, o, n, r, e[s + 6], 15, -1560198380), r = Zc(r, i, o, n, e[s + 13], 21, 1309151649), n = Zc(n, r, i, o, e[s + 4], 6, -145523070), o = Zc(o, n, r, i, e[s + 11], 10, -1120210379), i = Zc(i, o, n, r, e[s + 2], 15, 718787259), r = Zc(r, i, o, n, e[s + 9], 21, -343485551), n = Yc(n, t), r = Yc(r, a), i = Yc(i, c), o = Yc(o, u)
        }
        return [n, r, i, o]
    }(function(e) {
        if (0 === e.length) return [];
        const t = 8 * e.length,
            n = new Uint32Array(Kc(t));
        for (let r = 0; r < t; r += 8) n[r >> 5] |= (255 & e[r / 8]) << r % 32;
        return n
    }(e), 8 * e.length))
}));
var tu = {
    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
};

function nu(e, t, n, r) {
    switch (e) {
        case 0:
            return t & n ^ ~t & r;
        case 1:
            return t ^ n ^ r;
        case 2:
            return t & n ^ t & r ^ n & r;
        case 3:
            return t ^ n ^ r
    }
}

function ru(e, t) {
    return e << t | e >>> 32 - t
}
const iu = Wc("v5", 80, (function(e) {
    const t = [1518500249, 1859775393, 2400959708, 3395469782],
        n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
    if ("string" == typeof e) {
        const t = unescape(encodeURIComponent(e));
        e = [];
        for (let n = 0; n < t.length; ++n) e.push(t.charCodeAt(n))
    } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
    e.push(128);
    const r = e.length / 4 + 2,
        i = Math.ceil(r / 16),
        o = new Array(i);
    for (let s = 0; s < i; ++s) {
        const t = new Uint32Array(16);
        for (let n = 0; n < 16; ++n) t[n] = e[64 * s + 4 * n] << 24 | e[64 * s + 4 * n + 1] << 16 | e[64 * s + 4 * n + 2] << 8 | e[64 * s + 4 * n + 3];
        o[s] = t
    }
    o[i - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), o[i - 1][14] = Math.floor(o[i - 1][14]), o[i - 1][15] = 8 * (e.length - 1) & 4294967295;
    for (let s = 0; s < i; ++s) {
        const e = new Uint32Array(80);
        for (let t = 0; t < 16; ++t) e[t] = o[s][t];
        for (let t = 16; t < 80; ++t) e[t] = ru(e[t - 3] ^ e[t - 8] ^ e[t - 14] ^ e[t - 16], 1);
        let r = n[0],
            i = n[1],
            a = n[2],
            c = n[3],
            u = n[4];
        for (let n = 0; n < 80; ++n) {
            const o = Math.floor(n / 20),
                s = ru(r, 5) + nu(o, i, a, c) + u + t[o] + e[n] >>> 0;
            u = c, c = a, a = ru(i, 30) >>> 0, i = r, r = s
        }
        n[0] = n[0] + r >>> 0, n[1] = n[1] + i >>> 0, n[2] = n[2] + a >>> 0, n[3] = n[3] + c >>> 0, n[4] = n[4] + u >>> 0
    }
    return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
}));
var ou = function(e) {
        return e && e.default || e
    }(Object.freeze({
        __proto__: null,
        v1: function(e, t, n) {
            let r = t && n || 0;
            const i = t || new Array(16);
            let o = (e = e || {}).node || Bc,
                s = void 0 !== e.clockseq ? e.clockseq : Hc;
            if (null == o || null == s) {
                const t = e.random || (e.rng || xc)();
                null == o && (o = Bc = [1 | t[0], t[1], t[2], t[3], t[4], t[5]]), null == s && (s = Hc = 16383 & (t[6] << 8 | t[7]))
            }
            let a = void 0 !== e.msecs ? e.msecs : Date.now(),
                c = void 0 !== e.nsecs ? e.nsecs : qc + 1;
            const u = a - Xc + (c - qc) / 1e4;
            if (u < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (u < 0 || a > Xc) && void 0 === e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            Xc = a, qc = c, Hc = s, a += 122192928e5;
            const l = (1e4 * (268435455 & a) + c) % 4294967296;
            i[r++] = l >>> 24 & 255, i[r++] = l >>> 16 & 255, i[r++] = l >>> 8 & 255, i[r++] = 255 & l;
            const d = a / 4294967296 * 1e4 & 268435455;
            i[r++] = d >>> 8 & 255, i[r++] = 255 & d, i[r++] = d >>> 24 & 15 | 16, i[r++] = d >>> 16 & 255, i[r++] = s >>> 8 | 128, i[r++] = 255 & s;
            for (let h = 0; h < 6; ++h) i[r + h] = o[h];
            return t || Vc(i)
        },
        v3: eu,
        v4: function(e, t, n) {
            if (tu.randomUUID && !t && !e) return tu.randomUUID();
            const r = (e = e || {}).random || (e.rng || xc)();
            if (r[6] = 15 & r[6] | 64, r[8] = 63 & r[8] | 128, t) {
                n = n || 0;
                for (let e = 0; e < 16; ++e) t[n + e] = r[e];
                return t
            }
            return Vc(r)
        },
        v5: iu,
        NIL: "00000000-0000-0000-0000-000000000000",
        version: function(e) {
            if (!Fc(e)) throw TypeError("Invalid UUID");
            return parseInt(e.slice(14, 15), 16)
        },
        validate: Fc,
        stringify: function(e, t = 0) {
            const n = Vc(e, t);
            if (!Fc(n)) throw TypeError("Stringified UUID is invalid");
            return n
        },
        parse: Gc
    })),
    su = Zn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Envelope = void 0;
        var n = function() {
            function e(e, t) {
                this.event = e, this.eid = (0, ou.v4)(), this.ts_ms = Date.now(), this.created_at = Date.now(), this._tracker = new Lc.Tracker, this._globalBPO = t
            }
            return Object.defineProperty(e.prototype, "tracker", {
                get: function() {
                    return this._tracker
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(e.prototype, "global", {
                get: function() {
                    return this._globalBPO
                },
                enumerable: !1,
                configurable: !0
            }), e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "eid",
                baseName: "eid",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "created_at",
                baseName: "created_at",
                type: "number"
            }, {
                name: "event",
                baseName: "event",
                type: "Event"
            }, {
                name: "global",
                baseName: "global",
                type: "Event"
            }, {
                name: "tracker",
                baseName: "tracker",
                type: "Tracker"
            }], e
        }();
        t.Envelope = n
    })),
    au = Zn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Event = void 0;
        var n = function() {
            function e(e, t, n) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }], e
        }();
        t.Event = n
    })),
    cu = Zn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.EventContext = void 0;
        var n = function() {
            function e(e, t, n) {
                this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
            }
            return e.getAttributeTypeMap = function() {
                return e.attributeTypeMap
            }, e.attributeTypeMap = [{
                name: "name",
                baseName: "name",
                type: "string"
            }, {
                name: "ts_ms",
                baseName: "ts_ms",
                type: "number"
            }, {
                name: "version",
                baseName: "version",
                type: "number"
            }, {
                name: "fields",
                baseName: "fields",
                type: "object"
            }], e
        }();
        t.EventContext = n
    })),
    uu = Zn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GlobalContext = void 0;
        t.GlobalContext = function(e, t, n) {
            this.name = e, this.ts_ms = Date.now(), this.version = t, this.fields = n
        }
    })),
    lu = Zn((function(e, t) {
        var n = Jn && Jn.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                i && ("get" in i ? t.__esModule : !i.writable && !i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = Jn && Jn.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ObjectSerializer = void 0, r(su, t), r(au, t), r(cu, t), r(Lc, t), r(uu, t);
        var i = au,
            o = cu,
            s = Lc,
            a = ["string", "boolean", "double", "integer", "long", "float", "number", "any"],
            c = {},
            u = {
                Envelope: su.Envelope,
                Event: i.Event,
                Tracker: s.Tracker,
                EventContext: o.EventContext
            },
            l = function() {
                function e() {}
                return e.findCorrectType = function(e, t) {
                    if (null == e) return t;
                    if (-1 !== a.indexOf(t.toLowerCase())) return t;
                    if ("Date" === t) return t;
                    if (c[t]) return t;
                    if (!u[t]) return t;
                    var n = u[t].discriminator;
                    if (null == n) return t;
                    if (e[n]) {
                        var r = e[n];
                        return u[r] ? r : t
                    }
                    return t
                }, e.serialize = function(t, n) {
                    if (null == t) return t;
                    if (-1 !== a.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var s = t[o];
                            i.push(e.serialize(s, r))
                        }
                        return i
                    }
                    if ("Date" === n) return t.toISOString();
                    if (c[n]) return t;
                    if (!u[n]) return t;
                    n = this.findCorrectType(t, n);
                    var l = u[n].getAttributeTypeMap(),
                        d = {};
                    for (var o in l) {
                        var h = l[o];
                        d[h.baseName] = e.serialize(t[h.name], h.type)
                    }
                    return d
                }, e.deserialize = function(t, n) {
                    if (n = e.findCorrectType(t, n), null == t) return t;
                    if (-1 !== a.indexOf(n.toLowerCase())) return t;
                    if (0 === n.lastIndexOf("Array<", 0)) {
                        var r = n.replace("Array<", "");
                        r = r.substring(0, r.length - 1);
                        var i = [];
                        for (var o in t) {
                            var s = t[o];
                            i.push(e.deserialize(s, r))
                        }
                        return i
                    }
                    if ("Date" === n) return new Date(t);
                    if (c[n]) return t;
                    if (!u[n]) return t;
                    var l = new u[n],
                        d = u[n].getAttributeTypeMap();
                    for (var o in d) {
                        var h = d[o];
                        l[h.name] = e.deserialize(t[h.baseName], h.type)
                    }
                    return l
                }, e
            }();
        t.ObjectSerializer = l
    })),
    du = Zn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatRequestEvent = t.parseJwt = t.getCookie = void 0, t.getCookie = function(e) {
            if ("undefined" == typeof document) return null;
            var t = document.cookie.match(new RegExp("(;\\s)?".concat(e, "=")));
            if (!t || 0 == t.length || void 0 === t.index) return null;
            var n = document.cookie.indexOf(";", t.index + 1),
                r = t.index + t[0].length,
                i = -1 === n ? document.cookie.substr(r) : document.cookie.substring(r, n);
            return decodeURIComponent(i)
        }, t.parseJwt = function(e) {
            var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                n = decodeURIComponent(atob(t).split("").map((function(e) {
                    return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                })).join(""));
            return JSON.parse(n)
        }, t.formatRequestEvent = function(e) {
            var t = e.split(".");
            if (t.length <= 2) return e;
            var n = t.pop();
            return "".concat(t.join("_"), ".").concat(n)
        }
    })),
    hu = Zn((function(e, t) {
        var n, r = Jn && Jn.__awaiter || function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (xl) {
                            o(xl)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (xl) {
                            o(xl)
                        }
                    }

                    function c(e) {
                        e.done ? i(e.value) : function(e) {
                            return e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))
                        }(e.value).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            i = Jn && Jn.__generator || function(e, t) {
                var n, r, i, o, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function a(a) {
                    return function(c) {
                        return function(a) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; o && (o = 0, a[0] && (s = 0)), s;) try {
                                if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, a[1])).done) return i;
                                switch (r = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                                    case 0:
                                    case 1:
                                        i = a;
                                        break;
                                    case 4:
                                        return s.label++, {
                                            value: a[1],
                                            done: !1
                                        };
                                    case 5:
                                        s.label++, r = a[1], a = [0];
                                        continue;
                                    case 7:
                                        a = s.ops.pop(), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                            s = 0;
                                            continue
                                        }
                                        if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                            s.label = a[1];
                                            break
                                        }
                                        if (6 === a[0] && s.label < i[1]) {
                                            s.label = i[1], i = a;
                                            break
                                        }
                                        if (i && s.label < i[2]) {
                                            s.label = i[2], s.ops.push(a);
                                            break
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue
                                }
                                a = t.call(e, s)
                            } catch (xl) {
                                a = [6, xl], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & a[0]) throw a[1];
                            return {
                                value: a[0] ? a[1] : void 0,
                                done: !0
                            }
                        }([a, c])
                    }
                }
            },
            o = Jn && Jn.__values || function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            },
            s = Jn && Jn.__read || function(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (a) {
                    i = {
                        error: a
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            };
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BigPictureClient = t.Configuration = t.Service = void 0,
            function(e) {
                e.FRESNEL_PROD = "https://fresnel-events.vimeocdn.com", e.FRESNEL_PROD_CN = "https://fresnel-events.videoji.cn", e.FRESNEL_DEV = "https://fresnel-event-staging.vimeows.com"
            }(n = t.Service || (t.Service = {}));
        var a = function(e, t, n) {
            void 0 === t && (t = null), void 0 === n && (n = null), this.service = e, this.globalBPO = t, this.contexts = n
        };
        t.Configuration = a;
        var c = function() {
            function e() {}
            return Object.defineProperty(e, "isInitalized", {
                get: function() {
                    return Boolean(e.conf.globalBPO)
                },
                enumerable: !1,
                configurable: !0
            }), e.configure = function(t) {
                e.conf = t, e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE.map((function(t) {
                    return e.sendEvent(t)
                })), e.WAIT_QUEUE = [])
            }, e.updateObject = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, a, c, u, l, d, h;
                    return i(this, (function(i) {
                        try {
                            for (r = o(Object.entries(t)), a = r.next(); !a.done; a = r.next())
                                if (c = s(a.value, 2), u = c[0], l = c[1], u in n) {
                                    if (l instanceof Object) return n[u] instanceof Object ? (e.updateObject(l, n[u]), [2]) : (n[u] = l, [2]);
                                    n[u] = l
                                }
                        } catch (f) {
                            d = {
                                error: f
                            }
                        } finally {
                            try {
                                a && !a.done && (h = r.return) && h.call(r)
                            } finally {
                                if (d) throw d.error
                            }
                        }
                        return [2]
                    }))
                }))
            }, e.updateContext = function(t) {
                return r(this, void 0, void 0, (function() {
                    return i(this, (function(n) {
                        return "global" == t.context && e.conf.globalBPO && e.updateObject(t.fields, e.conf.globalBPO.fields), [2]
                    }))
                }))
            }, e.sendEvent = function(t, n) {
                return r(this, void 0, void 0, (function() {
                    var r, o, s, a, c;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                return e.isInitalized ? (r = JSON.stringify(lu.ObjectSerializer.serialize([new su.Envelope(t, this.conf.globalBPO)], "Array<Envelope>")), o = (0, du.formatRequestEvent)(t.name), s = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(o)), navigator.sendBeacon && !n ? [3, 2] : (a = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: r
                                }, n && (a.headers.Authorization = n), [4, fetch(s, a)])) : (e.WAIT_QUEUE.push(t), e.waitAndFlushQueue(), [2]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                c = new Blob([r]), navigator.sendBeacon(s, c), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.sendEventWithContexts = function(t, n, a) {
                return r(this, void 0, void 0, (function() {
                    var r, c, u, l, d, h, f, _, p, m, v, g, y, E, T;
                    return i(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                if (null == t) throw new Error("Required parameter event was null or undefined when calling sendEvent.");
                                if (!e.isInitalized) return e.WAIT_QUEUE.push(t), e.waitAndFlushQueue(), [2];
                                r = new su.Envelope(t, this.conf.globalBPO), (c = lu.ObjectSerializer.serialize([r], "Array<Envelope>"))[0].contexts = {};
                                try {
                                    for (u = o(Object.entries(n)), l = u.next(); !l.done; l = u.next()) d = s(l.value, 2), h = d[0], f = d[1], _ = lu.ObjectSerializer.serialize(f, "EventContext"), c[0].contexts[h] = _
                                } catch (S) {
                                    E = {
                                        error: S
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (T = u.return) && T.call(u)
                                    } finally {
                                        if (E) throw E.error
                                    }
                                }
                                return p = JSON.stringify(c), m = (0, du.formatRequestEvent)(t.name), v = "".concat(this.conf.service, "/add/").concat(encodeURIComponent(m)), navigator.sendBeacon && !a ? [3, 2] : (g = {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json",
                                        "User-Agent": navigator.userAgent,
                                        Origin: location.origin,
                                        Referer: document.referrer
                                    },
                                    body: p
                                }, a && (g.headers.Authorization = a), [4, fetch(v, g)]);
                            case 1:
                                return i.sent(), [3, 3];
                            case 2:
                                y = new Blob([p]), navigator.sendBeacon(v, y), i.label = 3;
                            case 3:
                                return [2]
                        }
                    }))
                }))
            }, e.waitAndFlushQueue = function() {
                e.flushQueueTimeoutHandler || (e.flushQueueTimeoutHandler = setTimeout((function() {
                    e.WAIT_QUEUE.length > 0 && (e.WAIT_QUEUE = [])
                }), e.FLUSH_QUEUE_TIMEOUT))
            }, e.FLUSH_QUEUE_TIMEOUT = 1e4, e.conf = new a(n.FRESNEL_PROD), e.WAIT_QUEUE = [], e
        }();
        t.BigPictureClient = c
    })),
    fu = Zn((function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    })),
    _u = Zn((function(e, t) {
        var n = Jn && Jn.__createBinding || (Object.create ? function(e, t, n, r) {
                void 0 === r && (r = n);
                var i = Object.getOwnPropertyDescriptor(t, n);
                i && ("get" in i ? t.__esModule : !i.writable && !i.configurable) || (i = {
                    enumerable: !0,
                    get: function() {
                        return t[n]
                    }
                }), Object.defineProperty(e, r, i)
            } : function(e, t, n, r) {
                void 0 === r && (r = n), e[r] = t[n]
            }),
            r = Jn && Jn.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(hu, t), r(lu, t), r(fu, t)
    }));
const pu = {
    SETUP_DONE: "SETUP_DONE",
    NOT_SETUP: "NOT_SETUP"
};
let mu = function() {
    function e() {
        this.version = "1.2.36", this.remotePlayer = null, this.remotePlayerController = null, this.CastContextEventType = null, this.RemotePlayerEventType = null, this.CastState = pu, this.SessionState = null, this.PlayerState = null, this.currentLoadRequestId = null, this.currentLoadRequestPromise = null
    }
    var t = e.prototype;
    return t.init = function({
        receiverApplicationId: e = "",
        resumeSavedSession: t = !0,
        language: n = null,
        autoJoinPolicy: r = "TAB_AND_ORIGIN_SCOPED"
    } = {}) {
        if (!this.isGCastApiAvailable) throw new Error("CAF is not available. Call setup() first.");
        if ("string" != typeof e || "" === e.trim()) throw new Error("Parameter 'receiverApplicationId' must be valid.");
        switch (r) {
            case chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED:
            case chrome.cast.AutoJoinPolicy.PAGE_SCOPED:
                break;
            default:
                r = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
        }
        return this.CastContextEventType = cast.framework.CastContextEventType, this.RemotePlayerEventType = cast.framework.RemotePlayerEventType, this.CastState = Object.assign(this.CastState, cast.framework.CastState), this.SessionState = cast.framework.SessionState, this.PlayerState = chrome.cast.media.PlayerState, cast.framework.CastContext.getInstance().setOptions({
            receiverApplicationId: e.trim(),
            resumeSavedSession: t,
            language: n,
            autoJoinPolicy: r
        }), this.isInitialized ? this.remotePlayerController : this.initRemotePlayer()
    }, t.initRemotePlayer = function() {
        if (!this.isGCastApiAvailable) throw new ReferenceError("CAF is not available. Call setup() first.");
        return this.remotePlayer = new cast.framework.RemotePlayer, this.remotePlayerController = new cast.framework.RemotePlayerController(this.remotePlayer), this.remotePlayerController
    }, t.setup = function({
        loadLibrary: e = !0
    } = {}) {
        return new Promise((t, n) => {
            if (this.isGCastApiAvailable) return this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, void t(!0);
            window.__onGCastApiAvailable = (e, r) => {
                if (r) {
                    const e = new Error(r);
                    n(e)
                } else if (chrome.cast) this.AutoJoinPolicy = chrome.cast.AutoJoinPolicy, t(e);
                else {
                    const e = new ReferenceError("Cast is not available on this browser.");
                    n(e)
                }
            };
            try {
                if (!1 === e) throw new ReferenceError("Cast is not available. Make sure the library has been loaded.");
                this.loadLibrary() || t(!1)
            } catch (r) {
                const e = new Error(r);
                n(e)
            }
        })
    }, t.loadLibrary = function() {
        if (this.isGCastApiAvailable) return !0;
        if (null !== window.chrome && void 0 !== window.chrome && "Google Inc." === window.navigator.vendor) {
            let e = "//www.gstatic.com/cv/js/sender/v1/cast_sender.js";
            if (!(document.querySelectorAll('script[src^="' + e + '"]').length > 0)) {
                e += "?loadCastFramework=1";
                const t = document.createElement("script");
                return t.src = e, t.async = !0, t.defer = !0, document.head.appendChild(t), !0
            }
        }
        return !1
    }, t.loadMedia = function({
        contentId: e,
        contentType: t,
        currentTime: n = 0,
        duration: r = 0,
        requestCustomData: i = null,
        mediaCustomData: o = null,
        autoRequest: s = !1,
        tracks: a = [],
        ottCastOptions: c
    }) {
        return e ? this.isSessionEstablished ? this.loadMediaOnSession(this.currentSession, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: c
        }) : !0 !== s ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(s => this.loadMediaOnSession(s, {
            contentId: e,
            contentType: t,
            currentTime: n,
            duration: r,
            requestCustomData: i,
            mediaCustomData: o,
            tracks: a,
            ottCastOptions: c
        })) : Promise.reject(new TypeError("Option 'contentId' must be valid."))
    }, t.loadMediaOnSession = function(e, {
        contentId: t,
        contentType: n,
        currentTime: r = 0,
        duration: i,
        requestCustomData: o = null,
        mediaCustomData: s = null,
        tracks: a = [],
        ottCastOptions: c
    }) {
        if (e && e instanceof cast.framework.CastSession) {
            const u = e.getSessionState();
            if (u !== this.SessionState.SESSION_STARTING && u !== this.SessionState.SESSION_STARTED && u !== this.SessionState.SESSION_RESUMED) return Promise.reject(new ReferenceError("Session must be established."));
            const l = this.createLoadRequest(t, n, r, i, o, s, a, c);
            return null !== this.currentLoadRequestId && this.currentLoadRequestId === l.requestId || (this.currentLoadRequestId = l.requestId, this.currentLoadingMediaPromise = e.loadMedia(l).finally(() => {
                this.currentLoadRequestId = null, this.currentLoadingMediaPromise = null
            })), this.currentLoadingMediaPromise
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.requestSession = function() {
        return this.isSessionEstablished ? Promise.resolve(this.currentSession) : this.castContext ? this.castContext.requestSession().then(() => this.currentSession) : Promise.reject(new Error("CastContext is not available. Call setup() first."))
    }, t.sendMessage = function({
        namespace: e,
        data: t = {},
        autoRequest: n = !1
    }) {
        return this.isSessionEstablished ? this.sendMessageOnSession(this.currentSession, {
            namespace: e,
            data: t
        }) : !0 !== n ? Promise.reject(new TypeError("Option 'autoRequest' must be true when session is not connected.")) : this.requestSession().then(n => this.sendMessageOnSession(n, {
            namespace: e,
            data: t
        }))
    }, t.sendMessageOnSession = function(e, {
        namespace: t,
        data: n = {}
    }) {
        if (e || !(e instanceof cast.framework.CastSession)) {
            const r = e.getSessionState();
            return r !== this.SessionState.SESSION_STARTING && r !== this.SessionState.SESSION_STARTED && r !== this.SessionState.SESSION_RESUMED ? Promise.reject(new ReferenceError("Session must be established.")) : e.sendMessage(t, n)
        }
        return Promise.reject(new ReferenceError("Session must be cast.framework.CastSession."))
    }, t.createCastButton = function(e) {
        const t = document.createElement("button", "google-cast-button");
        return e && e.style && (null === e.style["--disconnected-color"] && (e.style["--disconnected-color"] = "#00ADEF"), null === e.style["--connected-color"] && (e.style["--connected-color"] = "#E5E500")), e && Object.keys(e).forEach(n => {
            if ("string" == typeof e[n]) t.setAttribute(n, e[n]);
            else if ("style" === n && "object" == typeof e[n]) {
                let r = "";
                Object.keys(e[n]).forEach(t => {
                    r += t + ":" + e[n][t] + ";"
                }), t.setAttribute(n, r)
            }
        }), t
    }, t.createLoadRequest = function(e, t, n, r, i, o, s, a) {
        const c = a ? new chrome.cast.media.MediaInfo(a.contentId) : new chrome.cast.media.MediaInfo(e.toString(), t);
        c.customData = o, c.duration = r;
        const u = {
            subtitles: chrome.cast.media.TextTrackType.SUBTITLES,
            captions: chrome.cast.media.TextTrackType.CAPTIONS
        };
        c.tracks = s.map(e => {
            const t = new chrome.cast.media.Track(e.id, chrome.cast.media.TrackType.TEXT);
            return t.trackContentId = e.url, t.trackContentType = "text/vtt", t.subtype = u[e.kind], t.name = e.label, t.language = e.lang, t
        });
        const l = new chrome.cast.media.LoadRequest(c);
        return l.customData = a ? a.customData : i, l.currentTime = n || 0, a && (l.credentials = a.credentials, l.credentialsType = a.credentialsType), l
    }, _e(e, [{
        key: "isGCastApiAvailable",
        get: function() {
            return !!("undefined" != typeof cast && cast && cast.framework && cast.framework.VERSION)
        }
    }, {
        key: "castState",
        get: function() {
            return this.castContext ? this.castContext.getCastState() : this.isGCastApiAvailable ? this.CastState.SETUP_DONE : this.CastState.NOT_SETUP
        }
    }, {
        key: "versionGCastApi",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.VERSION : null
        }
    }, {
        key: "castContext",
        get: function() {
            return this.isGCastApiAvailable ? cast.framework.CastContext.getInstance() : null
        }
    }, {
        key: "currentSession",
        get: function() {
            return this.castContext ? this.castContext.getCurrentSession() : null
        }
    }, {
        key: "currentSessionObj",
        get: function() {
            const e = this.currentSession;
            return e ? e.getSessionObj() : null
        }
    }, {
        key: "isInitialized",
        get: function() {
            return !(!this.isGCastApiAvailable || !this.remotePlayerController)
        }
    }, {
        key: "isSessionEstablished",
        get: function() {
            const e = this.currentSessionObj;
            return !!e && e.status === chrome.cast.SessionStatus.CONNECTED
        }
    }, {
        key: "isCastConnected",
        get: function() {
            return this.castState === this.CastState.CONNECTED
        }
    }]), e
}();
var vu, gu = 0,
    yu = 0,
    Eu = {},
    Tu = {};

function Su(e, t, n) {
    return "_root" == t ? n : e !== n ? function(e) {
        return vu || (vu = e.matches ? e.matches : e.webkitMatchesSelector ? e.webkitMatchesSelector : e.mozMatchesSelector ? e.mozMatchesSelector : e.msMatchesSelector ? e.msMatchesSelector : e.oMatchesSelector ? e.oMatchesSelector : Iu.matchesSelector)
    }(e).call(e, t) ? e : e.parentNode ? (gu++, Su(e.parentNode, t, n)) : void 0 : void 0
}

function bu(e, t, n, r) {
    Eu[e.id] || (Eu[e.id] = {}), Eu[e.id][t] || (Eu[e.id][t] = {}), Eu[e.id][t][n] || (Eu[e.id][t][n] = []), Eu[e.id][t][n].push(r)
}

function Au(e, t, n, r) {
    if (Eu[e.id])
        if (t)
            if (r || n)
                if (r) {
                    if (Eu[e.id][t][n])
                        for (var i = 0; i < Eu[e.id][t][n].length; i++)
                            if (Eu[e.id][t][n][i] === r) {
                                Eu[e.id][t][n].splice(i, 1);
                                break
                            }
                } else delete Eu[e.id][t][n];
    else Eu[e.id][t] = {};
    else
        for (var o in Eu[e.id]) Eu[e.id].hasOwnProperty(o) && (Eu[e.id][o] = {})
}

function wu(e, t, n, r) {
    if (this.element) {
        e instanceof Array || (e = [e]), n || "function" != typeof t || (n = t, t = "_root");
        var i, o = this.id;
        for (i = 0; i < e.length; i++) r ? Au(this, e[i], t, n) : (Eu[o] && Eu[o][e[i]] || Iu.addEvent(this, e[i], s(e[i])), bu(this, e[i], t, n));
        return this
    }

    function s(e) {
        return function(t) {
            ! function(e, t, n) {
                if (Eu[e][n]) {
                    var r, i, o = t.target || t.srcElement,
                        s = {},
                        a = 0,
                        c = 0;
                    for (r in gu = 0, Eu[e][n]) Eu[e][n].hasOwnProperty(r) && (i = Su(o, r, Tu[e].element)) && Iu.matchesEvent(n, Tu[e].element, i, "_root" == r, t) && (gu++, Eu[e][n][r].match = i, s[gu] = Eu[e][n][r]);
                    for (t.stopPropagation = function() {
                            t.cancelBubble = !0
                        }, a = 0; a <= gu; a++)
                        if (s[a])
                            for (c = 0; c < s[a].length; c++) {
                                if (!1 === s[a][c].call(s[a].match, t)) return void Iu.cancel(t);
                                if (t.cancelBubble) return
                            }
                }
            }(o, t, e)
        }
    }
}

function Iu(e, t) {
    if (!(this instanceof Iu)) {
        for (var n in Tu)
            if (Tu[n].element === e) return Tu[n];
        return yu++, Tu[yu] = new Iu(e, yu), Tu[yu]
    }
    this.element = e, this.id = t
}
Iu.prototype.on = function(e, t, n) {
    return wu.call(this, e, t, n)
}, Iu.prototype.off = function(e, t, n) {
    return wu.call(this, e, t, n, !0)
}, Iu.matchesSelector = function() {}, Iu.cancel = function(e) {
    e.preventDefault(), e.stopPropagation()
}, Iu.addEvent = function(e, t, n) {
    var r = "blur" == t || "focus" == t,
        i = en.passiveEvents ? {
            capture: r,
            passive: !1
        } : r;
    e.element.addEventListener(t, n, i)
}, Iu.matchesEvent = function() {
    return !0
};
const Ru = Iu.addEvent,
    ku = void 0 === window.PointerEvent && void 0 !== window.MSPointerEvent,
    Pu = {
        pointerdown: "MSPointerDown",
        pointerup: "MSPointerUp",
        pointercancel: "MSPointerCancel",
        pointermove: "MSPointerMove",
        pointerenter: "MSPointerEnter",
        pointerleave: "MSPointerLeave",
        pointerover: "MSPointerOver",
        pointerout: "MSPointerOut"
    },
    Du = "onmspointerenter" in document,
    Ou = "onmspointerleave" in document;

function Cu(e, t) {
    return null == e || e != e ? t : e
}
Iu.addEvent = function(e, t, n) {
    ku && Pu[t] && (t = Pu[t]), "transitionend" === t && (Ru(e, "webkitTransitionEnd", n), Ru(e, "otransitionend", n)), "mouseenter" === t && (t = "mouseover"), "mouseleave" === t && (t = "mouseout"), "MSPointerEnter" !== t || Du || (t = "MSPointerOver"), "MSPointerLeave" !== t || Ou || (t = "MSPointerOut"), Ru(e, t, n)
}, Iu.matchesEvent = function(e, t, n, r, i) {
    return !("mouseenter" === e || "mouseleave" === e || !Du && "MSPointerEnter" === e || !Ou && "MSPointerLeave" === e) || function(e, t, n, r) {
        return !r.relatedTarget || (!n || e === t) && t !== r.relatedTarget && !t.contains(r.relatedTarget)
    }(t, n, r, i)
};
var Lu = function() {
        if ("undefined" != typeof Map) return Map;

        function e(e, t) {
            var n = -1;
            return e.some((function(e, r) {
                return e[0] === t && (n = r, !0)
            })), n
        }
        return (function() {
            function t() {
                this.__entries__ = []
            }
            return Object.defineProperty(t.prototype, "size", {
                get: function() {
                    return this.__entries__.length
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.get = function(t) {
                var n = e(this.__entries__, t),
                    r = this.__entries__[n];
                return r && r[1]
            }, t.prototype.set = function(t, n) {
                var r = e(this.__entries__, t);
                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
            }, t.prototype.delete = function(t) {
                var n = this.__entries__,
                    r = e(n, t);
                ~r && n.splice(r, 1)
            }, t.prototype.has = function(t) {
                return !!~e(this.__entries__, t)
            }, t.prototype.clear = function() {
                this.__entries__.splice(0)
            }, t.prototype.forEach = function(e, t) {
                void 0 === t && (t = null);
                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                    var i = r[n];
                    e.call(t, i[1], i[0])
                }
            }, t
        }())
    }(),
    Nu = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
    Mu = "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
    xu = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(Mu) : function(e) {
        return setTimeout((function() {
            return e(Date.now())
        }), 1e3 / 60)
    },
    Uu = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
    Fu = "undefined" != typeof MutationObserver,
    ju = function() {
        function e() {
            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                var n = !1,
                    r = !1,
                    i = 0;

                function o() {
                    n && (n = !1, e()), r && a()
                }

                function s() {
                    xu(o)
                }

                function a() {
                    var e = Date.now();
                    if (n) {
                        if (e - i < 2) return;
                        r = !0
                    } else n = !0, r = !1, setTimeout(s, 20);
                    i = e
                }
                return a
            }(this.refresh.bind(this))
        }
        return e.prototype.addObserver = function(e) {
            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
        }, e.prototype.removeObserver = function(e) {
            var t = this.observers_,
                n = t.indexOf(e);
            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
        }, e.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, e.prototype.updateObservers_ = function() {
            var e = this.observers_.filter((function(e) {
                return e.gatherActive(), e.hasActive()
            }));
            return e.forEach((function(e) {
                return e.broadcastActive()
            })), e.length > 0
        }, e.prototype.connect_ = function() {
            Nu && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Fu ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, e.prototype.disconnect_ = function() {
            Nu && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, e.prototype.onTransitionEnd_ = function(e) {
            var t = e.propertyName,
                n = void 0 === t ? "" : t;
            Uu.some((function(e) {
                return !!~n.indexOf(e)
            })) && this.refresh()
        }, e.getInstance = function() {
            return this.instance_ || (this.instance_ = new e), this.instance_
        }, e.instance_ = null, e
    }(),
    Vu = function(e, t) {
        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
            var i = r[n];
            Object.defineProperty(e, i, {
                value: t[i],
                enumerable: !1,
                writable: !1,
                configurable: !0
            })
        }
        return e
    },
    Bu = function(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView || Mu
    },
    Hu = Ku(0, 0, 0, 0);

function Xu(e) {
    return parseFloat(e) || 0
}

function qu(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return t.reduce((function(t, n) {
        return t + Xu(e["border-" + n + "-width"])
    }), 0)
}
var Gu = "undefined" != typeof SVGGraphicsElement ? function(e) {
    return e instanceof Bu(e).SVGGraphicsElement
} : function(e) {
    return e instanceof Bu(e).SVGElement && "function" == typeof e.getBBox
};

function Wu(e) {
    return Nu ? Gu(e) ? function(e) {
        var t = e.getBBox();
        return Ku(0, 0, t.width, t.height)
    }(e) : function(e) {
        var t = e.clientWidth,
            n = e.clientHeight;
        if (!t && !n) return Hu;
        var r = Bu(e).getComputedStyle(e),
            i = function(e) {
                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                    var i = r[n],
                        o = e["padding-" + i];
                    t[i] = Xu(o)
                }
                return t
            }(r),
            o = i.left + i.right,
            s = i.top + i.bottom,
            a = Xu(r.width),
            c = Xu(r.height);
        if ("border-box" === r.boxSizing && (Math.round(a + o) !== t && (a -= qu(r, "left", "right") + o), Math.round(c + s) !== n && (c -= qu(r, "top", "bottom") + s)), ! function(e) {
                return e === Bu(e).document.documentElement
            }(e)) {
            var u = Math.round(a + o) - t,
                l = Math.round(c + s) - n;
            1 !== Math.abs(u) && (a -= u), 1 !== Math.abs(l) && (c -= l)
        }
        return Ku(i.left, i.top, a, c)
    }(e) : Hu
}

function Ku(e, t, n, r) {
    return {
        x: e,
        y: t,
        width: n,
        height: r
    }
}
var Yu = function() {
        function e(e) {
            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ku(0, 0, 0, 0), this.target = e
        }
        return e.prototype.isActive = function() {
            var e = Wu(this.target);
            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
        }, e.prototype.broadcastRect = function() {
            var e = this.contentRect_;
            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
        }, e
    }(),
    $u = function(e, t) {
        var n = function(e) {
            var t = e.x,
                n = e.y,
                r = e.width,
                i = e.height,
                o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                s = Object.create(o.prototype);
            return Vu(s, {
                x: t,
                y: n,
                width: r,
                height: i,
                top: n,
                right: t + r,
                bottom: i + n,
                left: t
            }), s
        }(t);
        Vu(this, {
            target: e,
            contentRect: n
        })
    },
    zu = function() {
        function e(e, t, n) {
            if (this.activeObservations_ = [], this.observations_ = new Lu, "function" != typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = n
        }
        return e.prototype.observe = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Bu(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) || (t.set(e, new Yu(e)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, e.prototype.unobserve = function(e) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(e instanceof Bu(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var t = this.observations_;
                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
            }
        }, e.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, e.prototype.gatherActive = function() {
            var e = this;
            this.clearActive(), this.observations_.forEach((function(t) {
                t.isActive() && e.activeObservations_.push(t)
            }))
        }, e.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var e = this.callbackCtx_,
                    t = this.activeObservations_.map((function(e) {
                        return new $u(e.target, e.broadcastRect())
                    }));
                this.callback_.call(e, t, e), this.clearActive()
            }
        }, e.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, e.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        }, e
    }(),
    Qu = "undefined" != typeof WeakMap ? new WeakMap : new Lu,
    Ju = function e(t) {
        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = ju.getInstance(),
            r = new zu(t, n, this);
        Qu.set(this, r)
    };
["observe", "unobserve", "disconnect"].forEach((function(e) {
    Ju.prototype[e] = function() {
        var t;
        return (t = Qu.get(this))[e].apply(t, arguments)
    }
}));
var Zu = void 0 !== Mu.ResizeObserver ? Mu.ResizeObserver : Ju;

function el(e, t, n) {
    this.constructorName = "MessageApiError", this.message = e, this.name = t, this.source = n
}

function tl(e) {
    return e
}

function nl(e) {
    if (!e || "" === e) return {};
    if ("object" == typeof e) return e;
    try {
        return JSON.parse(e)
    } catch (t) {
        return {}
    }
}

function rl(e) {}
el.prototype = new Error;
let il = {
        captureException(e) {},
        captureMessage(e) {},
        captureBreadcrumb() {}
    },
    ol = il;
var sl = {
    set: function(e) {
        ol = Object.assign({}, il, e)
    },
    captureException: function(e, t) {
        return ol.captureException(e, t)
    },
    captureMessage: function(e, t) {
        return ol.captureMessage(e, t)
    },
    captureBreadcrumb: function(e, t, n = "backbone", r = "info") {
        return ol.captureBreadcrumb(e, t, n, r)
    }
};

function al() {
    const e = {},
        t = {},
        n = {
            parseMessage: nl,
            buildMessage: tl,
            logError: rl
        };
    let r, i, o = {};
    const s = {
        get methods() {
            return e
        },
        extendMethods(...t) {
            Me.apply(void 0, [e].concat(t))
        },
        get listeners() {
            return o
        },
        set listeners(e) {
            o = e
        },
        emit(e, ...t) {
            a.apply(void 0, [e].concat(t)) && u(c.apply(void 0, [e].concat(t)))
        },
        emitMethodEvent(e, t) {
            u({
                method: e,
                value: t
            })
        },
        filter(e, n) {
            n || "function" != typeof e || (n = e, e = null), e ? function(e, n) {
                t.event = t.event || {}, t.event[e] = t.event[e] || [], t.event[e].push(n)
            }(e, n) : function(e) {
                t.global = t.global || [], t.global.push(e)
            }(n)
        },
        hooks: (...e) => Me.apply(void 0, [n].concat(e)),
        configureClient(e, t) {
            r = e, i = t
        }
    };

    function a(...e) {
        if (t) {
            let n, r;
            if (t.global && t.global.length)
                for (n = 0; n < t.global.length; n++)
                    if (r = t.global[n], !r.apply(r, e)) return !1;
            let i = e[0];
            if (t.event && t.event[i] && t.event[i].length)
                for (n = 0; n < t.event[i].length; n++)
                    if (r = t.event[i][n], !r.apply(r, e)) return !1
        }
        return !0
    }

    function c(e, ...t) {
        const n = {
            event: e
        };
        return t && void 0 !== t[0] && (n.data = t[0]), n
    }

    function u(e) {
        if (i && function(e = window.parent) {
                return !(!window.postMessage || !e.postMessage)
            }(r)) {
            e = n.buildMessage(e);
            try {
                r.postMessage(e, i)
            } catch (t) {}
        }
    }
    return window.addEventListener("message", (function(t) {
        if (r !== t.source) return;
        let i = n.parseMessage(t.data),
            {
                method: o,
                value: s,
                id: a
            } = i;
        if (!(void 0 === o || "string" != typeof o || o.indexOf("_") > -1)) try {
            let r = function(e, t) {
                if (!e) return null;
                let n = Object.getOwnPropertyDescriptor(t, e);
                if (n && "function" == typeof n.value) return n.value;
                if (n && "function" == typeof n.get) return n.get;
                const r = e.substr(0, 3),
                    i = e.substr(3, 1).toLowerCase() + e.substr(4);
                return n = Object.getOwnPropertyDescriptor(t, i), "get" === r && n && "function" == typeof n.get ? n.get : "set" === r && n && "function" == typeof n.set ? n.set : null
            }(o, e);
            if (!r) throw new el(`“${t}” is not a valid method. Valid methods are: ${function(e){return Object.keys(e).reduce((t,n)=>{if(n.indexOf("_")>-1)return t;const r=Object.getOwnPropertyDescriptor(e,n);return"function"==typeof r.value?(t.push(n),t):("function"==typeof r.get&&t.push("get"+n.charAt(0).toUpperCase()+n.slice(1)),"function"==typeof r.set&&t.push("set"+n.charAt(0).toUpperCase()+n.slice(1)),t)},[]).sort()}(e).join(", ")}.`, "TypeError", o);
            sl.captureBreadcrumb("API message received", i, "api"), Promise.resolve(r.call(t, s, a)).then(e => u({
                method: o,
                value: null == e ? s : e
            })).catch(n.logError)
        } catch (c) {
            n.logError(c)
        }
    }), !1), s
}
var cl = self !== top,
    ul = function() {
        var e = document.createElement("video"),
            t = {
                request: ["requestFullscreen", "webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"],
                exit: ["exitFullscreen", "webkitCancelFullScreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                enabled: ["fullscreenEnabled", "webkitFullscreenEnabled", "mozFullScreenEnabled", "msFullscreenEnabled"],
                element: ["fullscreenElement", "webkitFullscreenElement", "webkitCurrentFullScreenElement", "mozFullScreenElement", "msFullscreenElement"],
                change: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                error: ["fullscreenerror", "webkitfullscreenerror", "mozfullscreenerror", "MSFullscreenError"]
            },
            n = {};
        for (var r in t)
            for (var i = 0, o = t[r].length; i < o; i++)
                if (t[r][i] in e || t[r][i] in document || "on" + t[r][i].toLowerCase() in document) {
                    n[r] = t[r][i];
                    break
                }
        return n
    }(),
    ll = {
        ENTER: "enter",
        EXIT: "exit",
        CHANGE: "change",
        ERROR: "error"
    },
    dl = [],
    hl = {};

function fl() {
    var e = Array.prototype.slice.apply(arguments),
        t = e.shift();
    hl[t].forEach((function(t) {
        "function" == typeof t && t.apply(t, e)
    }))
}

function _l(e) {
    return function(t, n) {
        -1 !== dl.indexOf(t) && e.call(this, t, n)
    }
}

function pl(e) {
    var t = null;
    if ("VIDEO" === e.tagName) t = e;
    else {
        var n = e.getElementsByTagName("video");
        n[0] && (t = n[0])
    }
    return t
}
Object.keys(ll).forEach((function(e) {
    dl.push(ll[e]), hl[ll[e]] = []
}));
var ml = null,
    vl = function() {},
    gl = [];

function yl(e) {
    var t = pl(e);
    if (t && t.webkitEnterFullscreen) {
        try {
            t.readyState < t.HAVE_CURRENT_DATA ? (t.addEventListener("loadeddata", (function n() {
                t.removeEventListener("loadeddata", n, !1);
                try {
                    t.webkitEnterFullscreen()
                } catch (r) {
                    return Sl("cannot_enter_fullscreen", e)
                }
            }), !1), t.load()) : t.webkitEnterFullscreen(), ml = t
        } catch (n) {
            return Sl("not_supported", e)
        }
        return !0
    }
    return Sl(void 0 === ul.request ? "not_supported" : "not_enabled", e)
}
var El = function(e) {
        var t = gl[gl.length - 1];
        t && (e !== t.element && e !== ml || !t.hasEntered) && ("VIDEO" === e.tagName && (ml = e), 1 === gl.length && bl.onenter(bl.element), t.enter.call(t.element, e || t.element), t.hasEntered = !0, fl(ll.ENTER, bl.element))
    },
    Tl = function() {
        ml = null;
        var e = gl.pop();
        e && (e.exit.call(e.element), fl(ll.EXIT, e.element), bl.element || (gl.forEach((function(e) {
            e.exit.call(e.element), fl(ll.EXIT, e.element)
        })), gl = [], bl.onexit()))
    },
    Sl = function(e, t) {
        if (gl.length > 0) {
            var n = gl.pop();
            t = t || n.element, n.error.call(t, e), bl.onerror(t, e), fl(ll.ERROR, t, e)
        }
    },
    bl = {
        request: function(e, t, n, r) {
            if (e = e || document.body, gl.push({
                    element: e,
                    enter: t || vl,
                    exit: n || vl,
                    error: r || vl
                }), void 0 === ul.request) return yl(e);
            if (cl && !1 === document[ul.enabled]) return yl(e);
            try {
                e[ul.request]()
            } catch (i) {
                Sl("not_enabled", e)
            }
        },
        exit: function() {
            !document[ul.exit] && bl.element ? bl.element[ul.exit]() : document[ul.exit]()
        },
        toggle: function(e, t, n, r) {
            bl.element ? bl.exit() : bl.request(e, t, n, r)
        },
        videoEnabled: function(e) {
            if (bl.enabled) return !0;
            var t = pl(e = e || document.body);
            return !(!t || void 0 === t.webkitSupportsFullscreen) && (t.readyState < t.HAVE_METADATA ? "maybe" : t.webkitSupportsFullscreen)
        },
        on: _l((function(e, t) {
            hl[e].push(t)
        })),
        off: _l((function(e, t) {
            var n = hl[e].indexOf(t);
            n > -1 && hl[e].splice(n, 1)
        })),
        onenter: vl,
        onexit: vl,
        onchange: vl,
        onerror: vl
    };
try {
    Object.defineProperties(bl, {
        element: {
            enumerable: !0,
            get: function() {
                return ml && ml.webkitDisplayingFullscreen ? ml : document[ul.element] || null
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return document[ul.enabled] || !1
            }
        }
    })
} catch (qf) {
    bl.element = null, bl.enabled = !1
}

function Al() {
    return window.parent != window
}
ul.change && document.addEventListener(ul.change, (function(e) {
    if (bl.onchange(bl.element), fl(ll.CHANGE, bl.element), bl.element) {
        var t = gl[gl.length - 2];
        t && t.element === bl.element ? Tl() : El(bl.element)
    } else Tl()
}), !1), document.addEventListener("webkitbeginfullscreen", (function(e) {
    var t = !0;
    if (gl.length > 0)
        for (var n = 0, r = gl.length; n < r; n++)
            if (pl(gl[n].element) === e.srcElement) {
                t = !1;
                break
            }
    t && gl.push({
        element: e.srcElement,
        enter: vl,
        exit: vl,
        error: vl
    }), bl.onchange(e.srcElement), fl(ll.CHANGE, bl.srcElement), El(e.srcElement)
}), !0), document.addEventListener("webkitendfullscreen", (function(e) {
    bl.onchange(e.srcElement), fl(ll.CHANGE, e.srcElement), Tl(e.srcElement)
}), !0), ul.error && document.addEventListener(ul.error, (function(e) {
    Sl("not_allowed")
}), !1);
var wl = Object.prototype.hasOwnProperty,
    Il = fi((function(e, n) {
        if (t(n) || z(n)) sr(n, dr(n), e);
        else
            for (var r in n) wl.call(n, r) && or(e, r, n[r])
    }));
const Rl = function(e) {
        return (t, ...n) => (n.forEach(n => {
            for (const r in n) {
                const i = Object.getOwnPropertyDescriptor(n, r);
                Object.defineProperty(t, r, Object.assign(i, e))
            }
        }), t)
    }({
        enumerable: !0,
        configurable: !0,
        writeable: !1
    }),
    kl = {
        AD_BUFFERING: "ad-buffering",
        AD_COMPLETE: "ad-complete",
        AD_CLICK: "ad-click",
        AD_SKIPPED: "ad-skipped",
        ALL_ADS_COMPLETED: "all-ads-completed",
        AD_ERROR: "ad-error",
        AD_STARTED: "ad-started",
        ADS_MANAGER_LOADED: "ads-manager-loaded",
        CONTENT_PAUSE_REQUESTED: "content-pause-requested",
        CONTENT_RESUME_REQUESTED: "content-resume-requested"
    };

function Pl(e, t) {
    const n = er();
    let r, i, o, s, a;

    function c(e) {
        var o = new r.AdsRenderingSettings;
        o.restoreCustomPlaybackStateOnAdBreakComplete = !0, o.uiElements = [], i = e.getAdsManager(t.videoPlayer, o), n.fire(kl.ADS_MANAGER_LOADED), i.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), i.addEventListener(r.AdEvent.Type.CONTENT_PAUSE_REQUESTED, u), i.addEventListener(r.AdEvent.Type.CONTENT_RESUME_REQUESTED, l), i.addEventListener(r.AdEvent.Type.AD_BUFFERING, d), i.addEventListener(r.AdEvent.Type.STARTED, h), i.addEventListener(r.AdEvent.Type.COMPLETE, f), i.addEventListener(r.AdEvent.Type.CLICK, _), i.addEventListener(r.AdEvent.Type.SKIPPED, p), i.addEventListener(r.AdEvent.Type.ALL_ADS_COMPLETED, m)
    }

    function u(e) {
        n.fire(kl.CONTENT_PAUSE_REQUESTED, e)
    }

    function l(e) {
        n.fire(kl.CONTENT_RESUME_REQUESTED, e)
    }

    function d(e) {
        n.fire(kl.AD_BUFFERING, e)
    }

    function h(e) {
        n.fire(kl.AD_STARTED, e)
    }

    function f(e) {
        n.fire(kl.AD_COMPLETE, e)
    }

    function _(e) {
        i.pause(), n.fire(kl.AD_CLICK, e)
    }

    function p(e) {
        n.fire(kl.AD_SKIPPED, e)
    }

    function m(e) {
        n.fire(kl.ALL_ADS_COMPLETED, e)
    }

    function v(e) {
        n.fire(kl.AD_ERROR, e.getError()), i && i.destroy()
    }
    const g = {
        start: (e, t) => (a.initialize(), i.init(e, t, r.ViewMode.NORMAL), i.start()),
        stop: () => i.stop(),
        pause: () => i.pause(),
        play: () => i.resume(),
        skip: () => i.skip(),
        resize: (e, t, n) => n ? i.resize(e, t, r.ViewMode.FULLSCREEN) : i.resize(e, t, r.ViewMode.NORMAL),
        destroy() {
            n.off(), i.destroy(), o.destroy(), a.destroy()
        },
        get volume() {
            return Ve(i.getVolume())
        },
        set volume(e) {
            i.setVolume(je(e))
        },
        get adsManager() {
            return i
        },
        get adsLoader() {
            return o
        },
        get remainingTime() {
            return i.getRemainingTime()
        },
        setContentComplete() {
            o.contentComplete()
        },
        on(e, t) {
            return n.on(e, t), this
        },
        off(e, t) {
            return n.off(e, t), this
        }
    };
    return function(e, t, n) {
        if (document.getElementById("vp-ima-sdk")) n();
        else {
            var r = document.createElement("script");
            r.id = "vp-ima-sdk", r.src = "https://imasdk.googleapis.com/js/sdkloader/ima3.js", r.onreadystatechange = r.onload = () => {
                n && n()
            }, document.getElementsByTagName("body")[0].appendChild(r)
        }
    }(0, 0, (function() {
        r = google.ima;
        let n = en.iOS ? t.videoPlayer.videoElement : t.videoPlayer;
        a = new r.AdDisplayContainer(e, n), o = new r.AdsLoader(a), o.addEventListener(r.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, c), o.addEventListener(r.AdErrorEvent.Type.AD_ERROR, v), s = new r.AdsRequest, t.adUrl && (s.adTagUrl = t.adUrl), s.linearAdSlotWidth = t.width.linear, s.linearAdSlotHeight = t.height.linear, s.nonLinearAdSlotWidth = t.width.nonlinear, s.nonLinearAdSlotHeight = t.height.nonlinear, o.requestAds(s)
    })), Rl(this, g)
}

function Dl(e, t, n, r) {
    if (!v(e)) return e;
    for (var i = -1, o = (t = kn(t, e)).length, s = o - 1, a = e; null != a && ++i < o;) {
        var c = Pn(t[i]),
            u = n;
        if ("__proto__" === c || "constructor" === c || "prototype" === c) return e;
        if (i != s) {
            var l = a[c];
            void 0 === (u = r ? r(l, c, a) : void 0) && (u = v(l) ? l : cr(t[i + 1]) ? [] : {})
        }
        or(a, c, u), a = a[c]
    }
    return e
}

function Ol(e, t) {
    return null != e && t in Object(e)
}

function Cl(e, t) {
    return function(e, t, n) {
        for (var r = -1, i = t.length, o = {}; ++r < i;) {
            var s = t[r],
                a = Dn(e, s);
            n(0, s) && Dl(o, kn(s, e), a)
        }
        return o
    }(e, t, (function(t, n) {
        return function(e, t) {
            return null != e && function(e, t, n) {
                for (var r = -1, i = (t = kn(t, e)).length, o = !1; ++r < i;) {
                    var s = Pn(t[r]);
                    if (!(o = null != e && n(e, s))) break;
                    e = e[s]
                }
                return o || ++r != i ? o : !!(i = null == e ? 0 : e.length) && $(i) && cr(s, i) && (Y(e) || K(e))
            }(e, t, Ol)
        }(e, n)
    }))
}
var Ll = u ? u.isConcatSpreadable : void 0;

function Nl(e) {
    return Y(e) || K(e) || !!(Ll && e && e[Ll])
}

function Ml(e) {
    return null != e && e.length ? function e(t, n, r, i, o) {
        var s = -1,
            a = t.length;
        for (r || (r = Nl), o || (o = []); ++s < a;) {
            var c = t[s];
            n > 0 && r(c) ? n > 1 ? e(c, n - 1, r, i, o) : Ar(o, c) : i || (o[o.length] = c)
        }
        return o
    }(e, 1) : []
}
var xl, Ul, Fl, jl, Vl, Bl, Hl, Xl, ql, Gl, Wl, Kl = function(e) {
        return ei(zr(e, void 0, Ml), e + "")
    }((function(e, t) {
        return null == e ? {} : Cl(e, t)
    })),
    Yl = function(e, t) {
        return {
            name: e,
            value: void 0 === t ? -1 : t,
            delta: 0,
            entries: [],
            id: "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        }
    },
    $l = function(e, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
                var n = new PerformanceObserver((function(e) {
                    return e.getEntries().map(t)
                }));
                return n.observe({
                    type: e,
                    buffered: !0
                }), n
            }
        } catch (e) {}
    },
    zl = function(e, t) {
        var n = function n(r) {
            "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    },
    Ql = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && e(t)
        }), !0)
    },
    Jl = function(e, t, n) {
        var r;
        return function(i) {
            t.value >= 0 && (i || n) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
        }
    },
    Zl = -1,
    ed = function() {
        return "hidden" === document.visibilityState ? 0 : 1 / 0
    },
    td = function() {
        zl((function(e) {
            var t = e.timeStamp;
            Zl = t
        }), !0)
    },
    nd = function() {
        return Zl < 0 && (Zl = ed(), td(), Ql((function() {
            setTimeout((function() {
                Zl = ed(), td()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return Zl
            }
        }
    },
    rd = function(e, t) {
        var n, r = nd(),
            i = Yl("FCP"),
            o = function(e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < r.firstHiddenTime && (i.value = e.startTime, i.entries.push(e), n(!0)))
            },
            s = window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0],
            a = s ? null : $l("paint", o);
        (s || a) && (n = Jl(e, i, t), s && o(s), Ql((function(r) {
            i = Yl("FCP"), n = Jl(e, i, t), requestAnimationFrame((function() {
                requestAnimationFrame((function() {
                    i.value = performance.now() - r.timeStamp, n(!0)
                }))
            }))
        })))
    },
    id = !1,
    od = -1,
    sd = function(e, t) {
        id || (rd((function(e) {
            od = e.value
        })), id = !0);
        var n, r = function(t) {
                od > -1 && e(t)
            },
            i = Yl("CLS", 0),
            o = 0,
            s = [],
            a = function(e) {
                if (!e.hadRecentInput) {
                    var t = s[0],
                        r = s[s.length - 1];
                    o && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += e.value, s.push(e)) : (o = e.value, s = [e]), o > i.value && (i.value = o, i.entries = s, n())
                }
            },
            c = $l("layout-shift", a);
        c && (n = Jl(r, i, t), zl((function() {
            c.takeRecords().map(a), n(!0)
        })), Ql((function() {
            o = 0, od = -1, i = Yl("CLS", 0), n = Jl(r, i, t)
        })))
    },
    ad = {
        passive: !0,
        capture: !0
    },
    cd = new Date,
    ud = function(e, t) {
        xl || (xl = t, Ul = e, Fl = new Date, hd(removeEventListener), ld())
    },
    ld = function() {
        if (Ul >= 0 && Ul < Fl - cd) {
            var e = {
                entryType: "first-input",
                name: xl.type,
                target: xl.target,
                cancelable: xl.cancelable,
                startTime: xl.timeStamp,
                processingStart: xl.timeStamp + Ul
            };
            jl.forEach((function(t) {
                t(e)
            })), jl = []
        }
    },
    dd = function(e) {
        if (e.cancelable) {
            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                var n = function() {
                        ud(e, t), i()
                    },
                    r = function() {
                        i()
                    },
                    i = function() {
                        removeEventListener("pointerup", n, ad), removeEventListener("pointercancel", r, ad)
                    };
                addEventListener("pointerup", n, ad), addEventListener("pointercancel", r, ad)
            }(t, e) : ud(t, e)
        }
    },
    hd = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
            return e(t, dd, ad)
        }))
    },
    fd = function(e, t) {
        var n, r = nd(),
            i = Yl("FID"),
            o = function(e) {
                e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
            },
            s = $l("first-input", o);
        n = Jl(e, i, t), s && zl((function() {
            s.takeRecords().map(o), s.disconnect()
        }), !0), s && Ql((function() {
            var r;
            i = Yl("FID"), n = Jl(e, i, t), jl = [], Ul = -1, xl = null, hd(addEventListener), r = o, jl.push(r), ld()
        }))
    },
    _d = {},
    pd = function(e, t) {
        var n, r = nd(),
            i = Yl("LCP"),
            o = function(e) {
                var t = e.startTime;
                t < r.firstHiddenTime && (i.value = t, i.entries.push(e), n())
            },
            s = $l("largest-contentful-paint", o);
        if (s) {
            n = Jl(e, i, t);
            var a = function() {
                _d[i.id] || (s.takeRecords().map(o), s.disconnect(), _d[i.id] = !0, n(!0))
            };
            ["keydown", "click"].forEach((function(e) {
                addEventListener(e, a, {
                    once: !0,
                    capture: !0
                })
            })), zl(a, !0), Ql((function(r) {
                i = Yl("LCP"), n = Jl(e, i, t), requestAnimationFrame((function() {
                    requestAnimationFrame((function() {
                        i.value = performance.now() - r.timeStamp, _d[i.id] = !0, n(!0)
                    }))
                }))
            }))
        }
    },
    md = {},
    vd = [],
    gd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function yd(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Ed(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function Td(e, t, n) {
    var r, i, o, s = {};
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Vl.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)
        for (o in e.defaultProps) void 0 === s[o] && (s[o] = e.defaultProps[o]);
    return Sd(e, s, r, i, null)
}

function Sd(e, t, n, r, i) {
    var o = {
        type: e,
        props: t,
        key: n,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == i ? ++Hl : i
    };
    return null == i && null != Bl.vnode && Bl.vnode(o), o
}

function bd(e) {
    return e.children
}

function Ad(e, t) {
    this.props = e, this.context = t
}

function wd(e, t) {
    if (null == t) return e.__ ? wd(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? wd(e) : null
}

function Id(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return Id(e)
    }
}

function Rd(e) {
    (!e.__d && (e.__d = !0) && Xl.push(e) && !kd.__r++ || Gl !== Bl.debounceRendering) && ((Gl = Bl.debounceRendering) || ql)(kd)
}

function kd() {
    for (var e; kd.__r = Xl.length;) e = Xl.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
    })), Xl = [], e.some((function(e) {
        var t, n, r, i, o, s;
        e.__d && (o = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = yd({}, i)).__v = i.__v + 1, Ud(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? wd(i) : o, i.__h), Fd(n, i), i.__e != o && Id(i)))
    }))
}

function Pd(e, t, n, r, i, o, s, a, c, u) {
    var l, d, h, f, _, p, m, v = r && r.__k || vd,
        g = v.length;
    for (n.__k = [], l = 0; l < t.length; l++)
        if (null != (f = n.__k[l] = null == (f = t[l]) || "boolean" == typeof f ? null : "string" == typeof f || "number" == typeof f || "bigint" == typeof f ? Sd(null, f, null, null, f) : Array.isArray(f) ? Sd(bd, {
                children: f
            }, null, null, null) : f.__b > 0 ? Sd(f.type, f.props, f.key, null, f.__v) : f)) {
            if (f.__ = n, f.__b = n.__b + 1, null === (h = v[l]) || h && f.key == h.key && f.type === h.type) v[l] = void 0;
            else
                for (d = 0; d < g; d++) {
                    if ((h = v[d]) && f.key == h.key && f.type === h.type) {
                        v[d] = void 0;
                        break
                    }
                    h = null
                }
            Ud(e, f, h = h || md, i, o, s, a, c, u), _ = f.__e, (d = f.ref) && h.ref != d && (m || (m = []), h.ref && m.push(h.ref, null, f), m.push(d, f.__c || _, f)), null != _ ? (null == p && (p = _), "function" == typeof f.type && f.__k === h.__k ? f.__d = c = Dd(f, c, e) : c = Cd(e, f, h, v, _, c), "function" == typeof n.type && (n.__d = c)) : c && h.__e == c && c.parentNode != e && (c = wd(h))
        }
    for (n.__e = p, l = g; l--;) null != v[l] && ("function" == typeof n.type && null != v[l].__e && v[l].__e == n.__d && (n.__d = wd(r, l + 1)), Bd(v[l], v[l]));
    if (m)
        for (l = 0; l < m.length; l++) Vd(m[l], m[++l], m[++l])
}

function Dd(e, t, n) {
    for (var r, i = e.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = e, t = "function" == typeof r.type ? Dd(r, t, n) : Cd(n, r, r, i, r.__e, t));
    return t
}

function Od(e, t) {
    return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        Od(e, t)
    })) : t.push(e)), t
}

function Cd(e, t, n, r, i, o) {
    var s, a, c;
    if (void 0 !== t.__d) s = t.__d, t.__d = void 0;
    else if (null == n || i != o || null == i.parentNode) e: if (null == o || o.parentNode !== e) e.appendChild(i), s = null;
        else {
            for (a = o, c = 0;
                (a = a.nextSibling) && c < r.length; c += 2)
                if (a == i) break e;
            e.insertBefore(i, o), s = o
        }
    return void 0 !== s ? s : i.nextSibling
}

function Ld(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || gd.test(t) ? n : n + "px"
}

function Nd(e, t, n, r, i) {
    var o;
    e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r)
                for (t in r) n && t in n || Ld(e.style, t, "");
            if (n)
                for (t in n) r && n[t] === r[t] || Ld(e.style, t, n[t])
        }
    else if ("o" === t[0] && "n" === t[1]) o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r || e.addEventListener(t, o ? xd : Md, o) : e.removeEventListener(t, o ? xd : Md, o);
    else if ("dangerouslySetInnerHTML" !== t) {
        if (i) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
            e[t] = null == n ? "" : n;
            break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
    }
}

function Md(e) {
    this.l[e.type + !1](Bl.event ? Bl.event(e) : e)
}

function xd(e) {
    this.l[e.type + !0](Bl.event ? Bl.event(e) : e)
}

function Ud(e, t, n, r, i, o, s, a, c) {
    var u, l, d, h, f, _, p, m, v, g, y, E = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h && (c = n.__h, a = t.__e = n.__e, t.__h = null, o = [a]), (u = Bl.__b) && u(t);
    try {
        e: if ("function" == typeof E) {
            if (m = t.props, v = (u = E.contextType) && r[u.__c], g = u ? v ? v.props.value : u.__ : r, n.__c ? p = (l = t.__c = n.__c).__ = l.__E : ("prototype" in E && E.prototype.render ? t.__c = l = new E(m, g) : (t.__c = l = new Ad(m, g), l.constructor = E, l.render = Hd), v && v.sub(l), l.props = m, l.state || (l.state = {}), l.context = g, l.__n = r, d = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != E.getDerivedStateFromProps && (l.__s == l.state && (l.__s = yd({}, l.__s)), yd(l.__s, E.getDerivedStateFromProps(m, l.__s))), h = l.props, f = l.state, d) null == E.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if (null == E.getDerivedStateFromProps && m !== h && null != l.componentWillReceiveProps && l.componentWillReceiveProps(m, g), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(m, l.__s, g) || t.__v === n.__v) {
                    l.props = m, l.state = l.__s, t.__v !== n.__v && (l.__d = !1), l.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t)
                    })), l.__h.length && s.push(l);
                    break e
                }
                null != l.componentWillUpdate && l.componentWillUpdate(m, l.__s, g), null != l.componentDidUpdate && l.__h.push((function() {
                    l.componentDidUpdate(h, f, _)
                }))
            }
            l.context = g, l.props = m, l.state = l.__s, (u = Bl.__r) && u(t), l.__d = !1, l.__v = t, l.__P = e, u = l.render(l.props, l.state, l.context), l.state = l.__s, null != l.getChildContext && (r = yd(yd({}, r), l.getChildContext())), d || null == l.getSnapshotBeforeUpdate || (_ = l.getSnapshotBeforeUpdate(h, f)), y = null != u && u.type === bd && null == u.key ? u.props.children : u, Pd(e, Array.isArray(y) ? y : [y], t, n, r, i, o, s, a, c), l.base = t.__e, t.__h = null, l.__h.length && s.push(l), p && (l.__E = l.__ = null), l.__e = !1
        } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = jd(n.__e, t, n, r, i, o, s, c);
        (u = Bl.diffed) && u(t)
    }
    catch (e) {
        t.__v = null, (c || null != o) && (t.__e = a, t.__h = !!c, o[o.indexOf(a)] = null), Bl.__e(e, t, n)
    }
}

function Fd(e, t) {
    Bl.__c && Bl.__c(t, e), e.some((function(t) {
        try {
            e = t.__h, t.__h = [], e.some((function(e) {
                e.call(t)
            }))
        } catch (e) {
            Bl.__e(e, t.__v)
        }
    }))
}

function jd(e, t, n, r, i, o, s, a) {
    var c, u, l, d = n.props,
        h = t.props,
        f = t.type,
        _ = 0;
    if ("svg" === f && (i = !0), null != o)
        for (; _ < o.length; _++)
            if ((c = o[_]) && "setAttribute" in c == !!f && (f ? c.localName === f : 3 === c.nodeType)) {
                e = c, o[_] = null;
                break
            }
    if (null == e) {
        if (null === f) return document.createTextNode(h);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", f) : document.createElement(f, h.is && h), o = null, a = !1
    }
    if (null === f) d === h || a && e.data === h || (e.data = h);
    else {
        if (o = o && Vl.call(e.childNodes), u = (d = n.props || md).dangerouslySetInnerHTML, l = h.dangerouslySetInnerHTML, !a) {
            if (null != o)
                for (d = {}, _ = 0; _ < e.attributes.length; _++) d[e.attributes[_].name] = e.attributes[_].value;
            (l || u) && (l && (u && l.__html == u.__html || l.__html === e.innerHTML) || (e.innerHTML = l && l.__html || ""))
        }
        if (function(e, t, n, r, i) {
                var o;
                for (o in n) "children" === o || "key" === o || o in t || Nd(e, o, null, n[o], r);
                for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === t[o] || Nd(e, o, t[o], n[o], r)
            }(e, h, d, i, a), l) t.__k = [];
        else if (_ = t.props.children, Pd(e, Array.isArray(_) ? _ : [_], t, n, r, i && "foreignObject" !== f, o, s, o ? o[0] : n.__k && wd(n, 0), a), null != o)
            for (_ = o.length; _--;) null != o[_] && Ed(o[_]);
        a || ("value" in h && void 0 !== (_ = h.value) && (_ !== e.value || "progress" === f && !_ || "option" === f && _ !== d.value) && Nd(e, "value", _, d.value, !1), "checked" in h && void 0 !== (_ = h.checked) && _ !== e.checked && Nd(e, "checked", _, d.checked, !1))
    }
    return e
}

function Vd(e, t, n) {
    try {
        "function" == typeof e ? e(t) : e.current = t
    } catch (e) {
        Bl.__e(e, n)
    }
}

function Bd(e, t, n) {
    var r, i;
    if (Bl.unmount && Bl.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Vd(r, null, t)), null != (r = e.__c)) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (e) {
            Bl.__e(e, t)
        }
        r.base = r.__P = null
    }
    if (r = e.__k)
        for (i = 0; i < r.length; i++) r[i] && Bd(r[i], t, "function" != typeof e.type);
    n || null == e.__e || Ed(e.__e), e.__e = e.__d = void 0
}

function Hd(e, t, n) {
    return this.constructor(e, n)
}

function Xd(e, t, n) {
    var r, i, o;
    Bl.__ && Bl.__(e, t), i = (r = "function" == typeof n) ? null : n && n.__k || t.__k, o = [], Ud(t, e = (!r && n || t).__k = Td(bd, null, [e]), i || md, md, void 0 !== t.ownerSVGElement, !r && n ? [n] : i ? null : t.firstChild ? Vl.call(t.childNodes) : null, o, !r && n ? n : i ? i.__e : t.firstChild, r), Fd(o, e)
}

function qd(e, t) {
    Xd(e, t, qd)
}

function Gd(e, t, n) {
    var r, i, o, s = yd({}, e.props);
    for (o in t) "key" == o ? r = t[o] : "ref" == o ? i = t[o] : s[o] = t[o];
    return arguments.length > 2 && (s.children = arguments.length > 3 ? Vl.call(arguments, 2) : n), Sd(e.type, s, r || e.key, i || e.ref, null)
}

function Wd(e, t) {
    var n = {
        __c: t = "__cC" + Wl++,
        __: e,
        Consumer: function(e, t) {
            return e.children(t)
        },
        Provider: function(e) {
            var n, r;
            return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                return r
            }, this.shouldComponentUpdate = function(e) {
                this.props.value !== e.value && n.some(Rd)
            }, this.sub = function(e) {
                n.push(e);
                var t = e.componentWillUnmount;
                e.componentWillUnmount = function() {
                    n.splice(n.indexOf(e), 1), t && t.call(e)
                }
            }), e.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Vl = vd.slice, Bl = {
    __e: function(e, t) {
        for (var n, r, i; t = t.__;)
            if ((n = t.__c) && !n.__) try {
                if ((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), i = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), i = n.__d), i) return n.__E = n
            } catch (t) {
                e = t
            }
        throw e
    }
}, Hl = 0, Ad.prototype.setState = function(e, t) {
    var n;
    n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = yd({}, this.state), "function" == typeof e && (e = e(yd({}, n), this.props)), e && yd(n, e), null != e && this.__v && (t && this.__h.push(t), Rd(this))
}, Ad.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Rd(this))
}, Ad.prototype.render = bd, Xl = [], ql = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, kd.__r = 0, Wl = 0;
var Kd, Yd, $d, zd = 0,
    Qd = [],
    Jd = Bl.__b,
    Zd = Bl.__r,
    eh = Bl.diffed,
    th = Bl.__c,
    nh = Bl.unmount;

function rh(e, t) {
    Bl.__h && Bl.__h(Yd, e, zd || t), zd = 0;
    var n = Yd.__H || (Yd.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}), n.__[e]
}

function ih(e) {
    return zd = 1, oh(Eh, e)
}

function oh(e, t, n) {
    var r = rh(Kd++, 2);
    return r.t = e, r.__c || (r.__ = [n ? n(t) : Eh(void 0, t), function(e) {
        var t = r.t(r.__[0], e);
        r.__[0] !== t && (r.__ = [t, r.__[1]], r.__c.setState({}))
    }], r.__c = Yd), r.__
}

function sh(e, t) {
    var n = rh(Kd++, 3);
    !Bl.__s && yh(n.__H, t) && (n.__ = e, n.__H = t, Yd.__H.__h.push(n))
}

function ah(e, t) {
    var n = rh(Kd++, 4);
    !Bl.__s && yh(n.__H, t) && (n.__ = e, n.__H = t, Yd.__h.push(n))
}

function ch(e) {
    return zd = 5, uh((function() {
        return {
            current: e
        }
    }), [])
}

function uh(e, t) {
    var n = rh(Kd++, 7);
    return yh(n.__H, t) && (n.__ = e(), n.__H = t, n.__h = e), n.__
}

function lh(e, t) {
    return zd = 8, uh((function() {
        return e
    }), t)
}

function dh(e) {
    var t = Yd.context[e.__c],
        n = rh(Kd++, 9);
    return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(Yd)), t.props.value) : e.__
}

function hh(e, t) {
    Bl.useDebugValue && Bl.useDebugValue(t ? t(e) : e)
}

function fh(e) {
    var t = rh(Kd++, 10),
        n = ih();
    return t.__ = e, Yd.componentDidCatch || (Yd.componentDidCatch = function(e) {
        t.__ && t.__(e), n[1](e)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function _h() {
    for (var e; e = Qd.shift();)
        if (e.__P) try {
            e.__H.__h.forEach(vh), e.__H.__h.forEach(gh), e.__H.__h = []
        } catch (Ql) {
            e.__H.__h = [], Bl.__e(Ql, e.__v)
        }
}
Bl.__b = function(e) {
    Yd = null, Jd && Jd(e)
}, Bl.__r = function(e) {
    Zd && Zd(e), Kd = 0;
    var t = (Yd = e.__c).__H;
    t && (t.__h.forEach(vh), t.__h.forEach(gh), t.__h = [])
}, Bl.diffed = function(e) {
    eh && eh(e);
    var t = e.__c;
    t && t.__H && t.__H.__h.length && (1 !== Qd.push(t) && $d === Bl.requestAnimationFrame || (($d = Bl.requestAnimationFrame) || function(e) {
        var t, n = function() {
                clearTimeout(r), mh && cancelAnimationFrame(t), setTimeout(e)
            },
            r = setTimeout(n, 100);
        mh && (t = requestAnimationFrame(n))
    })(_h)), Yd = null
}, Bl.__c = function(e, t) {
    t.some((function(e) {
        try {
            e.__h.forEach(vh), e.__h = e.__h.filter((function(e) {
                return !e.__ || gh(e)
            }))
        } catch (Yl) {
            t.some((function(e) {
                e.__h && (e.__h = [])
            })), t = [], Bl.__e(Yl, e.__v)
        }
    })), th && th(e, t)
}, Bl.unmount = function(e) {
    nh && nh(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach((function(e) {
        try {
            vh(e)
        } catch (e) {
            t = e
        }
    })), t && Bl.__e(t, n.__v))
};
var ph, mh = "function" == typeof requestAnimationFrame;

function vh(e) {
    var t = Yd,
        n = e.__c;
    "function" == typeof n && (e.__c = void 0, n()), Yd = t
}

function gh(e) {
    var t = Yd;
    e.__c = e.__(), Yd = t
}

function yh(e, t) {
    return !e || e.length !== t.length || t.some((function(t, n) {
        return t !== e[n]
    }))
}

function Eh(e, t) {
    return "function" == typeof t ? t(e) : t
}! function(e) {
    e[e.APPEAR = 0] = "APPEAR", e[e.APPEARING = 1] = "APPEARING", e[e.APPEARED = 2] = "APPEARED", e[e.ENTER = 3] = "ENTER", e[e.ENTERING = 4] = "ENTERING", e[e.ENTERED = 5] = "ENTERED", e[e.EXIT = 6] = "EXIT", e[e.EXITING = 7] = "EXITING", e[e.EXITED = 8] = "EXITED"
}(ph || (ph = {}));
var Th, Sh = function() {},
    bh = setTimeout(Sh),
    Ah = function(e) {
        var t = e.children,
            n = e.in,
            r = void 0 !== n && n,
            i = e.appear,
            o = void 0 !== i && i,
            s = e.enter,
            a = void 0 === s || s,
            c = e.exit,
            u = void 0 === c || c,
            l = e.duration,
            d = void 0 === l ? 500 : l,
            h = e.alwaysMounted,
            f = void 0 !== h && h,
            _ = e.onEnter,
            p = void 0 === _ ? Sh : _,
            m = e.onEntering,
            v = void 0 === m ? Sh : m,
            g = e.onEntered,
            y = void 0 === g ? Sh : g,
            E = e.onExit,
            T = void 0 === E ? Sh : E,
            S = e.onExiting,
            b = void 0 === S ? Sh : S,
            A = e.onExited,
            w = void 0 === A ? Sh : A,
            I = ch(bh),
            R = !1,
            k = ih((function() {
                return R = !0, r ? o ? ph.APPEAR : ph.APPEARED : ph.EXITED
            })),
            P = k[0],
            D = k[1];
        sh((function() {
            switch (P) {
                case ph.APPEAR:
                    p(), D(ph.APPEARING);
                    break;
                case ph.APPEARING:
                    v(), I.current = setTimeout((function() {
                        D(ph.APPEARED)
                    }), d);
                    break;
                case ph.APPEARED:
                    y();
                    break;
                case ph.ENTER:
                    p(), D(ph.ENTERING);
                    break;
                case ph.ENTERING:
                    v(), I.current = setTimeout((function() {
                        D(ph.ENTERED)
                    }), d);
                    break;
                case ph.ENTERED:
                    y();
                    break;
                case ph.EXIT:
                    T(), D(ph.EXITING);
                    break;
                case ph.EXITING:
                    b(), I.current = setTimeout((function() {
                        D(ph.EXITED)
                    }), d);
                    break;
                case ph.EXITED:
                    w()
            }
            return function() {
                clearTimeout(I.current)
            }
        }), [P]), ah((function() {
            if (!R) switch (!0) {
                case !(!r || !a):
                    D(ph.ENTER);
                    break;
                case !(!r || a):
                    D(ph.ENTERED);
                    break;
                case !(r || !u):
                    D(ph.EXIT);
                    break;
                case !(r || u):
                    D(ph.EXITED)
            }
        }), [r]);
        var O = uh((function() {
            return {
                appear: P === ph.APPEAR,
                appearActive: P === ph.APPEARING,
                appearDone: P === ph.APPEARED,
                enter: P === ph.ENTER,
                enterActive: P === ph.ENTERING,
                enterDone: P === ph.ENTERED,
                exit: P === ph.EXIT,
                exitActive: P === ph.EXITING,
                exitDone: P === ph.EXITED
            }
        }), [P]);
        return (f || P !== ph.EXITED) && t(O)
    };

function wh() {
    return (wh = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}! function(e) {
    e.APPEAR = "-appear", e.APPEAR_ACTIVE = "-appear-active", e.APPEAR_DONE = "-appear-done", e.ENTER = "-enter", e.ENTER_ACTIVE = "-enter-active", e.ENTER_DONE = "-enter-done", e.EXIT = "-exit", e.EXIT_ACTIVE = "-exit-active", e.EXIT_DONE = "-exit-done"
}(Th || (Th = {}));
var Ih = ["children", "styles"],
    Rh = function(e) {
        var t = e.children,
            n = e.styles,
            r = function(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
                return i
            }(e, Ih);
        return Td(Ah, r, (function(e) {
            var r = t.props.style,
                i = uh((function() {
                    return wh({}, function(e, t) {
                        switch (!0) {
                            case e.appear:
                                return t.appear;
                            case e.appearActive:
                                return wh({}, t.appear, t.appearActive);
                            case e.appearDone:
                                return t.appearDone;
                            case e.enter:
                                return t.enter;
                            case e.enterActive:
                                return wh({}, t.enter, t.enterActive);
                            case e.enterDone:
                                return t.enterDone;
                            case e.exit:
                                return t.exit;
                            case e.exitActive:
                                return wh({}, t.exit, t.exitActive);
                            case e.exitDone:
                                return t.exitDone;
                            default:
                                return {}
                        }
                    }(e, n), r)
                }), [r, n, e]);
            return Gd(t, {
                style: i
            })
        }))
    };

function kh(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function Ph(e, t) {
    for (var n in e)
        if ("__source" !== n && !(n in t)) return !0;
    for (var r in t)
        if ("__source" !== r && e[r] !== t[r]) return !0;
    return !1
}

function Dh(e) {
    this.props = e
}(Dh.prototype = new Ad).isPureReactComponent = !0, Dh.prototype.shouldComponentUpdate = function(e, t) {
    return Ph(this.props, e) || Ph(this.state, t)
};
var Oh = Bl.__b;
Bl.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Oh && Oh(e)
};
var Ch = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Lh(e) {
    function t(t, n) {
        var r = kh({}, t);
        return delete r.ref, e(r, (n = t.ref || n) && ("object" != typeof n || "current" in n) ? n : null)
    }
    return t.$$typeof = Ch, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var Nh = function(e, t) {
        return null == e ? null : Od(Od(e).map(t))
    },
    Mh = {
        map: Nh,
        forEach: Nh,
        count: function(e) {
            return e ? Od(e).length : 0
        },
        only: function(e) {
            var t = Od(e);
            if (1 !== t.length) throw "Children.only";
            return t[0]
        },
        toArray: Od
    },
    xh = Bl.__e;
Bl.__e = function(e, t, n) {
    if (e.then)
        for (var r, i = t; i = i.__;)
            if ((r = i.__c) && r.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t);
    xh(e, t, n)
};
var Uh = Bl.unmount;

function Fh() {
    this.__u = 0, this.t = null, this.__b = null
}

function jh(e) {
    var t = e.__.__c;
    return t && t.__e && t.__e(e)
}

function Vh() {
    this.u = null, this.o = null
}
Bl.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), Uh && Uh(e)
}, (Fh.prototype = new Ad).__c = function(e, t) {
    var n = t.__c,
        r = this;
    null == r.t && (r.t = []), r.t.push(n);
    var i = jh(r.__v),
        o = !1,
        s = function() {
            o || (o = !0, n.__R = null, i ? i(a) : a())
        };
    n.__R = s;
    var a = function() {
            if (!--r.__u) {
                if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r)
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, t.__c.__P = r)), t
                    }(e, e.__c.__P, e.__c.__O)
                }
                var t;
                for (r.setState({
                        __e: r.__b = null
                    }); t = r.t.pop();) t.forceUpdate()
            }
        },
        c = !0 === t.__h;
    r.__u++ || c || r.setState({
        __e: r.__b = r.__v.__k[0]
    }), e.then(s, s)
}, Fh.prototype.componentWillUnmount = function() {
    this.t = []
}, Fh.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = function e(t, n, r) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                    "function" == typeof e.__c && e.__c()
                })), t.__c.__H = null), null != (t = kh({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return e(t, n, r)
                }))), t
            }(this.__b, n, r.__O = r.__P)
        }
        this.__b = null
    }
    var i = t.__e && Td(bd, null, e.fallback);
    return i && (i.__h = null), [Td(bd, null, t.__e ? null : e.children), i]
};
var Bh = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Hh(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function Xh(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        Xd(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(e) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        insertBefore: function(e, n) {
            this.childNodes.push(e), t.i.appendChild(e)
        },
        removeChild: function(e) {
            this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
        }
    }), Xd(Td(Hh, {
        context: t.context
    }, e.__v), t.l)) : t.l && t.componentWillUnmount()
}

function qh(e, t) {
    return Td(Xh, {
        __v: e,
        i: t
    })
}(Vh.prototype = new Ad).__e = function(e) {
    var t = this,
        n = jh(t.__v),
        r = t.o.get(e);
    return r[0]++,
        function(i) {
            var o = function() {
                t.props.revealOrder ? (r.push(i), Bh(t, e, r)) : i()
            };
            n ? n(o) : o()
        }
}, Vh.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = Od(e.children);
    e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, Vh.prototype.componentDidUpdate = Vh.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach((function(t, n) {
        Bh(e, n, t)
    }))
};
var Gh = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
    Wh = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Kh = "undefined" != typeof document,
    Yh = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
    };
Ad.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
    Object.defineProperty(Ad.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
}));
var $h = Bl.event;

function zh() {}

function Qh() {
    return this.cancelBubble
}

function Jh() {
    return this.defaultPrevented
}
Bl.event = function(e) {
    return $h && (e = $h(e)), e.persist = zh, e.isPropagationStopped = Qh, e.isDefaultPrevented = Jh, e.nativeEvent = e
};
var Zh, ef = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    tf = Bl.vnode;
Bl.vnode = function(e) {
    var t = e.type,
        n = e.props,
        r = n;
    if ("string" == typeof t) {
        var i = -1 === t.indexOf("-");
        for (var o in r = {}, n) {
            var s = n[o];
            Kh && "children" === o && "noscript" === t || "value" === o && "defaultValue" in n && null == s || ("defaultValue" === o && "value" in n && null == n.value ? o = "value" : "download" === o && !0 === s ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + t) && !Yh(n.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : i && Wh.test(o) ? o = o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === s && (s = void 0), r[o] = s)
        }
        "select" == t && r.multiple && Array.isArray(r.value) && (r.value = Od(n.children).forEach((function(e) {
            e.props.selected = -1 != r.value.indexOf(e.props.value)
        }))), "select" == t && null != r.defaultValue && (r.value = Od(n.children).forEach((function(e) {
            e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
        }))), e.props = r, n.class != n.className && (ef.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", ef))
    }
    e.$$typeof = Gh, tf && tf(e)
};
var nf = Bl.__r;

function rf(e) {
    return !!e && e.$$typeof === Gh
}
Bl.__r = function(e) {
    nf && nf(e), Zh = e.__c
};
var of = {
    useState: ih,
    useReducer: oh,
    useEffect: sh,
    useLayoutEffect: ah,
    useRef: ch,
    useImperativeHandle: function(e, t, n) {
        zd = 6, ah((function() {
            "function" == typeof e ? e(t()) : e && (e.current = t())
        }), null == n ? n : n.concat(e))
    },
    useMemo: uh,
    useCallback: lh,
    useContext: dh,
    useDebugValue: hh,
    version: "17.0.2",
    Children: Mh,
    render: function(e, t, n) {
        return null == t.__k && (t.textContent = ""), Xd(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    hydrate: function(e, t, n) {
        return qd(e, t), "function" == typeof n && n(), e ? e.__c : null
    },
    unmountComponentAtNode: function(e) {
        return !!e.__k && (Xd(null, e), !0)
    },
    createPortal: qh,
    createElement: Td,
    createContext: Wd,
    createFactory: function(e) {
        return Td.bind(null, e)
    },
    cloneElement: function(e) {
        return rf(e) ? Gd.apply(null, arguments) : e
    },
    createRef: function() {
        return {
            current: null
        }
    },
    Fragment: bd,
    isValidElement: rf,
    findDOMNode: function(e) {
        return e && (e.base || 1 === e.nodeType && e) || null
    },
    Component: Ad,
    PureComponent: Dh,
    memo: function(e, t) {
        function n(e) {
            var n = this.props.ref,
                r = n == e.ref;
            return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : Ph(this.props, e)
        }

        function r(t) {
            return this.shouldComponentUpdate = n, Td(e, t)
        }
        return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
    },
    forwardRef: Lh,
    flushSync: function(e, t) {
        return e(t)
    },
    unstable_batchedUpdates: function(e, t) {
        return e(t)
    },
    StrictMode: bd,
    Suspense: Fh,
    SuspenseList: Vh,
    lazy: function(e) {
        var t, n, r;

        function i(i) {
            if (t || (t = e()).then((function(e) {
                    n = e.default || e
                }), (function(e) {
                    r = e
                })), r) throw r;
            if (!n) throw t;
            return Td(n, i)
        }
        return i.displayName = "Lazy", i.__f = !0, i
    },
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return Zh.__n[e.__c].props.value
                }
            }
        }
    }
};
const sf = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? sh : ah;

function af(e) {
    const t = "function" == typeof e ? function(e) {
            let t;
            const n = new Set,
                r = (e, r) => {
                    const i = "function" == typeof e ? e(t) : e;
                    if (i !== t) {
                        const e = t;
                        t = r ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                    }
                },
                i = () => t,
                o = {
                    setState: r,
                    getState: i,
                    subscribe: (e, r, o) => r || o ? ((e, r = i, o = Object.is) => {
                        let s = r(t);

                        function a() {
                            const n = r(t);
                            if (!o(s, n)) {
                                const t = s;
                                e(s = n, t)
                            }
                        }
                        return n.add(a), () => n.delete(a)
                    })(e, r, o) : (n.add(e), () => n.delete(e)),
                    destroy: () => n.clear()
                };
            return t = e(r, i, o), o
        }(e) : e,
        n = (e = t.getState, n = Object.is) => {
            const [, r] = oh(e => e + 1, 0), i = t.getState(), o = ch(i), s = ch(e), a = ch(n), c = ch(!1), u = ch();
            let l;
            void 0 === u.current && (u.current = e(i));
            let d = !1;
            (o.current !== i || s.current !== e || a.current !== n || c.current) && (l = e(i), d = !n(u.current, l)), sf(() => {
                d && (u.current = l), o.current = i, s.current = e, a.current = n, c.current = !1
            });
            const h = ch(i);
            sf(() => {
                const e = () => {
                        try {
                            const e = t.getState(),
                                n = s.current(e);
                            a.current(u.current, n) || (o.current = e, u.current = n, r())
                        } catch (e) {
                            c.current = !0, r()
                        }
                    },
                    n = t.subscribe(e);
                return t.getState() !== h.current && e(), n
            }, []);
            const f = d ? l : u.current;
            return hh(f), f
        };
    return Object.assign(n, t), n[Symbol.iterator] = function() {
        const e = [n, t];
        return {
            next() {
                const t = e.length <= 0;
                return {
                    value: e.shift(),
                    done: t
                }
            }
        }
    }, n
}

function cf() {
    const e = Wd(void 0);
    return {
        Provider: ({
            initialStore: t,
            createStore: n,
            children: r
        }) => {
            const i = ch();
            return i.current || (t && (n || (n = () => t)), i.current = n()), Td(e.Provider, {
                value: i.current
            }, r)
        },
        useStore: (t, n = Object.is) => {
            const r = dh(e);
            if (!r) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return r(t, n)
        },
        useStoreApi: () => {
            const t = dh(e);
            if (!t) throw new Error("Seems like you have not used zustand provider as an ancestor.");
            return uh(() => ({
                getState: t.getState,
                setState: t.setState,
                subscribe: t.subscribe,
                destroy: t.destroy
            }), [t])
        }
    }
}
const uf = e => (t, n, r) => {
    const i = r.subscribe;
    return r.subscribe = (e, t, n) => {
        let o = e;
        if (t) {
            const i = (null == n ? void 0 : n.equalityFn) || Object.is;
            let s = e(r.getState());
            o = n => {
                const r = e(n);
                if (!i(s, r)) {
                    const e = s;
                    t(s = r, e)
                }
            }, (null == n ? void 0 : n.fireImmediately) && t(s, s)
        }
        return i(o)
    }, e(t, n, r)
};

function lf(e) {
    var t = -1,
        n = null == e ? 0 : e.length;
    for (this.__data__ = new yn; ++t < n;) this.add(e[t])
}

function df(e, t) {
    for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
        if (t(e[n], n, e)) return !0;
    return !1
}

function hf(e, t) {
    return e.has(t)
}

function ff(e, t, n, r, i, o) {
    var s = 1 & n,
        a = e.length,
        c = t.length;
    if (a != c && !(s && c > a)) return !1;
    var u = o.get(e),
        l = o.get(t);
    if (u && l) return u == t && l == e;
    var d = -1,
        h = !0,
        f = 2 & n ? new lf : void 0;
    for (o.set(e, t), o.set(t, e); ++d < a;) {
        var _ = e[d],
            p = t[d];
        if (r) var m = s ? r(p, _, d, t, e, o) : r(_, p, d, e, t, o);
        if (void 0 !== m) {
            if (m) continue;
            h = !1;
            break
        }
        if (f) {
            if (!df(t, (function(e, t) {
                    if (!hf(f, t) && (_ === e || i(_, e, n, r, o))) return f.push(t)
                }))) {
                h = !1;
                break
            }
        } else if (_ !== p && !i(_, p, n, r, o)) {
            h = !1;
            break
        }
    }
    return o.delete(e), o.delete(t), h
}

function _f(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e, r) {
        n[++t] = [r, e]
    })), n
}

function pf(e) {
    var t = -1,
        n = Array(e.size);
    return e.forEach((function(e) {
        n[++t] = e
    })), n
}
lf.prototype.add = lf.prototype.push = function(e) {
    return this.__data__.set(e, "__lodash_hash_undefined__"), this
}, lf.prototype.has = function(e) {
    return this.__data__.has(e)
};
var mf = u ? u.prototype : void 0,
    vf = mf ? mf.valueOf : void 0,
    gf = Object.prototype.hasOwnProperty,
    yf = Object.prototype.hasOwnProperty;

function Ef(e, t, n, r, i) {
    return e === t || (null == e || null == t || !H(e) && !H(t) ? e != e && t != t : function(e, t, n, r, i, o) {
        var s = Y(e),
            a = Y(t),
            c = s ? "[object Array]" : B(e),
            u = a ? "[object Array]" : B(t),
            l = "[object Object]" == (c = "[object Arguments]" == c ? "[object Object]" : c),
            d = "[object Object]" == (u = "[object Arguments]" == u ? "[object Object]" : u),
            h = c == u;
        if (h && ee(e)) {
            if (!ee(t)) return !1;
            s = !0, l = !1
        }
        if (h && !l) return o || (o = new tr), s || ce(e) ? ff(e, t, n, r, i, o) : function(e, t, n, r, i, o, s) {
            switch (n) {
                case "[object DataView]":
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case "[object ArrayBuffer]":
                    return !(e.byteLength != t.byteLength || !o(new Or(e), new Or(t)));
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                    return _n(+e, +t);
                case "[object Error]":
                    return e.name == t.name && e.message == t.message;
                case "[object RegExp]":
                case "[object String]":
                    return e == t + "";
                case "[object Map]":
                    var a = _f;
                case "[object Set]":
                    var c = 1 & r;
                    if (a || (a = pf), e.size != t.size && !c) return !1;
                    var u = s.get(e);
                    if (u) return u == t;
                    r |= 2, s.set(e, t);
                    var l = ff(a(e), a(t), r, i, o, s);
                    return s.delete(e), l;
                case "[object Symbol]":
                    if (vf) return vf.call(e) == vf.call(t)
            }
            return !1
        }(e, t, c, n, r, i, o);
        if (!(1 & n)) {
            var f = l && yf.call(e, "__wrapped__"),
                _ = d && yf.call(t, "__wrapped__");
            if (f || _) {
                var p = f ? e.value() : e,
                    m = _ ? t.value() : t;
                return o || (o = new tr), i(p, m, n, r, o)
            }
        }
        return !!h && (o || (o = new tr), function(e, t, n, r, i, o) {
            var s = 1 & n,
                a = kr(e),
                c = a.length;
            if (c != kr(t).length && !s) return !1;
            for (var u = c; u--;) {
                var l = a[u];
                if (!(s ? l in t : gf.call(t, l))) return !1
            }
            var d = o.get(e),
                h = o.get(t);
            if (d && h) return d == t && h == e;
            var f = !0;
            o.set(e, t), o.set(t, e);
            for (var _ = s; ++u < c;) {
                var p = e[l = a[u]],
                    m = t[l];
                if (r) var v = s ? r(m, p, l, t, e, o) : r(p, m, l, e, t, o);
                if (!(void 0 === v ? p === m || i(p, m, n, r, o) : v)) {
                    f = !1;
                    break
                }
                _ || (_ = "constructor" == l)
            }
            if (f && !_) {
                var g = e.constructor,
                    y = t.constructor;
                g != y && "constructor" in e && "constructor" in t && !("function" == typeof g && g instanceof g && "function" == typeof y && y instanceof y) && (f = !1)
            }
            return o.delete(e), o.delete(t), f
        }(e, t, n, r, i, o))
    }(e, t, n, r, Ef, i))
}

function Tf(e, t) {
    return Ef(e, t)
}
var Sf = 0;

function bf(e, t, n, r, i) {
    var o, s, a = {};
    for (s in t) "ref" == s ? o = t[s] : a[s] = t[s];
    var c = {
        type: e,
        props: a,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Sf,
        __source: r,
        __self: i
    };
    if ("function" == typeof e && (o = e.defaultProps))
        for (s in o) void 0 === a[s] && (a[s] = o[s]);
    return Bl.vnode && Bl.vnode(c), c
}
var Af = [],
    wf = [];

function If(e, t) {
    if (e && "undefined" != typeof document) {
        var n, r = !0 === t.prepend ? "prepend" : "append",
            i = !0 === t.singleTag,
            o = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
        if (i) {
            var s = Af.indexOf(o); - 1 === s && (s = Af.push(o) - 1, wf[s] = {}), n = wf[s] && wf[s][r] ? wf[s][r] : wf[s][r] = a()
        } else n = a();
        65279 === e.charCodeAt(0) && (e = e.substring(1)), n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
    }

    function a() {
        var e = document.createElement("style");
        if (e.setAttribute("type", "text/css"), t.attributes)
            for (var n = Object.keys(t.attributes), i = 0; i < n.length; i++) e.setAttribute(n[i], t.attributes[n[i]]);
        var s = "prepend" === r ? "afterbegin" : "beforeend";
        return o.insertAdjacentElement(s, e), e
    }
}
var Rf = function(e) {
        return function(t) {
            return null == e ? void 0 : e[t]
        }
    }({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }),
    kf = /[&<>"']/g,
    Pf = RegExp(kf.source);

function Df(e) {
    return (e = Rn(e)) && Pf.test(e) ? e.replace(kf, Rf) : e
}
var Of = Zn((function(e, t) {
    /*! For license information please see hls-parser.min.js.LICENSE.txt */
    self,
    e.exports = function() {
        return e = {
                851: (e, t, n) => {
                    var r = n(771),
                        i = r.getOptions,
                        o = r.setOptions,
                        s = n(463),
                        a = n(367),
                        c = n(890);
                    e.exports = {
                        parse: s,
                        stringify: a,
                        types: c,
                        getOptions: i,
                        setOptions: o
                    }
                },
                463: (e, t, n) => {
                    function r(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = o(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (c) throw s
                                }
                            }
                        }
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || o(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0
                        }
                    }

                    function s(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var a = n(771),
                        c = n(890),
                        u = c.Rendition,
                        l = c.Variant,
                        d = c.SessionData,
                        h = c.Key,
                        f = c.MediaInitializationSection,
                        _ = c.DateRange,
                        p = c.SpliceInfo,
                        m = c.MasterPlaylist,
                        v = c.MediaPlaylist,
                        g = c.Segment,
                        y = c.PartialSegment,
                        E = c.RenditionReport;

                    function T(e) {
                        return a.trim(e, '"')
                    }

                    function S(e) {
                        var t = a.splitAt(e, ",");
                        return {
                            duration: a.toNumber(t[0]),
                            title: decodeURIComponent(escape(t[1]))
                        }
                    }

                    function b(e) {
                        var t = a.splitAt(e, "@");
                        return {
                            length: a.toNumber(t[0]),
                            offset: t[1] ? a.toNumber(t[1]) : -1
                        }
                    }

                    function A(e, t) {
                        t.IV && e.compatibleVersion < 2 && (e.compatibleVersion = 2), (t.KEYFORMAT || t.KEYFORMATVERSIONS) && e.compatibleVersion < 5 && (e.compatibleVersion = 5)
                    }

                    function w(e) {
                        var t = a.splitByCommaWithPreservingQuotes(e),
                            n = {};
                        return t.forEach((function(e) {
                            var t, r, o = i(a.splitAt(e, "="), 2),
                                s = o[0],
                                c = o[1],
                                u = T(c);
                            switch (s) {
                                case "URI":
                                    n[s] = u;
                                    break;
                                case "START-DATE":
                                case "END-DATE":
                                    n[s] = new Date(u);
                                    break;
                                case "IV":
                                    n[s] = (t = u, 16 !== (r = a.hexToByteSequence(t)).length && a.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r);
                                    break;
                                case "BYTERANGE":
                                    n[s] = b(u);
                                    break;
                                case "RESOLUTION":
                                    n[s] = function(e) {
                                        var t = a.splitAt(e, "x");
                                        return {
                                            width: a.toNumber(t[0]),
                                            height: a.toNumber(t[1])
                                        }
                                    }(u);
                                    break;
                                case "END-ON-NEXT":
                                case "DEFAULT":
                                case "AUTOSELECT":
                                case "FORCED":
                                case "PRECISE":
                                case "CAN-BLOCK-RELOAD":
                                case "INDEPENDENT":
                                case "GAP":
                                    n[s] = "YES" === u;
                                    break;
                                case "DURATION":
                                case "PLANNED-DURATION":
                                case "BANDWIDTH":
                                case "AVERAGE-BANDWIDTH":
                                case "FRAME-RATE":
                                case "TIME-OFFSET":
                                case "CAN-SKIP-UNTIL":
                                case "HOLD-BACK":
                                case "PART-HOLD-BACK":
                                case "PART-TARGET":
                                case "BYTERANGE-START":
                                case "BYTERANGE-LENGTH":
                                case "LAST-MSN":
                                case "LAST-PART":
                                case "SKIPPED-SEGMENTS":
                                    n[s] = a.toNumber(u);
                                    break;
                                default:
                                    s.startsWith("SCTE35-") ? n[s] = a.hexToByteSequence(u) : s.startsWith("X-") ? n[s] = function(e) {
                                        return e.startsWith('"') ? T(e) : e.startsWith("0x") || e.startsWith("0X") ? a.hexToByteSequence(e) : a.toNumber(e)
                                    }(c) : n[s] = u
                            }
                        })), n
                    }

                    function I() {
                        a.INVALIDPLAYLIST("The file contains both media and master playlist tags.")
                    }

                    function R(e, t, n) {
                        var i, o = (i = t.attributes, new u({
                                type: i.TYPE,
                                uri: i.URI,
                                groupId: i["GROUP-ID"],
                                language: i.LANGUAGE,
                                assocLanguage: i["ASSOC-LANGUAGE"],
                                name: i.NAME,
                                isDefault: i.DEFAULT,
                                autoselect: i.AUTOSELECT,
                                forced: i.FORCED,
                                instreamId: i["INSTREAM-ID"],
                                characteristics: i.CHARACTERISTICS,
                                channels: i.CHANNELS
                            })),
                            s = e[a.camelify(n)],
                            c = function(e, t) {
                                var n, i = !1,
                                    o = r(e);
                                try {
                                    for (o.s(); !(n = o.n()).done;) {
                                        var s = n.value;
                                        if (s.name === t.name) return "All EXT-X-MEDIA tags in the same Group MUST have different NAME attributes.";
                                        s.isDefault && (i = !0)
                                    }
                                } catch (e) {
                                    o.e(e)
                                } finally {
                                    o.f()
                                }
                                return i && t.isDefault ? "EXT-X-MEDIA A Group MUST NOT have more than one member with a DEFAULT attribute of YES." : ""
                            }(s, o);
                        c && a.INVALIDPLAYLIST(c), s.push(o), o.isDefault && (e.currentRenditions[a.camelify(n)] = s.length - 1)
                    }

                    function k(e, t, n, i, o) {
                        var s, c = new l({
                                uri: n,
                                bandwidth: t.BANDWIDTH,
                                averageBandwidth: t["AVERAGE-BANDWIDTH"],
                                codecs: t.CODECS,
                                resolution: t.RESOLUTION,
                                frameRate: t["FRAME-RATE"],
                                hdcpLevel: t["HDCP-LEVEL"]
                            }),
                            u = r(e);
                        try {
                            for (u.s(); !(s = u.n()).done;) {
                                var d = s.value;
                                if ("EXT-X-MEDIA" === d.name) {
                                    var h = d.attributes,
                                        f = h.TYPE;
                                    if (f && h["GROUP-ID"] || a.INVALIDPLAYLIST("EXT-X-MEDIA TYPE attribute is REQUIRED."), t[f] === h["GROUP-ID"] && (R(c, d, f), "CLOSED-CAPTIONS" === f)) {
                                        var _, p = r(c.closedCaptions);
                                        try {
                                            for (p.s(); !(_ = p.n()).done;) {
                                                var m = _.value.instreamId;
                                                if (m && m.startsWith("SERVICE") && o.compatibleVersion < 7) {
                                                    o.compatibleVersion = 7;
                                                    break
                                                }
                                            }
                                        } catch (e) {
                                            p.e(e)
                                        } finally {
                                            p.f()
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                        return function(e, t, n) {
                            ["AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach((function(r) {
                                "CLOSED-CAPTIONS" === r && "NONE" === e[r] ? (n.isClosedCaptionsNone = !0, t.closedCaptions = []) : e[r] && !t[a.camelify(r)].find((function(t) {
                                    return t.groupId === e[r]
                                })) && a.INVALIDPLAYLIST("".concat(r, " attribute MUST match the value of the GROUP-ID attribute of an EXT-X-MEDIA tag whose TYPE attribute is ").concat(r, "."))
                            }))
                        }(t, c, o), c.isIFrameOnly = i, c
                    }

                    function P(e, t) {
                        if (e.method !== t.method) return !1;
                        if (e.uri !== t.uri) return !1;
                        if (e.iv) {
                            if (!t.iv) return !1;
                            if (e.iv.length !== t.iv.length) return !1;
                            for (var n = 0; n < e.iv.length; n++)
                                if (e.iv[n] !== t.iv[n]) return !1
                        } else if (t.iv) return !1;
                        return e.format === t.format && e.formatVersion === t.formatVersion
                    }

                    function D(e, t, n, r, i, o, s) {
                        for (var c = new g({
                                uri: t,
                                mediaSequenceNumber: i,
                                discontinuitySequence: o
                            }), u = !1, l = !1, d = function(t) {
                                var n = e[t],
                                    r = n.name,
                                    i = n.value,
                                    o = n.attributes;
                                if ("EXTINF" === r) !Number.isInteger(i.duration) && s.compatibleVersion < 3 && (s.compatibleVersion = 3), Math.round(i.duration) > s.targetDuration && a.INVALIDPLAYLIST("EXTINF duration, when rounded to the nearest integer, MUST be less than or equal to the target duration"), c.duration = i.duration, c.title = i.title;
                                else if ("EXT-X-BYTERANGE" === r) s.compatibleVersion < 4 && (s.compatibleVersion = 4), c.byterange = i;
                                else if ("EXT-X-DISCONTINUITY" === r) c.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-DISCONTINUITY must appear before the first EXT-X-PART tag of the Parent Segment."), c.discontinuity = !0;
                                else if ("EXT-X-KEY" === r) c.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-KEY must appear before the first EXT-X-PART tag of the Parent Segment."), A(s, o), c.key = new h({
                                    method: o.METHOD,
                                    uri: o.URI,
                                    iv: o.IV,
                                    format: o.KEYFORMAT,
                                    formatVersion: o.KEYFORMATVERSIONS
                                });
                                else if ("EXT-X-MAP" === r) c.parts.length > 0 && a.INVALIDPLAYLIST("EXT-X-MAP must appear before the first EXT-X-PART tag of the Parent Segment."), s.compatibleVersion < 5 && (s.compatibleVersion = 5), s.hasMap = !0, c.map = new f({
                                    uri: o.URI,
                                    byterange: o.BYTERANGE
                                });
                                else if ("EXT-X-PROGRAM-DATE-TIME" === r) c.programDateTime = i;
                                else if ("EXT-X-DATERANGE" === r) {
                                    var d = {};
                                    Object.keys(o).forEach((function(e) {
                                        (e.startsWith("SCTE35-") || e.startsWith("X-")) && (d[e] = o[e])
                                    })), c.dateRange = new _({
                                        id: o.ID,
                                        classId: o.CLASS,
                                        start: o["START-DATE"],
                                        end: o["END-DATE"],
                                        duration: o.DURATION,
                                        plannedDuration: o["PLANNED-DURATION"],
                                        endOnNext: o["END-ON-NEXT"],
                                        attributes: d
                                    })
                                } else if ("EXT-X-CUE-OUT" === r) c.markers.push(new p({
                                    type: "OUT",
                                    duration: i
                                }));
                                else if ("EXT-X-CUE-IN" === r) c.markers.push(new p({
                                    type: "IN"
                                }));
                                else if ("EXT-X-CUE-OUT-CONT" === r || "EXT-X-CUE" === r || "EXT-OATCLS-SCTE35" === r || "EXT-X-ASSET" === r || "EXT-X-SCTE35" === r) c.markers.push(new p({
                                    type: "RAW",
                                    tagName: r,
                                    value: i
                                }));
                                else if ("EXT-X-PRELOAD-HINT" !== r || o.TYPE)
                                    if ("EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE && l) a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist.");
                                    else if ("EXT-X-PART" !== r && "EXT-X-PRELOAD-HINT" !== r || o.URI) {
                                    if ("EXT-X-PRELOAD-HINT" === r && "MAP" === o.TYPE) u && a.INVALIDPLAYLIST("Servers should not add more than one EXT-X-PRELOAD-HINT tag with the same TYPE attribute to a Playlist."), u = !0, s.hasMap = !0, c.map = new f({
                                        hint: !0,
                                        uri: o.URI,
                                        byterange: {
                                            length: o["BYTERANGE-LENGTH"],
                                            offset: o["BYTERANGE-START"] || 0
                                        }
                                    });
                                    else if ("EXT-X-PART" === r || "EXT-X-PRELOAD-HINT" === r && "PART" === o.TYPE) {
                                        "EXT-X-PART" !== r || o.DURATION || a.INVALIDPLAYLIST("EXT-X-PART: DURATION attribute is mandatory"), "EXT-X-PRELOAD-HINT" === r && (l = !0);
                                        var m = new y({
                                            hint: "EXT-X-PRELOAD-HINT" === r,
                                            uri: o.URI,
                                            byterange: "EXT-X-PART" === r ? o.BYTERANGE : {
                                                length: o["BYTERANGE-LENGTH"],
                                                offset: o["BYTERANGE-START"] || 0
                                            },
                                            duration: o.DURATION,
                                            independent: o.INDEPENDENT,
                                            gap: o.GAP
                                        });
                                        c.parts.push(m)
                                    }
                                } else a.INVALIDPLAYLIST("EXT-X-PART / EXT-X-PRELOAD-HINT: URI attribute is mandatory");
                                else a.INVALIDPLAYLIST("EXT-X-PRELOAD-HINT: TYPE attribute is mandatory")
                            }, m = n; m <= r; m++) d(m);
                        return c
                    }

                    function O(e, t, n, r, i) {
                        var o = t.discontinuity,
                            s = t.key,
                            c = t.map,
                            u = t.byterange,
                            l = t.uri;
                        if (o && (t.discontinuitySequence = n + 1), s || (t.key = r), c || (t.map = i), u && -1 === u.offset) {
                            var d = e.segments;
                            if (d.length > 0) {
                                var h = d[d.length - 1];
                                h.byterange && h.uri === l ? u.offset = h.byterange.offset + h.byterange.length : a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST be a sub-range of the same media resource")
                            } else a.INVALIDPLAYLIST("If offset of EXT-X-BYTERANGE is not present, a previous Media Segment MUST appear in the Playlist file")
                        }
                        return e.segments.push(t), [t.discontinuitySequence, t.key, t.map]
                    }

                    function C(e, t) {
                        var n = i(function(e) {
                                var t = e.indexOf(":");
                                return -1 === t ? [e.slice(1).trim(), null] : [e.slice(1, t).trim(), e.slice(t + 1).trim()]
                            }(e), 2),
                            r = n[0],
                            o = n[1],
                            s = function(e) {
                                switch (e) {
                                    case "EXTM3U":
                                    case "EXT-X-VERSION":
                                        return "Basic";
                                    case "EXTINF":
                                    case "EXT-X-BYTERANGE":
                                    case "EXT-X-DISCONTINUITY":
                                    case "EXT-X-KEY":
                                    case "EXT-X-MAP":
                                    case "EXT-X-PROGRAM-DATE-TIME":
                                    case "EXT-X-DATERANGE":
                                    case "EXT-X-CUE-OUT":
                                    case "EXT-X-CUE-IN":
                                    case "EXT-X-CUE-OUT-CONT":
                                    case "EXT-X-CUE":
                                    case "EXT-OATCLS-SCTE35":
                                    case "EXT-X-ASSET":
                                    case "EXT-X-SCTE35":
                                    case "EXT-X-PART":
                                    case "EXT-X-PRELOAD-HINT":
                                        return "Segment";
                                    case "EXT-X-TARGETDURATION":
                                    case "EXT-X-MEDIA-SEQUENCE":
                                    case "EXT-X-DISCONTINUITY-SEQUENCE":
                                    case "EXT-X-ENDLIST":
                                    case "EXT-X-PLAYLIST-TYPE":
                                    case "EXT-X-I-FRAMES-ONLY":
                                    case "EXT-X-SERVER-CONTROL":
                                    case "EXT-X-PART-INF":
                                    case "EXT-X-RENDITION-REPORT":
                                    case "EXT-X-SKIP":
                                        return "MediaPlaylist";
                                    case "EXT-X-MEDIA":
                                    case "EXT-X-STREAM-INF":
                                    case "EXT-X-I-FRAME-STREAM-INF":
                                    case "EXT-X-SESSION-DATA":
                                    case "EXT-X-SESSION-KEY":
                                        return "MasterPlaylist";
                                    case "EXT-X-INDEPENDENT-SEGMENTS":
                                    case "EXT-X-START":
                                        return "MediaorMasterPlaylist";
                                    default:
                                        return "Unknown"
                                }
                            }(r);
                        if (function(e, t) {
                                if ("Segment" === e || "MediaPlaylist" === e) return void 0 === t.isMasterPlaylist ? void(t.isMasterPlaylist = !1) : void(t.isMasterPlaylist && I());
                                if ("MasterPlaylist" === e) {
                                    if (void 0 === t.isMasterPlaylist) return void(t.isMasterPlaylist = !0);
                                    !1 === t.isMasterPlaylist && I()
                                }
                            }(s, t), "Unknown" === s) return null;
                        "MediaPlaylist" === s && "EXT-X-RENDITION-REPORT" !== r && (t.hash[r] && a.INVALIDPLAYLIST("There MUST NOT be more than one Media Playlist tag of each type in any Media Playlist"), t.hash[r] = !0);
                        var c = i(function(e, t) {
                            switch (e) {
                                case "EXTM3U":
                                case "EXT-X-DISCONTINUITY":
                                case "EXT-X-ENDLIST":
                                case "EXT-X-I-FRAMES-ONLY":
                                case "EXT-X-INDEPENDENT-SEGMENTS":
                                case "EXT-X-CUE-IN":
                                    return [null, null];
                                case "EXT-X-VERSION":
                                case "EXT-X-TARGETDURATION":
                                case "EXT-X-MEDIA-SEQUENCE":
                                case "EXT-X-DISCONTINUITY-SEQUENCE":
                                case "EXT-X-CUE-OUT":
                                    return [a.toNumber(t), null];
                                case "EXT-X-KEY":
                                case "EXT-X-MAP":
                                case "EXT-X-DATERANGE":
                                case "EXT-X-MEDIA":
                                case "EXT-X-STREAM-INF":
                                case "EXT-X-I-FRAME-STREAM-INF":
                                case "EXT-X-SESSION-DATA":
                                case "EXT-X-SESSION-KEY":
                                case "EXT-X-START":
                                case "EXT-X-SERVER-CONTROL":
                                case "EXT-X-PART-INF":
                                case "EXT-X-PART":
                                case "EXT-X-PRELOAD-HINT":
                                case "EXT-X-RENDITION-REPORT":
                                case "EXT-X-SKIP":
                                    return [null, w(t)];
                                case "EXTINF":
                                    return [S(t), null];
                                case "EXT-X-BYTERANGE":
                                    return [b(t), null];
                                case "EXT-X-PROGRAM-DATE-TIME":
                                    return [new Date(t), null];
                                case "EXT-X-PLAYLIST-TYPE":
                                default:
                                    return [t, null]
                            }
                        }(r, o), 2);
                        return {
                            name: r,
                            category: s,
                            value: c[0],
                            attributes: c[1]
                        }
                    }
                    e.exports = function(e) {
                        var t = {
                                version: void 0,
                                isMasterPlaylist: void 0,
                                hasMap: !1,
                                targetDuration: 0,
                                compatibleVersion: 1,
                                isClosedCaptionsNone: !1,
                                hash: {}
                            },
                            n = function(e, t) {
                                var n;
                                return t.isMasterPlaylist ? n = function(e, t) {
                                    var n, o = new m,
                                        s = r(e.entries());
                                    try {
                                        for (s.s(); !(n = s.n()).done;) {
                                            var c = i(n.value, 2),
                                                u = c[0],
                                                l = c[1],
                                                f = l.name,
                                                _ = l.value,
                                                p = l.attributes;
                                            if ("EXT-X-VERSION" === f) o.version = _;
                                            else if ("EXT-X-STREAM-INF" === f) {
                                                var v = e[u + 1];
                                                ("string" != typeof v || v.startsWith("#EXT")) && a.INVALIDPLAYLIST("EXT-X-STREAM-INF must be followed by a URI line");
                                                var g = k(e, p, v, !1, t);
                                                g && o.variants.push(g)
                                            } else if ("EXT-X-I-FRAME-STREAM-INF" === f) {
                                                var y = k(e, p, p.URI, !0, t);
                                                y && o.variants.push(y)
                                            } else "EXT-X-SESSION-DATA" === f ? function() {
                                                var e = new d({
                                                    id: p["DATA-ID"],
                                                    value: p.VALUE,
                                                    uri: p.URI,
                                                    language: p.LANGUAGE
                                                });
                                                o.sessionDataList.find((function(t) {
                                                    return t.id === e.id && t.language === e.language
                                                })) && a.INVALIDPLAYLIST("A Playlist MUST NOT contain more than one EXT-X-SESSION-DATA tag with the same DATA-ID attribute and the same LANGUAGE attribute."), o.sessionDataList.push(e)
                                            }() : "EXT-X-SESSION-KEY" === f ? function() {
                                                "NONE" === p.METHOD && a.INVALIDPLAYLIST("EXT-X-SESSION-KEY: The value of the METHOD attribute MUST NOT be NONE");
                                                var e = new h({
                                                    method: p.METHOD,
                                                    uri: p.URI,
                                                    iv: p.IV,
                                                    format: p.KEYFORMAT,
                                                    formatVersion: p.KEYFORMATVERSIONS
                                                });
                                                o.sessionKeyList.find((function(t) {
                                                    return P(t, e)
                                                })) && a.INVALIDPLAYLIST("A Master Playlist MUST NOT contain more than one EXT-X-SESSION-KEY tag with the same METHOD, URI, IV, KEYFORMAT, and KEYFORMATVERSIONS attribute values."), A(t, p), o.sessionKeyList.push(e)
                                            }() : "EXT-X-INDEPENDENT-SEGMENTS" === f ? (o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0) : "EXT-X-START" === f && (o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof p["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                                offset: p["TIME-OFFSET"],
                                                precise: p.PRECISE || !1
                                            })
                                        }
                                    } catch (e) {
                                        s.e(e)
                                    } finally {
                                        s.f()
                                    }
                                    if (t.isClosedCaptionsNone) {
                                        var E, T = r(o.variants);
                                        try {
                                            for (T.s(); !(E = T.n()).done;) E.value.closedCaptions.length > 0 && a.INVALIDPLAYLIST("If there is a variant with CLOSED-CAPTIONS attribute of NONE, all EXT-X-STREAM-INF tags MUST have this attribute with a value of NONE")
                                        } catch (e) {
                                            T.e(e)
                                        } finally {
                                            T.f()
                                        }
                                    }
                                    return o
                                }(e, t) : !(n = function(e, t) {
                                    var n, o = new v,
                                        s = -1,
                                        c = 0,
                                        u = !1,
                                        l = 0,
                                        d = null,
                                        h = null,
                                        f = !1,
                                        _ = r(e.entries());
                                    try {
                                        for (_.s(); !(n = _.n()).done;) {
                                            var p = i(n.value, 2),
                                                m = p[0],
                                                g = p[1],
                                                y = g.name,
                                                T = g.value,
                                                S = g.attributes;
                                            if ("Segment" !== g.category) {
                                                if ("EXT-X-VERSION" === y) void 0 === o.version ? o.version = T : a.INVALIDPLAYLIST("A Playlist file MUST NOT contain more than one EXT-X-VERSION tag.");
                                                else if ("EXT-X-TARGETDURATION" === y) o.targetDuration = t.targetDuration = T;
                                                else if ("EXT-X-MEDIA-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-MEDIA-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), o.mediaSequenceBase = c = T;
                                                else if ("EXT-X-DISCONTINUITY-SEQUENCE" === y) o.segments.length > 0 && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before the first Media Segment in the Playlist."), u && a.INVALIDPLAYLIST("The EXT-X-DISCONTINUITY-SEQUENCE tag MUST appear before any EXT-X-DISCONTINUITY tag."), o.discontinuitySequenceBase = l = T;
                                                else if ("EXT-X-ENDLIST" === y) o.endlist = !0;
                                                else if ("EXT-X-PLAYLIST-TYPE" === y) o.playlistType = T;
                                                else if ("EXT-X-I-FRAMES-ONLY" === y) t.compatibleVersion < 4 && (t.compatibleVersion = 4), o.isIFrame = !0;
                                                else if ("EXT-X-INDEPENDENT-SEGMENTS" === y) o.independentSegments && a.INVALIDPLAYLIST("EXT-X-INDEPENDENT-SEGMENTS tag MUST NOT appear more than once in a Playlist"), o.independentSegments = !0;
                                                else if ("EXT-X-START" === y) o.start && a.INVALIDPLAYLIST("EXT-X-START tag MUST NOT appear more than once in a Playlist"), "number" != typeof S["TIME-OFFSET"] && a.INVALIDPLAYLIST("EXT-X-START: TIME-OFFSET attribute is REQUIRED"), o.start = {
                                                    offset: S["TIME-OFFSET"],
                                                    precise: S.PRECISE || !1
                                                };
                                                else if ("EXT-X-SERVER-CONTROL" === y) S["CAN-BLOCK-RELOAD"] || a.INVALIDPLAYLIST("EXT-X-SERVER-CONTROL: CAN-BLOCK-RELOAD=YES is mandatory for Low-Latency HLS"), o.lowLatencyCompatibility = {
                                                    canBlockReload: S["CAN-BLOCK-RELOAD"],
                                                    canSkipUntil: S["CAN-SKIP-UNTIL"],
                                                    holdBack: S["HOLD-BACK"],
                                                    partHoldBack: S["PART-HOLD-BACK"]
                                                };
                                                else if ("EXT-X-PART-INF" === y) S["PART-TARGET"] || a.INVALIDPLAYLIST("EXT-X-PART-INF: PART-TARGET attribute is mandatory"), o.partTargetDuration = S["PART-TARGET"];
                                                else if ("EXT-X-RENDITION-REPORT" === y) S.URI || a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI attribute is mandatory"), 0 === S.URI.search(/^[a-z]+:/) && a.INVALIDPLAYLIST("EXT-X-RENDITION-REPORT: URI must be relative to the playlist uri"), o.renditionReports.push(new E({
                                                    uri: S.URI,
                                                    lastMSN: S["LAST-MSN"],
                                                    lastPart: S["LAST-PART"]
                                                }));
                                                else if ("EXT-X-SKIP" === y) S["SKIPPED-SEGMENTS"] || a.INVALIDPLAYLIST("EXT-X-SKIP: SKIPPED-SEGMENTS attribute is mandatory"), t.compatibleVersion < 9 && (t.compatibleVersion = 9), o.skip = S["SKIPPED-SEGMENTS"], c += o.skip;
                                                else if ("string" == typeof g) {
                                                    -1 === s && a.INVALIDPLAYLIST("A URI line is not preceded by any segment tags"), o.targetDuration || a.INVALIDPLAYLIST("The EXT-X-TARGETDURATION tag is REQUIRED");
                                                    var b = D(e, g, s, m - 1, c++, l, t);
                                                    if (b) {
                                                        var A = i(O(o, b, l, d, h), 3);
                                                        l = A[0], d = A[1], h = A[2], !f && b.parts.length > 0 && (f = !0)
                                                    }
                                                    s = -1
                                                }
                                            } else -1 === s && (s = m), "EXT-X-DISCONTINUITY" === y && (u = !0)
                                        }
                                    } catch (e) {
                                        _.e(e)
                                    } finally {
                                        _.f()
                                    }
                                    if (-1 !== s) {
                                        var w = D(e, "", s, e.length - 1, c++, l, t);
                                        if (w) {
                                            var I = w.parts;
                                            I.length > 0 && !o.endlist && !I[I.length - 1].hint && a.INVALIDPLAYLIST("If the Playlist contains EXT-X-PART tags and does not contain an EXT-X-ENDLIST tag, the Playlist must contain an EXT-X-PRELOAD-HINT tag with a TYPE=PART attribute"), O(o, w, d, h), !f && w.parts.length > 0 && (f = !0)
                                        }
                                    }
                                    return function(e) {
                                        for (var t = new Map, n = new Map, i = !1, o = !1, s = e.length - 1; s >= 0; s--) {
                                            var c = e[s],
                                                u = c.programDateTime,
                                                l = c.dateRange;
                                            if (u && (o = !0), l && l.start) {
                                                i = !0, l.endOnNext && (l.end || l.duration) && a.INVALIDPLAYLIST("An EXT-X-DATERANGE tag with an END-ON-NEXT=YES attribute MUST NOT contain DURATION or END-DATE attributes.");
                                                var d = l.start.getTime(),
                                                    h = l.duration || 0;
                                                l.end && l.duration && d + 1e3 * h !== l.end.getTime() && a.INVALIDPLAYLIST("END-DATE MUST be equal to the value of the START-DATE attribute plus the value of the DURATION"), l.endOnNext && (l.end = t.get(l.classId)), t.set(l.classId, l.start);
                                                var f = l.end ? l.end.getTime() : l.start.getTime() + 1e3 * (l.duration || 0),
                                                    _ = n.get(l.classId);
                                                if (_) {
                                                    var p, m = r(_);
                                                    try {
                                                        for (m.s(); !(p = m.n()).done;) {
                                                            var v = p.value;
                                                            (v.start <= d && v.end > d || v.start >= d && v.start < f) && a.INVALIDPLAYLIST("DATERANGE tags with the same CLASS should not overlap")
                                                        }
                                                    } catch (e) {
                                                        m.e(e)
                                                    } finally {
                                                        m.f()
                                                    }
                                                    _.push({
                                                        start: d,
                                                        end: f
                                                    })
                                                } else n.set(l.classId, [{
                                                    start: d,
                                                    end: f
                                                }])
                                            }
                                        }
                                        i && !o && a.INVALIDPLAYLIST("If a Playlist contains an EXT-X-DATERANGE tag, it MUST also contain at least one EXT-X-PROGRAM-DATE-TIME tag.")
                                    }(o.segments), o.lowLatencyCompatibility && function(e, t) {
                                        var n = e.lowLatencyCompatibility,
                                            o = e.targetDuration,
                                            s = e.partTargetDuration,
                                            c = e.segments,
                                            u = e.renditionReports,
                                            l = n.canSkipUntil,
                                            d = n.holdBack,
                                            h = n.partHoldBack;
                                        if (l < 6 * o && a.INVALIDPLAYLIST("The Skip Boundary must be at least six times the EXT-X-TARGETDURATION."), d < 3 * o && a.INVALIDPLAYLIST("HOLD-BACK must be at least three times the EXT-X-TARGETDURATION."), t) {
                                            void 0 === s && a.INVALIDPLAYLIST("EXT-X-PART-INF is required if a Playlist contains one or more EXT-X-PART tags"), void 0 === h && a.INVALIDPLAYLIST("EXT-X-PART: PART-HOLD-BACK attribute is mandatory"), h < s && a.INVALIDPLAYLIST("PART-HOLD-BACK must be at least PART-TARGET");
                                            var f, _ = r(c.entries());
                                            try {
                                                for (_.s(); !(f = _.n()).done;) {
                                                    var p = i(f.value, 2),
                                                        m = p[0],
                                                        v = p[1].parts;
                                                    v.length > 0 && m < c.length - 3 && a.INVALIDPLAYLIST("Remove EXT-X-PART tags from the Playlist after they are greater than three target durations from the end of the Playlist.");
                                                    var g, y = r(v.entries());
                                                    try {
                                                        for (y.s(); !(g = y.n()).done;) {
                                                            var E = i(g.value, 2),
                                                                T = E[0],
                                                                S = E[1].duration;
                                                            void 0 !== S && (S > s && a.INVALIDPLAYLIST("PART-TARGET is the maximum duration of any Partial Segment"), T < v.length - 1 && S < .85 * s && a.INVALIDPLAYLIST("All Partial Segments except the last part of a segment must have a duration of at least 85% of PART-TARGET"))
                                                        }
                                                    } catch (e) {
                                                        y.e(e)
                                                    } finally {
                                                        y.f()
                                                    }
                                                }
                                            } catch (e) {
                                                _.e(e)
                                            } finally {
                                                _.f()
                                            }
                                        }
                                        var b, A = r(u);
                                        try {
                                            for (A.s(); !(b = A.n()).done;) {
                                                var w = b.value,
                                                    I = c[c.length - 1];
                                                w.lastMSN || (w.lastMSN = I.mediaSequenceNumber), !w.lastPart && I.parts.length > 0 && (w.lastPart = I.parts.length - 1)
                                            }
                                        } catch (e) {
                                            A.e(e)
                                        } finally {
                                            A.f()
                                        }
                                    }(o, f), o
                                }(e, t)).isIFrame && t.hasMap && t.compatibleVersion < 6 && (t.compatibleVersion = 6), t.compatibleVersion > 1 && (!n.version || n.version < t.compatibleVersion) && a.INVALIDPLAYLIST("EXT-X-VERSION needs to be ".concat(t.compatibleVersion, " or higher.")), n
                            }(function(e, t) {
                                var n = [];
                                return e.split("\n").forEach((function(e) {
                                    var r = e.trim();
                                    if (r)
                                        if (r.startsWith("#")) {
                                            if (r.startsWith("#EXT")) {
                                                var i = C(r, t);
                                                return void(i && n.push(i))
                                            }
                                        } else n.push(r)
                                })), 0 !== n.length && "EXTM3U" === n[0].name || a.INVALIDPLAYLIST("The EXTM3U tag MUST be the first line."), n
                            }(e, t), t);
                        return n.source = e, n
                    }
                },
                367: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || s(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = s(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var r = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return r >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[r++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var o, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, o = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (c) throw o
                                }
                            }
                        }
                    }

                    function s(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }

                    function c(e, t, n) {
                        return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                            var r = function(e, t) {
                                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = _(e)););
                                return e
                            }(e, t);
                            if (r) {
                                var i = Object.getOwnPropertyDescriptor(r, t);
                                return i.get ? i.get.call(n) : i.value
                            }
                        })(e, t, n || e)
                    }

                    function u(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function l(e) {
                        var t = "function" == typeof Map ? new Map : void 0;
                        return (l = function(e) {
                            if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                            var n;
                            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== t) {
                                if (t.has(e)) return t.get(e);
                                t.set(e, r)
                            }

                            function r() {
                                return d(e, arguments, _(this).constructor)
                            }
                            return r.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: r,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), f(r, e)
                        })(e)
                    }

                    function d(e, t, n) {
                        return (d = h() ? Reflect.construct : function(e, t, n) {
                            var r = [null];
                            r.push.apply(r, t);
                            var i = new(Function.bind.apply(e, r));
                            return n && f(i, n.prototype), i
                        }).apply(null, arguments)
                    }

                    function h() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }

                    function f(e, t) {
                        return (f = Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t, e
                        })(e, t)
                    }

                    function _(e) {
                        return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }
                    var p = n(771),
                        m = ["#EXTINF", "#EXT-X-BYTERANGE", "#EXT-X-DISCONTINUITY", "#EXT-X-STREAM-INF", "#EXT-X-CUE-OUT", "#EXT-X-CUE-IN", "#EXT-X-KEY", "#EXT-X-MAP"],
                        v = ["#EXT-X-MEDIA"],
                        g = function(e) {
                            ! function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && f(e, t)
                            }(o, e);
                            var t, n, r, i = (t = o, n = h(), function() {
                                var e, r = _(t);
                                if (n) {
                                    var i = _(this).constructor;
                                    e = Reflect.construct(r, arguments, i)
                                } else e = r.apply(this, arguments);
                                return u(this, e)
                            });

                            function o(e) {
                                var t;
                                return function(e, t) {
                                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                }(this, o), (t = i.call(this)).baseUri = e, t
                            }
                            return (r = [{
                                key: "push",
                                value: function() {
                                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                                    for (var i = function() {
                                            var t = a[s];
                                            if (!t.startsWith("#")) return c(_(o.prototype), "push", e).call(e, t), "continue";
                                            if (m.some((function(e) {
                                                    return t.startsWith(e)
                                                }))) return c(_(o.prototype), "push", e).call(e, t), "continue";
                                            if (e.includes(t)) {
                                                if (v.some((function(e) {
                                                        return t.startsWith(e)
                                                    }))) return "continue";
                                                p.INVALIDPLAYLIST("Redundant item (".concat(t, ")"))
                                            }
                                            c(_(o.prototype), "push", e).call(e, t)
                                        }, s = 0, a = n; s < a.length; s++) i()
                                }
                            }]) && function(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }(o.prototype, r), o
                        }(l(Array));

                    function y(e, t) {
                        var n = 1e3;
                        t && (n = Math.pow(10, t));
                        var r = Math.round(e * n) / n;
                        return t ? r.toFixed(t) : r
                    }

                    function E(e) {
                        var t = e.toString(10),
                            n = t.indexOf(".");
                        return -1 === n ? 0 : t.length - n - 1
                    }

                    function T(e) {
                        var t = ['DATA-ID="'.concat(e.id, '"')];
                        return e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.value ? t.push('VALUE="'.concat(e.value, '"')) : e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-SESSION-DATA:".concat(t.join(","))
                    }

                    function S(e, t) {
                        var n = t ? "#EXT-X-SESSION-KEY" : "#EXT-X-KEY",
                            r = ["METHOD=".concat(e.method)];
                        return e.uri && r.push('URI="'.concat(e.uri, '"')), e.iv && (16 !== e.iv.length && p.INVALIDPLAYLIST("IV must be a 128-bit unsigned integer"), r.push("IV=".concat(p.byteSequenceToHex(e.iv)))), e.format && r.push('KEYFORMAT="'.concat(e.format, '"')), e.formatVersion && r.push('KEYFORMATVERSIONS="'.concat(e.formatVersion, '"')), "".concat(n, ":").concat(r.join(","))
                    }

                    function b(e, t) {
                        var n = t.isIFrameOnly ? "#EXT-X-I-FRAME-STREAM-INF" : "#EXT-X-STREAM-INF",
                            r = ["BANDWIDTH=".concat(t.bandwidth)];
                        if (t.averageBandwidth && r.push("AVERAGE-BANDWIDTH=".concat(t.averageBandwidth)), t.isIFrameOnly && r.push('URI="'.concat(t.uri, '"')), t.codecs && r.push('CODECS="'.concat(t.codecs, '"')), t.resolution && r.push("RESOLUTION=".concat(t.resolution.width, "x").concat(t.resolution.height)), t.frameRate && r.push("FRAME-RATE=".concat(y(t.frameRate, 3))), t.hdcpLevel && r.push("HDCP-LEVEL=".concat(t.hdcpLevel)), t.audio.length > 0) {
                            r.push('AUDIO="'.concat(t.audio[0].groupId, '"'));
                            var i, s = o(t.audio);
                            try {
                                for (s.s(); !(i = s.n()).done;) {
                                    var a = i.value;
                                    e.push(A(a))
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                        }
                        if (t.video.length > 0) {
                            r.push('VIDEO="'.concat(t.video[0].groupId, '"'));
                            var c, u = o(t.video);
                            try {
                                for (u.s(); !(c = u.n()).done;) {
                                    var l = c.value;
                                    e.push(A(l))
                                }
                            } catch (e) {
                                u.e(e)
                            } finally {
                                u.f()
                            }
                        }
                        if (t.subtitles.length > 0) {
                            r.push('SUBTITLES="'.concat(t.subtitles[0].groupId, '"'));
                            var d, h = o(t.subtitles);
                            try {
                                for (h.s(); !(d = h.n()).done;) {
                                    var f = d.value;
                                    e.push(A(f))
                                }
                            } catch (e) {
                                h.e(e)
                            } finally {
                                h.f()
                            }
                        }
                        if (p.getOptions().allowClosedCaptionsNone && 0 === t.closedCaptions.length) r.push("CLOSED-CAPTIONS=NONE");
                        else if (t.closedCaptions.length > 0) {
                            r.push('CLOSED-CAPTIONS="'.concat(t.closedCaptions[0].groupId, '"'));
                            var _, m = o(t.closedCaptions);
                            try {
                                for (m.s(); !(_ = m.n()).done;) {
                                    var v = _.value;
                                    e.push(A(v))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }
                        e.push("".concat(n, ":").concat(r.join(","))), t.isIFrameOnly || e.push("".concat(t.uri))
                    }

                    function A(e) {
                        var t = ["TYPE=".concat(e.type), 'GROUP-ID="'.concat(e.groupId, '"'), 'NAME="'.concat(e.name, '"')];
                        return void 0 !== e.isDefault && t.push("DEFAULT=".concat(e.isDefault ? "YES" : "NO")), void 0 !== e.autoselect && t.push("AUTOSELECT=".concat(e.autoselect ? "YES" : "NO")), void 0 !== e.forced && t.push("FORCED=".concat(e.forced ? "YES" : "NO")), e.language && t.push('LANGUAGE="'.concat(e.language, '"')), e.assocLanguage && t.push('ASSOC-LANGUAGE="'.concat(e.assocLanguage, '"')), e.instreamId && t.push('INSTREAM-ID="'.concat(e.instreamId, '"')), e.characteristics && t.push('CHARACTERISTICS="'.concat(e.characteristics, '"')), e.channels && t.push('CHANNELS="'.concat(e.channels, '"')), e.uri && t.push('URI="'.concat(e.uri, '"')), "#EXT-X-MEDIA:".concat(t.join(","))
                    }

                    function w(e, t, n, r) {
                        var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                            o = !1;
                        if (t.byterange && e.push("#EXT-X-BYTERANGE:".concat(R(t.byterange))), t.discontinuity && e.push("#EXT-X-DISCONTINUITY"), t.key) {
                            var s = S(t.key);
                            s !== n && (e.push(s), n = s)
                        }
                        if (t.map) {
                            var a = I(t.map);
                            a !== r && (e.push(a), r = a)
                        }
                        if (t.programDateTime && e.push("#EXT-X-PROGRAM-DATE-TIME:".concat(p.formatDate(t.programDateTime))), t.dateRange && e.push(k(t.dateRange)), t.markers.length > 0 && P(e, t.markers), t.parts.length > 0 && (o = D(e, t.parts)), o) return [n, r];
                        var c = i < 3 ? Math.round(t.duration) : y(t.duration, E(t.duration));
                        return e.push("#EXTINF:".concat(c, ",").concat(unescape(encodeURIComponent(t.title || "")))), Array.prototype.push.call(e, "".concat(t.uri)), [n, r]
                    }

                    function I(e) {
                        var t = ['URI="'.concat(e.uri, '"')];
                        return e.byterange && t.push('BYTERANGE="'.concat(R(e.byterange), '"')), "#EXT-X-MAP:".concat(t.join(","))
                    }

                    function R(e) {
                        var t = e.offset,
                            n = e.length;
                        return "".concat(n, "@").concat(t)
                    }

                    function k(e) {
                        var t = ['ID="'.concat(e.id, '"')];
                        return e.start && t.push('START-DATE="'.concat(p.formatDate(e.start), '"')), e.end && t.push('END-DATE="'.concat(e.end, '"')), e.duration && t.push("DURATION=".concat(e.duration)), e.plannedDuration && t.push("PLANNED-DURATION=".concat(e.plannedDuration)), e.classId && t.push('CLASS="'.concat(e.classId, '"')), e.endOnNext && t.push("END-ON-NEXT=YES"), Object.keys(e.attributes).forEach((function(n) {
                            n.startsWith("X-") ? "number" == typeof e.attributes[n] ? t.push("".concat(n, "=").concat(e.attributes[n])) : t.push("".concat(n, '="').concat(e.attributes[n], '"')) : n.startsWith("SCTE35-") && t.push("".concat(n, "=").concat(p.byteSequenceToHex(e.attributes[n])))
                        })), "#EXT-X-DATERANGE:".concat(t.join(","))
                    }

                    function P(e, t) {
                        var n, r = o(t);
                        try {
                            for (r.s(); !(n = r.n()).done;) {
                                var i = n.value;
                                if ("OUT" === i.type) e.push("#EXT-X-CUE-OUT:".concat(i.duration));
                                else if ("IN" === i.type) e.push("#EXT-X-CUE-IN");
                                else if ("RAW" === i.type) {
                                    var s = i.value ? ":".concat(i.value) : "";
                                    e.push("#".concat(i.tagName).concat(s))
                                }
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }

                    function D(e, t) {
                        var n, r = !1,
                            i = o(t);
                        try {
                            for (i.s(); !(n = i.n()).done;) {
                                var s = n.value;
                                if (s.hint) {
                                    var a = [];
                                    if (a.push("TYPE=PART"), a.push('URI="'.concat(s.uri, '"')), s.byterange) {
                                        var c = s.byterange,
                                            u = c.offset,
                                            l = c.length;
                                        a.push("BYTERANGE-START=".concat(u)), l && a.push("BYTERANGE-LENGTH=".concat(l))
                                    }
                                    e.push("#EXT-X-PRELOAD-HINT:".concat(a.join(","))), r = !0
                                } else {
                                    var d = [];
                                    d.push("DURATION=".concat(s.duration)), d.push('URI="'.concat(s.uri, '"')), s.byterange && d.push("BYTERANGE=".concat(R(s.byterange))), s.independent && d.push("INDEPENDENT=YES"), s.gap && d.push("GAP=YES"), e.push("#EXT-X-PART:".concat(d.join(",")))
                                }
                            }
                        } catch (e) {
                            i.e(e)
                        } finally {
                            i.f()
                        }
                        return r
                    }
                    e.exports = function(e) {
                        p.PARAMCHECK(e), p.ASSERT("Not a playlist", "playlist" === e.type);
                        var t = new g(e.uri);
                        return t.push("#EXTM3U"), e.version && t.push("#EXT-X-VERSION:".concat(e.version)), e.independentSegments && t.push("#EXT-X-INDEPENDENT-SEGMENTS"), e.start && t.push("#EXT-X-START:TIME-OFFSET=".concat(y(e.start.offset)).concat(e.start.precise ? ",PRECISE=YES" : "")), e.isMasterPlaylist ? function(e, t) {
                            var n, r = o(t.sessionDataList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var i = n.value;
                                    e.push(T(i))
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var s, a = o(t.sessionKeyList);
                            try {
                                for (a.s(); !(s = a.n()).done;) {
                                    var c = s.value;
                                    e.push(S(c, !0))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                            var u, l = o(t.variants);
                            try {
                                for (l.s(); !(u = l.n()).done;) b(e, u.value)
                            } catch (e) {
                                l.e(e)
                            } finally {
                                l.f()
                            }
                        }(t, e) : function(e, t) {
                            var n = "",
                                r = "";
                            if (t.targetDuration && e.push("#EXT-X-TARGETDURATION:".concat(t.targetDuration)), t.lowLatencyCompatibility) {
                                var s = t.lowLatencyCompatibility,
                                    a = s.canBlockReload,
                                    c = s.canSkipUntil,
                                    u = s.holdBack,
                                    l = s.partHoldBack,
                                    d = [];
                                d.push("CAN-BLOCK-RELOAD=".concat(a ? "YES" : "NO")), void 0 !== c && d.push("CAN-SKIP-UNTIL=".concat(c)), void 0 !== u && d.push("HOLD-BACK=".concat(u)), void 0 !== l && d.push("PART-HOLD-BACK=".concat(l)), e.push("#EXT-X-SERVER-CONTROL:".concat(d.join(",")))
                            }
                            t.partTargetDuration && e.push("#EXT-X-PART-INF:PART-TARGET=".concat(t.partTargetDuration)), t.mediaSequenceBase && e.push("#EXT-X-MEDIA-SEQUENCE:".concat(t.mediaSequenceBase)), t.discontinuitySequenceBase && e.push("#EXT-X-DISCONTINUITY-SEQUENCE:".concat(t.discontinuitySequenceBase)), t.playlistType && e.push("#EXT-X-PLAYLIST-TYPE:".concat(t.playlistType)), t.isIFrame && e.push("#EXT-X-I-FRAMES-ONLY"), t.skip > 0 && e.push("#EXT-X-SKIP:SKIPPED-SEGMENTS=".concat(t.skip));
                            var h, f = o(t.segments);
                            try {
                                for (f.s(); !(h = f.n()).done;) {
                                    var _ = i(w(e, h.value, n, r, t.version), 2);
                                    n = _[0], r = _[1]
                                }
                            } catch (e) {
                                f.e(e)
                            } finally {
                                f.f()
                            }
                            t.endlist && e.push("#EXT-X-ENDLIST");
                            var p, m = o(t.renditionReports);
                            try {
                                for (m.s(); !(p = m.n()).done;) {
                                    var v = p.value,
                                        g = [];
                                    g.push('URI="'.concat(v.uri, '"')), g.push("LAST-MSN=".concat(v.lastMSN)), void 0 !== v.lastPart && g.push("LAST-PART=".concat(v.lastPart)), e.push("#EXT-X-RENDITION-REPORT:".concat(g.join(",")))
                                }
                            } catch (e) {
                                m.e(e)
                            } finally {
                                m.f()
                            }
                        }(t, e), t.join("\n")
                    }
                },
                890: (e, t, n) => {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        })(e)
                    }

                    function i(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && function(e, t) {
                            (Object.setPrototypeOf || function(e, t) {
                                return e.__proto__ = t, e
                            })(e, t)
                        }(e, t)
                    }

                    function o(e) {
                        var t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }();
                        return function() {
                            var n, r = a(e);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(r, arguments, i)
                            } else n = r.apply(this, arguments);
                            return s(this, n)
                        }
                    }

                    function s(e, t) {
                        return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e) : t
                    }

                    function a(e) {
                        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                            return e.__proto__ || Object.getPrototypeOf(e)
                        })(e)
                    }

                    function c(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }
                    var u = n(771),
                        l = function e(t) {
                            c(this, e), u.PARAMCHECK(t), this.type = t
                        },
                        d = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.isMasterPlaylist,
                                    o = e.uri,
                                    s = e.version,
                                    a = e.independentSegments,
                                    l = void 0 !== a && a,
                                    d = e.start,
                                    h = e.source;
                                return c(this, n), r = t.call(this, "playlist"), u.PARAMCHECK(i), r.isMasterPlaylist = i, r.uri = o, r.version = s, r.independentSegments = l, r.start = d, r.source = h, r
                            }
                            return n
                        }(l),
                        h = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c(this, n), r.isMasterPlaylist = !0, e = t.call(this, r);
                                var i = r.variants,
                                    o = void 0 === i ? [] : i,
                                    s = r.currentVariant,
                                    a = r.sessionDataList,
                                    u = void 0 === a ? [] : a,
                                    l = r.sessionKeyList,
                                    d = void 0 === l ? [] : l;
                                return e.variants = o, e.currentVariant = s, e.sessionDataList = u, e.sessionKeyList = d, e
                            }
                            return n
                        }(d),
                        f = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n() {
                                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                c(this, n), r.isMasterPlaylist = !1, e = t.call(this, r);
                                var i = r.targetDuration,
                                    o = r.mediaSequenceBase,
                                    s = void 0 === o ? 0 : o,
                                    a = r.discontinuitySequenceBase,
                                    u = void 0 === a ? 0 : a,
                                    l = r.endlist,
                                    d = void 0 !== l && l,
                                    h = r.playlistType,
                                    f = r.isIFrame,
                                    _ = r.segments,
                                    p = void 0 === _ ? [] : _,
                                    m = r.lowLatencyCompatibility,
                                    v = r.partTargetDuration,
                                    g = r.renditionReports,
                                    y = void 0 === g ? [] : g,
                                    E = r.skip,
                                    T = void 0 === E ? 0 : E,
                                    S = r.hash;
                                return e.targetDuration = i, e.mediaSequenceBase = s, e.discontinuitySequenceBase = u, e.endlist = d, e.playlistType = h, e.isIFrame = f, e.segments = p, e.lowLatencyCompatibility = m, e.partTargetDuration = v, e.renditionReports = y, e.skip = T, e.hash = S, e
                            }
                            return n
                        }(d),
                        _ = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.uri,
                                    o = e.mimeType,
                                    s = e.data,
                                    a = e.duration,
                                    u = e.title,
                                    l = e.byterange,
                                    d = e.discontinuity,
                                    h = e.mediaSequenceNumber,
                                    f = void 0 === h ? 0 : h,
                                    _ = e.discontinuitySequence,
                                    p = void 0 === _ ? 0 : _,
                                    m = e.key,
                                    v = e.map,
                                    g = e.programDateTime,
                                    y = e.dateRange,
                                    E = e.markers,
                                    T = void 0 === E ? [] : E,
                                    S = e.parts,
                                    b = void 0 === S ? [] : S;
                                return c(this, n), (r = t.call(this, "segment")).uri = i, r.mimeType = o, r.data = s, r.duration = a, r.title = u, r.byterange = l, r.discontinuity = d, r.mediaSequenceNumber = f, r.discontinuitySequence = p, r.key = m, r.map = v, r.programDateTime = g, r.dateRange = y, r.markers = T, r.parts = b, r
                            }
                            return n
                        }(l),
                        p = function(e) {
                            i(n, e);
                            var t = o(n);

                            function n(e) {
                                var r, i = e.hint,
                                    o = void 0 !== i && i,
                                    s = e.uri,
                                    a = e.duration,
                                    l = e.independent,
                                    d = e.byterange,
                                    h = e.gap;
                                return c(this, n), r = t.call(this, "part"), u.PARAMCHECK(s), r.hint = o, r.uri = s, r.duration = a, r.independent = l, r.duration = a, r.byterange = d, r.gap = h, r
                            }
                            return n
                        }(l);
                    e.exports = {
                        Rendition: function e(t) {
                            var n = t.type,
                                r = t.uri,
                                i = t.groupId,
                                o = t.language,
                                s = t.assocLanguage,
                                a = t.name,
                                l = t.isDefault,
                                d = t.autoselect,
                                h = t.forced,
                                f = t.instreamId,
                                _ = t.characteristics,
                                p = t.channels;
                            c(this, e), u.PARAMCHECK(n, i, a), u.CONDITIONALASSERT(["SUBTITLES" === n, r], ["CLOSED-CAPTIONS" === n, f], ["CLOSED-CAPTIONS" === n, !r], [h, "SUBTITLES" === n]), this.type = n, this.uri = r, this.groupId = i, this.language = o, this.assocLanguage = s, this.name = a, this.isDefault = l, this.autoselect = d, this.forced = h, this.instreamId = f, this.characteristics = _, this.channels = p
                        },
                        Variant: function e(t) {
                            var n = t.uri,
                                r = t.isIFrameOnly,
                                i = void 0 !== r && r,
                                o = t.bandwidth,
                                s = t.averageBandwidth,
                                a = t.codecs,
                                l = t.resolution,
                                d = t.frameRate,
                                h = t.hdcpLevel,
                                f = t.audio,
                                _ = void 0 === f ? [] : f,
                                p = t.video,
                                m = void 0 === p ? [] : p,
                                v = t.subtitles,
                                g = void 0 === v ? [] : v,
                                y = t.closedCaptions,
                                E = void 0 === y ? [] : y,
                                T = t.currentRenditions,
                                S = void 0 === T ? {
                                    audio: 0,
                                    video: 0,
                                    subtitles: 0,
                                    closedCaptions: 0
                                } : T;
                            c(this, e), u.PARAMCHECK(n, o), this.uri = n, this.isIFrameOnly = i, this.bandwidth = o, this.averageBandwidth = s, this.codecs = a, this.resolution = l, this.frameRate = d, this.hdcpLevel = h, this.audio = _, this.video = m, this.subtitles = g, this.closedCaptions = E, this.currentRenditions = S
                        },
                        SessionData: function e(t) {
                            var n = t.id,
                                r = t.value,
                                i = t.uri,
                                o = t.language;
                            c(this, e), u.PARAMCHECK(n, r || i), u.ASSERT("SessionData cannot have both value and uri, shoud be either.", !(r && i)), this.id = n, this.value = r, this.uri = i, this.language = o
                        },
                        Key: function e(t) {
                            var n = t.method,
                                r = t.uri,
                                i = t.iv,
                                o = t.format,
                                s = t.formatVersion;
                            c(this, e), u.PARAMCHECK(n), u.CONDITIONALPARAMCHECK(["NONE" !== n, r]), u.CONDITIONALASSERT(["NONE" === n, !(r || i || o || s)]), this.method = n, this.uri = r, this.iv = i, this.format = o, this.formatVersion = s
                        },
                        MediaInitializationSection: function e(t) {
                            var n = t.hint,
                                r = void 0 !== n && n,
                                i = t.uri,
                                o = t.mimeType,
                                s = t.byterange;
                            c(this, e), u.PARAMCHECK(i), this.hint = r, this.uri = i, this.mimeType = o, this.byterange = s
                        },
                        DateRange: function e(t) {
                            var n = t.id,
                                r = t.classId,
                                i = t.start,
                                o = t.end,
                                s = t.duration,
                                a = t.plannedDuration,
                                l = t.endOnNext,
                                d = t.attributes,
                                h = void 0 === d ? {} : d;
                            c(this, e), u.PARAMCHECK(n), u.CONDITIONALPARAMCHECK([!0 === l, r]), u.CONDITIONALASSERT([o, i], [o, i <= o], [s, s >= 0], [a, a >= 0]), this.id = n, this.classId = r, this.start = i, this.end = o, this.duration = s, this.plannedDuration = a, this.endOnNext = l, this.attributes = h
                        },
                        SpliceInfo: function e(t) {
                            var n = t.type,
                                r = t.duration,
                                i = t.tagName,
                                o = t.value;
                            c(this, e), u.PARAMCHECK(n), u.CONDITIONALPARAMCHECK(["OUT" === n, r]), u.CONDITIONALPARAMCHECK(["RAW" === n, i]), this.type = n, this.duration = r, this.tagName = i, this.value = o
                        },
                        Playlist: d,
                        MasterPlaylist: h,
                        MediaPlaylist: f,
                        Segment: _,
                        PartialSegment: p,
                        RenditionReport: function e(t) {
                            var n = t.uri,
                                r = t.lastMSN,
                                i = t.lastPart;
                            c(this, e), u.PARAMCHECK(n), this.uri = n, this.lastMSN = r, this.lastPart = i
                        }
                    }
                },
                771: e => {
                    function t(e, t) {
                        return function(e) {
                            if (Array.isArray(e)) return e
                        }(e) || function(e, t) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                                var n = [],
                                    r = !0,
                                    i = !1,
                                    o = void 0;
                                try {
                                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e
                                } finally {
                                    try {
                                        r || null == a.return || a.return()
                                    } finally {
                                        if (i) throw o
                                    }
                                }
                                return n
                            }
                        }(e, t) || r(e, t) || function() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function n(e, t) {
                        var n;
                        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                            if (Array.isArray(e) || (n = r(e)) || t && e && "number" == typeof e.length) {
                                n && (e = n);
                                var i = 0,
                                    o = function() {};
                                return {
                                    s: o,
                                    n: function() {
                                        return i >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[i++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: o
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var s, a = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = e[Symbol.iterator]()
                            },
                            n: function() {
                                var e = n.next();
                                return a = e.done, e
                            },
                            e: function(e) {
                                c = !0, s = e
                            },
                            f: function() {
                                try {
                                    a || null == n.return || n.return()
                                } finally {
                                    if (c) throw s
                                }
                            }
                        }
                    }

                    function r(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(e, t) : void 0
                        }
                    }

                    function i(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                        return r
                    }
                    var o = {};

                    function s(e) {
                        if (o.strictMode) throw e;
                        o.silent
                    }

                    function a(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                        if ("number" == typeof e) return e;
                        var n = 10 === t ? Number.parseFloat(e, t) : Number.parseInt(e, t);
                        return Number.isNaN(n) ? 0 : n
                    }
                    e.exports = {
                        THROW: s,
                        ASSERT: function(e) {
                            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                            var a, c = n(i.entries());
                            try {
                                for (c.s(); !(a = c.n()).done;) {
                                    var u = t(a.value, 2),
                                        l = u[0],
                                        d = u[1];
                                    d || s(new Error("".concat(e, " : Failed at [").concat(l, "]")))
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        },
                        CONDITIONALASSERT: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = t(o.value, 2),
                                        u = c[0],
                                        l = t(c[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && (h || s(new Error("Conditional Assert : Failed at [".concat(u, "]"))))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        PARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = t(o.value, 2),
                                        u = c[0],
                                        l = c[1];
                                    void 0 === l && s(new Error("Param Check : Failed at [".concat(u, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        CONDITIONALPARAMCHECK: function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            var o, a = n(r.entries());
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = t(o.value, 2),
                                        u = c[0],
                                        l = t(c[1], 2),
                                        d = l[0],
                                        h = l[1];
                                    d && void 0 === h && s(new Error("Conditional Param Check : Failed at [".concat(u, "]")))
                                }
                            } catch (e) {
                                a.e(e)
                            } finally {
                                a.f()
                            }
                        },
                        INVALIDPLAYLIST: function(e) {
                            s(new Error("Invalid Playlist : ".concat(e)))
                        },
                        toNumber: a,
                        hexToByteSequence: function(e) {
                            (e.startsWith("0x") || e.startsWith("0X")) && (e = e.slice(2));
                            for (var t = [], n = 0; n < e.length; n += 2) t.push(a(e.slice(n, n + 2), 16));
                            return Buffer.from(t)
                        },
                        byteSequenceToHex: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.length;
                            n <= t && s(new Error("end must be larger than start : start=".concat(t, ", end=").concat(n)));
                            for (var r = [], i = t; i < n; i++) r.push("0".concat((255 & e[i]).toString(16).toUpperCase()).slice(-2));
                            return "0x".concat(r.join(""))
                        },
                        tryCatch: function(e, t) {
                            try {
                                return e()
                            } catch (e) {
                                return t(e)
                            }
                        },
                        splitAt: function(e, t) {
                            for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = -1, i = 0, o = 0; i < e.length; i++)
                                if (e[i] === t) {
                                    if (o++ === n) return [e.slice(0, i), e.slice(i + 1)];
                                    r = i
                                }
                            return -1 !== r ? [e.slice(0, r), e.slice(r + 1)] : [e]
                        },
                        trim: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
                            return e ? (e = e.trim(), " " === t || (e.startsWith(t) && (e = e.slice(1)), e.endsWith(t) && (e = e.slice(0, -1))), e) : e
                        },
                        splitByCommaWithPreservingQuotes: function(e) {
                            for (var t = [], n = !0, r = 0, i = [], o = 0; o < e.length; o++) {
                                var s = e[o];
                                n && "," === s ? (t.push(e.slice(r, o).trim()), r = o + 1) : '"' !== s && "'" !== s || (n ? (i.push(s), n = !1) : s === i[i.length - 1] ? (i.pop(), n = !0) : i.push(s))
                            }
                            return t.push(e.slice(r).trim()), t
                        },
                        camelify: function(e) {
                            var t, r = [],
                                i = !1,
                                o = n(e);
                            try {
                                for (o.s(); !(t = o.n()).done;) {
                                    var s = t.value;
                                    "-" !== s && "_" !== s ? i ? (r.push(s.toUpperCase()), i = !1) : r.push(s.toLowerCase()) : i = !0
                                }
                            } catch (e) {
                                o.e(e)
                            } finally {
                                o.f()
                            }
                            return r.join("")
                        },
                        formatDate: function(e) {
                            var t = e.getUTCFullYear(),
                                n = ("0" + (e.getUTCMonth() + 1)).slice(-2),
                                r = ("0" + e.getUTCDate()).slice(-2),
                                i = ("0" + e.getUTCHours()).slice(-2),
                                o = ("0" + e.getUTCMinutes()).slice(-2),
                                s = ("0" + e.getUTCSeconds()).slice(-2),
                                a = ("00" + e.getUTCMilliseconds()).slice(-3);
                            return "".concat(t, "-").concat(n, "-").concat(r, "T").concat(i, ":").concat(o, ":").concat(s, ".").concat(a, "Z")
                        },
                        hasOwnProp: function(e, t) {
                            return Object.hasOwnProperty.call(e, t)
                        },
                        setOptions: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            o = Object.assign(o, e)
                        },
                        getOptions: function() {
                            return Object.assign({}, o)
                        }
                    }
                }
            }, t = {},
            function n(r) {
                if (t[r]) return t[r].exports;
                var i = t[r] = {
                    exports: {}
                };
                return e[r](i, i.exports, n), i.exports
            }(851);
        var e, t
    }()
}));

function Cf() {
    return (Cf = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }).apply(this, arguments)
}
var Lf, Nf = ["bottom", "height", "left", "right", "top", "width"],
    Mf = new Map,
    xf = "undefined" != typeof window ? of .useLayoutEffect : of .useEffect;

function Uf(e, t) {
    void 0 === t && (t = {
        width: 0,
        height: 0
    });
    var n = of .useState(e.current),
        r = n[0],
        i = n[1],
        o = of .useReducer(Ff, t),
        s = o[0],
        a = o[1],
        c = of .useRef(!1);
    return xf((function() {
        e.current !== r && i(e.current)
    })), xf((function() {
        if (r && !c.current) {
            c.current = !0;
            var e = r.getBoundingClientRect();
            a({
                rect: e
            })
        }
    }), [r]), of .useEffect((function() {
        if (r) {
            var e = function(e, t) {
                return {
                    observe: function() {
                        var n = 0 === Mf.size;
                        Mf.has(e) ? Mf.get(e).callbacks.push(t) : Mf.set(e, {
                            rect: void 0,
                            hasRectChanged: !1,
                            callbacks: [t]
                        }), n && function e() {
                            var t = [];
                            Mf.forEach((function(e, n) {
                                var r = n.getBoundingClientRect();
                                (function(e, t) {
                                    return void 0 === e && (e = {}), void 0 === t && (t = {}), Nf.some((function(n) {
                                        return e[n] !== t[n]
                                    }))
                                })(r, e.rect) && (e.rect = r, t.push(e))
                            })), t.forEach((function(e) {
                                e.callbacks.forEach((function(t) {
                                    return t(e.rect)
                                }))
                            })), Lf = window.requestAnimationFrame(e)
                        }()
                    },
                    unobserve: function() {
                        var n = Mf.get(e);
                        if (n) {
                            var r = n.callbacks.indexOf(t);
                            r >= 0 && n.callbacks.splice(r, 1), n.callbacks.length || Mf.delete(e), Mf.size || cancelAnimationFrame(Lf)
                        }
                    }
                }
            }(r, (function(e) {
                a({
                    rect: e
                })
            }));
            return e.observe(),
                function() {
                    e.unobserve()
                }
        }
    }), [r]), s
}

function Ff(e, t) {
    var n = t.rect;
    return e.height !== n.height || e.width !== n.width ? n : e
}
var jf = function() {
        return 50
    },
    Vf = function(e) {
        return e
    },
    Bf = function(e, t) {
        return e[t ? "offsetWidth" : "offsetHeight"]
    },
    Hf = function(e) {
        for (var t = Math.max(e.start - e.overscan, 0), n = Math.min(e.end + e.overscan, e.size - 1), r = [], i = t; i <= n; i++) r.push(i);
        return r
    };

function Xf(e) {
    var t, n = e.size,
        r = void 0 === n ? 0 : n,
        i = e.estimateSize,
        o = void 0 === i ? jf : i,
        s = e.overscan,
        a = void 0 === s ? 1 : s,
        c = e.paddingStart,
        u = void 0 === c ? 0 : c,
        l = e.paddingEnd,
        d = void 0 === l ? 0 : l,
        h = e.parentRef,
        f = e.horizontal,
        _ = e.scrollToFn,
        p = e.useObserver,
        m = e.initialRect,
        v = e.onScrollElement,
        g = e.scrollOffsetFn,
        y = e.keyExtractor,
        E = void 0 === y ? Vf : y,
        T = e.measureSize,
        S = void 0 === T ? Bf : T,
        b = e.rangeExtractor,
        A = void 0 === b ? Hf : b,
        w = f ? "width" : "height",
        I = f ? "scrollLeft" : "scrollTop",
        R = of .useRef({
            scrollOffset: 0,
            measurements: []
        }),
        k = of .useState(0),
        P = k[0],
        D = k[1];
    R.current.scrollOffset = P;
    var O = (p || Uf)(h, m)[w];
    R.current.outerSize = O;
    var C = of .useCallback((function(e) {
            h.current && (h.current[I] = e)
        }), [h, I]),
        L = _ || C;
    _ = of .useCallback((function(e) {
        L(e, C)
    }), [C, L]);
    var N = of .useState({}),
        M = N[0],
        x = N[1],
        U = of .useCallback((function() {
            return x({})
        }), []),
        F = of .useRef([]),
        j = of .useMemo((function() {
            var e = F.current.length > 0 ? Math.min.apply(Math, F.current) : 0;
            F.current = [];
            for (var t = R.current.measurements.slice(0, e), n = e; n < r; n++) {
                var i = E(n),
                    s = M[i],
                    a = t[n - 1] ? t[n - 1].end : u,
                    c = "number" == typeof s ? s : o(n),
                    l = a + c;
                t[n] = {
                    index: n,
                    start: a,
                    size: c,
                    end: l,
                    key: i
                }
            }
            return t
        }), [o, M, u, r, E]),
        V = ((null == (t = j[r - 1]) ? void 0 : t.end) || u) + d;
    R.current.measurements = j, R.current.totalSize = V;
    var B = v ? v.current : h.current,
        H = of .useRef(g);
    H.current = g, xf((function() {
        if (B) {
            var e = function(e) {
                var t = H.current ? H.current(e) : B[I];
                D(t)
            };
            return e(), B.addEventListener("scroll", e, {
                    capture: !1,
                    passive: !0
                }),
                function() {
                    B.removeEventListener("scroll", e)
                }
        }
        D(0)
    }), [B, I]);
    var X = function(e) {
            for (var t = e.measurements, n = e.outerSize, r = e.scrollOffset, i = t.length - 1, o = function(e, t, n, r) {
                    for (; e <= t;) {
                        var i = (e + t) / 2 | 0,
                            o = n(i);
                        if (o < r) e = i + 1;
                        else {
                            if (!(o > r)) return i;
                            t = i - 1
                        }
                    }
                    return e > 0 ? e - 1 : 0
                }(0, i, (function(e) {
                    return t[e].start
                }), r), s = o; s < i && t[s].end < r + n;) s++;
            return {
                start: o,
                end: s
            }
        }(R.current),
        q = X.start,
        G = X.end,
        W = of .useMemo((function() {
            return A({
                start: q,
                end: G,
                overscan: a,
                size: j.length
            })
        }), [q, G, a, j.length, A]),
        K = of .useRef(S);
    K.current = S;
    var Y = of .useMemo((function() {
            for (var e = [], t = function(t, n) {
                    var r = W[t],
                        i = Cf(Cf({}, j[r]), {}, {
                            measureRef: function(e) {
                                if (e) {
                                    var t = K.current(e, f);
                                    if (t !== i.size) {
                                        var n = R.current.scrollOffset;
                                        i.start < n && C(n + (t - i.size)), F.current.push(r), x((function(e) {
                                            var n;
                                            return Cf(Cf({}, e), {}, ((n = {})[i.key] = t, n))
                                        }))
                                    }
                                }
                            }
                        });
                    e.push(i)
                }, n = 0, r = W.length; n < r; n++) t(n);
            return e
        }), [W, C, f, j]),
        $ = of .useRef(!1);
    xf((function() {
        $.current && x({}), $.current = !0
    }), [o]);
    var z = of .useCallback((function(e, t) {
            var n = (void 0 === t ? {} : t).align,
                r = void 0 === n ? "start" : n,
                i = R.current,
                o = i.scrollOffset,
                s = i.outerSize;
            "auto" === r && (r = e <= o ? "start" : e >= o + s ? "end" : "start"), "start" === r ? _(e) : "end" === r ? _(e - s) : "center" === r && _(e - s / 2)
        }), [_]),
        Q = of .useCallback((function(e, t) {
            var n = void 0 === t ? {} : t,
                i = n.align,
                o = void 0 === i ? "auto" : i,
                s = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(n, ["align"]),
                a = R.current,
                c = a.measurements,
                u = a.scrollOffset,
                l = a.outerSize,
                d = c[Math.max(0, Math.min(e, r - 1))];
            if (d) {
                if ("auto" === o)
                    if (d.end >= u + l) o = "end";
                    else {
                        if (!(d.start <= u)) return;
                        o = "start"
                    }
                var h = "center" === o ? d.start + d.size / 2 : "end" === o ? d.end : d.start;
                z(h, Cf({
                    align: o
                }, s))
            }
        }), [z, r]),
        J = of .useCallback((function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            Q.apply(void 0, t), requestAnimationFrame((function() {
                Q.apply(void 0, t)
            }))
        }), [Q]);
    return {
        virtualItems: Y,
        totalSize: V,
        scrollToOffset: z,
        scrollToIndex: J,
        measure: U
    }
}
export {
    Bi as $, mu as A, ra as B, Tc as C, na as D, oa as E, ta as F, Iu as G, Qs as H, Js as I, sa as J, ca as K, Ac as L, ua as M, yi as N, ha as O, Zs as P, ea as Q, aa as R, ia as S, Ti as T, Ai as U, vi as V, bi as W, _s as X, Hi as Y, Xi as Z, Ie as _, it as a, De as a$, Vi as a0, xe as a1, En as a2, g as a3, Cu as a4, Zn as a5, Zu as a6, el as a7, al as a8, Al as a9, uf as aA, Rh as aB, Td as aC, Lh as aD, dh as aE, Wd as aF, bd as aG, Od as aH, Gd as aI, fh as aJ, Ct as aK, qh as aL, If as aM, Xd as aN, Si as aO, qa as aP, Yn as aQ, Qn as aR, $n as aS, tt as aT, gc as aU, Ue as aV, sl as aW, Df as aX, Fe as aY, Ut as aZ, Of as a_, bl as aa, ui as ab, bc as ac, Qe as ad, Rc as ae, Je as af, Ye as ag, Sc as ah, Ma as ai, ot as aj, Il as ak, Pl as al, kl as am, Kl as an, fd as ao, sd as ap, pd as aq, $e as ar, sh as as, ih as at, ch as au, lh as av, Tf as aw, cf as ax, bf as ay, af as az, Be as b, Oe as b0, we as b1, ut as b2, he as b3, ct as b4, Xf as b5, uh as b6, Wr as c, nt as d, le as e, de as f, On as g, Pe as h, yc as i, Ae as j, ze as k, Cc as l, ve as m, _u as n, pe as o, Ya as p, rt as q, kt as r, en as s, et as t, st as u, _e as v, Oc as w, ht as x, er as y, ge as z
};