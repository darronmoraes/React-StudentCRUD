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

  // onClick handler to Update data of the Student
  const onDeleteRecord = () => {
    const { oldName, name, email } = this.state;

    // validation checkpoint for the input fields
    if (!name || !email || !oldName) {
      alert("Please fill in all the fields");
      return;
    }

    // API request to send the data for update
    axios
      .put(`http://127.0.0.1:5000/update/${oldName}`, {
        email: email,
        user_name: name,
      })
      .then((response) => {
        this.setState({ email: "", name: "" });
      })
      .catch((err) => {});
  };

  return (
    <div className={style.wrapper}>
      {students.map((student) => (
        <>
          <p className={style.user}>{`My Name is ${student.user_name}`}</p>
          <p>{student.email}</p>
          <button onClick={() => onDeleteRecord()}>DELETE</button>
        </>
      ))}
      <div onClick={() => props.history.push("/admin")}>ADMIN</div>
    </div>
  );
};

export default withRouter(Student);
