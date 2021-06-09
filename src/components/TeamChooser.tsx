import { england } from "../data/teams/england";
import { germany } from "../data/teams/germany";
import { northMacedonia } from "../data/teams/north_macedonia";
import { france } from "../data/teams/france";
import { belgium } from "../data/teams/belgium";
import { Stages, TeamFromWiki } from "../types";
import { FlagIcon } from "react-flag-kit";
import { MenuList, MenuListItem, MenuListText } from "../styles";

const selectableTeams = [england, germany, northMacedonia, france, belgium];

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
    <MenuList>
      {selectableTeams.map((team) => {
        return (
          <MenuListItem
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
            <FlagIcon code={team.flagCode} size={48} />
            <MenuListText>{team.name}</MenuListText>
          </MenuListItem>
        );
      })}
    </MenuList>
  );
};
