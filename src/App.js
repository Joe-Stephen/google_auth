import { jwtDecode } from "jwt-decode";
import './App.css';
import { GoogleLogin } from "@react-oauth/google";

function App() {
  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    var credentialResponseDecoded=jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  );
}

export default App;
