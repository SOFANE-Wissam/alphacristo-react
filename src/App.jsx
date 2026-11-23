import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import BecomeClient from './pages/BecomeClient'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'

// URLs are identical to the WordPress site, so existing Google rankings and inbound links keep working.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos-de-nous" element={<About />} />
        <Route path="nos-produits-fiches-techniques" element={<Products />} />
        {/* The old homepage linked to this slug */}
        <Route path="details-techniques-de-nos-produits" element={<Navigate to="/nos-produits-fiches-techniques" replace />} />
        <Route path="devenir-client" element={<BecomeClient />} />
        <Route path="nous-contacter" element={<Contact />} />
        <Route path="politique-de-confidentialite" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
