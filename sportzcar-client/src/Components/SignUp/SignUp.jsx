
import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useEffect } from 'react';

const SignUp = () => {
  useEffect(()=>{
    document.title="Sportz Car | Signup"
  })
  const [error, setError] = useState('');
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password,name,photo);
    setError('');
    // Validation
    if (!email.trim() || !password.trim()) {
      setError('A user cannot submit empty email and password fields');
      return;
    }
    else if (password.length < 6) {
      setError('Password must be six characters or longer');
      return
    }
    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserData (result.user,name,photo);
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      })
    navigate(from, { replace: true });
  }
  const updateUserData = (user,name,photo)=>{
    updateProfile(user,{
        displayName:name,
        photoURL:photo,
    })
    .then(()=>{
        console.log('user name updated')
    })
    .catch(error=>{
        seterror(error.message)
    })
}
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex justify-center items-center ">
        <div className="card lg:w-96 sm:max-w-md bg-base-100 ">
          <h1 className="text-3xl font-bold text-center pt-3">Signup now!</h1>
          <form onSubmit={handleSignup}>
            <div className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
              </div>
              
              <div className="form-control mt-6">
                <input className="btn btn-primary w-full" type="submit" value='Signup' />
              </div>
            </div>
          </form>
          <p className='text-error text-center'>{error}</p>
          <p className='text-center pb-4'>Already have an account in Sportz Car!! <Link className='text-orange-600 text-xl text-bold' to='/login' >Signin</Link></p>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  )
}

export default SignUp;

