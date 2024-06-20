import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AlertFormApp } from "../../components";
import { ValidateData } from "../../../config";
import { LoginUserUseCase } from "../../../core";
import { AuthContext } from "../../auth";


export const LoginApp = () => {
  const { login } = useContext( AuthContext );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, SetEmailError] = useState<string>();
  const [password, setPassword] = useState<string>('');
  const [passwordError, SetPasswordError] = useState<string>();
  const [validSend, setValidSend] = useState(false);
  const [errorHttp, setErrorHttp] = useState<string>();
  const navigate = useNavigate();


  useEffect(() => {
    setValidSend(!emailError && !passwordError && email !== '' && password !== '');
  }, [emailError, passwordError, email, password]);


  const onChangeEmail = ( e: ChangeEvent<HTMLInputElement> ) => {
    setEmail(e.target.value.trim());

    const [mailerError, _] = ValidateData.email(e.target.value);
    if( mailerError ) return SetEmailError(mailerError);

    SetEmailError(undefined);
  };


  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value.trim());

    const [passError, _] = ValidateData.password(e.target.value);
    if( passError ) return SetPasswordError(passError);

    SetPasswordError(undefined);
  };


  const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if( !validSend || isLoading ) return;

    setIsLoading(true);
    const data = await LoginUserUseCase(email, password);
    setPassword('');

    if( data.error ){
      setIsLoading(false);
      return setErrorHttp(data.error);
    }

    setIsLoading(false);
    setErrorHttp(undefined);
    login( data.token!, data.user );
    navigate('/');
  }


  return (
    <div className='mt-32'>
      <div className='text-white flex items-center justify-center'>
        <h1 className='font-black md:text-9xl text-6xl'>S</h1>
        <p className='uppercase md:text-5xl text-3xl'>Sport AI</p>
      </div>

      <form
        onSubmit={ onSubmit }
        className={`max-w-xl mx-auto py-6 px-8 mt-8 bg-gray-200 rounded-md ${isLoading && 'opacity-80'}`}
      >
        <h2 className='text-center font-medium text-3xl'>Bienvenido de nuevo!</h2>
        <p className='text-center mb-12'>Inicia sesión para acceder a tu asistente virtual</p>

        {
          errorHttp
          &&
          <AlertFormApp content={errorHttp} error/>
        }

        <div className='flex flex-col gap-1 text-black mb-4'>
          <label className='font-medium' htmlFor='email'>Email</label>
          <input value={ email } onChange={ onChangeEmail } type='email' className={`focus:outline-indigo-600 shadow-sm bg-white px-3 py-2 rounded-lg`} id='email' placeholder='example@gmail.com'></input>
          {
            emailError
            &&
            <AlertFormApp content={emailError} error/>
          }
        </div>

        <div className='flex flex-col gap-1 text-black'>
          <label className='font-medium' htmlFor='password'>Password</label>
          <input onChange={ onChangePassword } value={ password } type='password' className={`focus:outline-indigo-600 shadow-sm bg-white px-3 py-2 rounded-lg`} id='password' placeholder='example123'></input>
          {
            passwordError
            &&
            <AlertFormApp content={passwordError} error/>
          }
        </div>

        <div className='flex justify-center'>
          <button
            disabled={ !validSend || isLoading }
            className='w-full rounded-md bg-black text-white my-7 py-1.5 px-2 disabled:opacity-50'
          >Iniciar Sesión
          </button>
        </div>

        <div className='mt-5'>
          <p className='text-center text-sm font-medium'>
            ¿No tienes una cuenta?
            <NavLink className='underline text-blue-500' to='/auth/register'> Registrate</NavLink>
          </p>
          <p className='text-center text-sm font-medium mt-2'>
            Olvidaste tu contraseña?
            <NavLink className='underline text-blue-500' to='/auth/forgot-password'> Restablece tu password</NavLink>
          </p>
        </div>
      </form>
    </div>
  )
}
