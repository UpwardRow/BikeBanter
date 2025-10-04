import { getBikeImage } from "C:/Users/Adam/Documents/GitHub/BikeBanter/bike-banter/src/utils/get-user-bike";
import styles from "../../page.module.css";
import { BikeDetails } from "@/interfaces/bike-details";

const bikeId = '45b46979-ff9d-44c1-a77b-6e71b0f1ce9f'
const BIKE_DETAILS: BikeDetails = await getBikeImage(bikeId);

export default function UserBike() {
    return(
        <div className="bg-muted/50 aspect-video rounded-xl">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Bike</h2>
            </div>
            <div className={styles['home-page-bike-container']}>
                <img className={styles['home-page-bike-image']} src={BIKE_DETAILS.image_url} />
                <div className={styles['home-page-bike-caption']}>
                    <p>{BIKE_DETAILS.bike_name}</p>
                </div>
            </div>
        </div> 
    );
}