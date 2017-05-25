import React from 'react';
import Button from './button';

const App = () => (
  <div>
    <Button name="Click" clicked={() => console.log('clicked')} />
    <Button name={'Search'} />
  </div>
);

export default App;
