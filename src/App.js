import './App.css';
import Hero from './Components/Landing/Hero';
import Club from './Components/Landing/Club';
import Logo from './Components/Logo/Logo';
import Season from './Components/Landing/Season';
function App() {
    return (
        <div className="App">
            <Logo/>
            <Hero/>
            <Club/>
            <Season/>
        </div>
    );
}

export default App;
