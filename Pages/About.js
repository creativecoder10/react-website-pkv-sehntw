import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
main: {
  color: "black"
},
caption: {
  marginTop: 70,
},
section: {  
marginTop: 60  
},
hr: {
  marginTop: 50,
  width: "50%"
}
};

class Home extends React.Component{
  render(){ 
    var { classes } = this.props;
    return (<div className="page"> 
<div className={classes.section}>
       <Typography className={classes.main} variant="display2" align="center">
About Me
      </Typography>

      <Typography className={classes.caption} variant="display1" align="center">
Starting in Fall 2018, I will be a graduate student in the <a href="https://toc.seas.harvard.edu">Theory of Computation</a> group at Harvard. In December 2017, I received bachelor's degrees in mathematics and computer science from the University of Maryland, College Park, where I was advised by Prof. <a href="http://www.cs.umd.edu/users/mount">David Mount</a>, Prof. <a href="https://www.cs.umd.edu/users/samir/">Samir Khuller</a>, Prof. <a href="https://www.cs.umd.edu/~amchilds/">Andrew Childs</a>, and Prof. <a href="http://quics.umd.edu/people/penghui-yao">Penghui Yao.</a>
      </Typography>
    <hr className={classes.hr}/ >
      
   <Typography className={classes.main} variant="display2" align="center" style={{marginTop: 50}}>
Research Interests
      </Typography>

   <Typography className={classes.caption} variant="display1" align="center" style={{marginTop: 50, height: 250 }}>
 I am broadly interested in theoretical computer science. In the past, I have worked on the subjects of computational geometry, approximation algorithms, and communication complexity.
     
      </Typography></div>
      </div>);
  }
}

export default withStyles(styles)(Home);