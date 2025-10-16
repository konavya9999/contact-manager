import {useNavigate} from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    return(
        <>
            <div className="container-login">
                <div className="login-div">
                    <h1>Hi This is Login page</h1>
                    
                    <button onClick={() => {navigate('/home')}}>Click here to go to Home Page</button>                    
                </div>

            </div>
            
                   
        </>    
    );    
}

export default Login;

