import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { Redirect, Link, Route, Switch } from "react-router-dom";
import purple from 'material-ui/colors/purple';
const styles = theme => ({
  main: {
    paddingTop: "50px",
   padding:0,
   display: "block"
  },
  grid: {
    margin: "auto",
 
 
  },
 button: {
   color: "black",
   display: "block",
   margin: "auto"
 },
 link: {
    textDecoration: "none",
    display: "flex"
 },
 button: {
  margin: theme.spacing.unit,
  background: "black",
  flexGrow: 1,
  '&:hover': {
      backgroundColor: purple[700]
    }
 }
})

class Header extends React.Component{


  render(){
     const { classes } = this.props;
    return (<div className={classes.main}>
    
     <Grid container spacing={24} >

        <Grid item xs={4} className={classes.grid}>
      
       <Link to="/"  className={classes.link}>
        <Button variant="raised" size="medium" color="secondary" className={classes.button}>
          Home
        </Button>
      </Link>
       
        <Link to="/study" className={classes.link}>
        <Button variant="raised" size="medium" color="primary" className={classes.button}>
          Current Studies
        </Button>
      </Link>
        </Grid>
        <Grid item xs={4}>
<img alt="LOGO" src="https://res.cloudinary.com/dmuqfofzn/image/upload/v1524506508/Capture_j1q5pt.png" style={{display: "block", margin:"auto"}}/>
        </Grid>
        <Grid item xs={4} className={classes.grid}>
         <Link to="/about" className={classes.link}>
          <Button variant="raised" size="medium" color="primary" className={classes.button}>
          About
        </Button>
       </Link>
      
         <Link to="/contact" className={classes.link}>
         <Button variant="raised" size="medium" color="primary" className={classes.button}>
          Contact
        </Button>
      </Link>
        </Grid>
     
      
      </Grid>
    
    </div>);
  }
}

export default withStyles(styles)(Header);