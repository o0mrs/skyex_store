
const Loading = ()=>{
    return(

        <>
        
<svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
<circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
  <animate
    attributeName="opacity"
    dur="1s"
    values="0;1;0"
    repeatCount="indefinite"
    begin="0.1"/>    
</circle>
<circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
  <animate
    attributeName="opacity"
    dur="1s"
    values="0;1;0"
    repeatCount="indefinite" 
    begin="0.2"/>       
</circle>
<circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
  <animate
    attributeName="opacity"
    dur="1s"
    values="0;1;0"
    repeatCount="indefinite" 
    begin="0.3"/>     
</circle>
</svg>


<svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
<circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
  <animateTransform 
     attributeName="transform" 
     dur="1s" 
     type="translate" 
     values="0 15 ; 0 -15; 0 15" 
     repeatCount="indefinite" 
     begin="0.1"/>
</circle>
<circle fill="#fff" stroke="none" cx="30" cy="50" r="6">
  <animateTransform 
     attributeName="transform" 
     dur="1s" 
     type="translate" 
     values="0 10 ; 0 -10; 0 10" 
     repeatCount="indefinite" 
     begin="0.2"/>
</circle>
<circle fill="#fff" stroke="none" cx="54" cy="50" r="6">
  <animateTransform 
     attributeName="transform" 
     dur="1s" 
     type="translate" 
     values="0 5 ; 0 -5; 0 5" 
     repeatCount="indefinite" 
     begin="0.3"/>
</circle>
</svg>
        </>
    )
}
export default Loading