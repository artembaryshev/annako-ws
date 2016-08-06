React = require('react');
ReactHelmet = require('react-helmet');
ReactRouter = require('react-router');
const {Link} = ReactRouter;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        <ReactHelmet
            title="My Title"
            titleTemplate="MySite.com - %s"
            defaultTitle="My Default Title"
            meta={[
                {"name": "description", "content": "Helmet application"},
                {"property": "og:type", "content": "article"}
            ]}
        />
        <h1>Home</h1>
        <Link to="/home2">home2</Link>
        <div className="js-client-component" />
      </div>
    );
  }
});

export default Home