import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './auth.css';

const ManagerLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const authToken = sessionStorage.getItem('Manager Auth Token');

    const handleLogin = () => {
        const authentication = getAuth();
        signInWithEmailAndPassword(authentication, email, password)
            .then((response) => {
                sessionStorage.setItem(
                    'Manager Auth Token',
                    response._tokenResponse.refreshToken
                );
                navigate('/manager');
            })
            .catch((error) => {
                alert(error);
            });
    };

    useEffect(() => {
        if (authToken) navigate('/quiz-maker');
    }, [authToken]);

    if (authToken) return <></>;

    return (
        <div className="auth-login-wrapper">
            <input
                placeholder="E-mail"
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
            />
            <input
                placeholder="Password"
                type="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default ManagerLogin;
