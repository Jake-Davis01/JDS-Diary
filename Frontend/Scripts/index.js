const addBtn = document.getElementById("addBtn");
const storiesContainer = document.getElementById("stories");
const apiCallFunctions = require('./api-calls')

const titleInput = document.getElementById("addTitle");
const bodyInput = document.getElementById("addBody");

addBtn.addEventListener("click", addStory);

const addStory = require('./api-calls')

function addStory(e) {
    e.preventDefault();

    //console.log("test");
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    if (!title && !body) return;

    // Get current date & time
    
//     const now = new Date();
//     const dateString = now.toLocaleString("en-GB", {
//     year: "numeric",
//     month: "short", 
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit"
// });  <--- Not currently working

    
    // Create a new story
    const col = document.createElement("div");
    col.className = "col-md-4 my-2";

    col.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${title || "Untitled story"}</h5>
        <p class="text-muted" style="font-size
      </div>
    </div>
  `;

    // Add to the stories list
    storiesContainer.appendChild(col);

    // Clear the inputs
    titleInput.value = "";
    bodyInput.value = "";

    const storyInfo = {
        heading: title,
        description: body
    }

    apiCallFunctions.addStory(storyInfo)

}
