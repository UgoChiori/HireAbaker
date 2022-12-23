import React from 'react'

const About = () => {
  return (
    <>
    <div className="container">
                    <div className="left">
                        <div className="big-title">
                            <h1>
                                need cake?
                            </h1>
                            <h1>1,000+ bakers across nigeria are now within your reach with Hire-a-Baker</h1>
                        </div>
                        <p className="text">
                            Choose your baker, hire a baker with just a click!
                        </p>
                        
                    </div>

                    <div className="right">
                        <img className="person" src={require("./girlcake.jpeg")} alt="girl with cupcake"  />
                    </div> 
                    <div className="bottom-area">
                <div className="container">
                    <button className="toggle-btn">
                        <i className="far fa-moon"></i>
                        <i className="far fa-sun"></i>
                        </button>
                </div>
            </div>
                </div> 
    </>
  )
}

export default About