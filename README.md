# 📒JDS-Diary

A Simple diary application where users can create, view, update, delete, and search diary entries.

---

## 🚀 Features

- Create diary entries (title, content, category, image URL)
- View all entries (sorted by most recent)
- Update entries
- Delete entries
- Search entries by text
- Attach images to entries

---

## 🛠️ Tech Stack

- Backend: Node.js, Express
- Frontend: HTML, CSS, JavaScript
- Database: PostgreSQL
- Architecture: MVC

---

## ⚙️ Setup

### 1. Install dependencies
```
npm init-y
npm i
```

## Database Setup
- Create a database called `diary` in Superbase.
- Make sure you have a database running (e.g. SuperBase), then run any setup script:

```
npm run setup-db
```
## API Routes
- `Get /` Api info
- `Get /entries` Get all entries
- `Get /entries/`Get a single entry
- `Post /entries` Create a entry
- `Put /entries/:id` Update entry
- `DELETE /snacks/:id` Delete entry

## 🧠 How It Works

- User interacts with the frontend (HTML/CSS/JS)

- Frontend sends requests using fetch()

- Express routes handle requests

- Controllers process logic

- Models interact with PostgreSQL

- Data is returned and rendered on the page

## Docker Setup

Open Docker Desktop and wait untill you see docker is running. then;

Build the image:

```
docker build -t snacks-api .
```

Run the container:

```
docker run -p 3754:3754 snacks-api
```

Access the api:

```
http://localhost:3754
```
## 👥 Author

Built as part of a hackathon team project.