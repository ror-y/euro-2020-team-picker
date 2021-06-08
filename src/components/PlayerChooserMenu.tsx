import styled from "styled-components";
import { Player, Positions, Formation, TeamFromWiki } from "../types";

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const ListItem = styled.li`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const PlayerChooserMenu = ({
  selectedTeam,
  filteringPosition,
  setSelectedFormation,
  editingId,
  selectedFormation,
}: {
  selectedTeam: TeamFromWiki;
  filteringPosition: Positions | null;
  setSelectedFormation: (val: any) => any;
  editingId: number | null;
  selectedFormation: Formation;
}) => {
  const isDisabled = (playerName: string) => {
    return selectedFormation.positions
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
          ? { ...position, name: player.name, squadNumber: player.squadNumber }
          : position;
      });
      return { ...prv, positions: newPositions };
    });
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
