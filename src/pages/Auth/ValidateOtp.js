import { IoMdSend } from 'react-icons/io';
import { LoginQuries } from '../../utils/utils';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function ValidateOtp(props) {
    const navigate = useNavigate();

    const {adminEmail} = props
    const [otp, setOtp] = useState('')
    console.log(otp);

    function handleInputChange(e){
        setOtp(e.target.value)
    }
    
    async function handleLogin(email){
        const loginQuries = new LoginQuries
        if(email){
            const [getAdmin] = await loginQuries.findAdminUser(email)
            console.log(getAdmin.otp);
            if(getAdmin.otp==otp){
                // alert('your are logedin')
                localStorage.setItem('token', JSON.stringify(getAdmin.id));
                navigate("/dashboard");
            }else{
                alert('Invalid OTP! Please enter valid otp');
                setOtp('')
            }
            
        }
    }
   
    return (
        adminEmail &&
        <div>
          <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-3">ENTER OTP</h3></div>
                            <div className="card-body p-5 mb-3">
                                <div className="small mb-1 text-muted">Enter your otp to login your account.</div>
                                {adminEmail && <div className="small mb-3 text-success">Otp has been sent on {adminEmail}</div>}
                                <div className="form-floating mb-3">
                                    <input onChange={handleInputChange} value={otp || ''} className="form-control" type="tel" maxLength={6} placeholder="name@example.com" />
                                    <label htmlFor="inputEmail">Otp</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <button onClick={()=>{handleLogin(adminEmail)}} className="btn btn-primary">Login <IoMdSend/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ValidateOtp;