import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Footer from './component/Footer';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
