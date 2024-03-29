/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var isArray = require( '@stdlib/assert-is-array' );
var PI = require( '@stdlib/constants-float64-pi' );
var EPS = require( '@stdlib/constants-float64-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var iterContinuedFractionSeq = require( './../lib' );


// FUNCTIONS //

function evaluate( terms ) {
	var sum;
	var N;
	var i;

	N = terms.length;
	sum = 0.0;
	if ( N > 1 ) {
		sum = 1.0 / terms[ N-1 ];
		for ( i = N-2; i > 0; i-- ) {
			sum = 1.0 / ( terms[ i ] + sum );
		}
	}
	sum += terms[ 0 ];
	return sum;
}


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterContinuedFractionSeq, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not a finite number', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		1.0 / 0.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFractionSeq( value );
		};
	}
});

tape( 'the function throws an error if provided a first argument which is not a finite number (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		1.0 / 0.0,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFractionSeq( value, {} );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not an object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFractionSeq( PI, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterContinuedFractionSeq( PI, {
				'iter': value
			});
		};
	}
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( PI );
	t.equal( it.next.length, 0, 'has zero arity' );

	// Reference: https://oeis.org/A001203
	expected = [ 3, 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 3 ]; // canonical form

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (options)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( PI, {
		'returns': 'terms'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	// Reference: https://oeis.org/A001203
	expected = [ 3, 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 3 ]; // canonical form

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction convergents which can be obtained given the precision of an input number', function test( t ) {
	var expected;
	var actual;
	var terms;
	var delta;
	var tol;
	var it;
	var v;
	var i;

	it = iterContinuedFractionSeq( PI, {
		'returns': 'convergents'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	// Reference: https://oeis.org/A001203
	terms = [ 3, 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 3 ]; // canonical form

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < terms.length ) {
			v = actual.value;
			expected = evaluate( terms.slice( 0, i+1 ) );
			if ( v === expected || i === terms.length-1 ) {
				t.equal( v, expected, 'returns expected value' );
			} else {
				delta = abs( v - expected );
				tol = 1.3 * EPS * abs( expected );
				t.equal( delta <= tol, true, 'i: '+i+'. actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
			}
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction convergents which can be obtained given the precision of an input number (negative)', function test( t ) {
	var expected;
	var actual;
	var terms;
	var delta;
	var tol;
	var it;
	var v;
	var i;

	it = iterContinuedFractionSeq( -PI, {
		'returns': 'convergents'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	terms = [ -3, -7, -15, -1, -292, -1, -1, -1, -2, -1, -3, -1, -14, -3 ]; // canonical form

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < terms.length ) {
			v = actual.value;
			expected = evaluate( terms.slice( 0, i+1 ) );
			if ( v === expected || i === terms.length-1 ) {
				t.equal( v, expected, 'returns expected value' );
			} else {
				delta = abs( v - expected );
				tol = 1.3 * EPS * abs( expected );
				t.equal( delta <= tol, true, 'i: '+i+'. actual: '+v+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
			}
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms and their associated convergents which can be obtained given the precision of an input number', function test( t ) {
	var expected;
	var actual;
	var terms;
	var delta;
	var tol;
	var it;
	var v;
	var i;

	it = iterContinuedFractionSeq( PI, {
		'returns': '*'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	// Reference: https://oeis.org/A001203
	terms = [ 3, 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 3 ]; // canonical form

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < terms.length ) {
			v = actual.value;

			t.equal( isArray( v ), true, 'returns expected value' );
			t.equal( v.length, 2, 'returns expected value' );
			t.equal( v[ 0 ], terms[ i ], 'returns expected value' );

			expected = evaluate( terms.slice( 0, i+1 ) );
			if ( v[ 1 ] === expected || i === terms.length-1 ) {
				t.equal( v[ 1 ], expected, 'returns expected value' );
			} else {
				delta = abs( v[ 1 ] - expected );
				tol = 1.3 * EPS * abs( expected );
				t.equal( delta <= tol, true, 'i: '+i+'. actual: '+v[ 1 ]+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
			}
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms and their associated convergents which can be obtained given the precision of an input number (negative)', function test( t ) {
	var expected;
	var actual;
	var terms;
	var delta;
	var tol;
	var it;
	var v;
	var i;

	it = iterContinuedFractionSeq( -PI, {
		'returns': '*'
	});
	t.equal( it.next.length, 0, 'has zero arity' );

	// Reference: https://oeis.org/A001203
	terms = [ -3, -7, -15, -1, -292, -1, -1, -1, -2, -1, -3, -1, -14, -3 ]; // canonical form

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < terms.length ) {
			v = actual.value;

			t.equal( isArray( v ), true, 'returns expected value' );
			t.equal( v.length, 2, 'returns expected value' );
			t.equal( v[ 0 ], terms[ i ], 'returns expected value' );

			expected = evaluate( terms.slice( 0, i+1 ) );
			if ( v[ 1 ] === expected || i === terms.length-1 ) {
				t.equal( v[ 1 ], expected, 'returns expected value' );
			} else {
				delta = abs( v[ 1 ] - expected );
				tol = 1.3 * EPS * abs( expected );
				t.equal( delta <= tol, true, 'i: '+i+'. actual: '+v[ 1 ]+'. expected: '+expected+'. delta: '+delta+'. tol: '+tol+'.' );
			}
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (integer)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 3 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 3 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative integer)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -3 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ -3 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (less than 1)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 0.1 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, 10 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (less than 1)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 0.85 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, 1, 5, 1, 2 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (less than 1)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 0.15 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, 6, 1, 2 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative, greater than -1)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -0.1 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, -10 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative, greater than -1)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -0.85 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, -1, -5, -1, -2 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative, greater than -1)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -0.15 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, -6, -1, -2 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (tiny)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 1.0e-308 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, 1.0e308 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative, tiny)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -1.0e-308 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 0, -1.0e308 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (huge)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 1.0e308 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 1.0e308 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative, huge)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -1.0e308 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ -1.0e308 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (larger)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 12.3 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ 12, 3, 3 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (negative, larger)', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( -12.3 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [ -12, -3, -3 ];

	for ( i = 0; i < 100; i++ ) {
		actual = it.next();
		if ( i < expected.length ) {
			t.equal( actual.value, expected[ i ], 'returns expected value' );
			t.equal( actual.done, false, 'returns expected value' );
		} else {
			t.equal( actual.value, void 0, 'returns expected value' );
			t.equal( actual.done, true, 'returns expected value' );
		}
	}
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number', function test( t ) {
	var expected;
	var actual;
	var it;
	var i;

	it = iterContinuedFractionSeq( 3.245 );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 12,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function returns an iterator protocol-compliant object which generates a list of all continued fraction terms which can be obtained given the precision of an input number (iteration limit)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	opts = {
		'iter': 20
	};
	it = iterContinuedFractionSeq( 3.245, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'value': 12,
			'done': false
		},
		{
			'value': 4,
			'done': false
		},
		{
			'done': true
		}
	];

	actual = [];
	for ( i = 0; i < expected.length; i++ ) {
		actual.push( it.next() );
	}
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (1)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 1
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (2)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 2
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (3)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 16,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 3
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (3; negative)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': -3,
			'done': false
		},
		{
			'value': -7,
			'done': false
		},
		{
			'value': -16,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 3
	};
	it = iterContinuedFractionSeq( -PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (4)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 4
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (5)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 293,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 5
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (6)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 292,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 6
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (7)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 292,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 7
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (8)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 292,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 8
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (9)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 292,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 3,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 9
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports limiting the number of iterations (10)', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 15,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 292,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'value': 2,
			'done': false
		},
		{
			'value': 1,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'iter': 10
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < opts.iter; i++ ) {
		actual.push( it.next() );
	}
	actual.push( it.next() );

	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the function supports specifying a tolerance', function test( t ) {
	var expected;
	var actual;
	var opts;
	var it;
	var o;
	var i;

	expected = [
		{
			'value': 3,
			'done': false
		},
		{
			'value': 7,
			'done': false
		},
		{
			'value': 16,
			'done': false
		},
		{
			'done': true
		}
	];

	opts = {
		'tol': 1.0e-7
	};
	it = iterContinuedFractionSeq( PI, opts );
	t.equal( it.next.length, 0, 'has zero arity' );

	actual = [];
	for ( i = 0; i < 100; i++ ) {
		o = it.next();
		actual.push( o );
		if ( o.done ) {
			break;
		}
	}
	t.deepEqual( actual, expected, 'returns expected values' );
	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (no argument)', function test( t ) {
	var it;
	var r;

	it = iterContinuedFractionSeq( PI );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'the returned iterator has a `return` method for closing an iterator (argument)', function test( t ) {
	var it;
	var r;

	it = iterContinuedFractionSeq( PI );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.next();
	t.equal( typeof r.value, 'number', 'returns a number' );
	t.equal( r.done, false, 'returns expected value' );

	r = it.return( 'finished' );
	t.equal( r.value, 'finished', 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	r = it.next();
	t.equal( r.value, void 0, 'returns expected value' );
	t.equal( r.done, true, 'returns expected value' );

	t.end();
});

tape( 'if an environment supports `Symbol.iterator`, the returned iterator is iterable', function test( t ) {
	var iterContinuedFractionSeq;
	var it1;
	var it2;
	var i;

	iterContinuedFractionSeq = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': '__ITERATOR_SYMBOL__'
	});

	it1 = iterContinuedFractionSeq( PI );
	t.equal( typeof it1[ '__ITERATOR_SYMBOL__' ], 'function', 'has method' );
	t.equal( it1[ '__ITERATOR_SYMBOL__' ].length, 0, 'has zero arity' );

	it2 = it1[ '__ITERATOR_SYMBOL__' ]();
	t.equal( typeof it2, 'object', 'returns an object' );
	t.equal( typeof it2.next, 'function', 'has method' );
	t.equal( typeof it2.return, 'function', 'has method' );

	for ( i = 0; i < 10; i++ ) {
		t.equal( it2.next().value, it1.next().value, 'returns expected value' );
	}
	t.end();
});

tape( 'if an environment does not support `Symbol.iterator`, the returned iterator is not "iterable"', function test( t ) {
	var iterContinuedFractionSeq;
	var it;

	iterContinuedFractionSeq = proxyquire( './../lib/main.js', {
		'@stdlib/symbol-iterator': false
	});

	it = iterContinuedFractionSeq( PI );
	t.equal( it[ iteratorSymbol ], void 0, 'does not have property' );

	t.end();
});
