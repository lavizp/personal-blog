import { Route,Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import ArticlePage from './Pages/ArticlePage';
import ArticlesPage from './Pages/ArticlesPage';
import AboutPage from './Pages/AboutPage';
function App() {
  return (
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/article/:id" element={<ArticlePage/>}/>
      <Route path ="/articles" element={<ArticlesPage/>}/>
      <Route path ="/about" element={<AboutPage/>}/>


        
    </Routes>
  )
}
export default App
