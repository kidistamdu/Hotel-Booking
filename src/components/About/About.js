import React from 'react'
import { FaLongArrowAltRight, FaPlay } from 'react-icons/fa'
import HeadTitle from '../HeadTitle/HeadTitle'
import AboutCard from './AboutCard'

const About = () => {
    return (
       <>
       <HeadTitle/>
       
       <section className="about top">
           <div className="container">
               <AboutCard/>
           </div>

       </section>
       <section className="features top">
           <div className="container aboutCard flex_space">
               <div className="row row1">
                   <h1>
                       Our <span>Features</span>
                   </h1>
                   <p> Lorem ipsum dolor sit amet. Est magni deserunt ut rerum reprehenderit et quis omnis ea molestiae consectetur. Quo praesentium vero qui maiores voluptatem et velit dicta ab dolores sit consequatur deleniti! Sit incidunt ullam qui inventore ducimus aut velit dolor sit fugit adipisci et perferendis reprehenderit. Ad velit facere quo error numquam est delectus dolorem!</p>
               <p>Lorem ipsum dolor sit amet. Est magni deserunt ut rerum reprehenderit et quis omnis ea molestiae consectetur. Quo praesentium vero qui maiores voluptatem et velit dicta ab dolores sit consequatur deleniti! Sit incidunt ullam qui inventore ducimus aut velit dolor sit fugit adipisci et perferendis reprehenderit. Ad velit facere quo error numquam est delectus dolorem!</p>
               <button className="secondary-btn">
                   Explore More <FaLongArrowAltRight/>
               </button>
               </div>

                  <div className="row image">
                       <img src="/asset/images/feature-img-1.jpg" alt=""/>

                <div className="control-btn"> 
                <button className="prev">
                <FaPlay/>
                </button>
                </div>
    </div>
           </div>

       </section>
       </>
    )
}

export default About
