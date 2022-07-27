import './Divider.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa4, faBaby, faBan, faBraille, faCode, faCoffee, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-regular-svg-icons';
import { faConnectdevelop } from '@fortawesome/free-brands-svg-icons';


function Divider() {
    return (
        <div className='divider'>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line  divider-line-right"></div>
                <FontAwesomeIcon className='faConnect' icon={faConnectdevelop} />
                <div className="divider-custom-line  divider-line-left"></div>
            </div>
        </div>
    )
}


export default Divider;