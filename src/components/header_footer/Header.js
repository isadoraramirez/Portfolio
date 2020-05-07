import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';



export default class Header extends Component {

  state = {
    right: false,
    headerShow: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  

  handleScroll = (e) => {
    if (window.scrollY > 0) {
      this.setState({headerShow: true})
    } else {
      this.setState({headerShow: false})
    }
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleCloseDrawer = (value) => {
    this.setState({right: value}) 
  }

	render() {
		return (
			<div>
				<AppBar
					position="fixed"
					style={{
						backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
						boxShadow: 'none',
						padding: '10px 0'
					}}
				>
					<Toolbar>
						<div className="header_logo">
							<div className="font_righteous header_logo_venue">Ely Ramírez</div>
							<div className="header_logo_title">Front-end Developer</div>
						</div>
				
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
