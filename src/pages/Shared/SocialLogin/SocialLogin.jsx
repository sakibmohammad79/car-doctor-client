import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";

const SocialLogin = () => {
    const {handleGoogleLogin} = useContext(AuthContext);

    const handleGoogle = () =>{

    handleGoogleLogin()
    .then(result => {
        const googleLogedUser = result.user;
        console.log(googleLogedUser);
    })
    .catch(error => {
        console.log(error.message);
    })
    }
    const handleGoogleSign = () => {

        handleGoogleLogin()
        .then(result => {
          const googleLogedUser = result.user;
          console.log(googleLogedUser);
        })
        .then(error => {
          console.log(error.message);
        })
      }
  return (
    <div className="text-center">
        <div className="divider">OR</div>
      <div>
        <button onClick={handleGoogle || handleGoogleSign} className="btn btn-circle">
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
