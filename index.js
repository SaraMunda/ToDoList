let input = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let addBtn = document.getElementById("addBtn")
let clearBtn = document.getElementById("clearBtn")


addBtn.addEventListener("click",()=>{
    let list= input.value

    if(list){
        const li = document.createElement("li")
        li.className = "list-group-items"
        li.textContent = list
        ulEl.appendChild(li)

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "form-check-input"
        li.appendChild(checkbox)

        const button = document.createElement ("input")
        button.type ="button"
        button.className = "btn-close"
        button.addEventListener("click", function(){
            li.remove()
        })
        li.appendChild(button)

        input.value=""
    }
})

function clearItems(){
    ulEl.innerHTML= ""
}

clearBtn.addEventListener("click",()=>{
    clearItems()
})