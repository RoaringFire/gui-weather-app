import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/RailIcon.jsx"
import {TflStatus, getBusStatus} from "../tfl.jsx";

// currently hardcoded. add actual data here (pass the data as parameters in this widget)
// add them as tables or lists here, i'll try by best to style them :)
function BusStatus() {
    const inputRef = useRef("");

    const [busRoute, setBusRoute] = useState("");
    const [isRouteBlank, setIsRouteBlank] = useState(false);
    const [isReqError, setIsReqError] = useState(false);
    const [reqStatusCode, setReqStatusCode] = useState(null);
    const [busStatusData, setBusStatusData] = useState(null);

    const busStatus = async () => {
        const route = inputRef.current.value.trim();

        // clear previous data from previous request
        setBusStatusData(null);
        setReqStatusCode(null);
        setIsReqError(false);

        if(!route) {
            setIsRouteBlank(true);
            return;
        }

        const result = await getBusStatus(route);
        setBusStatusData(result.data);
        setReqStatusCode(result.statusCode);

        setIsRouteBlank(false);
        setIsReqError(result.statusCode !== 200);
    };

    return (
        <>
            <h3>Bus status</h3>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>Find a bus route to see its current status:</div>
                <div className="busStatusForm">
                    <input
                        ref={inputRef}
                        type="text"
                        value={busRoute}
                        onChange={(e) => setBusRoute(e.target.value)}
                    />
                    <button className="buttonPrimary" onClick={busStatus}>Get status</button>
                </div>
                {(busStatusData && reqStatusCode === 200 && !isReqError) && (
                    <div className="busStatusCard">
                        <div className="busStatusCardHeader">Bus status for {busStatusData.name}</div>
                        <div style={{ fontSize: "0.92rem", fontWeight: "700" }}>{busStatusData.lineStatuses[0].statusSeverityDescription}</div>
                        {busStatusData.lineStatuses[0].reason && <p>{busStatusData.lineStatuses[0].reason}</p>}
                    </div>
                )}
                
                {isReqError && (
                    <div className="busStatusCard">
                        <div className="busStatusCardHeader">Error</div>
                        <div>There is no data available for this bus route. A route might not exist, or there is a connection error with TfL's server.</div>
                    </div>
                )}

                {isRouteBlank && (
                    <div className="busStatusCard">
                        <div className="busStatusCardHeader">Error</div>
                        <div>Please enter a bus route</div>
                    </div>
                )}
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

    const [isLoading, setIsLoading] = useState(true);
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tflStatus = new TflStatus(17);
            await tflStatus.calculateOutput();
            setLines(tflStatus.getOutput());
            setIsLoading(false);
        };

        fetchData();
    }, []);

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
                    {(!isLoading && lines.length > 0) && lines.map((line) => (
                        <tr>
                            <td>{line.name.charAt(0).toUpperCase() + line.name.slice(1)}</td>
                            <td>{line.status}</td>   
                        </tr>
                    ))}

                    {isLoading && <tr><td colSpan="2" style={{ textAlign: "center" }}>Please wait for the data to load.</td></tr>}

                    {(!isLoading && lines.length == 0) && <tr><td colSpan="2" style={{ textAlign: "center" }}>No data is currently available.</td></tr>}
                </tbody>
            </table>
        </>
    );
}


function TravelImpactsCard({ onDragStart,isLondon}) {
    const [currentSec, setCurrentSec] = useState("rail");

    if (!isLondon){
        return
    }

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