import cuid from 'cuid'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import { updateEvent, createEvent } from '../eventActions'

function EventForm({ history, match }) {

  const selectedEvent = useSelector(state => state.event.events.find(event => (event.id === match.params.id)))
  const dispatch = useDispatch()
  const initValues = selectedEvent || {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initValues)

  function handleFormSubmit() {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(createEvent({
          ...values,
          id: cuid(),
          hostedBy: 'Bob',
          attendees: [],
          hostPhotoURL: '/assets/user.png',
        }))
        history.push('/events')
  }

  function handleInputChange(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
    console.log(e.target)
  }

  return (
    <Segment clearing raised>
      <Header content={selectedEvent ? 'Edit event' : 'Create new event'} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event Title'
            name='title'
            value={values.title}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={values.category}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={values.description}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={values.city}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={values.venue}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={values.date}
            onChange={handleInputChange}
          />
        </Form.Field>
        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          as={Link}
          to='/events'
          type='submit'
          floated='right'
          content='Cancel'
        />
      </Form>
    </Segment>
  )
}

export default EventForm
