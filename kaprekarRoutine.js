function kaprekarRoutine(n){
    if (n % 1111 === 0) {
        console.log("All digits are same not possible\n");
        return;
    }
    while(n!==6174){
        let d1=Math.floor((n/1000));
        let d2=Math.floor((n%1000)/100);
        let d3=Math.floor((n%100)/10);
        let d4=n%10;

        let digits=[d1,d2,d3,d4];

        for(let i=0;i<3;i++){
            for(let j=i+1;j<4;j++){
                if(digits[i]>digits[j]){
                    let temp=digits[i];
                    digits[i]=digits[j];
                    digits[j]=temp;
                }
            }}
            let asc=digits[0]*1000+digits[1]*100+digits[2]*10+digits[3];
            let desc=digits[3]*1000+digits[2]*100+digits[1]*10+digits[0];

            n=desc-asc;
            console.log(desc + " - " + asc + " = " + n);
        }
         console.log("Kaprekar Routine reached:6174\n");
    }
    
    kaprekarRoutine(5643);
    kaprekarRoutine(6757);
    kaprekarRoutine(1111);
    kaprekarRoutine(2323);
