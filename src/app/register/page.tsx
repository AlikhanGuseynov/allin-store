'use client'

import React, { useEffect } from 'react';

const Register = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
    );
};

export default Register;
