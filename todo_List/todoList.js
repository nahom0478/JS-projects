let list = document.querySelector(".taskList");
list.addEventListener("click",function(e){
    if(e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove();
        return;
    }

    if(e.target.classList.contains("text")){
        e.target.classList.toggle("done")
    }
})
