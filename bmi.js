h='';
w='';

function BMICalculator(){
    h=parseInt(document.getElementById('Height').value);
    w=parseInt(document.getElementById('Weight').value);
    let hei;
    let answer;
    hei=h/100;
    answer=w/hei**2;
    document.getElementById('res').innerHTML="BMI Calculator="+answer;
    if(answer<18.5){
        document.getElementById('result').innerHTML="You are Underweight";
    }
    else if(answer>=18.5&& answer<25)
    {
        document.getElementById('result').innerHTML="You are fit";
    }
    else if(answer>=25&&answer<30){
        document.getElementById('result').innerHTML="You are Overweight";
    }
    else{
        document.getElementById('result').innerHTML="You are Obesity";
    }


    h='';
    w='';
}