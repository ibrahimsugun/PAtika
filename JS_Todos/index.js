

let toDos = ["3 Litre Su İç","Ödevleri Yap","EN az 3 Saat Kodlama Yap","Yemek Yap","50 Sayfa Kitap Oku"]


window.addEventListener("DOMContentLoaded", () => {
    toDos = JSON.parse(localStorage.getItem("toDos")) || toDos
    toDos.forEach( todo =>  newElement(todo))
})


const todoList = document.getElementById("list")
let toDoInput = document.getElementById("task")

function createNewElement (toDo) {
    const liPend = document.createElement("li")
    const todonode = document.createTextNode(toDo)
    liPend.append(todonode)
    const buttonNode = document.createElement("button")
    buttonNode.classList.add("close","h-100","p-3")
    const btnSpanNode = document.createElement("span")
    btnSpanNode.innerHTML="&times;"
    buttonNode.append(btnSpanNode)
    liPend.append(buttonNode)
    buttonNode.addEventListener("click",() =>{
        const todoIndex = toDos.findIndex(_toDo => _toDo == toDo )
        toDos.splice(todoIndex,1)
        localStorage.setItem("toDos",JSON.stringify(toDos))
        liPend.remove()
        
    })
    liPend.addEventListener("click",function(){
        if (liPend.classList.contains("bg-info")) {
            liPend.classList.remove("bg-info","line")
  
            
        } else {
            liPend.classList.add("bg-info","line")
        }
    })

    return liPend
}
 function newElement(todo = ""){

    if (todo != "")    toDoInput.value= todo
    if (toDoInput.value == "") return $("#liveToastEmpty").toast("show") 
    toDoInput.value=  toDoInput.value.replace(/\s+/g," ") //Kelimeler arasında birden fazla boşluk varsa tek boşluğa düşür.    
    todoList.append( createNewElement(toDoInput.value))
    if(todo == "") {
        $("#liveToastSuccess").toast("show")
        toDos.push(toDoInput.value)
    }
    localStorage.setItem("toDos",JSON.stringify(toDos))
    toDoInput.value = ""
  

}
