import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

const user = {
  name: "Hakan Yiğit Özen",
  location: "İstanbul",
  foodType: "Hamburger",
  age: 24,
  likes: "Formula 1"
};

const pageDetails = {
  title: "React Tornado",
  desc: "React code challenge"
};

function App() {
  return (
    <div className="App">
      <div className="page-deets" />
      <h1>{pageDetails.title}</h1>
      <h3>{pageDetails.desc}</h3>

      <div className="user-deets" />
      <h4>{user.name}</h4>
      <ul>
        <li>
          <strong>Location:</strong> {user.location}
        </li>
        <li>
          <strong>Eats:</strong> {user.foodType}
        </li>
        <li>
          <strong>Age:</strong> {user.age}
        </li>
        <li>
          <strong>Likes:</strong> {user.likes}
        </li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
