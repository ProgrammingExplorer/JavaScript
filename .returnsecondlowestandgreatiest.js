//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
function second(arr) {
    ar = [];
    ar.push(arr);
    ar.sort((a,b)=>a-b);
    arraylength = ar.length;
    return arraylength;
    
}
console.log(second([1,2,3,5,4]))