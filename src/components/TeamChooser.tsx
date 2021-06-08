import { england } from "../data/teams/england";
import { germany } from "../data/teams/germany";
import { northMacedonia } from "../data/teams/north_macedonia";
import { france } from "../data/teams/france";
import { Stages, TeamFromWiki } from "../types";
const selectableTeams = [england, germany, northMacedonia, france];

export const TeamChooser = ({
  setSelectedTeam,
  resetPitch,
  setStage,
}: {
  setSelectedTeam: (val: TeamFromWiki) => any;
  setStage: (val: Stages) => any;
  resetPitch: () => any;
}) => {
  return (
    <ul>
      {selectableTeams.map((team) => {
        return (
          <li
            key={team.name}
            onClick={() => {
              resetPitch();
              const chosenTeam = selectableTeams.find(
                (item) => item.name === team.name
              );
              // @ts-ignore
              setSelectedTeam(chosenTeam);

              setStage(Stages.PickFormation);
            }}
          >
            {team.name}
          </li>
        );
      })}
    </ul>
  );
};
