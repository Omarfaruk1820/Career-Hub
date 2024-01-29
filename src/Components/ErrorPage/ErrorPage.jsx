import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center text-5xl">
           <h2>Oops!!!</h2> 
           <Link to="/"></Link>
           <Link to="/">Go Back to home</Link>
        </div>
    );
};

export default ErrorPage;