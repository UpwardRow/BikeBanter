import { initialize, LatLng } from "@googlemaps/jest-mocks";

beforeEach(() => {
    initialize();

    type LatLngLiteral = { lat: number; lng: number };

    /* 
      Below you can see that there a lot of 'as unknown..' it's because the jest-mocks package does not provide all the 
      types that are available in the Google Maps JavaScript API. This is a workaround to ensure that the tests can run 
      without type errors.
    */
    global.google = {
        maps: {
            ElevationStatus: {
                OK: 'OK',
                ERROR: 'ERROR',
                UNKNOWN_ERROR: 'UNKNOWN_ERROR',
                OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
                REQUEST_DENIED: 'REQUEST_DENIED',
                INVALID_REQUEST: 'INVALID_REQUEST',
            } as unknown as typeof google.maps.ElevationStatus,
            ElevationService: jest.fn().mockImplementation(() => ({
                getElevationAlongPath: jest.fn((request, callback) => {
                    // Generate fake elevation data. Incremented by 20 for each point
                    const fakeResults = request.path.map((coord: LatLngLiteral, iterator: number) => ({
                        elevation: 100 + iterator * 20, // simulate elevation values
                        location: coord,
                        resolution: 30,
                    }));

                    callback(fakeResults, google.maps.ElevationStatus.OK);
                }),
            })),
            LatLng: class {
                lat: number;
                lng: number;
                constructor(lat: number, lng: number) {
                    this.lat = lat;
                    this.lng = lng;
                }
            } as unknown as typeof LatLng,
        }
    } as any;
});

function fetchElevation(path: google.maps.LatLngLiteral[], callback: Function) {
  const elevator = new google.maps.ElevationService();
  elevator.getElevationAlongPath(
    { path, samples: 10 },
    (results, status) => {
      if (status === google.maps.ElevationStatus.OK) {
        callback(results);
      }
    }
  );
}

test("elevation callback receives mocked values", (done) => {
  const path = [
    { lat: 53.3, lng: -6.2 },
    { lat: 53.31, lng: -6.21 },
    { lat: 53.32, lng: -6.22 },
  ];

interface ElevationResult {
    elevation: number;
    location: google.maps.LatLngLiteral;
    resolution: number;
}

fetchElevation(path, (results: ElevationResult[]) => {
    expect(results).toHaveLength(3);
    expect(results[0].elevation).toBe(100);
    expect(results[1].elevation).toBe(120);
    expect(results[2].elevation).toBe(140);
    done();
});
});