import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth, useCurrentUser } from '../../context/UserProvider'


export default function Authenticate(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const user = useCurrentUser();
    const { login } = useAuth();

   const handleSubmit = async (e) => {
       try{
           e.preventDefault();
           
           await login({ email, password });

       }catch(error){
           setError(error.message)
       }
   };

   const handleClick = (e) => {
       e.preventDefault();

       if (!email || !password) {
           setError('Enter valid username and Password')
       }else{
           setError('');
           handleSubmit(e)
       }
   };

   return(
    <><form onSubmit={handleSubmit}>
           <label aria-label='email'>Email: </label>
           <input
               id='email'
               type='text'
               placeholder='email'
               value={email}
               onChange={({ target }) => setEmail(target.value)} />

           <label aria-label='password'>Password: </label>
           <input
               id='password'
               type='password'
               placeholder='password'
               value={password}
               onChange={({ target }) => setPassword(target.value)} />

           <button
               type='submit'
               aria-label='submit-button'
               onClick={handleClick}>
               Sign In
           </button>
       </form><form onSubmit={handleSubmit}>
               <label aria-label='email'>Email: </label>
               <input
                   id='email'
                   type='text'
                   placeholder='email'
                   value={email}
                   onChange={({ target }) => setEmail(target.value)} />

               <label aria-label='password'>Password: </label>
               <input
                   id='password'
                   type='password'
                   placeholder='password'
                   value={password}
                   onChange={({ target }) => setPassword(target.value)} />

               <button
                   type='submit'
                   aria-label='submit-button'
                   onClick={handleClick}>
                   Sign Up
               </button>
           </form></>
   )

}