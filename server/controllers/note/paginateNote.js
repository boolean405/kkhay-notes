const NoteDB = require("../../models/note");
const resJson = require("../../utils/resJson");
const resError = require("../../utils/resError");

const paginateNote = async (req, res, next) => {
  const userId = req.userId;
  const pageNum = req.body.pageNum;

  try {
    if (!userId) throw resError(401, "Require user id!");

    const limit = Number(process.env.PAGINATE_LIMIT);
    const reqPage = pageNum == 1 ? 0 : pageNum - 1;

    const skipCount = limit * reqPage;
    const totalNotes = await NoteDB.countDocuments();
    const notes = await NoteDB.find({ user: userId })
      .sort({ createdAt: -1 })
      .skip(skipCount)
      .limit(limit);

    resJson(
      res,
      200,
      `Max ${limit} notes per page of total ${totalNotes} notes`,
      notes
    );
  } catch (error) {
    error.status = error.status;
    next(error);
  }
};

module.exports = paginateNote;
