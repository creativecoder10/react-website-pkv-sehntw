import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
 
const styles = {
main: {
  color: "black"
},
caption: {
  marginTop: 100,
  width: "90%"
},
section: {  
marginTop: 100  
},
hr:{
  marginTop: 100,
  width: "70%" 
}
};

class Home extends React.Component{

   scrollTo() {
    scroll.scrollTo(100);
  }

  render(){ 
    var { classes } = this.props;
   return (<div className="page"> 
<div className={classes.section}>
       <Typography className={classes.main} variant="display4" align="center">
Prayaag Venkat
      </Typography>
         <Typography className={classes.main} variant="display1" align="center" style={{marginTop: 50}}>
 Harvard University Theory of Computation Group Graduate Student
      </Typography>
     
</div>
      </div>);
  }
}

export default withStyles(styles)(Home);