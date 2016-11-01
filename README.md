JavaScript is a complex language. When we begin to use JavaScript for more than just simple DOM manipulation, it is important to organize it. In this challenge we will look at some more advanced JavaScript functionality that is used in writing organized, well architectured code necessary for full stack web applications.

## Release 0 : Understanding Scope

JavaScript scope concepts include defining global and local variables, hoisting, and working with function scope. Refresh your memory of these by reading [this blog post](https://toddmotto.com/everything-you-wanted-to-know-about-javascript-scope/). Then, practice reading and writing scopes in code.

Clone or fork the [ADP-Advanced-JavaScript](https://github.com/Devbootcamp/ADP-Advanced-JavaScript) code base.

1.  Open the **1_release_scope/variables.js** file. Read through the code and comments to explore local, global, and hoisting. There are some intentional errors in this code, can you spot them?
2.  Run the tests in the **1_release_scope/spec/javascript/scope-variables-spec.js** file. These are jasmine tests, to run you need to :
    *   run `bundle install` from the command line.
    *   run `rake jasmine` from the command line.
    *   Open a browser to **localhost:8888** to see the tests.
3.  Update the code in the **variables.js** to make the tests pass.

**Turning it in:** You will upload a pull request at the end of this challenge


## Release 1 : Closures

> “Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.” -[MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

To explore closures, we will create a timer that uses closures and logs a countdown of seconds

1.  Open **/2_release_closures/index.html** in a browser and open dev tools.
2.  Without the use of global variables, create a timer in the **/release_two_closures/timer.js** file. Hint: You will want to use `setInterval` and `clearInterval` on your implementation.

Your output should look something like this:
```javascript
10  // after one second  
9   // after two seconds  
8   // after three seconds  
7   // after three seconds  
6   // after four seconds  
5   // after five seconds  
4   // after six seconds  
3   // after seven seconds  
2   // after eight seconds  
1   // after nine seconds  
0 "Happy New Years!!"  
```

**Turning it in:** You will upload a pull request at the end of this challenge

## Release 2 : IIFE

> "An IIFE, or Immediately Invoked Function Expression, is a common JavaScript design pattern used by most popular libraries (jQuery, Backbone.js, Modernizr, etc) to place all library code inside of a local scope." -Greg Franko

Read [Greg Franko's Blog Post](http://gregfranko.com/blog/i-love-my-iife/) to get a better understanding of IIFE's.

The code below gives several different function invocation formats. Run this code in your browser's console or using Node by copy/pasting each line separately. Before you run each line, state your expectation of the output. If you are incorrect, spend time reading about IIFE's to better understand the format.

```javascript
// 1 Calling a function
var func = function(){console.log("YEAH")};
func();

// 2 Also calling a function
(func)();

// 3 Syntax Error
function(){console.log("ahhh...")}();

// 4 An IIFE
(function(){console.log("ahhh...")})();

// 5 Calling functions through variables
var someFunc = function(){return 8}();
var anotherFunction = someFunc();
anotherFunction;

//6 The same as #5 but with an IIFE
var anotherFunction = (someFunc)();
anotherFunction()

// 7 Passing arguments into an IIFE
(function(message){console.log(message)})("AHH...?");

// 8 Passing a global variable as an argument into an IIFE
(function(_){_.method()})(GLOBAL);
```

IIFE's provide a way of scoping our code to protect against variable overwriting. This is useful when using third party code where there may be items named the same in two different libraries.

Consider the jQuery library. In this library the `$` is an alias for the `jQuery` object. If another library or our own code also defines `$` this will cause problems.

1.  Open the **/3_release_IFFE/index.html** file in a browser and open the Chrome console. When you click the button you should see the error "$ is not defined".
2.  Open **/3_release_IFFE/iife.js** to observe that the `$` was defined in the global scope and overwrites the `$` alias of the jQuery object.
3.  To re-allocate the `$` so it works in the button_click handler, we need to wrap the handler in a IIFE and pass the `jQuery` object into the IIFE as a parameter named `$`.  
    Try to do this on your own before looking at the hints provided in the file.
4.  When you have finished, verify the button_click now works.

There is nothing to turn in on this section.

When we want access to functions in the global scope, but want to be able to protect them from overwriting and being overwritten, an IIFE is the tool we need. When it is invoked (immediately) it's return values are available to use. These retrun values can be variables, functions, or objects.

1.  Open **/3_release_IFFE/counter.js** and create a counter using and IIFE and without using constructor functions or 'this'. The counter has to have functions to set a value, get a value, and increment a value.
2.  Open**/3_release_IFFE/index.html** in a browser and run the code below in the console to verify your counter works.
```javascript
    counter.get(); // 0
    counter.set( 3 );
    counter.increment(); // 4
    counter.increment(); // 5
```

**Turning it in:** You will upload a pull request at the end of this challenge

Nice. You're getting the hang of this. Let's try one more example using our timer code from the previous release.

1.  Open **/3_release_IFFE/timer.js** and use an IIFE so that your <span class="inline-code-tt">timer()</span> function is executed automatically on <span class="inline-code-tt">window.load</span>
2.  Open**/3_release_IFFE/index.html** to see your countdown in action.

**Turning it in:** You will upload a pull request at the end of this challenge

## Release 3 : Modules

> "A beginning programmer writes her programs like an ant builds her hill, one piece at a time, without thought for the bigger structure. Her programs will be like loose sand. They may stand for a while, but growing too big they fall apart.  
>   
> Realizing this problem, the programmer will start to spend a lot of time thinking about structure. Her programs will be rigidly structured, like rock sculptures. They are solid, but when they must change, violence must be done to them.  
>   
> The master programmer knows when to apply structure and when to leave things in their simple form. Her programs are like clay, solid yet malleable." -Master Yuan-Ma, The Book of Programming

Modules are the trick to writing progamms of clay. Spend time refreshing your knowledge of modules with these resources.

*   Read [this blog post](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html). Be sure to read the comments, they are awesome!
*   In [Eloquent JS](http://eloquentjavascript.net/10_modules.html) pay special attention to the section that decribes the code below, it will look familiar in AngularJS.

```javascript
    define(["weekDay", "today"], function(weekDay, today) {
      console.log(weekDay.name(today.dayNumber()));
    });
```
*   The [Module Pattern chapter of Javascript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript) is a great read to go from object literals to modules.

Spend enough time in these resources to feel comforable with why we use Modules and how to write Modules. As you read, be sure to copy code snippets and run them to solidfy your understanding.

Turn your `timer()` IIFE into a module that can generate as many timers as you like.

1.  First, study this implementation of the Module Pattern and run the code in your browser's console.
```javascript
var ConsoleAParty;
(function(){
  function partyPrinter (){
    console.log("THIS IS A PARTY!!");
  }

  ConsoleAParty.partyPrinter = partyPrinter;
})(ConsoleAParty || (ConsoleAParty = {});

// THIS IS A PARTY!!
ConsoleAParty.partyPrinter();
```

2.  Open **/4_release_modules/modules.js** and write your timer Module.
3.  Open **/4_release_modules/index.html** to run this code in teh browser's console:
```javascript
Timer.start(10, 'Happy New Year')
Timer.start(5, 'Happy Birthday')
```
**Turning it in:** Create a pull request that shows all the code created for all of the releases in this challenge. Turn in the url of this pull request.

## Summary

You should now have a much more solid understanding of JavaScript scope and some common patterns used to protect scope including:

*   Understand JavaScript Scope (global, local, hoisting)
*   Use a closure to encapsulate function scope
*   Create and use an IIFE
*   Create and use a module
*   Understand why and when to use each of the above.
