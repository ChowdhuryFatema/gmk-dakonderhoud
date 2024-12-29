import './App.css'
import Footer from './components/Footer/Footer'
import GMK from './components/GMK/GMK'
import Header from './components/Header/Header'
import OnsWerk from './components/OnsWerk/OnsWerk'
import OverOns from './components/OverOns/OverOns'
import OverOnsSlider from './components/OverOns/OverOnsSlider'

function App() {

  return (
    <>
      <div>
        <Header />
        <OverOns />
        <OverOnsSlider />
        <OnsWerk />
        <GMK />
        <Footer />
      </div>
    </>
  )
}

export default App
