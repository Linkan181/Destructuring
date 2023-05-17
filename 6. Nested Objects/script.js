const person1={
    name:"Linkan",
    age:19,
    address:{
        street:"B8, A block, Industrial Area",
        city:"Baripada",
        state:"Odisha"
    }
};

function personData(obj){
    let {name,age,address}=obj;
    // console.log(name,address)
    let {street}=address;
    // console.log(street);
    return {Name:name, Street:street};
}

console.log(personData(person1));