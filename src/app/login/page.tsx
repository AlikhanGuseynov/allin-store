'use client'

import './login.scss'
import React, {useState} from 'react';
import Lottie from 'react-lottie';

const AuthComponent: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleFormSwitch = () => {
        setIsLogin(!isLogin);
    };

    const defaultOptions = {
        loop: true,
        autoplay: true, // Автозапуск анимации
        path: 'https://assets10.lottiefiles.com/packages/lf20_qmfs6c3i.json',
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="login">
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow flex flex-col md:flex-row">
                    {/* Visual Section */}
                    <div
                        className="w-full md:w-1/2 bg-gradient-to-b from-[#B1D7B4] to-[#7FB77E] flex items-center justify-center p-6 md:p-12">
                        <div className="max-w-md">
                            <div className="mb-8 text-center">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Allin Market</h1>
                                <p className="text-white text-lg opacity-90">Fresh starts delivered daily</p>
                            </div>
                            <div className="flex justify-center">
                                <Lottie options={defaultOptions}/>
                            </div>
                        </div>
                    </div>

                    {/* Auth Forms Section */}
                    <div className="right-section w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 relative">
                        {/* Login Form */}
                        {isLogin ? (
                            <div className="w-full max-w-md">
                                <div className="form-container p-8 md:p-10">
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
                                        <p className="text-gray-600">Log in to your Allin Market account</p>
                                    </div>

                                    <form className="space-y-5">
                                        <div>
                                            <label htmlFor="login-email"
                                                   className="block mb-2 font-medium">Email</label>
                                            <input type="email" id="login-email" className="input-field w-full"
                                                   placeholder="your@email.com" required/>
                                            <div className="error-message hidden" id="login-email-error"></div>
                                        </div>

                                        <div>
                                            <label htmlFor="login-password"
                                                   className="block mb-2 font-medium">Password</label>
                                            <input type="password" id="login-password" className="input-field w-full"
                                                   placeholder="••••••••" required/>
                                            <div className="error-message hidden" id="login-password-error"></div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="checkbox-container">
                                                <input type="checkbox" id="remember-me"/>
                                                <label htmlFor="remember-me">Remember me</label>
                                            </div>
                                            <button type="button" className="link">Forgot Password?</button>
                                        </div>

                                        <button type="submit"
                                                className="btn-primary w-full py-3 rounded-lg font-medium">
                                            <span id="login-btn-text">Log In</span>
                                        </button>

                                        <div className="divider text-sm">Or log in with</div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <button type="button"
                                                    className="btn-outline py-3 rounded-lg flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 24 24" className="mr-2">
                                                    <path fill="#4285F4"
                                                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                                    <path fill="#34A853"
                                                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                                    <path fill="#FBBC05"
                                                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                                    <path fill="#EA4335"
                                                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                                </svg>
                                                Google
                                            </button>
                                            <button type="button"
                                                    className="btn-outline py-3 rounded-lg flex items-center justify-center bg-[#1877F2] text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                     viewBox="0 0 24 24" className="mr-2" fill="white">
                                                    <path
                                                        d="M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.6 0 1.22.07 1.83.2v2h-1a1.16 1.16 0 00-1.3 1.26v1.45h2.22l-.36 2.33h-1.86v5.67A8 8 0 0020 12.05z"/>
                                                </svg>
                                                Facebook
                                            </button>
                                        </div>

                                        <div className="text-center mt-6">
                                            <p>New to Allin Market? <a href="#" className="link">Create an account</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            /* Signup Form */
                            <div className="w-full max-w-md">
                                <div className="form-container p-8 md:p-10">
                                    <div className="text-center mb-8">
                                        <h2 className="text-2xl font-bold mb-2">Create Account</h2>
                                        <p className="text-gray-600">Join Allin Market today</p>
                                    </div>

                                    <form className="space-y-5">
                                        {/* Form Fields for Signup */}
                                        <div>
                                            <label htmlFor="signup-name" className="block mb-2 font-medium">Full
                                                Name</label>
                                            <input type="text" id="signup-name" className="input-field w-full"
                                                   placeholder="John Doe" required/>
                                        </div>

                                        <div>
                                            <label htmlFor="signup-email"
                                                   className="block mb-2 font-medium">Email</label>
                                            <input type="email" id="signup-email" className="input-field w-full"
                                                   placeholder="your@email.com" required/>
                                        </div>

                                        <div>
                                            <label htmlFor="signup-phone" className="block mb-2 font-medium">Phone
                                                Number</label>
                                            <input type="tel" id="signup-phone" className="input-field w-full"
                                                   placeholder="+1 (555) 123-4567" required/>
                                        </div>

                                        <div>
                                            <label htmlFor="signup-password"
                                                   className="block mb-2 font-medium">Password</label>
                                            <input type="password" id="signup-password" className="input-field w-full"
                                                   placeholder="••••••••" required/>
                                        </div>

                                        <button type="submit"
                                                className="btn-primary w-full py-3 rounded-lg font-medium">
                                            <span>Create Account</span>
                                        </button>

                                        <div className="text-center mt-6">
                                            <p>Already have an account? <a href="#" className="link"
                                                                           onClick={handleFormSwitch}>Login here</a></p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AuthComponent;
