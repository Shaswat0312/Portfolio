import CursorTracker from "./Components/CursorTracker";
import DarkLightToggle from "./Components/DarkLightToggle";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";


const App = () => {
  return (
    <>
    <CursorTracker/>
      <Navbar />
    <DarkLightToggle/>
      <Sidebar />
    
      <main className="scroll-smooth sm:pl-[112px]">
        <Home />
        
      </main>
    </>
  );
}


export default App;
