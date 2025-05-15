'use client'
import './summary.scss'
import initSummaryPage from './summary.js'
import {useEffect} from "react";

const Summary = () => {
    useEffect(() => {
        initSummaryPage()
    }, [])

    return <div className={'summary'}>
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
                            <span>Account</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Pack</h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-2/3 space-y-8">
                        <div className="card" id="pack-items-container">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Pack Items</h3>
                            <div id="empty-pack-message" className="hidden text-center py-8">
                                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="currentColor"
                                     viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                          d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
                                          clip-rule="evenodd"></path>
                                    <path
                                        d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z"></path>
                                </svg>
                                <p className="text-gray-500">Your pack is empty. Add some products to get started!</p>
                                <a href="/products"
                                   className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition">
                                    Browse Products
                                </a>
                            </div>
                            <div id="pack-items" className="space-y-4">
                            </div>
                        </div>

                        <div className="card">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Name Your Pack</h3>
                            <input type="text" id="pack-name" placeholder="Elchin's Weekly Essentials"
                                   className="input-field"/>
                        </div>

                        <div className="card">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">Delivery Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="full-name" className="input-field"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" className="input-field"/>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Street
                                        Address</label>
                                    <input type="text" id="street" className="input-field"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Apartment/Floor
                                        (optional)</label>
                                    <input type="text" id="apartment" className="input-field"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                    <input type="text" id="city" className="input-field"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                                    <input type="text" id="zip" className="input-field"/>
                                </div>
                                <div className="md:col-span-2">
                                    <label className="flex items-center">
                                        <input type="checkbox" id="save-address"
                                               className="rounded text-green-500 focus:ring-green-500"/>
                                        <span className="ml-2 text-sm text-gray-700">Save for future deliveries</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-8">
                            <div className="card mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Subscription Summary</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-semibold" id="subtotal">$0.00</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Delivery Fee</span>
                                        <span className="font-semibold">$0.00</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3 flex justify-between">
                                        <span className="text-gray-800 font-semibold">Estimated Weekly Price</span>
                                        <span className="text-green-600 font-bold text-xl"
                                              id="weekly-price">$0.00</span>
                                    </div>
                                </div>
                            </div>

                            <div className="card mb-8">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Delivery Frequency</h3>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Select
                                        frequency</label>
                                    <div className="relative">
                                        <select id="frequency" className="input-field appearance-none pr-8">
                                            <option value="daily">Daily</option>
                                            <option value="3days">Every 3 Days</option>
                                            <option value="weekly" selected>Weekly</option>
                                        </select>
                                        <div
                                            className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="tooltip mt-2 flex items-center text-sm text-gray-500">
                                        <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor"
                                             viewBox="0 0 20 20">
                                            <path fill-rule="evenodd"
                                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                  clip-rule="evenodd"></path>
                                        </svg>
                                        <span>Delivery frequency info</span>
                                        <span className="tooltip-text">Minimum order frequency is 3 days</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-1">First delivery
                                        date</label>
                                    <input type="date" id="first-delivery" className="input-field" min=""/>
                                </div>
                            </div>

                            <button id="subscribe-btn" className="w-full btn-primary flex items-center justify-center">
                                <span>Save and Subscribe</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <div id="toast"
                 className="toast fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center opacity-0 pointer-events-none">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span id="toast-message">Your pack is saved and subscription is active!</span>
            </div>

            <div id="login-modal"
                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
                <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-gray-800">Login Required</h3>
                        <button id="close-modal" className="text-gray-400 hover:text-gray-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-gray-600 mb-6">Please log in or sign up to save your subscription.</p>
                    <div className="space-y-4">
                        <button className="w-full btn-primary">Log In</button>
                        <button className="w-full btn-secondary">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Summary
