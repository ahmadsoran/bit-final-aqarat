import React from 'react'
export default function ContactModal(props) {
    return (
        <div>
            <div className={`contact-modal ${props.addClassContact}`}>
                <div className="closeModal" onClick={props.closeAction}>
                    <i className="fas fa-times"></i>

                </div>
                <form method="post">
                    <h1>contact form</h1>
                    <div className="row">

                        <div className="col-sm-6">
                            <label htmlFor="contact-input-name">First name</label>
                            <input name="contact-input-name" type="text" />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="contact-input-lastname">last name</label>
                            <input name="contact-input-lastname" type="text" />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="contact-input-email">email</label>
                            <input name="contact-input-email" type="email" />
                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="contact-input-tel">phone number</label>
                            <input name="contact-input-tel" type="tel" />
                        </div>
                        <div className="col-sm-12">
                            <textarea name="contact-input-message" cols="10" rows="3" placeholder="message"></textarea>
                        </div>
                        <div className="col-12">

                            <button type="submit">submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={`loading-animation ${props.addClassLoading}`}>

            </div>
        </div>
    )
}
