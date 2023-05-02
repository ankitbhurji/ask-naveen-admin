import { IoMdSend } from 'react-icons/io';


function ValidateOtp(props) {

    const {adminEmail} = props
   
    return ( 
        <div>
          <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-3">ENTER OTP</h3></div>
                            <div className="card-body p-5 mb-3">
                                <div className="small mb-1 text-muted">Enter your otp to login your account.</div>
                                {adminEmail && <div className="small mb-3 text-success">Otp has been sent on {adminEmail}</div>}
                                <form>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" type="tel" maxLength={6} placeholder="name@example.com" />
                                        <label htmlFor="inputEmail">Otp</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <button className="btn btn-primary">Login <IoMdSend/></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ValidateOtp;