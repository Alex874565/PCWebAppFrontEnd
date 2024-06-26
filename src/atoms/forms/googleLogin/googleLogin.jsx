import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';

const GoogleLoginForm = () => {

    function createPost(email, password, name) {
        axios
          .post("http://localhost:3001/api/auth/google", {
            email: email,
            password: password,
            name: name
          })
          .then((response) => {
            console.log(response);
            localStorage.setItem('user', JSON.stringify(response.data.user))
            const token = response.data.token
            localStorage.setItem('token', JSON.stringify(token))
            console.log(localStorage.getItem('user'))
            window.location.replace('/')
          });
      }

    function processUser(response) {
        const data = jwtDecode(response.credential)
        createPost(data.email, data.sub, data.given_name);
    }

    return (
    <div className = "google_login_body">
        <p>Or sign in with Google?</p>
        <GoogleLogin onSuccess={processUser} onError={(error) => console.log('Login Failed:', error)} />
    </div>
    );
}

export default GoogleLoginForm