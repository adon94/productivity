import { useState } from 'react'
import { Button } from '@/components/button';

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
      <textarea onChange={updateEmail} value={email} placeholder='Write here...' className="form-input px-4 py-3 rounded"></textarea>
      {/* <textarea placeholder='Content' className="form-textarea px-4 py-3 rounded"></textarea> */}
      <Button>Next</Button>
    </div>
  )
}
