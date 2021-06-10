import { StyledPitch } from "../styles";
import { Formation } from "../types";
import styled from "styled-components";

const lineColor = "rgb(255, 255, 255)";

const MiddleLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${lineColor};
  top: 50%;
  position: absolute;
`;

const TopBox = styled.div`
  height: 10%;
  width: 33%;
  left: 33%;
  border: 1px solid ${lineColor};
  top: -1px;
  background-color: transparent;
  position: absolute;
`;

const dimension = "100px";

const Circle = styled.div`
  border-radius: 50%;
  width: ${dimension};
  height: ${dimension};
  min-width: ${dimension};
  min-height: ${dimension};
  max-width: ${dimension};
  max-height: ${dimension};
  top: 50%;
  left: 50%;
  border: 1px solid ${lineColor};
  position: absolute;
  transform: translate(-50%, -50%);
`;

const BottomBox = styled(TopBox)`
  bottom: -1px;
  top: auto;
`;

const BottomBoxSmall = styled(TopBox)`
  bottom: -1px;
  top: auto;
  width: 15%;
  height: 4%;
  left: 50%;
  transform: translateX(-50%);
`;

const TopBoxSmall = styled(BottomBoxSmall)`
  top: -1px;
  bottom: auto;
`;

export function Pitch({
  selectedFormation,
  children,
}: {
  selectedFormation: Formation | null;
  children: any;
}) {
  return (
    <StyledPitch>
      <TopBoxSmall />
      <TopBox />
      <MiddleLine />
      <Circle />
      <BottomBox />
      <BottomBoxSmall />
      <div>{children}</div>
    </StyledPitch>
  );
}
