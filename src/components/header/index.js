import { useState } from "react";
import "./style.css";
import "../../styles/commonStyle.css";

export default function Header({cities, selectedCity, onCityChange}) {
    const [searchBarValue, setSearchBarValue] = useState("");
    return (
        <div className="headerTop maxWidth">
            <div className="logo">Momato</div>
            <div className="searchBarContainer">
                <div className="searchBar">
                    <div className="positionCenter">
                        <i className="fi fi-ss-marker"></i>
                        <select value={selectedCity} onChange={(e) => onCityChange(e.target.value)}>
                            {cities.map((city, index) => <option key={index} value={index}>{city}</option>)}
                        </select>
                    </div>
                    <div className="searchInputField">
                        <i className="fi fi-bs-search"></i>
                        <input type="text" placeholder="Search for a resturant, a hotel or a dish" value={searchBarValue} onChange={(e) => setSearchBarValue(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="positionCenter userBadge">
                <div className="logo">
                    <i className="fi fi-ss-user"></i>
                </div>
                <div>Pawan</div>
            </div>
        </div>
    )
}