const elements = ['elem1', 'elem2', 'elem3'];

console.log(elements.join());
// expected output: "elem1,elem2,elem3"

console.log(elements.join(' '));
// expected output: "elem1 elem2 elem3"

console.log(elements.join(''));
// expected output: "elem1elem2elem3"

console.log(elements.join('-'));
// expected output: "elem1-elem2-elem3"

//Implemetează o funcție arrow care primește ca parametru un array de string-uri 
//și returnează un singur string obținut prin concatenarea string-urilor din array-ul primit ca parametru.
//input: ["This", "is", "a", "test"]
//output: This is a test
let concat = (string_array) => {
    return string_array.join(' ');
}
const array = ["This", "is", "a", "test"]
console.log(concat(array))