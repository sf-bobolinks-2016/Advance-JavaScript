// ==========================================
//                 TEST SUITE
// ------------------------------------------

describe('Testing Global and Local scope', function(){
    describe('#global variables', function() {
        it("1. global variable globalOutOfFunctions is equal to 'Im Global'", function () {
            expect(globalOutOfFunctions).toEqual('Im Global');
        });
        it("2. returnGlobal returns global variable defined in the global scope", function () {
            expect(returnGlobal()).toEqual('Im Global');
        });
        it('3. global variable defined in localVar() is undefined', function () {
            expect( typeof (globalVar)).toEqual('undefined');
        });
        it('4. global variable defined in localVar() is equal to 10', function () {
            localVar();
            expect(globalVar).toEqual(10);
        });

    });
    describe('#local variables', function() {
        it('5. local variable defined in localVar() is not global', function () {
            localVar ();
            expect(typeof local).toEqual("undefined");
        });
        it('6. local variable defined in localVar() as return value', function () {
            expect(localVar()).toEqual(8);
        });
        it('7. global variable defined in localVar() can be use in other scoped', function () {
            localVar();
            expect(returnGlobalInFunc()).toEqual(10);
        });
        it('8. local variable is undefined when use out of lexical scope', function () {
            expect(returnLocal()).toEqual("undefined");
        });
    });
    describe('#scopes', function() {
        it("9. addInnerAndOuter() adds outer and inner variables", function () {
            expect(addInnerAndOuter()).toEqual(4);
        });
    });
    describe('#hoisting variables', function() {
        it("10. variables get hoisted at the top of the scope", function(){
            expect( isNaN(hoistedVars())).toEqual(true);
        });
    });
    describe('#hoisting fuctions', function() {
    it("11. function expresion can be define after you use them", function(){
        expect(hoistedFuncs()).toEqual("Print This");
    });
    });
});