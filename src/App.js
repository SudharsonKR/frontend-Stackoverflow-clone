import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Allroutes from './Allroutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
 

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Allroutes/>
      </Router>
    </div>
  );
}

export default App;
