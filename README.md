# Node.js Backend Server

This is a simple Node.js backend server with three routes:
- `/name`: Returns my name.
- `/hobby`: Returns my hobby.
- `/dream`: Returns a motivational message about my dream or goal in life.

## Prerequisites

Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [Git](https://git-scm.com/)

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   
2. Navigate to the project directory:
   ```bash
   cd Stage1_Task

3. Install dependencies
   ```bash
   npm install

## Running the Server

1. Start the server: 
    ```bash
    npm start

2. Open your browser or use a tool like `curl` or Postman to test the endpoints:
   - `http://localhost:8800/name`: Returns your name.
   - `http://localhost:8800/hobby`: Returns your hobby.
   - `http://localhost:8800/dream`: Returns a motivational message.

## Project Structure

- `Stage1_Task/`
  - `controllers/`: contains all the controller files.
  - `routs/`: contains the router file.
- `.gitignore`: Specifies files and directories that Git should ignore.
- `README.md`: The documentation file you are currently editing.
- `package.json`: Contains metadata for the project and its dependencies.
