const Joi = require("joi");

const NoteSchema = {
  addNote: Joi.object({
    title: Joi.string().required(),
    text: Joi.string().required(),
  }),
  editNote: Joi.object({
    noteId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
    title: Joi.string(),
    text: Joi.string(),
  }),
  noteId: Joi.object({
    noteId: Joi.string()
      .regex(/^[0-9a-fA-F]{24}$/)
      .required(),
  }),
  pageNum: Joi.object({
    pageNum: Joi.number().integer().min(1).required(),
  }),
  // params: {
  //   noteId: Joi.object({
  //     noteId: Joi.string()
  //       .regex(/^[0-9a-fA-F]{24}$/)
  //       .required(),
  //   }),
  // },
};

module.exports = {
  NoteSchema,
};
