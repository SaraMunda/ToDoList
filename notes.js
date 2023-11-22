const addNotesBtn = document.getElementById("addNotes")
const textareaContainer = document.getElementById("textarea-container")
const clearNotes = document.getElementById("clearAllNotes")
const checkCircleIcon = document.getElementById("checkCircleIcon")
const maxTextareaPerRow = 3

addNotesBtn.addEventListener("click", () => {
  addNotesToContainer()
  saveNotesToLocalStorage()
})

//Add notes to container

function addNotesToContainer(){
  const rows = textareaContainer.querySelectorAll("ul")
    let currentRow = rows[rows.length - 1]

    if (!currentRow || currentRow.children.length >= maxTextareaPerRow) {
      currentRow = document.createElement("ul")
      currentRow.className = "list-unstyled d-flex flex-wrap"
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
      saveNotesToLocalStorage()
    })

    listItem.appendChild(textarea)
    listItem.appendChild(button)
    currentRow.appendChild(listItem)
  }

//Remove all the notes

function clearAllNotes(){
  textareaContainer.innerHTML=""
  saveNotesToLocalStorage()
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

//localStorage

function saveNotesToLocalStorage() {
  let notes = []
  const rows = textareaContainer.querySelectorAll("ul")
  rows.forEach(row => {
      const rowNotes = Array.from(row.getElementsByTagName("textarea")).map(textarea => textarea.value)
      notes = notes.concat(rowNotes)
  })
  localStorage.setItem("notes", JSON.stringify(notes))
}

function getNotesFromLocalStorage() {
  const savedNotes = localStorage.getItem("notes")
  if (savedNotes) {
      var notes = JSON.parse(savedNotes)
      notes.forEach(notes => {
          addNotesToContainer(notes)
      })
  }
}

window.onload = function () {
  getNotesFromLocalStorage()
}