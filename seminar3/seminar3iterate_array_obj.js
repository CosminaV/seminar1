var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

for (var day in days) {
      console.log(day);
      console.log(days[day]);
}

for (var day of days) {
      console.log(day);
}

//Implementează o funcție care primește ca parametru un string 
//și returnează frecvența de apariție a fiecărui cuvânt
/*input: "the quick brown fox jumps over the lazy dog";
output:
{
  the: 2,
  quick: 1,
  brown: 1,
  fox: 1,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1
}*/

function word_count(string){
    let string_array=string.split(" ");
    let fr=[];
    for(var word of string_array){
        if(fr[word]==undefined){
            fr[word]=1;
        }
        else{
            fr[word]++;
        }
    }
    return fr;
}

string="the quick brown fox jumps over the lazy dog";
//console.log(word_count(string))
let fr=word_count(string);
console.log(fr);