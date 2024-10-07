import React from "react";

import { Avatar } from "./Avatar";
import { Environment, OrbitControls } from "@react-three/drei";

export default function Experience() {
  const [inputValue, setInputValue] = React.useState("");
  const [isListening, setIsListening] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const handleFormSubmit = (event) => {};
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const startSpeechRecognition = () => {};

  return (
    <>
      {/* <OrbitControls /> */}
      <Avatar position={[2.3, -1.2, 3.3]} scale={1.1} />
      <div className="flex flex-row gap-3">
        <form onSubmit={handleFormSubmit}>
          <div className="border-2 rounded-3xl px-3 py-2">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type or speak here..."
            />
            <button
              type="submit"
              className="rounded-full px-3 py-2 font-extrabold bg-gray-200"
            >
              <p>{submitting ? `Thinking..` : "→"}</p>
            </button>
          </div>
        </form>

        <button
          onClick={startSpeechRecognition}
          disabled={isListening}
          className="bg-gray-200 p-2 rounded-xl"
        >
          {isListening ? "Listening..." : "Tap to Speak"}
        </button>
      </div>
      <Environment preset="sunset" />
    </>
  );
}
