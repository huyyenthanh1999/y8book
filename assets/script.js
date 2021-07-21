var settingsmenu = document.querySelector('.settings-menu');
var darkbtn = document.getElementById("dark-btn");

function openSettingMenu(){
    settingsmenu.classList.toggle('active')
}

darkbtn.onclick = function(){
    darkbtn.classList.toggle('on');
    document.body.classList.toggle('dark-theme');
}