import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/RailIcon.jsx"
import TramIcon from "./vector_icons/TramIcon.jsx"

// currently hardcoded. add actual data here (pass the data as parameters in this widget)
// add them as tables or lists here, i'll try by best to style them :)
function BusStatus() {
    return (
        <><h3>Bus status</h3></>
    );
}

function RailStatus() {
    return (
        <>
            <h3>Rail status</h3>
            <table className="railStatusTable">
                
            </table>
        </>
    );
}

function TramStatus() {
    return (
        <><h3>Tram status</h3></>
    )
}

function TravelImpactsCard({ onDragStart }) {
    const [currentSec, setCurrentSec] = useState("rail");

    return ( 
        <div className="advisoryCard travelImpacts" onDragStart={onDragStart} draggable>
            <div className="advisoryHeader">Commute impact</div>
            {/* setup navigation links for bus, rail and tram statuses */}
            <nav className="travelModeImpactContainer">
                <a type="button" onClick={() => setCurrentSec("bus")}>
                    <div className="travelModeImpact travelModeGood">
                        <div className="group1">
                            <BusIcon size="20" />
                            Bus
                        </div>
                        <div>Good service</div>
                    </div>
                </a>

                <a type="button" onClick={() => setCurrentSec("rail")}>
                    <div className="travelModeImpact travelModeWarning">
                        <div className="group1">
                            <TrainIcon size="20" />
                            Rail
                        </div>
                        <div>Some delays</div>
                    </div>
                </a>

                <a type="button" onClick={() => setCurrentSec("tram")}>
                    <div className="travelModeImpact travelModeWarning">
                        <div className="group1">
                            <TramIcon size="20" />
                            Trams
                        </div>
                        <div>Some delays</div>
                    </div>
                </a>
            </nav>

            {/* setup appropriate components for each section selected */}
            {currentSec == "bus" && <BusStatus />}
            {currentSec == "rail" && <RailStatus />}
            {currentSec == "tram" && <TramStatus />}
        </div>
    );
}

export default TravelImpactsCard;