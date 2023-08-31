import React from "react";
import Routing from "./component/Navigation/Routing";
import { Provider } from "./component/Context/Context";
import { DataContext } from "./component/Context/Data";
function App() {
  return (
    <React.Fragment>
      <Provider value={DataContext}>
        <Routing />
      </Provider>
    </React.Fragment>
  );
}

export default App;
