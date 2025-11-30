let bin1="1010";
let bin2="101";
let operator="+";
if (!/^[01]+$/.test(bin1) || !/^[01]+$/.test(bin2)) {
    console.log("Invalid Binary Input");
    return; 
}

function BinarytoDecimal(binaryString){
    let result=0;
    for(let i=0; i<binaryString.length;i++){
        let bit=Number(binaryString[i]);
        result=result*2+bit;
    }
    return result;
}

function decimalToBinary(num){
    return num.toString(2);
}

function calculate(bin1,bin2,operator){
    let num1=BinarytoDecimal(bin1);
    let num2=BinarytoDecimal(bin2);
    let result;

    switch(operator){
        case '+' :result=num1+num2; break;
        case '-' :result=num1-num2; break;
        case '*' : result=num1*num2; break;
        case '/':
            if(num2==0){
                throw new Error("Division by zero not valid");
            }
            result=Math.floor(num1/num2);
            break;
            case 'AND' : result=num1&num2; break;
            case'OR' :  result =num1 | num2; break;
            case 'XOR' : result =num1^num2; break;
            default: throw new Error("Invalid Operator");
    }
    return {
        decimal: result,
        binary: decimalToBinary(result)
    };
}

let output = calculate(bin1, bin2, operator);

if (output !== null) {
    console.log("Decimal Result:", output.decimal);
    console.log("Binary Result:", output.binary);
}
