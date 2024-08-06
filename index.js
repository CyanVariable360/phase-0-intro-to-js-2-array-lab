// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(name)
{
    const copycats = cats.slice();
    copycats.push(name)
    return copycats;
}

function prependCat(name)
{
    const copycats = cats.slice();
    copycats.unshift(name)
    return copycats;
}

function removeLastCat(){
    const copycats = cats.slice();
    copycats.pop()
    return copycats;
}

function removeFirstCat(){
    const copycats = cats.slice();
    copycats.shift()
    return copycats;
}