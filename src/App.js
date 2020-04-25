import React from 'react';
import './App.css';
import Order from './components/order/Order';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import teal from '@material-ui/core/colors/teal';
import deepOrange from '@material-ui/core/colors/deepOrange';

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  },
  overrides: {
    MuiExpansionPanel: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0
      }
    }
  }
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Order />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
