import React, { useState, useRef } from 'react';
import { FaCamera, FaTrashAlt, FaSave, FaTimes } from 'react-icons/fa';

function Modal({
  profilePhoto,
  handlePhotoChange,
  handleSaveClick,
  handleCancelClick,
  handleDeleteClick,
}) {
  const [source, setSource] = useState('device');
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleSourceChange = (e) => {
    const selectedSource = e.target.value;
    setSource(selectedSource);

    if (selectedSource === 'drive') {
      alert('Google Drive upload functionality is not implemented yet.');
    } else if (selectedSource === 'dropbox') {
      alert('Dropbox upload functionality is not implemented yet.');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setError('File size should not exceed 2MB.');
        return;
      }

      setError('');
      handlePhotoChange(e);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
        <h3 className="text-lg font-bold mb-4 text-center">Profile Photo</h3>
        <div className="relative mb-6 flex justify-center">
          {profilePhoto ? (
            <img
              src={profilePhoto}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover border border-gray-300 shadow-sm"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border border-gray-300 shadow-sm">
              No Photo
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Source
          </label>
          <select
            id="source"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={source}
            onChange={handleSourceChange}
          >
            <option value="device">Device</option>
            <option value="drive">Google Drive</option>
            <option value="dropbox">Dropbox</option>
          </select>
        </div>
        <div className="flex justify-center items-center space-x-8 mb-2">
          <label className="flex flex-col items-center cursor-pointer">
            <FaCamera className="text-2xl text-gray-600" />
            <span className="text-blue-600 text-sm font-medium hover:underline">
              Upload
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </label>
          <button
            onClick={handleDeleteClick}
            className="flex flex-col items-center text-red-500 hover:text-red-600"
          >
            <FaTrashAlt className="text-2xl" />
            <span className="text-sm font-medium">Delete</span>
          </button>
        </div>
        <p className="text-xs text-gray-500 text-center mb-6">Max size: 2MB</p>
        {error && (
          <p className="text-sm text-red-500 text-center mb-4">{error}</p>
        )}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSaveClick}
            className="flex items-center space-x-2 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            <FaSave />
            <span>Save</span>
          </button>
          <button
            onClick={handleCancelClick}
            className="flex items-center space-x-2 py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            <FaTimes />
            <span>Cancel</span>
          </button>
        </div>
        <div
          className="absolute top-2 right-2 cursor-pointer text-gray-600 text-2xl hover:text-gray-800 transition"
          onClick={handleCancelClick}
        >
          &times;
        </div>
      </div>
    </div>
  );
}

export default Modal;
