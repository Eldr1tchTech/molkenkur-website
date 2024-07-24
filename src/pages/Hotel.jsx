import Footer from "../components/Footer"
import Header from "../components/Header"
import '../App.css'
import './Hotel.css'

function Hotel() {
    return (
        <div className='App'>
            <Header page='Hotel' />
            <h1>Hotel</h1>
            <h2>Zimmer und Services für jeden Geschmack</h2>
            <p>
                Komfortable Zimmer mit Panoramablick über Heidelberg und die ruhige Lage zeichnen unser Hotel aus.
                Ein vorzügliches gastronomisches Angebot und exklusiver Service runden den Aufenthalt ab.
            </p>
            <p>
                In unseren komfortabel eingerichteten Hotelzimmern mit Dusche, WC, Telefon, TV und kostenlosem Mineralwasser
                wohnen Sie oberhalb des Heidelberger Schlosses. Die Zimmer sind mit einem Doppelbett (2 Matratzen à 90 cm x 200 cm) ausgestattet.
            </p>
            <p>
                Die ruhige Lage und ein herrlicher Blick auf das Neckartal und die Rheinebene bieten den idealen Rahmen für Geschäftsreisen oder Urlaub,
                Entspannung oder Erlebnis.
            </p>
            <h2>Die Vorzüge:</h2>
            <ul>
                <li>Ruhige, unverwechselbare Lage</li>
                <li>In nur 5 Autominuten in der Heidelberger Altstadt</li>
                <li>120 kostenfreie Parkplätze für unsere Gäste</li>
                <li>Einmaliger Blick über Heidelberg</li>
            </ul>
            <p>
                In unserem Haus sind leider keine Haustiere erlaubt.
            </p>
            <Footer />
        </div>
    )
}

export default Hotel