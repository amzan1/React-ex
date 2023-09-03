import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
type Userinfo ={
    email:string,
    username:string,
    password:string,
    id:number
}
function Login() {
    let isLogin=false
    const [users, setUsers] = React.useState<Userinfo[]>([]);
    const [info, setInfo] = React.useState<Userinfo| any>()
    const nav = useNavigate()


    React.useEffect(()=>{
        SubmitUser()
        },[])
        const SubmitUser =()=>{
            axios.get("https://fakestoreapi.com/users")
        .then ((res)=>{
            console.log(res.data)
            console.log(res.data.target.value)
            setUsers(res.data)
            users.map((user) => {
                if(user.username==info.username && user.password==info.password){
                    isLogin=true
                    localStorage.setItem("isLogn",isLogin)
                    nav("/home")
                }
             })})
        }
  return (
    <div className=' flex flex-col justify-center items-center'>
            <div className=' w-28 '>
                <img src="https://logohistory.net/wp-content/uploads/2023/02/Amazon-logo.png" alt="" />
            </div>
            <div className=' border border-gray-300 rounded-xl pl-4 pr-4 pt-5 pb-5'>
                <h1 className=' text-3xl font-medium pb-1 mb-3'>Sign in</h1>
                <div className='flex flex-col mb-4'>
                <label className=' text-sm font-medium'>Your name</label>
                <input className=' w-80 h-8 border border-gray-300 rounded-md' type="text" placeholder='First and last name' value={info?.username} onChange={e=> setInfo({...info,username:e.target.value})}/>
                </div>
                
                <div className='flex flex-col mb-4'>
                <label className=' text-sm font-medium'>Password</label>
                <input className=' w-80 h-8 border border-gray-300 rounded-md' type="password" placeholder='At least 6 characters' value={info?.password} onChange={e=> setInfo({...info,password:e.target.value})}/>
                </div>
                <div className=' bg-[#FFD712] flex justify-center w-80 h-7 rounded-md'>
                    <button onClick={SubmitUser}>Continue</button>
                </div>
                <hr className='border-b border-gray-300 mb-3 mt-3'/>
                <div>
                    <p>New to Amazon? <a href="/signup" className=' text-sky-600 hover:text-red-700 hover:underline hover:underline-offset-1'>Create your Amazon account</a></p>
                </div>
            </div>
        </div>
  )
}

export default Login