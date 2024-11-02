import {FcGoogle} from "react-icons/fc"
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { app } from "../Firebase";
import { useDispatch } from 'react-redux';
import { logInSuccess} from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';


export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const handleGoogleClick=async () =>{
try{
const provider=new GoogleAuthProvider()
const auth=getAuth(app)

const result= await signInWithPopup(auth,provider)
const res = await fetch('/api/auth/google',{
  method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
});
const data = await res.json();
dispatch(logInSuccess(data));
navigate('/profile');
console.log(result);
}catch(error){
console.log("could not sign in with google",error);
}
}

  return (
    <button onClick={handleGoogleClick} type='button' className="flex items-center justify-center w-full
     bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium
      hover:bg-red-800
       active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded">
        <FcGoogle className="text-2xl bg-white rounded-full mr-2"/>
        Continue with Google
    </button>
  )
}
