import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import Header from "./Header";

export default function ProductDetail() {
    const { productId } = useParams();
    const { data: productInfo, isLoading, error } = useFetch(`http://localhost:8000/single-product/${productId}`);
    return (
        <>
            <Header />
            <section className="w-full bg-gray-200 py-6">
                <section className="max-w-6xl w-full mx-auto bg-white py-12 flex items-stretch justify-evenly">
                    {error && <h1>{error}</h1>}
                    {isLoading && <h1>Loading....</h1>}
                    {productInfo &&
                        <>
                            <img src={productInfo.image} alt={productInfo.title} className="w-2/5 h-96 object-contain" />
                            <section className="flex flex-col items-start justify-around w-2/5">
                                <h1 className="text-4xl py-4">{productInfo.title}</h1>
                                <p>{productInfo.description}</p>
                                <div className="flex items-center justify-between w-full">
                                    <p className="text-xl">$&nbsp;{productInfo.price}</p>
                                    <p></p>
                                </div>
                            </section>
                        </>
                    }
                </section>
            </section>
        </>
    );
}