import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";

import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/RailIcon.jsx"
import TramIcon from "./vector_icons/TramIcon.jsx"

// currently hardcoded. add actual data here (pass the data as parameters in this widget)
// add them as tables or lists here, i'll try by best to style them :)
function BusStatus() {
    const [busRoute, setBusRoute] = useState("");
    return (
        <>
            <h3>Bus status</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>Find a bus route to see its current status:</div>
                <div className="busStatusForm">
                    <input
                        type="text"
                        value={busRoute}
                        onChange={(e) => setBusRoute(e.target.value)}
                    />
                    <button class="buttonPrimary">Get status</button>
                </div>
            </div>
        </>
    );
}

function RailStatus() {
    const STATUS_LIST = [
        "statusGood",
        "statusWarning",
        "statusDanger"
    ];
    return (
        <>
            <h3>Rail status</h3>
            <table className="railStatusTable">
                <thead>
                    <tr>
                        <th>Line</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Central</td>
                        <td><div className="statusGood">Good service</div></td>
                    </tr>
                    <tr>
                        <td>Circle</td>
                        <td><div className="statusWarning">Minor delays</div></td>
                    </tr>
                    <tr>
                        <td>District</td>
                        <td>
                            <div className="statusDanger">Severe delays</div>
                            <div>District Line: Severe delays between High Street Kensington and Edgware Road and MINOR DELAYS between Earl's Court and Kensington (Olympia) due to an earlier temporary unavailability of train operators. GOOD SERVICE on the rest of the line District Line: Severe delays between High Street Kensington and Edgware Road and MINOR DELAYS between Earl's Court and Kensington (Olympia) due to an earlier temporary unavailability of train operators. GOOD SERVICE on the rest of the line</div>
                        </td>
                    </tr>
                    <tr>
                        <td>Hammersmith & City</td>
                        <td>Good service</td>
                    </tr>
                    <tr>
                        <td>Metropolitan</td>
                        <td>Good service</td>
                    </tr>
                    <tr>
                        <td>Waterloo & City</td>
                        <td>Good service</td>
                    </tr>
                    <tr>
                        <td>Piccadilly</td>
                        <td>Good service</td>
                    </tr>
                    <tr>
                        <td>Bakerloo</td>
                        <td>Good service</td>
                    </tr>
                    <tr>
                        <td>Northern</td>
                        <td>Good service</td>
                    </tr>
                    <tr>
                        <td>Elizabeth line</td>
                        <td>Good service</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


function TravelImpactsCard({ onDragStart }) {
    const [currentSec, setCurrentSec] = useState("rail");

    return ( 
        <div className="advisoryCard travelImpacts" onDragStart={onDragStart} draggable>
            <div className="advisoryHeader">Commute impact</div>
            {/* setup navigation links for bus, rail and tram statuses */}
            <nav className="travelModeImpactContainer">
                <a type="button" onClick={() => setCurrentSec("bus")}>
                    <div className="travelModeImpact">
                        <div className="group1">
                            <BusIcon size="20" />
                            Bus
                        </div>
                    </div>
                </a>

                <a type="button" onClick={() => setCurrentSec("rail")}>
                    <div className="travelModeImpact">
                        <div className="group1">
                            <TrainIcon size="20" />
                            Rail
                        </div>
                    </div>
                </a>
            </nav>

            {/* setup appropriate components for each section selected */}
            {currentSec == "bus" && <BusStatus />}
            {currentSec == "rail" && <RailStatus />}
        </div>
    );
}

export default TravelImpactsCard;