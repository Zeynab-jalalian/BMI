let form=document.getElementById('bmi-form');
let button=document.querySelector('button');
let weight=document.getElementById('weight');
let height=document.getElementById('height');

button.addEventListener('click',function(event){
    form.preventDefault();
})