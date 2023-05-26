

// export default Login;
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useEffect } from 'react';

const Login = () => {
  useEffect(()=>{
    document.title="Sportz Car | Login"
  })
  const [show, setShow] = useState(false);
  const [error, setError] = useState(null);
  const { signInuser1} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError('');
    //validation
    if (!email.trim() || !password.trim()) {
      setError('A user cannot submit empty email and password fields');
      return;
    }
    signInuser1(email,password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex justify-center items-center ">
        <div className="card lg:w-96 sm:max-w-md bg-base-100 ">
          <h1 className="text-3xl font-bold text-center pt-3">Login now!</h1>
          <form onSubmit={handleSignIn}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary w-full" type="submit" value='Login' />
              </div>
            </div>
          </form>
          <p className='text-error text-center'>{error}</p>
          <p className='text-center pb-4'>You are new in Sportz Car Toy!! <Link className='text-orange-600 text-xl text-bold' to='/signup' >Sign Up</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login

