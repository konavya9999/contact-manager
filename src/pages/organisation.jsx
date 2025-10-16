import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Organisation(){
    return(
        <>
        <div className='header-div'>
                    <h1>Organizations</h1>
                    <div className='btn btn-primary'>+Add new Organization</div>
                </div>
                <div className='search-div'>
                    <Form>
                        <Form.Control type="search" placeholder="search" />
                    </Form>    
                </div>
                <div className='table-div'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Contacts</th>
                            </tr>
                        </thead>
                            <tbody>
                            <tr>
                                <td scope="row">Acme inc</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td scope="row">Mission problus</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td scope="row">Fission problus</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td scope="row">Gluten free</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td scope="row">Extensive Enterprises</td>
                                <td>9</td>
                            </tr>
                            <tr>
                                <td scope="row">Seromica building</td>
                                <td>14</td>
                            </tr>
                        </tbody>
                   </table>
                </div>
                <div className='button-div mt-3'>
                   <div className="div-display">
                        <div>contacts</div>
                            <h4>167</h4>
                    </div>
                    <div className='div-display'>
                        <div>contacts</div>
                        <h4>74</h4>
                    </div>
                </div>
        </>
    )
}
export default Organisation;