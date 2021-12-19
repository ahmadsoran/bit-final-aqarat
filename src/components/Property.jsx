import React from 'react'

export default function Property(props) {
    return (
        <>


            <div className="my-container property-sec-card">

                <div className="property-section-card-header-text">
                    <h1>{props.type}</h1>
                </div>
                <div className="row" style={{ backgroundColor: 'whitesmoke', borderBottomRightRadius: '1vw', padding: '1%', borderBottomLeftRadius: '1vw' }}>
                    <div className="col-md-4">
                        <div className="property-section-card-img ">
                            <img src={props.imgSrc} style={{ borderRadius: '1vw' }} alt="" />
                        </div>
                    </div>
                    <div className="col-md-8 my-container pr-content">
                        <div className="property-section-card-content-header">
                            <h1>project</h1>
                            <h1>${props.price}</h1>
                        </div>
                        <div className="property-section-card-content">
                            <h4><i className="fas fa-search-location"></i>{props.location}</h4>
                            <p>{props.description}</p>
                        </div>
                        <div className="footer-slider-card">
                            <div className="property-info" style={{ width: '100%' }}>
                                <div className="bedroom">
                                    <p >{props.bed} <i className="fas fas fa-bed c-b"></i></p>
                                    <h6>bedrooms</h6>
                                </div>
                                <div className="bedroom">
                                    <p >{props.bath} <i className="fas fa-bath c-b"></i></p>
                                    <h6>bathrooms</h6>
                                </div>
                                <div className="bedroom">
                                    <p >{props.ft} <i className="fas fa-vector-square c-b"></i></p>
                                    <h6>square ft</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}
