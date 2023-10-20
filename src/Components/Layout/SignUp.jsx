import { useContext } from "react";
import { AuthContexts } from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
    const { creatUser, updateprofile, logOut, googleSignIn } = useContext(AuthContexts);
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
                toast.success("Login Successfull")
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const imgUrl = form.imageUrl.value;
        console.log(email, password, imgUrl)
        if (!/[A-Z]/.test(password)) {
            return toast.error("Password should contain at least one capital later")
        } else if (!/[!@#$%^&*]/.test(password)) {
            return toast.error("One special character is required")
        }else if(password.length < 6){
            return toast.error("Password must be at least 6 characters long")
        }

        
        creatUser(email, password)
            .then(result => {
                console.log(result.user)
                updateprofile(name, imgUrl)
                logOut()
                    .then(result => {
                        console.log(result)
                    })
                    .catch(error => console.error(error))

                    toast("SignUp Successfull login now")
                    navigate("/login")
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="card  md:lg:w-[24rem]  flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image Url</span>
                                    </label>
                                    <input type="text" name="imageUrl" placeholder="Image Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <div className="w-[15rem] m-auto">
                                <button  onClick={handleGoogleLogin} className="w-full btn btn-sm btn-success">Continue With Google</button>
                            </div>
                            <div className="p-6">
                                <p>Already have an account <Link className="text-blue-500" to="/login">Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;