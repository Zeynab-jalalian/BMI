let form=document.getElementById('bmi-form'); //دسترسی به فرم
let button=document.querySelector('button'); //دسترسی به دکمه ی محاسبه
let bmiValue=document.getElementById('bmi-value');

button.addEventListener('click',function(event){ //عملیات کلیک
    event.preventDefault(); //جلوگیری از رفرش شدن صفحه
    let weight=parseFloat(document.getElementById('weight').value); //مقدار وزن
    let height=parseFloat(document.getElementById('height').value); //مقدار قد
    let h=height/100; //مقدار ارتفاع به متر
    let BMI=weight/(h**2); //فرمول BMI
    bmiValue.innerHTML=`BMI = ${BMI.toFixed(2)}`;
    
})