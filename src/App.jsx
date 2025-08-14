import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./LayoutRouting/Layout"
import QuizStartPage from "./QuizStartPage/QuizStartPage"
function App() {
 

  return (
    <Router>
     <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<QuizStartPage/>}/>
        </Route>
     </Routes>
    </Router>
  )
}

export default App
