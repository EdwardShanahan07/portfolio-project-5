import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Home from './pages/Home';
import "./api/axiosDefaults";
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
                </Switch>
            </Container>

        </div>
    );
}

export default App;