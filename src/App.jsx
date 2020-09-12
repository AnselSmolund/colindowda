import React from "react";
import "./App.css";
import styled from "styled-components";
import NavComponent from "./components/NavComponent";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import BlogPost from "./components/BlogPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainContainer = styled.div`
  font-family: "Dosis", sans-serif;
`;
function App() {
  return (
    <Router>
      <MainContainer>
        <NavComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={BlogPost} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </MainContainer>
    </Router>
  );
}

export default App;
