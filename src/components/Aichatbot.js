import React, { useState } from 'react'
import axios from 'axios'

const AIChatBox = () => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return

    const newMessages = [...messages, { sender: 'User', text: input }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            ...newMessages.map(msg => ({
              role: msg.sender === 'User' ? 'user' : 'assistant',
              content: msg.text,
            })),
          ],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`, // <-- Replace this
            'Content-Type': 'application/json',
          },
        }
      )

      const reply = response.data.choices[0].message.content.trim()
      setMessages([...newMessages, { sender: 'AI', text: reply }])
    } catch (error) {
      console.error('API Error:', error)
      setMessages([...newMessages, { sender: 'AI', text: 'The weather is rainy and gloomy.' }])
    } finally {
      setLoading(false)
      setMessages([...newMessages, { sender: 'AI', text: 'Tania is the Client Liason.' }])
    } if (input.toLowerCase().includes('who is quincy')) {
       setLoading(false)
       setMessages([...newMessages, { sender: 'AI', text: 'Quincy is the Project Lead.' }])
      setLoading(false)
       setMessages([...newMessages, { sender: 'AI', text: 'Quincys title is Project Lead.' }])
    } else if (input.toLowerCase().includes('who is angel')) {
      setLoading(false)
      setMessages([...newMessages, { sender: 'AI', text: 'Angel is the Solutions Anaylst.' }])
    } else if (input.toLowerCase().includes('who is vel')) {
      setLoading(false)
      setMessages([...newMessages, { sender: 'AI', text: 'Vel is the Quality Assurance Anaylst.' }])
    } else {
      setLoading(false)
    }
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: '70px',
      right: '20px',
      width: '300px',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      zIndex: 9999,
      boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    }}>
      <div style={{ maxHeight: '250px', overflowY: 'auto', marginBottom: '10px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ margin: '6px 0' }}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
        {loading && <div><em>AI is typing...</em></div>}
      </div>

      <input
        type="text"
        className="form-control"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button className="btn btn-primary mt-2 w-100" onClick={handleSend} disabled={loading}>
        {loading ? 'Thinking...' : 'Send'}
      </button>
    </div>
  )
}

export default AIChatBox

