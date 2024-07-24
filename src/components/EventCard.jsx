import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
    const [isDetailViewOpen, setIsDetailViewOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const openDetailView = () => {
        setIsDetailViewOpen(true);
        setIsHovered(true);
    };

    const closeDetailView = () => {
        setIsDetailViewOpen(false);
        setIsHovered(false);
    };

    return (
        <div>
            <div
                className={`event-container ${isHovered ? 'hovered' : ''}`}
                onClick={openDetailView}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => !isDetailViewOpen && setIsHovered(false)}
            >
                <div className="container-image">
                    <img src={event.image} alt={event.title} />
                </div>
                <div className="container-text">
                    <h2 className="text-title">{event.title}</h2>
                    <p className="text-date">{event.date}</p>
                    <p className="gradient-text">{event.description}</p>
                    <h3 className="text-cost"><b>{event.cost}</b></h3>
                </div>
            </div>

            {isDetailViewOpen && (
                <div id="detail-view" className="detail-view show">
                    <div className="detail-content">
                        <span className="close-btn" onClick={closeDetailView}>&times;</span>
                        <div>
                            <h2>{event.title}</h2>
                            <h3>Beschreibung</h3>
                            <p>{event.description}</p>
                            <h3>Agenda</h3>
                            <ol>
                                {event.agenda.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ol>
                            <h3>Zusaetzliche Information</h3>
                            <p>{event.additionalInfo}</p>
                            <h3>Preis(e)</h3>
                            <ul>
                                {event.prices.map((price, index) => (
                                    <li key={index}>{price}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EventCard;
