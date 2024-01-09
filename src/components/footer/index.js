import { useState } from "react"

export default function Footer() {
    const [firstBlockData, setFirstBlockData] = useState({
        heading: "ABOUT ZOMATO",
        links: [
            {
                title: "Who We Are",
                href: "#"
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
    });
  return (
    <div style={{backgroundColor: "gray", padding: "30px", marginTop: "30px"}}>
        <div className="maxWidth" style={{}}>
            <div>
                <div>MOMATO</div>
                <div>
                    <span>country</span>
                    <span>language</span>
                </div>
            </div>
            <div style={{display: "flex", columnGap: "10px"}}>
                <div>
                    <FooterListBlock data={firstBlockData} />
                </div>
                <div>
                    <FooterListBlock data={firstBlockData} />
                </div>
                <div>
                    <FooterListBlock data={firstBlockData} />
                    <FooterListBlock data={firstBlockData} />
                </div>
                <div>
                    <FooterListBlock data={firstBlockData} />
                </div>
                <div>
                    <FooterListBlock data={firstBlockData} />
                </div>
            </div>
            <hr style={{margin: "30px 0"}} />
            <div>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</div>
        </div>
    </div>
  )
}

function FooterListBlock({data}){
    return(
        <>
            <h3>{data.heading}</h3>
            <div style={{display: "flex", flexDirection: "column", rowGap: "5px"}}>
                {data.links.map((link, index) => <a key={index} href={link.href}>{link.title}</a>)}
            </div>
        </>
    )
}