import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const gifts = [
  'Tien',
  'Ming',
  'Nam',
]
function App() {
  const [gift, setGift] = useState();
  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index])
    console.log(gift)
  }

  //

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Call API 
    console.log({
      name,
      email,
    })
  }
  return (
    <div style={{ padding: 32 }}>
      <div>{gift || 'chưa có phần thưởng'}</div>
      <button onClick={randomGift}>Lấy Thưởng</button>

      {/*  */}
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={handleSubmit}>Register</button>

    </div>
  )
}

export default App
