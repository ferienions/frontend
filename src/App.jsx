
import {BrowserRouter as Router,Routes,Route}from "react-router-dom"
import ListArticles from "./components/articles/ListArticles"
import ListCategories from "./components/categories/ListCategories"
import ListScategories from "./components/scategories/ListScategories"
import Menu from "./components/Menu"
function App() {
  
  return (
    <>
     <Router>
     <Menu/>
     <Routes>
      <Route path="/articles" element={<ListArticles/>}/>
      <Route path="/categories" element={<ListCategories/>}/>
      <Route path="/scategories" element={<ListScategories/>}/>
     </Routes>
     </Router>
    </>
  )
}

export default App
