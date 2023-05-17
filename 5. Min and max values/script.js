const givenArray=[6,5,3,7,99,20];

function find(arr){
    let a=Math.max(...givenArray);
    let b=Math.min(...givenArray);
    return {max:a ,min:b}
}

console.log(find(givenArray));