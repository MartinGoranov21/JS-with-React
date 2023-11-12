const adamDouglasQuoute= "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.";

const words= adamDouglasQuoute.split(' ');
//const wordsWithT= adamDouglasQuoute.map(el=> el.split(' '));
const wordsWithTAndLessThan3 = words.filter(el=> el[0]==='t' && el.length>=3);

//console.log(wordsWithT);
console.log(wordsWithTAndLessThan3);