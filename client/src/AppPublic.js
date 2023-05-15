import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import ForgotPassword from "./component/auth/ForgotPassword"
import ResetPassword from "./component/auth/ResetPassword"
import SignIn from "./component/auth/SignIn"
import Alert from "./component/library/Alert"

function AppPublic() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100%"}>
      <Alert />
      <Routes>
          <Route path="/admin/signin" Component={SignIn} />
          <Route path="/admin/forgot-password" Component={ForgotPassword} />
          <Route path="/admin/reset-password/:resetCode" Component={ResetPassword} />
      </Routes>
    </Box>
  )
}

export default AppPublic