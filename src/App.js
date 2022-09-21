import './assets/sass/App.scss';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div className="container-1">
      <Header title="Tracker"/>
      <Tasks/>
    </div>
  );
}

export default App;
