import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from "react"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreateUser from "./pages/CreateUser"
import Container from "./components/Container"
import User from "./pages/User"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
