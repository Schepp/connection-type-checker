# connection-type-checker

Utility that tries to figure out if you are on cellular or broadband. It either uses the [Network Information API](https://w3c.github.io/netinfo/) ([browser support](http://caniuse.com/#feat=netinfo)) or falls back to measuring latencies via [Resource Timing API](http://www.w3.org/TR/resource-timing/) ([browser support](http://caniuse.com/#feat=resource-timing)). If none of them is available, it will get the client's public IP from [ipify](https://www.ipify.org/) and compare that with the [GURFL list of mobile carrier IP blocks](http://www.nitingautam.com/operator.csv). If the connection type can not be specified, it will settle on broadband by default.

## Usage

Include `connection-type-checker.js` script in your HTML file:

```html
<script src="connection-type-checker.js"></script>
```

Execute `connectionTypeChecker.getConnectionType` method with a callback function:

```js
connectionTypeChecker.getConnectionType(function(result) {
    alert(result);
});
```

## Possible return values

* `'offline'` for when `navigator.onLine` returns `false` or the Network Information API returns `'none'`, or when Resource Timing AJAX call fails.
* `'cellular'` for when the Network Information API returns `'cellular'` or `'bluetooth'`, or when Resource Timing API measures latencies >= 100 ms, or when the client's IP is amongst the list of mobile carriers.
* `'broadband'` for when the Network Information API returns `'wifi'`, `'wimax'` or `'ethernet'`, or when Resource Timing API measures latencies < 100 ms, when the client's IP is not amongst the list of mobile carriers, or as the fallback value when none of the aforementioned works out.

## Demo

[https://schepp.github.io/connection-type-checker/test/](https://schepp.github.io/connection-type-checker/test/)
