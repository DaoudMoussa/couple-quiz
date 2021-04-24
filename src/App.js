import {useContext} from 'react';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Choice from './components/choice/Choice'
import Test from './components/test/Test'
import Correction from './components/correction/Correction'
import mainContext from './store/main-page-context'
import './App.css'

function App() {
  const mainCtx = useContext(mainContext);

  let mainContent;
  if(mainCtx.state === 'choosing') mainContent = <Choice/>
  if(mainCtx.state === 'test') mainContent = <Test/>
  if(mainCtx.state === 'correction') mainContent = <Correction>Correzioni</Correction>

  return (
    <>
      <Header/>
      <main>
        {mainContent}
      </main>
      <Footer/> 
    </>
  );
}

export default App;
