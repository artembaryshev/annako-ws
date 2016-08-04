React = require('react');
ReactRouter = require('react-router');

App = React.createClass({
  getInitialState() {
    ItemsSub = Meteor.subscribe("items", () => {
      this.setState({isReady: true});
    });

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

const {Route, Router} = ReactRouter;

var Home = React.createClass({
  render: function() {
    return (
      <div>Home</div>
    );
  }

});

Meteor.startup( function() {  
  AppRoutes = (
    <Router  >
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  );

  ReactRouterSSR.Run(AppRoutes);
});