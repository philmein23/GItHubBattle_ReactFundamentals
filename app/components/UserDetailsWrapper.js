var React = require('react');
var PropTypes = React.PropTypes;

function UserDetailsWrapper (props) {
  return (
      <div className="col-sm-6">
        <p className="lead">{props.headers}</p>
        {props.children}
      </div>
  )
}

module.exports = UserDetailsWrapper;