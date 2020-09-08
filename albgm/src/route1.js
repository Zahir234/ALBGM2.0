import React, {useState} from 'react';
import './App.css';
import { Button, Header, Icon, Segment, Input, Form, Divider, Image, Menu, Container, Grid,List} from 'semantic-ui-react'


function Route1() {
  var logos = "Another Level Building and Grounds Maintenance"
  var slogan = "Taking your lawn to Another Level"
  const [inputValue, setInputValue] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [about, setAbout] = useState("")


  const handleChange = (event, value_holder, set_function )  => {
    set_function(value_holder.value);
  }

  const onClick = () => {
    console.log(inputValue)
    console.log(firstName)
    console.log(lastName)
    console.log(about)
    console.log(email)
    sgMail.send(msg)
  }

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'zahirseaton@gmail.com',
    from: 'test@example.com',
    subject: 'Yard Cut',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };



  return (

    <div className="App">
      <header className="App-header" as='h1'>
        <Menu fixed='top' inverted>
          <Container>
            <h1 class="ui green header">
              <Icon name='envira gallery'/>
            </h1>
              <Menu.Item as='a' active>
                Home
              </Menu.Item>
              <Menu.Item as='a'>Services</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>
          </Container>
        </Menu>
        <Container text>
        <h1 class="ui green header">
              <Icon name='envira gallery'/>
            </h1>
        <Header
          as='h1'
          content= {logos}
          inverted
          style={{
            fontWeight: 'normal',
            marginBottom: 0,
          }}
        />
        <Header
          as='h2'
          content={slogan}
          inverted
          style={{
            fontWeight: 'normal',
          }}
        />
        </Container>
      </header>
            <Segment style={{ padding: '8em 0em' }} vertical>
              <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      From Lawncare to LandScaping
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      We can give your company superpowers to do things that they never thought possible.
                      Let us delight your customers and empower your needs... through pure data analytics.
                    </p>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      We are all season round!
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                    </p>
                  </Grid.Column>
                  <Grid.Column floated='right' width={6}>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size='medium' />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column textAlign='center'>
                    <Button size='huge'>Check Them Out</Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Free Estimates!
              </Header>
              <p style={{ fontSize: '1.33em' }}>Contact us today to get your free estimate!</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Good Pricing!
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Our prices are more than reasonable!
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header icon>
        <Icon name= "tty" />
        Contact Us!
      </Header>
      <Form>
          <Form.Group widths='equal'>
            <Form.Input fluid label='First name' placeholder='First name' onChange= {(e,v) => handleChange(e,v,setFirstName)}/>
            <Form.Input fluid label='Last name' placeholder='Last name' onChange= {(e,v) => handleChange(e,v,setLastName)} />
            <Form.Input fluid label='Email' placeholder='Email' onChange= {(e,v) => handleChange(e,v,setEmail)} />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label='Small'
              value='sm'
              checked={inputValue === 'sm'}
              onChange={(e,v) => handleChange(e,v,setInputValue)}
            />
            <Form.Radio
              label='Medium'
              value='md'
              checked={inputValue === 'md'}
              onChange={(e,v) => handleChange(e,v,setInputValue)}
            />
            <Form.Radio
              label='Large'
              value='lg'
              checked={inputValue === 'lg'}
              onChange={(e,v) => handleChange(e,v,setInputValue)}
            />
          </Form.Group>
          <Form.TextArea label='About' placeholder='Tell us more about your yard' onChange={(e,v) => handleChange(e,v,setAbout)} />
          <Form.Button onClick= {onClick} > Submit</Form.Button>
      </Form>
      <Divider hidden/>
       <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Lawncare</List.Item>
                    <List.Item as='a'>LandScaping</List.Item>
                    <List.Item as='a'>Installments</List.Item>
                    <List.Item as='a'>Maintenance</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Contact' />
                  <List link inverted>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    {logos}
                  </Header>
                  <p>
                    {slogan}
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

    </div>)

    }


export default Route1;
