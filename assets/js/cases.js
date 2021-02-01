const mlButtons = document.querySelectorAll(".case .read-more-less");
const collapseDivs = document.querySelectorAll(".case .collapse-content");

mlButtons.forEach(expand_collapse);

function expand_collapse(btn, i){
    btn.addEventListener("click", ()=>{
        if(collapseDivs[i].style.display == "none"){
            collapseDivs[i].style.display = "block";
            mlButtons[i].innerText = "Read Less";
        }
        else{
            collapseDivs[i].style.display = "none";
            mlButtons[i].innerText = "Read More";
        }
    })
}
