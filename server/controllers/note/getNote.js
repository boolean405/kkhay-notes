const NoteDB = require("../../models/note");
const resJson = require("../../utils/resJson");
const resError = require("../../utils/resError");

const getNote = async (req, res, next) => {
  const userId = req.userId;
  const noteId = req.body.noteId;

  try {
    if (!userId) throw resError(401, "Require user id!");

    const existNote = await NoteDB.findById(noteId);
    if (!existNote) throw resError(404, "Note not found!");

    if (!existNote.user._id.equals(userId)) throw resError(403, "Forbidden!");

    const note = await NoteDB.findOne(existNote._id);

    resJson(res, 200, "Success get note.", note);
  } catch (error) {
    error.status = error.status;
    next(error);
  }
};

module.exports = getNote;
