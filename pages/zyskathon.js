import Link from "next/link";
import { React } from "react";

const zyskathon = () => {
  // Const [activeSection, setActiveSection] = useState(null);

  // Const toggleSection = (sectionName) => {
  //     SetActiveSection(sectionName);
  // };

  let toggleSection = (sectionId) => {
    const sections = document.querySelectorAll(".content-section");

    sections.forEach((section) => {
      if (section.id === sectionId) section.classList.add("active");
      else section.classList.remove("active");
    });
  };

  return (
    <>
      <div className="maincontainer">
        <header className="zyskheader">
          <h1 className="heading">ZyskaThon - 2023</h1>
          <div className="prize-sticker">
            <Link href="/">
              <a>
                <img
                  className="h-14 w-auto sm:h-16"
                  src="/img/logo.png"
                  alt="Zysk Technologies"
                />
              </a>
            </Link>
          </div>
        </header>

        <main>
          <div className="left-sidebar">
            <h3 className="italic italicdown">Prize Pool: &#x20B9;40,000</h3>
            <span
              style={{
                fontWeight: "bold",
                color: "#FF4B4B",
                marginBottom: "20px",
              }}
            >
              Unleash Innovation at the Hackathon! 🚀
            </span>
            <p className="left-sidebar-content">
              Get set for an incredible hackathon where creativity, innovation,
              and problem-solving meet for an impressive ₹40,000 prize pool!
              Join us in pushing tech boundaries through coding, design, and
              invention. Whether your skill is coding, designing, or ideation,
              this is your time to shine. Network with pros, learn from mentors,
              and impress our judges. Ready to shape the future? Secure your
              spot now to win big!
            </p>
          </div>

          <div className="container">
            <div className="navbar">
              <div className="button-container">
                <button
                  onClick={() => toggleSection("introduction")}
                  className="button"
                >
                  Introduction
                </button>
                <button
                  onClick={() => toggleSection("teams")}
                  className="button"
                >
                  Teams
                </button>
                <button
                  onClick={() => toggleSection("topics")}
                  className="button"
                >
                  Topics
                </button>
                <button
                  onClick={() => toggleSection("guidance")}
                  className="button"
                >
                  Evaluation Guideline
                </button>
                <button
                  onClick={() => toggleSection("rulebook")}
                  className="button"
                >
                  Rulebook
                </button>
                <button
                  onClick={() => toggleSection("support")}
                  className="button"
                >
                  Support
                </button>
              </div>
            </div>

            <div className="box">
              <section className="active content-section">
                <div>
                  <img src="/geek2.gif" alt="image1" />
                </div>
              </section>

              <section id="introduction" className="content-section">
                <h2 className="italic">Introduction </h2>

                <article>
                  {/* <!-- <h2></h2> --> */}
                  <p className="welcome-heading">🌟 Welcome to ZyskaThon! 🌟</p>

                  <p className="welcome-message" style={{ marginTop: "10px" }}>
                    Hello Team,
                    <br />
                    Mark your calendars! This September, we’re introducing a new
                    chapter in our Zysk journey — ZyskaThon!
                  </p>

                  <div
                    className="welcome-details"
                    style={{ marginTop: "10px" }}
                  >
                    <p>
                      <strong>📅 When:</strong> 22nd September
                    </p>

                    <p>
                      <strong>📍 Where:</strong> Zysk Technologies, Vijayanagara
                    </p>
                  </div>

                  <p className="welcome-vision" style={{ marginTop: "10px" }}>
                    <strong>🎯 The ZyskaThon Vision:</strong>
                    For many, this is a first-ever hackathon experience.
                    ZyskaThon isn’t just about coding; it’s about learning,
                    growing, and understanding the magic that happens when
                    brilliant minds come together. As a team predominantly in
                    the early stages of our tech careers, this event will be a
                    platform to challenge ourselves, to see the power of
                    collaboration, and most importantly, to enjoy the journey of
                    creation.
                  </p>

                  <p
                    className="welcome-experience"
                    style={{ marginTop: "10px" }}
                  >
                    <strong>🚀 The Experience:</strong>
                  </p>

                  <ul className="welcome-experience-list">
                    <li>
                      Team Dynamics: The teams are set! This will be an
                      opportunity to blend your skills, learn from each other,
                      and shine together.
                    </li>

                    <li>
                      Diverse Challenges: We will soon reveal topics that
                      promise to engage, challenge, and inspire. Watch this
                      space!
                    </li>

                    <li>
                      Mentorship & Guidance: While this might be a first-time
                      experience for many, remember, every question, every idea,
                      and every line of code is a step forward.
                    </li>

                    <li>
                      Celebrate Achievements: From the smallest breakthrough to
                      the grandest idea, every achievement deserves a cheer!
                    </li>
                  </ul>

                  <p className="welcome-participation">
                    <strong>🤝 Participation:</strong>
                    Everyone is an integral part of ZyskaThon. With each one of
                    us having 1 to 3 years of experience on average, this event
                    is tailored to ensure everyone learns, contributes, and
                    grows.
                  </p>

                  <p
                    className="welcome-announcements"
                    style={{ marginTop: "10px" }}
                  >
                    <strong>🔔 Upcoming Announcements:</strong>
                    Stay tuned! The topics for our hackathon will be shared
                    soon.
                  </p>

                  <p className="welcome-dive-in" style={{ marginTop: "10px" }}>
                    <strong>📣 Lets Dive In!:</strong>
                    While this is a new experience, remember that innovation
                    does not come only from expertise—it comes from passion,
                    collaboration, and the will to explore. Let us make this
                    ZyskaThon a stepping stone to many more milestones in our
                    Zysk journey!
                  </p>

                  <p
                    className="welcome-questions"
                    style={{ marginTop: "10px" }}
                  >
                    For any questions, feedback, or excitement you want to
                    share, please reach out to The Change Agents
                    <a href="mailto:baee656c.zysk.tech@in.teams.ms">
                      baee656c.zysk.tech@in.teams.ms
                    </a>{" "}
                    or individual members of the team.
                  </p>

                  <p className="welcome-see-you">
                    See you all at ZyskaThon! Lets create, collaborate, and
                    celebrate!
                  </p>

                  <p className="welcome-regards" style={{ marginTop: "10px" }}>
                    Warmly,
                    <br />
                    The ZyskaThon Organizing Team
                  </p>
                </article>
              </section>

              <section id="guidance" className="content-section">
                <h2>Evaluation Guideline</h2>

                <p>Your guidance content goes here.</p>

                <article>
                  <h2>ZyskaThon Judges Evaluation Guideline</h2>

                  <ul>
                    <li>
                      <h3>Introduction:</h3>

                      <p>Dear Esteemed Judge,</p>

                      <p>Your expertise is invaluable to us.</p>

                      <p>
                        This guideline ensures consistent and fair evaluation.
                      </p>

                      <p>Assess each teams efforts using this guideline.</p>
                    </li>

                    <li>
                      <h3>Evaluation Criteria:</h3>

                      <ul>
                        <li>
                          <strong>Concept & Innovation (20 points):</strong>

                          <ul>
                            <li>
                              Does the project introduce a novel idea or an
                              innovative approach?
                            </li>

                            <li>
                              How original is the solution compared to existing
                              solutions?
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong>Design & User Experience (20 points):</strong>

                          <ul>
                            <li>How intuitive is the user interface?</li>

                            <li>
                              Is the design aesthetically pleasing and modern?
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong>Technical Implementation (20 points):</strong>

                          <ul>
                            <li>How well was the concept executed?</li>

                            <li>
                              Were there any notable technical challenges
                              overcome by the team?
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong>Relevance & Impact (20 points):</strong>

                          <ul>
                            <li>
                              How relevant is the solution to the proposed topic
                              or problem?
                            </li>

                            <li>
                              What potential impact does it have in the real
                              world?
                            </li>
                          </ul>
                        </li>

                        <li>
                          <strong>
                            Team Collaboration & Presentation (20 points):
                          </strong>

                          <ul>
                            <li>
                              How well did the team collaborate and integrate
                              individual strengths?
                            </li>

                            <li>
                              How effectively did the team present their project
                              and convey its significance?
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <h3>Key Points to Remember:</h3>

                      <ul>
                        <li>
                          Look beyond the flashiness — a simple project with
                          depth and a clear impact can be more valuable than a
                          complex but shallow one.
                        </li>

                        <li>
                          Remember the teams experience. Many of our
                          participants have 1-3 years of experience, so its
                          essential to assess effort, learning, and growth, not
                          just the result.
                        </li>

                        <li>
                          Keep the companys mission in mind: Beyond technical
                          prowess, think about how projects can help in creating
                          more job opportunities and make a societal difference.
                        </li>
                      </ul>
                    </li>

                    <li>
                      <h3>Feedback:</h3>

                      <p>
                        Providing feedback, both positive and areas for
                        improvement, is crucial. Each team can grow and learn
                        from your insights.
                      </p>
                    </li>

                    <li>
                      <h3>Timelines:</h3>

                      <p>
                        Each team has 3 minutes for presentation and 2 minutes
                        for a Q&A session.
                      </p>

                      <p>
                        Once all presentations are done, judges will have 30
                        minutes for discussion and final scoring.
                      </p>
                    </li>

                    <li>
                      <h3>Announcing Winners:</h3>

                      <p>
                        The final scores will determine the winner and
                        runner-up. Remember, we have prizes worth INR 40,000 for
                        the winners. Lets ensure our judgment reflects the best
                        choices for these accolades.
                      </p>

                      <p>
                        Thank you once again for helping shape the next
                        generation of coding talent at Zysk. Lets make ZyskaThon
                        a memorable experience for everyone!
                      </p>
                    </li>

                    <li>
                      <h3>Warm regards,</h3>

                      <p>The ZyskaThon Organizing Team</p>
                    </li>
                  </ul>
                </article>
              </section>

              <section id="rulebook" className="content-section">
                <h2 className="italic">Rulebook</h2>

                <article>
                  <h2>ZyskaThon Rulebook</h2>

                  <p className="rulebook-section">🌟 A Warm Welcome:</p>

                  <p>
                    Hello, Zysk family! Get ready to dive into ZyskaThon – our
                    very own coding fest. This is a time to bond, brainstorm,
                    and build amazing things together.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🤝 Participation:
                  </p>

                  <p>
                    Who’s In? All Zysk members. Because we believe in the power
                    of unity.
                  </p>

                  <p>
                    Team Formation: You are already grouped into teams. Thinking
                    of a switch? Just chat with the event organizers.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    📅 Mark the Calendar:
                  </p>

                  <p>
                    Its coding time from 22nd September, 10:00 AM till 23rd
                    Sept, 2:00 PM. Keep those dates free!
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🚀 The Challenge:
                  </p>

                  <p>
                    Excited about what you will be working on? Topics will be
                    out on [Date/Time].
                  </p>

                  <p>
                    Remember, let’s innovate from scratch. So, stuff you have
                    done before is not part of this.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🛠️ Toolkit:
                  </p>

                  <p>
                    You’re free to pick your favorite tech tools. Unless we
                    specifically ask you to stick to something, you’re in the
                    drivers seat.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    💡 Code Ownership:
                  </p>

                  <p>
                    Whatever cool stuff we create during ZyskaThon stays right
                    here with us at Zysk. And if you use someone else’s work,
                    just mention them – its the fair thing to do.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🤝 It’s All About Teamwork:
                  </p>

                  <p>
                    Combine your strengths, work together, and create magic.
                  </p>

                  <p>
                    We’re all about keeping it in the family – so no outside
                    help, please.
                  </p>

                  <p>
                    And a small reminder: Let’s be original and avoid copying.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🌟 Spotlight Moment:
                  </p>

                  <p>
                    Once we’re done coding, each team will have 3 minutes to
                    showcase their masterpiece. Theres also a 2-minute slot for
                    any questions.
                  </p>

                  <p>
                    We will be checking out how creative your ideas are, how
                    useful they could be, their design, and their impact.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    ❤️ Respect & Fun:
                  </p>

                  <p>
                    At Zysk, we believe in having fun the right way. That means
                    being nice, respecting everyone, and making sure everyone
                    feels included.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🏆 The Reward:
                  </p>

                  <p>
                    Top Spot: The best team walks away with INR 40,000 worth of
                    split among themselves.
                  </p>

                  <p>
                    Second Best: The next team is not left behind – they get INR
                    15,000.
                  </p>

                  <p>
                    And the cherry on top? Winners get a special Zysk
                    certificate and a big shout-out!
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    ❓ Got Questions?:
                  </p>

                  <p>
                    No worries! If you are ever in doubt or need some clarity,
                    the Change Agents team is there to help.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    📢 Staying Updated:
                  </p>

                  <p>
                    Sometimes, things change. If we tweak these rules, you will
                    be the first to know.
                  </p>

                  <p className="rulebook-section" style={{ marginTop: "10px" }}>
                    🎉 Lastly:
                  </p>

                  <p>
                    ZyskaThon is not just about coding. It is about coming
                    together as a family, having fun, and leaving with awesome
                    memories and learnings. Let’s make it a time to remember!
                  </p>
                </article>
              </section>

              <section id="support" className="content-section">
                <h2 className="italic">Support</h2>

                <article>
                  <h2>Need Assistance?</h2>

                  <p>
                    If you are in need of support or assistance during
                    ZyskaThon, our dedicated support team is here to help!
                  </p>

                  <p>Contact our support team for:</p>

                  <ul>
                    <li>
                      Technical Issues: If you encounter any technical
                      difficulties or need help with the event platform or
                      tools.
                    </li>

                    <li>
                      Questions: If you have any questions about the event, the
                      challenges, or any other aspect.
                    </li>

                    <li>
                      Feedback: If you have feedback to share or suggestions for
                      improvement, we would love to hear from you.
                    </li>
                  </ul>

                  <p>
                    To reach out to our support team, please email us at{" "}
                    <a href="mailto:baee656c.zysk.tech@in.teams.ms">
                      support@zyskathon.com
                    </a>
                    .
                  </p>

                  <p>
                    Our support team will do their best to assist you promptly
                    and ensure you have a smooth and enjoyable experience during
                    ZyskaThon!
                  </p>
                </article>
              </section>

              <section id="topics" className="content-section">
                <h2 className="italic">Topics</h2>

                <article>
                  <h2>ZyskaThon Topics</h2>

                  <p className="topic-section">
                    1. Resume/Candidate Management System:
                  </p>

                  <p>
                    Develop a software solution that simplifies the process of
                    collecting, organizing, and evaluating job applications,
                    enabling HR and team leads to identify and onboard top
                    talent effectively.
                  </p>

                  <p className="topic-section" style={{ marginTop: "10px" }}>
                    2. Time-Sheet Management Application:
                  </p>

                  <p>
                    Create a user-friendly application to streamline time
                    tracking for employees so that managers can get accurate
                    understanding of a projects progress and resource allocation
                    any time.
                  </p>

                  <p className="topic-section" style={{ marginTop: "10px" }}>
                    3. Contract Management Application:
                  </p>

                  <p>
                    Design a robust platform to manage the lifecycle of our
                    companys contracts with clients. Enable secure storage, easy
                    retrieval, and automated notifications for key contract
                    milestones to enhance efficiency and compliance.
                  </p>

                  <p className="topic-section" style={{ marginTop: "10px" }}>
                    4. Self Certification Portal:
                  </p>

                  <p>
                    Build an online portal that empowers employees to complete
                    self-certifications for different skill sets that are
                    required within the organization. The portal should enable
                    you to choose a skill and get automatically certified
                    through a series of questions.
                  </p>
                </article>
              </section>

              <section id="teams" className="content-section">
                <h2 className="italic">Teams</h2>

                <table>
                  <thead>
                    <tr>
                      <th>Team</th>

                      <th>Member 1</th>

                      <th>Member 2</th>

                      <th>Member 3</th>

                      <th>Member 4</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Team 1</td>

                      <td>Arijit Saha</td>

                      <td>Biswajit</td>

                      <td>Vinod Patil</td>

                      <td>Jeevan</td>
                    </tr>

                    <tr>
                      <td>Team 2</td>

                      <td>Vishak Gowda</td>

                      <td>Rachayya</td>

                      <td>Ganapati</td>

                      <td>Sushil</td>
                    </tr>

                    <tr>
                      <td>Team 3</td>

                      <td>Ranjith</td>

                      <td>Manjula</td>

                      <td>Subhash</td>

                      <td>Sushant</td>
                    </tr>

                    <tr>
                      <td>Team 4</td>

                      <td>Pawan K</td>

                      <td>Jahid</td>

                      <td>Vikas</td>

                      <td>Vajintha</td>
                    </tr>

                    <tr>
                      <td>Team 5</td>

                      <td>Azim</td>

                      <td>Rajkumar</td>

                      <td>Pradeep</td>

                      <td>Rajshekhar</td>
                    </tr>

                    <tr>
                      <td>Team 6</td>

                      <td>Basanta</td>

                      <td>Brinda</td>

                      <td>Venkatesh</td>

                      <td>Basavaraj</td>
                    </tr>

                    <tr>
                      <td>Team 7</td>

                      <td>Rohan Jadhav</td>

                      <td>Akhila</td>

                      <td>Pavan KB</td>

                      <td>Punith Goud</td>
                    </tr>

                    <tr>
                      <td>Team 8</td>

                      <td>Suthesh M</td>

                      <td>Sampath</td>

                      <td>Vishnu Sathyapalan</td>

                      <td>Ajay</td>
                    </tr>

                    <tr>
                      <td>Team 9</td>

                      <td>Pooja</td>

                      <td>Deepan</td>

                      <td>Dhanashree</td>

                      <td>Goutham</td>
                    </tr>

                    <tr>
                      <td>Team 10</td>

                      <td>Raghu</td>

                      <td>Sashank</td>

                      <td>Prashanth</td>

                      <td>Rakshith</td>
                    </tr>

                    <tr>
                      <td>Team 11</td>

                      <td>Amogh</td>

                      <td>Richard</td>

                      <td>Rishika Teja Lokesh</td>

                      <td>Pravallika</td>
                    </tr>

                    <tr>
                      <td>Team 12</td>

                      <td>Prasad</td>

                      <td>Ananth</td>

                      <td>Vandana Prakash</td>

                      <td>Anusha</td>
                    </tr>

                    <tr>
                      <td>Team 13</td>

                      <td>Ashish</td>

                      <td>Karthik</td>

                      <td>Yathish</td>

                      <td>Namith</td>
                    </tr>

                    <tr>
                      <td>Team 14</td>

                      <td>Vishnu(intern)</td>

                      <td>Sharath(intern)</td>

                      <td>Namith</td>

                      <td>Chaithra</td>
                    </tr>

                    <tr>
                      <td>Organizing Commitee</td>
                      <td>Puja</td>
                      <td>Teja</td>
                      <td>Varun U</td>
                      <td>Shilpa V P</td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </div>
          </div>

          <div className="right-sidebar">
            <h3 className="italic">Event Details</h3>
            <ul>
              <li style={{ fontWeight: "bold", color: "#FF4B4B" }}>
                Venue: Zysk Technologies
              </li>
              <li>Date: 22nd Sep 10 AM- 23rd Sep 6 PM</li>
            </ul>
            <p className="right-sidebar-contents">
              Explore the essential information about the hackathon, including
              the venue and schedule. Get ready to embark on a journey of
              innovation and creativity!
            </p>
          </div>
        </main>
        <div className="marquee-container">
          <marquee
            className="marquee"
            behavior="scroll"
            direction="left"
            scrollamount="20"
          >
            Hey, it is ZykaThon! Welcome to our event. We are excited to have
            you here. Note: Please start preparing for the given topics. Get
            ready to innovate! Prize Pool: ₹40,000
          </marquee>
        </div>
      </div>
    </>
  );
};

export default zyskathon;
