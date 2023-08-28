import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import ftbc12 from "./data/FTBC12_2023-05-22_2023-09-07.json"; // FTBC3.1 - Hk public holidays
import ftbc13 from "./data/FTBC13_2023-08-28_2023-12-14.json"; // FTBC3.1 - Hk public holidays

import ptbc7 from "./data/PTBC7_2023-03-18_2023-10-31.json"; // PTBC3.1, courseStartDaysOfWeekIndex 1 (Sat)
import ptbc8 from "./data/PTBC8_2023-06-24_2024-02-27.json"; // FTBC3.1 - Hk public holidays

import ptbc9 from "./data/PTBC9_2023-09-23_2024-05-28.json"; // FTBC3.1 - Hk public holidays

import ScheduleContainer from "./components/schedules/ScheduleContainer";
import BatchScheduleGenerator from "./components/BatchScheduleGenerator";

function App() {
  const batchArray = [
    { name: "ftbc12", content: ftbc12 },
    { name: "ftbc13", content: ftbc13 },

    { name: "ptbc7", content: ptbc7 },
    { name: "ptbc8", content: ptbc8 },
    { name: "ptbc9", content: ptbc9 },
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
