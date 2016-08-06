React = require('react');
ReactRouter = require('react-router');
ReactHelmet = require('react-helmet');

import Home from './react-components/home/home.jsx';

App = React.createClass({
  getInitialState() {
    // ItemsSub = Meteor.subscribe("items", () => {
    //   this.setState({isReady: true});
    // });
    return {
      isReady: false,
    };
  },
  render() {
    return (
      <div>
        <header>Header { (this.state.isReady) ? "(..sub ready, live data now!)" : null }</header>
        {this.props.children}
        <footer>Footer</footer>
      </div>
    );
  }
});

const {Route, Router, Link} = ReactRouter;

var Home2 = React.createClass({
  render: function() {
    return (
      <div>
        <ReactHelmet
            title="My Title2"
            titleTemplate="MySite.com - %s"
            defaultTitle="My Default Title"
            meta={[
                {"name": "description", "content": "Helmet application"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <h1>Home2</h1>
        <Link to="/">home</Link>
      </div>
    );
  }
});

Meteor.startup(function() {
  AppRoutes = (
    <Router>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/home2" component={Home2} />
      </Route>
    </Router>
  );
  ReactRouterSSR.Run(AppRoutes, {
    props: {
      onUpdate() {
        $(window).trigger('annako.root.spaupdate')
      }
    }
  }, {
    htmlHook: function (data) {
      const head = ReactHelmet.rewind();
      return data.replace('<head>', '<head>' + head.title + head.base + head.meta + head.link + head.script);
    }
  });
});