import './Footer.css'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer-style">
            <div className="footer-group">
                <h4>Kontakt Informationen</h4>
                <ul>
                    <li>Adresse: Klingenteichstr. 31, 69117 Heidelberg, Germany</li>
                    <li>Email: info@molkenkur.de</li>
                    <li>Telefon Nummer: +49 6221 654 080</li>
                    <li>Fax Nummer: +49 6221 654 0888</li>
                </ul>
            </div>
            <div className="footer-group">
                <h4>Impressum</h4>
                <ul>
                    <li>Schlosshotel Molkenkur GmbH</li>
                    <li>
                        Dr. A. F. Scheuerle<br />
                        Klingenteichstr. 31<br />
                        69117 Heidelberg
                    </li>
                    <li>Umsatzsteuer-ID: DE 21 4558418</li>
                </ul>
            </div>
            <div className='footer-group'>
                <Link to="/molkenkur-website/datenschutz"><h4 className='no-link-style'>Datenschutz</h4></Link>
            </div>
        </footer>
    );
}

export default Footer;