import { React } from 'react'
import './LeftPanel.css'
import homeicon from '/src/assets/home-1-svgrepo-com (1).svg'
import profileicon from '/src/assets/user-svgrepo-com.svg'
import charticon from '/src/assets/trend-up-svgrepo-com.svg'
import terminalicon from '/src/assets/two-way-arrows-svgrepo-com.svg'
import papericon from '/src/assets/paper-document-svgrepo-com.svg'
import settingsicon from '/src/assets/setting-gear-svgrepo-com.svg'
import logouticon from '/src/assets/logout-svgrepo-com (1).svg'



const LeftPanel = () => {
    return (
        <>
            <div id="block">
                <div id="title">LOGO</div>

                <div id="panel">
                    <div className="menu-item">
                        <img src={homeicon} alt="Home" />
                    </div>

                    <div className="menu-item">
                        <img src={profileicon} alt="Profile" />
                    </div>

                    <div className="menu-item">
                        <img src={charticon} alt="Chart" />
                    </div>

                    <div className="menu-item large">
                        <img src={terminalicon} alt="Terminal" />
                    </div>

                    <div className="menu-item">
                        <img src={papericon} alt="Paper Trade" />
                    </div>

                    {/* Divider */}
                    <div id="line"></div>

                    {/* Bottom actions */}
                    <div className="menu-item large" id='settings'>
                        <img src={settingsicon} alt="Settings" />
                    </div>

                    <div className="menu-item small" id='logout'>
                        <img src={logouticon} alt="Logout" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default LeftPanel;