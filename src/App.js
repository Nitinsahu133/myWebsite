import Header from './components/Header';
import { Switch, Route } from 'react-router-dom'
import Career from './components/Career';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/career" component={Career} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </>

  );
}

export default App;
