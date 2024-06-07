import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className=' container'>
      <div className=' row w-530'>
        <div className=' clo-sm-12 d-flex loginform'>
            <div className=' login-card card-block auth-body'>
                <div className='authbox'>
                    <h1 className='brand-logo text-center'>Instagram</h1>
                    <br />
                    <div className=' col-12'>
                        <form className=' w-100'>
                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-email'></i>
                                </span> 
                                <input type="email" placeholder='Email Address' className='form-control' required autoComplete='off'/>
                            </div>

                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-email'></i>
                                </span> 
                                <input type="password" placeholder='Password' className='form-control' required autoComplete='off'/>
                            </div>
                            <div className='m-t-10 text-left d-flex'>
                                <Link className="text-rigth f-w-600 text-inverse">
                                    <i className='icofont icofont-lock'>Forgot Password</i>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
