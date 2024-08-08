import Footer from "./components/Footer"
import Main from "./pages/Main"
import Account from "./pages/Account"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="account" element={<Account />} />
    </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App