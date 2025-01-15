let form=document.getElementById('bmi-form');
let button=document.querySelector('button');

button.addEventListener('click',function(event){
    event.preventDefault();
    let weight=parseFloat(document.getElementById('weight').value);
    let height=parseFloat(document.getElementById('height').value);
    let h=height/100;
    let BMI=weight/(h**2);
    console.log(BMI);
    
})