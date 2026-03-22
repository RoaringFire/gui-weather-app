import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/TrainIcon.jsx"
import TramIcon from "./vector_icons/TramIcon.jsx"

function BusStatus() {
    return (
        <><h3>Bus status</h3></>
    );
}

function RailStatus() {
    return (
        <><h3>Rail status</h3></>
    );
}

function TramStatus() {
    return (
        <><h3>Tram status</h3></>
    )
}

function TravelImpactsCard() {
    return ( 
        <BrowserRouter>
            <div className="advisoryCard travelImpacts">
                <div className="advisoryHeader">Commute impact</div>
                {/* setup navigation links for bus, rail and tram statuses */}
                <nav className="travelModeImpactContainer">
                    <NavLink to="/bus-status">
                        <div className="travelModeImpact travelModeGood">
                            <div className="group1">
                                <BusIcon size="20" />
                                Bus
                            </div>
                            <div>Good service</div>
                        </div>
                    </NavLink>

                    <NavLink to="/rail-status">
                        <div className="travelModeImpact travelModeWarning">
                            <div className="group1">
                                <TrainIcon size="20" />
                                Rail
                            </div>
                            <div>Some delays</div>
                        </div>
                    </NavLink>

                    <NavLink to="/tram-status">
                        <div className="travelModeImpact travelModeWarning">
                            <div className="group1">
                                <TramIcon size="20" />
                                Trams
                            </div>
                            <div>Some delays</div>
                        </div>
                    </NavLink>
                </nav>

                {/* setup appropriate components for each route */}
                <Routes>
                    <Route path="/bus-status" element={<BusStatus />} />
                    <Route path="/" element={<RailStatus />} /> {/* show rail statuses by default */}
                    <Route path="/rail-status" element={<RailStatus />} />
                    <Route path="/tram-status" element={<TramStatus />} />
                </Routes>
            </div>
        </BrowserRouter> 
    );
}

export default TravelImpactsCard;