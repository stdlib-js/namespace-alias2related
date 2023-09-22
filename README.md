<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# alias2related

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return aliases related to a specified alias.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import alias2related from 'https://cdn.jsdelivr.net/gh/stdlib-js/namespace-alias2related@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/namespace-alias2related/tags). For example,

```javascript
import alias2related from 'https://cdn.jsdelivr.net/gh/stdlib-js/namespace-alias2related@v0.1.0-esm/index.mjs';
```

#### alias2related( alias )

Returns aliases related to a specified `alias`.

```javascript
var out = alias2related( 'base.sin' );
// returns [...]
```

If provided an unrecognized `alias`, the function returns `null`.

```javascript
var out = alias2related( 'unrecognized_alias_beep_boop_bop_bip' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- TODO: better example -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import aliases from 'https://cdn.jsdelivr.net/gh/stdlib-js/namespace-aliases@esm/index.mjs';
import alias2related from 'https://cdn.jsdelivr.net/gh/stdlib-js/namespace-alias2related@esm/index.mjs';

var list;
var len;
var idx;
var v;
var i;

list = aliases();
len = list.length;

for ( i = 0; i < 100; i++ ) {
    idx = discreteUniform( 0, len-1 );
    v = list[ idx ];
    console.log( 'alias: %s. related: %s.', v, alias2related( v ).join( ', ' ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- <license> -->

## License

The data files (databases) are licensed under an [Open Data Commons Public Domain Dedication & License 1.0][pddl-1.0] and their contents are licensed under [Creative Commons Zero v1.0 Universal][cc0]. The software is licensed under [Apache License, Version 2.0][apache-license].

<!-- </license> -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/namespace-alias2pkg`][@stdlib/namespace/alias2pkg]</span><span class="delimiter">: </span><span class="description">return the package name associated with a specified alias.</span>
-   <span class="package-name">[`@stdlib/namespace-aliases`][@stdlib/namespace/aliases]</span><span class="delimiter">: </span><span class="description">standard library aliases.</span>
-   <span class="package-name">[`@stdlib/namespace-pkg2related`][@stdlib/namespace/pkg2related]</span><span class="delimiter">: </span><span class="description">return package names related to a specified package name.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/namespace-alias2related.svg
[npm-url]: https://npmjs.org/package/@stdlib/namespace-alias2related

[test-image]: https://github.com/stdlib-js/namespace-alias2related/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/namespace-alias2related/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/namespace-alias2related/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/namespace-alias2related?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/namespace-alias2related.svg
[dependencies-url]: https://david-dm.org/stdlib-js/namespace-alias2related/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/namespace-alias2related#cli
[cli-url]: https://github.com/stdlib-js/namespace-alias2related/tree/cli
[@stdlib/namespace-alias2related]: https://github.com/stdlib-js/namespace-alias2related/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/namespace-alias2related/tree/deno
[umd-url]: https://github.com/stdlib-js/namespace-alias2related/tree/umd
[esm-url]: https://github.com/stdlib-js/namespace-alias2related/tree/esm
[branches-url]: https://github.com/stdlib-js/namespace-alias2related/blob/main/branches.md

[pddl-1.0]: http://opendatacommons.org/licenses/pddl/1.0/

[cc0]: https://creativecommons.org/publicdomain/zero/1.0

[apache-license]: https://www.apache.org/licenses/LICENSE-2.0

<!-- <related-links> -->

[@stdlib/namespace/alias2pkg]: https://github.com/stdlib-js/namespace-alias2pkg/tree/esm

[@stdlib/namespace/aliases]: https://github.com/stdlib-js/namespace-aliases/tree/esm

[@stdlib/namespace/pkg2related]: https://github.com/stdlib-js/namespace-pkg2related/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
