import { useState } from 'react'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()
  const [roomId, setRoomId] = useState('')

  const handleJoinChat = () => {
    if (roomId.trim()) {
      router.push(`/chat/${roomId}`) // Navigate to the dynamic chat room
    }
  }

  return (
    <div>
      <h1>Welcome to the Chat App</h1>
      <input type='text' placeholder='Enter Chat Room ID' value={roomId} onChange={e => setRoomId(e.target.value)} />
      <button onClick={handleJoinChat}>Join Chat</button>
    </div>
  )
}

export default HomePage
