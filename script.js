// Intiates random margin which randomizes the margins between the stuck notes
var random_margin = ["-5px", "10px", "25px", "15px", "20px"];
// Sets the random colors for the notes
var random_colors = ["#e4ffa8","#ffb5f6","#c6edff","#aadef6","#d3bbe6","#eed390"];
// Sets the random rotations degrees for the notes
var random_degree = ["rotate(0.1deg)", "rotate(0.3deg)", "rotate(-0.1deg)", "rotate(-0.3deg)", "rotate(-0.5deg)", "rotate(-0.9deg)"];
var index = 0;
var del = [null]
// this command runs when the page first loads up and it initiates the input window"
window.onload = document.querySelector("#user_input").select();
// This comman returns the first elemtent that returns with the requested id, event listener specifies when this command is activated in this case when clicked
document.querySelector("#new-note").addEventListener("click", () => {
  // This sets the diplay style fo the #main when the parent command is activated
  document.querySelector("#main").style.display = "block";
});
// activates the close button when clicked on
document.querySelector("#close").addEventListener("click", () => {
// sets the display of the main page to none instead of block which was set before
  document.querySelector("#main").style.display = "none";
});
// activates the publish sticky note code and is set to listen on the event of key down
document.querySelector("#user_input").addEventListener('keydown', (event) => {
// The key is specified here as the enter key stroke
  if(event.key === 'Enter'){
    // Sets the text of the note as the text the user entered
    const text = document.querySelector("#user_input");
    // Creates the sticky note with the value the user entered
    createStickyNote(text.value);
  }
});
// Creates the sticky note according to the text
createStickyNote = (text) => {
  // creates the element div on the note tag
  let note = document.createElement("div");
  // creates an element div on the tag details
  let details = document.createElement("div");
  // creates the element h1 on the on the note text
  let noteText = document.createElement("h1");
  // names the function mae as note
  note.className = "note";
  //  names the function name as details
  details.className = "details";
  //  defines the function not text and text conent as text
  noteText.textContent = text;
  // defines the del function as note so it will use the note.delete
  del[0]=note;

 // it appends the details to the note text
  details.appendChild(noteText);
  // appends the note text to details
  note.appendChild(details);
// sets the function for the random colors
  if(index > random_colors.length - 1)
  // sets the index to 0
    index = 0;
 // transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}
  note.setAttribute("style", `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]}; background-color:${random_colors[index++]};`);
//  adds the event listener to double click to note remove
  note.addEventListener("dblclick", () => {
    // sets the remove command
    note.remove();
  })
  // adds the note text to the tag stuck notes which adds it to the published notes
  document.querySelector("#stuck-notes").appendChild(note);
}
// starts the context menu chain
const contextMenu = document.querySelector('.context-menu');
// adds the listener to listen to context menu and the function e

    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();

      if(contextMenu.classList.contains('show')) {
        contextMenu.classList.remove('show');
      } else {
        contextMenu.style.top = e.offsetY + 'px';
        contextMenu.style.left = e.offsetX + 'px';
        contextMenu.classList.add('show');
      }
    })

// adds the listener to listen to right click to view the context menu
		window.addEventListener('click', function () {
			contextMenu.classList.remove('show');
		})
// adds the listener to listen to right click to view the context menu
		window.addEventListener('click', function () {
			contextMenu.classList.remove('show');
		})
    // Sets the function of the delete button
    document.getElementById('delete').addEventListener('click',function(e){
        del[0].remove();
      })
