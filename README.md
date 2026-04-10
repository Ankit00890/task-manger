# Task Manager App
## Features Added
- Add new tasks (with time and validation)
- View list of tasks
- Edit task names
- Mark tasks as completed or pending
- Delete tasks
- Filter tasks by All, Pending, or Completed
- Data is saved in MongoDB Database

## Technologies Used

### Frontend
- **React.js**: For building the UI
- **Vite**: For fast development
- **Tailwind CSS**: For basic styling
- **Lucide React**: For icons
- **Axios**: To fetch data from backend API
- live: "https://task-manger-jet.vercel.app/"

### Backend
- **Node.js & Express.js**: For creating the server and APIs
- **MongoDB & Mongoose**: Used for connecting to the database and saving tasks
- **CORS**: To connect frontend with backend
- **Dotenv**: To manage environment variables safely
- live backend: "https://task-manger-3wy9.onrender.com/"
## How to Run Locally

### Prerequisites
- Node.js installed on your computer.

### Start the Backend
1. Go to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install the packages:
   ```bash
   npm install
   ```
3. Run the server:
   ```bash
   npm start
   ```
   *The server runs on port 5000.*

### Start the Frontend
1. Open a new terminal and go to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install packages:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm run dev
   ```
