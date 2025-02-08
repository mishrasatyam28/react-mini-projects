import React, { useState,useEffect } from 'react'
import Search from '../search'

export default function Wheather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [wheatherData, setWheatherData] = useState(null);

  // const API_KEY = "17c91c23d006d683ce739d244bbe6b67";

  async function fetchWheatherData(param) {
    try {
      setLoading(true);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=17c91c23d006d683ce739d244bbe6b67`);

      const data = await response.json();
      if (data) {
        setWheatherData(data);
        setLoading(false);
      }

    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }
  console.log(loading)

  async function handleSearch() {
    fetchWheatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  useEffect(() => {
    fetchWheatherData('delhi')
  }, [])
  

  return (
    <div>
      <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
      {
        loading ? <div className="loading">Loading</div> :
          <div className="">
            <div className="city-name">
              <h2>{wheatherData?.name}, <span>{wheatherData?.sys?.country}</span></h2>
            </div>
            <div className="date">
              <span>{getCurrentDate()}</span>
            </div>
            <div className="temp">
              {
                wheatherData?.main?.temp
              }
            </div>
            <p className="description">
              {
                wheatherData && wheatherData.weather &&wheatherData.weather[0] ? wheatherData.weather[0].description : ''
              }
            </p>
            <div className="wheather-info">
              <div className="column">
                <div className="">
                  <p className='wind'>{wheatherData?.wind?.speed}</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div className="column">
                <div className="">
                  <p className='humidity'>{wheatherData?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
