import React from 'react'
import { Link } from 'react-router-dom';



function Home() {

  return (
    <>
    <h1 className='text-center font-semibold text-3xl md:text-4xl md:py-2 md:my-5 h-[10vh] w-full tracking-wider text-slate-300'>Welcome to ToolVerse</h1>
    <p className='md:m-5 mx-6 md:mx-11 text-center font-medium md:text-lg tracking-normal text-slate-200'>Welcome to Toolverse – your one-stop shop for all things productive and practical! We've packed all the essential tools into one handy-dandy website, because who has time to visit multiple sites?</p> <p className='hidden md:h-[10vh] md:flex mx-11 text-center font-medium md:text-lg tracking-normal text-slate-200'>So, dive in, explore, and let Toolverse turn your "to-dos" into "ta-das!" (And yes, we know that was a bit cheesy, but hey, we’re just as fun as we are functional!)</p>
    <div className="cards w-full mt-0 md:mt-1 mx-5 h-[120vh] md:h-[345px] flex flex-col gap-20 md:gap-2 md:flex-row justify-center ">
      <div className="card w-80 h-[30vh] md:m-4 text-white rounded-md cursor-pointer flex flex-col transition duration-300 ease-linear hover:scale-110"><Link to='/TodoList'><h2 className='text-center md:m-2 text-2xl tracking-wider font-semibold'>TodoList</h2><img className='h-[60%] w-[60%] m-2 mx-16 rounded-md' src="https://th.bing.com/th/id/OIP.WXxM16nmngq0VdD6EyZvywHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/><p className='text-md px-4 py-2 text-center'>Organize your day effortlessly with our ToDo List, turning tasks into triumphs!</p></Link></div>
      <div className="card w-80 h-[30vh] md:m-4 text-white rounded-md cursor-pointer flex flex-col transition duration-300 ease-linear hover:scale-110"><Link to='/Calculator'><h2 className='text-center m-2 text-2xl tracking-wider font-semibold'>Calculator</h2><img className='h-[50%] w-[60%] m-2 mx-16 rounded-md' src="https://img.freepik.com/premium-vector/out-line-businessman-pointing-calculator_81698-887.jpg?w=2000" alt=""/><p className='text-md px-4 py-2 text-center'>Crunch numbers with precision using our sleek calculator.</p></Link></div>
      <div className="card w-80 h-[30vh] md:m-4 text-white rounded-md cursor-pointer flex flex-col transition duration-300 ease-linear hover:scale-110"><Link to='/dictionary'><h2 className='text-center m-2 text-2xl tracking-wider font-semibold'>Dictionary</h2><img className='h-[50%] w-[60%] m-2 mx-16 rounded-md' src="https://th.bing.com/th/id/OIP.PdyGuaMbxpu3lUq-Um8caQHaGC?w=215&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/><p className='text-md px-4 py-2 text-center'>"Lost for words? Our dictionary tool adds wit to your wisdom!"</p></Link></div>
    </div>
    </>
  )
}

export default Home