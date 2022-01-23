// jokhon kono akta object er moddhe kono akta method asea sheata oi object ea kora bade 
// exactly shei method ta jodi onno akta object ea apply korte chai shea khetre amra bind kore felbo


const normalPerson = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName : function (amount){
        console.log(this.firstName, this.lastName);
    },
    chargeBill : function (amount, tip, tax){
        this.salary = this.salary - amount - tip - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'hero',
    lastName : 'balam',
    salary : 25000,
}

const friendlyPerson = {
    firstName : 'hero',
    lastName : 'golam',
    salary : 25000,
}

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);

// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(5000);

// console.log(heroPerson.salary);

// console.log(friendlyPerson.salary);



// call (shortcut) = direct call kore onno kono object er method re. call er por , dite hobe

// normalPerson.chargeBill.call(heroPerson, 1000, 100, 50);
// normalPerson.chargeBill.call(heroPerson, 3000, 200, 30);
// console.log(heroPerson.salary);


// normalPerson.chargeBill.call(friendlyPerson, 500, 30, 10);
// console.log(friendlyPerson.salary);

// console.log(normalPerson.salary);


// apply (call er khalato vai) = same as call er moto use kore jst perameter er por array te value gula rakhte hobe thats it

normalPerson.chargeBill.apply(heroPerson, [3000, 50, 10]);
console.log(heroPerson.salary);


