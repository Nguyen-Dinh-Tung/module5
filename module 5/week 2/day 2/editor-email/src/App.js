import "./App.css";
import {TextField} from "@mui/material";
import {Button} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {useEffect, useState} from "react";
function App() {
  let [form, setForm] = useState({});
  let [errors, setErrors] = useState({
    name: "",
    email: "",
    content: "",
  });
  let isSend = true;
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
    if (!value) {
      setErrors({
        ...errors,
        [name]: "Required",
      });
    } else {
      switch (name) {
        case "email":
          if (!regex.test(value)) {
            setErrors({
              ...errors,
              [name]: "Email không đúng định dạng",
            });
          } else {
            console.log(1);
            setErrors({
              ...errors,
              [name]: "",
            });
          }
          break;
        case "title":
          if (value.length < 2) {
            setErrors({
              ...errors,
              [name]: "Tiêu đề phải lớn hơn 2 kí tự",
            });
          } else {
            setErrors({
              ...errors,
              [name]: "",
            });
          }
          break;
        case "content":
          if (value.length < 4) {
            setErrors({
              ...errors,
              [name]: "Content phải lớn hơn 4 kí tự",
            });
          } else {
            setErrors({
              ...errors,
              [name]: "",
            });
          }
          break;
        default:
      }
    }
  };
  if (
    form.email &&
    form.title &&
    form.content &&
    !errors.email &&
    !errors.title &&
    !errors.content
  ) {
    isSend = false;
  } else {
    isSend = true;
  }
  return (
    <div className="App">
      <div>
        <TextField
          id="outlined-basic"
          name="email"
          onChange={handleChange}
          label="Email người nhận"
          variant="outlined"
        />
      </div>
      <p>{errors.email}</p>
      <div>
        <TextField
          id="outlined-basic"
          label="Tiêu đề"
          name="title"
          onChange={handleChange}
          variant="outlined"
        />
      </div>
      <p>{errors.title}</p>

      <div>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={3}
          name="content"
          onChange={handleChange}
          placeholder="Nhập văn bản tại đây"
          style={{width: 200}}
        />
      </div>
      <p>{errors.content}</p>
      <div>
        <Button variant="contained" disabled={isSend}>
          Contained
        </Button>
      </div>
    </div>
  );
}

export default App;
