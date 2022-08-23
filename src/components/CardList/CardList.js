import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({ modules }) => {
	return (
			<div className="card-list">
			  <h2>Billing & Account</h2>
				{
					modules.map((module, i) => (
						<Card 
							key={ i } 
							alias={ module.alias }
							title={ module.title } 
							description={ module.description }
							price={ module.price }
						/>)
					) 
				}
			</div>
		)
	
};

export default CardList;