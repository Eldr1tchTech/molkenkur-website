import Footer from "../components/Footer"
import Header from "../components/Header"
import '../App.css'
import './Tagungen.css'

function Tagungen() {
    return (
        <div className='App'>
            <Header page='Tagungen' />
            <h1>Tagungen</h1>
            <h2>Tagen mit besten Aussichten</h2>
            <p>
                Das Schlosshotel Molkenkur liegt in einer der schönsten Stätten Deutschlands und bietet sich als idealer Tagungsort für Kongresse, Seminare, Tagungen oder Mitarbeiterbesprechungen an.
            </p>
            <p>
                Oberhalb des Heidelberger Schlosses gelegen, befinden wir uns inmitten der Natur und bieten einen sensationellen Panoramablick über die Rheinebene.
                Bei uns finden Sie Ruhe und Entspannung, um konzentriert und erfolgreich Tagen zu können.
            </p>
            <p>
                Direkt an der historischen Bergbahnstation „Molkenkur“ gelegen und mit über 120 kostenfreien Parkplätzen bieten wir den perfekten Ausgangspunkt mit besten Aussichten.
            </p>
            <p>
                Unsere Konferenzräume sind modern ausgestattet, haben Tageslicht und einen Zugang zu der Panoramaterrasse.
            </p>
            <p>
                Das einmalige Ambiente, verbunden mit einer herzlichen Gastfreundschaft, schafft die perfekte Arbeits- und Wohlfühlatmosphäre. Der freundliche Service und eine hervorragende Küche runden Ihre Tagung in unserem Haus ab.
            </p>
            <p>
                Sehr gerne erstellen wir Ihnen ein ganz individuelles Angebot für Ihre Veranstaltung.
            </p>
            <h2>Konferenzräume:</h2>
            <div class="conference-room">
                <h3>Staufersaal</h3>
                <ul>
                    <li>Parlamentarisch: 90 Personen</li>
                    <li>U-Form: 50 Personen</li>
                    <li>Theater: 180 Personen</li>
                </ul>
            </div>
            <div class="conference-room">
                <h3>Spiegelsaal</h3>
                <ul>
                    <li>Parlamentarisch: 120 Personen</li>
                    <li>U-Form: 60 Personen</li>
                    <li>Theater: 250 Personen</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Tagungen