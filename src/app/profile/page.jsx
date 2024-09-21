import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
        {/* Profile Image */}
        <img
          className="w-32 h-32 rounded-full mx-auto shadow-md"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        {/* Name */}
        <h1 className="text-2xl font-bold mt-4 text-gray-800">John Doe</h1>
        {/* Bio */}
        <p className="text-gray-600 mt-2">
          A passionate web developer with a love for creating beautiful and
          functional web experiences.
        </p>
        {/* Social Links */}
        <div className="mt-4 flex justify-center space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.896-.959-2.173-1.557-3.59-1.557-2.717 0-4.918 2.201-4.918 4.917 0 .39.045.765.128 1.124-4.083-.205-7.7-2.159-10.126-5.134-.424.722-.666 1.561-.666 2.457 0 1.695.864 3.191 2.178 4.07-.803-.026-1.56-.247-2.22-.616v.061c0 2.368 1.684 4.342 3.918 4.792-.41.111-.843.171-1.287.171-.316 0-.624-.03-.927-.086.625 1.956 2.445 3.379 4.6 3.419-1.68 1.318-3.801 2.104-6.102 2.104-.395 0-.788-.023-1.175-.068 2.179 1.397 4.768 2.213 7.548 2.213 9.054 0 14-7.498 14-13.986 0-.214-.004-.426-.015-.637.961-.695 1.796-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61C4.422 17.773 3.633 17.4 3.633 17.4c-1.085-.74.084-.725.084-.725 1.2.084 1.83 1.233 1.83 1.233 1.065 1.828 2.796 1.3 3.48.993.106-.772.417-1.3.76-1.6-2.665-.305-5.466-1.335-5.466-5.935 0-1.312.47-2.384 1.236-3.227-.124-.303-.536-1.527.117-3.182 0 0 1.008-.322 3.3 1.23.957-.267 1.984-.399 3.004-.405 1.02.006 2.047.138 3.004.405 2.292-1.552 3.3-1.23 3.3-1.23.653 1.655.241 2.879.118 3.182.767.843 1.236 1.915 1.236 3.227 0 4.61-2.804 5.625-5.476 5.92.428.368.81 1.096.81 2.21 0 1.594-.014 2.877-.014 3.267 0 .318.192.692.8.576C20.565 21.8 24 17.303 24 12 24 5.373 18.627 0 12 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
