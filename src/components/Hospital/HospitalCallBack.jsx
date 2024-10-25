import React from "react";

const CallbackButton = () => {
  const requestCallback = () => {
    alert("Callback requested! A medical professional will contact you shortly.");
    // You can add actual logic here, e.g., send a callback request to an API
  };

  return (
    <div className="text-center my-8">
      <button
        onClick={requestCallback}
        className="active hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      >
        Request Callback
      </button>
    </div>
  );
};

export default CallbackButton;
