import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer';
import './App.css'
import './images/PP.jpg'

function App() {
    return (
        <>
        <div className="custom-main">
            <Nav/>
            <main className="mx-3">
                <Outlet/>
            </main>
            <Footer/>
        </div>
        </>
    )
}

export default App;