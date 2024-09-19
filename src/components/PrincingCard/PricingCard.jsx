import styles from "./PricingCard.module.css"
export default function PrincingCard({
    label,
    price,
    duration = "",
    image,
    alt
}) {
    const benefits = [
        "Up to 10 users",
        "Email support, call support",
        "1 Year Access"
    ]
    const themeClasses = {
        "Start-Up": styles["card--startup"],
        "Pro": styles["card--pro"],
        "Enterprise": styles["card--enterprise"]
    }
    const themeClass = themeClasses[label]
    return (
        <div className={`${styles.card} ${themeClass}`}>
            <div className={`${styles.card__wrapper} center-vertical`}>
                <span className={styles.card__label}>
                    {label}
                </span>
                <div className={styles.card__image}>
                    <img src={image} alt={alt} />
                </div>
                <div className={styles.card__pricelabel}>
                    <span className={styles["card__price-figure"]}>{price}</span>
                    <span className={styles["card__price-duration"]}>{duration}</span>
                </div>
                <span className={styles["card__benefites-label"]}> Everything in free, plus</span>
                <ul className={styles.card__benefits}>
                    {
                        benefits.map(benefit => {
                            return (
                                <li
                                    key={benefit}
                                    className={`${styles.card__benefit} center-horizontal`}>
                                    <img src="/images/check.png" alt="" className={styles["card__benefit-icon"]} />
                                    {benefit}
                                </li>
                            )
                        })
                    }
                </ul>
                <button className={styles.card__button}>
                    Choose
                </button>
            </div>
        </div>
    )
} 