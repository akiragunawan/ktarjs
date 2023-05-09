import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
