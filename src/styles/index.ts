import styled from "styled-components";
import { PlayerProps } from "../types";

export const StyledPitch = styled.div`
  position: relative;
  background: linear-gradient(
    to bottom,
    rgb(53, 106, 27),
    rgb(53, 106, 27) 50%,
    rgb(76, 134, 33) 50%,
    rgb(76, 134, 33)
  );
  background-size: 100% 119px;
  border: 1px solid white;
  height: 100%;
`;

export const Outline = styled.div`
  border: 20px solid rgb(76, 134, 33);
  position: relative;
  @media (min-width: 620px) {
    width: 350px;
  }
  height: 475px;
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

const shirtDimension = "30px;";
export const StyledShirt = styled.div<ShirtProps>`
  width: ${shirtDimension};
  height: ${shirtDimension};
  min-height: ${shirtDimension};
  max-height: ${shirtDimension};
  min-width: ${shirtDimension};
  max-width: ${shirtDimension};
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
  font-size: 14px;
`;

export const StyledPitchPlayerName = styled.div`
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 4px;
  font-size: 10px;
  white-space: nowrap;
`;

export const PitchAndSidebarContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    position: relative;
    display: block;
  }
`;

export const TitleAndPitch = styled.div`
  position: relative;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  overflow: auto;
`;

export const MenuListItem = styled.li`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  height: 70px;
  width: 70px;
  min-width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
  transition: all 250ms;
  margin-bottom: 10px;
  font-size: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const MenuListText = styled.div`
  text-transform: uppercase;
`;

export const SuccessMessage = styled.div`
  font-size: 24px;
  padding: 20px;

  div {
    margin-bottom: 80px;
    font-size: 14px;
    &:first-of-type {
      font-size: 20px;
    }
  }

  a {
    font-size: 10px;
  }
`;
