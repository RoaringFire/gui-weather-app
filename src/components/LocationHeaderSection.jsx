import LocationPin from "./vector_icons/LocationPin.jsx"

function LocationHeaderSection() {
  return ( 
    <div id="locationLabel">
      <LocationPin size="20" />
      <div><strong>London, United Kingdom</strong></div>
    </div>
  );
}

export default LocationHeaderSection;