import React from "react";

const Welcome = () => {
  return (
    <div className="px-5 mt-5 pb-5 text-start container">
      <h1 className="text-center">Welcome to My CRUD Application!</h1>
      <p className="mt-5">
        My CRUD (Create, Read, Update, Delete, Search) Application is a powerful
        and user-friendly tool that allows you to manage and manipulate data
        effortlessly. Built with React and powered by Bootstrap 5. My
        application provides a seamless and intuitive experience for performing
        CRUD operations on your data.
      </p>

      <p className="fw-bold fs-16">Key Features:</p>

      <ul>
        <li className="py-2">
          <span className="fw-bold">User-Friendly Interface: </span> Our
          application offers a clean and modern user interface, designed to
          enhance usability and streamline your workflow.
        </li>
        <li className="py-2">
          <span className="fw-bold">Create: </span> Easily create new data
          entries with our application.
        </li>
        <li className="py-2">
          <span className="fw-bold">Read: </span> View and retrieve your data
          with ease.
        </li>
        <li className="py-2">
          <span className="fw-bold">Update: </span> Update and edit your data
          whenever necessary.
        </li>
        <li className="py-2">
          <span className="fw-bold">Delete: </span> Remove unwanted or outdated
          data entries effortlessly.
        </li>
        <li className="py-2 mb-5">
          <span className="fw-bold">Search: </span> Search data entries
          effortlessly.
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
