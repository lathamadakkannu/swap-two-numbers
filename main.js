/* Swap two numbers using a function */


let n1=prompt("enter the first value");
let n2=prompt("enter the second value");
console.log(`Before swapping: ${n1} ${n2}`);
let swap=()=>{
    
    temp=n1;
    n1=n2;
    n2=temp;

    
console.log(`After swapping: ${n1} ${n2}`);
}
swap()

