import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Menu/AdminMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./css/admin.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/get-users");
      if (data.success) {
        const filteredUsers = data.user.filter((user) => user.name !== "admin");
        setUsers(filteredUsers);
      } else {
        toast.error("Failed to get users");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong in getting users");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Header/>
      <div className="container-fluid m-3 p-3 pt-4">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 pt-4">
            <h1>All Users</h1>
            <div className="admin-container">
                {users.map((user) => (
                  <div  key={user._id}>
                    <div className="cards">
                      <div className="card">
                        <div className="content">
                        <img
                          src={`/api/v1/auth/user-photo/${user?._id}`}
                          className="pet-image img-fluid"
                          alt={user?.name}
                          style={{ height: "200px", width: "100%", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <Link to={`/user-info/${user._id}`} className="link">{user.name}</Link>
                            <h6>{user.address}</h6>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default Users;
