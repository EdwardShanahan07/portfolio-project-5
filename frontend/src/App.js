import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function App() {
    return (
        <div className="App">
            <NavBar />

            <Container>
                <Switch>
                    <Route exact path="/" render={() => <h1>Home page</h1>} />
                    <Route exact path="/discover" render={() => <h1>Discover Page</h1>} />
                    <Route exact path="/signin" render={() => <h1>Sign In Page</h1>} />
                    <Route exact path="/signup" render={() => <h1>Sign Up In Page</h1>} />
                </Switch>
            </Container>

        </div>
    );
}

export default App;