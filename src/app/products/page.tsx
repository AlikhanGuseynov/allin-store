'use client'

import {useEffect} from "react";
import initProductsPage from "@/app/products/products";

const Products = () => {

    useEffect(() => {
        initProductsPage()
    }, [])


    return <div className="products">
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                        <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                  d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                                  clip-rule="evenodd"></path>
                            <path
                                d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z"></path>
                        </svg>
                        <h1 className="ml-2 text-xl font-bold text-gray-800">AllinStore</h1>
                    </div>
                    <div className="flex items-center">
                        <button
                            className="flex items-center bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-full transition">
                            <span>My Pack</span>
                            <div
                                className="ml-2 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
                                id="pack-count">0
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>

                <div className="sticky top-0 z-10 bg-white rounded-xl shadow-md p-4 mb-6">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative flex-grow">
                            <input type="text" id="search-input" placeholder="Search products..."
                                   className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
                            <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none"
                                 stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            <button
                                className="category-btn active px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="all">All
                            </button>
                            <button
                                className="category-btn px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="dairy">Dairy
                            </button>
                            <button
                                className="category-btn px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="bakery">Bakery
                            </button>
                            <button
                                className="category-btn px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="fruits">Fruits
                            </button>
                            <button
                                className="category-btn px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="vegetables">Vegetables
                            </button>
                            <button
                                className="category-btn px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="beverages">Beverages
                            </button>
                            <button
                                className="category-btn px-3 py-2 text-sm rounded-lg bg-gray-100 hover:bg-green-100 transition"
                                data-category="others">Others
                            </button>
                        </div>
                    </div>
                </div>

                <section className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 flex items-center">
                            <svg className="w-6 h-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                      clip-rule="evenodd"></path>
                            </svg>
                            Flash Add-Ons
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                         id="flash-products">
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">All Products</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                         id="product-grid">
                    </div>
                </section>
            </main>

            <div id="toast"
                 className="toast fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center opacity-0 pointer-events-none">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span id="toast-message">Item added to your pack!</span>
            </div>
        </div>
    </div>
}

export default Products;

