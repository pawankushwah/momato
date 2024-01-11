import Slider from "react-slick";
import Filter from "../filter/index"
import styles from "./style.module.css"
import resturantData from "./resturant.json"
import { useEffect, useState } from "react";
import { EndOfSearch } from "../common/EndOfSearch";

const firstOrderInspiration = [
    {
        id: 1,
        name: "Pizza",
        imageName: "pizza.avif"
    },
    {
        id: 2,
        name: "Biryani",
        imageName: "biryani.avif"
    },
    {
        id: 3,
        name: "Burger",
        imageName: "burger.avif"
    },
    {
        id: 4,
        name: "Cake",
        imageName: "cake.avif"
    },
    {
        id: 5,
        name: "Chicken",
        imageName: "chicken.webp"
    },
    {
        id: 6,
        name: "Dosa",
        imageName: "dosa.avif"
    },
    {
        id: 7,
        name: "Momos",
        imageName: "momos.avif"
    },
    {
        id: 8,
        name: "North Indian",
        imageName: "north-indian.avif"
    },
    {
        id: 9,
        name: "Paneer",
        imageName: "paneer.avif"
    },
    {
        id: 10,
        name: "Rolls",
        imageName: "rolls.avif"
    },
    {
        id: 11,
        name: "Thali",
        imageName: "thali.avif"
    }
]

const settings = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const topBrand = [
    {
        id: 1,
        name: "Bhagat Halwai",
        imageName: "Bhagat Halwai.avif"
    },
    {
        id: 2,
        name: "Bikanervala",
        imageName: "bikanervala.avif"
    },
    {
        id: 3,
        name: "Brijbhog Mishthan Bhandar - Brij Rasayanam",
        imageName: "Brijbhog Mishthan Bhandar - Brij Rasayanam.avif"
    },
    {
        id: 4,
        name: "KFC",
        imageName: "KFC.avif"
    },
    {
        id: 5,
        name: "La Pino'z Pizza",
        imageName: "la pino'z pizza.avif"
    },
    {
        id: 6,
        name: "Mama Chicken Mama Franky House",
        imageName: "Mama Chicken Mama Franky House.avif"
    },
    {
        id: 7,
        name: "Mcdonald's",
        imageName: "mcdonalds.avif"
    },
    {
        id: 8,
        name: "Pizza Hut",
        imageName: "Pizza Hut.avif"
    },
];

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
    }, [resturantData]);


    return (
        <>
            <Filter buttonsData={buttonsData} />  
            <div>
                <div style={{ marginTop: "30px", backgroundColor: "rgb(248, 248, 248)" }}>
                    <div className="maxWidth" style={{padding: "40px"}}>
                        <div style={{ fontSize: "25px", marginBottom: "20px" }}>Inspiration for your first order</div>
                        <Slider {...settings}>
                            {firstOrderInspiration && firstOrderInspiration.map((data, index) => {
                                return (
                                    <Card key={index} data={data} path={"../resources/foodItems/"} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>

                {topBrand && <div style={{ marginTop: "40px"}}>
                    <div className="maxWidth">
                        <div style={{ fontSize: "25px", marginBottom: "20px" }}>Top brand for you</div>
                        <Slider {...settings}>
                            {topBrand.map((data, index) => {
                                return (
                                    <Card key={index} data={data} path={"../resources/topBrands/"} />
                                )
                            })}
                        </Slider>
                    </div>
                </div>}

                <div style={{ marginTop: "40px" }} className="maxWidth">
                    <div style={{ fontSize: "25px" }}>Delivery Restaurants in {currentCity}</div>
                    <div className={styles.resturentList}>
                        {
                            slicedResturentData && slicedResturentData.map((data, index) => {
                                return <div className={styles.childResturantList}>
                                    {data.map((resturant, resturantId) => (
                                        <ResturantCard key={index + resturantId} data={resturant} /> 
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <img src={ path + data.imageName} alt={data.name} style={{ borderRadius: '100%', width: "125px", aspectRatio: "1/1", marginBottom: "10px" }} />
            <div style={{ fontSize: "15px", textAlign: "center" }}>{data.name}</div>
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

function ResturantCard({ data }) {
    return (
        <div className={styles.resturantCardTop}>
            <div className={styles.resturantImage}>
                <img src={data.info.image.url} alt={data.info.name} />
                {Object.keys(data.bulkOffers).length > 0 && <div className={styles.offerStrip}>{data.bulkOffers[0].text}</div>}
            </div>
            <div className={styles.flexSpaceBetween}>
                <div className={styles.resturantTitle}>{data.info.name}</div>
                <div className={styles.ratingIcon} style={{ backgroundColor: `#${data.info.rating.rating_color}`, color: "white", fontWeight: "bold" }}>
                    <span>
                        {(data.info.rating.is_new) ? "New" : data.info.rating.rating_text}
                    </span>
                    <i className="fi-ss-star"></i>
                </div>
            </div>
            <div className={styles.flexSpaceBetween} style={{color: "GrayText", fontSize: "15px"}}>
                <div className={styles.resturantCuisine}>
                    {data.info.cuisine.map((cuisine, index) => (`${cuisine.name}${(data.info.cuisine.length === index + 1) ? "" : ", "}`))}
                </div>
                <div className={styles.resturantCostText}>{data.info.costText.text}</div>
            </div>
            { !data.info.timing.text && data.order && <div style={{textAlign: "right", marginTop: "10px"}}>{data.order.deliveryTime}</div>}
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