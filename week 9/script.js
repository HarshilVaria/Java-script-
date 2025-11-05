const noteInput = document.querySelector("#noteInput");
const addNoteBtn = document.querySelector("#addNoteBtn");
const notesList = document.querySelector("#notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

document.addEventListener("DOMContentLoaded", displayNotes);

addNoteBtn.addEventListener("click", addNote);
noteInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addNote();
});

function addNote() {
  const noteText = noteInput.value.trim();
  if (!noteText) {
    showAlert("⚠️ Please enter a note!");
    return;
  }
  notes.push(noteText);
  saveNotes();
  displayNotes();
  noteInput.value = "";
  showAlert("✅ Note added successfully!", "success");
}

function displayNotes() {
  notesList.innerHTML = notes.length
    ? ""
    : "<p class='empty-msg'>No notes yet. Add one above! ✏️</p>";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.classList.add("note-item");
    const span = document.createElement("span");
    span.textContent = note;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "🗑 Delete";
    deleteBtn.addEventListener("click", () => deleteNote(index));
    li.append(span, deleteBtn);
    notesList.appendChild(li);
  });
}

function deleteNote(index) {
  if (!confirm("Are you sure you want to delete this note?")) return;
  notes.splice(index, 1);
  saveNotes();
  displayNotes();
  showAlert("🗑 Note deleted.", "info");
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function showAlert(message, type = "error") {
  const alert = document.createElement("div");
  alert.className = `toast ${type}`;
  alert.textContent = message;
  document.body.appendChild(alert);
  setTimeout(() => alert.remove(), 2000);
}
