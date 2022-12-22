const counter=document.querySelector('.reactive');
const btn=document.querySelectorAll('.pointer');
console.log(btn);

btn.forEach(addEventListener('click',()=>{
    let a;
    a=btn.textContent;
    counter.innerText=a;
    console.log(counter);
    btn.style.backgroundColor = "red";
}));