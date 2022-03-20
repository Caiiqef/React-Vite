import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Carrinho } from "./pages/Carrinho"
import { Catalog } from "./pages/Catalog";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/carrinho" element={<Carrinho/>}/>
                <Route path="/catalogo" element={<Catalog/>}/>
            </Routes>
        </Router>
    )
}