import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ParallaxProvider } from "react-scroll-parallax"
import ScrollToTop from "react-router-scroll-top"
import "../../fontello/css/fontello.css"

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Projects from "../pages/Projects/Projects"
import Activities from "../components/MainGallery/ActivitiesGallery"
import Travels from "./Projects/Gallery/Travels"
import Cats from "./Projects/Gallery/Cats"
import Polska from "./Projects/Gallery/Poland"
import Mountains from "../pages/Projects/Gallery/Mountains"

import BaseLayout from "./BaseLayout"
import Situations from "./Projects/Gallery/Situations"

function IndexPage() {
  return (
    <>
      {" "}
      <ParallaxProvider>
        <Router>
          <ScrollToTop>
            <BaseLayout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/mountains" component={Mountains} />
                <Route exact path="/travels" component={Travels} />
                <Route exact path="/cats" component={Cats} />
                <Route exact path="/activities" component={Activities} />
                <Route exact path="/poland" component={Polska} />
                <Route exact path="/situations" component={Situations} />
              </Switch>
            </BaseLayout>
          </ScrollToTop>
        </Router>
      </ParallaxProvider>
    </>
  )
}

export default IndexPage
