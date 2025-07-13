import { initialize } from "@googlemaps/jest-mocks";

beforeEach(() => {
  initialize();

  // Mock missing TravelMode enum
  global.google.maps.TravelMode = {
    DRIVING: "DRIVING",
    WALKING: "WALKING",
    BICYCLING: "BICYCLING",
    TRANSIT: "TRANSIT",
  } as typeof google.maps.TravelMode;

  // Mocking DirectionsService because it is not available in the test environment
  global.google.maps.DirectionsService = jest.fn().mockImplementation(() => ({
    route: jest.fn((request, callback) => {
      callback(
        {
          routes: [
            {
              legs: [
                {
                  steps: [
                    { instructions: "Cycle south on Main St" },
                    { instructions: "Turn left onto Cycle Path 1" },
                    { instructions: "Continue straight through the park" },
                    { instructions: "Arrive at your destination" },
                  ],
                  duration: { text: "25 mins", value: 1500 },
                  distance: { text: "7.5 km", value: 7500 },
                },
              ],
            },
          ],
        },
        "OK"
      );
    }),
  }));

  // Mock DirectionsRenderer
  global.google.maps.DirectionsRenderer = jest.fn().mockImplementation(() => ({
    setMap: jest.fn(),
    setDirections: jest.fn(),
  }));
});


test("Renders mocked bike directions", () => {
  const map = new google.maps.Map(document.createElement("div"));
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();

  directionsRenderer.setMap(map);

  const request = {
    origin: "Phoenix Park, Dublin",
    destination: "St Stephen's Green, Dublin",
    travelMode: google.maps.TravelMode.BICYCLING,
  };

  directionsService.route(request, (result, status) => {
    expect(status).toBe("OK");

    const steps = result!.routes[0].legs[0].steps;
    expect(steps.length).toBeGreaterThan(0);
    expect(steps[0].instructions).toContain("Cycle south on Main St");

    directionsRenderer.setDirections(result);
    expect(directionsRenderer.setDirections).toHaveBeenCalledWith(result);
  });
});
