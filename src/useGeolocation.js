import { useState, useEffect } from "react";


// Custom react hook to retrieve user's current
const useGeolocation = () => {

  const [data, setData] = useState([]);
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat: "", lng: ""}
  });

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 10000
    };

    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }

    const fetchData = async() => {
      navigator.geolocation.getCurrentPosition(onSuccess, onError, geoOptions);

      await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then( res => res.json())
      .then( result => {
        setData(result);
        console.log(result);
      });
    }
    fetchData();

  }, [location.coordinates.lat, location.coordinates.lng]);

  return data;
};

export default useGeolocation;