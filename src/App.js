import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import RenterBody from './components/Body/RenterBody';
import RenteeBody from './components/Body/RenteeBody';
import Category from './components/Category/Category';
import Team from './components/Team/Team';
function App() {
  return (
    <div>

      <Navbar/>
      <Body/>
      <RenterBody/>
      <RenteeBody/>
      <Team/>
      
      
    </div>
    
  );
}

export default App;
