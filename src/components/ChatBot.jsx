import React, { useContext, useState } from 'react';
import './ChatBot.css';
import { DatasetContext } from '../Context/DatasetContext';
import {useNavigate} from 'react-router-dom'; 


export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState(''); 
  const {excelData,uploadStatus} = useContext(DatasetContext); 
  const navigate = useNavigate(); 

  if(!uploadStatus){
    navigate('/'); 
  }

  const handleSend = async() => {
    if (input.trim()) {
      setMessages([...messages, { user: 'You', text: input }]);
      setInput('');
      // Simulate bot response
      console.log(input); 
      try{
        const response = await fetch('http://127.0.0.1:5000/gemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sent_data:excelData, 
            chat:input 
          }),
        });
        
        
        const result = await response.json(); 
        if(response.ok){
          console.log('response processed succesfully !!'); 

          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              { user: 'DataBot', text: result.response },
            ]);
          }, 1000);
        }
      }
      catch(error){
        console.log(error)
      }
    }
  };

  return (
    <div className="chat-dashboard">
      <div className="chat-window">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.user === 'You' ? 'user' : 'bot'}`}
            >
              <strong>{msg.user}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
