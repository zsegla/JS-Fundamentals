# JS-Fundamentals

This repository contains beginner JavaScript exercises focused on variables, data types, control structures, loops, and functions. Each exercise is a standalone script that can be run with Node.js.

---

## 📁 Table of Contents

- [0. First constant, first print](#0-first-constant-first-print)
- [1. 3 languages](#1-3-languages)
- [2. Arguments](#2-arguments)
- [3. Value of my argument](#3-value-of-my-argument)
- [4. Create a sentence](#4-create-a-sentence)
- [5. An Integer](#5-an-integer)
- [6. Loop to languages](#6-loop-to-languages)
- [7. I love C](#7-i-love-c)
- [8. Square](#8-square)
- [9. Add](#9-add)

---

## 0. First constant, first print

📄 **File:** `0-javascript_is_amazing.js`  
Prints “JavaScript is amazing” using a constant variable.

✅ Requirements:
- Use `const`
- Use `console.log`
- No use of `var`

💡 Example:
```bash
$ node 0-javascript_is_amazing.js
JavaScript is amazing
````

---

## 1. 3 languages

📄 **File:** `1-multi_languages.js`
Prints 3 lines:

* C is fun
* Python is cool
* JavaScript is amazing

✅ Requirements:

* Use `console.log` for each line
* No use of `var`

💡 Example:

```bash
$ node 1-multi_languages.js
C is fun
Python is cool
JavaScript is amazing
```

---

## 2. Arguments

📄 **File:** `2-arguments.js`
Prints a message depending on how many arguments are passed.

✅ Rules:

* No arguments → “No argument”
* 1 argument → “Argument found”
* > 1 argument → “Arguments found”

💡 Example:

```bash
$ node 2-arguments.js
No argument

$ node 2-arguments.js Hello
Argument found

$ node 2-arguments.js Hello World
Arguments found
```

---

## 3. Value of my argument

📄 **File:** `3-value_argument.js`
Prints the first argument passed to the script or “No argument” if none is provided.

✅ Requirements:

* No use of `length`
* No use of `var`

💡 Example:

```bash
$ node 3-value_argument.js
No argument

$ node 3-value_argument.js School
School
```

---

## 4. Create a sentence

📄 **File:** `4-concat.js`
Prints two arguments in the format: `arg1 is arg2`.

💡 Example:

```bash
$ node 4-concat.js code cool
code is cool

$ node 4-concat.js hello
hello is undefined

$ node 4-concat.js
undefined is undefined
```

---

## 5. An Integer

📄 **File:** `5-to_integer.js`
Prints: `My number: <int>` if the first argument is a number, otherwise prints “Not a number”.

✅ Restrictions:

* No `try/catch`
* No `var`

💡 Example:

```bash
$ node 5-to_integer.js
Not a number

$ node 5-to_integer.js 42
My number: 42
```

---

## 6. Loop to languages

📄 **File:** `6-multi_languages_loop.js`
Prints 3 lines using a loop and an array.

✅ Requirements:

* Only one `console.log` inside the loop
* No `if/else`

💡 Example:

```bash
$ node 6-multi_languages_loop.js
C is fun
Python is cool
JavaScript is amazing
```

---

## 7. I love C

📄 **File:** `7-multi_c.js`
Prints “C is fun” x times (x is first argument).

✅ Requirements:

* Use a loop
* If x is not a number → “Missing number of occurrences”

💡 Example:

```bash
$ node 7-multi_c.js 3
C is fun
C is fun
C is fun

$ node 7-multi_c.js
Missing number of occurrences
```

---

## 8. Square

📄 **File:** `8-square.js`
Prints a square of size `x` using the character `X`.

✅ Requirements:

* Use a loop
* If invalid input → “Missing size”

💡 Example:

```bash
$ node 8-square.js 2
XX
XX

$ node 8-square.js School
Missing size
```

---

## 9. Add

📄 **File:** `9-add.js`
Prints the sum of two integers passed as arguments.

✅ Requirements:

* Must define a function: `function add(a, b)`
* Use `console.log`

💡 Example:

```bash
$ node 9-add.js 3 7
10

$ node 9-add.js 5
NaN
```

---

## 💻 Run All Scripts

Make sure you have Node.js installed, then run each script using:

```bash
node <filename.js>
```

---

## 📝 Author

© 2025 ALX, All rights reserved.

---

```