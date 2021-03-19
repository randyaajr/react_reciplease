import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "53e91caa";
  const APP_KEY = "172777cd621aecb4357bd994353f4b78";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    // eslint-disable-next-line no-unused-expressions
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
