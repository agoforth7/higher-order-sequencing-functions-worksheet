// Part 1

// Exercise 1.1
// forEach() should take an array and a callback function. It should execute the callback function with each item in the array.

function forEach (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

// Test 1
function product (a, b) {
	return a * b;
}

var x = [9, 22];

forEach(x, product);

console.assert(x = 198);

// Test 2
function learn (type) {
	return type + ' lessons';
}

var y = ['music', 'billiards', 'violin'];

forEach(y, learn);

console.assert(y[0] = 'music lessons');



//Exercise 1.2
// map() should take an array and a callback function. It should create a new array with the results of executing the callback with every value in the array.

function map (array, callback) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray[i] = callback(array[i]);
	}
	return newArray;
}

// Test 1
var z = ['My', 'dog', 'hates', 'thunder'];

map(z, function (str) {
	str = str + '!';
});

console.assert(z[3] = 'thunder!');

// Test 2;
map(y, function (str) {
	str = str + 'is awesome!';
});

console.assert(y[1] = 'billiards is awesome!');



// Exercise 1.3
// reduce() should take an array and a callback function. It should return a single value that is the result of executing the callback with every value in the array along with the previous result.

function reduce (array, callback) {
	var result = array[0];
	for (var i = 1; i < array.length; i++) {
		result = callback(result, array[i]);
	}
	return result;
}

// Test 1
var q = [3, 6, 78, 42];

console.assert(reduce(q, product) === 58968);

// Test 2
var w = reduce([9, 12, 18, 62], function (a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
});

console.assert(w === 62);



// Exercise 1.4
// filter() should take an array and a callback function. It should return a new array that contains only the values from the input array that cause the callback to return a "truthy" value when passed as the first argument.

// function filter (array, callback) {
// 	var newArray = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if (callback(array[i])) {
// 			newArray[newArray.length] = array[i];
// 			// newArray.push(array[i]);
// 		}
// 	}
// 	return newArray;
// }

function filter (array, callback) {
	var newArray = [];
	var passed;
	for (var i = 0; i < array.length; i++) {
		passed = callback(array[i]);
		if (passed) {
			newArray[newArray.length] = array[i];
		}
	}
	return newArray;
}

// Test 1
var tryThis = [5, undefined, '', false, 7, 8, ''];

var result = filter(tryThis, function (a) {
	return a;
});

console.assert(result[1] === 7);

// Test 2
var e = ['bacon', 0, 10, true, false];

var result2 = filter(e, function (a) {
	return a;
});

console.assert(result2[0] === 'bacon');



// Exercise 1.5
// sum() should take a variable number of arguments and return their sum.

function sum () {
	var result = reduce(arguments, function (a, b) {
		return a + b;
	});
	return result;
}

// Test 1
var r = sum(3, 6, 9, 21, 18);

console.assert(r === 57);

// Test 2
var t = sum(8, 12);

console.assert(t === 20);



// Part 2

var products = [
    {
        name: 'Pita bread (white)',
        price: 7.5,
        category: 'food'
    },
    {
        name: 'Denim jeans',
        price: 22.95,
        category: 'apparel'
    },
    {
        name: 'Bicycle playing cards',
        price: 5,
        category: 'novelties'
    },
    {
        name: 'Red/blue plaid button-down',
        price: 23.95,
        category: 'apparel'
    },
    {
        name: 'Bic lighter',
        price: 3,
        category: 'novelties'
    },
    {
        name: 'Greek yogurt (strawberry)',
        price: 2.25,
        category: 'food'
    },
    {
        name: 'Organic eggs (dozen)',
        price: 6,
        category: 'food'
    }
];

// Exercise 2.1
// Write a function called avgCat that takes a category name ('apparel', 'food', 'novelties', etc.) as a parameter. The function should calculate the average value of products that are in the specified category in the following set of data.

function avgCat (catName) {
	var filtered = filter(products, function (x) {
		return x.category === catName;
	});
	var prices = map(filtered, function (a) {
		return a.price;
	});
	var priceSum = reduce(prices, function (b, c) {
		return b + c;
	})
	return priceSum / filtered.length;
}

console.assert(avgCat('apparel') === 23.45);
console.assert(avgCat('food') === 5.25);
console.assert(avgCat('novelties') === 4);



// Exercise 2.2
// Write a function called productTemplate that takes a product as an argument and returns a string of HTML. The string should have a <li> that contains the name and price of the product.

var productTemplate = function (d) {
	return '<li>' + d.name + ' - $' + d.price + '</li>';
};

productTemplate(products[0]);

console.assert(productTemplate(products[0]) === '<li>Pita bread (white) - $7.5</li>');
console.assert(productTemplate(products[2]) === '<li>Bicycle playing cards - $5</li>');


// Write a function called render that takes a list of products as an argument and returns a string of HTML. The string should have a <ul> that contains a list item generated by your productTemplate function above.

var render = function (productList) {
	// var productList = arguments[0];
	// returns a string of productTemplates for each product in the products
	var listArray = map(products, productTemplate);
	
	return '<ul>' + listArray + '</ul>';
};

render(products);

console.assert(render(products) === '<ul><li>Pita bread (white) - $7.5</li>,<li>Denim jeans - $22.95</li>,<li>Bicycle playing cards - $5</li>,<li>Red/blue plaid button-down - $23.95</li>,<li>Bic lighter - $3</li>,<li>Greek yogurt (strawberry) - $2.25</li>,<li>Organic eggs (dozen) - $6</li></ul>');
























