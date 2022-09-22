
let formDom = document.querySelector("#userForm");
let ulKE = document.querySelector("#reGeneratedUL");
formDom.addEventListener("submit",adder);

const alertDOM = document.querySelector("#alert") 




;(JSON.parse(localStorage.getItem("KEyiniver"))||[]).forEach(element => {
    ulKE.innerHTML += element
});
function adder (event) {
    event.preventDefault()       
    
    let namer = document.querySelector("#nameHelp")
    let scorer = document.querySelector("#nmm")
    if (namer.value == "" || scorer.value == ""){
        return alertDOM.innerHTML = `<div class="  alert alert-primary alert-dismissible fade show text-center" role="alert">
        <strong class="display-6">Lütfen Klavyenizi Kullanın!</strong> 
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
    }
    localStorage.setItem("Name",namer.value)
    localStorage.setItem("Scorer",scorer.value)
    ulKE.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
    ${localStorage.getItem("Name")}
    </div>
    <span class="badge bg-primary ">${localStorage.getItem("Scorer")}</span>
    </li>`
    localStorage.setItem("KEyiniver",JSON.stringify([...(JSON.parse(localStorage.getItem("KEyiniver"))||[]),`<li class="list-group-item d-flex justify-content-between align-items-start"><div class="ms-2 me-auto"> ${localStorage.getItem("Name")}</div> <span class="badge bg-primary "> ${localStorage.getItem("Scorer")} </span> </li>`]))
    namer.value=""
    scorer.value=""

}

let sifirlaButton = document.querySelector("#Sifirlayici").addEventListener("click", cleaner );

function cleaner(event) {
    localStorage.clear()
    ulKE.innerHTML= ` <li class="list-group-item text-center bg-dark text-white"><strong> Eklenecek bilgiler buranın altına gelecek</strong></li>`
}

