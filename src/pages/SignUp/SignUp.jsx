import { Link } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProviders';
import { useContext } from 'react';

const SignUp = () => {
    const {handleSignUp} = useContext(AuthContext);
    const handleSignup = () => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password, name);

        handleSignUp(email, password)
       .then(result => {
        const signUpUser = result.user;
        console.log(signUpUser);
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
            <h1 className="text-4xl font-bold text-center">SignUp now!</h1>
              <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
              </div>
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
                <input className='btn btn-primary' type="submit" value="Sign Up" />
              </div>
              </form>
              <p className='font-bold text-center my-4'>Already Have An Account? <Link className='text-orange-500' to='/login'>Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;