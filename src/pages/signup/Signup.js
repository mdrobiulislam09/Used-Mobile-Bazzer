import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const {createUser} = useContext(AuthContext)

    const handleSignUp = data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className='h-[400px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",{
                            required: "Name needed"
                            })} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{
                            required: "Email Address is required"
                            })} className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{
                            required: "Email Address is required"
                            })}  className="input input-bordered w-full max-w-xs"/>
                    </div>
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    <br></br>
                    <input className='w-full btn btn-accent' value="Register" type="submit" />
                    <br></br>
                    <Link to='/login'>Already have account?</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;