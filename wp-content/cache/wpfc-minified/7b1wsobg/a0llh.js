// source --> https://zoewellness.com/wp-content/themes/phlox/js/solo/modernizr-custom.min.js?ver=2.16.5 
! function(window, document, undefined) {
    var tests = [],
        ModernizrProto = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(test, cb) {
                var self = this;
                setTimeout(function() {
                    cb(self[test])
                }, 0)
            },
            addTest: function(name, fn, options) {
                tests.push({
                    name: name,
                    fn: fn,
                    options: options
                })
            },
            addAsyncTest: function(fn) {
                tests.push({
                    name: null,
                    fn: fn
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr;
    var classes = [];

    function is(obj, type) {
        return typeof obj === type
    }
    var hasOwnProp, _hasOwnProperty, docElement = document.documentElement,
        isSVG = "svg" === docElement.nodeName.toLowerCase();

    function setClasses(classes) {
        var className = docElement.className,
            classPrefix = Modernizr._config.classPrefix || "";
        if (isSVG && (className = className.baseVal), Modernizr._config.enableJSClass) {
            var reJS = new RegExp("(^|\\s)" + classPrefix + "no-js(\\s|$)");
            className = className.replace(reJS, "$1" + classPrefix + "js$2")
        }
        Modernizr._config.enableClasses && (className += " " + classPrefix + classes.join(" " + classPrefix), isSVG ? docElement.className.baseVal = className : docElement.className = className)
    }

    function addTest(feature, test) {
        if ("object" == typeof feature)
            for (var key in feature) hasOwnProp(feature, key) && addTest(key, feature[key]);
        else {
            var featureNameSplit = (feature = feature.toLowerCase()).split("."),
                last = Modernizr[featureNameSplit[0]];
            if (2 == featureNameSplit.length && (last = last[featureNameSplit[1]]), void 0 !== last) return Modernizr;
            test = "function" == typeof test ? test() : test, 1 == featureNameSplit.length ? Modernizr[featureNameSplit[0]] = test : (!Modernizr[featureNameSplit[0]] || Modernizr[featureNameSplit[0]] instanceof Boolean || (Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]])), Modernizr[featureNameSplit[0]][featureNameSplit[1]] = test), setClasses([(test && 0 != test ? "" : "no-") + featureNameSplit.join("-")]), Modernizr._trigger(feature, test)
        }
        return Modernizr
    }

    function createElement(argument_0) {
        return "function" != typeof document.createElement ? document.createElement(argument_0) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", argument_0) : document.createElement.apply(document, arguments)
    }
    isSVG || function(window, document) {
        var supportsHtml5Styles, supportsUnknownElements, options = window.html5 || {},
            reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            expando = "_html5shiv",
            expanID = 0,
            expandoData = {};

        function getElements() {
            var elements = html5.elements;
            return "string" == typeof elements ? elements.split(" ") : elements
        }

        function getExpandoData(ownerDocument) {
            var data = expandoData[ownerDocument[expando]];
            return data || (data = {}, expanID++, ownerDocument[expando] = expanID, expandoData[expanID] = data), data
        }

        function createElement(nodeName, ownerDocument, data) {
            return ownerDocument = ownerDocument || document, supportsUnknownElements ? ownerDocument.createElement(nodeName) : !(node = (data = data || getExpandoData(ownerDocument)).cache[nodeName] ? data.cache[nodeName].cloneNode() : saveClones.test(nodeName) ? (data.cache[nodeName] = data.createElem(nodeName)).cloneNode() : data.createElem(nodeName)).canHaveChildren || reSkip.test(nodeName) || node.tagUrn ? node : data.frag.appendChild(node);
            var node
        }

        function shivDocument(ownerDocument) {
            var data = getExpandoData(ownerDocument = ownerDocument || document);
            return !html5.shivCSS || supportsHtml5Styles || data.hasCSS || (data.hasCSS = !! function(ownerDocument, cssText) {
                var p = ownerDocument.createElement("p"),
                    parent = ownerDocument.getElementsByTagName("head")[0] || ownerDocument.documentElement;
                return p.innerHTML = "x<style>" + cssText + "</style>", parent.insertBefore(p.lastChild, parent.firstChild)
            }(ownerDocument, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), supportsUnknownElements || function(ownerDocument, data) {
                data.cache || (data.cache = {}, data.createElem = ownerDocument.createElement, data.createFrag = ownerDocument.createDocumentFragment, data.frag = data.createFrag()), ownerDocument.createElement = function(nodeName) {
                    return html5.shivMethods ? createElement(nodeName, ownerDocument, data) : data.createElem(nodeName)
                }, ownerDocument.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + getElements().join().replace(/[\w\-:]+/g, function(nodeName) {
                    return data.createElem(nodeName), data.frag.createElement(nodeName), 'c("' + nodeName + '")'
                }) + ");return n}")(html5, data.frag)
            }(ownerDocument, data), ownerDocument
        }! function() {
            try {
                var a = document.createElement("a");
                a.innerHTML = "<xyz></xyz>", supportsHtml5Styles = "hidden" in a, supportsUnknownElements = 1 == a.childNodes.length || function() {
                    document.createElement("a");
                    var frag = document.createDocumentFragment();
                    return void 0 === frag.cloneNode || void 0 === frag.createDocumentFragment || void 0 === frag.createElement
                }()
            } catch (e) {
                supportsUnknownElements = supportsHtml5Styles = !0
            }
        }();
        var html5 = {
            elements: options.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3",
            shivCSS: !1 !== options.shivCSS,
            supportsUnknownElements: supportsUnknownElements,
            shivMethods: !1 !== options.shivMethods,
            type: "default",
            shivDocument: shivDocument,
            createElement: createElement,
            createDocumentFragment: function(ownerDocument, data) {
                if (ownerDocument = ownerDocument || document, supportsUnknownElements) return ownerDocument.createDocumentFragment();
                for (var clone = (data = data || getExpandoData(ownerDocument)).frag.cloneNode(), i = 0, elems = getElements(), l = elems.length; i < l; i++) clone.createElement(elems[i]);
                return clone
            },
            addElements: function(newElements, ownerDocument) {
                var elements = html5.elements;
                "string" != typeof elements && (elements = elements.join(" ")), "string" != typeof newElements && (newElements = newElements.join(" ")), html5.elements = elements + " " + newElements, shivDocument(ownerDocument)
            }
        };
        window.html5 = html5, shivDocument(document), "object" == typeof module && module.exports && (module.exports = html5)
    }(void 0 !== window ? window : this, document), hasOwnProp = is(_hasOwnProperty = {}.hasOwnProperty, "undefined") || is(_hasOwnProperty.call, "undefined") ? function(object, property) {
        return property in object && is(object.constructor.prototype[property], "undefined")
    } : function(object, property) {
        return _hasOwnProperty.call(object, property)
    }, ModernizrProto._l = {}, ModernizrProto.on = function(feature, cb) {
        this._l[feature] || (this._l[feature] = []), this._l[feature].push(cb), Modernizr.hasOwnProperty(feature) && setTimeout(function() {
            Modernizr._trigger(feature, Modernizr[feature])
        }, 0)
    }, ModernizrProto._trigger = function(feature, res) {
        if (this._l[feature]) {
            var cbs = this._l[feature];
            setTimeout(function() {
                var i;
                for (i = 0; i < cbs.length; i++)(0, cbs[i])(res)
            }, 0), delete this._l[feature]
        }
    }, Modernizr._q.push(function() {
        ModernizrProto.addTest = addTest
    });
    var modElem = {
        elem: createElement("modernizr")
    };
    Modernizr._q.push(function() {
        delete modElem.elem
    });
    var mStyle = {
        style: modElem.elem.style
    };

    function injectElementWithStyles(rule, callback, nodes, testnames) {
        var style, ret, node, docOverflow, mod = "modernizr",
            div = createElement("div"),
            body = function() {
                var body = document.body;
                return body || ((body = createElement(isSVG ? "svg" : "body")).fake = !0), body
            }();
        if (parseInt(nodes, 10))
            for (; nodes--;)(node = createElement("div")).id = testnames ? testnames[nodes] : mod + (nodes + 1), div.appendChild(node);
        return (style = createElement("style")).type = "text/css", style.id = "s" + mod, (body.fake ? body : div).appendChild(style), body.appendChild(div), style.styleSheet ? style.styleSheet.cssText = rule : style.appendChild(document.createTextNode(rule)), div.id = mod, body.fake && (body.style.background = "", body.style.overflow = "hidden", docOverflow = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(body)), ret = callback(div, rule), body.fake ? (body.parentNode.removeChild(body), docElement.style.overflow = docOverflow, docElement.offsetHeight) : div.parentNode.removeChild(div), !!ret
    }

    function domToCSS(name) {
        return name.replace(/([A-Z])/g, function(str, m1) {
            return "-" + m1.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function nativeTestProps(props, value) {
        var i = props.length;
        if ("CSS" in window && "supports" in window.CSS) {
            for (; i--;)
                if (window.CSS.supports(domToCSS(props[i]), value)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in window) {
            for (var conditionText = []; i--;) conditionText.push("(" + domToCSS(props[i]) + ":" + value + ")");
            return injectElementWithStyles("@supports (" + (conditionText = conditionText.join(" or ")) + ") { #modernizr { position: absolute; } }", function(node) {
                return "absolute" == function(elem, pseudo, prop) {
                    var result;
                    if ("getComputedStyle" in window) {
                        result = getComputedStyle.call(window, elem, pseudo);
                        var console = window.console;
                        if (null !== result) prop && (result = result.getPropertyValue(prop));
                        else if (console) console[console.error ? "error" : "log"].call(console, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    } else result = !pseudo && elem.currentStyle && elem.currentStyle[prop];
                    return result
                }(node, null, "position")
            })
        }
        return undefined
    }

    function cssToDOM(name) {
        return name.replace(/([a-z])-([a-z])/g, function(str, m1, m2) {
            return m1 + m2.toUpperCase()
        }).replace(/^-/, "")
    }

    function testProps(props, prefixed, value, skipValueTest) {
        if (skipValueTest = !is(skipValueTest, "undefined") && skipValueTest, !is(value, "undefined")) {
            var result = nativeTestProps(props, value);
            if (!is(result, "undefined")) return result
        }
        for (var afterInit, i, propsLength, prop, before, elems = ["modernizr", "tspan", "samp"]; !mStyle.style && elems.length;) afterInit = !0, mStyle.modElem = createElement(elems.shift()), mStyle.style = mStyle.modElem.style;

        function cleanElems() {
            afterInit && (delete mStyle.style, delete mStyle.modElem)
        }
        for (propsLength = props.length, i = 0; i < propsLength; i++)
            if (prop = props[i], before = mStyle.style[prop], ~("" + prop).indexOf("-") && (prop = cssToDOM(prop)), mStyle.style[prop] !== undefined) {
                if (skipValueTest || is(value, "undefined")) return cleanElems(), "pfx" != prefixed || prop;
                try {
                    mStyle.style[prop] = value
                } catch (e) {}
                if (mStyle.style[prop] != before) return cleanElems(), "pfx" != prefixed || prop
            }
        return cleanElems(), !1
    }
    Modernizr._q.unshift(function() {
        delete mStyle.style
    });
    ModernizrProto.testProp = function(prop, value, useValue) {
        return testProps([prop], undefined, value, useValue)
    };
    Modernizr.addTest("audio", function() {
        var elem = createElement("audio"),
            bool = !1;
        try {
            (bool = !!elem.canPlayType) && ((bool = new Boolean(bool)).ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), bool.mp3 = elem.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""), bool.opus = elem.canPlayType('audio/ogg; codecs="opus"') || elem.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""), bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), bool.m4a = (elem.canPlayType("audio/x-m4a;") || elem.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return bool
    }), Modernizr.addTest("canvas", function() {
        var elem = createElement("canvas");
        return !(!elem.getContext || !elem.getContext("2d"))
    });
    var cssomPrefixes = ModernizrProto._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];
    ModernizrProto._cssomPrefixes = cssomPrefixes;
    var domPrefixes = ModernizrProto._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];

    function fnBind(fn, that) {
        return function() {
            return fn.apply(that, arguments)
        }
    }

    function testPropsAll(prop, prefixed, elem, value, skipValueTest) {
        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
            props = (prop + " " + cssomPrefixes.join(ucProp + " ") + ucProp).split(" ");
        return is(prefixed, "string") || is(prefixed, "undefined") ? testProps(props, prefixed, value, skipValueTest) : function(props, obj, elem) {
            var item;
            for (var i in props)
                if (props[i] in obj) return !1 === elem ? props[i] : is(item = obj[props[i]], "function") ? fnBind(item, elem || obj) : item;
            return !1
        }(props = (prop + " " + domPrefixes.join(ucProp + " ") + ucProp).split(" "), prefixed, elem)
    }
    ModernizrProto._domPrefixes = domPrefixes, ModernizrProto.testAllProps = testPropsAll;

    function atRule(prop) {
        var rule, length = prefixes.length,
            cssrule = window.CSSRule;
        if (void 0 === cssrule) return undefined;
        if (!prop) return !1;
        if ((rule = (prop = prop.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in cssrule) return "@" + prop;
        for (var i = 0; i < length; i++) {
            var prefix = prefixes[i];
            if (prefix.toUpperCase() + "_" + rule in cssrule) return "@-" + prefix.toLowerCase() + "-" + prop
        }
        return !1
    }
    ModernizrProto.atRule = atRule;
    var prefixed = ModernizrProto.prefixed = function(prop, obj, elem) {
        return 0 === prop.indexOf("@") ? atRule(prop) : (-1 != prop.indexOf("-") && (prop = cssToDOM(prop)), obj ? testPropsAll(prop, obj, elem) : testPropsAll(prop, "pfx"))
    };
    Modernizr.addTest("fullscreen", !(!prefixed("exitFullscreen", document, !1) && !prefixed("cancelFullScreen", document, !1)));
    var inputElem = createElement("input"),
        inputattrs = "autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),
        attrs = {};
    Modernizr.input = function(props) {
        for (var i = 0, len = props.length; i < len; i++) attrs[props[i]] = !!(props[i] in inputElem);
        return attrs.list && (attrs.list = !(!createElement("datalist") || !window.HTMLDataListElement)), attrs
    }(inputattrs);
    var inputtypes = "search tel url email datetime date month week time datetime-local number range color".split(" "),
        inputs = {};

    function testAllProps(prop, value, skipValueTest) {
        return testPropsAll(prop, undefined, undefined, value, skipValueTest)
    }
    Modernizr.inputtypes = function(props) {
            for (var inputElemType, defaultView, bool, len = props.length, i = 0; i < len; i++) inputElem.setAttribute("type", inputElemType = props[i]), (bool = "text" !== inputElem.type && "style" in inputElem) && (inputElem.value = "1)", inputElem.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ? (docElement.appendChild(inputElem), bool = (defaultView = document.defaultView).getComputedStyle && "textfield" !== defaultView.getComputedStyle(inputElem, null).WebkitAppearance && 0 !== inputElem.offsetHeight, docElement.removeChild(inputElem)) : /^(search|tel)$/.test(inputElemType) || (bool = /^(url|email)$/.test(inputElemType) ? inputElem.checkValidity && !1 === inputElem.checkValidity() : "1)" != inputElem.value)), inputs[props[i]] = !!bool;
            return inputs
        }(inputtypes), Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("video", function() {
            var elem = createElement("video"),
                bool = !1;
            try {
                (bool = !!elem.canPlayType) && ((bool = new Boolean(bool)).ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""), bool.vp9 = elem.canPlayType('video/webm; codecs="vp9"').replace(/^no$/, ""), bool.hls = elem.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/, ""))
            } catch (e) {}
            return bool
        }), ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("cssanimations", testAllProps("animationName", "a", !0)), Modernizr.addTest("boxshadow", testAllProps("boxShadow", "1px 1px", !0)),
        function() {
            Modernizr.addTest("csscolumns", function() {
                var bool = !1,
                    test = testAllProps("columnCount");
                try {
                    bool = (bool = !!test) && new Boolean(bool)
                } catch (e) {}
                return bool
            });
            for (var name, test, props = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], i = 0; i < props.length; i++) name = props[i].toLowerCase(), test = testAllProps("column" + props[i]), "breakbefore" !== name && "breakafter" !== name && "breakinside" != name || (test = test || testAllProps(props[i])), Modernizr.addTest("csscolumns." + name, test)
        }(), Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0));
    var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    ModernizrProto._prefixes = prefixes, Modernizr.addTest("csscalc", function() {
        var el = createElement("a");
        return el.style.cssText = "width:" + prefixes.join("calc(10px);width:"), !!el.style.length
    }), Modernizr.addTest("flexboxtweener", testAllProps("flexAlign", "end", !0)), Modernizr.addTest("cssgradients", function() {
        for (var angle, str1 = "background-image:", css = "", i = 0, len = prefixes.length - 1; i < len; i++) angle = 0 === i ? "to " : "", css += str1 + prefixes[i] + "linear-gradient(" + angle + "left top, #9f9, white);";
        Modernizr._config.usePrefixes && (css += str1 + "-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));");
        var style = createElement("a").style;
        return style.cssText = css, -1 < ("" + style.backgroundImage).indexOf("gradient")
    }), Modernizr.addTest("csstransforms", function() {
        return -1 === navigator.userAgent.indexOf("Android 2.") && testAllProps("transform", "scale(1)", !0)
    });
    var testStyles = ModernizrProto.testStyles = injectElementWithStyles,
        newSyntax = "CSS" in window && "supports" in window.CSS,
        oldSyntax = "supportsCSS" in window;
    Modernizr.addTest("supports", newSyntax || oldSyntax), Modernizr.addTest("csstransforms3d", function() {
            var ret = !!testAllProps("perspective", "1px", !0),
                usePrefix = Modernizr._config.usePrefixes;
            if (ret && (!usePrefix || "webkitPerspective" in docElement.style)) {
                var mq;
                Modernizr.supports ? mq = "@supports (perspective: 1px)" : (mq = "@media (transform-3d)", usePrefix && (mq += ",(-webkit-transform-3d)")), testStyles("#modernizr{width:0;height:0}" + (mq += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"), function(elem) {
                    ret = 7 === elem.offsetWidth && 18 === elem.offsetHeight
                })
            }
            return ret
        }), Modernizr.addTest("csstransitions", testAllProps("transition", "all", !0)), Modernizr.addTest("objectfit", !!prefixed("objectFit"), {
            aliases: ["object-fit"]
        }),
        function() {
            var featureNames, feature, aliasIdx, result, nameIdx, featureNameSplit;
            for (var featureIdx in tests)
                if (tests.hasOwnProperty(featureIdx)) {
                    if (featureNames = [], (feature = tests[featureIdx]).name && (featureNames.push(feature.name.toLowerCase()), feature.options && feature.options.aliases && feature.options.aliases.length))
                        for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
                    for (result = is(feature.fn, "function") ? feature.fn() : feature.fn, nameIdx = 0; nameIdx < featureNames.length; nameIdx++) 1 === (featureNameSplit = featureNames[nameIdx].split(".")).length ? Modernizr[featureNameSplit[0]] = result : (!Modernizr[featureNameSplit[0]] || Modernizr[featureNameSplit[0]] instanceof Boolean || (Modernizr[featureNameSplit[0]] = new Boolean(Modernizr[featureNameSplit[0]])), Modernizr[featureNameSplit[0]][featureNameSplit[1]] = result), classes.push((result ? "" : "no-") + featureNameSplit.join("-"))
                }
        }(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;
    for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
    window.Modernizr = Modernizr
}(window, document),
function(Modernizr) {
    for (var name, value, prop, tests = [{
            name: "svg",
            value: "url(#test)"
        }, {
            name: "inset",
            value: "inset(10px 20px 30px 40px)"
        }, {
            name: "circle",
            value: "circle(60px at center)"
        }, {
            name: "ellipse",
            value: "ellipse(50% 50% at 50% 50%)"
        }, {
            name: "polygon",
            value: "polygon(50% 0%, 0% 100%, 100% 100%)"
        }], t = 0; t < tests.length; t++) name = tests[t].name, value = tests[t].value, Modernizr.addTest("cssclippath" + name, function() {
        if ("CSS" in window && "supports" in window.CSS) {
            for (var i = 0; i < Modernizr._prefixes.length; i++)
                if (prop = Modernizr._prefixes[i] + "clip-path", window.CSS.supports(prop, value)) return !0;
            return !1
        }
        return Modernizr.testStyles("#modernizr { " + Modernizr._prefixes.join("clip-path:" + value + "; ") + " }", function(elem, rule) {
            var style = getComputedStyle(elem),
                clip = style.clipPath;
            if (!clip || "none" == clip) {
                clip = !1;
                for (var i = 0; i < Modernizr._domPrefixes.length; i++)
                    if (test = Modernizr._domPrefixes[i] + "ClipPath", style[test] && "none" !== style[test]) {
                        clip = !0;
                        break
                    }
            }
            return Modernizr.testProp("clipPath") && clip
        })
    })
}(Modernizr);