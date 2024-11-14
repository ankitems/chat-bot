import { useRouter } from 'next/router'
import ChatRoom from '../../components/ChatRoom'

const ChatPage = () => {
  const router = useRouter()
  const { roomId } = router.query // roomId from the URL

  if (!roomId) return <div>Loading...</div>

  return (
    <div>
      <ChatRoom roomId={roomId} />
    </div>
  )
}

export default ChatPage
