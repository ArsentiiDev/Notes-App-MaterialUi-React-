import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import './index.css'
import {createTheme, ThemeProvider} from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'
import Layout from './Components/Layout'


const theme = createTheme({
      palette :{
        
        secondary: purple
      },
      typography: {
        fontFamily: 'Be Vietnam Pro'
      }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Layout>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider>
  );
}

export default App;
