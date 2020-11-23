import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class MessageEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: '',
      board: ''
    }
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleConvoChange = this.handleConvoChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyChange (event) {
    this.setState({ body: event.target.value })
  }

  handleConvoChange (event) {
    this.setState({ board: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://brkly.herokuapp.com/messages/', {
        body: this.state.body,
        board: this.state.board
      },
      {
        headers: {
          Authorization: `Token ${this.props.token}`
        }
      }
      )
      .then(response =>
        this.setState({ created: true }))
  }

  render () {
    if (this.state.created) {
      return <Redirect to='/messages/' />
    }
    return (
      <div>
        <h1 className='msgHeader'> Send New Message</h1>
        <Col>
          <div className='msgText'>
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

                  <Form.Group controlId='addMsgText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Type message here' value={this.state.body} onChange={this.handleBodyChange} />
                  </Form.Group>

                  <Form.Group controlId='addConvo'>
                    <Form.Control type='text' style={{ height: 50 }} placeholder='Please select conversation' value={this.state.board} onChange={this.handleConvoChange} />
                  </Form.Group>

                  <Button variant='outline-primary' type='submit' name='submit' value='Submit'>
                Send
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

export default MessageEditor
