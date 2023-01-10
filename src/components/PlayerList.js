import Player from "./Player";
import playerData from "../data/playerData";
import matchData from "../data/matchData";
import { preparePlayerData, addWinsToPlayers } from "../helpers/playerHelpers";

function PlayerList(props) {
  const playerDataArray = preparePlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayers (playerDataArray, matchData);
  const firstPlayer = playerDataArray[0]
  const allPlayers = playerDataArray.map((player => {
    return (
      <Player
        key={player.gamerTag}
        firstName={player.firstName}
        lastName={player.lastName}
        gamerTag={player.gamerTag}
        wins={player.wins}
      />
    )
  }))

  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      { allPlayers }
    </section>
  );
}

export default PlayerList;