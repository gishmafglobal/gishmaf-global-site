// import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import { Footer } from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
// import {LiveChat} from './components/LiveChat'
// import {useAuthState} from 'react-firebase-hooks';




function App() {
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {/* {user ? <ChatRoom /> : <SignIn />} */}
      </section>


      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
      {/* <LiveChat /> */}
    </div>
  );
}

export default App;
