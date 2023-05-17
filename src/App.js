import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
// import { FacebookProvider, Comments } from 'react-facebook';
import { useEffect } from "react";

function App() {

  function loadFacebookScript() {
    window.fbAsyncInit = function () {
      window.FB.init({
        xfbml: true,
        version: 'v11.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }


  useEffect(() => {
    loadFacebookScript();
  }, []);

  return (
    <div>
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="111042668284318" />




      <LoginSocialGoogle
        client_id={"466574679185-f40nphba1dbi8kq9hlh51cuuh05ufhhg.apps.googleusercontent.com"}
        scope="openid profile email"
        discoveryDocs="claims_supported"
        access_type="offline"
        onResolve={({ provider, data }) => {
          console.log(provider, data);
        }}
        onReject={(err) => {
          console.log(err);
        }}
      >
        <GoogleLoginButton />
      </LoginSocialGoogle>
    </div>
  );
}

export default App;
