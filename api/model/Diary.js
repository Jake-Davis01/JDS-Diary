const db = require("../database/connect");

class Diary {
    constructor(story) {
        ((this.story_id = story.story_id),
            (this.story_heading = story.story_heading),
            (this.story_description = story.story_description),
            (this.story_category = story.story_category),
            (this.story_date = story.story_date));
    }

    //get all the stored diary entries / stories
    static async getAll() {
        const response = await db.query(
            "SELECT * FROM diary ORDER BY story_id DESC",
        );

        if (response.rows.length === 0) {
            throw new Error("No diary stories found!");
        }

        return response.rows.map((story) => new Diary(story));
    }

    static async addStory(data) {
        const { story_heading, story_description, story_category, story_date } =
            data;
        const response = await db.query(
            "INSERT INTO diary (story_heading, story_description, story_category, story_date) VALUES ($1, $2, $3, $4)",
            [story_heading, story_description, story_category, story_date],
        );
        return "New entry added"
    }
}

module.exports = Diary;
