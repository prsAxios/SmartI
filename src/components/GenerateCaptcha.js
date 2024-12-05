import React, { useState } from "react";

const FakeGoogleCaptcha = ({ onVerify }) => {
  const [captchaText, setCaptchaText] = useState(generateRandomText());
  const [userInput, setUserInput] = useState("");

  function generateRandomText() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  const handleVerify = () => {
    if (userInput === captchaText) {
      alert("Captcha verified!");
      onVerify(); // Notify parent component
    } else {
      alert("Captcha verification failed. Try again.");
      setCaptchaText(generateRandomText());
      setUserInput("");
    }
  };

  return (
    <div>
      <p className="text-gray-700">Please enter the text below:</p>
      <div className="mt-2 bg-gray-200 text-center text-lg font-mono p-3 rounded-lg">
        {captchaText}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Enter captcha text"
        className="w-full mt-2 p-2 border border-gray-300 rounded"
      />
      <button
        type="button"
        onClick={handleVerify}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Verify
      </button>
    </div>
  );
};

export default FakeGoogleCaptcha;
