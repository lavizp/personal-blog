import { Route,Routes } from 'react-router-dom';
import HomePage from "../Pages/HomePage"
import ArticlePage from '../Pages/ArticlePage';
import ArticlesPage from '../Pages/ArticlesPage';
import AboutPage from '../Pages/AboutPage';
import WritePage from '../Pages/WritePage';
import SearchArticle from '../Pages/SearchArticle';

function UserRoutes() {
  return (
    <Routes>
    <Route path ="/" element={<HomePage/>}/>
    <Route path ="/article/:id" element={<ArticlePage/>}/>
    <Route path ="/articles" element={<ArticlesPage/>}/>
    <Route path ="/about" element={<AboutPage/>}/>
    <Route path ="/submit" element={<WritePage/>}/>
    <Route path ="/search/:title" element={<SearchArticle/>}/>
  </Routes>
  )
}
export default UserRoutes