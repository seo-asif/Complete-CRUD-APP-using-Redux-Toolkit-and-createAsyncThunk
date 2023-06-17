import React from "react";
import { useSelector } from "react-redux";
import "./customModal.css";

const CustomModal = ({ id, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);

  const singleUser = allusers.filter((element) => element.id === id);
  console.log("singleuser", singleUser);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <img
          className=" modal-image"
          src="https://image.pngaaa.com/419/263419-middle.png"
          alt=""
        />
        <h2>{singleUser[0].name}</h2>
        <p>Email: {singleUser[0].email}</p>
        <p>Gender: {singleUser[0].gender}</p>
        <p>Age: {singleUser[0].age}</p>
        <button className="btn btn-danger" onClick={() => setShowPopup(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CustomModal;
