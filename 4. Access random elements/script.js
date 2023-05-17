

let givenArray=[1,2,4,5,6,6,7,8];





function action2(arr2){
      const [x,y,...z]=arr2;
      const last=z.pop();
      
      return [x,y,last];

}

console.log(action2(givenArray));