import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";
    const handlegooglesignin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center p-4'>
                <button onClick={handlegooglesignin} className="btn btn-circle">
                    G
                </button>
            </div>
        </div>
    )
}

export default SocialLogin