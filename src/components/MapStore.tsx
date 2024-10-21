import mapboxgl, { Map } from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css"

const MapStore = () =>{
    const [coordinates, setCordinates] = useState<{ lng: number, lat: number } | null>(null)
    const mapContainer = useRef<HTMLDivElement | null>(null)
    const myMap = useRef<Map | null>(null)
    const stores=[
        {name: "Las tiendas Cancún", coordinates:[-86.82685228339213, 21.174294220800874], color:"green"},
        {name: "Plazas Outlet", coordinates:[-86.84788080110737, 21.15284304221581], color: "grey"}]
        useEffect(() => {
            //CAMBIAR EL API KEY CON LA SUYA:)
            mapboxgl.accessToken = "pk.eyJ1IjoiY2FybGdsem0iLCJhIjoiY20yOTFpcWgwMDBrbjJyb215dGcyeXBiZCJ9.LEj7ngvmN67Oi3vasyB_SA"
            if (mapContainer.current) {
                myMap.current = new mapboxgl.Map({
                    container: mapContainer.current,
                    style: "mapbox://style/mapbox/streets-v12",
                    center: [-86.85972543557556, 21.175254648597484, ],
                    zoom: 15
                });
    
                stores.forEach(store=>{
                    new mapboxgl.Marker({color: store.color})
                        .setLngLat(store.coordinates)
                        .addTo(myMap.current)
                        //Arreglar popup
                        .setPopup(new mapboxgl.Popup().setHTML(`<h6>${store.name}</h6>`))
                })
    
                //Metodo para obtener las coordenas de una ubicacion
                myMap.current.on("click", (e) => {
                    const { lng, lat } = e.lngLat;
                    setCordinates({ lng, lat })
                    console.log(coordinates)
                })
                
            }
            return () => {
                if (myMap.current) {
                    myMap.current.remove();
                }
            }
        }, [])

    return(
        <>
            
        <div ref={mapContainer} style={{  width: "100vw", height: "100vh", top: 0, left: 0, position: "fixed" }}></div>
        
        </>
    )
}

export default MapStore
