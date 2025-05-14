import bannerimage from './images/banner-image.png';
import './App.css';
import Location from './images/location.svg';
import aboutme from './images/about-me.png'
import iconFigma from './images/skills/icon-figma.svg'
import iconGit from './images/skills/icon-git.svg'
import iconCss from './images/skills/icon-css3.svg'
import iconHtml5 from './images/skills/icon-html5.svg'
import iconbootstrap5 from './images/skills/icon-bootstrap.svg'
import iconjavscript from './images/skills/icon-javscript.svg'
import logoUpwork from './images/logo-upwork.svg'
import ProjectTridaPro from './images/Projects/Project-TridaPro.jpg'
import IconLink from './images/Projects/Icon-Link.svg'
import ProjectJupiter from './images/Projects/Project-Jupiter.jpeg'
import projectlogin from './images/Projects/project-login.jpeg'
import projectstudents from './images/Projects/project-students.jpeg'
import Iconmassage from './images/Icon-massage.svg'
import Iconphone from './images/Icon-phone.svg'

function App() {
  return (
    <body id="page-top">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg bg-white text-uppercase fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top" title="Srihari Busarajula">SB</a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#portfolio">Portfolio</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#about">About</a></li>
              <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Masthead--> */}
      <header className="masthead bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-8">
              <div className="d-flex flex-column gap-5">
                <div className="pt_Descprition">
                  <h4>Hi, I’m SriHari 👋</h4>
                  <p>I'm a UI/UX Designer (Bootstrap5, HTML5, CSS3, JavaScript AND FIGMA) with a focus on creating (and occasionally
                    designing) exceptional digital experiences that are fast, accessible, visually appealing,
                    and responsive. Even though I have been creating web applications for over 6 years, I still
                    love it as if it was something new.</p>
                </div>
                <div>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center gap-2 sb_locIcon">
                      <img alt='' src={Location} className="img-fluid" />
                      <p>Hyderabad, India</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <div className="sb_greeDot"></div>
                      <p>Available for Job change</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-4">
              <img alt=' 'src={bannerimage} className="img-fluid" />
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About Section--> */}
      <section className="page-section sb_bgDark">
        <div className="container">
          {/* <!-- About Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About me</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- About Grid Items--> */}
          <div className="row justify-content-center gx-4">
            {/* <!-- About Item 1--> */}
            <div className="col-md-4 col-lg-4">
              <div className="sb_AboutImg">
                <img alt=' 'src={aboutme} className="img-fluid" />
              </div>
            </div>
            {/* <!-- About Item 2--> */}
            <div className="col-md-8 col-lg-8">
              <div className="sb_aboutInfo">
                <h4>Curious about me? Here you have it:</h4>
                <p className="mt-2">I'm a passionate, self-proclaimed designer who specializes in Static development by using (Bootstrap5, HTML5, CSS3, JavaScript) this technologies. I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect Responsive design and I did Mobile first code matters to me.</p>
                <p className="mt-2">I began my journey as a web developer in 2018, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 6 years after starting my web development journey, I'm building Responsive web applications using modern technologies such as Bootstrap5, CSS3, HTML5, Tailwindcss, Figma and much more.</p>
                <p className="mt-2">For design I am doing conduct primary and secondary reaches and I am doing  wireframes in Figma, 	Possessing excellent creative, analytical, problem-solving and team- management skills, 	Ability to work closely with team members and manage team members tasks and understand client requirements.</p>
                <p className="mt-2">I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                <p className="mt-3">Finally, some quick bits about me.</p>
                <div className="row ">
                  <div className="col-md-6 col-lg-6">
                    <ul className="d-flex align-items-center">
                      <li>M.tech in Computer Engineering (2016)</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="d-flex align-items-center">
                      <li>B.E. in Information Technologies (2013)</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="d-flex align-items-center">
                      <li>Full time Employee</li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-lg-6">
                    <ul className="d-flex align-items-center">
                      <li>Open to work</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- About Section--> */}
      <section className="page-section" id="">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom mb-1">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="text-center mt-3">The skills, tools and technologies I am really good at:</p>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="row justify-content-start mt-4 gy-5">
            {/* <!-- Portfolio Item 1--> */}
            <div className="col-md-2 col-lg-2">
              <div className="sb_skillSec d-flex flex-column gap-2">
                <div className="sb_skillImage">
                  <img alt=' 'className="img-fluid" src={iconFigma} />
                </div>
                <p>Figma</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="sb_skillSec d-flex flex-column gap-2">
                <div className="sb_skillImage">
                  <img alt=' 'className="img-fluid" src={iconGit} />
                </div>
                <p>Git</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="sb_skillSec d-flex flex-column gap-2">
                <div className="sb_skillImage">
                  <img alt=' 'className="img-fluid" src={iconCss} />
                </div>
                <p>CSS3</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="sb_skillSec d-flex flex-column gap-2">
                <div className="sb_skillImage">
                  <img alt=' 'className="img-fluid" src={iconHtml5} />
                </div>
                <p>HTML5</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="sb_skillSec d-flex flex-column gap-2">
                <div className="sb_skillImage">
                  <img alt=' 'className="img-fluid" src={iconbootstrap5} />
                </div>
                <p>Bootstrap5</p>
              </div>
            </div>
            <div className="col-md-2 col-lg-2">
              <div className="sb_skillSec d-flex flex-column gap-2">
                <div className="sb_skillImage">
                  <img alt=' 'className="img-fluid" src={iconjavscript} />
                </div>
                <p>JavaScript</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="page-section sb_bgDark mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Experience</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom mb-2">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="text-center text-secondary">Here is a quick summary of my most recent experiences:</p>
          {/* <!-- About Section Content--> */}
          <div className="row mt-3 justify-content-center">
            <div className="col-md-10 col-lg-10">
              <div className="row gy-3">
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI/UX Designer (Eclature Technologies)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i am Creating Prototypes as for client Requirements (or) Business Requirement By Using Figma </p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i am Creating Static Responsive Website Designes By Using (Bootstrap5, HTML5, CSS3, JavaScript,) in this Company</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i Will make websites by using Responsive and Mobile first Devices</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i will collaborate will backend developers and Front-end Developers for Giving pages very well</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i have skills to work with Responsive Designes into the React, Angulor Project without lossing Bidings </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">APR 2021 - Present</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI Developer (Cancri Techno solutions)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Static Website Development By Using Bootstrap5, HTML5, CSS3, JQuery, JavaScript</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Some Changes and some designs into WorkPress Websites as for Company Assigned Task</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did some Website conversion by PSD to HTML Convert</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>4 to 5 years back i did Changes and Designs into WorkPress website and plugins (elementor, theme bakery page Builder) but since 4 years i did not worked</p>
                            </div>

                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">Sept 2020 to APR 2021</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI Developer (Sharpline Techno Solutions OR CA Techno Solutions)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I have 1yr Experience with company</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Static Website Development By Using Bootstrap, HTML5, CSS3, JQuery, JavaScript</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">Sep 2019 to  Oct 2020</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI Developer (9Grid Technologies Private Limited)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I have 5months Experience with company it is like intern</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Static Website Development By Using Bootstrap, HTML5, CSS3, JQuery, JavaScript </p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>Learned How to make WorkPress Website from the scrap</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">Sept 2019 to Sept 2019</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- About Section Button--> */}
          {/* <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
              <i className="fas fa-download me-2"></i>
              Free Download!
            </a>
          </div> */}
        </div>
      </section>
      {/* <!-- Work Section--> */}
      <section className="page-section" id="">
        <div className="container">
          {/* <!-- Portfolio Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Work</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom mb-1">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="text-center mt-3">Some of the noteworthy projects I have built:</p>
          {/* <!-- Portfolio Grid Items--> */}
          <div className="d-flex flex-column gap-5 mt-4">
            <div className="card border-0 shadow">
              <div className="row gy-2">
                {/* <!-- Portfolio Item 1--> */}
                <div className="col-md-6 col-lg-6 order-2 sb_WorkBlock">
                  <div className="sb_WorkSecImage ">
                    <img alt=' 'className="img-fluid" src={ProjectTridaPro} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 order-1">
                  <div className="sb_WorkSec d-flex flex-column gap-3">
                    <h5>TridaPro</h5>
                    <p>"Elevate your academic journey with Tridapro’s expert online tuition for Foundations, JEE, and NEET. Our tailored programs cater to students from Class 6 to 10, focusing on strong foundational knowledge. For JEE and NEET, benefit from our comprehensive coaching, designed to cover all aspects of these crucial exams. Enjoy: Experienced Faculty: Learn from top educators. Personalized Learning: Custom plans and one-on-one sessions. Interactive Classes: Live sessions, doubt-clearing, and assessments.
                      Flexible Schedules: Study from home at your convenience.
                      Comprehensive Material: Extensive resources and mock tests.
                      Join Tridapro for success in your academic and competitive goals!"</p>
                    <div className="sb_badges d-flex align-content-center flex-wrap gap-2">
                      <span class="badge text-bg-secondary">Bootstrap5</span>
                      <span class="badge text-bg-secondary">HTML5</span>
                      <span class="badge text-bg-secondary">CSS3</span>
                      <span class="badge text-bg-secondary">JavaScript</span>
                      <span class="badge text-bg-secondary">NPM</span>
                      <span class="badge text-bg-secondary">GIT</span>
                    </div>
                    <a href="https://tridapro.com/" target="-blank" className="sb_ProjectLink">
                      <img alt=' 'src={IconLink} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow">
              <div className="row  gy-2">
                {/* <!-- Portfolio Item 1--> */}
                <div className="col-md-6 col-lg-6 order-1 sb_WorkBlock">
                  <div className="sb_WorkSecImage ">
                    <img alt=' 'className="img-fluid" src={ProjectJupiter} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 order-2">
                  <div className="sb_WorkSec d-flex flex-column gap-3">
                    <h5>Jupiter</h5>
                    <p>Jupiter is a sale and purchases-based app. Here we have settings for  Researching data for screen design and application requirement and develop once it confirmed the design by manger and managing color guidelines and maintaining astatics in design and developing or converting the pages to Figma to website conversions by using HTML5, CSS3, Bootstrap5.3, NMP, and GIT</p>
                    <p>This website is used for Employees filling Timesheets, tasks, bugs, tracking stories to the Employee</p>
                    <div className="sb_badges d-flex align-content-center flex-wrap gap-2">
                      <span class="badge text-bg-secondary">Bootstrap5</span>
                      <span class="badge text-bg-secondary">HTML5</span>
                      <span class="badge text-bg-secondary">CSS3</span>
                      <span class="badge text-bg-secondary">JavaScript</span>
                      <span class="badge text-bg-secondary">NPM</span>
                      <span class="badge text-bg-secondary">GIT</span>
                    </div>
                    <a href={ProjectJupiter} target="-blank" className="sb_ProjectLink">
                      <img alt=' 'src={IconLink} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow">
              <div className="row align-items-center gy-2">
                <div className="col-md-6 col-lg-6 order-2 sb_WorkBlock">
                  <div className="sb_WorkSecImage">
                    <img alt=' 'className="img-fluid" src={projectlogin} />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 order-1">
                  <div className="sb_WorkSec d-flex flex-column gap-3">
                    <h5>TridaPro Student Login </h5>
                    <p>TridaPro Logins Screen i am done in Figma as well as converion done it must be in Responsive</p>
                    <p>And the same Login they will use Student, Tutor, and parent pages also</p>
                    <div className="sb_badges d-flex align-content-center flex-wrap gap-2">
                      <span class="badge text-bg-secondary">Bootstrap5</span>
                      <span class="badge text-bg-secondary">HTML5</span>
                      <span class="badge text-bg-secondary">CSS3</span>
                      <span class="badge text-bg-secondary">JavaScript</span>
                      <span class="badge text-bg-secondary">NPM</span>
                      <span class="badge text-bg-secondary">GIT</span>
                    </div>
                    <a href={projectlogin} target="-blank" className="sb_ProjectLink">
                      <img alt=' 'src={IconLink} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <div className="card border-0 shadow">
              <div className="row align-items-center gy-2">
                <div className="col-md-6 col-lg-6 order-2">
                  <div className="sb_WorkSec d-flex flex-column gap-3">
                    <h5>TridaPro Student Admin</h5>
                    <p>In this they will Maitain TridaPro Student Details Like Attedence, Marks, Examples, Courses, Clasess and more</p>
                    <div className="sb_badges d-flex align-content-center flex-wrap gap-2">
                      <span class="badge text-bg-secondary">Bootstrap5</span>
                      <span class="badge text-bg-secondary">HTML5</span>
                      <span class="badge text-bg-secondary">CSS3</span>
                      <span class="badge text-bg-secondary">JavaScript</span>
                      <span class="badge text-bg-secondary">NPM</span>
                      <span class="badge text-bg-secondary">GIT</span>
                    </div>
                    <a href={projectstudents} target="-blank" className="sb_ProjectLink">
                      <img alt=' 'src={IconLink} />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 order-1 sb_WorkBlock">
                  <div className="sb_WorkSecImage">
                    <img alt=' 'className="img-fluid" src={projectstudents} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section sb_bgDark mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">My Figma Works</h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom mb-2">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>

          {/* <!-- About Section Content--> */}
          <div className="row mt-3 justify-content-center">
            <div className="col-md-10 col-lg-10">
              <div className="row gy-3">
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI/UX Designer (Eclature Technologies)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i am Creating Prototypes as for client Requirements (or) Business Requirement By Using Figma </p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i am Creating Static Responsive Website Designes By Using (Bootstrap5, HTML5, CSS3, JavaScript,) in this Company</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i Will make websites by using Responsive and Mobile first Devices</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i will collaborate will backend developers and Front-end Developers for Giving pages very well</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>i have skills to work with Responsive Designes into the React, Angulor Project without lossing Bidings </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">APR 2021 - Present</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI Developer (Cancri Techno solutions)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Static Website Development By Using Bootstrap5, HTML5, CSS3, JQuery, JavaScript</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Some Changes and some designs into WorkPress Websites as for Company Assigned Task</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did some Website conversion by PSD to HTML Convert</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>4 to 5 years back i did Changes and Designs into WorkPress website and plugins (elementor, theme bakery page Builder) but since 4 years i did not worked</p>
                            </div>

                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">Sept 2020 to APR 2021</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI Developer (Sharpline Techno Solutions OR CA Techno Solutions)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I have 1yr Experience with company</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Static Website Development By Using Bootstrap, HTML5, CSS3, JQuery, JavaScript</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">Sep 2019 to  Oct 2020</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12">
                  <div className="card border-0 shadow">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-2 col-lg-2">
                          <div className="sb_upwork">
                            <img alt=' 'className="img-fluid" src={logoUpwork} />
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <h5>UI Developer (9Grid Technologies Private Limited)</h5>
                          <div className="d-flex flex-column gap-3 mt-4 sb_specifications">
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I have 5months Experience with company it is like intern</p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>I did Static Website Development By Using Bootstrap, HTML5, CSS3, JQuery, JavaScript </p>
                            </div>
                            <div className="d-flex align-items-start gap-2">
                              <div className="sb_dot"></div>
                              <p>Learned How to make WorkPress Website from the scrap</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-lg-3">
                          <p className="text-end">Sept 2019 to Sept 2019</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- About Section Button--> */}
          {/* <div className="text-center mt-4">
            <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
              <i className="fas fa-download me-2"></i>
              Free Download!
            </a>
          </div> */}
        </div>
      </section>
      {/* <!-- Contact Section--> */}

      {/* <!-- Footer--> */}
      <footer className="footer text-center pt-4">
        <div className="container">
          <div className="row justify-content-center text-centent mt-3">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-8 col-lg-8 mb-lg-0">
              <h2 className="page-section-heading text-center text-uppercase text-white mb-0 mt-1">Contact Me</h2>
              <p className='text-white text-center mt-2'>What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
              <div className='sb_footerInfo text-center mt-3'>
                <h5 className='text-white'><img alt=' 'className='img-fluid' src={Iconmassage} /> <a href='mailto:b.srihari10@gmail.com' className='text-white'>b.srihari10@gmail.com</a></h5>
                <h5 className='text-white'><img alt=' 'className='img-fluid' src={Iconphone} /> <a href='tel:+919000804057' className='text-white'>+91 9000804057</a> </h5>
              </div>
            </div> 
          </div>
        </div>
      </footer>
    </body>
  );
}

export default App;
