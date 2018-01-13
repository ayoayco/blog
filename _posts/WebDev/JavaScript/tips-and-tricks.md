# JavaScript Random Tips and Tricks

Here's a list of some JavaScript techniques I've learned so far.

## Table of Contents
- [Notation](#notation)
- [Tips and Tricks](#tips-and-tricks)
    1. [Exclamation Conversion to Boolean](#exclamation-conversion-to-boolean)
    2. [Computing for Various Widths](#computing-for-various-widths)
    3. [Quotes Conversion to String](#quotes-conversion-to-string)

## Notation

`// ->` is used to show the result of an expression. For example:

```js
1 + 1 // -> 2
```

`// >` means the result of `console.log` or another output. For example:

```js
console.log('hello, world!') // > hello, world!
```

`//` is just a comment used for explanations. Example:

```js
// Assigning a function to foo constant
const foo = function () {}
```

## Tips and Tricks
### Exclammation Conversion to Boolean
Exclamation points can be used to convert any data type into boolean.

```js
'random string' // -> 'random string'
!'random string' // -> false
!!'random strign' // -> true
```

### Computing for Various Widths
Widths can be a pain when you don't know what you're doing. Fortunately, jQuery offers methods we can use for this. The following computes for the border, padding, and margin of an image element:

```js
var borderWidth = $('img').outerWidth() - $('img').innerWidth();
var paddingWidth = $('img').innerWidth() - $('img').width();
var marginWidth = $('img').outerWidth(true) - $('img').outerWidth();

var formattedBord = borderWidth + 'px';
var formattedPadd = paddingWidth + 'px';
var formattedMarg = marginWidth + 'px';
```

### Quotes Conversion to String
A pair of single quotes (`''`) and double quotes (`""`) can be used to convert any data type into string by adding them:

```js
var integer = 123;
var bool = true;
var und = undefined;

'' + integer // -> '123'
"" + bool // -> 'true'
"" + und // -> 'undefined'
```

