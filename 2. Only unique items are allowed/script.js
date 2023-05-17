const givenArray=[1,2,3,4,5,6,667,43,22,3,44,5,16,6,5];

function getUniqueValues(arr){
       let newSet=new Set(arr);
       return newSet;
}

let result=getUniqueValues(givenArray);

for(let num of result){
    console.log(num);
}