import { useState } from "react";
import "../styles/HelpStyles.css";
import { Icon } from "@iconify/react";


function HelpPage({goBack}) {
  

  return (
    <>
      {/* The overhanging section that everything in the help page is contained in*/}
      <div className="HelpOverlay">
        {/* The top part of the help section that holds the back button and title for the page */}
        <div className="helpTop">
          <span className="back_button" onClick={goBack}>
            <Icon icon="mdi:arrow-left" fontSize={30} />
          </span>
          <h2 className="HelpTitle">Help</h2>
        </div>
        {/*The box which contains the 4 sections of help descriptions */}
        <div className="HelpHeader">
          {/* Weather information description that is used for listing what the weather part of the application does.*/}
          <div className="HelpSection">
            
            <h3>Weather Information</h3>
              <ul>
                <li>
                  The Weather Information section, seen at the top of the main app page, will display weather information to you like the forecast and wind speed.
                </li>
                <li>
                  To access this information, you will simply need to have the main page open and be at the top of the screen to view it.
                </li>
                <li>
                  To access more types of information, you will need to customise your app within the settings page (more information below).
                </li>
              </ul>
          </div>
          {/* Commute impact description that is used for listing what the commuting part of our application does.*/}
          <div className="HelpSection">
            <h3>Commute Impact</h3>
              <ul>
                <li> 
                  The Commute Impact section, seen at the bottom of the main weather app page, will display you information about bus and rail travel.
                </li>
                <li>
                  To access Rail information about delays or stoppages, you will need to click the Rail button, and information about railway lines will be shown.
                </li>
                <li>
                  To access Bus information on your weather app, you will need to click the Bus button, and then enter the bus route you wish to see, and its status will be displayed to you.
                </li>

              </ul>
          </div>
          {/*Settings description section used for listing what the settings page on our application does */}
          <div className="HelpSection">
            <h3>Settings</h3>
              <ul>
                <li>
                  The Settings section, accessed through the navigation bar, will allow you to customise the units you wish to view, change your minimum thresholds for temperatures, and change the colour scheme of the app from light to dark mode.
                </li>
                <li>
                  To change the colour scheme of your weather app, you can click the toggle button labelled as dark mode to on/ off.
                </li>
                <li>
                  To change the units shown on your weather app, you can click the drop down buttons in the settings page, and then choose the unit you wish to see.
                </li>
                <li>
                  Additionally, the settings page allows you to set the minimum hot, warm, and chilly temperatures of your app, so our advice can be closer tailoured to you and not just to an average.
                </li>
              </ul>
          </div>
          
          {/*Customisation description section used for listing what the customisation part of our application does.*/}
          <div className="HelpSection">
            <h3>Customisation</h3>
              <ul>
                <li>
                  The Customisation section, accessed through the navigation bar, will allow you to edit what weather and travel metrics you want displayed.
                </li>
                <li>
                  You can edit the weather and travel metrics by clicking the icons of each one you want to be active or inactive.
                  
                </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpPage;