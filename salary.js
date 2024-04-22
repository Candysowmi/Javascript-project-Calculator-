s='';
on='';
tw='';
th='';
fo='';
fi='';

function SalaryAmount(){
    s=parseInt(document.getElementById('Salary').value);
    on=parseInt(document.getElementById('one').value);
    tw=parseInt(document.getElementById('two').value);
    th=parseInt(document.getElementById('three').value);
    fo=parseInt(document.getElementById('four').value);
    fi=parseInt(document.getElementById('five').value);
    let all;
    let salary;
    all=on+tw+th+fo+fi;
    salary=s-all;
    document.getElementById('result').innerHTML="Saving="+salary;

    s='';
    on='';
    tw='';
    th='';
    fo='';
    fi='';
    
    


}