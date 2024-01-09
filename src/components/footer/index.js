import { useState } from "react"

export default function Footer() {
    const [footerData, setFooterData] = useState({
        appLogo: {
            title: "momato",
            image: ""
        },
        availableCountry: [
            {
                name: "India",
                flagImage: "india.png"
            }
        ],
        availableLanguage: [
            {
                name: "Hindi"
            },
            {
                name: "English"
            }
        ],
        pagesLinksData: {
            aboutZomato: {
                heading: "ABOUT ZOMATO",
                links: [
                    {
                        title: "Who We Are",
                        href: "#hello"
                    },
                    {
                        title: "Blog",
                        href: "#"
                    },
                    {
                        title: "Work With Us",
                        href: "#"
                    },
                    {
                        title: "Investor Relations",
                        href: "#"
                    },
                    {
                        title: "Report Fraud",
                        href: "#"
                    },
                    {
                        title: "Press Kit",
                        href: "#"
                    },
                    {
                        title: "Contact Us",
                        href: "#"
                    }
                ]
            },
            zomaverse: {
                heading: "zomaverse",
                links: [
                    {
                        title: "Zomato",
                        href: "#"
                    },
                    {
                        title: "Binkit",
                        href: "#"
                    },
                    {
                        title: "Feeding India",
                        href: "#"
                    },
                    {
                        title: "Hyperpure",
                        href: "#"
                    },
                    {
                        title: "Zomaland",
                        href: "#"
                    },
                ]
            },
            forResturant: {
                heading: "for resturant",
                links: [
                    {
                        title: "Partner With Us",
                        href: "#"
                    },
                    {
                        title: "Apps For You",
                        href: "#"
                    }
                ]
            },
            forEnterprises: {
                heading: "for enterprises",
                links: [
                    {
                        title: "Zomato For Enterprise",
                        href: "#"
                    }
                ]
            },
            learnMore: {
                heading: "Learn More",
                links: [
                    {
                        title: "Privacy",
                        href: "#"
                    },
                    {
                        title: "Security",
                        href: "#"
                    },
                    {
                        title: "Terms",
                        href: "#"
                    },
                    {
                        title: "Sitemap",
                        href: "#"
                    },
                ]
            }
        },
        socialLinks: {
            heading: "social links",
            links: {
                instagram: "",
                linkedIn: "",
                twitter: "",
                youtube: "",
                facebook: ""
            },
        },
        installApp: [
            {
                title: "Google Play Store",
                link: "#"
            },
            {
                title: "Apple App Store",
                link: "#"
            }
        ],
        legal:{
            copyrightText: "By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved."
        }
    });

    return (
        <div style={{ backgroundColor: "#e9e9e9", padding: "30px", marginTop: "30px" }}>
            <div className="maxWidth" style={{}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", margin: "30px 0"}}>
                    <img src="/logo.png" alt="momato logo" style={{width: "200px"}} />
                    <div>
                        <select style={{padding: "5px", fontSize: "20px", outline: "none", borderRadius: "10px", marginRight: "10px"}}>
                            {footerData.availableCountry.map((data, index) => <option key={index}>
                                <img src={`/resources/flags/${data.flagImage}`} alt={data.name} width={200} />
                                <div>{data.name}</div>
                            </option> )}
                        </select>
                        
                        <select style={{padding: "5px", fontSize: "20px", outline: "none", borderRadius: "10px", marginRight: "10px"}}>
                            {footerData.availableLanguage.map((data, index) => <option key={index}>{data.name}</option> )}
                        </select>
                    </div>
                </div>
                <div style={{ display: "flex", columnGap: "10px", justifyContent: "space-between" }}>
                    <div>
                        <FooterListBlock data={footerData.pagesLinksData.aboutZomato} />
                    </div>
                    <div>
                        <FooterListBlock data={footerData.pagesLinksData.zomaverse} />
                    </div>
                    <div>
                        <FooterListBlock data={footerData.pagesLinksData.forEnterprises} />
                        <FooterListBlock data={footerData.pagesLinksData.forResturant} />
                    </div>
                    <div>
                        <FooterListBlock data={footerData.pagesLinksData.learnMore} />
                    </div>
                    <div>
                    </div>
                </div>
                <hr style={{ margin: "30px 0"}} />
                <div style={{color: "GrayText", lineHeight: "15px", letterSpacing: "1.5px", fontSize: "12px"}}>{footerData.legal.copyrightText}</div>
            </div>
        </div>
    )
}

function FooterListBlock({ data }) {
    return (
        <div style={{marginBottom: "30px", lineHeight: "20px"}}>
            <h3 style={{textTransform: "uppercase", fontSize: "15px"}}>{data.heading}</h3>
            <div style={{ display: "flex", flexDirection: "column", rowGap: "5px", fontSize: "13px" }}>
                {data.links.map((link, index) => <a key={index} href={link.href} style={{textDecoration: "none"}}>{link.title}</a>)}
            </div>
        </div>
    )
}