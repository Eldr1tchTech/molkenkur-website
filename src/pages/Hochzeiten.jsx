import Footer from "../components/Footer"
import Header from "../components/Header"
import '../App.css'
import saalImage from '../assets/saalSP.jpg'

function Hochzeiten() {
    return (
        <div className='App'>
            <Header page='Hochzeiten' />
            <h1>
                Hochzeiten
            </h1>
            <p>
                Sie möchten den schönsten Tag in Ihrem Leben außergewöhnlich feiern. Wir geben Ihnen den passenden Rahmen. Neben unserem Restaurant und der Panoramaterrasse stehen Ihnen der Staufersaal, das Welfenzimmer und der historische Spiegelsaal zur Verfügung. Gerne zeigen wir Ihnen alles persönlich und beraten Sie individuell.
            </p>
            <h2>
                Unsere Raeumilchkeiten...
            </h2>
            <ul>
                <li>Spiegelsaal bis 220 Personen</li>
                <li>Staufersaal bis 160 Personen</li>
                <li>Welfenzimmer bis 30 Personen</li>
                <li>Terrasse bis 600 Personen</li>
                <li>Restaurant bis 80 Personen</li>
            </ul>
            <h2>
                So koennte ein Tag bei uns verlaufen...
            </h2>
            <p>
            <b>Nach der Trauung</b> heißen wir Sie und Ihre Gäste zu einem Sektempfang
            auf unserer Panoramaterrasse oder der Hotelbar willkommen.
            </p>
            <p>
            <b>Am Nachmittag</b> bereiten wir ihnen gerne eine festlich gedeckte Kaffeetafel mit ausgewählten Kuchen für Sie.
            Auch die traditionelle Hochzeitstorte kann jetzt angeschnitten werden.
            </p>
            <p>
                <b>Am Abend</b> servieren wir Ihnen gerne einen Apéritif auf unserer Terrasse über den Dächern von Heidelberg vor dem Abendessen. Wir verwöhnen Sie mit einen exklusiven Hochzeitsmenu oder einem festlichen Buffet ganz nach Ihren Vorstellungen. Eröffnen Sie anschließend die Tanzfläche mit einem traditionellen Hochzeitswalzer.
            </p>
            <p>
                <b>Gegen Mitternacht</b> bereiten wir Ihnen gerne einen kleinen Mitternachtssnack vor.
            </p>
            <Footer />
        </div>
    )
}

export default Hochzeiten