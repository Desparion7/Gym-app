import './loadingspinner.css';

const LoadingSpinner = () => {
	return (
		<div className='spinner-box'>
			<div className='lds-ring'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
