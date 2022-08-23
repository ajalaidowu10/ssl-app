import react from 'react';
import './Aside.css'

const Aside = () => (
	<div className="aside">
		<div className="heading">
		 	<h4>CloudletHR</h4>
		 	<p>
		 		Industry tested no1 software solutions for modern human resource
		 		providers over the world
		 	</p>
		</div>
	 	<div className="pay-section">
	 		<h4>Paying</h4>
	 		<h3>N 40000 NGN</h3>
	 		<p>for 300 employment</p>
	 	</div>
	 	<div className="make-payment">
	 		<div className="triangle">
	 			<div className="triangle-base" onClick={() => alert('proceed to payment')}>Make Payment</div>
	 		</div>
	 	</div>

  </div>
	);

export default Aside