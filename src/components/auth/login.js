import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithGoogle } from '../../firebase-config';
import { auth } from '../../firebase-config.js';

const Login = () => {
    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            navigate('/quiz');
        }
    });

    return (
        <div>
            <h2>quizapp</h2>
            <div className="sign-btn-container">
                <button className="ctmsign" onClick={signInWithGoogle}>
                    Login With Google
                </button>
            </div>
        </div>
    );
};

export default Login;
