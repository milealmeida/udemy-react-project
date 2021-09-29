import { signInWithGoogle, auth } from './Firebase';

const Login = () => {
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    );
};

export default Login;