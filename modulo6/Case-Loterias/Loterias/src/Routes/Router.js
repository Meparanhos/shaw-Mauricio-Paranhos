import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MegaSena } from "../Pages/MegaSena"
import { Quina } from "../Pages/Quina"
import { LotoFacil } from "../Pages/LotoFacil"
import { LotoMania } from "../Pages/LotoMania"
import { TimeMania } from "../Pages/TimeMania"
import { DiaDeSorte } from "../Pages/DiaDeSorte"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MegaSena />} />
         <Route path="/quina" element={<Quina />} /> 
        <Route path="/lotofacil" element={<LotoFacil />} /> 
        <Route path="/lotomania" element={<LotoMania />} />
        <Route path="/timemania" element={<TimeMania />} />
        <Route path="/diadesorte" element={<DiaDeSorte />} /> 
      </Routes>
    </BrowserRouter>
  )
}