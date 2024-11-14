import { useState } from 'react'

const MessageInput = ({ roomId, socket }) => {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    if (message.trim() !== '' && socket) {
      socket.emit('send_message', { roomId, senderId: '67332013c6a6c7c5852effb3', message })

      fetch('http://localhost:7000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomId, senderId: '67332013c6a6c7c5852effb3', message })
      })
      setMessage('')
    }
  }

  return (
    <div>
      <input type='text' placeholder='Type a message' value={message} onChange={e => setMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default MessageInput
