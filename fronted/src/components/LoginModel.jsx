import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';


const LoginModal = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === "Breslev" && password === "1480") {
      alert('התחברת בהצלחה!');
      navigate("/Master");
    } else {
      alert('שם משתמש או סיסמה שגויים.');
      
    }
  };

  return (
      <div className="modal-content">
        <h2>התחברות</h2>
        <input 
          type="text" 
          id="username" 
          placeholder="משתמש" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <br />
        <input 
          type="password" 
          id="password" 
          placeholder="סיסמה" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <br />
        <button id="loginBtn" onClick={handleLogin}>התחבר</button>
      </div>
  );
}

export default LoginModal;
