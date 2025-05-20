'use client'

import './delivery-calendar.scss'
import deliveryCalendar from './delivery-calendar'
import {useEffect} from "react";


const DeliveryCalendar = () => {

    useEffect(() => {
        deliveryCalendar()
    }, []);

    return <div className={'delivery-calendar'}>
        <main className="flex-grow container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/4">
                    <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Subscription Overview</h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500">Pack Name</p>
                                <p className="font-semibold text-gray-800">Elchin&#39;s Weekly Essentials</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Frequency</p>
                                <p className="font-semibold text-gray-800">Every 3 Days</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Next Delivery</p>
                                <p className="font-semibold text-green-600" id="next-delivery-date">Loading...</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Delivery Address</p>
                                <p className="font-semibold text-gray-800">123 Main St, Apt 4B, New York, NY 10001</p>
                            </div>
                            <a href="/my-pack" className="block text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition mt-6">
                                Modify My Pack
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-3/4">
                    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-gray-800">Delivery Calendar</h2>
                            <div className="flex items-center space-x-2">
                                <button id="prev-month" className="p-2 rounded-lg hover:bg-gray-100 transition">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <h3 id="current-month" className="text-lg font-semibold text-gray-700">Loading...</h3>
                                <button id="next-month" className="p-2 rounded-lg hover:bg-gray-100 transition">
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 mb-4 text-sm">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                <span>Active Delivery</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                <span>Paused Delivery</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-slate-400 rounded-full mr-2"></span>
                                <span>Rescheduled Delivery</span>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="grid grid-cols-7 mb-2">
                                <div className="text-center font-semibold text-gray-500">Sun</div>
                                <div className="text-center font-semibold text-gray-500">Mon</div>
                                <div className="text-center font-semibold text-gray-500">Tue</div>
                                <div className="text-center font-semibold text-gray-500">Wed</div>
                                <div className="text-center font-semibold text-gray-500">Thu</div>
                                <div className="text-center font-semibold text-gray-500">Fri</div>
                                <div className="text-center font-semibold text-gray-500">Sat</div>
                            </div>

                            <div id="calendar-grid" className="grid grid-cols-7 gap-1">
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Smart Add-Ons for Next Delivery</h2>
                            <div className="flex items-center text-amber-600">
                                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                                </svg>
                                <span id="order-countdown" className="text-sm font-semibold">Order by 10 PM for tomorrow!</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="addon-suggestions">
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <div id="delivery-drawer" className="drawer closed fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-lg z-50">
            <div className="h-full flex flex-col">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-800" id="drawer-date">Delivery Details</h3>
                    <button id="close-drawer" className="text-gray-500 hover:text-gray-700">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <div className="flex-grow overflow-y-auto p-6">
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold text-gray-700">Delivery Time</h4>
                            <span id="delivery-status" className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                        </div>
                        <p id="delivery-time" className="text-gray-600">5:00 AM – 8:00 AM</p>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2">Driver ETA</h4>
                        <p id="driver-eta" className="text-gray-600">Not available yet</p>
                    </div>

                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2">Items</h4>
                        <div id="delivery-items" className="space-y-3">
                        </div>
                    </div>

                    <div className="mb-6 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-700">Total</span>
                            <span id="delivery-total" className="font-bold text-green-600">$0.00</span>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-200 space-y-4">
                    <div className="flex gap-4">
                        <button id="pause-btn" className="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-800 font-semibold py-2 px-4 rounded-lg transition tooltip">
                            Pause Delivery
                            <span className="tooltip-text">Paused deliveries will be skipped, and your subscription will resume the next scheduled day.</span>
                        </button>
                        <button id="reschedule-btn" className="flex-1 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-lg transition">
                            Reschedule
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div id="reschedule-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Reschedule Delivery</h3>
                    <button id="close-reschedule-modal" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-gray-600 mb-4">Select a new date for your delivery:</p>
                <div className="mb-4">
                    <input type="date" id="reschedule-date" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"/>
                </div>
                <div className="flex justify-end space-x-4">
                    <button id="cancel-reschedule" className="px-4 py-2 text-gray-600 hover:text-gray-800 transition">Cancel</button>
                    <button id="confirm-reschedule" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">Confirm</button>
                </div>
            </div>
        </div>

        <div id="confirm-modal" className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-800" id="confirm-title">Confirm Action</h3>
                    <button id="close-confirm-modal" className="text-gray-400 hover:text-gray-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-gray-600 mb-6" id="confirm-message">Are you sure you want to proceed with this action?</p>
                <div className="flex justify-end space-x-4">
                    <button id="cancel-confirm" className="px-4 py-2 text-gray-600 hover:text-gray-800 transition">Cancel</button>
                    <button id="proceed-confirm" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition">Confirm</button>
                </div>
            </div>
        </div>

        <div id="toast" className="toast fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center opacity-0 pointer-events-none">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span id="toast-message">Action completed successfully!</span>
        </div>

    </div>

}

export default DeliveryCalendar;
