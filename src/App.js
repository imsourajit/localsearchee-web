import React from "react"
import "./App.css";
import CustomRoutes from "./Routes"
import {Provider} from "react-redux";
import configureStore from "./Store/store";

function App() {
  return (
    <Provider store={configureStore} >
      <CustomRoutes />
    </Provider>
  );
}

export default App;
