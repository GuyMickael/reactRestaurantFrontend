import React from 'react';
import GenericInput from '../../../GenericComponents/GenericInput';

const Login: React.FC = () => {

  const [email, setEmail] = React.useState("");

  return (
    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
     <div className="w-full max-w-lg">
      <div className="leading-loose">
        <form className="max-w-sm m-4 p-10 bg-gray-700 bg-opacity-75 rounded shadow-xl">
            <p className="text-white text-center text-lg font-bold">Connexion</p>
              <GenericInput value={email} onChange={setEmail} type="email" placeholder='Adresse Email' />

              <div className="mt-4 items-center flex justify-between">
                <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                  type="submit">Connexion</button>
                <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400 ml-5"
                  href="#">Pas encore inscrit ?</a>
              </div>
              <div className="text-center">
                <p className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                    Créer un compte
                </p>
              </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;