import React, { useState } from 'react';
import './App.css';
import {ClimbingBoxLoader} from 'react-spinners';

function App() {
    function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(2);
        }, delayInms);
      });
    }
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadUsers = async() => {
      setLoading(true);
      const response = await fetch("https://reqres.in/api/users?page=1");
      const jsonResponse = await response.json();
      await delay(3000);
      setUser(jsonResponse.data);
      setLoading(false);
    }
  
  return (
    <div className="App">
      <nav className="navbar">
        <h1>THE GLAMOUR ROOM</h1>
        <button onClick={loadUsers}>GET USERS</button>
      </nav>
      {loading ? <ClimbingBoxLoader color='rgb(4, 4, 43)' css={{position:"fixed", top:"50%", left:"50%", background:"cadetblue"}} size={40}/> : <>
        {users.map(({ id, first_name, last_name, avatar, email}) => (
        <div class = "container">
        <div class = "card">
          <div class = "image">
          <img src={avatar} alt=''/>
          </div>
          <div class = "content">
            <br></br>
            <h3>ID </h3> <p>{id}</p>
            <h3>NAME</h3> <p>{first_name} {last_name}</p>
            <h3> EMAIL</h3> <p>{email}</p>
          </div>
        </div>    
        </div>
        ))}
        </>
}
    </div>
  );
}


export default App;



