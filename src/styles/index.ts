import styled from "styled-components";
import { PlayerProps } from "../types";

export const StyledPitch = styled.div`
  width: 600px;
  height: 800px;
  position: relative;
  background: linear-gradient(
    to bottom,
    green,
    green 50%,
    forestgreen 50%,
    forestgreen
  );
  background-size: 100% 200px;
`;

interface ShirtProps {
  shirtNumberColor: string;
  shirtMainColor: string;
  shirtRimColor: string;
  isActive: boolean;
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
  transform: translateX(-24px);
`;

export const StyledShirt = styled.div<ShirtProps>`
  width: 38px;
  height: 38px;
  min-height: 38px;
  max-height: 38px;
  min-width: 38px;
  max-width: 38px;
  border-radius: 50%;
  background-color: ${({ shirtMainColor }) => shirtMainColor};
  border: 3px solid ${({ shirtRimColor }) => shirtRimColor};
  color: ${({ shirtNumberColor }) => shirtNumberColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 0px 0px 8px rgba(255,255,255,0.5)" : ""};
  font-size: 22px;
`;

export const StyledPitchPlayerName = styled.div`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 8px;
  font-size: 20px;
`;

export const PitchAndSidebarContainer = styled.div`
  display: flex;
`;

export const TitleAndPitch = styled.div`
  border: 1px solid black;
`;
