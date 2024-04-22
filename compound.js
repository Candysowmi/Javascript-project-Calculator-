p='';
t='';
r='';

function CompoundInterest(){
    p=parseFloat(document.getElementById('Principal').value);
    t=parseFloat(document.getElementById('Time').value);
    r=parseFloat(document.getElementById('Rate').value);
    let Amount;
    let answer;
    Amount= (p*(1+r/100)**t);
    answer= Amount-p;
    document.getElementById('result').innerHTML="COMPOUND INTEREST="+answer;

    p='';
    t='';
    r='';
}