import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import Organisation  from './Organisation'; 


function Home(){
    const navigate=useNavigate();
    return(
        <>
        <div className="main-container">
            <div className="navbar-layout">
                <h1>Contact manager</h1>
                <div className='dropdown'>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Welcome
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </div>
            <div className="sidebar-layout">
                <div className='btn btn-light mt-3'>Contacts</div>
                <div className='btn btn-light mt-3'onClick={()=>{navigate('/home/organisation')}}>Organizations</div>
                <div className='btn btn-light mt-3'>Dashboard</div>
            </div>
            <div className="main-layout">
                <Organisation/>
                

            </div>
        </div>
        </>
    );

}
export default Home;

