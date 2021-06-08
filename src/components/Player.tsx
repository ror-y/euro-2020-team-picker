import {
  StyledShirtNameContainer,
  StyledPitchPlayerName,
  StyledShirt,
} from "../styles";
import { Positions, Modes } from "../types";
import _ from "lodash";
import styled from "styled-components";

const Add = styled.div`
  font-size: 12px;
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

      <StyledPitchPlayerName>{_.last(name.split(" "))}</StyledPitchPlayerName>
    </StyledShirtNameContainer>
  );
}
