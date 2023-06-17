import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/createAction";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";
import { searchUser } from "../features/userDetailsSlice";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);
  const [showPopup, setShowPopup] = useState(false);
  const [radioData, setRadioData] = useState("");

  const [id, setId] = useState();

  const [searchDatap, setSearchData] = useState("");

  useEffect(() => {
    dispatch(searchUser(searchDatap));
  }, [searchDatap]);

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
      <input
        className="form-control  mobile-only "
        type="search"
        placeholder="Search User By name"
        aria-label="Search"
        onChange={(e) => setSearchData(e.target.value)}
      />
      <h2 className="py-3">All User</h2>
      <input
        class="form-check-input mx-1"
        name="gender"
        checked={radioData === ""}
        type="radio"
        onChange={(e) => setRadioData("")}
      />
      <label class="form-check-label mx-2">All</label>
      <input
        class="form-check-input mx-1"
        name="gender"
        checked={radioData === "Male"}
        value="Male"
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label mx-2">Male</label>
      <input
        class="form-check-input mx-1"
        name="gender"
        value="Female"
        checked={radioData === "Female"}
        type="radio"
        onChange={(e) => setRadioData(e.target.value)}
      />
      <label class="form-check-label mx-2">Female</label>

      <div className="d-flex mx-5 justify-content-center gap-3 flex-wrap pb-5 mt-3">
        {users &&
          users
            .filter((ele) => {
              if (searchData.length === 0) {
                return ele;
              } else {
                return ele.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              }
            })
            .filter((ele) => {
              if (radioData === "Male") {
                return ele.gender === radioData;
              } else if (radioData === "Female") {
                return ele.gender === radioData;
              } else return ele;
            })

            .map((element) => (
              <div className="card  read-class" key={element.id}>
                <h5 className="card-title mt-3">{element.name}</h5>
                <div className="card-body ">
                  <p className="card-text text-left text-secondary">
                    Email: {element.email}
                  </p>
                  <p className="card-text text-left text-secondary">
                    Gender: {element.gender}
                  </p>
                </div>
                <div className="mb-3">
                  <button
                    className="card-link btn btn-outline-primary btn-sm "
                    onClick={() => openModal(element.id)}
                  >
                    View
                  </button>

                  <button className="card-link btn btn-outline-success btn-sm ">
                    <Link to={`/edit/${element.id}`} className="link-class">
                      {" "}
                      Edit
                    </Link>
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
