// currently hardcoded. add actual data here (pass the data as parameters in this widget)

function TravelConditionsCard() {
    return (  
        <div className="advisoryCard travelConditions">
            <div className="advisoryHeader">Commuting conditions</div>
            <ul>
                <li>🚌 Some transport delays.<a href="#">More information...</a></li>
                <li>☔ Rain risk: Low</li>
                <li>💡 Advice: Wear sunscreen until 3 PM</li>
            </ul>
        </div>
    );
}

export default TravelConditionsCard;