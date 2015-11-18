import React from 'react';
import TopHeader from 'components/header/TopHeader';
import BottomHeader from 'components/header/BottomHeader';

import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import counterActions         from 'actions/counter';


const mapStateToProps = (state) => ({
  counter : state.counter,
  routerState : state.router
});
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(counterActions, dispatch)
});

export class HeaderLayout extends React.Component{

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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderLayout);
