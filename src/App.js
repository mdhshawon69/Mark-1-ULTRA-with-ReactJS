import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import GlobalStyle from './GlobalStyles';
import Homepage from './pages/Home/Homepage';

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
