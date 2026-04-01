import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// header components
import NavBar from "./components/NavBar.jsx";
import WeatherDisplayMain from "./components/FrontPageHeader.jsx";
// main content components
import "./styles/FrontPageMainStyles.css";
import WeatherForecastTable from './components/WeatherForecastTable.jsx';
import WeatherAdvisoryCard from './components/WeatherAdvisoryCard.jsx';
import TravelImpactsCard from './components/TravelImpactsCard.jsx';
import AtmosConditionsCard from "./components/AtmosConditionsCard.jsx";
import DragDropContainer from "./components/DragDropContainer.jsx";
import Customisation from "./components/Customisation.jsx";
import Settings from "./components/Settings.jsx";
import HelpPage from "./components/HelpPage.jsx";
import { AppData } from "./components/AppData.jsx";
import { useData } from "./components/useData";

function HomePage({ currentWeatherData,hourlyWeatherData,airPollutionData}) {
  const { data } = useData();

<<<<<<< HEAD
  const isLondon = () =>{
    console.log(currentWeatherData.latitude > 51.25 && currentWeatherData.latitude < 51.72 && currentWeatherData.longitude > -0.57 && currentWeatherData.longitude < 0.37)
    return currentWeatherData.latitude > 51.25 && currentWeatherData.latitude < 51.72 && 
            currentWeatherData.longitude > -0.57 && currentWeatherData.longitude < 0.37
  }

  const draggableWidgetsList = [
    {id: 0, content: <WeatherForecastTable data={[]} onDragStart={() => handleDragStart(0)}  dataList={hourlyWeatherData.list}/>},
    {
      id: 1, 
      content: <WeatherAdvisoryCard 
        onDragStart={() => handleDragStart(1)} 
        temperature = {currentWeatherData.main.temp}
        weatherType ={currentWeatherData.weather[0].main}
      />
    },
=======
  useEffect(() => {
    setDraggableWidgets([
      {id: 0, condition: data.isForecastVisible, content: <WeatherForecastTable data={[]} onDragStart={() => handleDragStart(0)}  dataList={hourlyWeatherData.list}/>},
      {id: 1, condition: data.weatherAdviceVisible, content: <WeatherAdvisoryCard onDragStart={() => handleDragStart(1)} />},
      {
        id: 2, 
        condition: true,
        content: <AtmosConditionsCard 
          onDragStart={() => handleDragStart(2)} 
          windspeed={currentWeatherData.wind.speed} 
          visibility ={currentWeatherData.visibility} 
          humidity={currentWeatherData.main.humidity} 
          sunset={currentWeatherData.sys.sunset}
          precipitation={currentWeatherData.rain?.["1h"] ?? 0}
          timeZone = {currentWeatherData.timezone}
          airIndex = {airPollutionData.list[0].main.aqi}
        />
      },
      {id: 3, condition: data.commuteConditionsVisible, content: <TravelImpactsCard onDragStart={() => handleDragStart(3)} />}
    ]);
  }, [data, hourlyWeatherData, currentWeatherData, airPollutionData]);

  const [draggableWidgets, setDraggableWidgets] = useState([
    {id: 0, condition: data.isForecastVisible, content: <WeatherForecastTable data={[]} onDragStart={() => handleDragStart(0)}  dataList={hourlyWeatherData.list}/>},
    {id: 1, condition: data.weatherAdviceVisible, content: <WeatherAdvisoryCard onDragStart={() => handleDragStart(1)} />},
>>>>>>> 1b1cf2941e6c17c9be951acf875ff6fe37a1762c
    {
      id: 2, 
      condition: true,
      content: <AtmosConditionsCard 
        onDragStart={() => handleDragStart(2)} 
        windspeed={currentWeatherData.wind.speed} 
        visibility ={currentWeatherData.visibility} 
        humidity={currentWeatherData.main.humidity} 
        sunset={currentWeatherData.sys.sunset}
        precipitation={currentWeatherData.rain?.["1h"] ?? 0}
        timeZone = {currentWeatherData.timezone}
        airIndex = {airPollutionData.list[0].main.aqi}
      />
    },
<<<<<<< HEAD
    {id: 3, content: <TravelImpactsCard onDragStart={() => handleDragStart(3)} isLondon ={isLondon()}/>}
  ];
=======
    {id: 3, condition: data.commuteConditionsVisible, content: <TravelImpactsCard onDragStart={() => handleDragStart(3)} />}
  ]);
>>>>>>> 1b1cf2941e6c17c9be951acf875ff6fe37a1762c

  const [draggedWidgetId, setDraggedWidgetId] = useState(null); // assume no item is initially dragged
  const [draggedOverContainerId, setDraggedOverContainerId] = useState(null); // widget container where the widget is currently being dragged over

  const handleDragStart = (id) => setDraggedWidgetId(id);
  const handleDragEntered = (id) => setDraggedOverContainerId(id);
  const handleDragLeave = () => setDraggedOverContainerId(null);

  const handleDrop = () => {
    // when the widget is dropped at a location, clear the drag states
    if(!draggedOverContainerId) {
      clearState();
      return;
    }

    const fromIndex = draggableWidgets.findIndex((w) => w.id == draggedWidgetId); 
    const toIndex = draggableWidgets.findIndex((w) => w.id == draggedOverContainerId); 
    setDraggableWidgets((w) => moveWidget(w, fromIndex, toIndex));
    clearState();
  }

  // move widget in the internal array so it can be rendered to the browser later
  // it should swap positions with the widget being dropped into and the widget the user has dragged and dropped
  const moveWidget = (widgetsList, fromIndex, toIndex) => {
    const listCopy = [...widgetsList];
    let temp = listCopy[fromIndex];
    listCopy[fromIndex] = listCopy[toIndex];
    listCopy[toIndex] = temp;
    return listCopy;
  };

  const clearState = () => {
    setDraggedWidgetId(null);
    setDraggedOverContainerId(null);
  };

  // sets whether the page widgets can currently be drag and dropped
  const [customiseMode, setCustomiseMode] = useState(false); 
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <header>
                <WeatherDisplayMain 
                  menuOpen={menuOpen} 
                  openMenu={() => setMenuOpen(true)} 
                  closeMenu={() => setMenuOpen(false)}
                  temp = {currentWeatherData.main.temp} 
                  feelsTemp={currentWeatherData.main.feels_like}
                  weatherType={currentWeatherData.weather[0].main}
                  cityName={currentWeatherData.name}
                />
                {menuOpen && <NavBar closeMenu={() => setMenuOpen(false)} />}
              </header>
                
              <main className="mainPanel">
                <h1>Today's forecast</h1>
                {draggableWidgets.map((w, i) => 
                  (w.condition &&
                  <DragDropContainer
                    child={w.content}
                    key={w.id}
                    onDrop={handleDrop}
                    onDragEnter={() => handleDragEntered(w.id)}
                    onDragLeave={handleDragLeave}
                    isDraggedOver={w.id == draggedOverContainerId}
                  />)
                )}
                {/* <WeatherForecastTable />
                <WeatherAdvisoryCard />
                <AtmosConditionsCard />
                <TravelImpactsCard /> */}
              </main>
            </>
          } 
        />
        <Route path="/settings" element={<Settings goBack={() => {navigate("/")}}/>} />
        <Route path="/customise" element={<Customisation goBack={() => {navigate("/")}}/>} />
        <Route path="/help" element={<HelpPage goBack={() => {navigate("/")}}/>} />
      </Routes>
    </div>
  )
}

export default HomePage
