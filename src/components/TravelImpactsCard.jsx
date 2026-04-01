import { useState, useEffect } from "react";

import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/RailIcon.jsx"
import {TflStatus, getBusStatus} from "../tfl.jsx";

//Use to search for and display bus statuses
function BusStatus() {
    const [busRoute, setBusRoute] = useState("");
    const [status, setStatus] = useState(null);

    //Get the status from the TfL API if the route exists
    const busStatus = async () => {
        if (!busRoute) return;

        const result = await getBusStatus(busRoute);
        setStatus(result);
    };

    //Input box, button and area to display bus statuses
    return (
        <>
            <h3>Bus status</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>Find a bus route to see its current status:</div>
                <div className="busStatusForm">
                    {/* Input and button to set the bus route to get the status from */}
                    <input
                        type="text"
                        value={busRoute}
                        onChange={(e) => setBusRoute(e.target.value)}
                    />
                    <button className="buttonPrimary" onClick={busStatus}>Get status</button>
                </div>
            </div>

            {/* If a status exists then display the route name and route status, as well as the status description if there is one */}
            {status && (
                <div style={{ marginTop: "1rem" }}>
                    <strong>{status.name}</strong>: {status.lineStatuses[0].statusSeverityDescription}
                    {status.lineStatuses[0].reason && <div>{status.lineStatuses[0].reason}</div>}
                </div>
            )}
        </>
    );
}

//Use to display rail statuses
function RailStatus() {
    const [lines, setLines] = useState([]);

    //Get the rail statuses from TfL API, calculate how its sorted and then return a list of lines and their info
    useEffect(() => {
        const fetchData = async () => {
            const tflStatus = new TflStatus(17);
            await tflStatus.calculateOutput();
            setLines(tflStatus.getOutput());
        };

        fetchData();
    }, []);

    //Area to display rail statuses
    return (
        <>
            <h3>Rail status</h3>
            <table className="railStatusTable">   
                <tbody>
                    {/* Iterate through the list of lines and create a row in the table for each, displaying the name of the line and its status */}
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

//Select between bus and rail statuses
function TravelImpactsCard({ onDragStart }) {
    const [currentSec, setCurrentSec] = useState("rail");

    return ( 
        <div className="advisoryCard travelImpacts" onDragStart={onDragStart} draggable>
            <div className="advisoryHeader">Commuting conditions</div>
            {/* setup navigation links for bus and rail */}
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