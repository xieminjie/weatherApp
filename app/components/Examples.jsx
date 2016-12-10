var React = require('react');
var Nav = require('Nav');
var {Link} = require('react-router');
var Examples = (props) =>{
	return(
		<div>
			<h1 className="text-center">Examples</h1>
			<p>Here are a few examples locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
				</li>
				<li>
					<Link to='/?location=Shanghai'>Shanghai</Link>
				</li>
			</ol>
		</div>
	)
};

module.exports = Examples;