import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [ isDark, setIsDark ] = useState( false )
  //console.log({ isOn, setIsOn })
  
  const appClass = isDark ? "App dark" : "App light"
  
  const darkModeBtnText = isDark ? "Dark" : "Light"

  function toggleDarkMode(event) {
    setIsDark (!isDark)
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={ toggleDarkMode }> { darkModeBtnText }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
