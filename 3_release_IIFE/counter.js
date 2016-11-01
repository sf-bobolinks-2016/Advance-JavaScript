$(document).on('ready', function() {
    // ====== DON'T DELETE / DON'T CHANGE ====
    // Driver code, write you implementation so this code runs.
    counter.get(); // 0
    counter.set( 3 );
    counter.increment(); // 4
    counter.increment(); // 5
});


//create the IIFE and assign it to the global counter variable
var counter = (function(){
    // private variables and functions used by the program but
    //not exposed for use outside the IIFE.

    var i = 0;
    function prettify(val){
        return "Your counter is: " + val
    }
    //the public part of the code
    return {
        get: function get(){
            console.log(i);
            return i;
        },
        set: function set( val ){
            i = val;
            console.log(i);
        },
        increment: function increment() {
            ++i
            console.log(prettify(i));
            return i;
        }
    };
})(); //invoke the function immediately to expose the returned object to the local scope