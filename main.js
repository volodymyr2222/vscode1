// 1 taska Типи даних!!!
let dataTypes;
console.log(typeof dataTypes);

dataTypes = 'Типи даних';
console.log(typeof dataTypes);

dataTypes = 22;
console.log(typeof dataTypes);

dataTypes = 22n;
console.log(typeof dataTypes);

dataTypes = 5 > 2;
console.log(typeof dataTypes); //true

dataTypes = 5 < 2;
console.log(typeof dataTypes); //false

dataTypes = null
console.log(dataTypes);

dataTypes = Symbol("id");
console.log(typeof dataTypes);

dataTypes = {
    name: "Volody",
    age: 22
}
console.log(typeof dataTypes);



// 2 taska

let srt = '22';
console.log(srt);

srt = Number(srt);
console.log(typeof srt);



let nam = 12;
console.log(nam);

nam = String(nam);
console.log(typeof nam);


// taska 3

dataTypes = true;
console.log(typeof dataTypes);

dataTypes = String(dataTypes);
console.log(typeof dataTypes);




dataTypes = 22;
console.log(dataTypes);

dataTypes = String(dataTypes);
console.log(typeof dataTypes);




dataTypes = Symbol("ad");
console.log(typeof dataTypes);

dataTypes = String(dataTypes);
console.log(typeof dataTypes);



dataTypes = null;
console.log(typeof dataTypes);

dataTypes = String(dataTypes);
console.log(typeof dataTypes);



dataTypes = 22n;
console.log(typeof dataTypes);

dataTypes = String(dataTypes);
console.log(typeof dataTypes);

//task 5 Цикли!

for (let a = 1; a < 11; a++) {
    console.log(a);
}

for (let b = 10; b > 0; b--) {
    console.log(b);
}

//task 6

for (let evenNumbers = 2; evenNumbers <= 20; evenNumbers++) {
    if (evenNumbers % 2 == 0){
        console.log(evenNumbers);
    }
}


for (let oddNumbers = 1; oddNumbers <= 20; oddNumbers++) {
    if (oddNumbers % 2 == 1){
    console.log(oddNumbers);
    }
  }
  

let v = 1;
 while(v < 20) {
  v++;
  if(v % 2) 
  console.log(v);
}

let m = 1;
 while(m < 20) {
  m++;
  if(m % 2 == 0) 
  console.log(m);
}



//11

let z = 1;
do {
    if(z % 2 == 0)
    console.log(z);
    z++
} while(z < 20);


let p = 1;
do {
    if(p % 2)
    console.log(p);
    p++
} while(p < 20);




