function a() {
    console.log("a");
}
var O1;
(function(O) {
    O[O["A"] = 0] = "A";
    O[O["B"] = 1] = "B";
    O[O["C"] = 2] = "C";
})(O1 || (O1 = {
}));
export { O1 as O };
class A {
    #a;
    #c;
    constructor(o = {
    }){
        const { a: a1 = a , c ,  } = o;
        this.#a = a1;
        this.#c = c;
    }
    a() {
        this.#a();
    }
    c() {
        console.log(this.#c);
    }
}
let a1 = new A();
a1.a();
a1.c();
