import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RootPage } from "./pages/Root.js";
import { RestaurantDetailPage } from "./pages/RestaurantDetail.js";
import { TopPage } from "./pages/1pageme.js";
import { RestaurantListPage } from "./pages/RestaurantList.js";
import { VideoPage } from "./pages/2pageme.js";
import { aboutPage } from "./pages/3pageme.js";

function Header() {
  return (
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            Game実況者
            <br className="is-hidden-tablet" />
            キヨ
          </h1>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer ">
      <div className="content">
        <p className="has-text-centered">
          これは日本大学文理学部情報科学科の開講科目「Web
          プログラミング」の教材として作成されたサンプルアプリケーションです。
        </p>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <Router>
      <Header />
      <section className="section has-background-warning-light">
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <TopPage />
            </Route>
            <Route path="/restaurants" exact>
              <RestaurantListPage />
            </Route>
            <Route path="/restaurants/:restaurantId">
              <RestaurantDetailPage />
            </Route>
            <Route path="/video">
              <VideoPage />
            </Route>
            <Route path="/about">

            </Route>
          </Switch>
        </div>
      </section>
      <Footer />
    </Router>
  );
}