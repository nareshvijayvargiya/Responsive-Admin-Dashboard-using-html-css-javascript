var menu = document.getElementById(`menu`);
var menubtn = document.getElementById(`menu-btn`);
console.log(menu);
menubtn.onclick = function () {
    if (menu.style.width == "0px") {
        menu.style.width = "270px";
    }
    else {
        menu.style.width = "0px";
    }
}