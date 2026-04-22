import { useState } from 'react';
import Signup from './component/Signup';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ name: '', email: '' });
  const [isValid, setIsValid] = useState(false);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e1 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const p1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!e1.test(email)) {
      setError('Please enter a valid email address.');
    } else if (!p1.test(password)) {
      setError('Enter a password with at least 8 characters, including uppercase, lowercase, number, and special character.');
    } else {
      setError('Form submitted successfully!');
    }
    console.log('Form Data:', { name, email });
    setName('');
    setEmail('');
    setPassword('');
    setIsValid(true);
   
    
    
  };

  return (
    <Signup 
      name={name}
      email={email}
      password={password}
      changeName={changeName}
      changeEmail={changeEmail}
      changePassword={changePassword}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;