'use client'

import './page.scss'
import './page.js'

const AuthComponent: React.FC = () => {

    return (
        <div className={'home'}>
            <div className="font-quicksand text-clay-gray">
                <header className="fixed top-0 left-0 w-full z-50 blur-header transition-all duration-300" id="header">
                    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="text-2xl md:text-3xl font-bold text-herbal-green">
                            <span className="logo-letter">A</span>
                            <span className="logo-letter">l</span>
                            <span className="logo-letter">l</span>
                            <span className="logo-letter">i</span>
                            <span className="logo-letter">n</span>
                            <span className="logo-letter ml-1">M</span>
                            <span className="logo-letter">a</span>
                            <span className="logo-letter">r</span>
                            <span className="logo-letter">k</span>
                            <span className="logo-letter">e</span>
                            <span className="logo-letter">t</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <div className="header-icon relative cursor-pointer">
                                <svg className="w-8 h-8 text-herbal-green" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 3C7.58 3 4 6.58 4 11c0 2.03.76 3.87 2 5.28V21h12v-4.72c1.24-1.41 2-3.25 2-5.28 0-4.42-3.58-8-8-8zm0 10c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>
                                </svg>
                                <span
                                    className="tooltip bg-herbal-green text-white px-2 py-1 rounded text-xs whitespace-nowrap">Fresh Eggs</span>
                            </div>
                            <div className="header-icon relative cursor-pointer">
                                <svg className="w-8 h-8 text-herbal-green" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 2v12h12v9l7-12h-9V2H3zm2 2h6v6h6.93L14 16.93V12H5V4z"/>
                                </svg>
                                <span
                                    className="tooltip bg-herbal-green text-white px-2 py-1 rounded text-xs whitespace-nowrap">Fresh Bread</span>
                            </div>
                            <div className="header-icon relative cursor-pointer">
                                <svg className="w-8 h-8 text-herbal-green" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M7 2c-1.1 0-2 .9-2 2v18l7-3 7 3V4c0-1.1-.9-2-2-2H7zm0 2h10v15l-5-2.18L7 19V4z"/>
                                </svg>
                                <span
                                    className="tooltip bg-herbal-green text-white px-2 py-1 rounded text-xs whitespace-nowrap">Fresh Milk</span>
                            </div>
                        </div>

                        <div
                            className="hidden md:flex items-center bg-cream-white bg-opacity-80 px-4 py-2 rounded-full">
                      <span className="text-sm">☀️ Next delivery closes in <span className="font-bold text-herbal-green"
                                                                                 id="countdown">02:43:21</span></span>
                        </div>

                        <button
                            className="cta-button bg-herbal-green text-white px-6 py-3 rounded-full font-medium shadow-lg"
                            id="buildPackBtn">
                            Build My Morning Pack
                        </button>

                        <div className="md:hidden cursor-pointer" id="burgerMenu">
                            <svg className="w-8 h-8 text-herbal-green" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </div>
                    </div>
                </header>

                <div
                    className="radial-menu fixed top-0 left-0 w-full h-screen bg-cream-white z-40 flex items-center justify-center"
                    id="radialMenu">
                    <div className="absolute top-6 right-6 cursor-pointer" id="closeMenu">
                        <svg className="w-8 h-8 text-herbal-green" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </div>
                    <div className="flex flex-col items-center space-y-8">
                        <a href="#"
                           className="text-2xl font-medium text-herbal-green hover:text-earth-beige transition-colors">Home</a>
                        <a href="#"
                           className="text-2xl font-medium text-herbal-green hover:text-earth-beige transition-colors">My
                            Pack</a>
                        <a href="#"
                           className="text-2xl font-medium text-herbal-green hover:text-earth-beige transition-colors">How
                            It
                            Works</a>
                        <a href="#"
                           className="text-2xl font-medium text-herbal-green hover:text-earth-beige transition-colors">About
                            Us</a>
                        <a href="#"
                           className="text-2xl font-medium text-herbal-green hover:text-earth-beige transition-colors">Contact</a>
                    </div>
                </div>

                <section
                    className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-white to-earth-beige">
                    <div className="absolute w-full h-full">
                        <div
                            className="parallax-item absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div
                                className="w-32 h-32 md:w-48 md:h-48 bg-eggshell-yellow rounded-full opacity-80 blur-md"></div>
                        </div>

                        <div className="parallax-item absolute bottom-1/4 left-1/2 transform -translate-x-1/2 floating">
                            <svg className="w-40 h-40 md:w-64 md:h-64" viewBox="0 0 100 100" fill="none">
                                <path d="M20 40 H80 V70 Q80 80 70 80 H30 Q20 80 20 70 V40 Z" fill="#EAD8C0"/>
                                <path d="M30 40 V30 Q30 20 50 20 Q70 20 70 30 V40" stroke="#A39B8B" strokeWidth="3"
                                      fill="none"/>
                            </svg>
                        </div>

                        <div className="parallax-item absolute top-1/3 right-1/4 floating"
                             style={{animationDelay: '0.5s'}}>
                            <svg className="w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="#EAD8C0">
                                <path d="M20 70 Q20 40 50 30 Q80 20 80 50 Q80 70 60 80 Q40 90 20 70 Z"/>
                            </svg>
                        </div>

                        <div className="parallax-item absolute top-1/3 left-1/4 floating"
                             style={{animationDelay: '1s'}}>
                            <svg className="w-16 h-16 md:w-24 md:h-24" viewBox="0 0 100 100" fill="#FAF7F0">
                                <path d="M30 20 H70 V60 Q70 80 50 80 Q30 80 30 60 V20 Z"/>
                            </svg>
                        </div>

                        <div className="parallax-item absolute bottom-1/3 right-1/3 floating egg"
                             style={{animationDelay: '1.5s'}}>
                            <svg className="w-12 h-12 md:w-16 md:h-16" viewBox="0 0 100 100" fill="#FAF7F0">
                                <ellipse cx="50" cy="50" rx="30" ry="40"/>
                            </svg>
                            <div className="egg-crack">
                                <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="20" fill="#F8E9A1"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-4 z-10 text-center">
                        <h1 className="typing-animation text-3xl md:text-5xl lg:text-6xl font-bold text-clay-gray mb-6 inline-block mx-auto">
                            Fresh. Automated. At Your Doorstep by Sunrise.
                        </h1>
                        <p className="glow-in text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
                            No need to think. Subscribe once. Restock forever.
                        </p>
                        <button
                            className="cta-button bg-herbal-green text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg flex items-center mx-auto"
                            id="buildFirstPackBtn">
                            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                            Build My First Pack
                        </button>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-cream-white">
                    <div className="container mx-auto px-4 mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-clay-gray mb-2">How It Works</h2>
                        <p className="text-center text-clay-gray opacity-80 mb-10">Scroll to discover our simple
                            process</p>
                    </div>

                    <div className="timeline-container flex overflow-x-auto pb-10 timeline-section">
                        <div className="timeline-item min-w-[300px] md:min-w-[400px] px-6 flex-shrink-0">
                            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                                <div
                                    className="relative h-40 mb-6 overflow-hidden rounded-lg bg-herbal-green bg-opacity-20 flex items-center justify-center">
                                    <div className="egg absolute transform transition-all duration-500 hover:rotate-45">
                                        <svg className="w-16 h-16" viewBox="0 0 100 100" fill="#FAF7F0">
                                            <ellipse cx="50" cy="50" rx="30" ry="40"/>
                                        </svg>
                                    </div>
                                    <div className="butter absolute transform translate-x-10">
                                        <svg className="w-16 h-10" viewBox="0 0 100 60" fill="#F8E9A1">
                                            <rect x="10" y="10" width="80" height="40" rx="5"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-herbal-green mb-2">Choose Essentials</h3>
                                <p className="text-clay-gray opacity-80">Select your morning staples from our curated
                                    organic
                                    collection.</p>
                            </div>
                        </div>

                        <div className="timeline-item min-w-[300px] md:min-w-[400px] px-6 flex-shrink-0">
                            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                                <div
                                    className="relative h-40 mb-6 overflow-hidden rounded-lg bg-herbal-green bg-opacity-20 flex items-center justify-center">
                                    <div className="floating">
                                        <svg className="w-20 h-20" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="45" fill="none" stroke="#A39B8B"
                                                    strokeWidth="2"/>
                                            <circle cx="50" cy="50" r="3" fill="#A39B8B"/>
                                            <line x1="50" y1="50" x2="50" y2="25" stroke="#A39B8B" strokeWidth="2"
                                                  strokeLinecap="round" id="hourHand"/>
                                            <line x1="50" y1="50" x2="75" y2="50" stroke="#A39B8B" strokeWidth="2"
                                                  strokeLinecap="round" id="minuteHand"/>
                                        </svg>
                                    </div>
                                    <div className="absolute transform translate-x-16 translate-y-10">
                                        <svg className="w-16 h-16" viewBox="0 0 100 100">
                                            <rect x="10" y="10" width="80" height="80" rx="5" fill="white"
                                                  stroke="#A39B8B"
                                                  strokeWidth="2"/>
                                            <line x1="10" y1="30" x2="90" y2="30" stroke="#A39B8B" strokeWidth="2"/>
                                            <circle cx="30" cy="50" r="5" fill="#A5C882"/>
                                            <circle cx="50" cy="50" r="5" fill="#A5C882"/>
                                            <circle cx="70" cy="50" r="5" fill="#A5C882"/>
                                            <circle cx="30" cy="70" r="5" fill="#A5C882"/>
                                            <circle cx="50" cy="70" r="5" fill="#A5C882"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-herbal-green mb-2">Set Schedule</h3>
                                <p className="text-clay-gray opacity-80">Choose your delivery frequency and preferred
                                    morning
                                    time.</p>
                            </div>
                        </div>

                        <div className="timeline-item min-w-[300px] md:min-w-[400px] px-6 flex-shrink-0">
                            <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                                <div
                                    className="relative h-40 mb-6 overflow-hidden rounded-lg bg-herbal-green bg-opacity-20 flex items-center justify-center">
                                    <div className="absolute">
                                        <svg className="w-24 h-32" viewBox="0 0 100 140">
                                            <rect x="10" y="10" width="80" height="120" rx="2" fill="#EAD8C0"/>
                                            <circle cx="80" cy="70" r="5" fill="#A39B8B"/>
                                        </svg>
                                    </div>
                                    <div className="absolute transform translate-y-10">
                                        <svg className="w-16 h-16" viewBox="0 0 100 100">
                                            <path d="M30 80 Q40 60 30 40 Q20 20 40 20 Q60 20 50 40 Q40 60 50 80"
                                                  fill="none"
                                                  stroke="white" strokeWidth="3" strokeLinecap="round"
                                                  className="opacity-60"/>
                                            <path d="M50 80 Q60 60 50 40 Q40 20 60 20 Q80 20 70 40 Q60 60 70 80"
                                                  fill="none"
                                                  stroke="white" strokeWidth="3" strokeLinecap="round"
                                                  className="opacity-60"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-herbal-green mb-2">Morning Drop</h3>
                                <p className="text-clay-gray opacity-80">Wake up to fresh essentials at your doorstep,
                                    ready
                                    for your
                                    day.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 bg-gradient-to-b from-cream-white to-earth-beige bg-opacity-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-clay-gray mb-2">Smart Packs</h2>
                        <p className="text-center text-clay-gray opacity-80 mb-16">Curated essentials, delivered
                            fresh</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="pack-card bg-white rounded-xl overflow-hidden shadow-lg">
                                <div className="p-6 relative h-64">
                                    <div className="absolute top-4 right-4">
                            <span
                                className="bg-herbal-green text-white text-xs px-3 py-1 rounded-full flex items-center">
                                <span>Organic Only</span>
                                <svg className="w-4 h-4 ml-1 leaf" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M17.8 3.1c-2.5 0-4.3 1.3-5.8 3.2-1.5-1.9-3.3-3.2-5.8-3.2-3.5 0-6.3 2.7-6.3 6 0 2 1.3 3.8 3.6 5.1 2.1 1.2 4.3 2.2 8.5 6.9 4.2-4.7 6.4-5.7 8.5-6.9 2.3-1.3 3.6-3.1 3.6-5.1 0-3.3-2.8-6-6.3-6z"/>
                                </svg>
                            </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-herbal-green mb-6">The Rise Pack</h3>

                                    <div className="flex justify-center items-center h-32 relative">
                                        <div className="pack-item absolute" style={{transitionDelay: '0.1s'}}>
                                            <svg className="w-20 h-20" viewBox="0 0 100 100" fill="#EAD8C0">
                                                <rect x="10" y="30" width="80" height="40" rx="5"/>
                                                <path d="M20 30 Q50 10 80 30" fill="none" stroke="#EAD8C0"
                                                      strokeWidth="5"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform -translate-x-16"
                                             style={{transitionDelay: '0.2s'}}>
                                            <svg className="w-16 h-24" viewBox="0 0 100 150" fill="#FAF7F0">
                                                <path d="M30 30 H70 V120 Q70 140 50 140 Q30 140 30 120 V30 Z"/>
                                                <rect x="40" y="10" width="20" height="20" fill="#A39B8B"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform translate-x-16"
                                             style={{transitionDelay: '0.3s'}}>
                                            <svg className="w-16 h-12" viewBox="0 0 100 60" fill="#F8E9A1">
                                                <rect x="10" y="10" width="80" height="40" rx="5"/>
                                                <rect x="20" y="20" width="60" height="20" rx="2" fill="#F8E9A1"
                                                      stroke="#EAD8C0"
                                                      strokeWidth="1"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-herbal-green bg-opacity-10 flex justify-between items-center">
                                    <span className="font-medium">$12.99 / delivery</span>
                                    <button
                                        className="cta-button bg-herbal-green text-white px-4 py-2 rounded-full text-sm"
                                        data-pack="rise">
                                        Edit & Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="pack-card bg-white rounded-xl overflow-hidden shadow-lg">
                                <div className="p-6 relative h-64">
                                    <div className="absolute top-4 right-4">
                            <span
                                className="bg-herbal-green text-white text-xs px-3 py-1 rounded-full flex items-center">
                                <span>Organic Only</span>
                                <svg className="w-4 h-4 ml-1 leaf" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M17.8 3.1c-2.5 0-4.3 1.3-5.8 3.2-1.5-1.9-3.3-3.2-5.8-3.2-3.5 0-6.3 2.7-6.3 6 0 2 1.3 3.8 3.6 5.1 2.1 1.2 4.3 2.2 8.5 6.9 4.2-4.7 6.4-5.7 8.5-6.9 2.3-1.3 3.6-3.1 3.6-5.1 0-3.3-2.8-6-6.3-6z"/>
                                </svg>
                            </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-herbal-green mb-6">Protein Fix</h3>

                                    <div className="flex justify-center items-center h-32 relative">
                                        <div className="pack-item absolute" style={{transitionDelay: '0.1s'}}>
                                            <svg className="w-24 h-16" viewBox="0 0 120 80">
                                                <ellipse cx="30" cy="40" rx="20" ry="25" fill="#FAF7F0"/>
                                                <ellipse cx="60" cy="40" rx="20" ry="25" fill="#FAF7F0"/>
                                                <ellipse cx="90" cy="40" rx="20" ry="25" fill="#FAF7F0"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform -translate-y-12 -translate-x-12"
                                             style={{transitionDelay: '0.2s'}}>
                                            <svg className="w-16 h-16" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r="40" fill="#FAF7F0"/>
                                                <path d="M30 50 Q50 60 70 50" fill="none" stroke="#EAD8C0"
                                                      strokeWidth="2"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform translate-y-12 translate-x-12"
                                             style={{transitionDelay: '0.3s'}}>
                                            <svg className="w-16 h-16" viewBox="0 0 100 100">
                                                <path d="M30 30 H70 L65 90 H35 Z" fill="#FAF7F0"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-herbal-green bg-opacity-10 flex justify-between items-center">
                                    <span className="font-medium">$14.99 / delivery</span>
                                    <button
                                        className="cta-button bg-herbal-green text-white px-4 py-2 rounded-full text-sm"
                                        data-pack="protein">
                                        Edit & Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="pack-card bg-white rounded-xl overflow-hidden shadow-lg">
                                <div className="p-6 relative h-64">
                                    <div className="absolute top-4 right-4">
                            <span
                                className="bg-earth-beige text-white text-xs px-3 py-1 rounded-full flex items-center">
                                <span>Mixed</span>
                                <svg className="w-4 h-4 ml-1 leaf" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M17.8 3.1c-2.5 0-4.3 1.3-5.8 3.2-1.5-1.9-3.3-3.2-5.8-3.2-3.5 0-6.3 2.7-6.3 6 0 2 1.3 3.8 3.6 5.1 2.1 1.2 4.3 2.2 8.5 6.9 4.2-4.7 6.4-5.7 8.5-6.9 2.3-1.3 3.6-3.1 3.6-5.1 0-3.3-2.8-6-6.3-6z"/>
                                </svg>
                            </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-herbal-green mb-6">Mini Family Basket</h3>

                                    <div className="flex justify-center items-center h-32 relative">
                                        <div className="pack-item absolute transform -translate-x-16 -translate-y-8"
                                             style={{transitionDelay: '0.1s'}}>
                                            <svg className="w-16 h-16" viewBox="0 0 100 100" fill="#EAD8C0">
                                                <rect x="10" y="30" width="80" height="40" rx="5"/>
                                                <path d="M20 30 Q50 10 80 30" fill="none" stroke="#EAD8C0"
                                                      strokeWidth="5"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform translate-x-16 -translate-y-8"
                                             style={{transitionDelay: '0.2s'}}>
                                            <svg className="w-12 h-20" viewBox="0 0 100 150" fill="#FAF7F0">
                                                <path d="M30 30 H70 V120 Q70 140 50 140 Q30 140 30 120 V30 Z"/>
                                                <rect x="40" y="10" width="20" height="20" fill="#A39B8B"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform -translate-x-16 translate-y-8"
                                             style={{transitionDelay: '0.3s'}}>
                                            <svg className="w-16 h-12" viewBox="0 0 120 80">
                                                <ellipse cx="30" cy="40" rx="20" ry="25" fill="#FAF7F0"/>
                                                <ellipse cx="60" cy="40" rx="20" ry="25" fill="#FAF7F0"/>
                                            </svg>
                                        </div>

                                        <div className="pack-item absolute transform translate-x-16 translate-y-8"
                                             style={{transitionDelay: '0.4s'}}>
                                            <svg className="w-12 h-12" viewBox="0 0 100 100">
                                                <path d="M30 30 H70 L65 80 H35 Z" fill="#FAF7F0"/>
                                                <rect x="35" y="40" width="30" height="5" fill="#EAD8C0"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 bg-herbal-green bg-opacity-10 flex justify-between items-center">
                                    <span className="font-medium">$19.99 / delivery</span>
                                    <button
                                        className="cta-button bg-herbal-green text-white px-4 py-2 rounded-full text-sm"
                                        data-pack="family">
                                        Edit & Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-scene relative py-16 overflow-hidden">
                    <div className="bicycle absolute bottom-16">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <circle cx="30" cy="70" r="20" fill="none" stroke="#A39B8B" strokeWidth="2"/>
                            <circle cx="70" cy="70" r="20" fill="none" stroke="#A39B8B" strokeWidth="2"/>
                            <path d="M30 70 L50 40 L70 70" fill="none" stroke="#A39B8B" strokeWidth="2"/>
                            <path d="M50 40 L40 40" fill="none" stroke="#A39B8B" strokeWidth="2"/>
                            <circle cx="50" cy="30" r="8" fill="#A5C882"/>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-wrap justify-center mb-16">
                            <a href="#"
                               className="cloud mx-4 my-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-clay-gray hover:text-herbal-green">
                                Home
                            </a>
                            <a href="#"
                               className="cloud mx-4 my-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-clay-gray hover:text-herbal-green">
                                My Pack
                            </a>
                            <a href="#"
                               className="cloud mx-4 my-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-clay-gray hover:text-herbal-green">
                                Schedule
                            </a>
                            <a href="#"
                               className="cloud mx-4 my-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-clay-gray hover:text-herbal-green">
                                FAQ
                            </a>
                            <a href="#"
                               className="cloud mx-4 my-2 bg-white bg-opacity-80 px-6 py-3 rounded-full text-clay-gray hover:text-herbal-green">
                                Contact
                            </a>
                        </div>

                        <div className="max-w-lg mx-auto">
                            <div className="bg-white bg-opacity-90 rounded-xl p-6 mb-8 shadow-lg">
                                <h3 className="text-xl font-medium text-clay-gray mb-4">Be the first to wake up with
                                    us</h3>
                                <div className="flex">
                                    <input type="email" placeholder="Your email address"
                                           className="flex-grow px-4 py-3 rounded-l-full border border-herbal-green focus:outline-none focus:ring-2 focus:ring-herbal-green"/>
                                    <button className="bg-herbal-green text-white px-6 py-3 rounded-r-full">Subscribe
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-center mb-8">
                                <button className="mx-2 px-4 py-2 rounded-full bg-herbal-green text-white">EN</button>
                                <button className="mx-2 px-4 py-2 rounded-full bg-white text-clay-gray">AZ</button>
                                <button className="mx-2 px-4 py-2 rounded-full bg-white text-clay-gray">ES</button>
                            </div>

                            <div className="text-center mb-8">
                                <button className="text-clay-gray hover:text-herbal-green flex items-center mx-auto"
                                        id="legalToggle">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                                    </svg>
                                    Crumbs
                                </button>
                                <div className="hidden mt-4 space-y-2" id="legalLinks">
                                    <a href="#" className="block text-sm text-clay-gray hover:text-herbal-green">Terms &
                                        Conditions</a>
                                    <a href="#" className="block text-sm text-clay-gray hover:text-herbal-green">Privacy
                                        Policy</a>
                                    <a href="#" className="block text-sm text-clay-gray hover:text-herbal-green">Cookie
                                        Policy</a>
                                </div>
                            </div>

                            <div className="text-center footer-logo">
                                <div className="text-2xl font-bold text-herbal-green mb-2">Allin Market</div>
                                <p className="text-sm text-clay-gray">Your Morning, Prepped & Delivered.</p>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="fixed-cta md:hidden fixed bottom-6 right-6 z-30">
                    <button
                        className="cta-button bg-herbal-green text-white p-4 rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                        </svg>
                    </button>
                </div>

                <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                     id="packModal">
                    <div className="modal-content bg-cream-white rounded-xl max-w-lg w-full mx-4 overflow-hidden">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-herbal-green">Build Your Morning Pack</h3>
                                <button className="text-clay-gray hover:text-herbal-green" id="closeModal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-clay-gray mb-4">Select Your Items</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                        <input type="checkbox" id="bread" className="mr-3 h-5 w-5 text-herbal-green"/>
                                        <label htmlFor="bread" className="flex-grow">Bread</label>
                                        <div className="flex items-center">
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-l flex items-center justify-center">
                                                -
                                            </button>
                                            <span className="w-8 text-center">1</span>
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-r flex items-center justify-center">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                        <input type="checkbox" id="milk" className="mr-3 h-5 w-5 text-herbal-green"/>
                                        <label htmlFor="milk" className="flex-grow">Milk</label>
                                        <div className="flex items-center">
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-l flex items-center justify-center">
                                                -
                                            </button>
                                            <span className="w-8 text-center">1</span>
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-r flex items-center justify-center">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                        <input type="checkbox" id="eggs" className="mr-3 h-5 w-5 text-herbal-green"/>
                                        <label htmlFor="eggs" className="flex-grow">Eggs</label>
                                        <div className="flex items-center">
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-l flex items-center justify-center">
                                                -
                                            </button>
                                            <span className="w-8 text-center">6</span>
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-r flex items-center justify-center">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow flex items-center">
                                        <input type="checkbox" id="butter" className="mr-3 h-5 w-5 text-herbal-green"/>
                                        <label htmlFor="butter" className="flex-grow">Butter</label>
                                        <div className="flex items-center">
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-l flex items-center justify-center">
                                                -
                                            </button>
                                            <span className="w-8 text-center">1</span>
                                            <button
                                                className="w-6 h-6 bg-herbal-green bg-opacity-20 rounded-r flex items-center justify-center">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-lg font-medium text-clay-gray mb-4">Delivery Schedule</h4>
                                <div className="bg-white p-4 rounded-lg shadow mb-4">
                                    <div className="flex flex-wrap -mx-2">
                                        <div className="px-2 w-1/4 mb-2">
                                            <div className="p-2 rounded bg-herbal-green text-white text-center">Mon
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4 mb-2">
                                            <div
                                                className="p-2 rounded bg-white border border-herbal-green text-center">Tue
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4 mb-2">
                                            <div
                                                className="p-2 rounded bg-white border border-herbal-green text-center">Wed
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4 mb-2">
                                            <div className="p-2 rounded bg-herbal-green text-white text-center">Thu
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4 mb-2">
                                            <div
                                                className="p-2 rounded bg-white border border-herbal-green text-center">Fri
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4 mb-2">
                                            <div className="p-2 rounded bg-herbal-green text-white text-center">Sat
                                            </div>
                                        </div>
                                        <div className="px-2 w-1/4 mb-2">
                                            <div
                                                className="p-2 rounded bg-white border border-herbal-green text-center">Sun
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <label className="block mb-2 text-sm font-medium">Delivery Time</label>
                                    <select className="w-full p-2 border border-herbal-green rounded">
                                        <option>5:00 AM - 6:00 AM</option>
                                        <option>6:00 AM - 7:00 AM</option>
                                        <option>7:00 AM - 8:00 AM</option>
                                    </select>
                                </div>
                            </div>

                            <div
                                className="flex justify-between items-center pt-4 border-t border-herbal-green border-opacity-20">
                                <div>
                                    <div className="text-sm text-clay-gray">Estimated weekly</div>
                                    <div className="text-xl font-bold text-herbal-green">$24.99</div>
                                </div>
                                <button className="cta-button bg-herbal-green text-white px-8 py-3 rounded-full">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                     id="milkModal">
                    <div className="modal-content bg-cream-white rounded-xl max-w-md w-full mx-4">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-herbal-green">Why Organic Milk Matters</h3>
                                <button className="text-clay-gray hover:text-herbal-green close-milk-modal">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center mb-4">
                                    <svg className="w-8 h-8 mr-3 text-herbal-green" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
                                    </svg>
                                    <p className="text-clay-gray">No antibiotics or synthetic hormones</p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg className="w-8 h-8 mr-3 text-herbal-green" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9zM5.6 10.25c0 1.38 1.12 2.5 2.5 2.5.53 0 1.01-.16 1.42-.44l-.02.19c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5l-.02-.19c.4.28.89.44 1.42.44 1.38 0 2.5-1.12 2.5-2.5 0-1-.59-1.85-1.43-2.25.84-.4 1.43-1.25 1.43-2.25 0-1.38-1.12-2.5-2.5-2.5-.53 0-1.01.16-1.42.44l.02-.19C14.5 2.12 13.38 1 12 1S9.5 2.12 9.5 3.5l.02.19c-.4-.28-.89-.44-1.42-.44-1.38 0-2.5 1.12-2.5 2.5 0 1 .59 1.85 1.43 2.25-.84.4-1.43 1.25-1.43 2.25zM12 5.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8s1.12-2.5 2.5-2.5z"/>
                                    </svg>
                                    <p className="text-clay-gray">Cows graze on organic pastures</p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <svg className="w-8 h-8 mr-3 text-herbal-green" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                    </svg>
                                    <p className="text-clay-gray">Better for the environment</p>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-8 h-8 mr-3 text-herbal-green" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/>
                                    </svg>
                                    <p className="text-clay-gray">Higher in omega-3 fatty acids</p>
                                </div>
                            </div>

                            <button
                                className="cta-button bg-herbal-green text-white px-6 py-3 rounded-full w-full close-milk-modal">
                                Got it
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthComponent;
