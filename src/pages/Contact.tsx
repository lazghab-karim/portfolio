import '../css/Contact.css';
import '../css/waves.css'
import Card from '../components/Card';

import Waves from '../components/waves.tsx'
const Contact = () => {
    return (
        <>
            <div className='page'>
                <div className="contact-page">
                    <h1 className="contact-title">
                        Let's <span className="gradient-text">CONNECT</span>
                    </h1>

                    <div className="contact-cards">
                        <Card
                        title="GitHub"
                        content="https://github.com/lazghab-karim"
                        href="https://github.com/lazghab-karim"
                        />

                        <Card
                        title="Email"
                        content="karim.lazghab@ensi-uma.tn"
                        href="mailto:karim.lazghab@ensi-uma.tn"
                        />
                        <Card
                        title="Phone"
                        content="(+216) 58 898 681"
                        />
                        <Card
                        title="LinkedIn"
                        content="https://www.linkedin.com/in/lazghab-karim"
                        href="https://www.linkedin.com/in/lazghab-karim-067424216/"
                        />
                    </div>
                </div>
            </div>
            <Waves />
        </>
    );
};

export default Contact;
