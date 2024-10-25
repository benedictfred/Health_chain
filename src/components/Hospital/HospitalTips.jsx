import React from "react";

const EmergencyTips = () => {
  return (
    <div className="my-8 p-4 md:w-3/5 mx-auto  ">
      <h2 className="text-2xl font-bold text-blue-800 mb-4 ">Emergency Tips</h2>
      <ul className="list-disc pl-6">
        <li>Call emergency services if you or someone else is seriously injured.</li>
        <li>Apply pressure to stop bleeding for open wounds.</li>
        <li>Keep a first aid kit in a convenient and accessible place.</li>
        <li>Stay calm and reassure the injured person while waiting for help.</li>
        <li>Do not move an injured person unless necessary to prevent further harm.</li>
      </ul>
    </div>
  );
};

export default EmergencyTips;
