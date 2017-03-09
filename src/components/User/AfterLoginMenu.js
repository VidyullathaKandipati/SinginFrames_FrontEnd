import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// const MenuItem = require('material-ui/lib/menus/menu-item');

class AfterLoginMenu extends Component {
  constructor(props, context){
    super(props);
  }
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleOpenMenu = () => {
  this.setState({
    openMenu: true,
  });
}

render() {
  return (
    <div>
      <IconMenu
        iconButtonElement={<IconButton touch={true} tooltip='Click to see menu' tooltipPosition='bottom-left'>
          <MoreVertIcon /></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem index={1} primaryText="Edit profile" />
        <MenuItem index={2} primaryText="Create Family" />
        <MenuItem index={3} primaryText="Log out" />
      </IconMenu>
    </div>
  );
}
}

export default AfterLoginMenu;
