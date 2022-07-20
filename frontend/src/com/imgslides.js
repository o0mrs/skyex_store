// import { useState } from "react"

// const ImgSlides = ({imgs})=>{
//     const [scroll, setscroll] = useState(0)
//     const [obj, setobj] = useState(0)
//     const ff = [{not_your_busnis:'or is it'}]
// const imgss = [{image:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'},{image:'https://picsum.photos/id/500/800/300'}]
// // const handleScrollR = ()=>{
// //     if(scroll > imgss.length *320){
       
// //     }else{
// //         setscroll(scroll + 320)
// //     }

// //     const flavoursContainer = document.getElementById('flavoursContainer');
// //     const flavoursScrollWidth = flavoursContainer.scrollWidth;
// //     flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 120, 0);
// //     flavoursContainer.scrollTo({
// //         top: 0,
// //         left: scroll + 320,
// //         behavior: 'smooth'
// //       });
// // }
// // const handleScrollL = ()=>{
// //     if(scroll > 0){
// //         setscroll(scroll - 320)
// //     }

// //     const flavoursContainer = document.getElementById('flavoursContainer');
// //     const flavoursScrollWidth = flavoursContainer.scrollWidth;
// //     flavoursContainer.scrollTo({
// //         top: 0,
// //         left: scroll - 320,
// //         behavior: 'smooth'
// //       });
// // }

// return(
//     <>
//     {/* "https://picsum.photos/id/500/800/300" */}
//     <div className="grid place-items-center">
//     <div id='flavoursContainer' className="w-full overflow-scroll p-4 carousel">
//           <div id='flavoursContainer' className="relative w-full pt-20 carousel-item flex justify-center">
              
//     <img id='dw' src={imgss[obj].image} className="w-auto h-auto max-h-96 rounded-xl" ></img> 
//     <div className="btn btn-circle btn-sm -ml-12 mt-3">
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">   
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>                       
//   </svg>
// </div> 
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        
//       {/* <i href="/components/carousel#slide4" onClick={handleScrollL} className="btn btn-circle mt-20">❮</i> 
//       <i href="/components/carousel#slide2" onClick={handleScrollR} className="btn btn-circle mt-20">❯</i> */}
//     </div>

//   </div>
// </div> 



// <div className="grid grid-cols-4 place-items-center justify-center ">
//     {imgss.map((git,i)=>{

//             console.log(i)
//             return(
// <div className="avatar" onClick={()=>{setobj(i)}}>
//   <div className=" rounded-btn w-16 p-1 h-16">
//     <img src={git.image} />
//   </div> 
// </div>
//     )

//     })}

// <div className="avatar" onClick={()=>{setobj(i)}}>
//   <div className=" rounded-btn w-16 p-1 h-16">
//     <img src={git.image} />
//   </div> 
// </div>

//     </div>
// </div>
//     </>
// )
// }
// export default ImgSlides