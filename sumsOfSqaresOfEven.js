const arr= [1,2,3,4,5,6,7,8,9,10];

const evensSqared= arr.filter(n=> n%2===0).map(n => n**2).reduce( (acc, curr)=>acc+curr);

console.log(evensSqared);