import { Container } from "./styles";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

export function Maps(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "xxxxxxxxxxxx"
      })

    const position = {
        lat:-9.420194, 
        lng:-35.505507
    }

    return(
        <Container>
            <div className="map">
                {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{width: "100%", height:"100%"}}
                        center={position}
                        zoom={14}
                        
                    >
                        <></>
                        <Marker position={position} 
                        options={{
                            label:{
                                text: "Paraíso Barra Hotel",
                                className: "map-marker"
                            }
                        }}/>
                    </GoogleMap>
                ) : <></>
                }

            </div>
        </Container>
    )
}
