import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import ftbc9 from "./data/FTBC9_2022-10-17_2023-02-23.json"; // FTBC3.0
import ftbc10 from "./data/FTBC10_2023-01-30_2023-05-22.json"; // FTBC3.1
// import ftbc11 from "./data/FTBC11_2023-03-20_2023-07-11.json"; // FTBC3.1
// import ftbc12 from "./data/FTBC12_2023-05-08_2023-08-29.json"; // FTBC3.1

import ptbc5 from "./data/PTBC5_2022-08-30_2023-05-02.json"; // PTBC3.0
import ptbc6 from "./data/PTBC6_2022-11-26_2023-07-29.json"; // PTBC3.0
// import ptbc7 from "./data/PTBC7_2023-03-18_2023-10-31.json"; // PTBC3.1
// import ptbc8 from "./data/PTBC8_2023-06-17_2024-01-23.json"; // PTBC3.1

import ScheduleContainer from "./components/schedules/ScheduleContainer";
import BatchScheduleGenerator from "./components/BatchScheduleGenerator";

function App() {
  const batchArray = [
    { name: "ftbc9", content: ftbc9 },
    { name: "ftbc10", content: ftbc10 },
    // { name: "ftbc11", content: ftbc11 },
    // { name: "ftbc12", content: ftbc12 },

    { name: "ptbc5", content: ptbc5 },
    { name: "ptbc6", content: ptbc6 },
    // { name: "ptbc7", content: ptbc7 },
    // { name: "ptbc8", content: ptbc8 },
  ];

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          {/* route that takes user to part of app that edits course schedules */}
          <Route path="/admin">
            <BatchScheduleGenerator />
          </Route>
          {/* route that takes user to part of app that displays batch schedules for student use */}
          <Route path="/">
            <ScheduleContainer batchArray={batchArray} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
