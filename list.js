const InputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");



function addtask(){
    if(InputBox.value===''){;
    alert("you must write somthing");
}
else{
    let li = document.createElement("li");
    li.innerHTML = InputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    }
    InputBox.value="";
    saveData();

}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="Li"){
        e.target.classList.toggle("checked");
        saveData();
    
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();

