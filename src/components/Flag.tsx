import React from 'react';

interface FlagProps {
  countryCode: string;
  className?: string;
  title?: string;
}

const Flag: React.FC<FlagProps> = ({ countryCode, className = "", title }) => {
  const [imageError, setImageError] = React.useState(false);
  
  // Convert country code to lowercase for the flag API
  const flagCode = countryCode.toLowerCase();
  
  // Use flagcdn.com for flag images
  const flagUrl = `https://flagcdn.com/24x18/${flagCode}.png`;

  if (imageError) {
    // Fallback to country code if image fails to load
    return (
      <span 
        className={`${className} font-mono text-xs font-bold bg-gray-100 px-1 py-0.5 rounded`}
        title={title}
      >
        {countryCode}
      </span>
    );
  }

  return (
    <img
      src={flagUrl}
      alt={`${countryCode} flag`}
      className={`${className} w-6 h-4 object-cover rounded-sm`}
      title={title}
      onError={() => setImageError(true)}
      loading="lazy"
    />
  );
};

export default Flag; 