import BusIcon from "./vector_icons/BusIcon.jsx"
import TrainIcon from "./vector_icons/TrainIcon.jsx"
import TramIcon from "./vector_icons/TramIcon.jsx"

function TravelImpactsCard() {
    return (  
        <div className="advisoryCard travelImpacts">
            <div className="advisoryHeader">Commute impact</div>
            <div className="travelModeImpactContainer">
                <a href="#">
                    <div className="travelModeImpact travelModeGood">
                        <BusIcon size="20" />
                        <div>Bus</div>
                        <div>Good service</div>
                    </div>
                </a>
                <a href="#">
                    <div className="travelModeImpact travelModeWarning">
                        <TrainIcon size="20" />
                        <div>Rail</div>
                        <div>Minor delays</div>
                    </div>
                </a>
                <a href="#">
                    <div className="travelModeImpact travelModeDanger">
                        <TramIcon size="20" />
                        <div>Trams</div>
                        <div>Severe delays</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default TravelImpactsCard;