import React from 'react'

export default function SliderCard(props) {


    return (
        <div>
            <div className="slider-cards">
                <div className="header-slider-card">
                    <div className="header-text-info">

                        <h1 className="distance">{props.distance} Km away</h1>
                        <h1 className="property-action">{props.action}</h1>
                    </div>

                    <img src={props.img} alt="" />
                </div>
                <div className="main-slider-card">
                    <h4><i className="fas fa-map-marker-alt"></i>{props.location}</h4>
                    <h3>${props.price}</h3>
                    <h2>{props.type}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="footer-slider-card">
                    <div className="property-info">
                        <div className="bedroom">
                            <p>{props.bed} <i className="fas fas fa-bed"></i></p>
                            <h6>bedrooms</h6>
                        </div>
                        <div className="bedroom">
                            <p>{props.bath} <i className="fas fa-bath"></i></p>
                            <h6>bathrooms</h6>
                        </div>
                        <div className="bedroom">
                            <p>{props.sqft} <i className="fas fa-vector-square"></i></p>
                            <h6>square ft</h6>
                        </div>
                    </div>
                    <div className="slider-footer-btn">
                        <button>
                            <i className="fas fa-plus-circle"></i>
                        </button>
                        <button>
                            <i className="far fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
