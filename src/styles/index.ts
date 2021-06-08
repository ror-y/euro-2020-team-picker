import styled from "styled-components";
import { PlayerProps } from "../types";

export const StyledPitch = styled.div`
  width: 600px;
  height: 800px;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgb(53, 106, 27),
    rgb(53, 106, 27) 50%,
    rgb(76, 134, 33) 50%,
    rgb(76, 134, 33)
  );
  background-size: 100% 160px;
  border: 1px solid white;
`;

export const Outline = styled.div`
  border: 20px solid rgb(76, 134, 33);
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
  position: relative;
`;

export const MenuList = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const MenuListItem = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  height: 100px;
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  transition: all 250ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const MenuListText = styled.div`
  text-transform: uppercase;
`;
