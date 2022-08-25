import { BrowserRouter, Routes, Route } from "react-router-dom"

import React from "react"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import CreateUser from "./pages/CreateUser"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Container>
        <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/create" element={<CreateUser />} />
      </Routes>
      {/* </Container> */}
    </BrowserRouter>
  )
}

export default App
