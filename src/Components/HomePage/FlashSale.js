import React from "react";

export default function FlashSale() {
    return (
        <>
            <section className="max-w-6xl w-full mx-auto py-8">
                <h1 className="text-xl text-gray-500 mb-4">Flash Sale</h1>
                <section className="bg-white py-4 flex flex-col">
                    <section className="flex items-center justify-between px-4 border-b border-b-gray-500 pb-3">
                        <h1>On Sale Now</h1>
                        <button className="border border-orange-500 text-orange-500 px-2 py-1 uppercase">Shop More</button>
                    </section>
                    <section className="flex items-center">
                        {/* {
                            fetch("https://fakestoreapi.com/products?limit=5")
                                .then(res => res.json())
                                .then(json => console.log(json))
                        } */}
                    </section>
                </section>
            </section>
        </>
    );
}
