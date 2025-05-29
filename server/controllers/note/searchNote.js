const NoteDB = require("../../models/note");
const resJson = require("../../utils/resJson");
const resError = require("../../utils/resError");

const searchNote = async (req, res, next) => {
  const userId = req.userId;

  try {
    if (!userId) throw resError(401, "Require user id!");

    const keyword = req.query.search
      ? {
          $or: [
            { title: { $regex: req.query.search, $options: "i" } },
            { text: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
    const notes = await NoteDB.find(keyword).find({ user: { $eq: userId } });

    resJson(res, 200, "Success get note by keyword.", notes);
  } catch (error) {
    error.status = error.status;
    next(error);
  }
};

module.exports = searchNote;
