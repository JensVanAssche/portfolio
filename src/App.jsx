import Info from "./info/Info";
import Projects from "./projects/Projects";

import "./style.scss";

function App() {
  return (
    <div>
      <Info />
      <Projects />
      <footer>
        <span>© {new Date().getFullYear()} Jens Van Assche</span>
      </footer>
    </div>
  );
}

export default App;
