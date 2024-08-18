import React, { createContext, useState } from "react";

export const userContext = createContext();

function Context(props) {
  const [data, setData] = useState();
  return (
    <userContext.Provider value={{ data, setData }}>
      {props.children}
    </userContext.Provider>
  );
}

export default Context;
