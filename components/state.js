import React, { useState, useEffect } from 'react';


const StateManagement = () => {
	const [userData, setUserData] = useState();
	useEffect(() => {
		setUserData(localStorage.getItem('userData'));
	}, [sessionStorage.getItem('userData')]);

	return (
		<div>
			{this.props.children}
		</div>
	);
};

export default StateManagement;