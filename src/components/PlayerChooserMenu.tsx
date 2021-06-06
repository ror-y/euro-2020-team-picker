import { Player, Positions, Formation, TeamFromWiki } from "../types";

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
  editingId: number | undefined;
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
    <ul>
      {selectedTeam.players.map((player) =>
        player.position === filteringPosition ? (
          <li
            key={player.name}
            onClick={() => handleClick(player)}
            style={{ color: isDisabled(player.name) ? "grey" : "black" }}
          >
            {player.name}
          </li>
        ) : null
      )}
    </ul>
  );
};
