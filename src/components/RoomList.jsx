// components/RoomList.jsx
import Link from 'next/link'

const RoomList = ({ rooms }) => (
  <div>
    {rooms.map(room => (
      <div key={room._id}>
        <Link href={`/rooms/${room._id}`}>{room.name}</Link>
      </div>
    ))}
  </div>
)

export default RoomList
