function validate() {
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let cnfpassword = document.getElementById('cnfpassword');
    let male = document.getElementById('male');
    let female = document.getElementById('female');
    let res = true;
    if (username.value.length < 5 || username.value.length >= 12) {
        let user = document.getElementById('user');
        user.style.display = "block";
        res = false;
    }
    else {
        let user = document.getElementById('user');
        user.style.display = "none";
    }
    if (!male.checked && !female.checked) {
        let gender = document.getElementById('gender');
        gender.style.display = "block";
        res = false;
    }
    else {
        let gender = document.getElementById('gender');
        gender.style.display = "none";
    }
    if (password.value.length < 8 || password.value.length > 12) {
        let pass = document.getElementById('pass');
        pass.style.display = "block";
        res = false;
    }
    else {
        let pass = document.getElementById('pass');
        pass.style.display = "none";
    }
    if (password.value != cnfpassword.value) {
        let cnfpass = document.getElementById('cnfpass');
        cnfpass.style.display = "block";
        res = false;
    }
    else {
        let cnfpass = document.getElementById('cnfpass');
        cnfpass.style.display = "none";
    }
    let atIndex = email.value.indexOf("@");
    let dotIndex = email.value.lastIndexOf(".");
    if (atIndex < 1 || dotIndex >= email.value.length - 2 || dotIndex -
        atIndex < 3) {
        let emailid = document.getElementById('emailid');
        emailid.style.display = "block";
        res = false;
    } else {
        let emailid = document.getElementById('emailid');
        emailid.style.display = "none";
    }
    return res;
}