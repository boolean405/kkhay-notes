const NoteDB = require("../../models/note");
const resJson = require("../../utils/resJson");
const resError = require("../../utils/resError");

const addNote = async (req, res, next) => {
  const userId = req.userId;
  const { title, text } = req.body;

  try {
    if (!userId) throw resError(401, "Require user id!");
    const newNote = await NoteDB.create({ title, text, user: userId });

    resJson(res, 201, "Success added note.", newNote);
  } catch (error) {
    error.status = error.status;
    next(error);
  }
};

module.exports = addNote;
