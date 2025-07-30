import React, { useState } from 'react';
import { CCard, CCardBody, CFormInput, CButton, CSpinner } from '@coreui/react';

const ChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages([...messages, userMessage, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CCard className="chat-widget" style={{ maxWidth: '400px', position: 'fixed', bottom: '20px', right: '20px' }}>
      <CCardBody>
        <div style={{ maxHeight: '300px', overflowY: 'auto', marginBottom: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ textAlign: msg.role === 'user' ? 'right' : 'left' }}>
              <p><strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong> {msg.content}</p>
            </div>
          ))}
          {loading && <CSpinner size="sm" />}
        </div>
        <div className="d-flex">
          <CFormInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask something..."
          />
          <CButton onClick={sendMessage} color="primary" className="ms-2">Send</CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default ChatWidget;
