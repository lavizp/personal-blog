import { Route,Routes } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import ArticlePage from './Pages/ArticlePage';
function App() {
  return (
    <Routes>
      <Route path ="/" element={<HomePage/>}/>
      <Route path ="/article/:id" element={<ArticlePage/>}/>
        
    </Routes>
  )
}
export default App
