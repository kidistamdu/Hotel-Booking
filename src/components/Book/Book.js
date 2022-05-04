import React from 'react'
import HeadTitle from '../HeadTitle/HeadTitle'
import "./Book.css"

const Destination = () => {
    return (
        <>
         <HeadTitle/> 
         <section className="book">
             <h2>Book Your Hotel</h2>

             <div className="row">

                <form>
                    <div className="input-box">
                        <h3>Where to</h3>
                        <input type="text" name="where" placeholder="Place Name" />
                    </div>
                    <div className="input-box">
                        <h3>How many</h3>
                        <input type="number" placeholder="Number of guests"/>
                    </div>
                    <div className="input-box">
                        <h3>Arrival</h3>
                        <input type="date"/>
                    </div>
                    
                    <div className="input-box">
                        <h3>Leaving</h3>
                        <input type="date"/>
                    </div>
                    <button className="primary-btn">Submit </button>
                    
                </form>

             </div>
             
             
             </section>  
        </>
    )
}

export default Destination
