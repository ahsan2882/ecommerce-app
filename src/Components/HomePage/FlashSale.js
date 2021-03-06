import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHooks/useFetch";

export default function FlashSale() {
    const { data: saleItems, isLoading, error } = useFetch("http://localhost:8000/all-products/sale");
    
    return (
        <>
            <section className="max-w-6xl w-full mx-auto py-8">
                <h1 className="text-xl text-gray-500 mb-4">Flash Sale</h1>
                <section className="bg-white flex flex-col">
                    <section className="flex items-center justify-between px-4 border-b border-b-gray-500 py-3">
                        <h1>On Sale Now</h1>
                    </section>
                    <section className="py-4 grid grid-cols-4 grid-rows-2 gap-4 px-6">
                        {error && <h1>{error}</h1>}
                        {isLoading && <h1>Loading....</h1>}
                        {saleItems && saleItems.map(item => (
                            <Link key={item.id} to={`/products/${item.id}`} className="flex flex-col w-full items-start shadow">
                                <div className="w-full">
                                    <img src={item.image} alt={item.title.substring(0, 15)} className="w-full h-60 object-contain mb-6 py-4 border-b" />
                                    <h1 className="px-4">{item.title.substring(0, 15)}...</h1>
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
