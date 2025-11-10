import "./App.css";
import UnderConstructionModal from "./helpers/UnderConstructionModal";

function App() {
  return (
    <>
      <UnderConstructionModal />
      <header>
        <h1>Dicky Kitchen Jr - Developer Extraordinaire</h1>
        <p className="h1-subheader">
          The talented developer with the unique name.
        </p>
      </header>
      <div className="content-tabs">
        <button className="content-tab-left grid-1">Skills</button>
        <button className="content-tab-right grid-2">About</button>
        <button className="content-tab-left grid-3">Certifications</button>
        <button className="content-tab-right grid-4">Resume</button>
        <button className="content-tab-left grid-5">Contact</button>
      </div>
    </>
  );
}

export default App;
