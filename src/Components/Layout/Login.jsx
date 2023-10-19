import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContexts } from "../AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const {signIn} = useContext(AuthContexts)
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            console.log(result.user)
            toast.success("Login Successfull");
        })
        .catch(error => console.error(error))
    }
    return (
        <div className="w-[85%] m-auto">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card md:lg:w-[24rem] flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className="p-6">
                            <p>Don't have an account <Link className="text-blue-500" to="/signup">SignUp</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;