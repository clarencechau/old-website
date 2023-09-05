import Footer from "../Footer";
import "./About.css";
import MiniCard from "../MiniCard";

function About() {
  return (
    <>
      <div className="about">
        <div className="sides">
          <img className="picture" src="../images/picture2.jpg" />
          <img className="picture" src="../images/picture3.jpg" />

          <div className="information">
            <h1>Hi, I'm Clarence. Nice to meet you.</h1>
            <div className="who-am-i">
              <h3>
                From a young age, I've been deeply passionate about learning, creativity, and innovation.
                {" "}
              </h3>
              <h3>
                The discipline and resilience I've honed through my athletic pursuits have greatly influenced my enthusiasm for software development.
              </h3>
              <h3>
                With a track record of building impactful software solutions, I'm confident in my capacity to learn quickly, apply my skills effectively, and contribute to the success of any team I join.

              </h3>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="about-me-title">About Me</div>
          <div className="things-i-enjoy">
            <MiniCard
              image="fa fa-trophy"
              title=""
              description="National badminton player, currently ranked third in Canada for U23 boys doubles"
              direction="left"
            />
            <MiniCard
              image="fa fa-spotify"
              title="Music"
              description="My favourite musical artists are Drake, The Weeknd, and PARTYNEXTDOOR"
              direction="right"
            />
            <MiniCard
              image="fa fa-glasses"
              title="Learning"
              description="Currently a part time student at the University of Toronto studying computer science and math"
              direction="left"
            />
            <MiniCard
              image="fa fa-city"
              title="Being Adventurous"
              description="Based in downtown Toronto, where I love to go out with friends and explore the city"
              direction="right"
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
