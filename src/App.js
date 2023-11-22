import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BotCollection from './container/BotCollection';
import BotArmy from './container/BotArmy';

const App = () => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };

  const releaseBot = (bot) => {
    const updatedBots = enlistedBots.filter((b) => b.id !== bot.id);
    setEnlistedBots(updatedBots);
  };

  const dischargeBot = (bot) => {
    console.log('Discharging bot:', bot);
  };

  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <BotCollection enlistBot={enlistBot} />
          )}
        />
        <Route
          path="/bot-army"
          render={() => (
            <BotArmy
              enlistedBots={enlistedBots}
              releaseBot={releaseBot}
              dischargeBot={dischargeBot}
            />
          )}
        />
      </div>
    </Router>
  );
};

export default App;