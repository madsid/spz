import React from 'react';
import TopHeader from 'components/header/TopHeader';
import BottomHeader from 'components/header/BottomHeader';


export default class HeaderLayout extends React.Component{

	static propTypes = {

	}

	static defaultProps = {

	}

	render() {
		return (
			<div> 
				<TopHeader />
				<BottomHeader />
			</div>
		); 
	}
}