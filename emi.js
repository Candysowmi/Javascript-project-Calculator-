a='';
r='';
m='';

function EMICalculator(){
    a=parseFloat(document.getElementById('Amount').value);
    r=parseFloat(document.getElementById('Rate').value);
    m=parseFloat(document.getElementById('Months').value);
    let monthlyrate;
    let total;
     monthlyrate=r/12/100;
     total=(a*monthlyrate*Math.pow(1+monthlyrate,m))/(Math.pow(1+monthlyrate,m)-1);



    // let interest;
    // let total;
    // interest=(a*(r*0.01))/m;
    // total=((a/m)+interest).toFixed(2);
    document.getElementById('result').innerHTML="EMI :"+total.toFixed(2);

    a='';
    r='';
    m='';


}