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
            e.style.backgroundColor="red";
            e.style.borderColor = "red";
            e.style.color = "white";
        }
        else
            right++;
        
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

