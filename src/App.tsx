import Sidebar from "./components/Sidebar";
import ChatBox from "./components/ChatBox";
import "./app.style.scss";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <ChatBox />
      </main>
    </div>
  );
}

export default App;
