import React, { useState, useEffect } from 'react';
import SlideBar from '../Component/Slidebar'; // Adjust the import path as needed

const Aipage = () => {
  const [inputValue, setInputValue] = useState('');
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [showChat, setShowChat] = useState(false); // State to toggle between welcome message and chat interface
  const [isSlideBarOpen, setIsSlideBarOpen] = useState(false); // State to manage SlideBar visibility

  // Handle file input change with proper typing
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAttachedFile(e.target.files[0]); // Save the attached file
    }
  };

  // Trigger file input click
  const handleAttachmentClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  // Automatically switch to chat interface after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clean up the timer if the component is unmounted before the timer finishes
    return () => clearTimeout(timer);
  }, []);

  // Toggle SlideBar visibility
  const toggleSlideBar = () => {
    setIsSlideBarOpen(prev => !prev);
  };

  return (
    <div className="h-screen flex flex-col bg-black overflow-hidden">
      {/* SlideBar */}
      <SlideBar isOpen={isSlideBarOpen} onClose={() => setIsSlideBarOpen(false)} />

      {/* Welcome Message */}
      <div
        className={`flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
          showChat ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
          Welcome to Moonred AI
        </h1>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">
          Your AI-powered copilot for the web
        </p>
      </div>

      {/* Chat Interface */}
      <div
        className={`flex flex-col h-full transition-transform duration-1000 ease-in-out ${
          showChat ? 'transform translate-y-0' : 'transform translate-y-full'
        }`}
      >
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Chat messages and other content go here */}
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-black p-2 border-t border-gray-700">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="p-2 w-full border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Type your message..."
            />

            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center gap-2">
              {/* Hidden File Input */}
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Attachment button */}
              <button
                type="button"
                onClick={handleAttachmentClick}
                className="text-gray-500 dark:text-neutral-400 hover:text-gray-800 dark:hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 8.25V14.25a4.5 4.5 0 01-9 0V6.75a3.75 3.75 0 017.5 0v7.5a2.25 2.25 0 01-4.5 0V8.25"
                  />
                </svg>
              </button>

              {/* Conditional Mic/Arrow button */}
              {inputValue ? (
                <button
                  type="button"
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Upward pointing arrow */}
                    <path d="M12 19V5M5 12l7-7 7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" x2="12" y1="19" y2="22" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Display the name of the attached file */}
          {attachedFile && (
            <p className="mt-3 text-sm text-white">
              Attached File: {attachedFile.name}
            </p>
          )}
        </div>
      </div>

      <footer className="mt-auto max-w-4xl text-center mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} Moonred AI. All rights reserved.
        </p>
      </footer>

      {/* SlideBar Toggle Button */}
      <button
        onClick={toggleSlideBar}
        className="fixed top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Aipage;
