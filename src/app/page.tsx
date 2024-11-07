import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/login";

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.googleClientId!}>
      <Login />
    </GoogleOAuthProvider>
  );
}

export default App;
