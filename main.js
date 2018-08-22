class Person{
    constructor(name, age, color){
        this.name = name;
        this.age = age;
        this.color = color;
        this.array = [];
    }
    addInstance(x){
        this.array.push(x);
    }
}
class Car{
    constructor(brand, color){
        this.brand = brand;
        this.color =  color;
    }
}
r = new Person("rich",50,"red");
j = new Person("janice",25,"purple");
//bmw = new Car("bmw","blue");
//chevy = new Car("chevy","green");
//r.addInstance(bmw);
//j.addInstance(chevy);

let brand = function gettheBrand(){
    let getB = document.getElementById('inputBrand').value;
    console.log(getB); 
    return getB;  
}
let color = function gettheColor(){
    let getC = document.getElementById('inputColor').value;
    console.log(getC); 
    return getC;  
}
car = new Car(brand(),color());
r.addInstance(car);