
let profileMenu = document.getElementById("profile-menu");
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("show-more-link");


function toggleMenu(){
    profileMenu.classList.toggle("open-menu");
}

function toggleActivity(){
    sideActivity.classList.toggle("open-activity");

    if (sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show Less <b>-</b>";
    }
    else{
        moreLink.innerHTML = "Show More <b>+</b>";
    }
}