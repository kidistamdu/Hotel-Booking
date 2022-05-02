import React from 'react'
import { FaLongArrowAltRight, FaPlay } from 'react-icons/fa'
import "./About.css"

const AboutCard = () => {
    return (
        <>
       
       <div className="aboutCard mtop flex_space">
           <div className="row row1">
               <h4>About Us</h4>
               <h1>
                   We <span> provide solution</span> to grow your businesss
               </h1>
               <p> Lorem ipsum dolor sit amet. Est magni deserunt ut rerum reprehenderit et quis omnis ea molestiae consectetur. Quo praesentium vero qui maiores voluptatem et velit dicta ab dolores sit consequatur deleniti! Sit incidunt ullam qui inventore ducimus aut velit dolor sit fugit adipisci et perferendis reprehenderit. Ad velit facere quo error numquam est delectus dolorem!</p>
               <p>Lorem ipsum dolor sit amet. Est magni deserunt ut rerum reprehenderit et quis omnis ea molestiae consectetur. Quo praesentium vero qui maiores voluptatem et velit dicta ab dolores sit consequatur deleniti! Sit incidunt ullam qui inventore ducimus aut velit dolor sit fugit adipisci et perferendis reprehenderit. Ad velit facere quo error numquam est delectus dolorem!</p>
               <button className="secondary-btn">
                   Explore More <FaLongArrowAltRight/>
               </button>
           </div>
           <div className="row image">
                <img src="/asset/images/about-img-1.jpg" alt="about"/>
                <div className="control-btn"> 
                <button className="prev">
                <FaPlay/>
                </button>
                  
                </div>
                </div>

       </div>
        </>
    )
}

export default AboutCard
