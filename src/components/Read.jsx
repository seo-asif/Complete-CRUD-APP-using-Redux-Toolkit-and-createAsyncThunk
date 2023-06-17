import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return (
      <div className="vh-100 ">
        <p className="align-middle">Loading...</p>
      </div>
    );
  }

  const openModal = (elementId) => {
    setId(elementId);
    setShowPopup(true);
  };

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2 className="py-3">All User</h2>
      <div className="d-flex mx-5 justify-content-center gap-3 flex-wrap pb-5">
        {users &&
          users.map((element) => (
            <div className="card  read-class" key={element.id}>
              <h5 className="card-title mt-3">{element.name}</h5>
              <div className="card-body ">
                <p className="card-text text-left">Email: {element.email}</p>
                <p className="card-text text-left">Gender: {element.gender}</p>
              </div>
              <div className="mb-3">
                <button
                  className="card-link btn btn-outline-primary btn-sm "
                  onClick={() => openModal(element.id)}
                >
                  View
                </button>

                <button className="card-link btn btn-outline-success btn-sm ">
                  Edit
                </button>
                <button
                  className="card-link btn btn-outline-danger btn-sm "
                  onClick={() => dispatch(deleteUser(element.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
