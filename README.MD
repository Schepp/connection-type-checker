# connection-type-checker

Utility that tries to figure out if you are on cellular or broadband. It either uses the [Network Information API](https://w3c.github.io/netinfo/) or falls back to measuring latencies via [Resource Timing API](http://www.w3.org/TR/resource-timing/). If none of them is available, the connection type can not be specified. So use this utility on combination together with a graceful degradation approach.

## Usage

Include `connection-type-checker.js` script in your HTML file:

```html
<script src="connection-type-checker.js"></script>
```

Execute `window.returnExports.getConnectionType` with a callback function:

```js
window.returnExports.getConnectionType(function(result) {
    alert(result);
});
```

## Possible return values

* `'unknown'` for when neither of the above mentioned APIs is available (with would be on Safari)
* `'cellular'` for when the Network Information API returns `'cellular'` or `'bluetooth'`, or when Resource Timing API measures latencies >= 100 ms.
* `'broadband'` for when the Network Information API returns `'wifi'`, `'wimax'` or `'ethernet'`, or when Resource Timing API measures latencies < 100 ms.
* `'offline'` for when `navigator.onLine` returns `false´ or the Network Information API returns `'none'`, or when Resource Timing AJAX call fails.

## Demo

[https://schepp.github.io/connection-type-checker/test/](https://schepp.github.io/connection-type-checker/test/)
