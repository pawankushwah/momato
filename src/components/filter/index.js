import styles from "./style.module.css"

export default function Filter({buttonsData}) {
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