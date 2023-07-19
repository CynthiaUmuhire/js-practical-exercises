//finding the GCD
//create a function that will accept two numbers and the number
//check if the second number is greater than the first one and then swap them
//then the loop which will iterate and check the hcf
function GCD(n1, n2){
    if (n2 > n1){
        [n1,n2] = [n2,n1];
    }
    let gcd = 0;
    for (let i=1; i<=n2; i++){
        if(n1% i === 0 && n2% i ===0){
            gcd = i ;    
        }
    }
    return gcd;
}

GCD(12,18);