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
  console.log({ gavin: props.match });
  return (
    <div className={style.wrapper}>
      <>
        <h3 className={style.head}>student records</h3>
        {props.match?.path === "/" && (
          <div className={style.buttonRight}>
            <button
              className={style.button}
              onClick={() => props.history.push("/admin")}
            >
              admin
            </button>
          </div>
        )}
        <table className={style.contentTable}>
          <thead>
            <tr>
              <th>student id</th>
              <th>first name</th>
              <th>last name</th>
              <th>gender</th>
              <th>email</th>
              <th>country</th>
              <th>mobile</th>
              {props.match?.path === "/admin" && <th></th>}
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr className={style.activeRow}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
                <td>{student.country}</td>
                <td>{student.mobile}</td>
                {props.match?.path === "/admin" && (
                  <td align="center">
                    <button
                      className={style.btnDelete}
                      onClick={(e) => deleteRecord(student.first_name, e)}
                    >
                      DELETE
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </>
      {/* <div onClick={() => props.history.push("/admin")}>ADMIN</div> */}
    </div>
  );
};

export default withRouter(Student);
