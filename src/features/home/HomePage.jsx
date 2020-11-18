import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Segment,
  Image,
} from 'semantic-ui-react'

function HomePage({ history }) {
  return (
    <>
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Container as="div" style={{margin: '150px auto 0 auto'}}>
          <Header
            as='h3'
            inverted
            style={{
              fontFamily: 'Lato',
              fontWeight: '100',
              letterSpacing: '2px',
            }}
          >
            <Image
              src='/assets/hand-dark.png'
              style={{ width: '170px', marginBottom: 50 }}
            />
            <div>
              <Image src='/assets/edu-x2.png' style={{ width: '150px', margin: '0 auto 30px auto' }} />
            </div>

            <div style={{ color: '#eaeaea' }}>EDUCATION&nbsp;+&nbsp;TECHOLOGY</div>
          </Header>
          <Button
            onClick={() => history.push('/events')}
            // as={Link}
            // to='/events'
            size='large'
            color='teal'
            basic
            inverted
            style={{ border: '0', marginTop: 60 }}
          >
            Get Started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
    </>
  )
}

export default HomePage
