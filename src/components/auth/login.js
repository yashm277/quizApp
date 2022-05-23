import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle } from "../../firebase-config";
import { auth } from "../../firebase-config.js";
import videoBg from '../../assets/videoBg.mp4'
// import './login.css';

const Login = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigate("/quiz");
    }
  });

  return (
    // <div className="main">
    //   <video src={videoBg} autoPlay loop muted />
    //   <div className="content">
    //     <h2>Quiz App</h2>
    //     <div className="sign-btn-container">
    //       <button className="ctmsign" onClick={signInWithGoogle}>
    //         Login With Google
    //       </button>
    //     </div>
    //   </div>
    // </div>
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
