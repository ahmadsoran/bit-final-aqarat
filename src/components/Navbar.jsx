
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal.jsx';
import './assets/style/my-index.css'
import Searchbar from './searchbar.jsx';
import { useGetPropertyQuery } from '../store/testApi.js';

export default function Navbar() {
  const [visible, setVisible] = useState(false)
  const [searchDropDown, setSearchDropDown] = useState(false)
  const [ShowContact, setShowContact] = useState(false)
  const [SearchValue, setSearchValue] = useState('')

  const showDrawer = () => {
    setVisible(!visible)
  };

  // const onClose = () => {
  //   setVisible(false)
  // };
  const { data } = useGetPropertyQuery();
  return (
    <div>
      <nav>
        <div className="my-container">
          <div className="navbar">
            <Link to="/">
              <div className="logo"  >
                <h1>Aqarat.com</h1>
              </div>

            </Link>
            <div className={`collapse-menu ${visible ? 'show-collapse-menu' : ''}`}>

              <div className="links">
                <li><Link to="/">home</Link></li>
                <li><Link to="/about" >aboutDev</Link></li>
                <li><Link to="/property">property</Link></li>
                <li><Link to="#featured">featured</Link></li>
                <li><Link to='' onClick={() => setShowContact(!ShowContact)} className="contact">contact</Link></li>

              </div>
              <div className="login">
                <Searchbar change={(e) => {
                  setSearchValue(e.target.value)
                  if (e.target.value === '') {
                    return setSearchDropDown(false)

                  } else {
                    return setSearchDropDown(true)

                  }
                }} />
                {data?.filter((val) => {
                  if (val === '') {
                    return '';
                  } 
                   if (val.propertyType.toLowerCase().includes(SearchValue.toLowerCase())) {
                    return val
                  }
                  return val
                }).map((findProp, i) => {
                  return <div key={i} className={`dropdownSearch ${searchDropDown ? 'show-search' : ''}`} >
                    <h5>{findProp.propertyType}</h5>
                  </div>

                })}
                <i className="notiSvg">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z">
                    </path>

                  </svg> </i><button className="loginBTN">LOGIN</button></div>
            </div>
            <div className={`menu ${visible ? 'openNav' : ''}`} onClick={showDrawer}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </nav >


      <ContactModal addClassContact={ShowContact ? 'show-contact-modal' : ''} closeAction={() => setShowContact(!ShowContact)} />
    </div >
  )
}
