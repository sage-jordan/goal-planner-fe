import './App.css';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';

function App() {
  // fetch login token from localhost
  const token = localStorage.getItem('token')

  if (token){ // if user is logged in, display dashboard
    return (
      <div className="App">
        <header className="App-header">
          <a href='/' className='title'>GOAL PLANNER</a> 
          
        </header>
        <Dashboard/>
      </div>
    )
  } else { // if user is not logged in, display landing page with login/register
    return (
      <div className="App">
        <header className="App-header">
          <a href='/' className='title'>GOAL PLANNER</a> 
          <div className='buttons'>
            <a href='/register'>Register</a>
            <a href='/login'>Login</a>
          </div>
        </header>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
