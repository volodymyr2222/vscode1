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