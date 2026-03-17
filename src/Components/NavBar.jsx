import "./ComponentCSS/NavBar.CSS"

function NavBar()
{
    return(
        <div className="menuOverlay">
            <div className="SideBar">
                <button className="CloseButton">X</button>
                <button className="menuButton">Settings</button>
                <button className="menuButton">Customisation</button>
                <button className="menuButton">Notification</button>
                <button className="menuButton">Help</button>
            </div>
        </div>
    )
}

export default NavBar