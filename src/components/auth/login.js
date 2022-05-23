import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { signInWithGoogle } from "../../firebase-config";
import { auth } from "../../firebase-config.js";
import { Button, Card } from "@mui/material";
// import videoBg from '../../assets/videoBg.mp4'
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      navigate("/quiz");
    }
  });

  return (


    // -- trying video background 
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

    // --- trying card mui
//     <Card sx={{ maxWidth: 345 }}>
//     <CardMedia
//       component="img"
//       height="140"
//       image="/static/images/cards/contemplative-reptile.jpg"
//       alt="green iguana"
//     />
//     <div>
//       <h2>Quiz App</h2>
//       <CardActions>
//       <div className="sign-btn-container">
//         <Button variant="contained" color="success" className="ctmsign" onClick={signInWithGoogle}>
//         Login With Google
//         </Button>
//       </div>
//     </div>
//     </CardActions>
//   </Card>

 
    <div className="maincard">
        <div>
        <h2>Quiz App</h2>
      <div className="sign-btn-container">
        <Button variant="contained" color="success" className="ctmsign" onClick={signInWithGoogle}>
        Login With Google
        </Button>
      </div>
        </div>
    </div>


  );
};

export default Login;
