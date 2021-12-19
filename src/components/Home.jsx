import React, { useState } from 'react'

// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'
import img1 from './assets/images/homeSlide1.jpg'
import img2 from './assets/images/homeSlide2.jpg'
import img3 from './assets/images/homeSlide3.jpg'
import blueImg1 from './assets/images/Deluxe-Portion.jpg'
import blueImg2 from './assets/images/Double-Height.png'
import blueImg3 from './assets/images/Penthouse.jpg'
import blueImg4 from './assets/images/Top-Garden.jpg'
import blueImg5 from './assets/images/studio-blueprint.jpg'
import videoSectioImg from './assets/images/homeVideoSection.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SliderLib from './SliderLib.jsx'
import SearchDropdown from './searchDropdown'

export default function HomePage() {
  const bluePrintTitle1 = 'The Studio';
  const bluePrintDes1 = `
  This Superb Apartment Benefits From Large Floor To Ceiling Windows And Light Wells Throughout Creating An Abundance Of Natural Light. It Is Also Fitted With Air Conditioning, Lutron Lighting And A Crestron Sound System. It Is Ideal For Family Living, Having A Large Reception Room With Both Sitting And Dining Areas With A Wonderful Skylight Providing Exceptional Light. The Three Terraces Are Perfect Areas For Outside Entertaining And Al Fresco Dining In The Warmer Months. The Bespoke Kitchen Is Well Appointed And Provides Ample Space For Informal Family Dining. There Is A Large Principal Bedroom Suite With Far Reaching London Views, A Guest Bedroom Suite, Two Further Bedrooms And A Family Bathroom
  `;
  const bluePrintTitle5 = 'Deluxe Portion  ';
  const bluePrintDes5 = `
  Discreetly Located In The Heart Of Bustling Islington And Tucked Away In A Mews Style Lane Just Off Upper Street, Climpson House Is The Epitome Of Modern Living Combining A High Level Specification With Cutting Edge Design. This Superb Split Level Penthouse Apartment Is Beautifully Finished Throughout T And Features Engineered Light Washed Oak Flooring, Integrated Miele Appliances, Quooker Instant Boiled Water Tap, Partial Lutron Lighting, Underfloor Heating, Polished Plaster In The Bathrooms, High Quality Matt Black Architectural Fittings Throughout And A Large Private Top Floor Roof Terrace With Panoramic Skyline Views Across Central London, Together With A Further Terrace And A Balcony On The Fourth Floor. There Are Two Generous Bedrooms, Both With Built-In Wardrobes With Timber Veneer Doors, Motion Sensor Lighting And A Mixture Of Drawers And Shelves. The Principal Bedroom Features A Stylish En-Suite Shower Room And There Is Also A Further Family Bathroom On This Floor. A Stunning Oak Staircase Leads To The Top Floor Double Aspect Reception Room With A Smart, Contemporary Open Plan Kitchen With Glazed Sliding Doors Leading To A Terrace And A Smaller South Facing Balcony.A Retractable Glass Roof Leads To The Truly Stunning Roof Terrace With Spectacular Views Across Islington And The City Beyond, Ideal For Summer Entertaining.`;
  const bluePrintTitle3 = 'Pent House  ';
  const bluePrintDes3 = `
  A Luxurious Penthouse Apartment With Versatile Entertaining Space. Upon Walking Into The Apartment You Will Find An Open Plan Reception Room With Designated Dining Area And A Fully Fitted Kitchen With Integrated Appliances To The Rear. Floor To Ceiling Windows Provide Plenty Of Light And Air Throughout Providing A Lateral Feel. A Cloakroom Can Be Found Along The Hallway, With Access To Two Double Bedrooms, Both With An En Suite Bathroom And Access Onto A Private Balcony. The Upper Floor Accommodates A Study Room, Which Could Also Be Used As An Additional Bedroom Or Reception Room. Access Is Provided Out On To A Generously Sized Approximately 7.6mx7.6m Roof Terrace With Breath-Taking Aspects Of The City. Residents Will Benefit From World-Class Facilities Including A Gymnasium, Spa, Pool, 24 Hour Concierge, Cinema Room And Business Lounge.
  `;
  const bluePrintTitle4 = 'Top Garden  ';
  const bluePrintDes4 = `
  These Garden Design Ideas Are Key To Creating A Scheme You'll Love For Years To Come. Whether You're Looking For Garden Landscaping Ideas To Overhaul Your Outdoor Space, Or More Tailored Garden Design Inspiration Such As Garden Furniture, Paving, Lights, Plants, Borders, Decking And More, We've Compiled Some Fabulous Garden Ideas To Help You Transform Your Back Garden, Whether It's Big Or Small – And It'll Help To Boost Your Property Value, Too. But Before You Proceed With Any Redesigns Or Updates, Take A Look At Your Garden As A Whole, Says Andrew Kyte At The Chelsea Gardener: 'Find Out As Much As You Can About The Garden's Position, Direction And Outlook. Not Only Will This Affect Planting, It Can Dictate How You Use Your Space.' Whether It's A Small Garden, Long And Narrow Garden, Cottage Garden Or Courtyard Garden, You Should Observe Where And At What Times Of Day Different Parts Of The Garden Gets Light And Sun. Think About Access And What You Want To Use Your Garden For – Planting And Growing Veg, Sunbathing, Eating Alfresco Or Simply Sitting Down To Enjoy A Cup Of Tea On A Sunny Morning`;
  const bluePrintTitle2 = 'Double Height  ';
  const bluePrintDes2 = `
  Discover City Living At Feature17 With This 2nd Floor 2 Bedroom Apartment With Your Own Private West Facing Balcony! Open Plan Kitchen/Living/Dining Area Flooded With Light From Dual Aspect Floor To Ceiling Windows And Double Doors Leading Out To The Balcony. The Master Bedroom Benefits From A Fitted Wardrobe, There Is Also A Good Sized Second And Third Bedroom, Bathroom And Large Storage Cupboard. This Home Is Even More Affordable For First Time Buyers With The London Help To Buy Scheme, Only 5 % Deposit Needed And Get Up To A 40% Loan From The Government (Interest Free For The First 5 Years) Meaning You Only Need To Apply For A 55% Mortgage! Call Us Now For More Details.`;
  const [propertyChecked1, setpropertyChecked1] = useState(false)
  const [propertyChecked2, setpropertyChecked2] = useState(false)
  const [propertyChecked3, setpropertyChecked3] = useState(false)
  const [propertyChecked4, setpropertyChecked4] = useState(false)
  const [ShowFilter, setShowFilter] = useState(false)
  const [ShowBgFilter, setBgShowFilter] = useState(false)
  const showFilterHandelr = () => {
    setShowFilter(!ShowFilter)
    setBgShowFilter(!ShowBgFilter)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
    lazyLoad: true,

    className: 'sliderImg',
  };


  return (
    <div>

      <div className="my-slide">
        <Slider {...settings}>
          <div className="sliderImg"><img src={img1} alt="" /></div>
          <div className="sliderImg"><img src={img2} alt="" /></div>
          <div className="sliderImg"><img src={img3} alt="" /></div>
        </Slider>
      </div>
      <section className="my-container sectionTwo">
        <center>
          <div className="row">

            <div className="col-sm-12 col-md-9 ">
              <div className="container-texts">
                <h3>real estate agency</h3>
                <h1>you can find your dream home with aqarat</h1>
                <h2>Find your new home for sale on Rightmove</h2>

              </div>
            </div>

            <div className="col-sm-12 col-md-3 ">

              <div className={`search-filter ${ShowFilter ? 'openSearchFilter' : ''}`}>

                <div className={`filter `} onClick={showFilterHandelr} >||| filter</div>
                <div className="city">
                  <h2>
                    city
                  </h2>
                  <select name="selectCity">
                    <option value="" disabled selected >select your city</option>
                    <option value="slemani">slemani</option>
                    <option value="hawler">hawler</option>
                    <option value="zaxo">zaxo</option>
                    <option value="rania">rania</option>
                    <option value="duhok">duhok</option>
                  </select>

                </div>
                <div className="apartment">
                  <h2>
                    apartment type
                  </h2>
                  <select name="selectApartment">
                    <option value="" disabled selected >select apartment type</option>
                    <option value="tower">tower</option>
                    <option value="house">house</option>
                    <option value="villa">villa</option>
                  </select>

                </div>
                <div className="price-range">
                  <h2>
                    price range
                  </h2>
                  <select name="priceRange">
                    <option value="" disabled selected>select price range</option>
                    <option value="100000-300000">100.000$-300.000$</option>
                    <option value="300000-900000">300.000$-900.000$</option>
                    <option value="1000000-max">1.000.000$-max</option>
                  </select>

                </div>

              </div>
            </div>
          </div>
        </center>
      </section>
      <div className={`closeMobFilterBackground  ${ShowBgFilter ? 'showBackFilter' : ''}`} onClick={() => {
        setBgShowFilter(!ShowBgFilter)
        setShowFilter(!ShowFilter)
      }}></div>
      <section className="section3">
        <div className="my-container">
          <div className="section-3-header">
            <h1>HI, What do you want to your <br /> <span>dream apartment</span></h1>
            <p>select a apartment type below to begins</p>
          </div>
          <div className="section-3-main">
            <div className="row">
              <div className="col-6 col-md-3">
                <main aria-checked={propertyChecked1} className="property-card" onClick={() => {

                  setpropertyChecked1(true)
                  setpropertyChecked2(false)
                  setpropertyChecked3(false)
                  setpropertyChecked4(false)

                }
                } >
                  <img src={img1} alt="" />
                  <h2>deluxe portion</h2>
                </main>
              </div>
              <div className="col-6 col-md-3">
                <main aria-checked={propertyChecked2} className="property-card" onClick={() => {

                  setpropertyChecked1(false)
                  setpropertyChecked2(true)
                  setpropertyChecked3(false)
                  setpropertyChecked4(false)

                }
                } >
                  <img src={img1} alt="" />
                  <h2>deluxe portion</h2>
                </main>
              </div>

              <div className="col-6 col-md-3">
                <main aria-checked={propertyChecked3} className="property-card" onClick={() => {

                  setpropertyChecked1(false)
                  setpropertyChecked3(true)
                  setpropertyChecked2(false)
                  setpropertyChecked4(false)

                }
                } >
                  <img src={img1} alt="" />
                  <h2>deluxe portion</h2>
                </main>
              </div>
              <div className="col-6 col-md-3">
                <main aria-checked={propertyChecked4} className="property-card" onClick={() => {

                  setpropertyChecked1(false)
                  setpropertyChecked4(true)
                  setpropertyChecked3(false)
                  setpropertyChecked2(false)

                }
                } >
                  <img src={img1} alt="" />
                  <h2>deluxe portion</h2>
                </main>
              </div>


            </div>
            <center>
              <button>continue</button>

            </center>
          </div>
        </div>
      </section>
      <section className="section4" id="featured">
        <div className="section-4-header my-container">
          <h1>featured apartment</h1>
          <h3>the most frequently searched and most popular apartment of the application will be in the list</h3>
        </div>
        <div className="section-4-main my-container">
          <div id="popularCardSlide" className="carousel">
            <SliderLib />
          </div>
        </div>
      </section>
      <section className="section5">
        <div className="my-container">
          <Tabs>
            <div className="section-5-header">
              <h1>apartment plans</h1>
              <TabList>
                <div className="section-5-links">
                  <Tab>
                    <p id="theStudio" >the studio</p>
                  </Tab>
                  <Tab>
                    <p id="deluxePortion" >deluxe portion</p>
                  </Tab>
                  <Tab>
                    <p id="pentHouse" >penthouse</p>
                  </Tab>
                  <Tab>
                    <p id="topGarden" >top garden</p>
                  </Tab><Tab>
                    <p id="doubleHeight" >double height</p>
                  </Tab>
                </div>

              </TabList>
            </div>





            <div className="section-5-main">
              <TabPanel>
                <div className="row">
                  <div className="col-sm-5 blueprint-info">
                    <h1>{bluePrintTitle1}</h1>
                    <p>{bluePrintDes1}</p>

                  </div>
                  <div className="col-sm-7 blueprint-img">
                    <img id="blueprintImg" src={blueImg1} alt="" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">

                  <div className="col-sm-5 blueprint-info">
                    <h1>{bluePrintTitle2}</h1>
                    <p>{bluePrintDes2}</p>

                  </div>
                  <div className="col-sm-7 blueprint-img">
                    <img id="blueprintImg" src={blueImg2} alt="" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">

                  <div className="col-sm-5 blueprint-info">
                    <h1>{bluePrintTitle3}</h1>
                    <p>{bluePrintDes3}</p>

                  </div>
                  <div className="col-sm-7 blueprint-img">
                    <img id="blueprintImg" src={blueImg3} alt="" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">

                  <div className="col-sm-5 blueprint-info">
                    <h1>{bluePrintTitle4}</h1>
                    <p>{bluePrintDes4}</p>

                  </div>
                  <div className="col-sm-7 blueprint-img">
                    <img id="blueprintImg" src={blueImg4} alt="" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="row">

                  <div className="col-sm-5 blueprint-info">
                    <h1>{bluePrintTitle5}</h1>
                    <p>{bluePrintDes5}</p>

                  </div>
                  <div className="col-sm-7 blueprint-img">
                    <img id="blueprintImg" src={blueImg5} alt="" />
                  </div>
                </div>
              </TabPanel>



            </div>
          </Tabs>
        </div>
      </section>
      <section className="section6">
        <div className="section-6-main my-container">
          <div className="row">

            <div className="col-md-4 section-6-text">
              <div id="sec-6-txt-desktop">

                <h1>buy</h1>

                <h1>

                  dream apartment
                </h1>
                <h1>
                  in <span>prime location</span>

                </h1>
                <br />
                <button>see all apartment</button>
              </div>
              <div id="sec-6-txt-mobile">

                <h1>buy dream apartment in <span>prime location</span></h1>
                <br />
                <button>see all apartment</button>
              </div>
            </div>
            <div className="col-md-8 video-player">
              <img src={videoSectioImg} poster={videoSectioImg} alt="" />

              <video id="my-player" className="video-js  vjs-big-play-centered">
                <source src='{VideoOne1}' type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section className="section7 my-container">
        <div className="section-7-header">
          <h6>
            apartments
          </h6>
          <h1>
            featured listings
          </h1>
        </div>
        <div className="section-7-main">
          <div className="row">

            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-car"></i>
                  </div>
                  <h1>parking space</h1>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-swimming-pool"></i>
                  </div>
                  <h1>swimming poll</h1>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-lock"></i>
                  </div>
                  <h1>private security</h1>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-medkit"></i>
                  </div>
                  <h1>medical center</h1>
                </div>
              </div>
            </div>


          </div>
          <div className="row">
            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-book-reader"></i>
                  </div>
                  <h1>library area</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-bed"></i>
                  </div>
                  <h1>king size beds</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <h1>smart home</h1>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 ">
              <div className="featured-cards">

                <div className="featured-cards-content">
                  <div className="featured-card-icon">
                    <i className="fas fa-volleyball-ball"></i>
                  </div>
                  <h1>kid playland</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section8 my-container">
        <div className="section-8-header">
          <h1>frequently asked questions</h1>
        </div>
        <div className="section-8-main">
          <details>
            <summary>I've found a property I love. What do I do now?</summary>
            <p>
              It is advisable to apply for a Decision in Principle from a mortgage lender and find a solicitor
              before you make an offer. Your Move can help you with both of these services. Just contact your
              local branch for more information.
            </p>
          </details>
          <details>
            <summary>What Help to Buy Schemes are there?</summary>
            <p>
              There were recently two Help to Buy Equity Loan schemes available in kurdistan but the one launched
              in 2013 has since closed (on 28 February 2021). There remains, however, the newer Help to Buy Equity
              Loan (2021-2023) scheme for first time buyers only, which launched in December 2020, for purchases
              from April 2021, and will run until March 2023.
              It is a government backed mortgage scheme which offers the chance to purchase a new home with as
              little as a 5% deposit.
            </p>
          </details>
          <details>
            <summary>What will the seller leave in the property?
            </summary>
            <p>A list of fixtures and fittings will be agreed between the solicitors prior to the contract being
              signed. This sets out what they intend to remove and what they are prepared to include in the house
              price. In some instances they may offer items for sale for the purchaser to consider, and some
              contents can be offered for inclusion as part of the negotiation of the purchase price.</p>
          </details>
          <details>
            <summary>How and when do I get the keys?
            </summary>
            <p>Once the seller's solicitor has confirmed receipt of funds to confirm the transaction has completed,
              the estate agent will be able to confirm where and when you may collect the keys. Please note this
              is different in kurdistan, </p>
          </details>
        </div>
      </section>
      {/* <!-- FOOTER START ----------------- --> */}

    </div>
  )
}
