function openNavbar() {
  document.getElementById("navbar-responsive").style.right = "0";
  document.getElementById("navbar-open").style.zIndex = "-1";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.right = "-100%";
  document.getElementById("navbar-open").style.zIndex = "100";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
