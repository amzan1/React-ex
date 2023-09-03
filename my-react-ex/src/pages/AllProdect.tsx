import React from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
type prodects={
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number,
    },
}
function AllProdect() {
    const [prodect, setProdect] = React.useState<prodects[]>([])
    const [Search, setSearch] = React.useState("")
    React.useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            setProdect(res.data)
        })
    },[])
  return (
    <>
    <Navbar/>
                    <div className='flex justify-center items-center'>
                        <div className=' w-1/2 mt-10 mb-10'> 
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 mt-3 sr-only">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Mockups, Logos..." required onChange={e=>{setSearch(e.target.value)}}/>
                            <button type="submit" className="text-black absolute right-2.5 bottom-2.5 bg-[#FEBD68] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                        </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap justify-center items-center bg-gray-200'>
    {prodect.filter((pro)=>pro.category.toLowerCase().includes(Search)).map((item)=>{
        return(

        <div key={item.id} className='flex justify-center items-center '>
            <div className=" w-full h-full py-10 px-5  flex justify-center items-center">
                <div className=" pl-1  flex justify-center items-center rounded-xl hover:scale-105 duration-500 transform transition cursor-pointer">
                                <div className="w-80  pb-2 bg-white rounded-xl shadow-xl z-10">
                                    <div className="relative flex justify-center items-center h-52">
                                        <img src={item.image} className="max-h-52 min-h-52 object-cover rounded-t-xl" alt=""/>
                                        <div className="bottom-0 right-0 mb-2 mr-2 px-2 rounded-lg absolute bg-yellow-500 text-gray-100 text-xs font-medium">{item.category}</div>
                                    </div>
                                    <div className="px-2 py-1">
                                        <div className="text-sm md:text-base font-bold pr-2">{item.title}</div>
                                            <div className="flex py-2">
                                                    <div className="bg-gray-200 p-1 mr-2 rounded-full text-xs font-medium text-gray-900">{item.price}$</div>
                                                    <div className="flex justify-between item-center">
                                                        <div className="flex items-center">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 md:h-5 md:w-5 text-yellow-500" viewBox="0 0 20 20"
                                                            fill="currentColor">
                                                            <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                            </svg>
                                                            <p className="text-gray-600 font-bold text-xs md:text-sm ml-1">
                                                                {item.rating.rate}
                                                                <span className="text-gray-500 font-normal">({item.rating.count})</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className="pb-1 md:pb-2 text-xs text-ellipsis overflow-hidden md:text-sm text-gray-500 h-40">{item.description}</p>
                                                <a className="inset-x-0 bottom-0 flex justify-center bg-blue-500 hover:bg-white text-xs md:text-base border hover:border-2 hover:border-blue-500 rounded-xl w-40 md:w-40 p-1 text-gray-100 hover:text-blue-900" href={`/prodect/${item.id}`}>view more</a>
                                </div>
        </div>
    </div> 
</div>
        </div>
    )})}
    </div>
    </>
  )
}

export default AllProdect