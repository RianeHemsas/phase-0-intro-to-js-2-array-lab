// // Write your solution here!
// const cats=[];
// cats.push["Milo", "Otis", "Garfield"];$

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}
// console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}
// console.log(cats.unshift("Lilo"));

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}
// console.log(cats.pop(cats));

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}


function appendCat(name) {

const copyCats=cats.slice();
copyCats.push(name)
return copyCats;
}
// console.log(appendCat("Broom"));


function  prependCat(name) {

    const copyCats=[name,...cats]
    
    return copyCats;
    }
    // console.log( prependCat());
    
    function removeLastCat(){
        const catsTwo=cats.slice(0,cats.length-1);
        return catsTwo;
    }
    // console.log( removeLastCat());


    function removeFirstCat(){
        const catsTwo=cats.slice(1);
        // console.log(catsTwo);
        return catsTwo;
    }
  

