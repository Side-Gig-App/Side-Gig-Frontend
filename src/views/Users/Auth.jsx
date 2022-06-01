import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth, useCurrentUser } from '../../context/UserProvider'


export default function Authenticate(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const user = useCurrentUser();
    const { login, signUpUser } = useAuth();

   const handleSubmit = async (e) => {
       try{
           e.preventDefault();
           console.log('line 19 authjsx')
           await login({ email: email, password: password });

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

   const handleSignUp = async (e) => {
       try{
           e.preventDefault();
           
           await signUpUser({ email: email1, password: password1 });

       }catch(error){
           setError(error.message)
       }
   };

   const handleClickForSignUp = (e) => {
       e.preventDefault();

       if (!email1 || !password1) {
           setError('Enter valid username and Password')
       }else{
           setError('');
           handleSignUp(e)
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
       </form>
       <form onSubmit={handleSignUp}>
               <label aria-label='email1'>Email: </label>
               <input
                   id='email1'
                   type='text'
                   placeholder='email'
                   value={email1}
                   onChange={({ target }) => setEmail1(target.value)} />

               <label aria-label='password1'>Password: </label>
               <input
                   id='password1'
                   type='password'
                   placeholder='password'
                   value={password1}
                   onChange={({ target }) => setPassword1(target.value)} />

               <button
                   type='submit'
                   aria-label='submit-button'
                   onClick={handleClickForSignUp}>
                   Sign Up
               </button>
           </form></>
   )

}