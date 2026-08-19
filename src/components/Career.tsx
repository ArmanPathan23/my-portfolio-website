import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Skill Job Service</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Diagnosed and resolved front-end bugs while developing and optimizing
              web application features in HTML, CSS, and JavaScript within a
              collaborative team environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Intern</h4>
                <h5>Prime Think Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Strengthened front-end features and UI components under senior
              guidance, gaining hands-on experience with real-world development
              workflows and Git-based version control.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI & ML</h4>
                <h5>9.0 CGPA</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Specializing in Artificial Intelligence & Machine Learning with a 9.0
              CGPA, covering Transfer Learning, NLP, Data Handling, and AI project deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSC & SSC Education</h4>
                <h5>HSC: 81.67% | SSC: 95%</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Higher Secondary Certificate (HSC) in 2024 with 81.67% and
              Secondary School Certificate (SSC) in 2021 with 95.00%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
