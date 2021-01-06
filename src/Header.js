import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (

    <div className="header">
      <div className="header__left">
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRko8XNSF94A4Cwqg_nKUnQnPXcP0T_RKK8ZQ&usqp=CAU"
        alt="LinkedIn"
        />
         <div className="header__search">
            <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption
        Icon={HomeIcon}
        title='Home'

        />
        <HeaderOption
          Icon={SupervisorAccount}
          title='Network'

        />

        <HeaderOption
          Icon={BusinessCenterIcon}
          title='Network'

        />

        <HeaderOption
          Icon={ChatIcon}
          title='Network'

        />

        <HeaderOption
          Icon={NotificationsIcon}
          title='Network'

        />

        <HeaderOption
          avatar="https://kitt.lewagon.com/placeholder/users/alexek1987"
          title="me"
        />

      </div>
    </div>
  )
}

export default Header;
