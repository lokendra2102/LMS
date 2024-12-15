import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import { AppContext } from './Context/App.context';
import './Styles/main.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <AppContext>
        <Router>
          <Main/>
        </Router>
      </AppContext>
    </>
  );
}

export default App;
