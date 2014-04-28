(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/*! JSON v3.3.1 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function(){function N(p,r){function q(a){if(q[a]!==w)return q[a];var c;if("bug-string-char-index"==a)c="a"!="a"[0];else if("json"==a)c=q("json-stringify")&&q("json-parse");else{var e;if("json-stringify"==a){c=r.stringify;var b="function"==typeof c&&s;if(b){(e=function(){return 1}).toJSON=e;try{b="0"===c(0)&&"0"===c(new t)&&'""'==c(new A)&&c(u)===w&&c(w)===w&&c()===w&&"1"===c(e)&&"[1]"==c([e])&&"[null]"==c([w])&&"null"==c(null)&&"[null,null,null]"==c([w,u,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==
c({a:[e,!0,!1,null,"\x00\b\n\f\r\t"]})&&"1"===c(null,e)&&"[\n 1,\n 2\n]"==c([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==c(new C(-864E13))&&'"+275760-09-13T00:00:00.000Z"'==c(new C(864E13))&&'"-000001-01-01T00:00:00.000Z"'==c(new C(-621987552E5))&&'"1969-12-31T23:59:59.999Z"'==c(new C(-1))}catch(f){b=!1}}c=b}if("json-parse"==a){c=r.parse;if("function"==typeof c)try{if(0===c("0")&&!c(!1)){e=c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');var n=5==e.a.length&&1===e.a[0];if(n){try{n=!c('"\t"')}catch(d){}if(n)try{n=
1!==c("01")}catch(g){}if(n)try{n=1!==c("1.")}catch(m){}}}}catch(X){n=!1}c=n}}return q[a]=!!c}p||(p=k.Object());r||(r=k.Object());var t=p.Number||k.Number,A=p.String||k.String,H=p.Object||k.Object,C=p.Date||k.Date,G=p.SyntaxError||k.SyntaxError,K=p.TypeError||k.TypeError,L=p.Math||k.Math,I=p.JSON||k.JSON;"object"==typeof I&&I&&(r.stringify=I.stringify,r.parse=I.parse);var H=H.prototype,u=H.toString,v,B,w,s=new C(-0xc782b5b800cec);try{s=-109252==s.getUTCFullYear()&&0===s.getUTCMonth()&&1===s.getUTCDate()&&
10==s.getUTCHours()&&37==s.getUTCMinutes()&&6==s.getUTCSeconds()&&708==s.getUTCMilliseconds()}catch(Q){}if(!q("json")){var D=q("bug-string-char-index");if(!s)var x=L.floor,M=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(a,c){return M[c]+365*(a-1970)+x((a-1969+(c=+(1<c)))/4)-x((a-1901+c)/100)+x((a-1601+c)/400)};(v=H.hasOwnProperty)||(v=function(a){var c={},e;(c.__proto__=null,c.__proto__={toString:1},c).toString!=u?v=function(a){var c=this.__proto__;a=a in(this.__proto__=null,this);this.__proto__=
c;return a}:(e=c.constructor,v=function(a){var c=(this.constructor||e).prototype;return a in this&&!(a in c&&this[a]===c[a])});c=null;return v.call(this,a)});B=function(a,c){var e=0,b,f,n;(b=function(){this.valueOf=0}).prototype.valueOf=0;f=new b;for(n in f)v.call(f,n)&&e++;b=f=null;e?B=2==e?function(a,c){var e={},b="[object Function]"==u.call(a),f;for(f in a)b&&"prototype"==f||v.call(e,f)||(e[f]=1,!v.call(a,f))||c(f)}:function(a,c){var e="[object Function]"==u.call(a),b,f;for(b in a)e&&"prototype"==
b||!v.call(a,b)||(f="constructor"===b)||c(b);(f||v.call(a,b="constructor"))&&c(b)}:(f="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),B=function(a,c){var e="[object Function]"==u.call(a),b,h=!e&&"function"!=typeof a.constructor&&F[typeof a.hasOwnProperty]&&a.hasOwnProperty||v;for(b in a)e&&"prototype"==b||!h.call(a,b)||c(b);for(e=f.length;b=f[--e];h.call(a,b)&&c(b));});return B(a,c)};if(!q("json-stringify")){var U={92:"\\\\",34:'\\"',8:"\\b",
12:"\\f",10:"\\n",13:"\\r",9:"\\t"},y=function(a,c){return("000000"+(c||0)).slice(-a)},R=function(a){for(var c='"',b=0,h=a.length,f=!D||10<h,n=f&&(D?a.split(""):a);b<h;b++){var d=a.charCodeAt(b);switch(d){case 8:case 9:case 10:case 12:case 13:case 34:case 92:c+=U[d];break;default:if(32>d){c+="\\u00"+y(2,d.toString(16));break}c+=f?n[b]:a.charAt(b)}}return c+'"'},O=function(a,c,b,h,f,n,d){var g,m,k,l,p,r,s,t,q;try{g=c[a]}catch(z){}if("object"==typeof g&&g)if(m=u.call(g),"[object Date]"!=m||v.call(g,
"toJSON"))"function"==typeof g.toJSON&&("[object Number]"!=m&&"[object String]"!=m&&"[object Array]"!=m||v.call(g,"toJSON"))&&(g=g.toJSON(a));else if(g>-1/0&&g<1/0){if(E){l=x(g/864E5);for(m=x(l/365.2425)+1970-1;E(m+1,0)<=l;m++);for(k=x((l-E(m,0))/30.42);E(m,k+1)<=l;k++);l=1+l-E(m,k);p=(g%864E5+864E5)%864E5;r=x(p/36E5)%24;s=x(p/6E4)%60;t=x(p/1E3)%60;p%=1E3}else m=g.getUTCFullYear(),k=g.getUTCMonth(),l=g.getUTCDate(),r=g.getUTCHours(),s=g.getUTCMinutes(),t=g.getUTCSeconds(),p=g.getUTCMilliseconds();
g=(0>=m||1E4<=m?(0>m?"-":"+")+y(6,0>m?-m:m):y(4,m))+"-"+y(2,k+1)+"-"+y(2,l)+"T"+y(2,r)+":"+y(2,s)+":"+y(2,t)+"."+y(3,p)+"Z"}else g=null;b&&(g=b.call(c,a,g));if(null===g)return"null";m=u.call(g);if("[object Boolean]"==m)return""+g;if("[object Number]"==m)return g>-1/0&&g<1/0?""+g:"null";if("[object String]"==m)return R(""+g);if("object"==typeof g){for(a=d.length;a--;)if(d[a]===g)throw K();d.push(g);q=[];c=n;n+=f;if("[object Array]"==m){k=0;for(a=g.length;k<a;k++)m=O(k,g,b,h,f,n,d),q.push(m===w?"null":
m);a=q.length?f?"[\n"+n+q.join(",\n"+n)+"\n"+c+"]":"["+q.join(",")+"]":"[]"}else B(h||g,function(a){var c=O(a,g,b,h,f,n,d);c!==w&&q.push(R(a)+":"+(f?" ":"")+c)}),a=q.length?f?"{\n"+n+q.join(",\n"+n)+"\n"+c+"}":"{"+q.join(",")+"}":"{}";d.pop();return a}};r.stringify=function(a,c,b){var h,f,n,d;if(F[typeof c]&&c)if("[object Function]"==(d=u.call(c)))f=c;else if("[object Array]"==d){n={};for(var g=0,k=c.length,l;g<k;l=c[g++],(d=u.call(l),"[object String]"==d||"[object Number]"==d)&&(n[l]=1));}if(b)if("[object Number]"==
(d=u.call(b))){if(0<(b-=b%1))for(h="",10<b&&(b=10);h.length<b;h+=" ");}else"[object String]"==d&&(h=10>=b.length?b:b.slice(0,10));return O("",(l={},l[""]=a,l),f,n,h,"",[])}}if(!q("json-parse")){var V=A.fromCharCode,W={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},b,J,l=function(){b=J=null;throw G();},z=function(){for(var a=J,c=a.length,e,h,f,k,d;b<c;)switch(d=a.charCodeAt(b),d){case 9:case 10:case 13:case 32:b++;break;case 123:case 125:case 91:case 93:case 58:case 44:return e=
D?a.charAt(b):a[b],b++,e;case 34:e="@";for(b++;b<c;)if(d=a.charCodeAt(b),32>d)l();else if(92==d)switch(d=a.charCodeAt(++b),d){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:e+=W[d];b++;break;case 117:h=++b;for(f=b+4;b<f;b++)d=a.charCodeAt(b),48<=d&&57>=d||97<=d&&102>=d||65<=d&&70>=d||l();e+=V("0x"+a.slice(h,b));break;default:l()}else{if(34==d)break;d=a.charCodeAt(b);for(h=b;32<=d&&92!=d&&34!=d;)d=a.charCodeAt(++b);e+=a.slice(h,b)}if(34==a.charCodeAt(b))return b++,e;l();default:h=
b;45==d&&(k=!0,d=a.charCodeAt(++b));if(48<=d&&57>=d){for(48==d&&(d=a.charCodeAt(b+1),48<=d&&57>=d)&&l();b<c&&(d=a.charCodeAt(b),48<=d&&57>=d);b++);if(46==a.charCodeAt(b)){for(f=++b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}d=a.charCodeAt(b);if(101==d||69==d){d=a.charCodeAt(++b);43!=d&&45!=d||b++;for(f=b;f<c&&(d=a.charCodeAt(f),48<=d&&57>=d);f++);f==b&&l();b=f}return+a.slice(h,b)}k&&l();if("true"==a.slice(b,b+4))return b+=4,!0;if("false"==a.slice(b,b+5))return b+=5,!1;if("null"==a.slice(b,
b+4))return b+=4,null;l()}return"$"},P=function(a){var c,b;"$"==a&&l();if("string"==typeof a){if("@"==(D?a.charAt(0):a[0]))return a.slice(1);if("["==a){for(c=[];;b||(b=!0)){a=z();if("]"==a)break;b&&(","==a?(a=z(),"]"==a&&l()):l());","==a&&l();c.push(P(a))}return c}if("{"==a){for(c={};;b||(b=!0)){a=z();if("}"==a)break;b&&(","==a?(a=z(),"}"==a&&l()):l());","!=a&&"string"==typeof a&&"@"==(D?a.charAt(0):a[0])&&":"==z()||l();c[a.slice(1)]=P(z())}return c}l()}return a},T=function(a,b,e){e=S(a,b,e);e===
w?delete a[b]:a[b]=e},S=function(a,b,e){var h=a[b],f;if("object"==typeof h&&h)if("[object Array]"==u.call(h))for(f=h.length;f--;)T(h,f,e);else B(h,function(a){T(h,a,e)});return e.call(a,b,h)};r.parse=function(a,c){var e,h;b=0;J=""+a;e=P(z());"$"!=z()&&l();b=J=null;return c&&"[object Function]"==u.call(c)?S((h={},h[""]=e,h),"",c):e}}}r.runInContext=N;return r}var K=typeof define==="function"&&define.amd,F={"function":!0,object:!0},G=F[typeof exports]&&exports&&!exports.nodeType&&exports,k=F[typeof window]&&
window||this,t=G&&F[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;!t||t.global!==t&&t.window!==t&&t.self!==t||(k=t);if(G&&!K)N(k,G);else{var L=k.JSON,Q=k.JSON3,M=!1,A=N(k,k.JSON3={noConflict:function(){M||(M=!0,k.JSON=L,k.JSON3=Q,L=Q=null);return A}});k.JSON={parse:A.parse,stringify:A.stringify}}K&&define(function(){return A})}).call(this);

}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
var Neosavvy = Neosavvy || {};
Neosavvy.Core = Neosavvy.Core || {};
Neosavvy.Core.Utils = Neosavvy.Core.Utils || {};

/**
 * @class Neosavvy.Core.Utils.BrowserUtils
 * @static
 **/
module.exports = Neosavvy.Core.Utils.BrowserUtils = (function () {
    var browser, browserVersion, os, osVersion;

    function _load(userAgent) {
        /* Reset */
        browser = browserVersion = os = osVersion = null;

        /* Evaluate */
        userAgent = userAgent.toLowerCase();

        /* Browser, Browser Version */
        try {
            var operaBrowserParts = /(opr|opera)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);
            var browserParts = /(msie|trident|firefox|chrome|safari)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent);
            browser = (operaBrowserParts && operaBrowserParts.length) ? operaBrowserParts[1] : browserParts[1];
            if (browser === "trident") {
                browser = _CONSTANTS.BROWSER.INTERNET_EXPLORER;

                var tridentVersion = String(parseFloat(browserParts[2]) + 4.0);
                browserVersion = tridentVersion.length === 2 ? tridentVersion + ".0" : tridentVersion;
            } else if (browser === "opera" || browser === "opr") {
                browser = "opr";
                browserVersion = operaBrowserParts[2];
            } else if (browser === "safari" && userAgent.indexOf("phantomjs") === -1) {
                /* Chrome For iOS case */
                if (userAgent.indexOf('crios') !== -1) {
                    browser = _CONSTANTS.BROWSER.CHROME;
                    browserVersion = /(crios\/)((\d|\.)*)/g.exec(userAgent)[2];
                }
                /* Normal safari case */
                else {
                    browserVersion = /(version)(?:.*version)?(?:[ \/])?([\w.]+)/.exec(userAgent)[2];
                }
            } else {
                browserVersion = browserParts[2];
            }
        } catch (e) {
            console.warn("Trouble getting the browser or browser version, check the code or report a bug with the userAgent listed.");
        }

        /* OS */
        try {
            var androidOs = /(android)/.exec(userAgent);
            os = (androidOs && androidOs.length) ? 'android' : /(mac|win|linux|freebsd|mobile|iphone|ipod|ipad|android|blackberry|j2me|webtv)/.exec(userAgent)[1];
        } catch (e) {
            console.warn("Trouble getting the os, check the code or report a bug with the userAgent listed.");
        }

        /* OS Version */
        try {
            switch (os) {
                case _CONSTANTS.OS.OSX:
                case _CONSTANTS.OS.IPHONE:
                case _CONSTANTS.OS.IPAD:
                case _CONSTANTS.OS.WINDOWS:
                case _CONSTANTS.OS.ANDROID:
                case _CONSTANTS.OS.BLACKBERRY:
                case _CONSTANTS.OS.WEB_TV:
                    osVersion = /(mac\sos\sx\s|iphone os\s|ipad;\scpu\sos\s|windows nt\s|android\s|blackberry\s|webtv\/)((\d|\.|_)*)/.exec(userAgent)[2].replace(/_/g, ".");
                    break;
                default:
                    osVersion = null;
            }
        } catch (error) {
            console.warn("Trouble getting the os version, check the code or report a bug with the userAgent listed.");
        }
    }

    var _CONSTANTS = {
        OS: {
            OSX: "mac",
            WINDOWS: "win",
            LINUX: "linux",
            FREE_BSD: "freebsd",
            IPHONE: "iphone",
            IPOD: "ipod",
            IPAD: "ipad",
            ANDROID: "android",
            BLACKBERRY: "blackberry",
            J2ME: "j2me",
            WEB_TV: "webtv"
        },
        BROWSER: {
            INTERNET_EXPLORER: "msie",
            FIREFOX: "firefox",
            CHROME: "chrome",
            SAFARI: "safari",
            OPERA: "opr"
        }
    };

    function _info() {
        return {
            browser: browser,
            browserVersion: browserVersion,
            os: os,
            osVersion: osVersion
        }
    }

    //Load Library
    _load(window.navigator.userAgent);

    //Base Definitions
    var def = {
        CONSTANTS: _CONSTANTS,
        info: _info
    };

    //browser, browserVersion, os, osVersion methods
    for (var key in _info()) {
        def[key] = (function (key) {
            return function () {
                return _info()[key];
            }
        })(key);
    }

    function _nameFromKey(key) {
        return key.toLowerCase().replace(/^.|_./g,function (val) {
            return val.toUpperCase();
        }).replace(/_/g, "");
    }

    //is... methods
    for (var key in _CONSTANTS.BROWSER) {
        def['is' + _nameFromKey(key)] = (function (key) {
            return function () {
                return (browser === _CONSTANTS.BROWSER[key]);
            }
        })(key);
    }
    for (var key in _CONSTANTS.OS) {
        def['is' + _nameFromKey(key)] = (function (key) {
            return function () {
                return (os === _CONSTANTS.OS[key]);
            }
        })(key);
    }

    //for testing
    if (window.jasmine) {
        def['reload'] = _load;
    }

    return def;
})();

},{}],3:[function(require,module,exports){
var fbQuery = require('./fbquery');
var fbDash = require('./fbdash');
var browserUtils = require('./browser');
var JSON = require('../lib/json3/json3.min');

(function (window, angular, browserUtils, $, jQuery, _, JSON) {
    if (browserUtils) {
        var _policies = {
            DENY_ALL_BROWSERS_BY_DEFAULT: false,
            DENY_ALL_OS_BY_DEFAULT: false
        };

        var _defaultTemplate = '<div><label>Your browser is not supported.</label></div>'

        function _getBoolean(val) {
            return (val && val !== false && val !== '0');
        }

        function _isSetToFalse(val) {
            return (val === false || val === 'false' || val === 0 || val === '0');
        }

        function _generatePolicies(map) {
            for (var key in map) {
                _policies["ALLOW_" + key] = null;
                _policies["MIN_" + key] = null;
                _policies["MAX_" + key] = null;
            }
        }

        _generatePolicies(browserUtils.CONSTANTS.BROWSER);
        _generatePolicies(browserUtils.CONSTANTS.OS);

        //Functions
        function _version(version) {
            version = String(version);
            function _padZeroesForSize(str, size) {
                while (str.length < size) {
                    str += "0"
                }
                return str;
            }

            function _compare(version, otherVersion) {
                if (version === otherVersion) {
                    return true;
                } else {
                    version = version.split(".");
                    otherVersion = otherVersion.split(".");

                    //Comparison iteration
                    for (var i = 0; i < Math.max(version.length, otherVersion.length); i++) {
                        if (i === 0) {
                            if (parseInt(version[i]) !== parseInt(otherVersion[i])) {
                                return parseInt(version[i]) > parseInt(otherVersion[i]);
                            }
                        } else {
                            if (version.length > i && otherVersion.length > i) {
                                var maxLength = Math.max(version[i].length, otherVersion[i].length);
                                var versionInt = parseInt(_padZeroesForSize(version[i], maxLength));
                                var otherVersionInt = parseInt(_padZeroesForSize(otherVersion[i], maxLength));
                                if (versionInt !== otherVersionInt) {
                                    return versionInt > otherVersionInt;
                                }
                            } else if (version.length > i) {
                                return true
                            } else {
                                return false;
                            }
                        }
                    }
                }
            }

            this.isGreaterThanEqualTo = function (otherVersion) {
                return _compare(version, String(otherVersion));
            };
            this.isLessThanEqualTo = function (otherVersion) {
                return _compare(otherVersion, String(version));
            };
        }

        function _checkPolicy(element, info) {
            var _myPolicies = JSON.parse(JSON.stringify(_policies)); //Copy
            for (var i = 0; i < element.attributes.length; i++) {
                var constantIzedAttribute = element.attributes[i].name.replace(/-/g, "_").toUpperCase();

                //This still can equal null if it needs to
                if (_myPolicies[constantIzedAttribute] !== undefined) {
                    _myPolicies[constantIzedAttribute] = element.attributes[i].value;
                }
            }

            var browserKey = _.invert(browserUtils.CONSTANTS.BROWSER)[info.browser];
            var osKey = _.invert(browserUtils.CONSTANTS.OS)[info.os];

            //Deny by default policy, or disallowed browsers, or disallowed os's
            if ((_getBoolean(_myPolicies.DENY_ALL_BROWSERS_BY_DEFAULT) && !_getBoolean(_myPolicies["ALLOW_" + browserKey])) ||
                (_getBoolean(_myPolicies.DENY_ALL_OS_BY_DEFAULT) && !_getBoolean(_myPolicies["ALLOW_" + osKey])) ||
                _isSetToFalse(_myPolicies["ALLOW_" + browserKey]) || _isSetToFalse(_myPolicies["ALLOW_" + osKey])) {
                return false;
            }

            //Version policy
            if ((_myPolicies["MIN_" + browserKey] && !new _version(info.browserVersion).isGreaterThanEqualTo(_myPolicies["MIN_" + browserKey])) ||
                (_myPolicies["MAX_" + browserKey] && !new _version(info.browserVersion).isLessThanEqualTo(_myPolicies["MAX_" + browserKey])) ||
                (_myPolicies["MIN_" + osKey] && !new _version(info.osVersion).isGreaterThanEqualTo(_myPolicies["MIN_" + osKey])) ||
                (_myPolicies["MAX_" + osKey] && !new _version(info.osVersion).isLessThanEqualTo(_myPolicies["MAX_" + osKey]))) {
                return false;
            }

            return true;
        }

        function _bootstrap(element) {
            if (element.getAttribute('bootstrap-script')) {
                $.getScript(element.getAttribute('bootstrap-script'));
            } else if (angular) {
                angular.element(document).ready(function () {
                    angular.bootstrap(element, [element.getAttribute('ns-fallback')]);
                });
            } else {
                throw "You are a bypassing browser fallback, but you have defined no bootstrap-script on your ns-fallback element.";
            }
        }

        function _applyFallback(element, info) {
            element = $(element);
            if (element.attr('fallback-element')) {
                element = $(element.find(element.attr('fallback-element')));
            }

            if (!element) {
                throw "Fallback element not found in dom, check your specification!";
            }

            //Make sure nothing else in the element
            element.empty();

            //Append the template
            if (element.attr('fallback-template')) {
                $.get(element.attr('fallback-template')).
                    done(function (template) {
                        element.append(
                            template.
                                replace(/{{browser}}/g, _.invert(browserUtils.CONSTANTS.BROWSER)[info.browser].toLowerCase().replace(/_/g, " ")).
                                replace(/{{browserVersion}}/g, info.browserVersion).
                                replace(/{{os}}/g, _.invert(browserUtils.CONSTANTS.OS)[info.os].toLowerCase().replace(/_/g, " ")).
                                replace(/{{osVersion}}/g, info.osVersion)
                        );
                    }).
                    fail(function () {
                        element.append(_defaultTemplate);
                        console.error("The fallback template was not found, check your path and server setup.");
                    });
            } else {
                element.append(_defaultTemplate);
            }
        }

        function _evaluateDom() {
            var found = [],
                allElements = document.getElementsByTagName("*"),
                hasAttributeFallback;

            //IE7 hasAttribute fallback
            if (!window.Element || !window.Element.prototype || !window.Element.prototype.hasAttribute) {
                hasAttributeFallback = function hasAttribute(attrName) {
                    return typeof this[attrName] !== 'undefined';
                }
            }

            for (var i = 0; i < allElements.length; i++) {
                //Apply if valid
                if (hasAttributeFallback) {
                    allElements[i].hasAttribute = hasAttributeFallback;
                }

                //This case happens in all cases
                if (allElements[i].hasAttribute('ns-fallback')) {
                    found.push(allElements[i]);
                }
            }

            //Evaluate the found elements
            if (found.length) {
                var info = browserUtils.info();
                for (var i = 0; i < found.length; i++) {
                    if (_checkPolicy(found[i], info)) {
                        _bootstrap(found[i]);
                    } else {
                        _applyFallback(found[i], info);
                    }
                }

            } else {
                console.warn("You are including the fallback library, but are clearly not instantiating it anywhere. Just remove it.")
            }
        };

        //Call to kick off dom evaluation
        $(document).ready(_evaluateDom);

        if (window.jasmine) { /* Declarations */ window.Neosavvy = window.Neosavvy || {}; window.Neosavvy.Fallback = window.Neosavvy.Fallback || {}; Neosavvy.Fallback.evaluateDom = _evaluateDom; Neosavvy.Fallback.defaultTemplate = _defaultTemplate; }
    } else {
        throw "You must include neosavvy-javascript-core to use the fallback library!";
    }
})(window, window.angular, browserUtils, fbQuery, fbQuery, fbDash, JSON);
},{"../lib/json3/json3.min":1,"./browser":2,"./fbdash":4,"./fbquery":5}],4:[function(require,module,exports){
module.exports = window.fbDash = {
    invert: function invert(object) {
        var result = {};
        for (var key in object) {
            result[typeof object[key] == 'object' ? JSON.stringify(object[key]) : object[key]] = key;
        }
        return result;
    }
};
},{}],5:[function(require,module,exports){
module.exports = window.fbQuery = (function (window, undefined) {

    function _fn(el) {
        el = el || document;

        /* Document Methods */
        this.ready = function (fn) {
            window.onload = fn;
        };

        /* Element Methods */
        this.find = function (selector) {
            var els;
            if (el && selector) {
                if (selector.charAt(0) === '#') {
                    els = [document.getElementById(selector.replace(/#/g, ''))];
                } else if (selector.charAt(0) === '.') {
                    els = el.getElementsByClassName(selector.replace(/\./g, ''));
                } else {
                    els = el.getElementsByTagName(selector);
                }
            }
            return (els && els.length ? els[0] : null);
        };
        this.attr = function (name) {
            return el ? el.getAttribute(name) : null;
        };
        this.empty = function () {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
            return this;
        };
        this.append = function (html) {
            el.innerHTML += html;
            return this;
        };

        /* Return for everything */
        return this;
    };

    _fn.ajax = function (params) {
        if (!params.url) {
            throw "You must provide a url param in order to make an ajax request with fbQuery.";
        }

        var xhr = new XMLHttpRequest(), doneHandler, failHandler;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var resp = xhr.responseText;
                if (xhr.status === 200 && doneHandler) {
                    doneHandler(resp, xhr.status, xhr.getAllResponseHeaders());
                } else if (xhr.status !== 200 && failHandler) {
                    failHandler(resp, xhr.status, xhr.getAllResponseHeaders());
                }
            }
        };

        xhr.onerror = function () {
            if (failHandler) {
                var resp = xhr.responseText;
                failHandler(resp, xhr.status, xhr.getAllResponseHeaders());
            }
        };

        var data = params.data;
        if (data && !_.isString(data)) {
            data = JSON.stringify(data);
        }

        xhr.withCredentials = params.cors || false;
        xhr.open(params.method || 'GET', params.url, true);
        xhr.send(data);

        this.done = function (handler) {
            doneHandler = handler;
            return this;
        };
        this.fail = function (handler) {
            failHandler = handler;
            return this;
        };

        return this;
    };

    _fn.get = function (path) {
        return _fn.ajax({
            url: path
        });
    };

    _fn.getScript = function (path) {
        return _fn.ajax({
            url: path,
            type: 'script'
        }).done(eval);
    };

    return _fn;
})(window, undefined);
},{}]},{},[2,3,4,5])