import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "53e91caa";
  const APP_KEY = "172777cd621aecb4357bd994353f4b78";

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search here
        </button>
      </form>
    </div>
  );
};

export default App;
