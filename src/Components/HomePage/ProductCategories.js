import React from "react";
import useFetch from "../customHooks/useFetch";

export default function ProductCategories() {
    const { data: categories, isLoading, error } = useFetch("http://localhost:8000/categories");
    return (
        <>
            <section className="max-w-6xl w-full mx-auto py-8">
                <h1 className="text-xl text-gray-500 mb-4">Categories</h1>
                <section className="bg-white grid grid-cols-4 grid-rows-1">
                    {error && <h1>{error}</h1>}
                    {isLoading && <h1>Loading....</h1>}
                    {categories && categories.map(item => (
                        <div key={item}>
                            <h1>{item}</h1>
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}
