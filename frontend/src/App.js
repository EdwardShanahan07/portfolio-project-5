import './App.css';

import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

import "./api/axiosDefaults";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import SignInForm from './pages/SignIn';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Container>
                <Switch>
                    <Route exact path="/" render={() => <Home />}/>
                    <Route exact path="/discover" render={() => <h1>Discover Page</h1>} />
                    <Route exact path="/signin" render={() => <SignInForm />} />
                    <Route exact path="/signup" render={() => <SignUp />} />
                    <Route render={() => <p>Page not found!</p>} />
                </Switch>
            </Container>
        </div>
    );
}

export default App;