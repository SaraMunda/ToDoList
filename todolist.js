let input = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")
let addBtn = document.getElementById("addBtn")
let clearBtn = document.getElementById("clearBtn")
let clearCheckedBtn = document.getElementById("clearChecked")
let cardIcon = document.getElementById("cardIcon")


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
        //Remove the single items
        button.addEventListener("click", function(){
            li.remove()
        })
        
        li.appendChild(button)

        input.value=""
    }
})

//Clear all the items

function clearAllItems(){
    ulEl.innerHTML=""
}

clearBtn.addEventListener("click",()=>{
    const listItems = ulEl.getElementsByTagName("li")

    if (listItems.length > 0) {
        const confirmation = window.confirm("Are you sure you want to delete all the items?")
        if (confirmation) {
            clearAllItems()
        }
    } else {
        window.alert("There are no items to delete")
    }
})

//Clear only the checked items

clearCheckedBtn.addEventListener("click", () => {
    const checkboxes = document.getElementsByClassName('form-check-input')
    const checkboxesArray = Array.from(checkboxes)
    
    for (const checkbox of checkboxesArray) {
        if (checkbox.checked){
            const listItem= checkbox.closest('li')
            if(listItem){
                listItem.remove()
            }
        }
    }
})

//Link to todolist page

cardIcon.addEventListener("click",()=>{
    window.location.href = "notes.html"
})