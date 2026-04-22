import React from 'react';

function Signup({ name, email, password, changeName, changeEmail, changePassword, handleSubmit }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col rounded-xl bg-transparent border border-slate-200 p-6 shadow-md">
        <h4 className="block text-xl font-medium text-slate-800 text-center"> Sign Up </h4>

        <form className="mt-8 mb-2 w-80  sm:w-96" onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm ">
              <label className="block mb-2 text-sm text-slate-600">Name</label>
              <input 
                type="text" 
                required 
                value={name} 
                onChange={changeName}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2" 
                placeholder="Name" 
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-600">Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={changeEmail}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2" 
                placeholder="Email" 
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-slate-600">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={changePassword}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2" 
                placeholder="Password" 
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;