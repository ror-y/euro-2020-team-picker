import React, { useEffect, useState } from "react";
import "./App.css";
import { Pitch } from "./components/Pitch";
import { Player } from "./components/Player";
import { TeamChooser } from "./components/TeamChooser";
import { FormationChooser } from "./components/FormationChooser";
import { PlayerChooserMenu } from "./components/PlayerChooserMenu";
import { BigTeamTitle } from "./components/BigTeamTitle";
import { GenerateImg } from "./components/GenerateImg";
import { formations } from "./data/formations";
import { Formation, Positions, Modes, TeamFromWiki } from "./types";
import { PitchAndSidebarContainer, TitleAndPitch } from "./styles";
import _ from "lodash";

function App() {
  /**
   * The team the user chooses on a previous step.
   */
  const [selectedTeam, setSelectedTeam] = useState<TeamFromWiki>();

  /**
   * The formation - this is what the user will be updating.
   */
  const [selectedFormation, setSelectedFormation] = useState<Formation>(
    formations[0]
  );

  /**
   * The state of the UI.
   */
  const [mode, setMode] = useState<Modes>(Modes.Default);

  /**
   * The position on the pitch to filter by, eg GK, RB.
   */
  const [filteringPosition, setFilteringPosition] =
    useState<Positions | null>(null);

  /**
   * An ID which is required to map the player to the position on the pitch.
   */
  const [editingId, setEditingId] = useState<number | null>(null);

  /**
   * If all 11 positions have been chosen, prompt to save and/or share.
   */
  useEffect(() => {
    if (
      _.compact(selectedFormation.positions.map(({ name }) => name)).length ===
      11
    ) {
      setMode(Modes.PromptToSave);
      setEditingId(null);
    }
  }, [selectedFormation]);

  /**
   * Reset state of pitch, for example if a new team is chosen.
   */
  const resetPitch = () => {
    setSelectedFormation(formations[0]);
    setMode(Modes.Default);
    setEditingId(null);
  };

  return (
    <div className="App" id="App">
      <TeamChooser {...{ setSelectedTeam }} {...{ resetPitch }} />
      <FormationChooser
        {...{ setMode }}
        {...{ selectedFormation }}
        {...{ setSelectedFormation }}
        {...{ setEditingId }}
      />

      {selectedTeam && (
        <PitchAndSidebarContainer>
          <TitleAndPitch id="capture">
            <BigTeamTitle {...selectedTeam.colors}>
              {selectedTeam.name}
            </BigTeamTitle>
            <Pitch {...{ selectedFormation }}>
              {selectedFormation.positions.map(
                ({ x, y, name, squadNumber, type, id }) => (
                  <Player
                    key={id}
                    {...{ id }}
                    {...{ x }}
                    {...{ y }}
                    {...{ name }}
                    {...{ squadNumber }}
                    {...{ type }}
                    {...{ setMode }}
                    {...{ setFilteringPosition }}
                    {...{ editingId }}
                    {...{ setEditingId }}
                    shirtMainColor={selectedTeam.colors.shirtMainColor}
                    shirtNumberColor={selectedTeam.colors.shirtNumberColor}
                    shirtRimColor={selectedTeam.colors.shirtRimColor}
                  />
                )
              )}
            </Pitch>
          </TitleAndPitch>

          {mode === Modes.EditingPosition && (
            <PlayerChooserMenu
              {...{ selectedTeam }}
              {...{ filteringPosition }}
              {...{ setSelectedFormation }}
              {...{ editingId }}
              {...{ selectedFormation }}
            />
          )}

          {mode === Modes.PromptToSave && <GenerateImg {...{ setMode }} />}
        </PitchAndSidebarContainer>
      )}
    </div>
  );
}

export default App;
