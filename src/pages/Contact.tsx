import '../css/Contact.css';
import '../css/waves.css'

import Waves from '../components/waves.tsx'
const Contact = () => {
    return (
        <>
            <div className='page'>
                <div className='padding: 2rem'></div>
                <div className="contact-page">
                    <h1 className="contact-title">
                        Let's <span className="gradient-text">CONNECT</span>
                    </h1>

                    <div className="contact-cards">
                        <a href="https://github.com/lazghab-karim" target="_blank" rel="noopener noreferrer">
                            <div className="card">
                                <h3>GitHub</h3>
                                <p>
                                    https://github.com/lazghab-karim
                                </p>
                            </div>
                        </a>

                        <a href="mailto:karim.lazghab@ensi-uma.tn">
                            <div className="card">
                                <h3>Email</h3>
                                <p>
                                    karim.lazghab@ensi-uma.tn
                                </p>
                            </div>
                        </a>

                        <div className="card">
                            <h3>Phone</h3>
                            <p>(+216) 58 898 681</p>
                        </div>
                        <a href="https://www.linkedin.com/in/lazghab-karim-067424216/">
                            <div className="card">
                                <h3>Linkedin</h3>
                                <p>
                                    https://www.linkedin.com/in/lazghab-karim
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <Waves />
        </>
    );
};

export default Contact;
