import { initialize, Map, AdvancedMarkerElement, mockInstances } from "@googlemaps/jest-mocks";

function mapCreate() {
  const div = document.createElement('div');
  const map = new google.maps.Map(div);
  const markerOne = new google.maps.marker.AdvancedMarkerElement();

  map.setHeading(8);
  markerOne.map = map;
  
  const markerTwo = new google.maps.marker.AdvancedMarkerElement({
    map, 
    position: { lat: 0, lng: 0 }, 
    content: document.createTextNode("My marker label"), 
   });
};

beforeEach(() => {
  initialize();
});

test('should create a map', () => {
  mapCreate();

  // Check if the map and markers were created by verifying the mock instances
  const mapMocks = mockInstances.get(Map);
  const markerMocks = mockInstances.get(AdvancedMarkerElement);

  // Ensure the map and markers were created with the expected quantity
  expect(mapMocks).toHaveLength(1);
  console.log('Map created:', mapMocks.length);
  expect(mapMocks[0].setHeading).toHaveBeenCalledWith(8);
  expect(markerMocks).toHaveLength(2);
  console.log('Markers created:', markerMocks.length);
});
