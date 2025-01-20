const CircularProgress = ({ language, percentage, color = "blue" }) => {
  const radius = 40; // Radius of the circle
  const stroke = 8; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (percentage / 100) * circumference; // Offset for the progress

  return (
    <div className="flex flex-col items-center m-4">
      <svg
        className="transform -rotate-90"
        width={50}
        height={50}
        viewBox="0 0 100 100"
      >
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="gray"
          strokeWidth={stroke}
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <p className="text-white font-medium mt-0.5">{language}</p>
      <p className="text-gray-400 text-sm">{percentage}%</p>
    </div>
  );
};

export  default  CircularProgress