import React from 'react'
import Calendar from 'react-calendar'
import { Menu, Header } from 'semantic-ui-react'

function EventFilters() {
  return (
    <>
      <Menu vertical size='large' style={{width: '100%'}}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item content='All Events' />
        <Menu.Item consent="I'm going"/>
        <Menu.Item consent="I'm hosting" />
      </Menu>
      <Header icon='calendar' attached color='teal' content='Select date' />
      <Calendar />
    </>
  )
}

export default EventFilters