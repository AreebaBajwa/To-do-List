const inputBox = document.getElementById("input-box");
let listTodo = document.getElementById("List_todo");

function taskbox() {
    let inputValue = inputBox.value.trim();
    
    if (inputValue === "") {
        alert("You must enter text");
    } else {
        let li = document.createElement("li");
        li.textContent = inputValue;
        listTodo.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = "";
    }
    SaveData();
}

listTodo.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function SaveData(){
    localStorage.setItem("data", listTodo.innerHTML);
}
function showList(){
    listTodo.innerHTML = localStorage.getItem("data");
}
showList();