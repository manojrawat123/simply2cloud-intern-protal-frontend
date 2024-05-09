import axios from 'axios';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

function App() {
    const [newMessage, setNewMessage] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/").then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
    
    const socket = io('http://localhost:3000'); 
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on("message", (data)=>{
        setNewMessage(data)
    });


    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {newMessage}
      </header>
    </div>
  );
}

export default App;
