import {useState} from 'react';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Choice from './components/choice/Choice'
import './App.css'

function App() {
  const [mainState, setMainState] = useState(true);

  const chosenHandler = () => {
    setMainState(false)
  }

  return (
    <>
      <Header/>
      <main>
        {mainState && <Choice onChosen={chosenHandler}/>}
        {!mainState && <div>Test Page</div>}
      </main>
      <Footer/> 
    </>
  );
}

export default App;
