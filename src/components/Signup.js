import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, {
        email,
        password,
      });
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      alert('Signup failed. Try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Signup</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label>Email</label>
              <input type="email" className="form-control" required
                value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input type="password" className="form-control" required
                value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-success w-100">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
