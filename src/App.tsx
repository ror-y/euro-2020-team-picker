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
import { Formation, Positions, Modes, Stages, TeamFromWiki } from "./types";
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
   * The state of the pitch UI.
   */
  const [mode, setMode] = useState<Modes>(Modes.Default);

  /**
   * The stage of the overall menu UI.
   */
  const [stage, setStage] = useState<Stages>(Stages.PickCountry);

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
      {stage === Stages.PickCountry && (
        <TeamChooser
          {...{ setSelectedTeam }}
          {...{ resetPitch }}
          {...{ setStage }}
        />
      )}

      {stage === Stages.PickFormation && (
        <FormationChooser
          {...{ setMode }}
          {...{ selectedFormation }}
          {...{ setSelectedFormation }}
          {...{ setEditingId }}
          {...{ setStage }}
        />
      )}

      {stage === Stages.PickTeamOnPitch && selectedTeam && (
        <PitchAndSidebarContainer>
          <TitleAndPitch id="capture">
            <BigTeamTitle
              {...selectedTeam.colors}
              title={selectedTeam.name}
              formation={selectedFormation.name}
            />
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
