---
title: "Good Programming Practices"
permalink: "/:title"
---
I want to talk about programming and some practices that, I think, can make a programmer more efficient when observed. First, let's talk about what programming is.

### Programming as Problem Solving
- Programming is basically writing down code to instruct computers how to solve problems.
- This means that there may be as many ways to code a program as there are ways to solve a problem.
- A particular solution may be correct, but it could also be a bad/inefficient solution.
- Never settle for correct but inefficient solutions.
- A good programmer does not only solve problems... he does it well/efficiently.
- To do this, one must observe good programming practices.

### Good Programming Practices
Here are some points I try to observe while programming:
1. Think of the most appropriate data structures for the problem at hand. Don't do everything in arrays. Remember that there are other ways to represent your models than the common, out-of-the-box data types (i.e., linked lists, trees, heaps, queues, etc.)
2. Think of the most efficient algorithm.
3. It does not hurt to lint your code. Code linting is arguably the easiest and fastest thing you can do to make sure your code is clean. Learn how to configure code linting so that it becomes natural to your programming practice. Linting detects problematic patterns in your code that might result into bugs and even some lines that are not following a certain style guide.
4. Follow a style guide.
5. Writing code is very much like writing literature in the sense that you get better at it as you read and read and read good code from experienced programmers. Read code by experienced programmers. If you don't have access to these experienced programmers in your immediate circle, you can always go to [Github](https://github.com).
6. Make it easier for others to debug / check your code. Make it as human readable as possible, without sacrificing code efficiency and simplicity.
7. Code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). Meaning, Don't Repeat Yourself. Make new methods / functions for lines of code you frequently repeat, make your code design moduler for reusability. DRY coding is the opposite of WET conding which means "Write Everything Twice" or "We Enjoy Typing" or "Waste Everyone's Time" ... you get the idea.
8. Peer Programming or just having your code reviewed by other programmers is also a good practice.

### Further Readings for Good Programming Practices

1. [A Pragmatic Quick Reference](https://blog.programminghorror.com/a-pragmatic-quick-reference/) - a good summary of the book [The Pragmatic Programmer: From Journeyman to Master](https://www.amazon.com/exec/obidos/ASIN/020161622X/codihorr-20)
