import styled from "styled-components";
import { Player, Positions, Formation, TeamFromWiki, Modes } from "../types";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 330px;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgb(255, 255, 255);
    opacity: 0.9;
    width: 300px;
    overflow: auto;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-size: 12px;
`;

export const PlayerChooserMenu = ({
  selectedTeam,
  filteringPosition,
  setSelectedFormation,
  editingId,
  selectedFormation,
  setMode,
}: {
  selectedTeam: TeamFromWiki;
  filteringPosition: Positions | null;
  setSelectedFormation: (val: any) => any;
  editingId: number | null;
  selectedFormation: Formation | null;
  setMode: (mode: Modes) => any;
}) => {
  const isDisabled = (playerName: string) => {
    return selectedFormation?.positions
      .map(({ name }) => name)
      .includes(playerName);
  };

  const handleClick = (player: Player) => {
    if (isDisabled(player.name)) {
      return;
    }

    setSelectedFormation((prv: Formation) => {
      const newPositions = [...prv.positions].map((position) => {
        return position.id === editingId
          ? {
              ...position,
              name: player.name,
              displayName: player.displayName,
              squadNumber: player.squadNumber,
            }
          : position;
      });
      return { ...prv, positions: newPositions };
    });

    setMode(Modes.Default);
  };

  return (
    <List>
      {filteringPosition &&
        selectedTeam.players.map((player) =>
          player.positions.includes(filteringPosition) ? (
            <ListItem
              key={player.name}
              onClick={() => handleClick(player)}
              style={{ color: isDisabled(player.name) ? "grey" : "black" }}
            >
              {player.name}
            </ListItem>
          ) : null
        )}
    </List>
  );
};
