import './App.css'

import Nav from './components/nav';
import Appex from './components/belowHeader';
import Difference from './components/comparison';
import Slider from './components/setups';
import Footer from './components/footer';
import Title from './components/headings';

function App() {

 
  return (
    <div className='dark:bg-slate-900 '>
    <Nav/>
    <Title/>
   <Appex/>
   <Difference/>
   <Slider/>
   <Footer/>
   </div>
  )
}

export default App
