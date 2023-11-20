const input = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const addBtn = document.getElementById("addBtn")
const clearAllBtn = document.getElementById("clearAllBtn")
const clearCheckedBtn = document.getElementById("clearChecked")
const cardIcon = document.getElementById("cardIcon")

addBtn.addEventListener("click",()=>{
    let list = input.value

    clearInputField()
    createTodolist(list)
    saveListToLocalStorage()
})

//Create list

function createTodolist(list){
    if(list.trim() !==""){
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
            saveListToLocalStorage()
        })
        
        li.appendChild(button)

        return li
    }
}
    
        
//Clear input field

function clearInputField() {
    input.value = ""
}

//Clear all the items

function clearAllItems(){
    ulEl.innerHTML=""
    saveListToLocalStorage()
}

clearAllBtn.addEventListener("click",()=>{
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
    saveListToLocalStorage()
})

//Link to todolist page

cardIcon.addEventListener("click",()=>{
    window.location.href = "notes.html"
})

//localStorage

function saveListToLocalStorage() {
    const todolist = Array.from(ulEl.getElementsByTagName("li")).map(li => li.textContent)
    localStorage.setItem("toDoList", JSON.stringify(todolist))
}

function getListFromLocalStorage() {
    const savedlist = localStorage.getItem("toDoList")
    if (savedlist) {
        var todolist = JSON.parse(savedlist)
        todolist.forEach(item => createTodolist(item))
    }
}

window.onload = function() {
    getListFromLocalStorage()
}