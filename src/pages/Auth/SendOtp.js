import { IoMdSend } from 'react-icons/io';
import {LoginQuries} from '../../utils/utils'
import { useEffect, useState } from 'react';
import ValidateOtp from './ValidateOtp';


function SendOtp() {

    const [adminEmail, setAdminEmail] = useState('')
    const [isSendOtp, setIsSendOtp] = useState(false)

    function handleInputChange(e){
        setAdminEmail(e.target.value)
    }
    function OtpGenerator(){
        var digits = '0123456789'; 
        let OTP = '';
        for (let i = 0; i < 6; i++ ) {
            OTP += digits[Math.floor(Math.random()*10)];
        }
        return OTP
    }
    async function updateOtp(admin, otp){
        const loginQuries = new LoginQuries
        const updateAdminOtp = await loginQuries.updateAdminOtp(admin , otp)
    }
    async function handleSendOtp(){
        const loginQuries = new LoginQuries
        if(!(adminEmail==='')){
            const [allAdmin] = await loginQuries.findAdminUser(adminEmail)
            if(!allAdmin){
                alert('user not exist')
            }else{
                if(allAdmin.userType==='ADMIN'){
                    // alert('you are an admin');
                    updateOtp(allAdmin, OtpGenerator())
                    setIsSendOtp(!isSendOtp)
                }else{
                    alert('you are not an admin')
                }
            }
        }else{
            alert('please enter email')
        }
    }

    
    return ( 
        <div>
            {
                !isSendOtp?
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header"><h3 className="text-center font-weight-light my-2">LOGIN</h3></div>
                                <div className="card-body mb-3">
                                    <div className="small mb-3 text-muted">Enter your email address and we will send you a otp to login your account.</div>
                                    {/* <form> */}
                                        <div className="form-floating mb-3">
                                            <input onChange={handleInputChange} className="form-control" type="email" placeholder="name@example.com" />
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <button onClick={handleSendOtp} className='btn btn-primary'>Send Otp <IoMdSend/></button>
                                        </div>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <ValidateOtp adminEmail={adminEmail}/>
            }
        </div>
     );
}

export default SendOtp;