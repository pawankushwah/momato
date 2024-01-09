import styles from "./style.module.css";

export default function TabOptions({ allTabs, activeTab, changeActiveTab }) {
    return (
        <div className="maxWidth">
            <div className={styles.tabContainer}>
                {
                    allTabs.map((currentTabData, index) => {
                        const isActive = (currentTabData.tabId === activeTab) ? 1 : 0;
                        return (    
                            <div key={index} onClick={() => changeActiveTab(currentTabData.tabId)}>
                                <Tab isActive={isActive} tabData={currentTabData} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function Tab({isActive, tabData}) {
    return (
        <div className={styles.tabLink} style={{borderBottom: (isActive) ? "2px solid red" : ""}}>
            <div className={styles.tabLinkLogoCircle} style={{backgroundColor: (isActive) ? "rgb(249, 171, 70)" : ""}}>
                <img src={`/resources/icons/${(isActive) ? tabData.activeIcon : tabData.icon}`} alt={(isActive) ? tabData.activeIcon : tabData.icon} style={{width: "30px", height: "30px"}} />
            </div>
            <div style={{color: (isActive) ? "red" : ""}}>{tabData.title}</div>
        </div>
    )
}
