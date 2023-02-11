//1.a odd number

(function(array){
  for(let i=0; i<array.length; i++){
    if(array[i] % 2!=0){
      console.log(array[i])
    }
  }
})([1,2,3,4,5,6,7,8,9])



// 1.b Convert all the strings to title caps in a string array

(function (str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  } 
  console.log(str.join(" "));
})("hi this is keerthana");




//1.c Sum of all numbers in an array

(function(value){
  var sum = 0;
  for(var i = 0 ; i< value.length ; i++){
  sum = sum + value[i];
   }
   console.log(sum)
  })([1,2,3,4])



  
// 1.d Return all the prime numbers in an array

(function(numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}) ([1,2,3,4,5,6,7,8,9])



//1.e  Return all the palindromes in an array

(function (palindrome){
  var check=palindrome.split("").reverse().join("")
if(palindrome===check){
  console.log("true")
}else{
  console.log("false");
}
})("keerthana")



//1.f Return median of two sorted arrays of the same size.

const median = (a1, a2) => {
  let x = a1.concat(a2);
  x.sort(function (a,b) {
    return a - b;
  });
  let len = x.length;
  
  return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];

}
let a = [1,2.3];
let b = [1,4];
console.log(median(a,b));



// 1.g Remove duplicates from an array

(function(array){
  let dup = [...new Set(array)];
  console.log(dup);
 })([1,1,2,3,4])
 


// 1.h Rotate an array by k times
(function(array , k){
  let a= array.length;
   k = k % a.length;
  if(k < 0){
        k += a.length;
    }

    reverse(a, 0, a.length - k - 1);
    reverse(a, a.length - k, a.length - 1);
    reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)



    
// 3.a Print odd numbers in an array (arrow function)

 
let arr=[1,2,3,4,5,6,7,8,9]
 let odd=arr.filter(a =>{
    return a %2 !==0;
 })
 console.log(odd);


 
 //3.b converting all the strings in title caps
 
 let string="hi i am working"; 
 function title(msg){
   let step1= string.split(" ")
   let step2= step1.map(word => word.charAt(0).toUpperCase()+ word.substring(1).toLowerCase());
   let step3= step2.join(" ")
   console.log(step3)
 }
 title(string)

 //3.c Sum of all numbers in an array

 let sum=[1,2,3]
 let result= sum.reduce((a,b)=>{
  return a+b;
 })
 console.log(result)



// 3.d Return all the prime numbers in an array

primeNumber = (numArray) => {
   
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
primeNumber([1,2,3,4,5,6])



//3.e Return all the palindromes in an array

(function (palindrome){
  var check=palindrome.split("").reverse().join("")
if(palindrome===check){
  console.log("true")
}else{
  console.log("false");
}
})("keerthana")

