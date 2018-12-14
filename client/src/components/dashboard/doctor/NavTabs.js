import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PatientsTab from './PatientsTab'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

class NavTabs extends Component {
    state = {
        value: 0,
      };

      handleChange = (event, value) => {
        this.setState({ value });
      };
  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Stats" />
            <Tab label="Patients" />
            <Tab label="Empty" />
            <Tab label="Empty" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>Stats</TabContainer>}
        {value === 1 && <TabContainer><PatientsTab /></TabContainer>}
        {value === 2 && <TabContainer>Item Two</TabContainer>}
        {value === 3 && <TabContainer>Item Three</TabContainer>}
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(NavTabs);