import {TextField, Button} from "@mui/material";
function Text() {
  return (
    <>
      <TextField id="outlined-basic" label="Nhập tên" variant="outlined" />
      <TextField id="filled-basic" label="Tuổi" variant="outlined" />
      <br />
      <Button variant="contained">Đăng ký</Button>
    </>
  );
}
export default Text;
