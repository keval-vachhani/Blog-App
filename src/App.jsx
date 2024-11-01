import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <PostListProvider>
      <div className="background">
        <SideBar></SideBar>

        <div style={{ width: "100%",     height: "100vh"}}>
        <div className="header-comp">  <Header></Header></div>
          <div className="posts">
            <Outlet />
          </div>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
