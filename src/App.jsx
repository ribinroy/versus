import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Market from './page/Market';
import Footer from './component/Footer';

function App() {
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
