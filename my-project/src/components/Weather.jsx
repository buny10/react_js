import { useState,useEffect} from "react"

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Weather() {
    const [city,setCity] = useState("Biratnagar")
    const [weather,setWeather] = useState({})

    useEffect(()=>{
      fetchWeather()

    },[])

let baseUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4978dfb53da08bb0686a8254e45cb5d0`






 async function fetchWeather (){
    const response = await fetch (baseUrl)
    const responseJson =  await response.json()
    console.log (responseJson)
    setWeather(responseJson)
    

 }

 function getIcon (weather){

  if (weather =="clouds"){
    return <FontAwesomeIcon icon="fa-solid fa-cloud" />
  }
  else if (weather == "Mist"){
    return <FontAwesomeIcon icon="fa-solid fa-smog" />
  }
  else if (weather == "Rain"){
    return <FontAwesomeIcon icon="fa-solid fa-cloud-showers-water" />
  }
  else if (weather == "clear"){
    return <FontAwesomeIcon icon="fa-solid fa-sun" />
  } 
  else {
    return <FontAwesomeIcon icon="fa-solid fa-sun" />
  }


 }
  
 function getImage(weat) {

  if (weat =="clouds"){
    return 'https://th.bing.com/th/id/OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN?rs=1&pid=ImgDetMain'
  }
  else if (weat == "Mist"){
    return 'https://th.bing.com/th/id/OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN?rs=1&pid=ImgDetMain'
  }
  else {
    return 'https://weatherboy.com/wp-content/uploads/2020/02/StormWow-1024x683.jpg'
  }
 }





  return (
    <>
     <h1> <FontAwesomeIcon icon="fa-solid fa-cloud" /> WEATHER APP</h1>
     <p>{city}</p>
     <input type="text" placeholder="Enter City Name" onChange={
        (e)=>{
            setCity(e.target.value)
        }
     } style={{padding:"10px"}}/>
     <button onClick={fetchWeather}>Search Weather</button>
     {
       weather.main &&( <div style= {{backgroundColor:"orange",padding:"10px",backgroundImage: `url('${getImage(weather.weather[0].main)}')`,backgroundSize:"cover "}}>

        <h1><FontAwesomeIcon icon="fa-solid fa-temperature-quarter" style={{color:"green"}} />{city} temperature is {weather.main.temp}°C</h1>
        <h2>Main weather: {weather.weather[0].main} {getIcon(weather.weather[0].main)}</h2>
           <h2> Weather Description : {weather.weather[0].description}   </h2>
           <h2>Humidity: {weather.main.humidity}%</h2>
           <h2>{weather.name}</h2>
            </div>)
}
    </>
  )
}
