(function () {
    'use strict';

    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define([], factory);
        } else if (typeof module === 'object' && module.exports) {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports,
            // like Node.
            module.exports = factory();
        } else {
            // Browser globals (root is window)
            root.returnExports = factory();
        }
    }(this, function () {
        function getConnectionType(callback) {
            var connection =
                navigator.connection ||
                navigator.msConnection ||
                navigator.mozConnection ||
                navigator.webkitConnection;

            if (typeof navigator.onLine !== 'undefined' && !navigator.onLine) {
                callback.call(undefined, 'offline');
            }
            else if (connection) {
                if (window.console) {
                    console.log('Using navigator.connection');
                }

                switch (connection.type) {
                    default:
                        callback.call(undefined, 'broadband');
                        break;

                    case 'none':
                        callback.call(undefined, 'offline');
                        break;

                    case 'bluetooth':
                    case 'cellular':
                        callback.call(undefined, 'cellular');
                        break;
                }
            }
            else if (window.performance && window.performance.getEntries) {
                var req = new XMLHttpRequest();

                if (window.console) {
                    console.log('Using window.performance');
                }

                req.addEventListener('load', function () {
                    var entries = window.performance.getEntries(),
                        latency = entries[0].responseStart - entries[0].requestStart;

                    if (latency >= 50) {
                        callback.call(undefined, 'cellular');
                    } else {
                        callback.call(undefined, 'broadband');
                    }
                });
                req.addEventListener('error', function () {
                    callback.call(undefined, 'offline');
                });
                req.open('GET', location.pathname + '?nocache=' + (new Date()).getTime());
                req.send();
            } else {
                callback.call(undefined, 'unknown');
            }
        }

        // Just return a value to define the module export.
        // This example returns an object, but the module
        // can return a function as the exported value.
        return {
            getConnectionType: getConnectionType
        };
    }));
})();
