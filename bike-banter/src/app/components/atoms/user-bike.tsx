import { getBikeImage } from "C:/Users/Adam/Documents/GitHub/BikeBanter/bike-banter/src/utils/get-user-bike";

export async function UserBike() {
    const BIKE_IMAGE = await getBikeImage('uploads/000fe1c5-6286-4176-9cd8-485239e9792c/bikes/1757793381272-dahon-mariner-d8.jpeg');

    return(
        <img className="user-bike" src={BIKE_IMAGE}/>
    );
}