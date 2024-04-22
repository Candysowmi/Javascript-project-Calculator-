p='';
t='';
r='';

function SimpleInterest(){

    p=parseFloat(document.getElementById('Principal').value);
    t=parseFloat(document.getElementById('Time').value);
    r=parseFloat(document.getElementById('Rate').value);
    let answer;
    answer=((p)*(t)*(r))/100;
    document.getElementById('result').innerHTML="SIMPLE INTEREST="+answer;

    p='';
    t='';
    r='';


}
