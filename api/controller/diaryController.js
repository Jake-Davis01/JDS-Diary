const Diary = require('../model/Diary');

async function getAll(req, res) {
    try {
        const allStories = await Diary.getAll();
        res.status(200).send(allStories);
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}

async function addStory(req, res) {
    //console.log("test hello");
    const storyData = req.body;
    try {
        const newStory = await Diary.addStory(storyData);
        res.status(200).send(newStory)
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
}


module.exports = { getAll, addStory }