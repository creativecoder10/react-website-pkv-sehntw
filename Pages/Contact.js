import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import MailOutline from '@material-ui/icons/MailOutline'
import StayPrimaryPortrait from '@material-ui/icons/StayPrimaryPortrait'
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "80%",
    marginBottom: 40,
    margin: "0 auto",

  },
  button: {
    width: "80%",    
  },
  section: {
    marginTop: 40
  },
  icon:{
    transform: "scale(2)",
    paddingTop:  10
  },
  main:{
    color:"black"
  },
  sendmsg: {
    marginTop: "120px"
  }
});

class Contact extends React.Component{
  constructor(){
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  handleMessageChange = (event) => {
    this.setState({message: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }

  render(){
      var { classes } = this.props;
    return (<div> <div className={classes.section}>
    <Grid container spacing={24}>

    <Grid item xs={12}>
         <Typography className={classes.main} variant="display4" align="center" style={{marginTop: 40}}>
Contact
      </Typography> 
       <Typography className={classes.submain} variant="headline" align="center" style={{marginTop: 20}}>
Get in touch with me ...
      </Typography> 
    </Grid>
        <Grid item xs={12} style={{margin:"0 auto"}}>
    <ul>
  <li><a  className="button"><MailOutline className={classes.icon}/><span class="pulse"></span></a><p className="conLabel">pkvasv@gmail.com</p></li>
  <li><a  className="button"><StayPrimaryPortrait className={classes.icon}/><span class="pulse"></span></a><p>(XXX)-XXX-XXXX</p></li>
  <li><a  className="button"><img src="https://image.flaticon.com/icons/svg/34/34227.svg" style={{width: 30, position: "relative", top: 7,filter: "invert(100%)"}}/><span class="pulse"></span></a><a href="#"><p>LinkedIn</p></a></li>
</ul>
        </Grid>
        <Grid item xs={6} style={{margin: "0 auto"}}>
           <Typography className={classes.sendmsg} variant="display1" align="center">
Send me a message...
      </Typography> 
        </Grid>
        <Grid item xs={6} style={{marginTop: 50}}>
       <form action="https://formspree.io/abhisaivenkat@gmail.com"
      method="POST">
   <TextField
        label="Name"
        id="margin-none"
        name="name"  
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleNameChange}
      />
       <TextField
        label="Email"
        id="margin-none"
        name="email"
        className={classes.textField}
        value={this.state.email} 
        onChange={this.handleEmailChange}
      />
       <TextField
        label="Message"
        id="margin-none"
        multiline
        name="message"
          rows="4"
        className={classes.textField}
        helperText="Please email directly for further inquiries"
        value={this.state.message} onChange={this.handleMessageChange}
      />
    <Button variant="raised" color="secondary" className={classes.button} type="submit">
        Submit
      </Button>
      </form>
        </Grid>
       
          
        </Grid>
        
 
</div></div>);
  }
}

export default withStyles(styles)(Contact);