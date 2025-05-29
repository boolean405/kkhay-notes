const express = require("express");
const router = express.Router();

const { NoteSchema } = require("../utils/schema");
const { validateBody } = require("../utils/validator");
const addNote = require("../controllers/note/addNote");
const editNote = require("../controllers/note/editNote");
const deleteNote = require("../controllers/note/deleteNote");
const getNote = require("../controllers/note/getNote");
const searchNote = require("../controllers/note/searchNote");
const paginateNote = require("../controllers/note/paginateNote");

router
  .route("/")
  .get(validateBody(NoteSchema.noteId), getNote)
  .post(validateBody(NoteSchema.addNote), addNote)
  .patch(validateBody(NoteSchema.editNote), editNote)
  .delete(validateBody(NoteSchema.noteId), deleteNote);

router.get("/search", searchNote);
router.get("/paginate", validateBody(NoteSchema.pageNum), paginateNote);

module.exports = router;
