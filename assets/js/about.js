// // const images = document.querySelectorAll(".about-us-img");
// // const buttons = document.querySelectorAll(".about-us .button");
// // const contents = document.querySelectorAll(".about-us .content");
// // console.log(buttons);
// // console.log(images);
// // buttons.forEach(expand);
// // function expand(button, i){
// //     var more = false;
// //     button.addEventListener("click", ()=>{
// //         if (more === false){
// //             images[i].style.height = "0%";
// //             button.innerText = "Show Less";
// //             contents[i].style.height = "60%";
// //             contents[i].style.border = "2px solid #ff5e14";
// //             more = true;
// //         }
// //         else{
// //             images[i].style.height = "72%";
// //             button.innerText = "Show More";
// //             contents[i].style.height = "100%";
// //             contents[i].style.border = "0px";
// //             more = false;
// //         }
    
// //     })
// // }

const navLinksTab = document.querySelectorAll(".tab-menu li");
navLinksTab.forEach(toogleActive);

function toogleActive(navLink, i){
    navLink.addEventListener("click", ()=>{
        navLink.classList.toggle("active");
        for(j=0; j<navLinksTab.length; j++){
            if(j!==i && navLink.classList.contains("active")){
                navLinksTab[j].classList.remove("active");
            }
        }
    })
}
