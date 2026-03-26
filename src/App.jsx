import { useState } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import LoginModal from "./components/ui/LoginModal";
import SongListView from "./components/songs/SongListView";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Header onLoginClick={() => setLoginOpen(true)} />
      <div className="app-container">
        <main>
          <section className="section">
            <h2>All Songs</h2>
            <SongListView />
          </section>
        </main>
      </div>
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

export default App;
