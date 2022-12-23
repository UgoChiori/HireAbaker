import React, {useRef} from 'react';

const Hamburgermenu = () => {
  const ref = useRef()
  const hamburgerAnimation = (ref) => {
    ref.current.classList.toggle("active")
    console.log(ref)
  };
  return (
    <div className="hamburger-menu" onClick={()=>{hamburgerAnimation(ref)}} ref={ref}>
    

        <div className="bar"></div>

    </div>
  )
}

export default Hamburgermenu