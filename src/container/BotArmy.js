import React from 'react';

const BotArmy = ({ enlistedBots, releaseBot, dischargeBot }) => {
  return (
    <div>
      {enlistedBots.map(bot => (
        <div key={bot.id} className="ui card">
          <div className="content">
            <h3>{bot.name}</h3>
          </div>
          <div className="extra content">
            <button className="ui button" onClick={() => releaseBot(bot)}>
              Release
            </button>
            <button className="ui red button" onClick={() => dischargeBot(bot)}>
              Discharge
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BotArmy;
