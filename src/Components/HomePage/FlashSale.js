import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FlashSale() {
    const [flashItems, setFlashItems] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=5")
            .then(res => res.json())
            .then(json => setFlashItems(json))
            .catch(error => console.log(error));
    }, []);
    return (
        <>
            <section className="max-w-6xl w-full mx-auto py-8">
                <h1 className="text-xl text-gray-500 mb-4">Flash Sale</h1>
                <section className="bg-white py-4 flex flex-col">
                    <section className="flex items-center justify-between px-4 border-b border-b-gray-500 pb-3">
                        <h1>On Sale Now</h1>
                        <button className="border border-indigo-500 text-indigo-500 px-2 py-1 uppercase">Shop More</button>
                    </section>
                    <section className="flex items-center justify-around">
                        {flashItems.map(item => (
                            <Link key={item.id} to={`/products/${item.id}`} className="flex flex-col w-1/6 items-start shadow-2xl">
                            <div className="w-full">
                                <img src={item.image} alt={item.description.substring(0, 16)} className="w-full h-48 object-contain mb-6 pb-4 border-b" />
                                <h1 className="px-4">{ item.title.substring(0, 16)}...</h1>
                                <div className="flex items-center px-4">
                                    <h1>${item.price}</h1>
                                </div>
                                </div>
                            </Link>
                        ))}
                    </section>
                </section>
            </section>
        </>
    );
}
