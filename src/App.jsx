import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Market from './page/Market';
import Footer from './component/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/market' exact>
                    <Market />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
