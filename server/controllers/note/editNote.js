const NoteDB = require("../../models/note");
const resJson = require("../../utils/resJson");
const resError = require("../../utils/resError");

const editNote = async (req, res, next) => {
  const userId = req.userId;
  const { noteId, title, text } = req.body;

  try {
    if (!userId) throw resError(401, "Require user id!");

    const existNote = await NoteDB.findById(noteId);
    if (!existNote) throw resError(404, "Note not found!");

    if (!existNote.user._id.equals(userId)) throw resError(403, "Forbidden!");

    await NoteDB.findByIdAndUpdate(existNote._id, {
      title,
      text,
    });

    const updatedNote = await NoteDB.findById(existNote._id);

    resJson(res, 201, "Success edited note.", updatedNote);
  } catch (error) {
    error.status = error.status;
    next(error);
  }
};

module.exports = editNote;
