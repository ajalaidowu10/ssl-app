import React from 'react';
import './Card.css';

const Card = ({alias, title, description, price}) => (
		<div className="card">
			<div className="content right">
				<h5>{ alias }</h5>
			</div>
			<div className="content left">
				<h3>{ title }</h3>
				<p>{ description }</p>
				<p className="price">For as low as</p>
				<p className="price"><strong>N { price } NGN</strong><small>per employer</small></p>
				
			</div>
		</div>
	);

export default Card;