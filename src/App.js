import React from 'react'
  import { useState } from 'react'
function App() {
  const [lat, setLat] = useState(0)
  const [long, setLong] = useState(0)
  const [hemisphere, setHemisphere] = useState('')
  const [month, setMonth] = useState('')

       function getHemisphere(latitude){
           if(latitude > 0){
               setHemisphere('Northern')
           } else if(latitude < 0){
               setHemisphere('Southern')
           }
           else{
               setHemisphere('Equator')
           }
       }

        function getCurrentLocation(){
               navigator.geolocation.getCurrentPosition((position)=>{
                    // positon is an object with a coords property
                    let {latitude, longitude} = position.coords 
                    setLat(latitude)
                    setLong(longitude)
                    getHemisphere(latitude)
                    
               })

              
               // get hemisphere
             
             // get the current month
             let date = new Date()
             let currentMonth = date.getMonth()+1 // 0-11 
             setMonth(currentMonth)

        }
  return (
    <div className="App">
         
         <div>
            <h1>Latitude: {lat} Longitude :{long} </h1>
            <h1>Hemisphere: {hemisphere}</h1>
            <h1>Month: {month}</h1>

            <button onClick={getCurrentLocation}>Get Current Location</button>

        </div>
    </div>
  );
}

export default App;
