import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome!</h1>
      <div className="content-container">
        <img 
          src="/_multipages/profile.jpg" 
          alt="Nattapat Wisitchareon" 
          className="profile-image" 
        />
        <div className="text-content">
          <p>Hello! My name is <strong>Nattapat Wisitchareon</strong></p>
          <p>I am 19 years old.</p>
          <p>I am currently studying at <strong>Sripatum University</strong>, majoring in 
            <strong> Computer Science</strong> in the <strong>Faculty of Information Technology</strong>, 
            and I am in my second year.
          </p>
          <p>
            I have a strong interest in technology and software development, 
            and I enjoy learning about coding and creating innovative software solutions. 
            In my free time, I love exploring new tech trends and enhancing my programming skills.
          </p>
        </div>
      </div>
      <div className="skills-container">
            <h3>My Skills</h3>
                <ul>
                    <li className="bi bi-filetype-html">&nbsp;<span className="skills-text">HTML :</span> I have a basic understanding of HTML and can create the structure of web content using various tags.</li>
                    <li className="bi bi-filetype-css">&nbsp;<span className="skills-text">CSS :</span> I understand the fundamentals of CSS and can design simple layouts and apply basic styles to web pages.</li>
                    <li className="bi bi-filetype-js">&nbsp;<span className="skills-text">JavaScript :</span> I have basic knowledge of JavaScript and can write simple code to add interactive features to web pages.</li>
                    <li className="bi bi-filetype-jsx">&nbsp;<span className="skills-text">React :</span> I am starting to learn React and can create basic components for developing web applications.</li>
                </ul>
          </div>
    </div>
  );
}

export default Home;