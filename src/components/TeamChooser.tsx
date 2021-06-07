import { england } from "../data/teams/england";
import { germany } from "../data/teams/germany";
import { northMacedonia } from "../data/teams/north_macedonia";
import { france } from "../data/teams/france";
import { TeamFromWiki } from "../types";
const selectableTeams = [england, germany, northMacedonia, france];

export const TeamChooser = ({
  setSelectedTeam,
  resetPitch,
}: {
  setSelectedTeam: (val: TeamFromWiki) => any;
  resetPitch: () => any;
}) => {
  return (
    <select
      onChange={(evt: any) => {
        resetPitch();
        const team = selectableTeams.find(
          (team) => team.name === evt.target.value
        );
        // @ts-ignore
        setSelectedTeam(team);
      }}
    >
      <option></option>
      {selectableTeams.map((team) => {
        return <option>{team.name}</option>;
      })}
    </select>
  );
};
