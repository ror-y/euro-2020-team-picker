import React, { useEffect, useState } from "react";
import "./App.css";
import { Pitch } from "./components/Pitch";
import { Player } from "./components/Player";
import { CountryChooser } from "./components/CountryChooser";
import { FormationChooser } from "./components/FormationChooser";
import { PlayerChooserMenu } from "./components/PlayerChooserMenu";
import { BigTeamTitle } from "./components/BigTeamTitle";
import { GenerateImg } from "./components/GenerateImg";
import { Formation, Positions, Modes, Stages, TeamFromWiki } from "./types";
import {
  PitchAndSidebarContainer,
  TitleAndPitch,
  Outline,
  SuccessMessage,
} from "./styles";
import _ from "lodash";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function App() {
  /**
   * The team the user chooses on a previous step.
   */
  const [selectedTeam, setSelectedTeam] = useState<TeamFromWiki>();

  /**
   * The formation - this is what the user will be updating.
   */
  const [selectedFormation, setSelectedFormation] =
    useState<Formation | null>(null);

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
      _.compact(selectedFormation?.positions.map(({ name }) => name)).length ===
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
    setSelectedFormation(null);
    setMode(Modes.Default);
    setEditingId(null);
  };

  return (
    <div className="App" id="App">
      <h1 style={{ margin: "20px 0 0" }}>EURO 2020 Starting XI Picker</h1>
      <p style={{ margin: "20px 0 30px" }}>
        Pick and plot your best starting XIs from all the EURO 2020 squads
      </p>
      <Accordion>
        <AccordionItem dangerouslySetExpanded={stage === Stages.PickCountry}>
          <AccordionItemHeading onClick={() => setStage(Stages.PickCountry)}>
            <AccordionItemButton>Choose Country</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{ padding: "20px" }}>
            <CountryChooser
              {...{ setSelectedTeam }}
              {...{ resetPitch }}
              {...{ setStage }}
            />
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem dangerouslySetExpanded={stage === Stages.PickFormation}>
          <AccordionItemHeading onClick={() => setStage(Stages.PickFormation)}>
            <AccordionItemButton>Choose Formation</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{ padding: "20px" }}>
            <FormationChooser
              {...{ setMode }}
              {...{ selectedFormation }}
              {...{ setSelectedFormation }}
              {...{ setEditingId }}
              {...{ setStage }}
            />
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem
          dangerouslySetExpanded={stage === Stages.PickTeamOnPitch}
        >
          <AccordionItemHeading
            onClick={() => setStage(Stages.PickTeamOnPitch)}
          >
            <AccordionItemButton>Pick Your Team</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel style={{ minHeight: "760px", padding: "20px" }}>
            {stage === Stages.PickTeamOnPitch && selectedTeam && (
              <PitchAndSidebarContainer>
                <TitleAndPitch id="capture">
                  <Outline>
                    <BigTeamTitle
                      {...selectedTeam.colors}
                      title={selectedTeam.name}
                      formation={selectedFormation?.name}
                      flagCode={selectedTeam.flagCode}
                    />
                    <Pitch {...{ selectedFormation }}>
                      {selectedFormation?.positions.map(
                        ({
                          x,
                          y,
                          name,
                          displayName,
                          squadNumber,
                          type,
                          id,
                        }) => (
                          <Player
                            key={id}
                            {...{ id }}
                            {...{ x }}
                            {...{ y }}
                            {...{ name }}
                            {...{ displayName }}
                            {...{ squadNumber }}
                            {...{ type }}
                            {...{ setMode }}
                            {...{ setFilteringPosition }}
                            {...{ editingId }}
                            {...{ setEditingId }}
                            shirtMainColor={selectedTeam.colors.shirtMainColor}
                            shirtNumberColor={
                              selectedTeam.colors.shirtNumberColor
                            }
                            shirtRimColor={selectedTeam.colors.shirtRimColor}
                          />
                        )
                      )}
                    </Pitch>
                  </Outline>
                </TitleAndPitch>

                {mode === Modes.EditingPosition && (
                  <PlayerChooserMenu
                    {...{ selectedTeam }}
                    {...{ filteringPosition }}
                    {...{ setSelectedFormation }}
                    {...{ editingId }}
                    {...{ selectedFormation }}
                    {...{ setMode }}
                  />
                )}

                {mode === Modes.PromptToSave && (
                  <GenerateImg {...{ setMode }} />
                )}
                <div id="image-receiver" />
                {mode === Modes.Finished && (
                  <SuccessMessage>
                    <div>Great choice!</div>
                    <div>👈👈👈 Here's your image.</div>{" "}
                    <div> To share, right click and hit 'Save Image As'!</div>
                    <div>Enjoy the Euros!</div>
                    <div>
                      <a href="https://www.paypal.me/rorysmith123">Donate</a>
                    </div>
                  </SuccessMessage>
                )}
              </PitchAndSidebarContainer>
            )}
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
