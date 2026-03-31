import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/RailIcon.jsx"
import {TflStatus, getBusStatus} from "../tfl.jsx";

// currently hardcoded. add actual data here (pass the data as parameters in this widget)
// add them as tables or lists here, i'll try by best to style them :)
function BusStatus() {
    const [busRoute, setBusRoute] = useState("");
    const [status, setStatus] = useState(null);

    const busStatus = async () => {
        if (!busRoute) return;

        const result = await getBusStatus(busRoute);
        setStatus(result);
    };

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
                    <button className="buttonPrimary" onClick={busStatus}>Get status</button>
                </div>
            </div>

            {status && (
                <div style={{ marginTop: "1rem" }}>
                    <strong>{status.name}</strong>: {status.lineStatuses[0].statusSeverityDescription}
                    {status.lineStatuses[0].reason && <div>{status.lineStatuses[0].reason}</div>}
                </div>
            )}
        </>
    );
}

function RailStatus() {
    const STATUS_LIST = [
        "statusGood",
        "statusWarning",
        "statusDanger"
    ];

    const [lines, setLines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tflStatus = new TflStatus(17);
            await tflStatus.calculateOutput();
            setLines(tflStatus.getOutput());
        };

        fetchData();
    }, []);

    return (
        <>
            <h3>Rail status</h3>
            <table className="railStatusTable">   
                <tbody>
                    {lines.map((line) => (
                        <tr>
                            <td>{line.name.charAt(0).toUpperCase() + line.name.slice(1)}</td>
                            <td>{line.status}</td>   
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}


function TravelImpactsCard({ onDragStart }) {
    const [currentSec, setCurrentSec] = useState("rail");

    return ( 
        <div className="advisoryCard travelImpacts" onDragStart={onDragStart} draggable>
            <div className="advisoryHeader">Commuting conditions</div>
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