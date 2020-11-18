import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class NoteEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: ''
    }
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyChange (event) {
    this.setState({ body: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('http://brkly.herokuapp.com/notes/', {
        body: this.state.body
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
      return <Redirect to='/helpful/' />
    }
    return (
      <div>
        <h1 className='answerHeader'> Add an answer!</h1>
        <Col>
          <div className='answerText'>
            <Card style={{ width: '40rem' }}>
              <Card.Body>
                <Card.Text>
                  {this.state.body}
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

                  <Form.Group controlId='addAnswerText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Add an answer' value={this.state.body} onChange={this.handleBodyChange} />
                  </Form.Group>

                  <Button variant='outline-primary' type='submit' name='submit' value='Submit'>
                Add Answer
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

export default NoteEditor
