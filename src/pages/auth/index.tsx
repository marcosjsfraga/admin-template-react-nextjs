import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";

export default function Auth() {

  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function submit() {
    if (mode === 'login') {
      console.log('login');
    } else {
      console.log('signup');
    }
  }

  return (
    <div className="flex h-screen justify-center items-center">
      {/* IMAGEM */}
      <div className="md:w-1/2 lg:w-2/3 hidden md:block">
        <img src="https://source.unsplash.com/random" 
              alt="Imagem login" 
              className="h-screen w-full object-cover"
        />
      </div>

      {/* FORM */}
      <div className="m-10 w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-xl font-bold mb-5">
          {mode === 'login' ? 'Informe suas credenciais' : 'Cadastre-se na plataforma'}
        </h1>
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
              Criar uma conta.
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
