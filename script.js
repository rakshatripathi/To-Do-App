
const inputEl = document.getElementById("input-el")
const AddBtn = document.getElementById("add-btn")
const ulEl = document.getElementById("ul-el")


AddBtn.addEventListener("click",function(){
    if(inputEl.value === ''){
        alert("you must write something")
    }
    else{
        addtask()
    }
    inputEl.value = ""
    savetask()
 }
)

function addtask(){
    let li = document.createElement("li")
        li.innerHTML = "<i class='fa-regular fa-circle'></i>"
        let p = document.createElement("p")
        p.innerHTML = inputEl.value
        li.appendChild(p)
        // ulEl.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        ulEl.appendChild(li)

        li.classList.add("listItem");
        
}

ulEl.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savetask()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove()
        savetask()
    }
}, false)

function savetask(){
    localStorage.setItem("data", ulEl.innerHTML)
}

function showtask(){
    ulEl.innerHTML = localStorage.getItem("data")
}
showtask()
// localStorage.clear()