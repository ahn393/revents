import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu, Image } from 'semantic-ui-react'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

function NavBar({ createFormOpen }) {
  const {authenticated} = useSelector(state => state.auth)

  return (
    <Menu borderless inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} exact to='/' header>
          <Image src='/assets/edu-x2.png' size='tiny' />
        </Menu.Item>
        <Menu.Item as={NavLink} to='/events' name='Events' />
        <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
        {
          authenticated && 
            <Menu.Item as={NavLink} to='/createEvent'>
              <Button positive inverted color='teal' content='Create Event' />
            </Menu.Item>
        }
        {
          authenticated 
            ? <SignedInMenu />
            : <SignedOutMenu />
        }
      </Container>
    </Menu>
  )
}

export default NavBar
