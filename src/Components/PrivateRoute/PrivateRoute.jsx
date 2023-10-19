import { useContext } from "react";
import { AuthContexts } from "../AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const {isLoading, user} = useContext(AuthContexts);
    if(isLoading){
        return "Loading..."
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
    
};

export default PrivateRoute;