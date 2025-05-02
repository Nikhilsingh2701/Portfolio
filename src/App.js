import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro.js";
import Skill from "./components/skills/skills.js";
import Portfolio from "./components/Works/works.js"
import Contact from "./components/Contact/contact.js"
import Footer from "./components/footer/footer.js"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
