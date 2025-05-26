import { useEffect, useRef, useState } from "react";
import "../css/Home.css";

const Home = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // animate once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
        <div className="home-page">
            <div className='animation-text'>
                <h1>Karim Lazghab</h1>
                <p className="intro-text"> Currently a Computer Science Student at National School of Engineering (ENSI). 
                    I focus on studying system design and architecture, programming language such as Java, C++, C and assembly,
                    cybersecurity principals, Artificial intelligence fundamentals and IOT. I love learning, coding and reading books.
                    I am passionate about system design and Artificial intelligence .
                </p>
            </div>

        </div>
        <div
            ref={sectionRef}
            className={`scroll-section ${visible ? "visible" : ""}`}
        >
            <h2>More About Me</h2>
            <p>
            I enjoy participating in coding competitions, building AI projects,
            and studying how complex systems work. I’m driven by curiosity and a
            love for elegant software design.
            </p>
      </div>
    </div>
  );
};

export default Home;
