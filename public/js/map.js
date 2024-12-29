const apiKey = mapToken;  // Use the mapToken variable passed from EJS

maptilersdk.config.apiKey = apiKey; // Initialize MapTiler with the API key

// Initialize the map (temporary settings)
const map = new maptilersdk.Map({
  container: 'map',
  style: maptilersdk.MapStyle.STREETS,
  center: [19.0760, 72.8777], // Temporary center
  zoom: 50, // Temporary zoom
});

// Popup that will be shown when the marker is clicked
var popup = new maptilersdk.Popup({ offset: 25 }).setHTML(
    `<H4>${up}</H4>Exact location will be provided after booking!`
);

// Fetch geocoding data
async function fetchGeocoding() {
  // Use the dynamic location variable passed from EJS
  const geocodeUrl = `https://api.maptiler.com/geocoding/${encodeURIComponent(loca)}.json?key=${apiKey}`;

  try {
    const response = await fetch(geocodeUrl);
    const data = await response.json();

   
    if (data.features.length > 0) {
      // Extract coordinates (longitude, latitude)
      const [longitude, latitude] = data.features[0].geometry.coordinates;


      // Update the map center to focus on the city
      map.setCenter([longitude, latitude]);
      map.setZoom(12);

      // Create custom marker with an image
      const customIcon = new maptilersdk.Marker({
        element: document.createElement('img'), // Create an image element
      })
        .setLngLat([longitude, latitude]) // Set the position of the marker
        .addTo(map);

      // Set the image source for the custom icon (relative to public folder)
      const markerImage = customIcon.getElement();
      markerImage.src = '/logo.png'; // Path to the custom image for the marker

      // Set the size of the image (width and height in pixels)
      markerImage.style.width = '50px'; // Adjust width as needed
      markerImage.style.height = '50px'; // Adjust height as needed

      // Add a popup to the custom marker
      customIcon.setPopup(popup); // Attach the popup to the marker

    } else {
      console.log('No location found for this city.');
    }
    
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
  }
}

// Call the geocoding function
fetchGeocoding();
