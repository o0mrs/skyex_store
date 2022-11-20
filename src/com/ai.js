import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ProgressiveImage from "react-progressive-image-loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Ai = ()=>{

    const [touchStart, setTouchStart] = useState(null)
    const [tab, settab] = useState(0)
    const [load, setload] = useState(0)
    const [gender, setgender] = useState('')
    const [name, setname] = useState('')
const [touchEnd, setTouchEnd] = useState(null)
useEffect(() => {
    if(sessionStorage.getItem("pageView") == 1){
        setload(1)
    }else{
        sessionStorage.setItem("pageView", 1)
    }
}, [])
// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance = 40 

const onTouchStart = (e) => {
  setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  setTouchStart(e.targetTouches[0].clientX)
}

const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

const onTouchEnd = () => {
  if (!touchStart || !touchEnd) return
  const distance = touchStart - touchEnd
  const isLeftSwipe = distance > minSwipeDistance
  const isRightSwipe = distance < -minSwipeDistance
  console.log(isLeftSwipe)
  if(isLeftSwipe){
    if(tab ==4){

    }else{
        settab(tab+1)
    }

  }
  if(isRightSwipe){
    if(tab ==0){

    }else{
        settab(tab-1)
    }

  }
  if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')

  // add your conditional logic here
}

if(tab == 0){
    return(
        <div className="max-w-[100vw] bg-[#FFFFFE] ">
        
        <div className="sm:grid md:flex  " onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
{load==0&&(        <ProgressiveImage
    preview="/images/tiny-preview.png"
    src="/Illustration.png"
    render={(src, style) => <img className='sm:w-screen md:w-96  h-[53vh] '  src={src} style={style} />}
/>)}
{load==1&&(               <img className='sm:w-screen sm:max-w-[547px] md:w-[40vw] md:h-auto sm:h-[53vh] ' src='/Illustration.png' loading="lazy"/>

)}
        <div className='sen sm:text-3xl md:text-5xl px-10 sm:mt-8 md:mt-52'>
        Let your <br />
        Style Speak
        {/* {tab} */}
        <br />
        <p className='text-base text-[#8399A9] mt-3'>
        Discover the latest trends fashion and explore your personality
        <p className='sm:hidden md:block'>using our advanced recommendations ai.</p>
        </p>
        </div>
        
        </div>
        {/* <img className='h-5  ' src='/Pagination.png' loading="lazy"/> */}
        
        <div className='br mb-7'>
        <div className='flex'>
        <div className='bg-black h-[7px] w-[12px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        </div>
        </div>
        <div onClick={()=>{settab(1)}} className='bl cursor-pointer bg-black w-[191px] text-white sen text-lg pt-[1.45rem] pl-[3rem] rounded-tl-[46px] h-[70px]'>
            Get Started
        </div>
        </div>
            )
}
if(tab == 1){
    return(
        <div className="max-w-[100vw]   bg-[#FFFFFE] ">
        
        <NavBar type={1}/>
        <div className="px-">
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </div>
        <div className="grid md:px-52  md:mt-1  sm:-mt-16 " >
        {/* <img className='w-screen h-screen ' src='/bg-61.jpg' loading="lazy"/> */}
        <div className='sen sm:text-3xl md:text-5xl px-6 mt-[5rem] '  onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        Let's get <br />
        to know You.
   
        </div>
        <div className='sen text-xl px-7 mt-[2rem]'>
        What's your name?<br />
        <input type="text" onChange={(e)=>{setname(e.target.value)}} placeholder="Joe smith" className=" h-12 text-base px-4 text-black input-outline  w-full border-2 mt-3 rounded-md border-accent" />
        </div>
        <div className='sen text-xl px-7 mt-[2rem]'>
        Gender<br />
<div className='grid mt-3 sen grid-cols-2 place-items-center'>
    {gender == 'male' &&(
        <div className='flex border-accent border-2 bg-cyan-500 py-8 mr-3 justify-center  w-full rounded-xl text-white'>
    Male
</div>
    )}
        {gender != 'male' &&(
        <div onClick={()=>{setgender('male')}} className='flex bg-cyan-500 py-8 mr-3 justify-center  w-full rounded-xl text-white'>
        Male
    </div>
        )}
            {/* {gender == 'male' &&(
        
        )} */}
        
        {gender == 'female' &&(
            <div className='flex border-accent border-2 bg-pink-500 w-full py-8 ml-3 rounded-xl justify-center text-white'>
Female
</div>
    )}
        {gender != 'female' &&(
            <div onClick={()=>{setgender('female')}} className='flex bg-pink-500 w-full py-8 ml-3 rounded-xl justify-center text-white'>
Female
</div>
        )}

</div>
        </div>
        
        </div>
        
        {/* <div className=' mb-7'>
        <div className='flex'>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        <div className='bg-black h-[7px] w-[12px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        </div>
        </div> */}
        <div className='w-screen grid place-items-center mt-5'>
        <div onClick={(e)=>{
            e.preventDefault()
            if(name.length < 1){
                toast.error('What should we call you?', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else if(gender.length <2){
                toast.error('You forgot to select your gender', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else{
                settab(2);
            }

            }} className=' bg-black btn w-[131px] cursor-pointer text-white sen text-lg  rounded-tl-[46px] rounded-[46px] h-[65px]'>
            Next
        </div>
        </div>
  
        </div>
            )
}
if(tab == 2){
    return(
        <div className="max-w-[100vw] bg-[#FFFFFE] ">
        
        <NavBar type={1}/>
        <div className="sm:grid  -mt-16 " >
        {/* <img className='w-screen h-screen ' src='/bg-61.jpg' loading="lazy"/> */}
        <div className='sen text-3xl px-6 mt-[5rem] '  onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
        <span className=''>Hello,</span> <br />
 
        <span className='text-accent'>{name}</span>



   
        </div>
        <div className='sen text-xl px-7 mt-[2rem]'>
        How old are you?<br />
        <input type="range" min="0" max="100" onChange={(e)=>{console.log(e.target.value)}} className="range range-accent mt-5" step="1" />
<div className="w-full flex justify-between text-xs px-2">
  <span>14</span>
  <span>18</span>
  <span>22</span>
  <span>26</span>
  <span>30+</span>
</div>
        </div>
        <div className='sen text-xl px-7 mt-[2rem]'>
       What's your skin like<br />
        <input type="range" min="0" max="100" onChange={(e)=>{console.log(e.target.value)}} className="range range-accent mt-5" step="1" />
<div className="w-full flex mt-2 justify-between text-xs px-2">
  <span><div className="h-5 w-5 rounded-full bg-[#FFDBAC]"></div></span>
  <span><div className="h-5 w-5 rounded-full bg-[#F1C27D]"></div></span>
  <span><div className="h-5 w-5 rounded-full bg-[#E0AC69]"></div></span>
  <span><div className="h-5 w-5 rounded-full bg-[#C68642]"></div></span>
  <span><div className="h-5 w-5 rounded-full bg-[#8D5524]"></div></span>
</div>
        </div>
        
        </div>
        
        <div className='br mb-7'>
        <div className='flex'>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        <div className='bg-black h-[7px] w-[12px] rounded-xl mr-[8px]'></div>
        <div className='bg-[#8399A9] h-[7px] w-[7px] rounded-xl mr-[8px]'></div>
        </div>
        </div>
        <div  className='bl bg-black w-[131px] text-white sen text-lg pt-[1.45rem] pl-[3rem] rounded-tl-[46px] h-[65px]'>
                        Next
                    </div>
    
        </div>
            )
}

}
export default Ai;