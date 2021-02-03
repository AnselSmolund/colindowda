import React from "react";
import "./App.css";
import styled from "styled-components";
import NavComponent from "./components/NavComponent";
import About from "./pages/About";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import BlogPost from "./components/BlogPost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserProvider from "./providers/UserProvider";

const MainContainer = styled.div`
  font-family: "Montserrat", sans-serif;
`;
function App() {
  return (
    <MainContainer>
      <NavComponent />
      <Router>
        <UserProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/:id" component={BlogPost} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
          </Switch>
        </UserProvider>
      </Router>
    </MainContainer>
  );
}

export default App;
