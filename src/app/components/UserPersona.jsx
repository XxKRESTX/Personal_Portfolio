import React from 'react';

export default function UserPersona({ 
  imageSrc, 
  name, 
  age, 
  occupation, 
  location, 
  cyclingExperience, 
  background, 
  goals, 
  preferredFeatures 
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white my-4">

      {/* Profile Details */}
      <div className="p-4 border-2 border-white rounded-lg">
        {/* Profile Image */}
        <div className="flex justify-center items-center border-2 border-white rounded-lg p-4 mb-4">
          <img src={imageSrc} alt={`${name}'s profile`} className="rounded-full w-20 h-20" />
        </div>

        {/* Profile Info */}
        <div className="space-y-2">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Occupation:</strong> {occupation}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Cycling Experience:</strong> {cyclingExperience}</p>
          <p><strong>Background:</strong> {background}</p>
        </div>
      </div>

      {/* Goals and Features */}
      <div className="p-4 border-2 border-white rounded-lg">
        <h3 className="font-bold mb-2">Goals:</h3>
        <ul className="list-disc list-inside space-y-1">
          {goals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>

        <h3 className="font-bold mt-4 mb-2">Preferred Features:</h3>
        <ul className="list-disc list-inside space-y-1">
          {preferredFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

