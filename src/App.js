// Styling
import './App.css';

// Firebase
import { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase/config';

// Components
import Container from './components/Container';
import User from './components/User';

function App() {

  return (
    <div className="App ">
      <User
        auth={auth}
        createUserWithEmailAndPassword={createUserWithEmailAndPassword}
        signInWithEmailAndPassword={signInWithEmailAndPassword}
      />
      {/*
      <Container
        writeUserData={writeUserData} />
        */}
    </div>
  );
}

export default App;
