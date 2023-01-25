import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';
import TabFive from './components/TabFive/TabFive';
import TabFour from './components/TabFour/TabFour'
import TabOne from './components/Tabone/TabOne'
import TabSix from './components/Tabsix/TabSix';
import TabThree from './components/Tabthree/TabThree'
import TabTwo from './components/Tabtwo/TabTwo'
import Header from './components/Header/Header'

function App() {
  const componentRef = useRef(); 
  return (
    <>
        
      <ReactToPrint trigger={()=> <button className='printbtn'>Print </button>}
        content={()=>componentRef.current}/>
        <div ref={componentRef}>
        <Header/>
        <TabOne  />
        <TabTwo/>
        <TabThree/>
        <TabFour/>
        <TabFive/>
        <TabSix/>
        </div>
    </>
  )
}

export default App