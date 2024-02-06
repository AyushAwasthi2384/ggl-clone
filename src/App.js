import './App.css';
import Main from './components/Main';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/home" element={<Main />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
