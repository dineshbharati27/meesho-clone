import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import axios from 'axios';

const Login = () => {

  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        await dispatch(login({ email, password })).unwrap();
        navigate('/');
      } catch (error) {
        console.error('Login failed:', error);
      }
    } else {
      try {
        const avatar = 'https://picsum.photos/800'
        const response = axios.post("https://api.escuelajs.co/api/v1/users", {name, email, password, avatar})
        if(response){
          setIsLogin(true)
          setEmail('')
          setPassword('')
        } else {
          console.log("error occur")
        }
      } catch (error) {
        console.log(error)
      }
    }
    
  };

  return (
      isLogin ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
              <p className="prata-regular text-3xl">Login</p>
              <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Password"
              required
            />
            <div className="w-full flex justify-between text-sm mt-[-8px]">
              <p className="cursor-pointer">Forgot your password?</p>
              <p onClick={() => setIsLogin(false)} className="cursor-pointer">Create account</p>
            </div>
            <button type="submit" className="bg-black text-white py-2 mt-4 px-8 font-light">Log in</button>
          </form>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800">
            <div className="inline-flex items-center gap-2 mb-2 mt-10">
              <p className="prata-regular text-3xl">Sign up</p>
              <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
            </div>
            <input
              type="text"  // Changed from "name" to "text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-800"
              placeholder="Password"
              required
            />
            <div className="w-full flex justify-between text-sm mt-[-8px]">
              <p className="cursor-pointer">Forgot your password?</p>
              <p onClick={() => setIsLogin(true)} className="cursor-pointer">Login here</p>  {/* Fixed to toggle login */}
            </div>
            <button type="submit" className="bg-black text-white py-2 mt-4 px-8 font-light">Sign up</button>
          </form>
        </div>
      )
    
  );
};

export default Login;