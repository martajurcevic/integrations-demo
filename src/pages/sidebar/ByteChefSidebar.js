import React, { useState } from 'react';
import ReactDOM from 'react-dom';



import { Container, Sidebar, Sidenav, Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import Integrations from '../categories/Categories';
import Categories from '../categories/Categories';
import Home from '../home/Home';


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};


const ByteChefSidebar = () => {
  const [expand, setExpand] = useState(true);
  return (
    <Sidebar
      style={{ display: 'flex', flexDirection: 'column' }}
      width={expand ? 260 : 56}
      collapsible
    >
      <Sidenav.Header>
        <div style={headerStyles}>
          <span style={{ marginLeft: 12 }}> {" "} Integrations </span>
        </div>
      </Sidenav.Header>
      <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" href="/">Home</Nav.Item>
            <Nav.Menu 
              eventKey="2"
              trigger="hover"
              title="Categories"
              placement="rightStart"
              noCaret
            >
              <Nav.Item eventKey="3-1" href="/categories">All categories</Nav.Item>
              <Nav.Item eventKey="3-2">CRM</Nav.Item>
              <Nav.Item eventKey="3-2">Marketing</Nav.Item>
              <Nav.Item className="navitem" eventKey="3-3">Category 3</Nav.Item>
              <Nav.Item className="navitem" eventKey="3-4">Category 4</Nav.Item>
              <Nav.Item className="navitem" eventKey="3-5">Category 5</Nav.Item>
            </Nav.Menu>


            <Nav.Menu className="navmenu"
              title="Tags"
              noCaret
            >
              <Nav.Item className="navitem" eventKey="4-1">Tag1</Nav.Item>
              <Nav.Item className="navitem" eventKey="4-2">Tag2</Nav.Item>
              <Nav.Item className="navitem" eventKey="4-3">Tag3</Nav.Item>
              <Nav.Item className="navitem" eventKey="4-4">Tag4</Nav.Item>
              <Nav.Item className="navitem" eventKey="4-5">Tag5</Nav.Item>
            </Nav.Menu>

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>

  );
};

export default ByteChefSidebar;