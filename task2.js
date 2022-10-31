//Task-2: Ədədin mərtəbələrinin cəmini tapan alqoritm (məsələn: 123 - 1+2+3)

let number=123;
let sum =0;
let remain=0

while(number>0){
    remain=number%10;
    sum+=remain;
    number=(number-remain)/10;
}
console.log(sum);