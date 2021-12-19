import React,{useEffect, useState} from 'react'
import Property from './Property.jsx'
import { useGetPropertyQuery } from '../store/testApi.js';
import Loading from './loading.jsx';

export default function PropertyApi() {
    // const [GetData, setGetData] = useState();
const {data} = useGetPropertyQuery();

console.log(useGetPropertyQuery)
            return (
            
                <section className="property-page-section">
                <h1 className="p-h-1">find your dream home </h1>
   {data?.map((datas , i)=>{ 
           return ( <Property key={i} imgSrc={datas.propertyImg}  type={datas.propertyType} price={datas.propertyPrice} description={datas.propertyDescription} location={datas.propertyLocation} bed={datas.propertyBed} bath={datas.propertyBath} ft={datas.propertySqFT}/>);
       })
   }
               </section>
    )
}
