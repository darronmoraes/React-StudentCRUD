import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./student.module.css";
import { withRouter } from "react-router-dom";

const Student = (props) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://127.0.0.1:5000/user");
        console.log({ response });
        setStudents(response.data);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchData();
  }, []);

  // onClick handler to Delete Record of a Student
  const deleteRecord = (name) => {
    axios.delete(`http://127.0.0.1:5000/delete/${name}`);
    setStudents(
      students.filter((student) => {
        return student.name !== name;
      })
    );
  };

  return (
    <div className={style.wrapper}>
      <>
        <h3>User Records</h3>
        <table>
          <thead>
            <tr>
              <th>user name</th>
              <th>email id</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr>
                <td>{student.user_name}</td>
                <td>{student.email}</td>
                <button onClick={(e) => deleteRecord(student.user_name, e)}>
                  DELETE
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </>
      <div onClick={() => props.history.push("/admin")}>ADMIN</div>
    </div>
  );
};

export default withRouter(Student);
