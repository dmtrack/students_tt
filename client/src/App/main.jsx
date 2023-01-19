import React, { useEffect, useState } from "react";
import axios from "axios";
import { Userslist } from "./Userslist";

const baseURL = "http://localhost:8000/api";

function MainPage() {
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);
  console.log(file);
  async function uploadFile() {
    try {
      let formData = new FormData();
      formData.append("file", file);
      await axios.post(`${baseURL}/uploadtextfile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      const users = await axios.get(`${baseURL}/getusers`).then((data) => data);
      setUsers((prevState) => users.data);
    } catch (e) {
      console.log(e);
    }
  }
  async function getUsers() {
    try {
      setLoading(true);
      const response = await axios
        .get(`${baseURL}/getusers`)
        .then((data) => data);
      setUsers(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function getUsersOnline() {
    try {
      const response = await axios
        .get(`${baseURL}/getusersonline`)
        .then((data) => data);
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteUsers() {
    try {
      await axios.delete(`${baseURL}/deleteusers`);
      const users = await axios.get(`${baseURL}/getusers`).then((data) => data);
      setUsers(users.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <div className="main-content">
        <div className="navi-bar">
          {" "}
          <h1>usersTable</h1>
        </div>
        <div className="first-container">
          <input
            className="file-input"
            type="file"
            id="file"
            name="file"
            label="file"
            input={file !== null ? file.name : null}
            onChange={(event) => setFile(event.target.files[0])}
          />
          <button
            className="button-small"
            disabled={!file}
            onClick={() => uploadFile()}
          >
            upload
          </button>
          <button className="button-small" onClick={() => getUsers()}>
            all
          </button>
          <button className="button-small" onClick={() => getUsersOnline()}>
            online
          </button>
          <button className="delete-button-small" onClick={() => deleteUsers()}>
            delete all
          </button>
        </div>

        <div className="second-container">
          <Userslist users={users} loading={loading} />
        </div>
      </div>
    </>
  );
}
export { MainPage };
