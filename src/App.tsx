import { useState, useRef } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import comicMe from "./assets/images/comic-inspired-me.webp";
import superComicMe from "./assets/images/superhero-comic-inspired-me.webp";
import bam from "./assets/images/bam.webp";
import bang from "./assets/images/bang.webp";
import boom from "./assets/images/boom.webp";
import pow from "./assets/images/pow.webp";
import send from "./assets/images/send.webp";
import sendHover from "./assets/images/send-hover.webp";
import minus from "./assets/images/minus.webp";
import plus from "./assets/images/plus.webp";
import SuccessfulSubmission from "./helpers/SuccessfulSubmission";

function App() {
  const [isSuperComicImage, setIsSuperComicImage] = useState(false);
  const [isSendButtonHovered, setIsSendButtonHovered] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [userWantsSimplifiedFont, setUserWantsSimplifiedFont] = useState(false);
  const [showDetails, setShowDetails] = useState({
    about: false,
    paradigm: false,
    indieBookVault: false,
    selfEmployed: false,
    sentara: false,
  });
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const service = import.meta.env.VITE_SERVICE_ID;
  const template = import.meta.env.VITE_TEMPLATE_ID;

  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setDisplaySuccess(true);
        },
        (error) => {
          alert(`Message failed. Error: ${error.text}`);
        },
      );
  };

  const toggleComicImage = () => {
    setIsSuperComicImage(!isSuperComicImage);
  };

  const toggleSendButtonHover = () => {
    setIsSendButtonHovered(!isSendButtonHovered);
  };

  const toggleComicFont = () => {
    setUserWantsSimplifiedFont(!userWantsSimplifiedFont);
  };

  const toggleDetails = (section: keyof typeof showDetails) => {
    setShowDetails((previous) => ({
      ...previous,
      [section]: !previous[section],
    }));
  };

  return (
    <>
      {displaySuccess && <SuccessfulSubmission />}
      <header>
        <h1>
          Dicky Kitchen Jr - <br className="only-show-on-small-screens" />
          Developer Extraordinaire
        </h1>
        <p className="h1-subheader">
          The talented developer with the unique name.
        </p>
      </header>
      <main className="content-tabs">
        <div className="font-button-div">
          {!userWantsSimplifiedFont ? (
            <button className="simple-font-button" onClick={toggleComicFont}>
              Simplify Font
            </button>
          ) : (
            <button className="comic-font-button" onClick={toggleComicFont}>
              Comic Book Font
            </button>
          )}
        </div>
        <section className="comic-box left-right">
          <div>
            <h2>About</h2>
            <p
              className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
            >
              TLDR: Super(hero) developer with applicable experience from over a
              decade in a previous career who brings more to the table than your
              typical developer.
            </p>
            {showDetails.about ? (
              <button
                className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                onClick={() => toggleDetails("about")}
              >
                Hide Details
                <img
                  className="show-hide-image"
                  src={minus}
                  alt="minus icon"
                  loading="lazy"
                />
              </button>
            ) : (
              <button
                className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                onClick={() => toggleDetails("about")}
              >
                Show Details
                <img
                  className="show-hide-image"
                  src={plus}
                  alt="plus icon"
                  loading="lazy"
                />
              </button>
            )}
            {showDetails.about && (
              <>
                <p
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  If you are looking for my skills, work history, or projects,
                  you can find it by scrolling down. But if you want to know
                  about what makes me more than just another developer, keep
                  reading.
                </p>
                <p
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  What makes me unique, besides my name and that you can hover
                  over me to see me as a superhero, is that I'm a career changer
                  coming from a field where problem-solving was key to success;
                  giving me over a decade of experience using the same skills I
                  apply to software development to solve complex problems and
                  create solutions that make a difference in people's lives.
                </p>
                <p
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  The skills I gained in patient care transfer directly to
                  software development (understanding the needs of the
                  user/patient, diagnosing issues, and planning/implementing
                  clean solutions), giving me significantly more experience than
                  another software developer with my years in the field.
                </p>
                <p
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  Meaning you not only get a skilled developer who cares about
                  creating software that improves people's lives when you hire
                  me, but also someone with more real-world problem-solving
                  experience than you'd expect.
                </p>
                <p
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  For proof of my claims, I invite you to check out the list of
                  recommendations I've received from colleagues and clients on
                  my{" "}
                  <a
                    className={`resume-link ${userWantsSimplifiedFont && "simple-font"}`}
                    href="https://www.linkedin.com/in/dicky-kitchen-jr-89727b240/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn profile.
                  </a>
                </p>
              </>
            )}
          </div>
          <img
            className="comic-me"
            src={isSuperComicImage ? superComicMe : comicMe}
            alt="a comic inspired image of Dicky Kitchen Jr"
            onMouseEnter={toggleComicImage}
            onMouseLeave={toggleComicImage}
          />
        </section>
        <section className="comic-box skills-box">
          <div>
            <h2>Skills</h2>
            <p className="write-up skills">
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ React.js
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ JavaScript
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ TypeScript
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ C#/.NET
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ Blazor
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ Jest
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ React Router
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ Next.js
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ SQL
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ Node.js
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ Express.js
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ MySQL
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ MS SQL Server
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ HTML
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ CSS
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ Git
              </span>{" "}
              <span className={`${userWantsSimplifiedFont && "simple-font"}`}>
                ❖ GitHub Copilot
              </span>
            </p>
          </div>
          <img className="comic-word" src={bam} alt="comic style BAM" />
        </section>
        <section className="comic-box decreased-padding">
          <div>
            <h2>Resume</h2>
            <div className="added-margin-border">
              <h3
                className={`write-up resume-date ${userWantsSimplifiedFont && "simple-font"}`}
              >
                July 2024 - March 2026
              </h3>
              <p
                className={`write-up resume-company ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Paradigm-Corp, Inc.
              </p>
              <p
                className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              >
                .NET Developer (Front-end focused)
              </p>
              {showDetails.paradigm ? (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("paradigm")}
                >
                  Hide Details
                  <img
                    className="show-hide-image"
                    src={minus}
                    alt="minus icon"
                    loading="lazy"
                  />
                </button>
              ) : (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("paradigm")}
                >
                  Show Details
                  <img
                    className="show-hide-image"
                    src={plus}
                    alt="plus icon"
                    loading="lazy"
                  />
                </button>
              )}
              {showDetails.paradigm && (
                <ul className="resume-ul">
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Introduced React.js to the team, providing a modular,
                    light-weight approach to rewriting legacy projects
                    originally created in MVC
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Using React.js, took on 2 projects for new initiatives
                    within the company and created the repos for those projects,
                    provided the boilerplate code for the backend, and developed
                    90% of the front-end for one and 80% of the front-end for
                    the other before being asked to hand off the projects for
                    completion by a junior member of the team so I could be
                    reassigned to a higher priority project using Blazor
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Worked within C#/.NET projects to implement updates driven
                    by project owner requests
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Created a default CSS file and component library to provide
                    a cohesive aesthetic across projects while providing
                    reusable components to decrease recoding of existing
                    elements
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Ran queries using MS SQL Server to verify information
                    showing on the front-end was correct
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Mentored a new front-end developer; acting as their point of
                    contact for questions regarding company standards and coding
                    difficulties within their assigned projects, and mentored a
                    designer who was attempting to become a front-end developer
                  </li>
                </ul>
              )}
            </div>
            <div className="added-margin-border">
              <h3
                className={`write-up resume-date ${userWantsSimplifiedFont && "simple-font"}`}
              >
                May 2023 - May 2025
              </h3>
              <p
                className={`write-up resume-company ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Indie Book Vault
              </p>
              <p
                className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Software Developer/Creator/Owner
              </p>
              {showDetails.indieBookVault ? (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("indieBookVault")}
                >
                  Hide Details
                  <img
                    className="show-hide-image"
                    src={minus}
                    alt="minus icon"
                    loading="lazy"
                  />
                </button>
              ) : (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("indieBookVault")}
                >
                  Show Details
                  <img
                    className="show-hide-image"
                    src={plus}
                    alt="plus icon"
                    loading="lazy"
                  />
                </button>
              )}
              {showDetails.indieBookVault && (
                <ul className="resume-ul">
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Conceived, developed, and deployed a full-stack, multi-page
                    website using React.js, React Router, Node.js, Express.js,
                    and MySQL which served the indie author community by
                    providing a place for readers to discover and support
                    independent authors
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Achieved a substantial user base, with over 300 users at its
                    peak using only organic social media promotion and
                    word-of-mouth
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Incorporated the Fisher-Yates algorithm to randomize author
                    listings on each visit, ensuring fair exposure for all
                    authors and helping improve the chance of a reader finding a
                    new author; using Jest to test efficiency of the algorithm
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Integrated a user-friendly form with multiple checks and
                    validations to ensure proper formatting of information
                    provided on the form while protecting the database from
                    malicious actors
                  </li>
                </ul>
              )}
            </div>
            <div className="added-margin-border">
              <h3
                className={`write-up resume-date ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Jan 2022 - July 2024
              </h3>
              <p
                className={`write-up resume-company ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Self-employed
              </p>
              <p
                className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Software Developer
              </p>
              {showDetails.selfEmployed ? (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("selfEmployed")}
                >
                  Hide Details
                  <img
                    className="show-hide-image"
                    src={minus}
                    alt="minus icon"
                    loading="lazy"
                  />
                </button>
              ) : (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("selfEmployed")}
                >
                  Show Details
                  <img
                    className="show-hide-image"
                    src={plus}
                    alt="plus icon"
                    loading="lazy"
                  />
                </button>
              )}
              {showDetails.selfEmployed && (
                <ul className="resume-ul">
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Used React.js, JavaScript/TypeScript, HTML and CSS to create
                    customer websites based on their designs and requests,
                    guiding them through accessibility and responsiveness
                    concepts to ensure the best user experience
                  </li>
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Integrated 3rd party plug-ins to enhance customer websites
                    and add shopping functionality to the customers website for
                    their distributor of choice
                  </li>
                </ul>
              )}
            </div>
            <div className="added-margin-border">
              <h3
                className={`write-up resume-date ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Jun 2008 - Dec 2021
              </h3>
              <p
                className={`write-up resume-company ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Sentara Healthcare
              </p>
              <p
                className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Physical Therapist Assistant
              </p>
              {showDetails.sentara ? (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("sentara")}
                >
                  Hide Details
                  <img
                    className="show-hide-image"
                    src={minus}
                    alt="minus icon"
                    loading="lazy"
                  />
                </button>
              ) : (
                <button
                  className={`write-up show-hide-details-button ${userWantsSimplifiedFont && "simple-font"}`}
                  onClick={() => toggleDetails("sentara")}
                >
                  Show Details
                  <img
                    className="show-hide-image"
                    src={plus}
                    alt="plus icon"
                    loading="lazy"
                  />
                </button>
              )}
              {showDetails.sentara && (
                <ul className="resume-ul">
                  <li
                    className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                  >
                    Worked in hospital and home care settings to provide
                    physical therapy needs to patients using similar planning,
                    problem-solving, and communication skills currently used as
                    a software developer
                  </li>
                </ul>
              )}
            </div>
            <div className="resume-links-div">
              <p
                className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              >
                If you would like to see certifications I have earned, you can
                view a list of{" "}
                <a
                  className={`resume-link ${userWantsSimplifiedFont && "simple-font"}`}
                  href="https://certificates.dickykitchen.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  various certifications here
                </a>{" "}
                or a long list of certifications{" "}
                <a
                  className={`resume-link ${userWantsSimplifiedFont && "simple-font"}`}
                  href="https://www.codecademy.com/users/dickykitchenjr/achievements"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  from Codecademy here
                </a>
                .
              </p>
            </div>
          </div>
          <img
            loading="lazy"
            className="comic-word"
            src={pow}
            alt="comic style POW"
          />
        </section>
        <section className="comic-box decreased-padding">
          <div>
            <h2>Personal Projects</h2>
            <div className="added-margin-border">
              <h3
                className={`write-up project-name ${userWantsSimplifiedFont && "simple-font"}`}
              >
                My Math Practice
              </h3>
              <a
                className={`write-up project-link ${userWantsSimplifiedFont && "simple-font"}`}
                href="https://my-math-practice.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                my-math-practice.com
              </a>
              <ul className="resume-ul">
                <li
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  A math program designed to provide parents and teachers and
                  easy way to create quick, customizable practice sessions for
                  kids in the elementary/kindergarten age range
                </li>
                <li
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  developed using React.js, JavaScript/TypeScript, HTML, and CSS
                </li>
                <li
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  Project Repo -{" "}
                  <a
                    className={`write-up project-link ${userWantsSimplifiedFont && "simple-font"}`}
                    href="https://github.com/DickyKitchenJr/math-practice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3
                className={`write-up project-name ${userWantsSimplifiedFont && "simple-font"}`}
              >
                Author Website
              </h3>
              <a
                className={`write-up project-link ${userWantsSimplifiedFont && "simple-font"}`}
                href="https://dickykitchenjr.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                dickykitchenjr.com
              </a>
              <ul className="resume-ul">
                <li
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  A multi-page site I created to show readers my books and blogs
                  pertaining to my side hobby of fictional writing
                </li>
                <li
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  developed using React.js, JavaScript/TypeScript, HTML, and CSS
                </li>
                <li
                  className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
                >
                  Project Repo -{" "}
                  <a
                    className={`write-up project-link ${userWantsSimplifiedFont && "simple-font"}`}
                    href="https://github.com/DickyKitchenJr/author-site-version-2/tree/main/author-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <img
            loading="lazy"
            className="comic-word"
            src={bang}
            alt="comic style BANG"
          />
        </section>
        <section className="comic-box">
          <div>
            <h2>Contact</h2>
          </div>
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label
              className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              htmlFor="user_name"
            >
              Name:
            </label>
            <input
              value={formData.user_name}
              onChange={handleChange}
              className={`write-up contact-input ${userWantsSimplifiedFont && "simple-font"}`}
              type="text"
              name="user_name"
              id="user_name"
              required
            />
            <label
              className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              htmlFor="user_email"
            >
              Email:
            </label>
            <input
              value={formData.user_email}
              onChange={handleChange}
              className={`write-up contact-input ${userWantsSimplifiedFont && "simple-font"}`}
              type="email"
              name="user_email"
              id="user_email"
              required
            />
            <label
              className={`write-up ${userWantsSimplifiedFont && "simple-font"}`}
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              value={formData.message}
              onChange={handleChange}
              className={`write-up contact-input ${userWantsSimplifiedFont && "simple-font"}`}
              name="message"
              id="message"
              required
            />
            <button className="write-up submit-button" type="submit">
              <img
                loading="lazy"
                onMouseEnter={toggleSendButtonHover}
                onMouseLeave={toggleSendButtonHover}
                className="comic-submit"
                src={isSendButtonHovered ? sendHover : send}
                alt="comic style SEND"
              />
            </button>
          </form>
          <img
            loading="lazy"
            className="comic-word"
            src={boom}
            alt="comic style BOOM"
          />
        </section>
      </main>
    </>
  );
}

export default App;
