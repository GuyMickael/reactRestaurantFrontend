import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <p>Login</p>
      <div class="relative mb-2">
                <input id="email" class="w-full rounded px-3 border border-gray-300 pt-5 pb-2 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 focus:outline-none input active:outline-none" type="text" autofocus>
                <label for="email" class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Email or phone</label>
            </div>
    </div>
  );
};

export default Login;