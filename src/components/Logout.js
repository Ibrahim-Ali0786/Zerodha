import { useCookies } from "react-cookie";
function Logout (){
    const [cookies, removeCookie] = useCookies([]);
    removeCookie("token");
    window.location.href="https://frontend.d1dk8zlerjmfx7.amplifyapp.com/login"
  };
  export default Logout;