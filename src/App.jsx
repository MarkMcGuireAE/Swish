import { Route, Routes} from "react-router-dom"
import Homepage from "./pages/Homepage"
import ContactUs from "./pages/ContactUs"
import Registration from "./pages/Registration"
import Schedule from "./pages/Schedule"

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/pages/Registration" element={<Registration/>} />
      <Route path="/pages/Schedule" element={<Schedule/>} />
      <Route path="/pages/ContactUs" element={<ContactUs/>} />

    </Routes>
  )
}

export default App
