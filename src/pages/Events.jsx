import Footer from "../components/Footer.jsx"
import Header from "../components/Header.jsx"
import EventCard from "../components/EventCard.jsx"
import '../App.css'
import './Events.css'
import ImageCarousel from "../components/ImageCarousel.jsx"
import image1 from "../assets/eventTitleImage1.webp"
import image2 from "../assets/eventTitleImage2.webp"
import image3 from "../assets/eventTitleImage3.webp"
import saalSP from "../assets/saalSP.jpg"

const Events = () => {

    const ElvisMeetsDinner = {
        title: 'Elvis Meets Dinner',
        date: '16. November 2024',
        description: `Reise mit uns zurück in die 50er, 60er und 70er Jahre
            und erlebe bei einem exquisiten 3-Gang Menue
            live, die erfolgreichsten Hits von Elvis Presley.
            Mit einem gewaltigen Stimmvolumen
            und den authentischen Bewegungen lassen wir Dich glauben,
            der King stehe selbst auf der Bühne.
            In den Outfits von Presleys persönlichem Schneider
            nimmt Rami Aslan, Dich mit auf eine mitreißende Zeitreise in die Ära des King of Rock 'n' Roll.`,
        image: saalSP,
        cost: '89,00 € p.P.',
        agenda: ['Show', 'Glas Sekt', '3-Gang Menu'],
        additionalInfo: 'Die Getränke zum Abendessen sind nicht im Eintrittspreis enthalten.',
        prices: ['89,00 € p.P.']
    };

    const images = [
        { src: image1, alt: 'Image 1' },
        { src: image2, alt: 'Image 2' },
        { src: image3, alt: 'Image 3' },
    ];

    return (
        <div className='App'>
            <Header page='Events' />
            <ImageCarousel title="Events" images={images} />
            <div class="events">
                <div class="events-list">
                    <p>Unser Programm ist vielfältig: Jazzkonzerte, Theater, Vernissagen, Geburtstagsfeiern, Familienfeiern, Jubiläen, Firmenfeiern.</p>
                </div>
                <div class="description">
                    <p>Sie möchten einen besonderen Tag in Ihrem Leben außergewöhnlich feiern. Wir geben Ihnen den passenden Rahmen. Neben unserem Restaurant und der Panoramaterrasse stehen Ihnen der Staufersaal, das Welfenzimmer und der historische Spiegelsaal zur Verfügung.</p>
                </div>
                <h2>
                    Anstehende Events
                </h2>
                <div className="events-container">
                    <EventCard event={ElvisMeetsDinner}/>
                    <EventCard event={ElvisMeetsDinner}/>
                    <EventCard event={ElvisMeetsDinner}/>
                    <EventCard event={ElvisMeetsDinner}/>
                    <EventCard event={ElvisMeetsDinner}/>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Events