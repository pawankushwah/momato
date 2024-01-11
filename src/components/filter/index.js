import styles from "./style.module.css"

export default function Filter({buttonsData}) {
    return (
        <div className={`${styles.filterButtonContainer} maxWidth`}>
            {
                buttonsData.map((data, index) => {
                    return <FilterButton key={index} data={data} />
                })
            }
        </div>
    )
}

function FilterButton({ data }) {
    return (
        <span className={styles.filterButton}>
            {data.icon && <i className={`fi fi-${data.icon}`}></i> }
            {data.iconUrl && <img src={data.iconUrl} alt={data.text} style={{width: "15px"}} /> }
            <span>{data.text}</span>
        </span>
    )
}