import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Mention from './Mentions'

class NoteEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      body: '',
      board: ''
    }
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleBoardChange = this.handleBoardChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyChange (event) {
    this.setState({ body: event.target.value })
  }

  handleBoardChange (event) {
    this.setState({ board: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    axios
      .post('https://brkly.herokuapp.com/notes/', {
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

                  <Form.Group controlId='addBoard'>
                    <Form.Control type='text' style={{ height: 50 }} placeholder='Please put board number here' value={this.state.board} onChange={this.handleBoardChange} />
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
