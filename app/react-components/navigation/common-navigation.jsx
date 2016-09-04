React = require('react');
ReactHelmet = require('react-helmet');
ReactRouter = require('react-router');
const {Link} = ReactRouter;

var CommonNavigation = React.createClass({
  render: function() {
    return (
      <ul className="common-nav">
        <li><Link to="/">home</Link></li>
        <li><Link to="/services/">services</Link></li>
        <li><Link to="/contacts/">contacts</Link></li>
        <li><Link to="/portfolio/">portfolio</Link></li>
        <li><Link to="/about/">about</Link></li>
        <li><Link to="/partners/">partners</Link></li>
        <li><Link to="/blog/">blog</Link></li>
      </ul>
    );
  }
});

export default CommonNavigation