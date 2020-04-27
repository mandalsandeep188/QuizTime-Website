function change(){
    let html=document.getElementsByTagName("body")[0];
    if(html.offsetWidth>820)
    {
        let nav=document.getElementById("navbar");
        nav.style.display="none";
        let  welcome = document.getElementById("welcome");
        let  section = document.getElementById("section");
        try {
            if(section.classList.contains("welcomeshow")){
                section.classList.remove('welcomeshow');
                section.classList.add('welcomehide');
            }
        } catch (error) {}
        try {
            if(welcome.classList.contains("welcomeshow")){
                welcome.classList.remove('welcomeshow');
                welcome.classList.add('welcomehide');
            }
        } catch (error) {}
    }  
}
function navbar()
{
    let nav=document.getElementById("navbar");
    let  welcome = document.getElementById("welcome");
    let  section = document.getElementById("section");
    if(nav.style.display=="block"){
        nav.style.display="none";
        try {
            welcome.classList.remove('welcomeshow');
            welcome.classList.add('welcomehide');
        } catch (error) {}
        try {
            section.classList.remove('welcomeshow');
            section.classList.add('welcomehide');
        } catch (error) {}
    }
    else{
        nav.style.display="block";
        try {
            welcome.classList.remove('welcomehide');
            welcome.classList.add('welcomeshow');
        } catch (error) {}
        try {
            section.classList.remove('welcomehide');
            section.classList.add('welcomeshow');
        } catch (error) {}
    }
}