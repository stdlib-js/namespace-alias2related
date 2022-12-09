/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isString = require( '@stdlib/assert-is-string' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var ALIAS_TO_RELATED = require( './../data/data.json' );


// MAIN //

/**
* Returns aliases related to a specified alias.
*
* @param {string} alias - alias
* @throws {TypeError} must provide a string
* @returns {(Array|StringArray|null)} related aliases
*
* @example
* var v = alias2related( 'base.sin' );
* // returns [...]
*/
function alias2related( alias ) {
	if ( !isString( alias ) ) {
		throw new TypeError( format( '0LW3N', alias ) );
	}
	if ( hasOwnProp( ALIAS_TO_RELATED, alias ) ) {
		return ALIAS_TO_RELATED[ alias ].slice();
	}
	return null;
}


// EXPORTS //

module.exports = alias2related;