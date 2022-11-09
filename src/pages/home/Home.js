import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './container.less';


import { Container,  Sidebar, Sidenav,  Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';


const headerStyles = {
  padding: 18,
  fontSize: 16,
  height: 56,
  background: '#34c3ff',
  color: ' #fff',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} size="sm" />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav>

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const Home = () => {
  const [expand, setExpand] = React.useState(true);
  return (
    <div className="show-fake-browser sidebar-page">
      <Container>
        <Sidebar
          style={{ display: 'flex', flexDirection: 'column' }}
          width={expand ? 260 : 56}
          collapsible
        >
          <Sidenav.Header>
            <div style={headerStyles}>
              <span style={{ marginLeft: 12 }}> <h1>Integrations</h1></span>
            </div>
          </Sidenav.Header>
          <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
            <Sidenav.Body>
              <Nav>
                <Nav.Item eventKey="1">
                  Categories
                </Nav.Item>
                <Nav.Menu
                  eventKey="3"
                  trigger="hover"
                  title="All categories"
                  placement="rightStart"
                  noCaret
                >
                  <Nav.Item eventKey="3-1">CRM</Nav.Item>
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

                <Nav.Item href="/integrations">Integrations</Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
        </Sidebar>

        <Container className='show-container'>

          <h1>home page</h1>

        </Container>
      </Container>
    </div>
  );
};

export default Home;