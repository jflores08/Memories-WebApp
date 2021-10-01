import './App.css';
import HomePage from './pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MemoriesMapPage from './pages/MemoriesMapPage';
import MemoryDetailPage from './pages/MemoryDetailPage';
import MemoryEditPage from './pages/MemoryEditPage';



function App() {
  return (
    <div className="App">
      
      <Navbar />

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/memories' component={MemoriesMapPage} />
        <Route exact path='/memories/:id' component={MemoryDetailPage} />
        <Route exact path='/memories/edit/:id' component={MemoryEditPage} />
      </Switch>
   
    </div>
  );
}

export default App;
