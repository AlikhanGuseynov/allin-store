'use client'

import React, {useEffect, useRef, useState} from 'react';
import './register.scss'
import Lottie from 'react-lottie';

const Register = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        phone: '',
        birthdate: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        termsAgree: false,
    });

    const [errors, setErrors] = useState({});
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [toast, setToast] = useState('');
    const [loading, setLoading] = useState(false);
    const toastTimeout = useRef(null);

    // Show toast
    const showToast = (msg) => {
        setToast(msg);
        clearTimeout(toastTimeout.current);
        toastTimeout.current = setTimeout(() => setToast(''), 3000);
    };

    // Password strength checker
    const checkPasswordStrength = (password) => {
        let strength = 0;
        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[a-z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        setPasswordStrength(strength);
        return strength;
    };

    // Error helpers
    const showError = (field, msg) => setErrors((prev) => ({ ...prev, [field]: msg }));
    const clearError = (field) => setErrors((prev) => ({ ...prev, [field]: '' }));

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(phone);
    const validateZip = (zip) => /^\d{5}(-\d{4})?$/.test(zip);

    // Form step validation
    const validateStep1 = () => {
        let valid = true;
        if (!validateEmail(formData.email)) {
            showError('email', 'Please enter a valid email');
            valid = false;
        } else clearError('email');

        const strength = checkPasswordStrength(formData.password);
        if (strength < 75) {
            showError('password', 'Please create a stronger password');
            valid = false;
        } else clearError('password');

        if (formData.password !== formData.confirmPassword) {
            showError('confirmPassword', 'Passwords do not match');
            valid = false;
        } else clearError('confirmPassword');

        return valid;
    };

    const validateStep2 = () => {
        let valid = true;
        if (!formData.firstName.trim()) {
            showError('firstName', 'Enter first name');
            valid = false;
        } else clearError('firstName');

        if (!formData.lastName.trim()) {
            showError('lastName', 'Enter last name');
            valid = false;
        } else clearError('lastName');

        if (!validatePhone(formData.phone)) {
            showError('phone', 'Enter valid phone');
            valid = false;
        } else clearError('phone');

        if (!formData.birthdate) {
            showError('birthdate', 'Enter birthdate');
            valid = false;
        } else {
            const birth = new Date(formData.birthdate);
            const age = new Date().getFullYear() - birth.getFullYear();
            if (age < 18) {
                showError('birthdate', 'You must be at least 18');
                valid = false;
            } else clearError('birthdate');
        }

        return valid;
    };

    const validateStep3 = () => {
        let valid = true;
        if (!formData.streetAddress.trim()) {
            showError('streetAddress', 'Enter address');
            valid = false;
        } else clearError('streetAddress');

        if (!formData.city.trim()) {
            showError('city', 'Enter city');
            valid = false;
        } else clearError('city');

        if (!formData.state) {
            showError('state', 'Select state');
            valid = false;
        } else clearError('state');

        if (!validateZip(formData.zip)) {
            showError('zip', 'Enter valid ZIP');
            valid = false;
        } else clearError('zip');

        if (!formData.termsAgree) {
            showError('termsAgree', 'You must agree to terms');
            valid = false;
        } else clearError('termsAgree');

        return valid;
    };

    // Step change handler
    const goToStep = (step) => setCurrentStep(step);

    // Submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateStep3()) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            goToStep(4);
            showToast('Account created!');
        }, 1500);
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
        <div className='register'>
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow flex flex-col md:flex-row">
                    <div
                        className="w-full md:w-1/2 bg-gradient-to-b from-[#B1D7B4] to-[#7FB77E] flex items-center justify-center p-6 md:p-12">
                        <div className="max-w-md">
                            <div className="mb-8 text-center">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Join Allin Market</h1>
                                <p className="text-white text-lg opacity-90">Fresh groceries delivered to your door</p>
                            </div>
                            <div className="flex justify-center">
                                <Lottie options={defaultOptions}/>

                            </div>
                            <div className="mt-8 text-center text-white">
                                <p className="mb-4 opacity-90">Already have an account?</p>
                                <a href="/login"
                                   className="inline-block border-2 border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-[#7FB77E] transition-all">Log
                                    In</a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
                        <div className="w-full max-w-md">
                            <div className="form-container p-8 md:p-10">
                                <div className="text-center mb-8">
                                    <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
                                    <p className="text-gray-600">Join thousands of happy customers</p>
                                </div>

                                <div className="progress-container">
                                    <div className="progress-bar">
                                        <div className="progress-bar-fill" id="progress-fill"></div>
                                        <div className="step active" id="step-1">
                                            1
                                            <span className="step-label">Account</span>
                                        </div>
                                        <div className="step" id="step-2">
                                            2
                                            <span className="step-label">Personal</span>
                                        </div>
                                        <div className="step" id="step-3">
                                            3
                                            <span className="step-label">Address</span>
                                        </div>
                                        <div className="step" id="step-4">
                                            4
                                            <span className="step-label">Complete</span>
                                        </div>
                                    </div>
                                </div>

                                <form id="signup-form">
                                    <div className="form-step active" id="form-step-1">
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="email" className="block mb-2 font-medium">Email
                                                    Address</label>
                                                <input type="email" id="email" className="input-field w-full"
                                                       placeholder="your@email.com" required/>
                                                <div className="error-message hidden" id="email-error"></div>
                                            </div>

                                            <div>
                                                <label htmlFor="password" className="block mb-2 font-medium">Create
                                                    Password</label>
                                                <input type="password" id="password" className="input-field w-full"
                                                       placeholder="••••••••" required/>
                                                <div className="password-strength">
                                                    <div className="password-strength-bar"
                                                         id="password-strength-bar"></div>
                                                </div>
                                                <div className="password-strength-text"
                                                     id="password-strength-text">Password
                                                    strength
                                                </div>
                                                <div className="password-requirements">
                                                    <div className="requirement" id="req-length">
                                                        <span className="requirement-icon">○</span>
                                                        <span>At least 8 characters</span>
                                                    </div>
                                                    <div className="requirement" id="req-uppercase">
                                                        <span className="requirement-icon">○</span>
                                                        <span>At least 1 uppercase letter</span>
                                                    </div>
                                                    <div className="requirement" id="req-lowercase">
                                                        <span className="requirement-icon">○</span>
                                                        <span>At least 1 lowercase letter</span>
                                                    </div>
                                                    <div className="requirement" id="req-number">
                                                        <span className="requirement-icon">○</span>
                                                        <span>At least 1 number</span>
                                                    </div>
                                                </div>
                                                <div className="error-message hidden" id="password-error"></div>
                                            </div>

                                            <div>
                                                <label htmlFor="confirm-password" className="block mb-2 font-medium">Confirm
                                                    Password</label>
                                                <input type="password" id="confirm-password"
                                                       className="input-field w-full"
                                                       placeholder="••••••••" required/>
                                                <div className="error-message hidden" id="confirm-password-error"></div>
                                            </div>

                                            <div className="pt-4">
                                                <button type="button" id="next-to-step-2"
                                                        className="btn-primary w-full py-3 rounded-lg font-medium">Continue
                                                </button>
                                            </div>

                                            <div className="divider text-sm">Or sign up with</div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <button type="button"
                                                        className="btn-outline py-3 rounded-lg flex items-center justify-center"
                                                        onClick="socialSignup('google')">
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
                                                        className="btn-outline py-3 rounded-lg flex items-center justify-center bg-[#1877F2] text-white"
                                                        onClick="socialSignup('facebook')">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                         viewBox="0 0 24 24" className="mr-2" fill="white">
                                                        <path
                                                            d="M20 12.05a8 8 0 10-9.25 8v-5.67h-2v-2.33h2v-1.77a2.83 2.83 0 013-3.14c.6 0 1.22.07 1.83.2v2h-1a1.16 1.16 0 00-1.3 1.26v1.45h2.22l-.36 2.33h-1.86v5.67A8 8 0 0020 12.05z"/>
                                                    </svg>
                                                    Facebook
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-step" id="form-step-2">
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="first-name" className="block mb-2 font-medium">First
                                                    Name</label>
                                                <input type="text" id="first-name" className="input-field w-full"
                                                       placeholder="John" required/>
                                                <div className="error-message hidden" id="first-name-error"></div>
                                            </div>

                                            <div>
                                                <label htmlFor="last-name" className="block mb-2 font-medium">Last
                                                    Name</label>
                                                <input type="text" id="last-name" className="input-field w-full"
                                                       placeholder="Doe" required/>
                                                <div className="error-message hidden" id="last-name-error"></div>
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block mb-2 font-medium">Phone
                                                    Number</label>
                                                <input type="tel" id="phone" className="input-field w-full"
                                                       placeholder="+1 (555) 123-4567" required/>
                                                <div className="error-message hidden" id="phone-error"></div>
                                            </div>

                                            <div>
                                                <label htmlFor="birthdate" className="block mb-2 font-medium">Date of
                                                    Birth</label>
                                                <input type="date" id="birthdate" className="input-field w-full"
                                                       required/>
                                                <div className="error-message hidden" id="birthdate-error"></div>
                                            </div>

                                            <div className="pt-4 flex gap-4">
                                                <button type="button" id="back-to-step-1"
                                                        className="btn-outline w-1/3 py-3 rounded-lg font-medium">Back
                                                </button>
                                                <button type="button" id="next-to-step-3"
                                                        className="btn-primary w-2/3 py-3 rounded-lg font-medium">Continue
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-step" id="form-step-3">
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="street-address" className="block mb-2 font-medium">Street
                                                    Address</label>
                                                <input type="text" id="street-address" className="input-field w-full"
                                                       placeholder="123 Market Street" required/>
                                                <div className="error-message hidden" id="street-address-error"></div>
                                            </div>

                                            <div>
                                                <label htmlFor="apartment" className="block mb-2 font-medium">Apartment,
                                                    Suite, etc. (optional)</label>
                                                <input type="text" id="apartment" className="input-field w-full"
                                                       placeholder="Apt #42"/>
                                            </div>

                                            <div>
                                                <label htmlFor="city" className="block mb-2 font-medium">City</label>
                                                <input type="text" id="city" className="input-field w-full"
                                                       placeholder="San Francisco" required/>
                                                <div className="error-message hidden" id="city-error"></div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="state"
                                                           className="block mb-2 font-medium">State/Province</label>
                                                    <select id="state" className="input-field w-full" required>
                                                        <option value="" disabled selected>Select State</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </select>
                                                    <div className="error-message hidden" id="state-error"></div>
                                                </div>
                                                <div>
                                                    <label htmlFor="zip" className="block mb-2 font-medium">ZIP/Postal
                                                        Code</label>
                                                    <input type="text" id="zip" className="input-field w-full"
                                                           placeholder="94103" required/>
                                                    <div className="error-message hidden" id="zip-error"></div>
                                                </div>
                                            </div>

                                            <div className="space-y-3 pt-2">
                                                <div className="checkbox-container">
                                                    <input type="checkbox" id="terms-agree" required/>
                                                    <label htmlFor="terms-agree">I agree to the <a href="#"
                                                                                                   className="link"
                                                                                                   id="terms-link">Terms</a> and <a
                                                        href="#" className="link" id="privacy-link">Privacy
                                                        Policy</a></label>
                                                </div>
                                                <div className="error-message hidden" id="terms-error"></div>

                                                <div className="checkbox-container">
                                                    <input type="checkbox" id="subscribe-offers"/>
                                                    <label htmlFor="subscribe-offers">Subscribe to offers and
                                                        updates</label>
                                                </div>
                                            </div>

                                            <div className="pt-4 flex gap-4">
                                                <button type="button" id="back-to-step-2"
                                                        className="btn-outline w-1/3 py-3 rounded-lg font-medium">Back
                                                </button>
                                                <button type="submit" id="submit-signup"
                                                        className="btn-primary w-2/3 py-3 rounded-lg font-medium">
                                                    <span id="signup-btn-text">Create Account</span>
                                                    <span id="signup-btn-spinner" className="spinner hidden"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-step" id="form-step-4">
                                        <div className="text-center py-6">
                                            <div className="success-animation">
                                                <div className="success-checkmark"></div>
                                            </div>
                                            <h3 className="text-2xl font-bold mt-6 mb-2">Account Created!</h3>
                                            <p className="text-gray-600 mb-8">Welcome to Allin Market. Your account has
                                                been
                                                successfully created.</p>
                                            <div className="space-y-4">
                                                <a href="/dashboard"
                                                   className="btn-primary w-full py-3 rounded-lg font-medium inline-block">Go
                                                    to Dashboard</a>
                                                <a href="/browse"
                                                   className="btn-outline w-full py-3 rounded-lg font-medium inline-block">Start
                                                    Shopping</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
};

export default Register;
