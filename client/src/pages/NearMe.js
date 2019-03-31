// /*global google*/
// import React from 'react'
// // import LogoTwo from '../components/Logo'
// import UserNav from '../components/UserNav'
// import Jumbotron from '../components/Jumbotron'

// const _ = require('lodash')
// const { compose, withProps, lifecycle } = require('recompose')
// const {withScriptjs, withGoogleMap, GoogleMap, Marker} = require('react-google-maps')
// const { SearchBox } = require('react-google-maps/lib/components/places/SearchBox')

// const address="950 N Glebe Rd"


// const MapWithASearchBox = compose(
//   withProps({
//     googleMapURL: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/js?input=breeder&key=AIzaSyDb_3QiYTrSXsiUZrUnxLZ52MfoDf9i5cc',
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `350px` }} />,
//     mapElement: <div style={{ height: `100%` }} />
//   }),
//   lifecycle({
//     componentWillMount() {
//       const refs = {}

//       this.setState({
//         bounds: null,

//         center: {
//           // location of Arlington, it'll be replaced by the actual location of the browser
//           lat: 38.882355, lng: -77.107171
          
//         },
//         markers: [],
//         onMapMounted: ref => {
//           refs.map = ref
//         },
//         onBoundsChanged: () => {
//           this.setState({
//             bounds: refs.map.getBounds(),
//             center: refs.map.getCenter()
//           })
//         },
//         onSearchBoxMounted: ref => {
//           refs.searchBox = ref
//         },
//         onPlacesChanged: () => {
//           const places = refs.searchBox.getPlaces()
//           const bounds = new google.maps.LatLngBounds()

//           places.forEach(place => {
//             if (place.geometry.viewport) {
//               bounds.union(place.geometry.viewport)
//             } else {
//               bounds.extend(place.geometry.location)
//             }
//           })
//           const nextMarkers = places.map(place => ({
//             position: place.geometry.location
//           }))
//           const nextCenter = _.get(nextMarkers, '0.position', this.state.center)

//           this.setState({
//             center: nextCenter,
//             markers: nextMarkers
//           })
//         }
//       })
//     }
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props => <GoogleMap
//              ref={props.onMapMounted}
//              defaultZoom={15}
//              center={props.center}
//              onBoundsChanged={props.onBoundsChanged}>
//              <SearchBox
//                ref={props.onSearchBoxMounted}
//                bounds={props.bounds}
//                controlPosition={google.maps.ControlPosition.TOP_LEFT}
//                onPlacesChanged={props.onPlacesChanged}>
//                <input type='text' placeholder='Enter an address' style={{ boxSizing: `border-box`, border: `1px solid transparent`, width: `240px`, height: `32px`, marginTop: `27px`, padding: `0 12px`, borderRadius: `3px`, boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`, fontSize: `14px`, outline: `none`, textOverflow: `ellipses` }} />
//              </SearchBox>
//              {props.markers.map((marker, index) => <Marker key={index} position={marker.position} />
//               )}
//            </GoogleMap>
// )

// export default class MyFancyComponent extends React.PureComponent {

//   render () {
//     return (
//       <div>
//         <UserNav />
//         {/* <LogoTwo /> */}
//         <Jumbotron>
//           <MapWithASearchBox />
//         </Jumbotron>
//       </div>
//     )
//   }
// }
