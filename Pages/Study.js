import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNew from '@material-ui/icons/OpenInNew';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import firebase from '../firebase';
const styles = theme => ({
  root: {
    width: '100%',
  },
  section: {
    marginTop: 40
  },
  main: {
    color: "black",
    marginTop: 50
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  quote: {
    maxWidth: 800,
    margin: "80px auto",
    marginTop: 50
  },
  expansion: {
    marginBottom: 20
  },
  table: {
    margin: 25,
    display: "inline-block"
  }
});

class Study extends React.Component {
  constructor(){
       var headers = ["head1", "head2"];
      var items = [["item11", "item12"], ["item21", "item22"]];
    this.state = {
      randomized: {items, headers},
      spectral: {items, headers},
      complexity: {items, headers},
      analysis: {items, headers},
      quantum: {items, headers}      
    }
  }

 

    update = () => {

    var db = firebase.firestore();
    db.collection("study").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {

          var items = doc.data().items;
          var arr = [];
          for (var key in items) {
            arr.push(items[key])
          }
          var headers = doc.data().headers;
          var obj = {};
          obj[doc.id] = {headers, items: arr};
          console.log(obj);
          this.setState(obj)
        

      });
    });
  } 
 componentDidMount(){
    this.update();
  }
  renderTable = (doc) => {
    return(<div>   <Table>
        <TableHead>
          <TableRow>
          {this.state[doc].headers.map((head)=>{
            return(<TableCell> {head}</TableCell>)
          })}
          
  
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state[doc].items.map((item)=>{
          return (<TableRow>{item.map((subItem)=>{
            return(<TableCell>{subItem}</TableCell>)
          })}</TableRow>)
        })}
         
         
        </TableBody>
      </Table></div>)
  }


  render(){
  
  var randomized = this.renderTable("randomized");
  var spectral = this.renderTable("spectral");
  var complexity = this.renderTable("complexity");
  var analysis = this.renderTable("analysis");
  const { classes } = this.props;

  return (
    <div className={classes.root}>

      <Typography className={classes.main} variant="display2" align="center">
        Current Studies
      </Typography>
    

      <Typography className={classes.section} variant="title" align="center">
        This page documents my progress on studying various subjects. My hope is that maintaining this page will force me to be more consistent in learning these subjects.
      </Typography>



      <div className={classes.quote}>
        <blockquote className="quote-card red-card">
          <p>
            ...a man who tries to find water by digging a little here and a little there and who will die of thirst; whereas a man who digs deep in one spot...will find water; he will drink and give others to drink...
    </p>

          <cite>
            Ad-Darqāwī (1760-1823), Moroccan Sufi
    </cite>
        </blockquote>

      </div>
      <div className={classes.expansion}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Randomized Algorithms and Probabilistic Analysis</Typography>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
           
        
       
            
     
              <div className={classes.table}>
                 <a href="https://homes.cs.washington.edu/~jrl/teaching/cse525wi15/index.html" target="_blank">
                Randomized algorithms and probabilistic analysis (James Lee, UW, Winter 2015)
          <OpenInNew />
           </a>
                 {randomized}
              </div>
      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Spectral Graph Theory</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
             <div className={classes.table}>
                 <a href="http://resources.mpi-inf.mpg.de/departments/d1/teaching/ws11/SGT/" target="_blank">
               Spectral Graph Theory (Thomas Sauerwald and He Sun, MPI, Winter 2011/2012)
          <OpenInNew />
           </a>
                 {spectral}
              </div>
      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Complexity Theory</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <div className={classes.table}>
                 <a href="http://www.cs.cmu.edu/~odonnell/complexity17/" target="_blank">
                Graduate Computational Complexity Theory (Ryan O'Donnell, CMU, Fall 2017)
          <OpenInNew />
           </a>
                 {complexity}
              </div>
      
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Analysis of Boolean Functions</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <div className={classes.table}>
                 <a href="http://www.cs.cmu.edu/~odonnell/aobf12/" target="_blank">
               Analysis of Boolean Functions (Ryan O'Donnell, CMU, Fall 2012)
          <OpenInNew />
           </a>
                 {analysis}
              </div>
      
          </ExpansionPanelDetails>
        </ExpansionPanel>
                <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Quantum Hamiltonian Complexity</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <div className={classes.table}>
                 <a href="https://homes.cs.washington.edu/~jrl/teaching/cse525wi15/index.html" target="_blank">
              Simons Institute - Program on Quantum Hamiltonian Complexity (Spring 2014)

          <OpenInNew />
           </a>
                 {complexity}
              </div>
      
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </div>
  );
  }
}

Study.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Study);