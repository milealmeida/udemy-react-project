import { db, auth, provider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { collection, doc, setDoc, getDocs  } from  'firebase/firestore';

const Login = () => {
  const [user, setUser] = useState();

    function signInWithGoogle(){
        signInWithPopup(auth, provider)
            .then(async (result) => {
                const { displayName, email, photoURL, uid } = result.user;
            
                await setDoc(doc(db, 'users', uid), {
                    displayName,
                    email,
                    uid,
                    photoURL,
                });

            }).catch((error) => {
                console.log(error.message)
            });
        }

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In With Google</button>

            { user }
        </div>
    );
};

export default Login;