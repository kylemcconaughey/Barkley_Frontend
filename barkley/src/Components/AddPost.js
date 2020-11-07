import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class PostEditor extends React.Component {
  constructor () {
    super()
    this.state = {
      body: '',
      text_align: '',
      font_size: '',
      image: null,
      created: false
    }
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleFontStyleChange = this.handleFontStyleChange.bind(this)
    this.handleTextAlignChange = this.handleTextAlignChange.bind(this)
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBodyChange (event) {
    this.setState({ body: event.target.value })
  }

  handleFontStyleChange (event) {
    this.setState({ font_style: event.target.value })
  }

  handleTextAlignChange (event) {
    this.setState({ text_align: event.target.value })
  }

  handleFontSizeChange (event) {
    this.setState({ font_size: event.target.value })
  }

  handleImageChange (event) {
    console.log(event.target)
    this.setState({ image: event.target.files[0] })
  }

  handleSubmit (event) {
    event.preventDefault()
    const fd = new FormData()
    fd.append('image', this.state.image, this.state.image.name)
    axios
      .post('http://brkly.herokuapp.com/profile/', {
        outer_text: this.state.outer_text,
        font_style: this.state.font_style,
        text_align: this.state.text_align,
        font_size: this.state.font_size,
        image: this.state.image
      }, fd,
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
      return <Redirect to='/newsfeed/' />
    }
    return (
      <div>
        <h1 className='addHeader'> Add a new post!</h1>
        <Col>
          <div>
            <Card style={{ width: '25rem' }}>
              <Card.Body className={classNames({
                styleNormal: this.state.font_style === 'N',
                styleBold: this.state.font_style === 'B',
                styleItalics: this.state.font_style === 'I',
                styleUnderline: this.state.font_style === 'U',
                alignmentLeft: this.state.text_align === 'L',
                alignmentRight: this.state.text_align === 'R',
                alignmentCenter: this.state.text_align === 'C',
                alignmentJustified: this.state.text_align === 'J',
                fontSizeSmall: this.state.font_size === 0,
                fontSizeMedium: this.state.font_size === 1,
                fontSizeLarge: this.state.font_size === 2,
                fontSizeJumbo: this.state.font_size === 3
              })}
              >
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

                  <Form.Group controlId='addPostText'>
                    <Form.Control type='text' style={{ height: 100 }} placeholder='Add text to your post here' value={this.state.body} onChange={this.handleBodyChange} />
                  </Form.Group>

                  <Form.Group controlId='postFont_style'>
                    <Form.Label>Font Style</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontStyleChange}>
                      <option value='N'>Normal</option>
                      <option value='B'>Bold</option>
                      <option value='I'>Italics</option>
                      <option value='U'>Underline</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='text_alignment'>
                    <Form.Label>Text Alignment</Form.Label>
                    <Form.Control as='select' onChange={this.handleTextAlignChange}>
                      <option value='L'>Left</option>
                      <option value='R'>Right</option>
                      <option value='C'>Center</option>
                      <option value='J'>Justified</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId='font_size'>
                    <Form.Label>Font Size</Form.Label>
                    <Form.Control as='select' onChange={this.handleFontSizeChange}>
                      <option value='0'>Small</option>
                      <option value='1'>Medium</option>
                      <option value='2'>Large</option>
                      <option value='3'>Jumbo</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor='image'>Upload Image</Form.Label>
                    <Form.Control input type='file' id='image' onChange={this.handleImageChange}>
                    </Form.Control>
                    <button onClick={this.handleUploadImage}>Upload</button>
                  </Form.Group>

                  <Button variant='outline-primary' type='submit' name='submit' value='Submit'>
                Add Post
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

export default PostEditor
