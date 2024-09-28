import React from 'react';

const AlifLogo = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <svg
        width="100%"  // Set width to 100% to make it responsive
        height="100%" // Set height to 100% to make it responsive
        viewBox="0 0 200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-animation"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#34D399" // Company color
          fontSize="6vw" // Adjusted for better readability
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          ALIF
        </text>
        <style>
          {`
            .text-animation {
              opacity: 0;
              animation: fadeIn 1s ease-in-out forwards;
            }
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .text-animation:hover {
              fill: #10B981; // Lighter version on hover
              transition: fill 0.5s ease;
            }
          `}
        </style>
      </svg>
    </div>
  );
};

export default AlifLogo;
