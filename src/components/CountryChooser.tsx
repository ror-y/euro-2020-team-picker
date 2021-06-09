import { italy } from "../data/teams/italy";
import { switzerland } from "../data/teams/switzerland";
import { turkey } from "../data/teams/turkey";
import { wales } from "../data/teams/wales";
import { belgium } from "../data/teams/belgium";
import { denmark } from "../data/teams/denmark";
import { finland } from "../data/teams/finland";
import { russia } from "../data/teams/russia";
import { austria } from "../data/teams/austria";
import { netherlands } from "../data/teams/netherlands";
import { northMacedonia } from "../data/teams/northMacedonia";
import { ukraine } from "../data/teams/ukraine";
import { croatia } from "../data/teams/croatia";
import { czechRepublic } from "../data/teams/czechRepublic";
import { england } from "../data/teams/england";
import { scotland } from "../data/teams/scotland";
import { poland } from "../data/teams/poland";
import { slovakia } from "../data/teams/slovakia";
import { spain } from "../data/teams/spain";
import { sweden } from "../data/teams/sweden";
import { france } from "../data/teams/france";
import { germany } from "../data/teams/germany";
import { hungary } from "../data/teams/hungary";
import { portugal } from "../data/teams/portugal";

import { Stages, TeamFromWiki } from "../types";
import { FlagIcon } from "react-flag-kit";
import { MenuList, MenuListItem, MenuListText } from "../styles";
import _ from "lodash";
import styled from "styled-components";

const selectableTeams = [
  italy,
  switzerland,
  turkey,
  wales,
  belgium,
  denmark,
  finland,
  russia,
  austria,
  netherlands,
  northMacedonia,
  ukraine,
  croatia,
  czechRepublic,
  england,
  scotland,
  poland,
  slovakia,
  spain,
  sweden,
  france,
  germany,
  hungary,
  portugal,
];

const FlagContainer = styled.div``;

export const CountryChooser = ({
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
      {_.sortBy(selectableTeams, "name").map((team) => {
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
            <FlagContainer>
              <FlagIcon code={team.flagCode} size={48} />
            </FlagContainer>
            <MenuListText>{team.name}</MenuListText>
          </MenuListItem>
        );
      })}
    </MenuList>
  );
};
