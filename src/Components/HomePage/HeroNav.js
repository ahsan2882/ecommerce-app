import React from "react";
import HNavCss from "./HeroNav.module.css";

export default function HeroNav() {
    return (
        <>
            <section className="w-full bg-sky-300">
                <section className="max-w-6xl mx-auto w-full">
                    <nav aria-label="products navigation" className="flex w-1/5">
                        <ul className="flex flex-col items-start justify-evenly py-1 w-full bg-white">
                            {[                               
                                { mainLi: "Electronic Devices", subLi: ["Smart Phones", "Feature Phones", "Tablets", "Landline Phones", "Laptops", "Desktops", "Smart Watches", "Gaming Consoles", "Cameras & Drones", "Security Cameras", "Insurance and Protection", "Renewed"] },
                                { mainLi: "Electronic Accessories", subLi: ["Mobile Accessories", "Headphones & Headsets", "Wearable", "Camera Accessories", "Computer Accessories", "Storage", "Printers", "Computer Components", "Network Components", "Portable Speakers"] },
                                { mainLi: "Electronic Devices", subLi: ["Smart Phones", "Feature Phones", "Tablets", "Landline Phones", "Laptops", "Desktops", "Smart Watches", "Gaming Consoles", "Cameras & Drones", "Security Cameras", "Insurance and Protection", "Renewed"] },
                                { mainLi: "Electronic Accessories", subLi: ["Mobile Accessories", "Headphones & Headsets", "Wearable", "Camera Accessories", "Computer Accessories", "Storage", "Printers", "Computer Components", "Network Components", "Portable Speakers"] },
                                { mainLi: "Electronic Devices", subLi: ["Smart Phones", "Feature Phones", "Tablets", "Landline Phones", "Laptops", "Desktops", "Smart Watches", "Gaming Consoles", "Cameras & Drones", "Security Cameras", "Insurance and Protection", "Renewed"] },
                                { mainLi: "Electronic Accessories", subLi: ["Mobile Accessories", "Headphones & Headsets", "Wearable", "Camera Accessories", "Computer Accessories", "Storage", "Printers", "Computer Components", "Network Components", "Portable Speakers"] },
                                { mainLi: "Electronic Devices", subLi: ["Smart Phones", "Feature Phones", "Tablets", "Landline Phones", "Laptops", "Desktops", "Smart Watches", "Gaming Consoles", "Cameras & Drones", "Security Cameras", "Insurance and Protection", "Renewed"] },
                                { mainLi: "Electronic Accessories", subLi: ["Mobile Accessories", "Headphones & Headsets", "Wearable", "Camera Accessories", "Computer Accessories", "Storage", "Printers", "Computer Components", "Network Components", "Portable Speakers"] },
                                { mainLi: "Electronic Devices", subLi: ["Smart Phones", "Feature Phones", "Tablets", "Landline Phones", "Laptops", "Desktops", "Smart Watches", "Gaming Consoles", "Cameras & Drones", "Security Cameras", "Insurance and Protection", "Renewed"] },
                                { mainLi: "Electronic Accessories", subLi: ["Mobile Accessories", "Headphones & Headsets", "Wearable", "Camera Accessories", "Computer Accessories", "Storage", "Printers", "Computer Components", "Network Components", "Portable Speakers"] }
                            ].map(item => (
                                <li key={item.mainLi.toLowerCase().replace(" ", "")} className={`px-2 py-1 text-sm hover:cursor-pointer hover:bg-gray-300 hover:text-blue-500 w-full flex items-center justify-between relative ${HNavCss.sideNavLi}`} >
                                    <h4>{item.mainLi}</h4>
                                    <div className={HNavCss.icon}><i className={HNavCss.subList}></i></div>
                                    <ul className="absolute -right-full bg-white">
                                        {item.subLi.map(items => (
                                            <li key={items.toLowerCase().replace(" ", "")}>
                                                {items}
                                            </li>
                                        ))}
                                    </ul>
                                </li>)
                            )}
                        </ul>
                    </nav>
                </section>
            </section>
        </>
    );
}
