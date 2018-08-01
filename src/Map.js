import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBdI6hYrzRf5QMgKGj8RQsEeLE9bS-1vOQ&callback=initMap",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: props.l, lng: props.i}}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.l, lng: props.i }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class Map extends React.PureComponent {
  

    
  
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    
    return (
      <MyMapComponent
        l={this.props.lat} i={this.props.lng}
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}
export default Map;