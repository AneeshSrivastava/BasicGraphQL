# BasicGraphQL

This project is a basic demonstration of using GraphQL with React and Apollo Server to manage todos and their assigned users. It's designed to provide a practical learning experience for GraphQL fundamentals.

## Project Structure

- **server:** This directory contains the Express server code using Apollo Server for the GraphQL API.
- **client:** This directory contains the React application code that interacts with the GraphQL API to display todos and users.

## Technologies Used

- Node.js and Express.js (backend)
- React (frontend)
- Apollo Server (GraphQL server)
- Apollo Client (GraphQL client for React)

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your development machine.

### Cloning the Repository

To clone the repository, use the following command:

```bash
git clone https://github.com/AneeshSrivastava/BasicGraphQL.git
```

Navigate to the project directory:

```bash
cd BasicGraphQL
```

### Starting backend server

Execute below commands one by one

```bash
cd server
npm install (or yarn install)
npm run start-server (or yarn start-server)
```

Output of the above command will be:

```bash
Server Started on port: 8000
```

### Starting client server

Open a new terminal window, navigate to the root of the project and then execute below commands one by one

```bash
cd client
npm install (or yarn install)
npm run start-client (or yarn start-client)
```

### Project Functionality

The React client application allows you to:

- View a list of todos with their assigned users.
- See the completion status of each todo (completed or not completed).

## Usage

- Navigate to <http://localhost:3000> in your browser.
- The React application will fetch data from the GraphQL API and display the list of todos.
- Open the inspect tab in browser window to see the API call to backend server.
