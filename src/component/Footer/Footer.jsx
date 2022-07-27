import './Footer.css'; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faInstagram, faGithub,} from '@fortawesome/free-brands-svg-icons';


import PolitiqueDeConfidentialité from '../RGPD/PolitiqueDeConfidentialité';



function Footer() {
    return(
        <div className='footer' >
            <p> © Lucas Girard. Tous droits réservés - 2022</p>
     
            <a href="https://www.linkedin.com/in/lucas-girard-d%C3%A9veloppeur-web-junior/">
                <FontAwesomeIcon icon={faLinkedin} style={{color: "white"}} size={'2x'} />
            </a>
            <a href="https://www.instagram.com/lucas.girard.developpeurweb/?hl=fr">
                <FontAwesomeIcon icon={faInstagram} style={{color: "white", paddingLeft: "50px", paddingRight: "50px"}} size={'2x'} />
            </a>
            <a href="https://github.com/lucasgirard42">
                <FontAwesomeIcon icon={faGithub} style={{color: "white"}} size={'2x'} />
            </a>
        
        </div>
    )
}

export default Footer; 