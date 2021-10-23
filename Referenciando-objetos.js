// Referenciando objetos
var obj = {
    showContext: function showContext() {
        this.log('teste-ok');
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showContext();

// Objetos literais
var prop1 = 'Digital Innovation One';
var obj = {
    prop1: prop1
};
console.log(obj);
/* ----------------------------- */


// Destructring Assigment
var [Aplle, banana, orange] = ['Aplle', 'banana', 'orange'];

console.log(Aplle, banana, orange);
/* ----------------------------- */


// Symbols
const uniqueId = Symbol();
console.log(uniqueId);

// Symbols
const uniqueId = Symbol('hello');

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1,2,3,4]();

const it = arr[Symbol.interator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// Symbols
Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';
/* ----------------------------- */


// Generators
const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};

for (let value of obj) {
    console.log(value);
}
/* ----------------------------- */


// fetch
fetch('http://localhost:8080/data.json')
.then(ResponseStream => {
    if (ResponseStream.status === 200) {
        return ResponseStream.json();
    }
})
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('Error: ', err);
});
/* ----------------------------- */


// Async / Await
const simpleFunc = async () => {
    return 123456;
};

simpleFunc().then(data => {
    console.log(data);
});
/* ----------------------------- */
