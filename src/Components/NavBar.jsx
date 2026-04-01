import "../styles/NavbarStyles.css";
import { useNavigate } from "react-router-dom";

import CloseIcon from "./vector_icons/CloseIcon.jsx";
import HelpIcon from "./vector_icons/HelpIcon.jsx";
import NotifyIcon from "./vector_icons/NotifyIcon.jsx";
import SettingsIcon from "./vector_icons/SettingsIcon.jsx";
import CustomiseIcon from "./vector_icons/CustomiseIcon.jsx";
{/*Function for making a navigation menu that overlaps over the main page. */}
function NavBar({ menuOpen, closeMenu }) {
    
    const navigate = useNavigate();
    return (
        
        <div className={`menuOverlay ${menuOpen ? "showOverlay" : ""}`}>
            <div className={`sideBar ${menuOpen ? "showMenu" : ""}`}>
                {/* button for closing the navigation menu, with parts above being the logoc behind havng the navigation menu open over the top of the main page */}
                <button className="closeButton" onClick={closeMenu}><CloseIcon size="35" /></button>
                <div className="menuItems">
                    {/* On clicking the settings button in the navigation menu, this will take you to the settings page */}
                    <button onClick={() => navigate("/settings", { replace: true })} className="menuButton">
                        <SettingsIcon size="24" />
                        Settings
                    </button>
                    {/* on clicking the customisation button in the navigation menu, this will take you to the customisation page. */}
                    <button onClick={() => navigate("/customise", { replace: true })} className="menuButton">
                        <CustomiseIcon size="24" />
                        Customisation
                    </button>
                    {/* on clicking the help button on the navigation menu, this will take you to the help page.*/}
                    <button onClick={() => navigate("/help", {replace: true })} className="menuButton">
                        <HelpIcon size="24" />
                        Help
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NavBar