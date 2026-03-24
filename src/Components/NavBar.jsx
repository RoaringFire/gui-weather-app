import "../styles/NavBar.css"
import CloseIcon from "./vector_icons/CloseIcon.jsx";

function NavBar({ menuOpen, closeMenu }) {
    return (
        <div className={`menuOverlay ${menuOpen ? "showOverlay" : ""}`}>
            <div className={`sideBar ${menuOpen ? "showMenu" : ""}`}>
                <button className="closeButton" onClick={closeMenu}><CloseIcon size="35" /></button>
                <div className="menuItems">
                    <button className="menuButton">Settings</button>
                    <button className="menuButton">Customisation</button>
                    <button className="menuButton">Notification</button>
                    <button className="menuButton">Help</button>
                </div>
            </div>
        </div>
    )
}
export default NavBar