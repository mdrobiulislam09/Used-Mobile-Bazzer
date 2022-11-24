import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const handleLogin = data =>{
        console.log(data);
    }

    return (
        <div className='h-[400px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                            })} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: 'password at last 6 character' }
                            })} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <br></br>
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    <input className='w-full btn btn-accent' value="Login" type="submit" />
                    <br></br>
                    <Link to='/signup'>Register</Link>
                    <div className="divider">OR</div>
                    <dutton className='btn btn-outline w-full'>Continue with Google</dutton>
                </form>
            </div>
        </div>
    );
};

export default Login;