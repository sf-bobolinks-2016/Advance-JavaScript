// ==========================================
//               SOURCE CODE
// ------------------------------------------

/*
######## SCOPE A #######
*/

var a, b, c;

// 1. Global variable
globalOutOfFunctions = a;

// 2. We can use a global variable inside a function
function returnGlobal (){
  return globalOutOfFunctions;
}

// 3. In order to get this variable to the global scope
// the functions need to be executed.
// 5. globalVar is added to global scope when func is executed 
function localVar () {
    // 4. Global variable defined in function
    var globalVar = null;

    // 5. Local variable
    local = c;

    // 6. Redundancy but we can return it
    return local;
};

// 7. If localVar () is executed then we can
// use globalVar in side other functions.
function returnGlobalInFunc (){
    return globalVar;
}

// 8. We cannot use a local variable defined inside localVar()
function returnLocal (){
    return typeof (local);
}

// 9. We can define a local variable in scope A and use
// it inside a function's, scope B
// (in a real application is best practice to initialize variables at the top of the scope)
var outer = null;

function addInnerAndOuter() {
    /*
     ######## SCOPE B #######
     */
    inner = null;

    // We use outer inside this scope
    var sum = inner + outer;

    return  sum
}

/// 10. Hoisting variables
function hoistedVars() {
    // The variable declaration gets added
    // to de top of the scope were a function is
    // declare and its value is 'undefined'.

    // Variable declaration added under the hood.
    // var outer; => 'undefined'
    // var inner; => 'undefined'
    // var sum; => 'undefined'

    var inner = null;

    // Because of hoisting outer's value
    // is overwritten.
    // 2 + 'undefined' = NaN
    var sum = inner + outer;

    // Var initialization creates a var declaration at the top of the scope
    var outer = 8;
    // We use outer inside
    return  sum
}

/// 11. Hoisting fuctions
function hoistedFuncs() {
    // Functions can me use before the function expresion is
    // defined.

    var printResult = null

    function printAhead(){
        return "Print This"
    };

    return  printResult
}