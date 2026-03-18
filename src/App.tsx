import { useState } from "react";
import "./App.css";
import comicMe from "./assets/images/comic-inspired-me.png";
import superComicMe from "./assets/images/superhero-comic-inspired-me.png";
import bam from "./assets/images/bam.png";
import bang from "./assets/images/bang.png";
import boom from "./assets/images/boom.png";
import pow from "./assets/images/pow.png";

function App() {
  const [isSuperComicImage, setIsSuperComicImage] = useState(false);

  const toggleComicImage = () => {
    setIsSuperComicImage(!isSuperComicImage);
  };

  return (
    <>
      <header>
        <h1>Dicky Kitchen Jr - Developer Extraordinaire</h1>
        <p className="h1-subheader">
          The talented developer with the unique name.
        </p>
      </header>
      <div className="content-tabs">
        <div className="comic-box left-right">
          <div>
            <h2>About</h2>
            <p className="write-up">
              Starting my software developer career in 2022 after 13+ years
              working in healthcare, I began as a freelancer creating websites
              for various individuals, while running a website where indie and
              self-published authors could apply for listing, before joining
              Paradigm-Corp Inc in 2024 as a “.NET Developer” with a front-end
              focus.
            </p>
            <p className="write-up">
              With a passion for creating pixel perfect and accessible projects,
              I have worked on both customer facing and internal sites, on teams
              of over 20 IT professionals and as small as a solo developer.
            </p>
          </div>
          <img
            className="comic-me"
            src={isSuperComicImage ? superComicMe : comicMe}
            alt="a comic inspired image of Dicky Kitchen Jr"
            onMouseEnter={toggleComicImage}
            onMouseLeave={toggleComicImage}
          />
        </div>
        <div className="comic-box skills-box">
          <div>
            <h2>Skills</h2>
            <p className="write-up skills">
              <span>❖ React.js</span> <span>❖ JavaScript</span>{" "}
              <span>❖ TypeScript</span> <span>❖ C#/.NET</span>{" "}
              <span>❖ Blazor</span> <span>❖ Jest</span>{" "}
              <span>❖ React Router</span> <span>❖ Next.js</span>{" "}
              <span>❖ SQL</span> <span>❖ Node.js</span>{" "}
              <span>❖ Express.js</span> <span>❖ MySQL</span>{" "}
              <span>❖ MS SQL Server</span> <span>❖ HTML</span>{" "}
              <span>❖ CSS</span> <span>❖ Git</span>
            </p>
          </div>
          <img className="comic-word" src={bam} alt="comic style BAM" />
        </div>
        <div className="comic-box decreased-padding">
          <div>
            <h2>Resume</h2>
            <div className="added-margin-border">
              <p className="write-up">July 2024 - March 2026</p>
              <p className="write-up">Paradigm-Corp, Inc.</p>
              <p className="write-up">.NET Developer (Front-end focused)</p>
              <ul className="resume-ul">
                <li className="write-up">
                  Introduced React.js to the team, providing a modular,
                  light-weight approach to rewriting legacy projects originally
                  created in MVC
                </li>
                <li className="write-up">
                  Using React.js, took on 2 projects for new initiatives within
                  the company and created the repos for those projects, provided
                  the boilerplate code for the backend, and developed 90% of the
                  front-end for one and 80% of the front-end for the other
                  before being asked to hand off the projects for completion by
                  a junior member of the team so I could be reassigned to a
                  higher priority project using Blazor
                </li>
                <li className="write-up">
                  Worked within C#/.NET projects to implement updates driven by
                  project owner requests
                </li>
                <li className="write-up">
                  Created a default CSS file and component library to provide a
                  cohesive aesthetic across projects while providing reusable
                  components to decrease recoding of existing elements
                </li>
                <li className="write-up">
                  Ran queries using MS SQL Server to verify information showing
                  on the front-end was correct
                </li>
                <li className="write-up">
                  Mentored a new front-end developer; acting as their point of
                  contact for questions regarding company standards and coding
                  difficulties within their assigned projects, and mentored a
                  designer who was attempting to become a front-end developer
                </li>
              </ul>
            </div>
            <div className="added-margin-border">
              <p className="write-up">May 2023 - May 2025</p>
              <p className="write-up">Indie Book Vault</p>
              <p className="write-up">Software Developer/Creator/Owner</p>
              <ul className="resume-ul">
                <li className="write-up">
                  Conceived, developed, and deployed a full-stack, multi-page
                  website using React.js, React Router, Node.js, Express.js, and
                  MySQL which served the indie author community by providing a
                  place for readers to discover and support independent authors
                </li>
                <li className="write-up">
                  Achieved a substantial user base, with over 300 users at its
                  peak using only organic social media promotion and
                  word-of-mouth
                </li>
                <li className="write-up">
                  Incorporated the Fisher-Yates algorithm to randomize author
                  listings on each visit, ensuring fair exposure for all authors
                  and helping improve the chance of a reader finding a new
                  author; using Jest to test efficiency of the algorithm
                </li>
                <li className="write-up">
                  Integrated a user-friendly form with multiple checks and
                  validations to ensure proper formatting of information
                  provided on the form while protecting the database from
                  malicious actors
                </li>
              </ul>
            </div>
            <div>
              <p className="write-up">Jan 2022 - July 2024</p>
              <p className="write-up">Self-employed</p>
              <p className="write-up">Software Developer</p>
              <ul className="resume-ul">
                <li className="write-up">
                  Used React.js, JavaScript/TypeScript, HTML and CSS to create
                  customer websites based on their designs and requests, guiding
                  them through accessibility and responsiveness concepts to
                  ensure the best user experience
                </li>
                <li className="write-up">
                  Integrated 3rd party plug-ins to enhance customer websites and
                  add shopping functionality to the customers website for their
                  distributor of choice
                </li>
              </ul>
            </div>
            <div>
              <p className="write-up">Jun 2008 - Dec 2021</p>
              <p className="write-up">Sentara Healthcare</p>
              <p className="write-up">Physical Therapist Assistant</p>
              <ul className="resume-ul">
                <li className="write-up">
                  Worked in hospital and home care settings to provide physical
                  therapy needs to patients using similar problem-solving skills
                  currently used as a software developer
                </li>
              </ul>
            </div>
          </div>
          <img className="comic-word" src={pow} alt="comic style POW" />
        </div>
        <div className="comic-box">
          <div>
            <h2>Certifications</h2>
          </div>
          <img className="comic-word" src={bang} alt="comic style BANG" />
        </div>
        <div className="comic-box">
          <div>
            <h2>Contact</h2>
          </div>
          <img className="comic-word" src={boom} alt="comic style BOOM" />
        </div>
      </div>
    </>
  );
}

export default App;
