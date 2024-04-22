let i='';
let r='';
let n='';

function PPFCalcilator(){
    i=parseFloat(document.getElementById('Yearly').value);
    n=parseFloat(document.getElementById('Time').value);
    r=parseFloat(document.getElementById('Rate').value);

    let PPF;
    let a;
    let b;
    let c;
    a = Math.pow((1 + r),n);
    b=a-1;
    c=b/r;
    PPF= i*c;
    
    document.getElementById('result').innerHTML="Maturity Amount :  "+PPF;
    document.getElementById('result1').innerHTML="Yearly Interest :    "+i;
    document.getElementById('result2').innerHTML="Number Of Years :    "+n;
    document.getElementById('result3').innerHTML="Rate Of Interest :    "+r;
    
}

