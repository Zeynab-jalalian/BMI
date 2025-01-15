let form=document.getElementById('bmi-form'); //دسترسی به فرم
let button=document.querySelector('button'); //دسترسی به دکمه ی محاسبه
let bmiValue=document.getElementById('bmi-value');
let interpretation=document.getElementById('interpretation');
let text=document.getElementById('text');

button.addEventListener('click',function(event){ //عملیات کلیک
    event.preventDefault(); //جلوگیری از رفرش شدن صفحه
    let weight=parseFloat(document.getElementById('weight').value); //مقدار وزن
    let height=parseFloat(document.getElementById('height').value); //مقدار قد
    let h=height/100; //مقدار ارتفاع به متر
    let BMI=weight/(h**2); //فرمول BMI
    bmiValue.innerHTML=`BMI = ${BMI.toFixed(2)}`;
    
    if(BMI<18.5){
        interpretation.innerHTML="تفسیر : کم وزن";
        text.innerHTML="تو باید یه لقمه بیشتر بخوری، شاید بتونی به طرف دیگه قابلمه برسی!"
    }else if(BMI>=18.5 && BMI<=24.99){
        interpretation.innerHTML="تفسیر : وزن نرمال";
        text.innerHTML="نه خیلی چاق، نه خیلی لاغر… مثل یک کیسه برنج متوسط! نه سنگین، نه سبک، فقط در بهترین حالت خودت!";
    }else if(BMI>=25 && BMI<=29.99){
        interpretation.innerHTML="تفسیر :اضافه وزن";
        text.innerHTML="مثل یه کوله‌پشتی پر از خاطرات خوش، فقط یادت باشه گاهی وقت‌ها باید کمی از بارش کم کنی تا راحت‌تر حرکت کنی!";
    }else{
        interpretation.innerHTML="تفسیر : وزن بالا";
        text.innerHTML="باید از سنگینی انتخاب‌هایت لذت ببری، ولی یه پیاده‌روی تو هوای آزاد شاید کمکت کنه!";
    }
})