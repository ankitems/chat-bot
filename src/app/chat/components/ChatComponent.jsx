'use client'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ChatComponent = () => {
  const [message, setMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    fetchChatHistory()
  }, [])

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get('http://localhost:7000/history')

      setChatHistory(response.data)
    } catch (error) {
      console.error('Error fetching chat history:', error)
    }
  }

  const handleSendMessage = async () => {
    if (message.trim()) {
      const body = { message: message, userName: 'Ankit', roomId: 1 }
      try {
        const response = await axios.post('http://localhost:7000/message', body)
        setChatHistory(prev => [
          ...prev,
          { sender: 'user', message },
          { sender: 'assistant', message: response.data.assistantResponse }
        ])
        setMessage('')
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }

  return (
    <>
      <style jsx>{`
        .chat-container {
          font-family: Arial, sans-serif;
          padding: 20px;
          max-width: 600px;
          margin: 0 auto;
        }

        .chat-history {
          margin-bottom: 20px;
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          height: 300px;
          overflow-y: scroll;
        }

        .chat-message {
          margin-bottom: 10px;
        }

        .input-field {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }

        .send-button {
          width: 100%;
          padding: 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>

      <div className='chat-container'>
        <div className='chat-history'>
          {chatHistory?.map((chat, index) => (
            <div key={index} className='chat-message'>
              <strong>{chat.userName}:</strong> {chat.message}
            </div>
          ))}
        </div>
        <input
          type='text'
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Type your message'
          className='input-field'
        />
        <button onClick={handleSendMessage} className='send-button'>
          Send
        </button>
      </div>
    </>
  )
}

export default ChatComponent
