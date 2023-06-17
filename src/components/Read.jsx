import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailsSlice";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h1>Loading</h1>;
  }

  // return (
  //   <div>
  //     {users &&
  //       users.map((ele) => (
  //         <div key={ele.id} className="card w-50 mx-auto my-2">
  //           <div className="card-body">
  //             <h5 className="card-title">{ele.name}</h5>
  //             <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
  //             <p className="card-text">{ele.gender}</p>
  //           </div>
  //         </div>
  //       ))}
  //   </div>
  // );

  return (
    <div>
      <h2>All User</h2>
      <div className="d-flex mx-5 justify-content-center gap-3 flex-wrap">
        {users &&
          users.map((element) => (
            <div className="card w-25" key={element.id}>
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">{element.email}</p>
                <p className="card-text">{element.age}</p>
                <p className="card-text">{element.gender}</p>
                <a href="#" className="card-link">
                  edit
                </a>
                <a href="#" className="card-link">
                  delete
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Read;
