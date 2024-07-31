import React from 'react';

function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen space-x-2">
            <div className="h-6 w-6 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="h-6 w-6 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="h-6 w-6 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
    );
}

export default LoadingSpinner;
