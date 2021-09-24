import React from "react";
import { SedansCard } from "./components/SedansCard";
import { SuvsCard } from "./components/SuvsCard";
import { LuxuryCard } from "./components/LuxuryCard";

function App() {
  return (
    <div>
      <SedansCard />
      <SuvsCard />
      <LuxuryCard />
    </div>
  );
}

export default App;
