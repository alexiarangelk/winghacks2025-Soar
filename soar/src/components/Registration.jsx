import { auth, addUser } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom'
import '../registration.css';
import { or } from "firebase/firestore";
import RegistrationDoodle from '../assets/registration-doodle-plane.png';

const Registration = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // submit function
  async function submit(formData) {

    console.log(`${user.uid} is submitting`);

      const firstName = formData.get("first_name_input");
      const lastName = formData.get("last_name_input");
      const limitOrg = formData.get("limitorg");

      const universityOfFlorida = formData.get("University_of_Florida");
      const jPMorganChaseCo = formData.get("JP_Morgan_Chase_&_Co.");
      const bNYMellon = formData.get("BNY_Mellon");
      const softwareEngineering = formData.get("Software_Engineering");
      const organizations = [];
      if (universityOfFlorida != null){
        organizations.push(universityOfFlorida);
      }
      if (jPMorganChaseCo != null){
        organizations.push(jPMorganChaseCo);
      }
      if (bNYMellon != null){
        organizations.push(bNYMellon);
      }
      if (softwareEngineering != null){
        organizations.push(softwareEngineering);
      }

      const mentor = formData.get("mentor");
      const mentee = formData.get("mentee");
      let position = null;
      if (mentor != null){
        position = "mentor";
      }
      else if (mentee != null){
        position = "mentee";
      }

      const matchingSequence = [];
      document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
        if (checkbox.name != "University_of_Florida"
          && checkbox.name != "JP_Morgan_Chase_&_Co."
          && checkbox.name != "BNY_Mellon"
          && checkbox.name != "Software_Engineering"
        ){
          matchingSequence.push(checkbox.checked); // true if checked, false otherwise
        }
      });

      const err = await addUser(user.uid, user.displayName, user.email, firstName, lastName,
        organizations, position, limitOrg, matchingSequence
      );
      if (err){
        //handle the error
      }
      else{
        navigate('/Community');
      }

  }

      // const submit = async (formData) => {
      //     console.log(`${user.uid} is submitting`);

      //     const firstName = formData.get("first_name_input");
      //     const lastName = formData.get("last_name_input");
      //     console.log(`${firstName} and ${lastName}`);

      //     const err = await addUser(user.uid, user.displayName, user.email, "Alexia", "RK");
      //     if (err){
      //       //handle the error
      //     }
      //     else{
      //       navigate('/Community');
      //     }
      // };
  
  return (
    <head>
      <title>Account Registration</title>
    </head>,

    <div className="form">
    <div className="design"> 
      <img className="registration-pic" src={RegistrationDoodle}/>
    </div>
    <div className="registration">
      <main>
        <h1 className="Title">Matchmaking Info</h1>
          <form action={submit}/*action="/another_rout_nav_to"*/>
            <input name="first_name_input" placeholder="First Name" className="input"/>
            <input name="last_name_input" placeholder="Last Name" className="input"/>
            <label>Choose your organization:</label>
            <input type="checkbox" id="University_of_Florida" name="University_of_Florida" value="University_of_Florida"/>
            <label htmlFor="University_of_Florida">University of Florida</label><br/>
            <input type="checkbox" id="JP_Morgan_Chase_&_Co." name="JP_Morgan_Chase_&_Co." value="JP_Morgan_Chase_&_Co."/>
            <label htmlFor="JP_Morgan_Chase_&_Co.">JP Morgan Chase & Co.</label><br/>
            <input type="checkbox" id="BNY_Mellon" name="BNY_Mellon" value="BNY_Mellon"/>
            <label htmlFor="BNY_Mellon">BNY Mellon</label><br/>
            <input type="checkbox" id="Software_Engineering" name="Software_Engineering" value="BNY_Mellon"/>
            <label htmlFor="Software_Engineering">Software Engineering</label><br/>

            <p>Mentor/Mentee Questionnaire</p>

            <p>Are you a mentor or a mentee?</p>
            <input type="radio" id="mentor" name="mentor" value="mentor"/>
            <label htmlFor="mentor">Mentor</label><br/>
            <input type="radio" id="mentee" name="mentee" value="mentee"/>
            <label htmlFor="mentee">Mentee</label><br/>
    
            <p>Limit your match to mentors or mentees in your organization?</p>
            <input type="checkbox" id="limitorg" name="limitorg" value="limitorg"/>
            <label htmlFor="limitorg">Yes, I only want to match to mentors/mentees in my organization.</label><br/>
            
            <p>What industry are you currently in or interested in?</p>
            <input type="checkbox" id="technology" name="technology" value="technology"/>
            <label htmlFor="technology">Technology</label><br/>
            <input type="checkbox" id="finance" name="finance" value="finance"/>
            <label htmlFor="finance">Finance</label><br/>
            <input type="checkbox" id="healthcare" name="healthcare" value="healthcare"/>
            <label htmlFor="healthcare">Healthcare</label><br/>
            <input type="checkbox" id="marketing" name="marketing" value="marketing"/>
            <label htmlFor="marketing">Marketing & Advertising</label><br/>
            <input type="checkbox" id="education" name="education" value="education"/>
            <label htmlFor="education">Education</label><br/>
    
            <p>What kind of work setting are you interested in?</p>
            <input type="checkbox" id="startups" name="startups" value="startups"/>
            <label htmlFor="startups">Startups</label><br/>
            <input type="checkbox" id="corporate" name="corporate" value="corporate"/>
            <label htmlFor="corporate">Corporate</label><br/>
            <input type="checkbox" id="remote" name="remote" value="remote"/>
            <label htmlFor="remote">Remote work</label><br/>
            <input type="checkbox" id="government" name="government" value="government"/>
            <label htmlFor="government">Government</label><br/>
            <input type="checkbox" id="academia" name="academia" value="academia"/>
            <label htmlFor="academia">Academia</label><br/>
    
            <p>What motivates you the most in your professional journey?</p>
            <input type="checkbox" id="impact" name="impact" value="impact"/>
            <label htmlFor="impact">Impact</label><br/>
            <input type="checkbox" id="growth" name="growth" value="growth"/>
            <label htmlFor="growth">Personal growth</label><br/>
            <input type="checkbox" id="financial" name="financial" value="financial"/>
            <label htmlFor="financial">Financial success</label><br/>
            <input type="checkbox" id="workLifeBalance" name="workLifeBalance" value="workLifeBalance"/>
            <label htmlFor="workLifeBalance">Work-life balance</label><br/>
    
            <p>What type of personality do you work best with?</p>
            <input type="checkbox" id="supportive" name="supportive" value="supportive"/>
            <label htmlFor="supportive">Supportive</label><br/>
            <input type="checkbox" id="independent" name="independent" value="independent"/>
            <label htmlFor="independent">Independent</label><br/>
            <input type="checkbox" id="structured" name="structured" value="structured"/>
            <label htmlFor="structured">Structured</label><br/>
            <input type="checkbox" id="spontaneous" name="spontaneous" value="spontaneous"/>
            <label htmlFor="spontaneous">Spontaneous</label><br/>
    
            <p>What type of mentor are you looking for or what type of mentorship are you looking to offer?</p>
            <input type="checkbox" id="industryExpertise" name="industryExpertise" value="industryExpertise"/>
            <label htmlFor="industryExpertise">Industry-specific expertise</label><br/>
            <input type="checkbox" id="generalAdvice" name="generalAdvice" value="generalAdvice"/>
            <label htmlFor="generalAdvice">General career advice</label><br/>
            <input type="checkbox" id="leadership" name="leadership" value="leadership"/>
            <label htmlFor="leadership">Leadership</label><br/>
            <input type="checkbox" id="careerChallenges" name="careerChallenges" value="careerChallenges"/>
            <label htmlFor="careerChallenges">Support in overcoming major career challenges</label><br/>
    
            <p>What qualities would you most appreciate in a mentor or what qualities do you exhibit as a mentor?</p>
            <input type="checkbox" id="empathy" name="empathy" value="empathy"/>
            <label htmlFor="empathy">Empathy</label><br/>
            <input type="checkbox" id="patience" name="patience" value="patience"/>
            <label htmlFor="patience">Patience</label><br/>
            <input type="checkbox" id="experience" name="experience" value="experience"/>
            <label htmlFor="experience">Experience</label><br/>
            <input type="checkbox" id="honesty" name="honesty" value="honesty"/>
            <label htmlFor="honesty">Honesty</label><br/>
            <input type="checkbox" id="directness" name="directness" value="directness"/>
            <label htmlFor="directness">Directness</label><br/>
    
            <p>How often are you looking to engage with your mentor/mentee?</p>
            <input type="checkbox" id="weekly" name="weekly" value="weekly"/>
            <label htmlFor="weekly">Weekly</label><br/>
            <input type="checkbox" id="biweekly" name="biweekly" value="biweekly"/>
            <label htmlFor="biweekly">Bi-weekly</label><br/>
            <input type="checkbox" id="monthly" name="monthly" value="monthly"/>
            <label htmlFor="monthly">Monthly</label><br/>
            <input type="checkbox" id="asNeeded" name="asNeeded" value="asNeeded"/>
            <label htmlFor="asNeeded">As-needed</label><br/>
    
            <p>What is your preferred method of communication?</p>
            <input type="checkbox" id="videoCall" name="videoCall" value="videoCall"/>
            <label htmlFor="videoCall">Video call</label><br/>
            <input type="checkbox" id="email" name="email" value="email"/>
            <label htmlFor="email">Email</label><br/>
            <input type="checkbox" id="soarMessaging" name="soarMessaging" value="soarMessaging"/>
            <label htmlFor="soarMessaging">Soar direct messaging</label><br/>
            <input type="checkbox" id="phoneCall" name="phoneCall" value="phoneCall"/>
            <label htmlFor="phoneCall">Phone call</label><br/>

            <input type="submit" id="submit-button"/>

          </form>
      </main>
      </div>
    </div>
  )
}

export default Registration;
