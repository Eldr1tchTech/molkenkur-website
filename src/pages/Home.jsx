import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import welcomeVideo from '../assets/welcomeVideo.mp4'
import './Home.css'
import '../App.css'

function Home() {
    return (
        <div className='App'>
            <Header />
            <video src={welcomeVideo} autoPlay muted loop className='welcome-video'>
                Your browser does not support the 'video' tag.
            </video>
            <h2>
                Geschichte
            </h2>
            <p>
                Als „Obere Burg“ befand sich das alte Heidelberger Schloss, urkundlich zum ersten Mal erwähnt im Jahre 1225, auf dem Gelände des heutigen Parkplatzes der Molkenkur. Nach Errichtung des „Neuen Heidelberger Schlosses“ wurde dieses Gebäude durch einen Blitzschlag am 25. April 1537 zerstört. Aus diesem Jahr stammt auch eine der wenigen Handzeichnungen des alten Schlosses, beauftragt vom Grafen Ottheinrich (Rekonstruktion im Spiegelsaal der Molkenkur). Die Reste der Burgruine wurden im Lauf der folgenden Jahre wie in dieser Zeit üblich als Steinbruch genutzt und bis auf die Fundamente abgetragen.
            </p>
            <br />
            <p>
                Im Jahr 1851 begann Albrecht Wagner das sog. „Schweizer Haus“ zu errichten. Dieses Gebäude stellt den zentralen Teil der Molkenkur dar, steht unter Denkmalschutz und befindet sich bis heute in nahezu unverändertem Zustand. Der Name „Molkenkur“ leitet sich von der damals in Mode geratenen Heilanwendung von Milchprodukten ab. Der Bereich zwischen Molkenkur und Heidelberger Altstadt wurde zu dieser Zeit überwiegend als Weidland genutzt. 1870 entwickelte der Schweizer Ingenieur Nikolaus Riggenbach die Zahnradbahn. In Heidelberg wurde 1890 die nach Plänen von Riggenbach gebaute, für damalige Verhältnisse revolutionäre, untere Bergbahnsektion von der Zwingerstraße über das Schloss zum Ausflugsrestaurant Molkenkur feierlich eröffnet. Der Spiegelsaal stammt aus der Zeit des Jugendstil, weitere Anbauten und Hotelzimmer folgten im 20. Jahrhundert.
            </p>
            <br />
            <p>
                Im Jahr 2000 wurde die Molkenkur im Rahmen eines Erbbauvertrages mit der Stadt Heidelberg von der Familie Scheuerle übernommen und einer grundlegenden Renovierung unterzogen, um den Bestand dieser von Witterung und Zeit angegriffenen Perle Heidelberger Geschichte langfristig zu sichern. Diese Bemühungen wurden durch die Renovierung und Wiedereröffnung der Bergbahn im März 2005 nachhaltig unterstützt.
            </p>
            <br />
            <p>
                Die heutige Schlosshotel Molkenkur bietet bis zu 600 Gästen die Möglichkeit, oberhalb des Heidelberger Schlosses „auf hohem Niveau“ zu feiern, Tagungen und Konferenzen zu veranstalten, zu übernachten oder einfach bei exzellenter Küche und einem guten Glas Wein die wunderbare Aussicht über die Altstadt, das Neckartal und die Rheinebene zu genießen.
            </p>
            <br />
            <Footer />
        </div>
    );
}

export default Home;