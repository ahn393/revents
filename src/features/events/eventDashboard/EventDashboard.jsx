import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from './EventList'
import { useSelector } from 'react-redux'
import EventListItemPlaceholder from './EventListItemPlaceHolder'
import EventFilters from './EventFilters'


function EventDashboard() {
  const events = useSelector(state => state.event.events)
  const {loading} = useSelector(state => state.async)

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading &&
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        }
        <EventList
          events={events}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  )
}

export default EventDashboard
