import Slider from "react-slick";
import Filter from "../filter/index"
import styles from "./style.module.css"
import resturantData from "./resturant.json"
import { useEffect, useState } from "react";
import { EndOfSearch } from "../common/EndOfSearch";

const collections = [
    {
        id: 1,
        title: "Taj View Resturent",
        placesCount: 5,
        imageUrl: "https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png"
    },
    {
        id: 2,
        title: "Local Favourite Places",
        placesCount: 14,
        imageUrl: "https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png"
    },
    {
        id: 3,
        title: "Best Luxury Dining Places",
        placesCount: 18,
        imageUrl: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg"
    },
    {
        id: 4,
        title: "Best Mughal Places",
        placesCount: 6,
        imageUrl: "https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png"
    },
    {
        id: 5,
        title: "Blissful Breakfast Plces",
        placesCount: 12,
        imageUrl: "https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg"
    },
    {
        id: 6,
        title: "Serene Rooftop Places",
        placesCount: 14,
        imageUrl: "https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png"
    },
    {
        id: 7,
        title: "Great Cafes",
        placesCount: 19,
        imageUrl: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg"
    },
    {
        id: 8,
        title: "Best Bars & Pubs",
        placesCount: 13,
        imageUrl: "https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1684741284.jpg"
    }
]

const settings = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const bannerSettings = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const buttonsData = [
    {
        buttonNo: 1,
        text: "filter",
        icon: "rr-settings-sliders"
    },
    {
        buttonNo: 2,
        text: "Gold",
        iconUrl: "https://b.zmtcdn.com/data/o2_assets/577bf55ff265ae45e11cfe6911d176941687789024.png"
    },
    {
        buttonNo: 3,
        text: "Rating 4.0+"
    },
    {
        buttonNo: 4,
        text: "Pubs & Bars"
    }
];

const banner = [
    {
        id: 1,
        title: "",
        imageUrl: "https://b.zmtcdn.com/data/o2_assets/69963815381d03505031ca97cc396b871687856789.png"
    }
];

export default function Delivery({ currentCity }) {
    const [slicedResturentData, setSlicedResturentData] = useState([]);

    useEffect(() => {
        let result = [];
        let tmpSlicedData = [];

        for (let i = 0; i < resturantData.length; i++) {
            tmpSlicedData.push(resturantData[i]);
            if ((i + 1) % 3 === 0 || i + 1 === resturantData.length) {
                result.push(tmpSlicedData);
                tmpSlicedData = [];
            }
        }
        setSlicedResturentData(result);
    }, []);

    return (
        <>
            <div>
                <div style={{ marginTop: "30px", backgroundColor: "rgb(248, 248, 248)" }}>
                    <div className="maxWidth" style={{padding: "40px"}}>
                        <div style={{ fontSize: "25px", marginBottom: "20px" }}>Collections</div>
                        <div style={{display: "flex", justifyContent: "space-between", marginBottom: "20px"}}>
                            <div style={{color: "GrayText"}}>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</div>
                            <div style={{color: "red", width: "400px", textAlign: "right"}}>All collections in Agra <i class="fi fi-rr-caret-right"></i></div>
                        </div>
                        <Slider {...settings}>
                            {collections && collections.map((data, index) => {
                                return (
                                    <Card key={index} data={data} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>

                <Filter buttonsData={buttonsData} />

                <div className="maxWidth" style={{marginTop: "40px"}}>
                    <Slider {...bannerSettings}>
                        {banner && banner.map((data, index) => {
                            return (
                                <Banner key={index} data={data} />
                            )
                        })}
                    </Slider>
                </div>

                <div style={{ marginTop: "40px" }} className="maxWidth">
                    <div style={{ fontSize: "25px" }}>Trending dining restaurants in {currentCity}</div>
                    <div className={styles.resturentList}>
                        {
                            slicedResturentData && slicedResturentData.map((data, index) => {
                                return <div className={styles.childResturantList}>
                                    {data.map((resturant, resturantId) => (
                                        <ResturantCard key={index * 1000 + resturantId} data={resturant} /> 
                                    ))}
                                </div>
                            })
                        }
                    </div>
                </div>

                <EndOfSearch />
            </div>
        </>
    )
}

function Card({ data, path }) {
    return (
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", overflow: "hidden", margin: "0 10px", borderRadius: "10px", height: "300px" }}>
            <img src={data.imageUrl} alt={data.title} style={{height: "100%", filter: "brightness(0.7)"}} />
            <div style={{position: "absolute", bottom: "0", left: "5px", width: "100%", padding: "10px", fontSize: "13px", color: "white", background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)"}}>
                <div>{data.placesCount + " " + data.title}</div>
                <div>{data.placesCount} <i class="fi fi-rr-caret-right"></i></div>
            </div>
        </div>
    )
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", color: "white", borderRadius: "100%", transform: "translate(20px, -20px)", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red", color: "black", borderRadius: "100%", transform: "translate(-20px, -20px)", zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function Banner({data}) {
    return (
        <div style={{borderRadius: "10px"}}>
            <img src={data.imageUrl} alt={data.name} style={{width: "100%", height: "100%"}} />
        </div>
    )
}

function ResturantCard({ data }) {
    return (
        <div className={styles.resturantCardTop}>
            <div className={styles.resturantImage}>
                <img src={data.info.image.url} alt={data.info.name} />
                {Object.keys(data.gold).length > 0 && <div className={styles.offerStrip}> 
                <img src={"https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"} alt="gold icon" className={styles.goldIcon} />
                {data.gold.text + " " + data.gold.offerValue}
                </div>}
            </div>
            <div className={styles.flexSpaceBetween}>
                <div className={styles.resturantTitle}>{data.info.name}</div>
                <div className={styles.ratingIcon} style={{ backgroundColor: `#${data.info.rating.rating_color}`, color: "white", fontWeight: "bold" }}>
                    <span>
                        {(data.info.rating.is_new) ? "New" : data.info.rating.rating_text}
                    </span>
                    <i className="fi fi-ss-star"></i>
                </div>
            </div>
            <div className={styles.flexSpaceBetween} style={{color: "GrayText", fontSize: "15px"}}>
                <div className={styles.resturantCuisine}>
                    {data.info.cuisine.map((cuisine, index) => (`${cuisine.name}${(data.info.cuisine.length === index + 1) ? "" : ", "}`))}
                </div>
                <div className={styles.resturantCostText}>{data.info.costText.text}</div>
            </div>

            { data.distance && data.order && <div style={{textAlign: "right", marginTop: "10px"}}>{data.distance}</div>}
            { data.info.timing.color && <div style={{color: data.info.timing.color, margin: "10px 0"}}>{data.info.timing.text}</div>}
            { (data.bottomContainers.length > 0) && data.bottomContainers.map((data, index) => {
                return <div key={index}>
                    <hr />
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", columnGap: "10px"}}>
                        <img src={data.image.url} alt={data.text} style={{aspectRatio: data.image.aspect_ratio, width: "50px"}} />
                        <div style={{color: "GrayText", fontSize: "10px", lineHeight: 1.2}}>{data.text}</div>
                    </div>
                </div>
            })}
        </div>
    )
}