import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import MessageInput from './MessageInput'
import axios from 'axios'

const ChatRoom = ({ roomId }) => {
  const [messages, setMessages] = useState([])
  const [chatHistory, setChatHistory] = useState([])
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io('http://localhost:7000')
    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [])

  useEffect(() => {
    fetchChatHistory()
  }, [])

  const fetchChatHistory = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/message/${roomId}`)
      setChatHistory(response.data)
    } catch (error) {
      console.error('Error fetching chat history:', error)
    }
  }

  useEffect(() => {
    if (socket) {
      socket.emit('join_room', roomId)

      socket.on('receive_message', data => {
        setMessages(prevMessages => [...prevMessages, data])
      })

      return () => {
        socket.off('receive_message')
      }
    }
  }, [socket, roomId])

  return (
    <div className='chat-room-container'>
      <h2>Chat Room: {roomId}</h2>

      <div className='chat-history'>
        {chatHistory?.data?.map((chat, index) => (
          <div key={index} className='chat-message'>
            <strong>{chat.senderId}:</strong> {chat.message}
          </div>
        ))}
      </div>
      <div className='chat-box'>
        {messages.map((msg, index) => (
          <div key={index} className='chat-message'>
            <strong>{msg.senderId}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <MessageInput roomId={roomId} socket={socket} />

      <style jsx>{`
        .chat-room-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
          font-family: Arial, sans-serif;
        }

        .chat-room-container h2 {
          text-align: center;
          color: #333;
        }

        .chat-history,
        .chat-box {
          max-height: 300px;
          overflow-y: auto;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #fff;
        }

        .chat-message {
          padding: 8px;
          margin-bottom: 8px;
          background-color: #e8f0fe;
          border-radius: 5px;
        }

        .chat-message strong {
          color: #3b82f6;
        }
      `}</style>
    </div>
  )
}

export default ChatRoom
