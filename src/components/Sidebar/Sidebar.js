import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPinAngle } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import { logoSVG } from '../../assets';
import {
  SDivider,
  SLink,
  SLinkContainer,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
  SLogo,
  SSidebar,
  SSidebarButton,
  STSidebarLabel,
} from './styles';

const Sidebar = ({ sidebar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <SSidebar isOpen={sidebarOpen} isMobile={isMobile}>
      <SLogo isOpen={sidebarOpen}>
        <img src={logoSVG} alt="logo" />
      </SLogo>

      <div>
        {linksArray.map(({ icon, label, notification, to }) => (
          <SLinkContainer key={label} isActive={pathname === to}>
            <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
              <SLinkIcon>{icon}</SLinkIcon>
              {sidebarOpen && (
                <>
                  <SLinkLabel>{label}</SLinkLabel>
                  {!!notification && <SLinkNotification>{notification}</SLinkNotification>}
                </>
              )}
            </SLink>
          </SLinkContainer>
        ))}
      </div>

      <div style={{ margin: !sidebarOpen ? '0 auto' : '0'  }}>
        <SDivider isMobile={isMobile} />

        <div style={{ marginTop: 12, display: isMobile ? 'none' : 'flex', alignItems: 'center' }}>
          {sidebarOpen && <STSidebarLabel>Minimizar</STSidebarLabel>}
          <SSidebarButton
            isOpen={sidebarOpen}
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
              sidebar(!sidebarOpen);
            }}
          >
            <AiOutlineLeft color="#fff" />
          </SSidebarButton>
        </div>
      </div>
    </SSidebar>
  );
};

const linksArray = [
  {
    label: 'Home',
    icon: <BiHomeAlt />,
    to: '/',
    notification: 0
  },
  {
    label: 'Fixados',
    icon: <BsPinAngle />,
    to: '/statistics',
    notification: 3
  }
];

export default Sidebar;
