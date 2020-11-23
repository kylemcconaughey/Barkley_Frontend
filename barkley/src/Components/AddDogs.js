import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class AddDog extends React.Component {
  constructor () {
    super()
    this.state = {
      owner: '',
      name: '',
      breed: '',
      age: '',
      size: '',
      energy: '',
      temper: '',
      group_size: '',
      vaccinated: '',
      kid_friendly: '',
      created: false
    }
    this.handleOwnerChange = this.handleOwnerChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleBreedChange = this.handleBreedChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleSizeChange = this.handleSizeChange.bind(this)
    this.handleEnergyChange = this.handleEnergyChange.bind(this)
    this.handleTemperChange = this.handleTemperChange.bind(this)
    this.handleGroupSizeChange = this.handleGroupSizeChange.bind(this)
    this.handleVaccinatedChange = this.handleGroupSizeChange.bind(this)
    this.handleKidFriendlyChange = this.handleKidFriendlyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleOwnerChange (event) {
    this.setState({ owner: event.target.value })
  }

  handleNameChange (event) {
    this.setState({ name: event.target.value })
  }

  handleBreedChange (event) {
    this.setState({ breed: event.target.value })
  }

  handleAgeChange (event) {
    this.setState({ age: event.target.value })
  }

  handleSizeChange (event) {
    this.setState({ size: event.target.value })
  }

  handleEnergyChange (event) {
    this.setState({ energy: event.target.value })
  }

  handleTemperChange (event) {
    this.setState({ temper: event.target.value })
  }

  handleGroupSizeChange (event) {
    this.setState({ group_size: event.target.value })
  }

  handleVaccinatedChange (event) {
    this.setState({ vaccinated: event.target.value })
  }

  handleKidFriendlyChange (event) {
    this.setState({ kid_friendly: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://brkly.herokuapp.com/dogs/', {
        owner: this.state.owner,
        name: this.state.name,
        breed: this.state.breed,
        age: this.state.age,
        size: this.state.size,
        energy: this.state.energy,
        temper: this.state.temper,
        group_size: this.state.group_size,
        vaccinated: this.state.vaccinated,
        kid_friendly: this.state.kid_friendly
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
        }
      }
      )
      .then(response =>
        console.log(response),
      this.setState({ created: true }))
  }

  render () {
    if (this.state.created) {
      return <Redirect to='/profile/' />
    }
    return (
      <div>
        <h1 className='addHeader'> Add another pupper!</h1>
        <Col>
          <div>
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Text>
                  {this.state.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Container fluid>
          <Row>
            <Col>
              <div>
                <Form onSubmit={this.handleSubmit}>

                  <Form.Group controlId='ownerName'>
                    <Form.Label>Owner</Form.Label>
                    <Form.Control type='text' onChange={this.handleOwnerChange} />
                  </Form.Group>

                  <Form.Group controlId='dogName'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='text' onChange={this.handleNameChange}>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='breed'>
                    <Form.Label>Breed</Form.Label>
                    <Form.Control type='text' onChange={this.handleBreedChange}>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='age'>
                    <Form.Label>Age</Form.Label>
                    <Form.Control as='select' onChange={this.handleAgeChange}>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='10'>10</option>
                      <option value='11'>11</option>
                      <option value='12'>12</option>
                      <option value='13'>13</option>
                      <option value='14'>14</option>
                      <option value='15'>15</option>
                      <option value='16'>16</option>
                      <option value='17'>17</option>
                      <option value='18'>18</option>
                      <option value='19'>19</option>
                      <option value='20'>20</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='size'>
                    <Form.Label>Size</Form.Label>
                    <Form.Control as='select' onChange={this.handleSizeChange}>
                      <option value='S'>Small</option>
                      <option value='M'>Medium</option>
                      <option value='L'>Large</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='energy'>
                    <Form.Label>Energy</Form.Label>
                    <Form.Control as='select' onChange={this.handleEnergyChange}>
                      <option value='HI'>High</option>
                      <option value='MD'>Medium</option>
                      <option value='LO'>Low</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='temper'>
                    <Form.Label>Temper</Form.Label>
                    <Form.Control as='select' onChange={this.handleTemperChange}>
                      <option value='AGR'>Aggressive</option>
                      <option value='NML'>Normal</option>
                      <option value='CHL'>Relaxed</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='groups'>
                    <Form.Label>Group Sizes</Form.Label>
                    <Form.Control as='select' onChange={this.handleGroupSizeChange}>
                      <option value='ONE'>One on one</option>
                      <option value='BIG'>Good in large groups</option>
                      <option value='SML'>Good in small groups</option>
                      <option value='ANY'>Good in any setting</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='vaccinated'>
                    <Form.Label>Vaccinated</Form.Label>
                    <Form.Control as='select' onChange={this.handleVaccinatedChange}>
                      <option value='VAC'>Yes, vaccinated</option>
                      <option value='NOT'>No, I am a terrible owner</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='kids'>
                    <Form.Label>Kid Friendly</Form.Label>
                    <Form.Control as='select' onChange={this.handleKidFriendlyChange}>
                      <option value='Y'>Good with children</option>
                      <option value='N'>Not good with children</option>
                    </Form.Control>
                  </Form.Group>

                  <Button variant='outline-primary' type='submit' name='submit' value='Submit'>
                Add Dog
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default AddDog
