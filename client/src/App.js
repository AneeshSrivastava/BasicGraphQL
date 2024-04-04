import "./App.css";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        name
      }
    }
  }
`;
function App() {
  const { data, loading } = useQuery(query);
  const [showCompleted, setShowCompleted] = useState(true);
  if (loading) return <h1> Loading....</h1>;
  const handleFilterChange = () => {
    setShowCompleted(!showCompleted); // Toggle filter on button click
  };
  return (
    <div className="App">
      <button onClick={handleFilterChange} className="filter-button">
        {showCompleted ? "Show Only Incomplete" : "Show All Todos"}
      </button>
      <table>
        <thead>
          <tr style={{ border: "1px solid black" }}>
            <th>Title</th> <th>Assigned To</th> <th>Completed ?</th>{" "}
          </tr>
        </thead>
        <tbody>
          {showCompleted
            ? data.getTodos.map((todo) => (
                <tr key={todo.id}>
                  <td style={{ border: "1px solid black" }} align="left">
                    {todo.title}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {todo.user.name}
                  </td>
                  <td style={{ border: "1px solid black" }}>
                    {todo.completed ? "Yes" : "No"}
                  </td>
                </tr>
              ))
            : data.getTodos
                .filter((todo) => !todo.completed)
                .map((todo) => (
                  <tr key={todo.id}>
                    <td style={{ border: "1px solid black" }} align="left">
                      {todo.title}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {todo.user.name}
                    </td>
                    <td style={{ border: "1px solid black" }}>
                      {todo.completed ? "Yes" : "No"}
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
