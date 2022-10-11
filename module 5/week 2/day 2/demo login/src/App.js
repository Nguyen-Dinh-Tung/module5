import {useEffect, useState} from "react";
import {Formik} from "formik";
import "./App.css";
function App() {
  let [users, setUsers] = useState({
    name: "",
    email: "",
  });
  let RegexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleValidate = () => {
    let error = {};
    if (!users.email) {
      error.email = "Required";
    } else if (!RegexEmail.test(users.email)) {
      error.email = "Invalid email address";
    }
    if (!users.password) {
      error.password = "Password required";
    }
    return error;
  };
  return (
    <>
      <h2>Signup</h2>
      <Formik
        initialValues={users}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({errors, handleSubmit}) => (
          <form
            action=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label htmlFor="emai">Email</label>
            <input
              type="text"
              name="email"
              value={users.email}
              onChange={(e) => {
                setUsers({...users, [e.target.name]: e.target.value});
              }}
            />
            <p>{errors.email ? errors.email : ""}</p>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              value={users.name}
              onChange={(e) => {
                setUsers({...users, [e.target.name]: e.target.value});
              }}
            />
            <p>{errors.password ? errors.password : ""}</p>
            <button type="submit">Đăng nhập</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
