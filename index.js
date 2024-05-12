let cats =  ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph){
    cats.push("Ralph")


}

function  destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function   destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
    function  destructivelyRemoveFirstCat(){
        cats.shift("Bob")
    }
function  appendCat(name){
    return[...cats,"Broom"]
}
function  prependCat(name){
    return["Arnold", ...cats]
}
function  removeLastCat(){
    return cats.slice(0,-1)
}
function removeFirstCat(){
    return cats.slice(1)
}