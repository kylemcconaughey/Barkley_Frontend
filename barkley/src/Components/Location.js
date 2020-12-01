import React from 'react'
import mapboxgl from 'mapbox-gl'
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoidGxlYWNoMDEiLCJhIjoiY2toaWN2emd0MDh0MzJ4czhxYXpuM2w5dSJ9.MU8RRrECFsuAxFI9o8Jm-g'

class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lng: -78.6382,
      lat: 35.7796,
      zoom: 12
    }
  }

  componentDidMount () {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    })

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })
    )

    map.addControl(
      new Directions({
        accessToken: mapboxgl.accessToken
      }),
      'top-left'
    )
  }

  render () {
    return (
      <div className='mapDiv'>
        <div className='sidebarStyle'>
          <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
      </div>
    )
  }
}

export default Map
