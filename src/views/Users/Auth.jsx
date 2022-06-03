import { useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth, useCurrentUser } from '../../context/UserProvider'


export default function Authenticate(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [email1, setEmail1] = useState('');
    const [password1, setPassword1] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const { login, signUpUser } = useAuth();

   const handleSubmit = async (e) => {
       try{
           e.preventDefault();
           await login({ email: email, password: password }) 
           history.replace('/comparison')
       }catch(error){
           setError(error.message)
       }
   };


    
    const handleSignUp = async (e) => {
        e.preventDefault();
        try{
            if (!email1 || !password1) {
                return alert('Enter valid username and Password')
                
            }
            await signUpUser({ email: email1, password: password1 });
            console.log('hello there');
            history.replace('/comparison');
       }catch(error){
           setError(error.message)
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
               aria-label='submit-button'>
               Sign  In
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
                //    onClick={handleClickForSignUp}
                   >
                   Sign Up
               </button>
           </form></>
   )

}