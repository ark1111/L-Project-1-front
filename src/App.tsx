import Header from "./components/header/Header";
import Jobs from "./pages/jobs";

function App() {
  return (
    <div className="w-screen min-h-screen bg-background-main">
      <Header />
      <div className="w-full h-[calc(100vh-96px)]">
        <Jobs />
      </div>
    </div>
  );
}

export default App;
