let addNotesBtn = document.getElementById("addNotes")
let textareaContainer = document.getElementById("textarea-container")
let clearNotes = document.getElementById("clearAllNotes")
let checkCircleIcon = document.getElementById("checkCircleIcon")

const maxTextareaPerRow = 3;

addNotesBtn.addEventListener("click", () => {
  const rows = textareaContainer.querySelectorAll("ul")
  let currentRow = rows[rows.length - 1]

  if (!currentRow || currentRow.children.length >= maxTextareaPerRow) {
    currentRow = document.createElement("ul")
    currentRow.className = "list-unstyled d-flex flex-nowrap"
    textareaContainer.appendChild(currentRow)
  }

  const textarea = document.createElement("textarea")
  textarea.className = "form-control mt-3 col-3"
  textarea.placeholder = "Enter your notes..."

  const listItem = document.createElement("li")

  //Remove single note

  const button = document.createElement("input")
  button.type = "button"
  button.className = "btn-close"
  button.addEventListener("click", function () {
    listItem.remove()
  })

  listItem.appendChild(textarea)
  listItem.appendChild(button)
  currentRow.appendChild(listItem)
})

//Remove all the notes

function clearAllNotes(){
  textareaContainer.innerHTML=""
}

clearNotes.addEventListener("click",()=>{
const listItems = textareaContainer.querySelectorAll("ul li")

  if(listItems.length > 0){
    const confirmation = window.confirm("Are you sure you want to delete the notes?")
      if(confirmation){
        clearAllNotes()
      }
  } else{
      window.alert("There are no notes to delete")
  }
})

//Link to notes page

checkCircleIcon.addEventListener("click", function() {
  
  window.location.href = "todolist.html"
})