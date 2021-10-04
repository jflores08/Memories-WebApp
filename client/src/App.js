import './App.css';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MemoriesMapPage from './pages/MemoriesMapPage';
import MemoryDetailPage from './pages/MemoryDetailPage';
import MemoryEditPage from './pages/MemoryEditPage';
import SignUpPage from './pages/SignUpPage';
import { useState } from 'react';
import LoginPage from './pages/LoginPage';


function App(props) {

  const[user,setUser] = useState(props.user)

  const addUser = user => {
    setUser(user);
  }

  console.log('App js: ', user)

  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/memories' component={MemoriesMapPage} />
        <Route exact path='/memories/:id' component={MemoryDetailPage} />
        <Route exact path='/memories/edit/:id' component={MemoryEditPage} />
        <Route exact path='/signup' 
        render={props => <SignUpPage  setUser={addUser} {...props} />}
        />
         <Route exact path='/login' 
        render={props => <LoginPage  setUser={addUser} {...props} />}
        />
      </Switch>
   
    </div>
  );
}

export default App;
