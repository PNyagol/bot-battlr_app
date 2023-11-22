import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BotCollection = ({ enlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8001/bots')
      .then(response => setBots(response.data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className="ui three column grid">
      {bots.map(bot => (
        <div className="column" key={bot.id}>
          <h3>{bot.name}</h3>
          <button className="ui button" onClick={() => enlistBot(bot)}>
            Enlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
