const baseURL = "http://localhost:3000/diary";

const btn = document.getElementById("test-btn");
btn.addEventListener("click", getAllStories);

async function getAllStories(e) {
    e.preventDefault();
    try {
        const response = await fetch(baseURL);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        //console.log(data);
        //return data
        
        for (let i = 0; i < data.length; i++) {
            const story_heading = document.createElement("h2")
            const story_description = document.createElement("p")
            story_heading.innerHTML = data[i].story_heading
            story_description.innerHTML = data[i].story_description
            document.getElementById("all-stories").appendChild(story_heading)
            document.getElementById("all-stories").appendChild(story_description)
        } 
    } catch (err) {
        console.error("Failed to fetch diary entries:", err);
    }
}


async function addStory(data) {
    try {
        console.log(data);
    } catch (err) {
        console.error("Failed to add diary entry:", err);
    }
}

module.exports = {addStory}