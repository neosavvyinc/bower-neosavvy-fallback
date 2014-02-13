/*! neosavvy-fallback - v0.0.3 - 2014-02-13
* Copyright (c) 2014 Neosavvy, Inc.; Licensed  */
(function (window, angular, nsCore) {
    if (nsCore) {
        //Declarations
        window.Neosavvy = window.Neosavvy || {};
        window.Neosavvy.Fallback = window.Neosavvy.Fallback || {};

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

        _generatePolicies(nsCore.Utils.BrowserUtils.CONSTANTS.BROWSER);
        _generatePolicies(nsCore.Utils.BrowserUtils.CONSTANTS.OS);

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
            var _myPolicies = angular.copy(_policies);
            for (var i = 0; i < element.attributes.length; i++) {
                var constantIzedAttribute = element.attributes[i].name.replace(/-/g, "_").toUpperCase();

                //This still can equal null if it needs to
                if (_myPolicies[constantIzedAttribute] !== undefined) {
                    _myPolicies[constantIzedAttribute] = element.attributes[i].value;
                }
            }

            var browserKey = _.invert(nsCore.Utils.BrowserUtils.CONSTANTS.BROWSER)[info.browser];
            var osKey = _.invert(nsCore.Utils.BrowserUtils.CONSTANTS.OS)[info.os];

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
            angular.element(document).ready(function () {
                angular.bootstrap(element, [element.getAttribute('ns-fallback')]);
            });
        }

        function _applyFallback(element, info) {
            element = $(element);
            if (element.attr('fallback-element')) {
                element = $(element.find(element.attr('fallback-element'))[0]);
            }
            if (element.length === 0) {
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
                                replace(/{{browser}}/g, _.invert(nsCore.Utils.BrowserUtils.CONSTANTS.BROWSER)[info.browser].toLowerCase().replace(/_/g, " ")).
                                replace(/{{browserVersion}}/g, info.browserVersion).
                                replace(/{{os}}/g, _.invert(nsCore.Utils.BrowserUtils.CONSTANTS.OS)[info.os].toLowerCase().replace(/_/g, " ")).
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
                hasAttributeFallback = function hasAttribute (attrName) {
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
                var info = nsCore.Utils.BrowserUtils.info();
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

        
    } else {
        throw "You must include neosavvy-javascript-core to use the fallback library!";
    }
})(window, angular, Neosavvy.Core);