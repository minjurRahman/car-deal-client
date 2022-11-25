import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = data => {
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully.')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {})
            .catch(error => console.log(error))
        })
        .catch(error => {
            console.log(error.message)
            setSignUpError(error.message)
        });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center font-bold'>Sign Up</h2>
            <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                         {...register("name", {required: "Name is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                         {...register("email", {required: "Email Address is required"})}
                         className="input input-bordered w-full max-w-xs" /> 
                         {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" 
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be minimum 6 characters or longer"},

                            // pattern: {value: /"^(?=.*[a-z])(?=.*[A-Z])/, message: 'Password must be Strong' } //regular expression
                        })}
                        className="input input-bordered w-full max-w-xs" /> 
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>
                    <input className='btn btn-primary w-full mt-4 mb-2' type="submit" value="Sign Up" />
                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p className=''>Already have an account <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;