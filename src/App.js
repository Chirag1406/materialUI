import React from 'react';

import DisabledTabs from './components/Tab';
import ControlledOpenSelect from './components/Select';
import ErrorRadios from './components/Radio';
import MediaCard from './components/Cards';
import Button from './components/Button';


 
import './App.css';


function App() {
  return (
    <div>

<DisabledTabs/>
<MediaCard/>
<ControlledOpenSelect/>
<ErrorRadios/>
<Button/>

    </div>
  );
}

export default App;
