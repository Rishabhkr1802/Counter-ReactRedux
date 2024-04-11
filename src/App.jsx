// Using @Redux/toolkit

import CounterControllers from "./Redux/Toolkit/Components/CounterControllers";
import CounterDisplay from "./Redux/Toolkit/Components/CounterDisplay";
import Header from "./Redux/Toolkit/Components/Header";

// Uncomment while Using Redux only
// import CounterControllers from "./Redux/Redux/Components/CounterControllers";
// import CounterDisplay from "./Redux/Redux/Components/CounterDisplay";
// import Header from "./Redux/Redux/Components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <CounterDisplay />
      <CounterControllers />
    </div>
  );
}

export default App;
