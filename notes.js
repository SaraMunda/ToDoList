let addNotesBtn = document.getElementById("addNotes")
let textareaContainer = document.getElementById("textarea-container")

const maxTextareaPerRow = 3

  addNotesBtn.addEventListener("click", () => {
    const textareaCount = document.querySelectorAll("#textarea-container textarea").length

    if (textareaCount % maxTextareaPerRow === 0) {
      const newRow = document.createElement("div")
      newRow.className = "d-flex flex-wrap"
      textareaContainer.appendChild(newRow)
    }
    const currentRow = document.querySelector("#textarea-container .d-flex:last-child")
    const textarea = document.createElement("textarea")
    textarea.className = "form-control mt-3 col"
    textarea.placeholder = "Enter your notes..."

    currentRow.appendChild(textarea)
  })