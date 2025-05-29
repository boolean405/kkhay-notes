# Note API

A RESTful API for managing notes built with **Node.js**, **Express.js**, and **MongoDB**.

## API Service Base URL

`https://kkhay-notes.onrender.com/api/note`

---

## Available Endpoints

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| GET    | `/`         | Get a note by ID            |
| POST   | `/`         | Add a new note              |
| PATCH  | `/`         | Edit an existing note       |
| DELETE | `/`         | Delete a note by ID         |
| GET    | `/search`   | Search notes by keywords    |
| GET    | `/paginate` | Get paginated list of notes |

---

## API Endpoints Details

### Get a Note

- **GET** `/api/note/`
- Requires a JSON body with the note ID (validated by `NoteSchema.noteId`)
- Returns the note details.

### Add a Note

- **POST** `/api/note/`
- Requires a JSON body following the `NoteSchema.addNote` schema.
- Creates a new note and returns the created note.

### Edit a Note

- **PATCH** `/api/note/`
- Requires a JSON body validated by `NoteSchema.editNote`.
- Updates the note and returns the updated note.

### Delete a Note

- **DELETE** `/api/note/`
- Requires a JSON body with the note ID (`NoteSchema.noteId`).
- Deletes the note and returns confirmation.

### Search Notes

- **GET** `/api/note/search`
- Accepts query parameters for keyword search.
- Returns a list of notes matching the search criteria.

### Paginate Notes

- **GET** `/api/note/paginate`
- Requires query parameters validated by `NoteSchema.pageNum` (e.g., `page`, `limit`).
- Returns paginated notes.

---

## Overview

This Note API provides endpoints to create, read, update, delete, search, and paginate notes. It includes request validation using Joi schemas, token-based authentication, and middleware for error handling and logging.

---

## Features

- Create, read, update, and delete notes
- Search notes by keywords
- Pagination support for notes listing
- Request validation with Joi schemas
- JWT token validation for authentication
- Middleware for error handling, CORS, and logging

---

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- Joi (for validation)
- JSON Web Tokens (JWT)
- CORS

---

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) database (local or hosted)
- npm or yarn package manager

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/boolean405/kkhay-notes.git
cd kkhay-notes
```
