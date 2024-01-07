import Interests from './components/interests.jsx';
import Card from './components/Card.jsx';
import Intro from './components/intro.jsx';
import SocialMediaButtons from './components/socialMediaButton.jsx';

function App() {
const arr = ["Web Development" , "open SOurce ","Dev-Ops", "MERN development"];
const arr2 = ["Linkedin","Twitter","Gmail","Github","Leetcode"];
  return (
    <div>
      <Card>
        <Intro Name = {"Shivam Jagtap"} Description = {"A Student at 100xDevs cohort"} />
        <Interests arr = {arr}/>
        <SocialMediaButtons arr2 = {arr2} />
      </Card>     
{/* 
      <Card>
        <Intro Name = {"Shreya"} Description = {"A Student at 10th std"} />
        <Interests arr = {["Dancing" , "Watching TV"]}/>
        <SocialMediaButtons arr2 = {["Github"]} />
      </Card>

      <Card>
        <Intro Name = {"Chinmay Jagtap"} Description = {"Working as a product engineer at Infosys"} />
        <Interests arr = {["Eating 😂" , "Watching TV" , "Cricket" , "Sleeping"]}/>
        <SocialMediaButtons arr2 = {["Github","Linkedin","Github"]} />
      </Card> */}
    </div>
  )
}


export default App
