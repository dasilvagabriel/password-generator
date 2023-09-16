import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function App() {
  const [count, setCount] = useState(0)
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [passwordLength, setPasswordLength] = useState(13);
  const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text successfully copied to clipboard');
      })
      .catch(err => {
        console.error('Could not copy text to clipboard: ', err);
      });
  }

  function generator() {
    let generatedPassword1 = '';
    let generatedPassword2 = '';

    for (let i = 0; i < passwordLength; i += 1) {
      generatedPassword1 += characters[Math.floor(Math.random() * characters.length)];
      generatedPassword2 += characters[Math.floor(Math.random() * characters.length)];
    }

    setPassword1(generatedPassword1);
    setPassword2(generatedPassword2);
  }

  return (
    <>
      <div className='center-square'>
        <p className='pass-title'>Generate a <br /> <span className='pass-green'>random password</span></p>
        <p className="subtitle">Never use an insecure password again.</p>
        <label id="pass-label" htmlFor="passwordLength">Password Length: </label>
        <input
          type="number"
          id="passwordLength"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          min="1"
          max="50"   // or whatever max length you want
        />

        <button className="btn" onClick={generator}>Generate passwords</button>
        <hr />
        <div className='output-boxes'>
          <div className='output-box' onClick={() => copyToClipboard(password1)}>
            <p className='pass-output'>{password1} <ContentCopyIcon className="copy-icon" sx={{ fontSize: 16 }}/></p>
          </div>
          <div className='output-box' onClick={() => copyToClipboard(password2)}>
            <p className='pass-output'>{password2}  <ContentCopyIcon className="copy-icon" sx={{ fontSize: 16 }}/></p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
