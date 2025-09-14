import { getBikeImage } from "C:/Users/Adam/Documents/GitHub/BikeBanter/bike-banter/src/utils/get-user-bike";
import styles from "../../page.module.css";

const BIKE_IMAGE = await getBikeImage('uploads/000fe1c5-6286-4176-9cd8-485239e9792c/bikes/1757793381272-dahon-mariner-d8.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82YTIyNDc5OS0yMTdjLTRjNGEtODczNS1hYTRlN2Y3NDk0NTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ0ZXN0LXVzZXItcGhvdG9zL3VwbG9hZHMvMDAwZmUxYzUtNjI4Ni00MTc2LTljZDgtNDg1MjM5ZTk3OTJjL2Jpa2VzLzE3NTc3OTMzODEyNzItZGFob24tbWFyaW5lci1kOC5qcGVnIiwiaWF0IjoxNzU3ODQ0NDY0LCJleHAiOjE3NTg0NDkyNjR9.CARlOctCO-Xgq0kuFppe86agl2aQgUuIbWvmErM3xFQ');

export default function UserBike() {
    return(
        <div className={styles['home-page-bike-container']}>
            <img className={styles['home-page-bike-image']} src={BIKE_IMAGE}/>
            <div className={styles['home-page-bike-caption']}>
                <p>Dahon Mariner D8</p>
            </div>
        </div>    
    );
}