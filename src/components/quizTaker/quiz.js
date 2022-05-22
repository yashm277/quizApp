import { getAuth, getRedirectResult } from 'firebase/auth';

const Quiz = () => {
    const auth = getAuth();
    getRedirectResult(auth)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePicture = result.user.photoURL;

            localStorage.setItem('name', name);
            localStorage.setItem('email', email);
            localStorage.setItem('profilePicture', profilePicture);
        })
        .catch((err) => {
            console.log(err);
        });

    return (
        <div>
            <div>hello</div>
        </div>
    );
};

export default Quiz;
