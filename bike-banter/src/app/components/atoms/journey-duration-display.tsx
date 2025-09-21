
export default function UserBike() {
    return(
        <div className={styles['home-page-bike-container']}>
            <img className={styles['home-page-bike-image']} src={BIKE_DETAILS.image_url}/>
            <div className={styles['home-page-bike-caption']}>
                <p>{BIKE_DETAILS.bike_name}</p>
            </div>
        </div>    
    );
}