import { useState } from 'react'

export default function DemoForm() {
  const [email, setEmail] = useState('')

  function updateEmail({ target: { value }}) {
    setEmail(value);
  }

  async function sendMessageRequest() {
    if (email !== '') {
      fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setEmail('')
    }
  }
  return (
    <div className="grid grid-cols-1 gap-y-10 mb-32">
      <input onChange={updateEmail} value={email} placeholder='Email' type="email" className="form-input px-4 py-3 rounded"></input>
      {/* <textarea placeholder='Content' className="form-textarea px-4 py-3 rounded"></textarea> */}
      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-3 rounded" type="button" onClick={sendMessageRequest}>Send demo</button>
    </div>
  )
}
