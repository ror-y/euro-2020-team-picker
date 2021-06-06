import styled from "styled-components";
import { PlayerProps } from "../types";

export const StyledPitch = styled.div`
  width: 600px;
  height: 800px;
  background-color: green;
  position: relative;
`;

interface ShirtProps {
  shirtNumberColor: string;
  shirtMainColor: string;
  shirtRimColor: string;
}

export const StyledShirtNameContainer = styled.div<PlayerProps>`
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  cursor: pointer;
`;

export const StyledShirt = styled.div<ShirtProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ shirtMainColor }) => shirtMainColor};
  border: 3px solid ${({ shirtRimColor }) => shirtRimColor};
  color: ${({ shirtNumberColor }) => shirtNumberColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPitchPlayerName = styled.div`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 8px;
`;

export const PitchAndSidebarContainer = styled.div`
  display: flex;
`;

export const TitleAndPitch = styled.div`
  border: 1px solid black;
`;
