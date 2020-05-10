console.log("quiz");
var checked=0;
var right=0;
var correct=undefined;
var arr=[];
function check(e,p)
{
    if(checked<10)
    {
        if(arr.length>0)
        {
            let id=document.getElementById(p);
            if(arr.includes(id))
            {
                return;
            }
        }
        correct=document.getElementById(p);
        arr.push(correct);
        if(e!==correct)
        {
            e.style.backgroundColor="#ea1b1b";
            e.style.borderColor = "#ea1b1b";
            e.style.color = "white";
            let wrong = document.getElementById('wrong');
            wrong.style.display = "block"
            wrong.classList.add('ans');
            setTimeout(() => {
                wrong.style.display = "none"
                wrong.classList.remove('ans');
            }, 2000);
        }
        else{
            right++;
            let cor = document.getElementById('right');
            cor.style.display = "block"
            cor.classList.add('ans');
            setTimeout(() => {
                cor.style.display = "none"
                cor.classList.remove('ans');
            }, 2000);
        }
        correct.style.backgroundColor = "green";
        correct.style.borderColor = "green";
        correct.style.color = "white";
        checked++;

        if(checked===10)
        {
            questions=document.getElementById('questions');
            questions.innerHTML+=`<h2 id="checked">${right}/${checked} answered correctly </h2>`;
        }
    }
}

