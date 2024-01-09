import React, { useMemo, useState } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TabOptions from '../../components/tabOptions'
import Delivery from '../../components/delivery/index'
import DinningOut from '../../components/dinningOut/index'
import NightLife from '../../components/nightLife/index'
// CSS files for the carousals
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const TABS_DATA = useMemo(() => [
        { tabId: 0, name: "DELIVERY", title: "Delivery", icon: "delivery.webp", activeIcon: "deliveryColored.avif" },
        { tabId: 1, name: "DINNING_OUT", title: "Dinning Out", icon: "dinning.avif", activeIcon: "dinningColored.avif" },
        { tabId: 2, name: "NIGHTLIFE", title: "Nightlife", icon: "nightlife.webp", activeIcon: "nightlifeColored.webp" }
    ], [])
    const [currentTab, setCurrentTab] = useState(0);
    const AVAILABLE_CITIES = ["shivpuri", "gwalior", "guna", "indore", "bhopal"];
    const [selectedCity, setSelectedCity] = useState(0);

    return (
        <>
            <Header cities={AVAILABLE_CITIES} selectedCity={selectedCity} onCityChange={setSelectedCity} />
            <TabOptions allTabs={TABS_DATA} activeTab={currentTab} changeActiveTab={setCurrentTab} />
            {showTheCorrectTab(currentTab, AVAILABLE_CITIES[selectedCity])}
            <Footer />
        </>
    )
}

function showTheCorrectTab(tabToShow, currentCity) {
    switch (tabToShow) {
        case 0:
            return <Delivery currentCity={currentCity} />
        case 1:
            return <DinningOut />
        case 2:
            return <NightLife />
        default:
            return <p>This is delivery tab</p>
    }
}
