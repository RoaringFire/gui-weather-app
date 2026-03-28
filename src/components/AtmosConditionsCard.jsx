// currently hardcoded. add actual data here (pass the data as props in this widget)

function AtmosConditionsCard({onDragStart}) {
    return (
        <div onDragStart={onDragStart} draggable>
            <div className="statsTileContainer">
                <div className="statsTileCard">
                    <div className="statsTileValue">2</div>
                    <div className="statsTileDesc">
                        Air pollution.
                        <p>Low pollution.</p>
                        <p>Enjoy your usual outdoor activities.</p>
                    </div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        5
                        <sup>mph</sup>
                    </div>
                    <div className="statsTileDesc">
                        Wind speed.
                    </div>
                </div>
            </div>

            <div className="statsTileContainer">
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        18
                        <sup>mi</sup>
                    </div>
                    <div className="statsTileDesc">
                        Visibility.
                        <p>Perfectly clear view.</p>
                    </div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        0
                        <sup>mm</sup>
                    </div>
                    <div className="statsTileDesc">Precipitation.</div>
                </div>
            </div>

            <div className="statsTileContainer">
                <div className="statsTileCard">
                    <div className="statsTileValue">
                        78
                        <sup>%</sup>
                    </div>
                    <div className="statsTileDesc">Humidity</div>
                </div>
                <div className="statsTileCard">
                    <div className="statsTileValue">18:13</div>
                    <div className="statsTileDesc">Time of sunset.</div>
                </div>
            </div>
        </div>
    );
}

export default AtmosConditionsCard;