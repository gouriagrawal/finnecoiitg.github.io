var dividerLine = document.getElementById('dividerLine');
var welcome = document.getElementById('welcome');
var logo = document.getElementById('logo');
var welcomeTitle = document.getElementById('welcomeTitle');
var registerBtn = document.getElementById('register-btn');
var assignment1 = document.getElementById('ass1');
var title = document.getElementById('paraTitle');
var paraText = document.getElementById('paraText');
var title2 = document.getElementById('paraTitle2')
if (window.innerWidth < 1000) {
    dividerLine.style.display = 'none';
    welcome.style.flexDirection = 'column';
    logo.style.marginTop = '5rem';
    logo.style.marginBottom = '5rem';
    logo.style.width = '15vw';
    welcome.style.height = '100%';
    welcome.style.justifyContent = 'center';
    welcomeTitle.style.fontSize = '1.5rem';
    registerBtn.style.padding = "45px 75px";
    registerBtn.style.fontSize = '2rem';
    assignment1.style.flexDirection = 'column';
    assignment1.style.alignItems = 'flex-start';
    title.style.fontSize = '4rem';
    paraText.style.fontSize = '1.8rem';
    title2.style.fontSize = '4rem';
}