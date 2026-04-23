import { useState } from 'react';
import Signup from './component/Signup';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const changeName = (e) => { setName(e.target.value); };
  const changeEmail = (e) => { setEmail(e.target.value); };
  const changePassword = (e) => { setPassword(e.target.value); };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z]{2,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!nameRegex.test(name)) return setError("Invalid name format");
    if (!emailRegex.test(email)) return setError("Invalid email format");

    const passwordRules = [
      { test: (p) => p.length >= 8, label: "Length (min 8 characters)" },
      { test: (p) => /[A-Z]/.test(p), label: "Uppercase letter" },
      { test: (p) => /[a-z]/.test(p), label: "Lowercase letter" },
      { test: (p) => /\d/.test(p), label: "Number" },
      { test: (p) => /[@$!%*?&]/.test(p), label: "Special character" },
    ];

    const missing = passwordRules
      .filter(rule => !rule.test(password))
      .map(rule => rule.label);

    if (missing.length > 0) {
      setError(`Missing: ${missing.join(", ")}`);
      setIsValid(false);
      return;
    }
    setError("Form Submitted Successfully");
    setIsValid(true);
    console.log("Form Data:", { name, email });

    setName('');
    setEmail('');
    setPassword('');
  };

  /*if (!nameRegex.test(name)) {
    setError("Invalid name format");
    setIsValid(false);

  } else if (!emailRegex.test(email)) {
    setError("Invalid email format");
    setIsValid(false);

  } else if (!passwordRegex.test(password)) {
    setError("Password must be at least 8 characters long and contain both letters and numbers");
    setIsValid(false);

  } else {
    setError("Form Submitted Successfully");
    setIsValid(true);
    console.log("Form Data:", { name, email });

    setName('');
    setEmail('');
    setPassword('');
  }

};*/

  return (
    <Signup
      name={name}
      email={email}
      password={password}
      error={error}
      isValid={isValid}
      changeName={changeName}
      changeEmail={changeEmail}
      changePassword={changePassword}
      handleSubmit={handleSubmit}
    />
  );
}

export default App;