function addToArray(){
    let args=arguments;
    let array=args[0];

    for(var i=1; i<args.length; i++){
        array.push(args[i]);
    }
    return array;
}

let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));

//var simplificata
function addToArray2(array, ...args) {    
    for ( var i = 0; i < args.length; i++){
        array.push(args[i]);
    }
    return array;
}

let array2 = ["a"];

console.log(addToArray(array2, "b", "c").join(", "));

//Implementează o funcție care primește ca parametru o listă de numere 
//și returnează un array conținând doar numere pare din listă.
//input: 2, 5, 6, 7
//output: [2, 6]

//input: 2, 5, 6, 7, 9, 10
//output: [2, 6, 10]

//input: 2
//output: [2]

function extrage_nr_pare(array,...args){
    for(var i=0;i<args.length; i++){
        if(args[i] % 2 == 0){
            array.push(args[i]);
        }
    }
    return array;
}

let array3=[];
console.log(extrage_nr_pare(array3,2, 5, 6, 7));