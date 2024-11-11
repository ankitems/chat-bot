'use client'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const handleCreateClick = () => {
    router.push('/dashboard/new-Ai')
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      {/* Header */}
      <header className='flex justify-between items-center bg-white p-4 shadow-md'>
        <h1 className='text-2xl font-bold text-blue-600'>LiveChatAI</h1>
        <div className='flex items-center space-x-4'>
          <span className='text-gray-600'> Workspace</span>
          <button className='bg-black text-white py-2 px-4 rounded' onClick={handleCreateClick}>
            + New AI Chatbot
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className='mt-8'>
        <h2 className='text-3xl font-semibold'>Dashboard</h2>
        <div className='mt-4 p-6 bg-white rounded shadow-lg'>
          {/* My Chatbot Section */}
          <div className='mb-4'>
            <h3 className='text-xl font-semibold'>My Chatbot</h3>
            <div className='flex items-center space-x-8 mt-2'>
              <div>
                <span className='block text-lg font-bold'>11</span>
                <span className='text-gray-500'>Messages</span>
              </div>
              <div>
                <span className='block text-lg font-bold'>1</span>
                <span className='text-gray-500'>Conversations</span>
              </div>
              <div>
                <span className='block text-lg font-bold'>0</span>
                <span className='text-gray-500'>Resolutions</span>
              </div>
            </div>
          </div>

          {/* Options Section */}
          <div className='flex space-x-4 mt-4'>
            <button className='text-gray-600 underline'>Customize</button>
            <button className='text-gray-600 underline'>Data Source</button>
            <button className='text-gray-600 underline'>Inbox</button>
            <button className='text-gray-600 underline'>Settings</button>
          </div>
        </div>
      </main>
    </div>
  )
}
