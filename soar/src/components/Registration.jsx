import { addUser } from "./firebase";

const Registration = () => {

  return (
    <head>
      <title>Account Registration</title>
    </head>,

    <>
      <main>
      
        <p>User Information</p>
          <form /*action="http://localhost:3500/newpost" method="post"*/>
            <p>First Name:</p>
            <input id="first_name_input"/>
            <p>Last Name:</p>
            <input id="last_name_input"/>
            <p>Organization:</p>
            <input type="text" list="organizations" />
              <datalist id="organizations">
                <option>University of Florida</option>
                <option>InfoTech</option>
              </datalist>
            <p>Username:</p>
            <input id="username_input"/>
            <p>Email:</p>
            <input id="email_input"/>
            <p>Password:</p>
            <input id="password_input"/>
            <p>Confirm password:</p>
            <input id="confirm_password_input"/>    
            <input type="submit" id="submit-button"/>
          </form>
          <script>
            {
            /*document.getElementById("submit-btn").addEventListener("click", function (event) {
              console.log("checking valid fields");
              const registration_elements = document.querySelectorAll("first_name_input",
                "last_name_input","organizations","username_input","email_input","password_input","confirm_password_input")
              for (let i=0; i<registration_elements; i++) {
                  if (registration_elements[i] = null) {
                    alert("Please fill out all text boxes.");
                    event.preventDefault();
                  };
              };
                event.preventDefault();
            })
            */}
          </script>
      </main>
    </>
  )
}

export default Registration;
