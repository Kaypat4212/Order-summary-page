import illustration from '../src/images/illustration-hero.svg';
import '../src/styles/styles.css';
import './App.css';
import Header from'../src/Components/Header';
import Section1 from './Components/Section1';
import Button from './Components/Button';
import Paymentbutton from './Components/Paymentbutton';
import Cancelorder from './Components/Cancelorder';

function App() {
  return (
  <div className="App">
   <div className='desktopbg'>
   <div className='App2'>
     <Header/>
     </div>
     <div className='App3'>
     <Section1/>
      <Button/>
      <div>
      <Paymentbutton/>
     </div>
     <div>
      <Cancelorder/>
     </div>
     </div>
   </div>
    </div>
  );
}

export default App;
