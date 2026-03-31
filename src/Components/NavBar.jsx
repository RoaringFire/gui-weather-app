import "../styles/NavbarStyles.css";
import { useNavigate } from "react-router-dom";

import CloseIcon from "./vector_icons/CloseIcon.jsx";
import HelpIcon from "./vector_icons/HelpIcon.jsx";
import NotifyIcon from "./vector_icons/NotifyIcon.jsx";
import SettingsIcon from "./vector_icons/SettingsIcon.jsx";
import CustomiseIcon from "./vector_icons/CustomiseIcon.jsx";

function NavBar({ menuOpen, closeMenu }) {
    const navigate = useNavigate();
    return (
        <div className={`menuOverlay ${menuOpen ? "showOverlay" : ""}`}>
            <div className={`sideBar ${menuOpen ? "showMenu" : ""}`}>
                <button className="closeButton" onClick={closeMenu}><CloseIcon size="35" /></button>
                <div className="menuItems">
                    <button onClick={() => navigate("/settings", { replace: true })} className="menuButton">
                        <SettingsIcon size="24" />
                        Settings
                    </button>
                    <button onClick={() => navigate("/customise", { replace: true })} className="menuButton">
                        <CustomiseIcon size="24" />
                        Customisation
                    </button>
                    <button className="menuButton">
                        <NotifyIcon size="24" />
                        Notification
                    </button>
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