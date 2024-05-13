import { Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import About from "./pages/About";
import {Home , About , NotFound} from "./pages"; //index可省略
import AlbumLayout from "./pages/AlbumLayout";
import AlbumIndex from "./pages/AlbumIndex";
import AlbumPhoto from "./pages/AlbumPhoto";
import AlbumSearch from "./pages/AlbumSearch";
// import NotFound from "./pages/NotFound";
// 0. 於index.js加入BrowserRouter 只要做一次
//  加入前端路由
// 1. 準備元件
// 2. 撰寫Routes
// 3. 加入連結

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <div className="container mt-3">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/album' element={<AlbumLayout/>}>
              <Route index element={<AlbumIndex/>}></Route>
              <Route path='search' element={<AlbumSearch/>}></Route>
              <Route path=':id' element={<AlbumPhoto/>} > </Route>
            </Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
