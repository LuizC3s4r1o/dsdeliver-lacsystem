import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="youTube" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/luiz-cesario-a060665b/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="instagram" target="_new">
                    <InstagramIcon /> 
                </a>
            </div>
        </footer>
    )   
}

export default Footer;