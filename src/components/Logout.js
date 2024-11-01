import { useCookies } from "react-cookie";
function Logout (){
    const [cookies, removeCookie] = useCookies([]);
    removeCookie("token");
    window.location.href="http://localhost:3000/login"
  };
  export default Logout;