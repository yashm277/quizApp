import { getAuth, getRedirectResult } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Quiz = () => {
  const auth = getAuth();
  getRedirectResult(auth)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePicture = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePicture", profilePicture);
    })
    .catch((err) => {
      console.log(err);
    });

  const navigate = useNavigate();

  // const logout = () => {
  //     localStorage.clear();
  //     history.push('../login')
  // }

  return (
    <div>
      <div>hello</div>
      <button class='logoutbtn' onClick={()=>navigate('./logout')}>
                Logout
            </button>
    </div>
  );
};

export default Quiz;
