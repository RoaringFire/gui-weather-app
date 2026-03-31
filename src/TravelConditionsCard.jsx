// currently hardcoded. add actual data here (pass the data as parameters in this widget)

import { useState, useEffect } from "react";
import TflStatus from "../tfl.jsx";

function TravelConditionsCard() {

    const [lines, setLines] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tflStatus = new TflStatus(5);
            await tflStatus.calculateOutput();
            setLines(tflStatus.getOutput());
        };

        fetchData();
    }, []);

    return (  
        <div className="advisoryCard travelConditions">
            <div className="advisoryHeader">Commuting conditions</div>
            <ul>
                {lines.map((line, index) => (
                    <li key={index}>
                        {line.name} – {line.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TravelConditionsCard;