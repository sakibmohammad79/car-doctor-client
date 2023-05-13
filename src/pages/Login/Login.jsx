import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {handleSignIn} = useContext(AuthContext)
    const handleLogin = () => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
      console.log(email, password)
       handleSignIn(email, password)
       .then(result => {
        const signInUser = result.user;
        console.log(signInUser);
        navigate(from, {replace: true});

       })
       .catch(error => {
        console.log(error.message);
       })
    }
    return (
        <div className="hero min-h-screen bg-base-200 my-12">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={image} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
              <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Login" />
              </div>
              </form>
              <p className='font-bold text-center my-4'>New To Cars Doctors <Link className='text-orange-500' to='/signup'>Sign Up</Link></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;