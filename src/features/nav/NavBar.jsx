import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

function NavBar({createFormOpen}) {
  return (
    <Menu borderless inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <img src="/assets/logo.png" alt="logo" style={{marginRight: '15px'}} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events'/>
        <Menu.Item as={NavLink} to='/createEvent' >
          <Button positive inverted color='teal' content='Create Event' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='Login'/>
          <Button basic inverted content='Register' style={{marginLeft: '0.5em'}} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar
