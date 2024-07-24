import Footer from "../components/Footer"
import Header from "../components/Header"
import '../App.css'
import './Restaurant.css'

function Restaurant() {
    return (
        <div className='App'>
            <Header page='Restaurant' />
            <h1>Restaurant</h1>
            <h2>Speisen und Genießen in herrlicher Lage</h2>
            <p>
                Nur wenige Gehminuten vom Heidelberger Schloss entfernt und direkt an der Bergbahnstation Molkenkur gelegen,
                speisen Sie bei uns mitten im Grünen, mit frischer Luft und einem wunderschönen Blick über die Dächer der Stadt.
            </p>
            <p>
                Unsere regionale Küche bietet alles, was zu einem guten Essen gehört:
                eine passende Weinauswahl, leckere Desserts und vieles mehr. Gerichte für Vegetarier und Kinder sind stets Teil unseres Angebots.
                Darüber hinaus gehen wir auch gerne auf Wünsche von Allergikern ein. Sprechen Sie uns einfach an.
            </p>
            <p>
                Wegen Veranstaltungen kann es zu Abweichungen der Öffnungszeiten kommen! Wir bitten um Verständnis.
            </p>
            <h2>Öffnungszeiten:</h2>
            <p>
                Unser Restaurant ist ab 15.00 Uhr geöffnet und an den Wochenenden von 12.00 Uhr bis 21.00 Uhr. Weitere Termine sind nach Absprache möglich. (Siehe Kontaktdaten)
            </p>
            <Footer />
        </div>
    )
}

export default Restaurant