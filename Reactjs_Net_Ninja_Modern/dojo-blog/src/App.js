//Root Components
import Navbar from './Navbar';
import Home from './Home';

// A component is a function
function App() {
    return (
    // JSX template Code and in JSX camelCase is used.
    // In JSX, class cannot be used as its a reserved keyword in Javascript.
    // So we use className in camleCase format for JSX.
    // In JSX templates, we can add dynamic values and variables. 
    // In JSX, Boolean value and objects could not be shown on output, will give an error.
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
