import AuthInput from "@/components/auth/AuthInput";
import { WarningIcon } from "@/components/icons";
import useAuth from "@/data/hook/useAuth";
import { useState } from "react";

export default function Auth() {
  /**
   * Variables
   */
  const { user, loginGoogle } = useAuth();
  
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  /**
   * Functions
   */

  async function submit() {
    if (mode === 'login') {
      await loginGoogle();
    } else {
      console.log('signup');
    }
  }

  function displayMessage(message: string, displayTimeInSecinds = 5) {
    setWarningMessage(message);
    setTimeout(() => setWarningMessage(''), displayTimeInSecinds * 100);
  }

  /**
   * User inteface
   */
  return (
    <div className="flex h-screen justify-center items-center">
      {/* IMAGEM */}
      {/* https://source.unsplash.com/random */}
      <div className="md:w-1/2 lg:w-2/3 hidden md:block">
        <img
          src="../../images/onhere-wallpaper.png"
          alt="Imagem login"
          className="h-screen w-full object-cover"
        />
      </div>

      {/* FORM */}
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          {mode === 'login' ? 'Informe suas credenciais' : 'Cadastre-se na plataforma'}
        </h1>

        {/* Warnings message */}
        {warningMessage !== '' 
          ? (<div className={`
                flex items-center bg-orange-300 py-3 px-5 my-2
                border border-orange-400 rounded-lg
            `}>
              {WarningIcon}
              <span className="ml-1">{warningMessage}</span>
            </div>)
          : false
        }

        <AuthInput label="Email" value={email} changeValue={setEmail} type="email" />
        <AuthInput label="Senha" value={password} changeValue={setPassword} type="password" />

        <button onClick={submit}
          className={`
                  w-full bg-blue-600 hover:bg-blue-400
                  text-white rounded-lg px-4 py-3 mt-6
        `}>
          {mode === 'login' ? 'Entrar' : 'Salvar'}
        </button>

        {mode === 'login' ? (
          <p className="mt-8">
            Ainda não tem uma conta?
            <a onClick={() => setMode('signup')}
              className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer ml-2`}>
              Criar conta.
            </a>
          </p>
        ) : (
          <p className="mt-8">
            Já possui uma conta?
            <a onClick={() => setMode('login')}
              className={`text-orange-500 hover:text-orange-700 font-semibold cursor-pointer ml-2`}>
              Voltar ao login.
            </a>
          </p>
        )}
      </div>
    </div>
  )
}
