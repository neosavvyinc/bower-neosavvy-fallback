fallback
===============

The Neosavvy Fallback plan for unsupported browsers, platforms and their versions.

## Getting Started
Via bower,

    bower install neosavvy-fallback

### Development Version

Install all through npm,

    npm install

Install bower,

    sudo npm -g install bower

Install Grunt,

    sudo npm -g install grunt-cli

Scripts dependencies,

    bower install

To compile source code,

    grunt

To run unit tests while developing,

    grunt karma:unit


## Dependencies

```JavaScript
/* jQuery 1.9.1 is used for the purpose of falling back
to older browsers, conditionally include it if you have,
a newer version available */

"angular": "1.2.4",
"neosavvy-javascript-core": "0.0.7",
"jquery": "1.9.1"
```


## How to use

Put this in the place of what would otherwise be the ng-app tag.

```HTML
<body ng-app="myAngularApp"> ... </body>

<!-- Becomes... -->

<body ns-fallback="myAngularApp"> ... </body>
```

Everything is allowed by default. Disallow certain browsers (Default Template).

```HTML
<body ns-fallback="myAngularApp" allow-internet-explorer="false"> ... </body>
```

Disallow multiple browsers, os's, or versions.

```HTML
<body ns-fallback="myAngularApp"
  allow-internet-explorer="false"
  allow-android="false"
  min-firefox="25"
  max-opera="15.2"> ... </body>
```

Allow at will, deny all browsers by default.

```HTML
<body ns-fallback="myAngularApp"
  deny-all-browsers-by-default="true"
  allow-chrome="true"> ... </body>
```

Allow at will, deny all operating systems by default.

```HTML
<body ns-fallback="myAngularApp"
  deny-all-os-by-default="true"
  allow-windows="true"> ... </body>
```

Specify custom template for fallback. Available variables:

{{browser}}, {{browserVersion}}, {{os}}, {{osVersion}}

```HTML
<body ns-fallback="myAngularApp"
  min-internet-explorer="10"
  fallback-template="app/views/browser-not-supported.html"> ... </body>
```


## Coming Soon

* As needed loading of jQuery 1.9.1.
* Support for custom bootstrap scripts (instead of just ng-app).
* Non Angular support (Ember, Backbone, Whatever you like).