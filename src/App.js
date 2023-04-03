import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import NotesListPage from './pages/NotesListPage'
import NotePage from './pages/NotePage'

function App(theme) {
  return (
    <Router>
      <div className={`${theme}`}>
        <div className='app'>
        <Header />
        <Route path="/" exact component={NotesListPage} />
        <Route path="/note/:id" exact component={NotePage} />
      </div>
      </div>
    </Router>
    
  );
}

export default App;
