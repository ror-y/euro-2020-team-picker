import { StyledPitch } from "../styles";
import { Formation } from "../types";
import { TransitionGroup } from "react-transition-group";

export function Pitch({
  selectedFormation,
  children,
}: {
  selectedFormation: Formation;
  children: any;
}) {
  return <StyledPitch>{children}</StyledPitch>;
}
