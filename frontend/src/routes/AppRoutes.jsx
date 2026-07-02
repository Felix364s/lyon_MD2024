import { Routes, Route } from "react-router-dom"

import Carparks from "../pages/Carparks"
import Events from "../pages/Events"
import Weather from "../pages/Weather"
import Settings from "../pages/Settings"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Carparks />} />
            <Route path="/events" element={<Events />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/settings" element={<Settings />} />
            </Routes>
    )
}

export default AppRoutes