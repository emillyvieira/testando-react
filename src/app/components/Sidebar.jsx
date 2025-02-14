import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar p-4 m-4 content-container h-full">
      <ul>
        <li className="mb-2"><a href="#" className="text-purple-500">Home</a></li>
        <li className="mb-2"><a href="#" className="text-purple-500">About</a></li>
        <li className="mb-2"><a href="#" className="text-purple-500">Services</a></li>
        <li className="mb-2"><a href="#" className="text-purple-500">Contact</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
