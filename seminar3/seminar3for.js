function occurences(text, character){
    let count = 0;
    for(var i=0; i< text.length; i++){
        if(text.charAt(i) === character){
            count++;
        }
    }
    return count;
}

console.log(occurences("sample text", "e"))

function occurences2(text, character){
    return text.split(character).length-1; //se face 3-1 pt ca de fiecare data unde il gaseste pe
    //pe e il scoate si raman doar 3 elemente in array 
}

console.log(occurences2("sample text","e"))

let occurences3 = (text, character) => text.split(character).length-1;
console.log(occurences3("sample text","e"));

//Implementează o funcție care primește ca parametru un 
//array de int-uri și returnează un array conținând doar numere pare din listă.
//input: [2, 4, 6, 7, 8]
//output: [2, 4, 6, 8]
function extrage_nr_pare(numbers, numbers_pare){
    for(var i=0;i<numbers.length; i++){
        if(numbers[i]%2==0)
            numbers_pare.push(numbers[i]);
    }
    //return numbers_pare;
}

let extrage_nr_pare2 = (numbers) => {
    let numbers_pare=[];
    for(var i=0;i<numbers.length; i++){
        if(numbers[i]%2==0)
            numbers_pare.push(numbers[i]);
    }
    return numbers_pare;
}

 numbers=[2, 4, 6, 7, 8]; //e var
let numbers_pare=[];
extrage_nr_pare(numbers, numbers_pare);
console.log(numbers_pare);
console.log(extrage_nr_pare2(numbers))