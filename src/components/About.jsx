import React from 'react'
import abImg1 from './assets/images/aboutIMg/css.png'
import abImg2 from './assets/images/aboutIMg/download.png'
import abImg3 from './assets/images/aboutIMg/mongo.png'
import abImg4 from './assets/images/aboutIMg/express.png'
import abImg5 from './assets/images/aboutIMg/react.png'
export default function About() {
    return (
        <div>

            <section className="about-section">
                <div className="about-blur">
                    <div className="about-unblur">
                        <div className="about-profile-img">

                        </div>
                    </div>
                    <div className="textABout">

                        <h1>Ahmed Soran majeed</h1>
                        <h2>full-stack developer</h2>
                        <div className="about-pl-imgs" >
                            <img src={abImg1} alt="" />
                            <img src={abImg2} alt="" />
                            <img src={abImg3} alt="" />
                            <img src={abImg4} alt="" />
                            <img src={abImg5} alt="" />

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
