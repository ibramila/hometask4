//Task-1: 1-10 aralığında olan cüt ədədlərin ədədi ortasını tapan alqoritm yazın.
let sum=0; //cut ededlerin cemi
let count=0; //cut ededlerin sayi
for(let i=1;i<10; i++){
    if(i%2==0){
        sum+=i;
        count++;
    }
}
console.log(sum/count);