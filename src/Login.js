import { db, auth, provider } from './Firebase';
import { signInWithPopup, signOut  } from 'firebase/auth';
import { doc, setDoc } from  'firebase/firestore';

const Login = () => {

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
                console.log(error.message);
            });
    }

    const firebaseLogout = () => {
        signOut(auth);
    }

    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
            <button onClick={() => firebaseLogout()}>Logout</button>
        </div>
    );
};

export default Login;