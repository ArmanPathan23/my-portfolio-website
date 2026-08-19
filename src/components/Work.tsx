import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projectsData = [
  {
    name: "Gym Website & PWA",
    category: "Freelance Client Project",
    tools: "React, HTML5, CSS3, JavaScript, PWA",
    description:
      "Architected and built a responsive gym website & companion PWA with reusable component navigation and app-like performance.",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    name: "Lead Notification Automation",
    category: "n8n Workflow Automation",
    tools: "n8n, WhatsApp API, Email Alerts, Data Routing",
    description:
      "Automated instant lead responses with n8n workflows triggering WhatsApp & Email alerts on form submissions.",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    name: "DocCrop - Leaf Disease Detection",
    category: "AI & Computer Vision",
    tools: "Python, Transfer Learning, Deep Learning, Image Classification",
    description:
      "Built a leaf image classification model fine-tuned via transfer learning to detect crop leaf diseases from photographs.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ArmanPathan23/DocCrop",
  },
  {
    name: "Fake News Detection System",
    category: "Machine Learning & NLP",
    tools: "Python, Scikit-learn, NLP, Kaggle Datasets",
    description:
      "Developed a Python ML classifier trained on Kaggle datasets with custom text preprocessing, achieving 90% accuracy.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ArmanPathan23/fake-news-detection",
  },
  {
    name: "Daily Tracker App",
    category: "Productivity Web App",
    tools: "TypeScript, JavaScript, React, HTML5, CSS3",
    description:
      "Full-stack daily task tracking web app providing a clean, intuitive interface for task entry and progress monitoring.",
    image: "/images/placeholder.webp",
    link: "https://github.com/ArmanPathan23/daily_traCKER",
  },
];

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth <= 1025) return;

    function getTranslateX() {
      const flexElem = document.querySelector<HTMLElement>(".work-flex");
      const containerElem =
        document.querySelector<HTMLElement>(".work-container");
      const lastBox = flexElem?.lastElementChild as HTMLElement | null;
      if (!flexElem || !containerElem || !lastBox) return 0;
      const marginLeft =
        parseFloat(getComputedStyle(flexElem).marginLeft) || 0;
      const paddingRight =
        parseFloat(getComputedStyle(flexElem).paddingRight) || 0;
      const contentRight =
        marginLeft + lastBox.offsetLeft + lastBox.offsetWidth + paddingRight;
      return Math.max(0, contentRight - containerElem.clientWidth);
    }

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${getTranslateX()}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinType: "transform",
        anticipatePin: 1,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -getTranslateX(),
      ease: "none",
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 300);

    return () => {
      clearTimeout(timer);
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
                <p style={{ marginTop: "10px", color: "#e0e0e0" }}>
                  {project.description}
                </p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.name}
                link={project.link || undefined}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
