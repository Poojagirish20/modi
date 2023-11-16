import React from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'
import './app.css'
const App = () => {


function caller()
{
  console.log('pooja');
}
// props
// attributes to the components
  return (
    <div className="container">
      {/* <Header />
      <Footer />
      <Body></Body> */}
      <div className="header"><Header /></div>
      <div className="body"><Body  func={caller} /></div>
      <div className="footer"><Footer /></div>
    </div>
  )
}

export default App