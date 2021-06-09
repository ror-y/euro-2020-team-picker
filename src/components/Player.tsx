import {
  StyledShirtNameContainer,
  StyledPitchPlayerName,
  StyledShirt,
} from "../styles";
import { Positions, Modes } from "../types";
import styled from "styled-components";
import _ from "lodash";

const Add = styled.div`
  font-size: 8px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  > * {
    line-height: 1;
  }
`;

export function Player({
  id,
  x,
  y,
  name,
  displayName,
  squadNumber,
  type,
  setMode,
  setFilteringPosition,
  setEditingId,
  shirtMainColor,
  shirtNumberColor,
  shirtRimColor,
  editingId,
}: {
  id: number;
  x: number;
  y: number;
  name: string;
  displayName: string | undefined;
  squadNumber: number | null;
  type: Positions;
  setMode: (val: Modes) => any;
  setFilteringPosition: (val: Positions) => any;
  setEditingId: (val: number) => any;
  shirtMainColor: string;
  shirtNumberColor: string;
  shirtRimColor: string;
  editingId: number | null;
}) {
  return (
    <StyledShirtNameContainer
      {...{ x }}
      {...{ y }}
      onClick={() => {
        setMode(Modes.EditingPosition);
        setFilteringPosition(type);
        setEditingId(id);
      }}
    >
      <StyledShirt
        {...{ shirtMainColor }}
        {...{ shirtNumberColor }}
        {...{ shirtRimColor }}
        isActive={id === editingId}
      >
        {squadNumber ? (
          squadNumber
        ) : (
          <Add>
            <span>+</span>
            <span>Add</span>
          </Add>
        )}
      </StyledShirt>

      <StyledPitchPlayerName>
        {displayName ?? _.last(name.split(" "))}
      </StyledPitchPlayerName>
    </StyledShirtNameContainer>
  );
}
