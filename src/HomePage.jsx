import { BrowserRouter, Routes, Route, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { AppData } from "./components/AppData.jsx";

function HomePage({ currentWeatherData,hourlyWeatherData,airPollutionData}) {

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
    {
      id: 2, 
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
    {id: 3, content: <TravelImpactsCard onDragStart={() => handleDragStart(3)} isLondon ={isLondon()}/>}
  ];

  const [draggableWidgets, setDraggableWidgets] = useState(draggableWidgetsList);
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
  const moveWidget = (widgetsList, fromIndex, toIndex) => {
    const listCopy = [...widgetsList];
    if(fromIndex < toIndex) {
      listCopy.splice(toIndex + 1, 0, listCopy[fromIndex]);
      listCopy.splice(fromIndex, 1);
    } else if(fromIndex > toIndex) {
      listCopy.splice(toIndex, 0, listCopy[fromIndex]);
      listCopy.splice(fromIndex + 1, 1);
    }
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
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="container">
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
                {draggableWidgets.map((w, i) => (
                  <DragDropContainer
                    child={w.content}
                    key={w.id}
                    onDrop={handleDrop}
                    onDragEnter={() => handleDragEntered(w.id)}
                    onDragLeave={handleDragLeave}
                    isDraggedOver={w.id == draggedOverContainerId}
                  />
                ))}
                {/* <WeatherForecastTable />
                <WeatherAdvisoryCard />
                <AtmosConditionsCard />
                <TravelImpactsCard /> */}
              </main>
            </div>
          } 
        />
        <Route path="/settings" element={<Settings goBack={() => {navigate("/")}}/>} />
        <Route path="/customise" element={<Customisation goBack={() => {navigate("/")}}/>} />
      </Routes>
    </>
  )
}

export default HomePage
