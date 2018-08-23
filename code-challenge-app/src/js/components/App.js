import React from 'react';
import SearchField from './SearchField.js'
import GridList from './GridList.js'
import Navigation from './Navigation.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
<MuiThemeProvider>
    <div>
        <div>
            <SearchField/>
        </div>
        <div>
           <GridList/>
        </div>
        <div>
            <Navigation/>
        </div>
    </div>

</MuiThemeProvider>
);

export default App;
