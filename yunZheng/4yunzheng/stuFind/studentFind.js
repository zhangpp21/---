var currentMenu = 1; // 当前显示的菜单编号
var menus = document.querySelectorAll('menu'); // 获取所有菜单
var classList = document.querySelector('.classList')

document.getElementById('backwardButton').addEventListener('click', function () {
    if (currentMenu > 1) {
        currentMenu--; 
        updateMenus();
    }
});

document.getElementById('forwardButton').addEventListener('click', function () {
    if (currentMenu < menus.length) {
        currentMenu++; 
        updateMenus();
    }
});

function updateMenus() {
    // 隐藏所有菜单
    menus.forEach(function (menu) {
        menu.classList.remove('active');
    });
    // 显示当前菜单
    menus[currentMenu - 1].classList.add('active');
}
updateMenus();
let inquire = document.querySelector(".inquire");
let save = document.querySelector(".save");
let noticeDel = document.querySelector(".noticDel");
let stuAssess = document.querySelector(".stuAssess");
let permission = document.querySelector(".permission");
let studentReg = document.querySelector(".studentReg");
let studentLea = document.querySelector(".studentLea");
save.onclick = function () {
    location.href = "第一张.html"
}
noticeDel.onclick = function () {
    location.href = "第三张.html";
}
stuAssess.onclick = function () {
    location.herf = "../assess/assess.html"
}
permission.onclick = function () {
    location.herf = "../power/power.html"
}
studentReg.onclick = function () {
    location.herf = "../寒假项目/register/register.html"
}
studentLea.onclick = function () {
    location.herf = "../request/request.html"
}
