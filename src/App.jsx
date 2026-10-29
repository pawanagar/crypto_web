import './App.css'
import {HashRouter, Routes, Route} from "react-router"
import { Home } from './pages/Home'
import {CoinDetails} from './pages/CoinDetails'
import { Footer } from './components/Footer'

function App() {

  return (
    <div className="app">
      <HashRouter>
        <div className="appContent">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/coin/:coinId" element={<CoinDetails/>}></Route>
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
