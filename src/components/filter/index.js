import styles from "./style.module.css"

export default function Filter() {
    const buttonsData = [
        {
            buttonNo: 1,
            text: "filter",
            icon: "rr-settings-sliders"
        },
        {
            buttonNo: 2,
            text: "Rating 4.0+"
        },
        {
            buttonNo: 3,
            text: "Safe and Hygenic"
        },
        {
            buttonNo: 4,
            text: "Pure Veg"
        },
        {
            buttonNo: 5,
            text: "Delivery Time",
            icon: "rr-priority-arrows"
        },
        {
            buttonNo: 6,
            text: "Great Offers"
        }
    ]
    return (
        <div className={`${styles.filterButtonContainer} maxWidth`}>
            {
                buttonsData.map((data, index) => {
                    return <FilterButton key={index} text={data.text} icon={data.icon} />
                })
            }
        </div>
    )
}

function FilterButton({ text, icon }) {
    return (
        <span className={styles.filterButton}>
            {icon && <i className={`fi fi-${icon}`}></i> }
            <span>{text}</span>
        </span>
    )
}