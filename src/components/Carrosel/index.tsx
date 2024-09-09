import { useEffect, useState } from 'react';
import styles from './Carrosel.module.css';
import { useMediaQuery } from 'react-responsive';

const Carrosel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const ehMobile = useMediaQuery({ query: '(max-width: 690px)' });


    const backgrounds = [
        `/${ehMobile ? 'Mobile' : 'Desktop'}/Banner-carousel-1.png`,
        `/${ehMobile ? 'Mobile' : 'Desktop'}/Banner-carousel-2.png`,
        `/${ehMobile ? 'Mobile' : 'Desktop'}/Banner-carousel-3.png`,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    return (
        <div className={styles.carouselContainer}>
            {backgrounds.map((background, index) => (
                <div
                    key={index}
                    className={`${styles.slide} ${index === currentIndex ? styles.slideActive : styles.slideInactive}`}
                    style={{ backgroundImage: `url(${background})` }}
                />
            ))}
            <button className={`${styles.arrowButton} ${styles.arrowLeft}`} onClick={goToPrevious}>
                &#9664;
            </button>
            <button className={`${styles.arrowButton} ${styles.arrowRight}`} onClick={goToNext}>
                &#9654;
            </button>
        </div>
    );
}

export default Carrosel;