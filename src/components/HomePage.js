import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StateService } from '../services/StateService';

/**
 * Page Component: HomePage
 *
 * @returns JSX.Element
 */

function HomePage() {
  const service = new StateService(); // instancio un stateservice como service
  // "Reads the user name from the detached state layer" -- ?
  const [timestamp, setTimestamp] = useState(new Date().getTime()); // esto no entiendo
  // Line below offers functionalities for input to be manipulated and re-populated (??)
  const [name, setName] = useState('');

  // Handles button click y manipula detached state layer:

  const handleClick = (event) => {
    event.preventDefault();
    // valido que no sea nulo ni vacío:
    if (!name || name === '') return;
    // Will call the name Setter within the User sub-service (??)
    service.User.setName(name);
    setTimestamp(new Date().getTime());
  };
  return (
    <div>
      <p>Hi {service.User.getName()}, this is Home.</p>
      <section>
        <input
          placeholder="Type a name..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleClick}>Set Name in State</button>
        <br />
        <div>Render Time: {timestamp}</div>
      </section>

      <p>
        Go to <Link to="../components/login">Login</Link> page.
      </p>
    </div>
  );
}

export default HomePage;
