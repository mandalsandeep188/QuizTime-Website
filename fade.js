window.onscroll= ()=>{
    let quiz=document.getElementsByClassName('quiz');
    for (const element of quiz) {
            element.classList.add("fadeup");
    }
    let headfade = document.getElementById('headfade');
    headfade.classList.add('fadeup');
}

let btn=document.getElementById('btn');
btn.addEventListener('click',(e)=>{
    let quiz=document.getElementsByClassName('quiz');
    for (const element of quiz) {
            element.classList.add("fadeup");
    }
    let headfade = document.getElementById('headfade');
    headfade.classList.add('fadeup');
})
