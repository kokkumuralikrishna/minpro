//import MessageList from './components/MessageList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import './App.css';
import Home from './container/Home'
import Navigation from './Navigation';
import Login from './container/Login'
import app from './container/firebaseConfig'
import Logout from './Logout';
import NotFound from './NotFound';
import Todo from './Todo';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Navbar from './Navigation';

const auth = getAuth()

export default class App extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user: user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    console.log("user details", this.state.user)
    return (
      <div>
        {
          this.state.user ? (
            <div>
              <BrowserRouter> 
              <Navbar/>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/logout' element={<Logout/>}/>
                  <Route path='/todo' element={<Todo/>}/> 
                  <Route path='/*' element={<NotFound/>}/>
                  </Routes>
              </BrowserRouter>
            </div>
          ) : <Login />
        }
      </div>
    )
  }
}








// function App() {
//   return (
//     <div className="App">
//       {/* <MessageList/> */}
//     </div>
//   );
// }

//export default App;
