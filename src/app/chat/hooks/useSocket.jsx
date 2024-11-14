import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = useState(null)
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    const socketInstance = io('http://localhost:7000')
    setSocket(socketInstance)

    socketInstance.on('connect', () => {
      console.log('Connected to socket server')
    })

    socketInstance.on('receiveMessage', msg => {
      setMessages(prevMessages => [...prevMessages, msg])
    })

    return () => {
      socketInstance.disconnect() // Cleanup the socket connection when the component unmounts
    }
  }, [])

  const sendMessage = (roomId, sender, message) => {
    if (socket && message.trim()) {
      socket.emit('sendMessage', { roomId, sender, message })
    }
  }

  return { socket, messages, message, setMessage, sendMessage }
}

export default useSocket
