import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
type Userinfo ={
    email:string,
    username:string,
    password:string,

}
function Signup() {
    const [info, setInfo] = React.useState<Userinfo| any>()
    const nav = useNavigate()
    const SubmitUser = () => {
        if(info.username==""){
            alert("enter your name")
        }else
        if(info.email==""){
            alert("enter your email")
        }else
        if(info.password.length<6){
            alert("Passwords must be at least 6 characters.")
        }
        axios.post("https://fakestoreapi.com/users",{
                        email:info?.email,
                        username:info?.username,
                        password:info?.password,
        })
        .then((res)=>{
            setInfo(res.data)
            nav("/")

        })
    }
  return (
    <>
        <div className=' flex flex-col justify-center items-center'>
            <div className=' w-28 '>
                <img src="https://logohistory.net/wp-content/uploads/2023/02/Amazon-logo.png" alt="" />
            </div>
            <div className=' border border-gray-300 rounded-xl pl-4 pr-4 pt-5 pb-5'>
                <h1 className=' text-3xl font-medium pb-1 mb-3'>Create account</h1>
                <div className='flex flex-col mb-4'>
                <label className=' text-sm font-medium'>Your name</label>
                <input className=' w-80 h-8 border border-gray-300 rounded-md' type="text" value={info?.username} placeholder='First and last name' onChange={e=> setInfo({...info,username:e.target.value})}/>
                </div>                                                                                                                                     
                <div className='flex flex-col mb-4'>
                <label className=' text-sm font-medium'>email</label>
                <input className=' w-80 h-8 border border-gray-300 rounded-md' type="email" value={info?.email} onChange={e=> setInfo({...info,email:e.target.value})}/>
                </div>
                <div className='flex flex-col mb-4'>
                <label className=' text-sm font-medium'>Password</label>
                <input className=' w-80 h-8 border border-gray-300 rounded-md' type="password" value={info?.password} placeholder='At least 6 characters' onChange={e=> setInfo({...info,password:e.target.value})}/>
                </div>
               
                <div className=' bg-[#FFD712] flex justify-center w-80 h-7 rounded-md'>
                    <button onClick={SubmitUser}>Continue</button>
                </div>
                <hr className='border-b border-gray-300 mb-3 mt-3'/>
                <div>
                    <p>Already have an account? <a href="/" className=' text-sky-600 hover:text-red-700 hover:underline hover:underline-offset-1'>Sign in</a></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup