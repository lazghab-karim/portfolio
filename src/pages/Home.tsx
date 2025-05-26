import myImage from '../assets/image.jpg';
import "../css/Home.css";
import LinkButton from '../components/LinkButton';

const Home = () => {
  return (
    <div>
        <div className="home-page">
            <div className='animation-text'>
                <h1>Karim Lazghab</h1>
                <h4>Computer Science Engineering Student</h4>
                <p className="intro-text"> Currently a Computer Science Student at National School of Engineering (ENSI). 
                    I focus on studying system design and architecture, programming languages such as Java, C++, C and assembly,
                    cybersecurity principals, Artificial intelligence fundamentals and IOT. I love learning, coding and reading books.
                    I am passionate about system design and Artificial intelligence .
                </p>
            </div>
        </div>
        <div className="home-about">
            <div className='home-about-text'>
              <h2>More About Me</h2>
              <p> 
                Welcome to my portfolio! This is a professional summary of all of the things that I enjoy doing!
                <br/><br/>
                I live in Tunisia and study computer science. I enjoy participating in coding competitions, building AI projects,
                and studying how complex systems work. I’m driven by curiosity and a
                love for elegant software design.
                <br/><br/>
                I call myself an "all-end" engineer, because I do a little bit of everything. From front-end, to backend, to infrastructure, I do it all!
                I am also learning AI architectures and Cybersecurity.
                <br/><br/>
                If you're curious to dive deeper into my work, you can follow me:
              </p>

              <div className='buttons-contact'>
                <LinkButton
                  url="https://github.com/lazghab-karim"
                  label="GitHub"
                  className="github-button"
                />
                <LinkButton
                  url="https://www.linkedin.com/in/lazghab-karim-067424216/"
                  label="LinkedIn"
                  className="linkedin-button"
                />
              </div>           

            </div>
            <img src={myImage} alt="Karim Lazghab" className="Home-myImage"/>
      </div>
    </div>
  );
};

export default Home;
