let tea =document.getElementById('tea');
let juJitsu =document.getElementById('ju-jitsu');
let mixed =document.getElementById('mixed');

let teaP=document.getElementById('tea-p');
let juJitsuP=document.getElementById('ju-jitsu-p');
let mixedP=document.getElementById('mixed-p');


let show=(p)=>{
    if(p.style.visibility === 'visible') p.style.visibility = 'hidden'
    else p.style.visibility = 'visible'
}


tea.addEventListener('click',()=>{show(teaP)});
juJitsu.addEventListener('click',()=>{show(juJitsuP)});
mixed.addEventListener('click',()=>{show(mixedP)});