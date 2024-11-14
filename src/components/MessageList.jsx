// components/MessageList.jsx

const MessageList = ({ messages }) => (
  <div>
    {messages?.map(message => (
      <div key={message._id}>
        <strong>{message.senderId.username}:</strong> {message.message}
      </div>
    ))}
  </div>
)

export default MessageList
